let moorthi={
    "name":"Moorthi",
    "age": "28",
    "hight":"160",
    "weight":"60"
    }
   
    const moorthiarray = Object.entries(moorthi);
    moorthiarray.forEach(([key,value])=>{
    console.log(key+": "+value)
    })