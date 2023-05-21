const dbConnect=require('mongodb');

const insertData=()=>{
    let data=dbConnect();
    console.log(data)
}

insertData();