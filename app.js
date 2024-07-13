const yargs = require("yargs");
const data10 =require("./data10")

/* start of add command */ 
yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is he last name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
  data10.addPerson(x.id,x.fname,x.lname,x.city,x.age)
  },
});

/* End of add command */ 

/* start of delete command */ 
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x)=>{
        data10.deleteData(x.id)
    }
})

/* end of delete command */

/* start of read command */ 
yargs.command({
    command:"read",
    describe:"to read an item",
    handler:(x)=>{
        data10.readData(x.id)
    }
})
yargs.parse()
/* end of read command */

/* start of list command */ 
yargs.command({
    command:"list",
    describe:"to list an item",
    handler:(x)=>{
        data10.list()
    }
})
yargs.parse()
/* end of list command */