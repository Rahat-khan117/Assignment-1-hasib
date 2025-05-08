function formatString(input:string, toUpper?:boolean):string{
    if( toUpper === true ){
       return input.toUpperCase()
    }
   
    else{
        return input.toLowerCase()
    }
}
 formatString('Hasib',true)
 





 function filterByRating(items:{title:string; rating:number}[]):{title:string,rating:number}[]{
      
      return  items.filter((r =>r.rating >= 4.00))

        
 } 
 const books = [
    {title:'Book A', rating:4.5},
    {title:'Book B', rating:3.2},
    {title:'Book C', rating:5.0},
    {title:'Book D', rating:4.6}

]
  filterByRating(books)
 



 function concatenateArrays<T>(...arrays:T[][]):T[]{
    return arrays.flat()
}
concatenateArrays()




class Vehicle {
    private  make : string
     private year:number 
      constructor(make:string,year:number){
        this.make = make
        this.year = year
      }
     getInfo(){
        return `this is ${this.make} and release Year:${this.year}`;

     }

 } 

 class Car extends Vehicle {
    private model:string
    constructor(make:string,year:number,model:string){
        super(make,year)
        this.model = model
    }
    getModel(){
        return `this is new Model:${this.model}`;
    }
 }
 const myV = new Vehicle ('Toyota',2020)
 const myCar = new Car('Hp',2022,'Pavilion')
 myV.getInfo()
 myCar.getModel()

 

 function processValue(value:string | number){
    if(typeof value === 'string'){
        return value.length
    }
    if(typeof value === 'number'){
        return value*2
    }
} 

type Product = {
     name:string
     price:number
}

function getMostExpensiveProduct(products:Product[]):Product | null {
    if(products.length === 0){
         return null;
    }
    let hightsPrice = products[0]
    for(let i = 1; i < products.length; i++){
        if(products[i].price > hightsPrice.price){
            hightsPrice = products[i]
        }
    }
    return hightsPrice;

}
const products1 = [
   {name:'Pen',price:10},
   {name:'Notebook',price:25},
   {name:'Bag',price:50}
]
getMostExpensiveProduct(products1)

      

      async function  squareAsync(n:number):Promise<number> {
        return new Promise ((resolve,reject)=>{
          
      setTimeout(()=>{
       if(n < 0){
           reject(new Error ('Negative numbers are not allowed'))
        }
        else{
           resolve(n*n)
        }

      },3000)
           
            
        }) 
     }
