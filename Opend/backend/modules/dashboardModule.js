const User = require("../models/Users")
const Opens = require("../models/Opens")
const moment = require('moment')

// const mongoose_send = require("../config/db_send");
// const mongoose_db7 = require("../config/db_opens_clicks");

exports.addIndustry = (data, id) => new Promise((resolve, reject) => {

  User.create(data).then((doc) => {
  
      resolve(doc && id ? doc._id : doc)
  
    }).catch(reject)
  
  })
  
  exports.getIndustry = (data, id) => new Promise((resolve, reject) => {
  

  //   const startDate = moment(new Date()).subtract(7, 'days').utc('+5.30').startOf('day')
  //   .unix()
  // const endDate = moment(new Date()).startOf().utc('+5.30').endOf('day')
  //   .unix()

    for(var i= 0;i< 24; i++){
      const startDate = moment(new Date()).subtract(7, 'days').add(i, 'hours').unix();
      const endDate = moment(new Date()).add(i + 1, 'hours').unix();

    console.log("date check")
    console.log(startDate);
    console.log(endDate);
    User.aggregate([{
      $match: {
        $and: [{
          send_time: {
            $gte: startDate
          }
        }, {
          send_time: {
            $lte: endDate
          }
        }]
      }
    },
    {
      "$group": {
        "_id": {email: "$campaign_id"},
        dups: { $addToSet: moment(new Date()).add(i, 'hours').toISOString()} ,
        // count: { $sum : 1 }
        }

    }]).then((docs) => resolve({ data: docs })).catch(reject)

    }
    
    // User.find(data).then((doc) => {
  
    //   resolve(doc && id ? doc._id : doc)
  
    // }).catch(reject)
  
  })