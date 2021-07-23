const mongoose = require('mongoose');
const dataSchema  = new mongoose.Schema({
  time :{   
    type : Date,
    default : Date.now()
  } ,

  table_name:{
      type : String,
      required : true
  },

  data1:{
      type : Number,
      required : false
  },
  data2:{
    type : Number,
    required : false
},data3:{
    type : Number,
    required : false
},data4:{
    type : Number,
    required : false
},data5:{
    type : Number,
    required : false
},data6:{
    type : Number,
    required : false
},data7:{
    type : Number,
    required : false
},data8:{
    type : Number,
    required : false
},data9:{
    type : Number,
    required : false
},data10:{
    type : Number,
    required : false
},data11:{
    type : Number,
    required : false
},data12:{
    type : Number,
    required : false
},data13:{
    type : Number,
    required : false
},data14:{
    type : Number,
    required : false
},data15:{
    type : Number,
    required : false
},
});


module.exports = dataSchema;