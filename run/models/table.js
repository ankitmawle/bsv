const mongoose = require('mongoose');
const tableSchema  = new mongoose.Schema({
  rollno :{
      type  : String,
      required : true
  } ,
  table_name:{
      type : String,
      required : true
  },
  api :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now()
},
fields:{
    type: Number,
    default :1
}
});
const Table= mongoose.model('table',tableSchema);

module.exports = Table; 