const students_dal = require('./dals/students_dal')
const assert = require('assert')

describe('Testing students dal', () => {
    it('test get students', async () => {
        // ARRANGE
        await students_dal.delete_table();
        await students_dal.create_table();        
        await students_dal.insert_students5();

        // ACT
        const result = await students_dal.get_all_students();

        // ASSERT
        assert.strictEqual(result.status, 'success')
        assert.strictEqual(result.data.length, 5)
        // this is how to check object fields

        assert.deepStrictEqual(result.data[0], {
            id: 1,
            name: 'Arya Stark',
            age: 18,
            email: 'arya.stark@example.com',
            city: 'Winterfell'
          })

          students_dal.data_base.destroy()
    })
    
    // add test for insert
    // call add and then get by id and then assert the result of the get
})

