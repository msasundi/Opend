const User = require("../models/Users")
const Opens = require("../models/Opens")
const Clicks = require("../models/Clicks")

const util = require('util');


const moment = require('moment')
const strtotime = require('strtotime')
var dateFormat = require('dateformat');
var now = new Date();
  
exports.getEmailSentCount = async (id) => 
{
  // console.log('date came finally')

  // let _d1 = moment(id.params).format('YYYY-MM-DD');

  // console.log(_d1);

let newArr = new Array(24).fill(0)
  
let _d = moment().format('YYYY-MM-DD');
// console.log(_d)
let _arr = newArr.map(async (data1,i) =>
{
  let _start = (strtotime(`${_d} ${i}:00:00`));
  let _end = (strtotime(`${_d} ${i+1}:00:00`));
  // console.log(_start);
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


exports.getOpensClicks11 = async () => {
  let sum =[];
  let count_all =[];
  let _d = moment().format('YYYY-MM-DD');
  
  let total_send = await Opens.aggregate([
    {
      $match : {priority: 1}
    },{
      "$group": {
        "_id": {email: "$priority"},
        count: { $sum : 1 }
      }
      
    }
  ]).exec();
  
  // return total_send;
  
   let newArr = new Array(24).fill(0)
   let _arr = newArr.map(async (data1,i) =>{
    let _start = (strtotime(`${_d} ${i}:00:00`));
    let _end = (strtotime(`${_d} ${i+1}:00:00`));
    // console.log(_start);
    let data = await Opens.aggregate([
    {
      $match: {
      priority : 1,
      $and: [{
        timestamp: {
      $gt: (_start)
      }
      }, {
        timestamp: {
      $lt: (_end)
      }
      }]
      }
      },
      {
      "$group": {
      "_id": {email: "$delivery_type"},
      count: { $sum : 1 }
      }
      
      },{
        '$project':{
          _id:0,
          count:1
      }

}
]).exec()
.then((docs) =>( {data: docs.reduce((data, index)=>{
  return index.count;
  },0) })).catch()

  return data;
})


count_all = Promise.all(_arr).then((values)=>{
  sum = values.map(value => Object.values(value)[0])
  console.log(total_send);
  // console.log(total_send / sum.reduce((a,b) => {return a + b; }));
 return  total_send / sum.reduce((a,b) => {return a + b; })
  // return sum;
})

// return total_send /count_all.reduce((a,b) => {return a + b;})
// console.log(count);


return count_all;
}


exports.getTotal_sent = () => new Promise((resolve, reject) =>{
  const total_send = Opens.aggregate([
    {
      $match : {priority: 1}
    },{
      "$group": {
        "_id": {email: "$priority"},
        count: { $sum : 1 }
      }
      
    }
  ]);

  total_send.then((doc) => {

    resolve(doc.length ? doc[0].count : 0)

  }).catch(reject)

})


exports.getOpens = (search) => new Promise((resolve, reject) => {

  let _d = moment().format('YYYY-MM-DD');
  let _start = '';
  let _end = ''

  for(var i =0 ; i < 1; i++){
     _start = (strtotime(`${_d} ${i}:00:00`));
     _end = (strtotime(`${_d} ${i+24}:00:00`));
  }



  const execQuery = Opens.aggregate([
    {
      $match: {
      priority : 1,
      $and: [{
        timestamp: {
      $gt: (_start)
      }
      }, {
        timestamp: {
      $lt: (_end)
      }
      }]
      }
      },
   {
    $count: 'count'
  }])

  execQuery.then((doc) => {

    resolve(doc.length ? doc[0].count : 0)

  }).catch(reject)

})

exports.getClicks = (search) => new Promise((resolve, reject) => {

  let _d = moment().format('YYYY-MM-DD');
  let _start = '';
  let _end = ''

  for(var i =0 ; i < 1; i++){
     _start = (strtotime(`${_d} ${i}:00:00`));
     _end = (strtotime(`${_d} ${i+24}:00:00`));
  }



  const execQuery = Clicks.aggregate([
    {
      $match: {
      priority : 1,
      $and: [{
        timestamp: {
      $gt: (_start)
      }
      }, {
        timestamp: {
      $lt: (_end)
      }
      }]
      }
      },
   {
    $count: 'count'
  }])

  execQuery.then((doc) => {

    resolve(doc.length ? doc[0].count : 0)

  }).catch(reject)

})



exports.getEmailmainCount = (search) => new Promise((resolve, reject) => {

  let _d = moment(search).format('YYYY-MM-DD');
  let _start = '';
  let _end = ''

  for(var i =0 ; i < 1; i++){
     _start = (strtotime(`${_d} ${i}:00:00`));
     _end = (strtotime(search.params));
  }

  const execQuery = User.aggregate([
    {
      $match: {
      status : 0,
      $and: [
      //   {
      //   send_time: {
      // $gt: (_start)
      // }
      // },
       {
        send_time: {
      $lt: (_end)
      }
      }]
      }
      },
      {
        "$group": {
          "_id": {email: "$campaign_id"},
          count: { $sum : 1 }
        }
        
      },{
        $project:{
          _id:0,
          count:1
        }
      }
   ])


   execQuery

  execQuery.then((doc) => {
      // data :docs 
      resolve(doc)
     
    }).catch(reject)

})



// exports.getEmailmainCount = async (id) => 
// {
//   let _d1 = moment(id).format('YYYY-MM-DD');
//   let newArr = new Array(24).fill(0)
//   let _d = moment().format('YYYY-MM-DD');
//   let _arr = newArr.map(async (data1,i) =>
//   {
//     let _start = (strtotime(`${_d} ${i}:00:00`));
//     let _end = (strtotime(`${_d} ${i+1}:00:00`));
//     let data = await User.aggregate([
//     {
//       $match: {
//       $and: [{
//           send_time: {
//               $gt: (_start)
//             }
//           }, {
//           send_time: {
//               $lt: (_end)
//             }
//           }]
//       }
//     },
//     {
//       "$group": {
//           "_id": {email: "$status"},
//           count: { $sum : 1 }
//       }
//     },
// {
//   '$project':{
//     _id:0,
//     count:1
//   }

// }
// ]).exec().then((docs) =>( {time_z :moment(new Date(_start * 1000)).format("H:m"), data: docs.reduce((data, index)=>{
//   return index.count;
//   },0) })).catch()
// return data;
// })
// return _arr;
// }






  