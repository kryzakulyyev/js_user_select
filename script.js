//1
for ( i in users ){
  console.log(i)
}  //Alex Asab Brook Daniel John Thomas Paul

//2
for (i in users ){
 console.log(users[i])
}

// 3
let objLeng=0
for(let i in users) {
 objLeng++
}
console.log(objLeng) //7


//4
var leng = 0;
var longest;

for(i in users){
   if(users[i].skills.length > leng){
        leng = users[i].skills.length;
       longest = i
   }
 }    
    console.log(longest); //Asab


//5
let names=0
for(i in users){
 if(users[i].points>=50){
 names++;
 }
}
console.log(names) //3


//6
let mernArr=[]
for(i in users){
 let mern=users[i].skills
 if(mern.includes('MangoDB' && "Express" && "React" && 'Node')){
   mernArr.push(i)
 }
}
console.log(mernArr.length) //2
console.log(mernArr) // [ 'Asab', 'Paul' ]


//7
users.Kasymjan = {
 email: 'kasymjan95@gmail.com',
 skills: ['HTML', 'CSS', 'JavaScript'],
 age: 25,
 isLoggedIn: false,
 points: 80,
}
console.log(users);


//8
for(let i in users) {
 users[i].getInfo = () => {
   return `${i} is ${users[i].age} years old. He knows ‘${users[i].skills.join(", ")}’.`
 }
}

console.log(users.Kasymjan.getInfo());  
//Kasymjan is 25 years old. She/He knows ‘HTML, CSS, JavaScript’.

