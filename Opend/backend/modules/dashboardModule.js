const User = require("../models/Users")
const Opens = require("../models/Opens")
const Clicks = require("../models/Clicks")

const moment = require('moment')
const strtotime = require('strtotime')
var dateFormat = require('dateformat');
var now = new Date();
  
exports.getEmailSentCount = async (id) => 
{
  let newArr = new Array(24).fill(0)
  
let _d = moment().format('YYYY-MM-DD');
console.log(_d)
let _arr = newArr.map(async (data1,i) =>
{
  let _start = (strtotime(`${_d} ${i}:00:00`));
  let _end = (strtotime(`${_d} ${i+1}:00:00`));
  console.log(_start);
  let data = await User.aggregate([
{
$match: {
$and: [{
send_time: {
$gt: (_start)
}
}, {
send_time: {
$lt: (_end)
}
}]
}
},
{
"$group": {
"_id": {email: "$status"},
count: { $sum : 1 }
}

},
{
  '$project':{
    _id:0,
    count:1
  }

}
]).exec().then((docs) =>( {time_z :moment(new Date(_start * 1000)).format("H:m"), data: docs.reduce((data, index)=>{
  return index.count;
  },0) })).catch()
return data;
})
return _arr;
}




exports.getOpensClicks = async (id) => 
{
  let newArr = new Array(24).fill(0)
  
let _d = moment().format('YYYY-MM-DD');
console.log(_d)
let _arr = newArr.map(async (data1,i) =>
{
  let _start = (strtotime(`${_d} ${i}:00:00`));
  let _end = (strtotime(`${_d} ${i+1}:00:00`));
  console.log(_start);
  let data = await User.aggregate([
{
$match: {
$and: [{
send_time: {
$gt: (_start)
}
}, {
send_time: {
$lt: (_end)
}
}]
}
},
{
"$group": {
"_id": {email: "$status"},
count: { $sum : 1 }
}

},
{
  '$project':{
    _id:0,
    count:1
  }

}
]).exec().then((docs) =>( {time_z :moment(new Date(_start * 1000)).format("H:m"), data: docs.reduce((data, index)=>{
  return index.count;
  },0) })).catch()
return data;
})
return _arr;
}

  