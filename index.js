
const express = require("express")

const app = express()

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> {
    console.log("started live server") 
    console.log(`live server is now running on port ${PORT}`)
})

const students = [
    { "name": "Alice", "age": 30, "occupation": "Engineer" },
    { "name": "Bob", "age": 25, "occupation": "Designer" },
    {"name": "Welter", "age": 32, "occupation": "student"},
    {"nmae": "Wisdom", "age": 27, "occupation": "programmer"}
    ]

const programming_languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "React", "C", "Flutter"]

const ages =  [1, 3, 7, 42, 99,34,78,89,54,21]

app.get("/students",  (request, response)=>{
    response.json(students)

})

app.get("/programming_language",  (request, response)=>{
    response.json(programming_language)

})

app.get("/ages",  (request, response)=>{
    response.json(ages)

})

console.log(students)
console.log (ages)
console.log(programming_languages)




