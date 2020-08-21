require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d82977ea9d5c8a5af479b48').then((task) => {
//     console.log(task)
//     return Task.countDocuments(( { completed: false }))
// }).then((numDocs) => {
//     console.log(numDocs)
// }).catch((e) => {
//     console.log(e)
// })



// Async function to work with a promise-based API

const deleteAndGetRemaining = async (id) => {
    const deleted = await Task.findByIdAndDelete(id)
    if (!deleted) {
        throw new Error('Could not delete item') 
    }
    
    const count = await Task.countDocuments({ completed: false })
    return count
}



// Call async function and do something with returned promise
deleteAndGetRemaining('5d826e86699ced256cb77e1c').then((numRemaining) => {
    console.log(numRemaining)
}).catch((e) => {
    console.log('Error: ', e)
})