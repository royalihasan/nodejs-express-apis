const mongoose=require("mongoose")
const mongoURI="mongodb://localhost:27017/iNoteBook";
const connectToMongo=()=>{
mongoose.connect(mongoURI,()=>{
    console.log("connected to db sucessfully....")

})
}
module.exports=connectToMongo;