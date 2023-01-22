// // variables
// // CamelCase   textContent
// var x = 1;
// let y = 1;
// let z = x + y ;
// console.log('x + y = ' + z)


// let rr;
// console.log( rr

// )

// let yy = null
// console.log (
//     yy

// )

// //bool > true/false

// let bool = true
// console.log(bool)

// let array =[1,2, 'abc',true]
// console.log(array)

// const car = {type:"Tesla", model:"Model 3 Performence", color:" Color Red" }
// console.log (car.type , car.model , car.color) 

// // lipire text

// console.log('AR' + 84 + 'RZW')

// // Schimba Din 1 in 2 de ex

// console.log(document.getElementById('title'))
// document.getElementById('title').textContent = "Goodbye"

// // operatori 

// // + - / *
// // % 

// console.log(21%2 )

// // Operatori logici 

// // egalitate adk ==
// console.log(1==1) //true
// console.log (1==2) //false

// // marime
// console.log(1<2) //true
// console.log(2<2) // false
// console.log(2<=2) //true ( <= / => este :  mai mare/mic sau egal cu )
// console.log(1!=2) //true (1 diferit de 2 " !=" adk diferit)

// console.log(true) // true
// console.log(!true) // false

// console.log(!(1>0)) //false 1>0 este adevarat dar daca e ! infata e opusul lui

// // and &&

//console.log(1>0 && 10>5) //true
//console.log(1>2 && 10>5) //false ambele trebuie sa fie adevarate ca sa se bage adevarat 
//console.log(!(1>2 && 10>5)) //true deoarece are " ! " inainte ceea ce inseamna ca trebuie sa fie opus

// // or ( || )

// console.log(1==1 || 1>2 ) // true deoarece prima e ok
// console.log(1!=1 || 1>2)  //false are ! infata 

// let aee=5 ,bee=10
// // Daca am mentionat aee mai sus si l-am definit nu ne mai lasa asa ca
// a=5
// b=10
// function add(m,n) {
// console.log (m+n) // trebuie sa ne deie 15
//     return m+n;

// }



// Nu se va executa singur asa ca ne trebuie ba un buton ba ceva ca un
// add()

// de cate ori rulam codul de atatea ori va aparea mesajul 

const minInOra = 60
const secInMin = 60
const zileInAn = 365

function secundeInOra(ora) {
  let minute = ora * minInOra;
  return minute * secInMin;   
}

function varstaInSecunde(varsta){
    let secInAn = secundeInOra(24) * zileInAn;
    return secInAn * varsta;
}

function calc() {
    let v = document.getElementById("varsta").value;
       document.getElementById("title").textContent = varstaInSecunde(v)
}

let nume=['mihai','ana','alex']

for(let i=0;i<nume.lenght;i++){
    console.log(nume[i])

}

let abc=[1,2,3,4,[1,2,3,4,5,6],[1,2,3,4,5,6,7,8,9,10],[9,8,7,6,5,4,3,2,1]]