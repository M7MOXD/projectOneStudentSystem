// require File System
const fs = require("fs");

// Command Functions
// Add
const addStudent = (id, name, grades) => {
  const studentsObj = loadData();
  const dublicatedID = studentsObj.filter((xID) => xID.id === id);
  if (dublicatedID.length === 0) {
    let total = 0;
    grades.forEach((x) => (total += x));
    studentsObj.push({
      id,
      name,
      grades,
      total,
    });
    saveData(studentsObj);
    console.log("Data has been added Successfully");
  } else {
    console.log("error: Dublicated ID");
  }
};

// Delete
const delStudent = (id) => {
  const studentsObj = loadData();
  const dataToKeep = studentsObj.filter((xID) => xID.id !== id);
  if (dataToKeep.length !== studentsObj.length) {
    saveData(dataToKeep);
    console.log("Data has been deleted Successfully");
  } else {
    console.log("error: Data not Found");
  }
};

// Read
const rStudent = (id) => {
  const studentsObj = loadData();
  const rData = studentsObj.find((xID) => xID.id === id);
  if (rData) {
    console.log(rData.name, rData.grades, rData.total);
  } else {
    console.log("error: Data not Found");
  }
};

// List
const lStudent = () => {
  const studentsObj = loadData();
  if (studentsObj.length !== 0) {
    studentsObj.forEach((el) => console.log(el.name, el.grades, el.total));
  } else {
    console.log("error: no Data to Display");
  }
};

// General Functions
// Load Data
const loadData = () => {
  try {
    const dataBuffers = fs.readFileSync("studentsData.json");
    return JSON.parse(dataBuffers);
  } catch (e) {
    return [];
  }
};

// Save Data
const saveData = (x) => {
  const studentsJson = JSON.stringify(x);
  fs.writeFileSync("studentsData.json", studentsJson);
};

// Export Commands
module.exports = {
  addStudent,
  delStudent,
  rStudent,
  lStudent,
};
