// try - catch handle Error

// function showMessage(arr){
//     console.log(arr.join(" "))
// }
// try{
//     showMessage(["Benita","Saro"])
//     showMessage(22)
// }catch(error){
//     console.log("Please try later")
// }

// console.log("Continue")

// Map =>create new obj-key:value ES6 data structure & has order

// const data=new Map();
// data.set("name","Benita").set({age:22},true).set([1,2,3],false);
// data.set("name","Benita")
// data.set({age:22},true)
// data.set([1,2,3],false)
// console.log(data)    

// const data=new Map([["name","Benita"],[{age:22},true],[[1,2,3],false]]);
// console.log(data)

// Methods

// const data=new Map();
// data.set("name","Benita")
// data.set({age:22},true)
// data.set([1,2,3],false)

// const result=data.get("name");
// const result=data.size;
// const result=data.delete("name");
// const result=data.has("age");
// const result=data.clear();

// const result=data.keys();
// const result=data.values();
// const result=data.entries();

// console.log(result);
// console.log(data);

// Iteration | loops

// const keys=data.keys();
// console.log(keys)
// for(const key of keys){
//     console.log(key)
// }   

// const values=data.values();
// console.log(values)
// for(const value of values){
//     console.log(value)
// }

// const entries=data.entries();
// console.log(entries)
// for(const entry of entries){
//     console.log(entry)
// }

// data.forEach((value,key)=>{
//     console.log(value)
//     console.log(key)
//    // console.log(key,value)
// })

// Set => create new Array but not have order

// const mySet = new Set([1,2,3,"Ali",[40,50]]);
// mySet.add("Benita");
// console.log(mySet);

// Methods of Set 
// const result=mySet.has(1);
// const result=mySet.size;
// const result=mySet.delete("Ali");
// const result=mySet.clear();
// console.log(result);

// Iteration
// const values=mySet.values();
// console.log(values)

// for(const value of values){
//     console.log(value)
// }

// mySet.forEach((value)=> console.log(value));

// Chalenge: remove dublicates in an Array

// const myArray=[1,1,2,2,3,4,5,5,5,6,6,7,7,];

// const newSet=new Set(myArray);
// const newArray=[...newSet];
// console.log(newSet);
// console.log(newArray);

// const newArray=[...new Set(myArray)];
// console.log(newArray);

// Symbol new data type from ES6 & primitive. Symbol is unique

// const mySymbol=Symbol();
// const mySymbol2=Symbol("Benita");
// console.log(mySymbol);
// console.log(mySymbol2);
// console.log(mySymbol2.description);

// const age=Symbol("age");

// const data={
//     name:"Benita",
//     lastName:"fatzamnia",
//     [age]:10 //hidden property
// }
// console.log(Object.keys(data));

//or

// for(const i in data){
//     console.log(i);
// }

// Shared Symbol .for()

// const sym1 = Symbol("age");
// const sym2 = Symbol("age");
// console.log(sym1===sym2);

//But
// const sym1 = Symbol.for("age");
// const sym2 = Symbol.for("age");
// console.log(sym1===sym2);

// const newData={name:"Saro"};

// const addAge=()=>{
//     const age=Symbol.for("age");
//     newData[age]=15;
// }
// addAge();
// const age2 = Symbol.for("age");
// console.log(newData[age2]);
// console.log(newData);