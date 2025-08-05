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


// ---------------error handleing 

if(!name.value || !Roll.value || !Id.value || !Class.value || !Age.value || !Shift.value){
  // alert('click hocche')
   name.style.border = '2px solid red'
   Roll.style.border = '2px solid red'
   Id.style.border = '2px solid red'
   Class.style.border = '2px solid red'
   Age.style.border = '2px solid red'
   Shift.style.border = '2px solid red'


  //  setTimeout(()=>{
  //  name.style.border = ''
  //  Roll.style.border = ''
  //  Id.style.border = ''
  //  Class.style.border = ''
  //  Age.style.border = ''
  //  Shift.style.border = ''
  //  },2000)
   return;
}

// ----------------constractor fun er data push a add kora 

const newUserData = new studentINfo(name, roll, id, clas, age, shift);
 addConstarctorData.push(newUserData);

printAllData()

}

// ------------------data print hwr functions 


