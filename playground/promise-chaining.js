require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5d826d26b367921b9d0318a9', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Function to work with the promise-based API
const updateAgeAndGetCount = async (id, newAge) => {
    const user = await User.findByIdAndUpdate(id, {age: newAge})
    const count = await User.countDocuments({age: newAge})
    return count
}

// Call our async function
updateAgeAndGetCount('5d826d26b367921b9d0318a9', 1).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log('Error', e)
})