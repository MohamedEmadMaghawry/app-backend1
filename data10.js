const fs = require("fs");

// start of add
const addPerson = (id, fname, lname, city, age) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicatedData.length==0) {
allData.push({ id: id, fname: fname, lname: lname, city: city, age: age });
    saveAlldata(allData);
  }
  else{
    console.log("error duplicated data")
  }
};
// end  of add

// start of delete

const deleteData=(id)=>{
    const allData=loadData()
    const dataTokeep=allData.filter((obj)=>{
        return obj.id !== id
    })
    saveAlldata(dataTokeep)
}




// end of delete


// start of read
const readData=(id)=>{
    const allData=loadData()
    const readElement=allData.find((obj)=>{
        return obj.id===id
    }
    )
if(readElement){
    console.log(readElement)
}
else{
    console.log("id needed not found")
}
}

// End of read

// start of list

const list=()=>{
    const allData=loadData()
    allData.forEach((obj)=>{
       console.log(obj.fname,obj.city)
    })

}

// End of list



// load data function
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};
//save data function
const saveAlldata = (allData) => {
  const dataStore = JSON.stringify(allData);
  fs.writeFileSync("data10.json", dataStore);
};

// export functions

module.exports = {
  addPerson,deleteData,readData,list
};
