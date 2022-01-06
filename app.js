// require yargs
const yargs = require("yargs");

// require Commands
const xCommand = require("./studentCommands");

// yargs Commands
// Add
yargs.command({
  command: "add",
  describe: "add student data",
  builder: {
    id: {
      describe: "This is the Student ID Number",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "This is the Student Name",
      demandOption: true,
      type: "string",
    },
    grades: {
      describe: "This is the Student Grades",
      demandOption: true,
      type: "array",
    },
  },
  handler: (x) => {
    xCommand.addStudent(x.id, x.name, x.grades);
  },
});

// Delete
yargs.command({
  command: "delete",
  describe: "Delete Student Data",
  builder: {
    id: {
      describe: "This is the Student ID Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    xCommand.delStudent(x.id);
  },
});

// Read
yargs.command({
  command: "read",
  describe: "Read Student Data",
  builder: {
    id: {
      describe: "This is the Student ID Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    xCommand.rStudent(x.id);
  },
});

// List
yargs.command({
  command: "list",
  describe: "List Students Data",
  handler: () => {
    xCommand.lStudent();
  },
});

yargs.parse();
