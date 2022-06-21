const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
const insectus = contacts.filter(contact => contact.company === "INSECTUS")
// console.log(insectus)

//2. an array all of the contacts, with only the name property
const names = contacts.map(element => {
    const obj = {}
    obj.name = element.name
    return obj
})
// console.log(names)

//3. an array of all of the contacts over the age of 50
const over50 = contacts.filter(contact => contact.age > 50)
// console.log(over50)

//4. the first ten contacts when alphabetically ordered by name
const sorted = contacts.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1
    if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1
    return 0
}).slice(0, 11)
// console.log(sorted)

//5. the oldest person's name
const ageSorted = contacts.sort((a, b) => a.age - b.age).slice(-1)
// console.log(ageSorted)

//6. the contact id with the name Isabella Burke
const isabella = contacts.find(contact => contact.name === "Isabella Burke")
// console.log(isabella.id)


//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const splitNames = contacts.map(contact => {
    contact.firstName = contact.name.split(" ")[0]
    contact.lastName = contact.name.split(" ")[1]
    return contact
})
// console.log(splitNames)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const newFriends = contacts.map(contact => {
    const newFriendArray = []
    for(const friend of contact.friends){
        const newFriend = contacts.find(element => element.id === friend)
        newFriendArray.push(newFriend.name)
    }
        contact.friends = newFriendArray
        return contact
    }
)
// console.log(newFriends)


//9. the average age of the contacts

let totalAge = 0
for (const contact of contacts){
    totalAge += contact.age
}

const averageAge = totalAge / contacts.length
// console.log(averageAge)

//10. the median age of the contacts
const ageSorted2 = contacts.sort((a, b) => a.age - b.age)
console.log(ageSorted2)

const median = ageSorted2[ageSorted2.length / 2].age
console.log(median)