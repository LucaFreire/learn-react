use("aula1")

// select all
db.CarsWithValue.find()

// like a select with filter filter
db.CarsWithValue.find({ price: {} })

// and operator
db.people.find({ $and: [{ name: 'Civicão2' }, { color: 'Gray' }] })

// $eq: equals
// $gt: greather than
// $gte: greather than or equals
// $in: in
// $lt: lower than
// $lte: lower than or equals
// $ne: not equals
// $nin: not in

const array = [
    {
        name: "Gol2",
        color: "Red",
        price: 1000
    },
    {
        name: "Civicão2",
        color: "Gray",
        price: 2000
    }
]
// insert many 
db.CarsWithValue.insertMany(array)

// updateOne (only the first)
db.CarsWithValue.updateOne(
    { color: "Red Alterado" },
    { $set: { colorrr: "Red Alterado" } }
)

// updateMany
db.CarsWithValue.updateMany(
    { color: "Red Alterado" },
    { $set: { colorrr: "Red Alterado" } }
)

// deleteOne (only the first)
db.CarsWithValue.deleteOne({
    name: /n/ // you can use rejex (return all the values that includes n)
})

// deleteMany 
db.CarsWithValue.deleteMany({
    name: /n/
})
