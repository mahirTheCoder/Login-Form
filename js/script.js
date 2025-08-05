// ---------fisrt step constractor er data push method a neyar jonno array creat 
const addConstarctorData = [];


// -----------sceond step constructor functions 
function studentINfo(name, roll, id, clas, age, shift) {

  this.name = name;
  this.roll = roll;
  this.id = id;
  this.class = clas;
  this.age = age;
  this.sfift = shift;

  this.UserdataCatch = function () {

    return `         <div class="showStudent">
              <p>Studdent name: ${this.name}</p>
              <p>Roll: ${this.roll}</p>
              <p>I'D: ${this.roll}</p>
              <p>Class: ${this.clas} </p>
              <p>Age: ${this.age}</p>
              <p>Shift: ${this.shift}</p>
          </div>`;

  }

}


// -------------------button a click korle result show korbe 

function handlebutton (){
  let name = document.querySelector('.name')
  let Roll = document.querySelector('.Roll')
  let Id = document.querySelector('.Id')
  let Class = document.querySelector('.Class')
  let Age = document.querySelector('.Age')
  let Shift = document.querySelector('.Shift')







  
}