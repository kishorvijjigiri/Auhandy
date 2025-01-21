var name1="jhon"
var name2="nick"
var value1= 80
var value2=45
console.log(name1,value1)
console.log(name2,value2)
var a=50

if(a>=51){
    console.log(a+"passed")
}else{
    console.log(a+"fail")
}
if(value1>50 && value2>50){
    console.log( name1 , name2+ " both are passed and markes are "+ value1 ,value2)
}else if(value1>50 && value2<=50){
    console.log(name1 +" is passed and markes is"+value1)
}else if(value1<=50 && value2>50){
    console.log(name4 +"is passed and markes is"+value2)
}else{
    console.log(name1, name2 + " both are failed and markes are "+ value1 ,value2)
}



// function results(name, marks){
//   var passIIT = 75
//   var passEmcet = 65

//   if(marks >= passIIT){
//     console.log(name + " has qualifid IIT with " + marks + " Marks")
//   }else if(marks >= passEmcet){
//     console.log(name + " has qualifid Emcet with " + marks + " Marks")
//   }else{
//     console.log(name + " has failed")
//   }
// }
// results("Deva", 80)
// results("Kishore", 70)
// results("Ramya", 90)
// results("Vinay", 80)

// function results(movie, rating){
//   var hit = 7
//   var average = 5

//   if(rating >= hit){
//     console.log(movie + " hit with " + rating + " rating")
//   }else if(rating >= average){
//     console.log(movie + " average with " + rating + " rating")
//   }else{
//     console.log(movie + " flop")
//   }
// }
// results("skanda", 8)
// results("jawan", 6)
// results("jailer", 5)
// var sum=function(x,y){
//   console.log(x+y)
// }
// sum(4,3)
// sum(4,3)
// function sum(x,y){
//   console.log(x+y)
// }
// var names=["kishor","kiran","hi","hello"]
// console.log(names)
// console.log(names.length )
// console.log(names[2])
// names.push("sai")
// console.log(names)
// names.unshift("sai")
// console.log(names)
// names.pop()
// console.log(names)
// names.shift()
// console.log(names)
// names.splice(1,3)
// console.log(names)
// names.splice(1,3,"hemanth")
// console.log(names)
// var arr=[100,200,300,400,500]
// var res=arr.find((ele)=>{
//   return ele > 300;
// })
// console.log(res)
// var arr=[100,200,300,400,500]
// var res=arr.filter((ele)=>{
//   return ele > 300;
// })
// console.log(res)
// var arr=[100,200,300,400,500]
// var res=arr.findIndex((ele)=>{
//   return ele > 300;
// })
// console.log(res)
// var arr=[1,2,3,4,5,6]
// var res=arr.map((ele)=>{
//   return ele*ele;
// })
// console.log(res)
// let arr=["one","two","three","one","four","five","one","six","one"]
// console.log(arr.indexOf("one",4))
// console.log(arr.lastIndexOf("one",5))
// console.log(arr.includes("one"))
// console.log(arr.includes("on"))
// var arr1=[100,200,300,400,500]
// var res=arr1.reduce((acc,cur)=>{
//   return acc+cur;
// })
// console.log(res)
// var app = ["Apple","Banana","Mango","Orange","fineApple","grapes"]

// for(var i = 0; i<app.length ; i++){
//     if(app[i] === "Mango"){
//         console.log(app[i] + " is my favorite Fruit")
//         continue;
//     }
//     console.log(app[i])
// }

let students=[
    {name:"john",score1:47,score2:46},
    {name:"Bob",score1:23,score2:24},
    {name:"Nick",score1:40,score2:35},
    {name:"Alex",score1:44,score2:45}
              ];
                
let passinglimits=[91,81,71,61,51];
let degres=["A","B","C","D","E"];
              
function sum(score1,score2){
console.log(score1+score2)
              }
sum(47,46)
sum(23,24)
sum(40,35)
sum(44,45)
for(i=0;i<students.length-1;i++){
if (sum>51){
    console.log(students.name[i] + "got grade e")
}
else if(sum>61){
  console.log(students.name[i] + "got grade d")  
}
else if(sum>71){
  console.log(students.name[i] + "got grade c")  
}
else if(sum>81){
  console.log(students.name[i] + "got grade b")  
}
else if(sum>91){
  console.log(students.name[i] + "got grade a")  
}
else{
    console.log(students.name[i] + "failed") 
}
}