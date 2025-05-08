keyof: It primarily creates a union type from the keys of an object type.Keyof can only be used with object types or types that resemble objects.it is not applicable to primitive types.
type Vehicle = {
    bike:string 
    car:string
    ship:string
}

type Owner = keyof Vehicle

const getPropertyValue =<X,Y extends keyof X> (obj:X,key:Y) =>{
     return obj[key]
}
const user = {
    name:'Rakib',
    age:21,
    address:'Bsl'
}
const res1 = getPropertyValue(user,'name')


Union type : A union type is similar to the OR operator in JavaScript.it allows a variable to hold a value of one of several specified types.it is represented by (|)

type Job : 'Teacher' | 'Doctor'
const proffesion:Job = 'Doctor'
interface Person {
     name:string
     id:number
     gender:'Male'| 'Female'
}
const p : Person = {
     name:'Rakib',
     id:1,
     gender:Male
}

Intersection type : A intersection type works similar to the AND operator in JavaScript.It creates a new type that includes all the properties from multiple types. it is represented by (&).
type Car1 = {
       name:string
       model1:'Toyota Prado'
}
type Car2 = {
      name:string
      model2:'Toyota Hiace'
}
type Car = Car1 & Car2
const myCar : Car = {
    name:'Toyota',
    model1:'Toyota Prado',
    model2:'Toyota Hiace'

} 







