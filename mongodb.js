// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne( { 
    //     _id: ObjectID('5d81d61d850f4c7aa82bec61')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then( (result) => {
    //     console.log(result)
    // })
    // .catch( (error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany( { 
    //     completed: false 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then ( (result) => {
    //     console.log(result.modifiedCount)
    // }).catch ( (error) => {
    //     console.log(error)
    // }) 

    // db.collection('users').deleteMany( {
    //     age: 31
    // }).then( (result) => {
    //     console.log(result)
    // }).catch( (error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Task 2'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})