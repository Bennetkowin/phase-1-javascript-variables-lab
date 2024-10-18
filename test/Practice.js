const people = [
  {"id": 1,
    "name": 'Kev',
    "age": 24
  }

  {"id": 3,
    "name": 'Ken',
    "age": 32
  },

  {"id": 2,
    "name": 'Kinuthia',
    "age": 24
  }

]
people.forEach(function(person){
  console.log(person.name)  'Kev', 'Ken', 'Kinuthia'
})
const products = [100, 200, 20000]
let sum = 0
products.forEach(function x(item){
  sum += item
})
//mapping creates a new copy of your existing array
console.log(sum) 2300

products.map(function a(item){
  console.log(item + item) 200, 400, 4000
})
//Filter-changes the array based on the output/condition
