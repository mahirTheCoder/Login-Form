

// ---------first step: array to store data
const addConstarctorData = [];

// ---------second step: constructor function
function studentINfo(name, roll, id, clas, age, shift) {
  this.name = name;
  this.roll = roll;
  this.id = id;
  this.clas = clas;
  this.age = age;
  this.shift = shift;

  this.UserdataCatch = function() {
    return `
      <div class="showStudent">
        <p>Student name: ${this.name}</p>
        <p>Roll: ${this.roll}</p>
        <p>I'D: ${this.id}</p>
        <p>Class: ${this.clas}</p>
        <p>Age: ${this.age}</p>
        <p>Shift: ${this.shift}</p>
      </div>
    `;
  }
}

// ফাংশন: সব ইনপুট ফিল্ডের বর্ডার রিসেট করতে
function resetInputBorders() {
  const inputs = document.querySelectorAll('.login-form input');
  inputs.forEach(input => {
    input.style.border = ''; // ডিফল্ট বর্ডার স্টাইল ফিরিয়ে আনে
  });
}

// -------------------button click handler
function handlebutton() {
  const nameInput = document.querySelector('.name');
  const rollInput = document.querySelector('.Roll');
  const idInput = document.querySelector('.Id');
  const clasInput = document.querySelector('.Class');
  const ageInput = document.querySelector('.Age');
  const shiftInput = document.querySelector('.Shift');

  const name = nameInput.value;
  const roll = rollInput.value;
  const id = idInput.value;
  const clas = clasInput.value;
  const age = ageInput.value;
  const shift = shiftInput.value;

  // ---------------error handling
  if(!name || !roll || !id || !clas || !age || !shift) {
    // শুধু খালি ফিল্ডে রেড বর্ডার যোগ করবে
    if(!name) nameInput.style.border = '2px solid red';
    if(!roll) rollInput.style.border = '2px solid red';
    if(!id) idInput.style.border = '2px solid red';
    if(!clas) clasInput.style.border = '2px solid red';
    if(!age) ageInput.style.border = '2px solid red';
    if(!shift) shiftInput.style.border = '2px solid red';
    
    return;
  }

  // সব ঠিক থাকলে বর্ডার রিসেট করবে
  resetInputBorders();

  // ----------------add data to array
  const newUserData = new studentINfo(name, roll, id, clas, age, shift);
  addConstarctorData.push(newUserData);
  
  printAllData();
}





















// ------------------print all data
function printAllData() {
  let resultBox = document.querySelector('.resultBox');
  let noStudentMsg = document.getElementById('noStudentMsg');
  
  // Remove "no student founded" message
  if(noStudentMsg) {
    noStudentMsg.remove();
  }

  resultBox.innerHTML = '<h2>List Of Students</h2>';

  // -------------------print all data from array
  addConstarctorData.forEach(user => {
    resultBox.innerHTML += user.UserdataCatch();
  });

  // Clear input fields
  document.querySelector('.name').value = '';
  document.querySelector('.Roll').value = '';
  document.querySelector('.Id').value = '';
  document.querySelector('.Class').value = '';
  document.querySelector('.Age').value = '';
  document.querySelector('.Shift').value = '';
}