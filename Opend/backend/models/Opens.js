var mongoose = require('mongoose')

var conn2 = mongoose.createConnection('mongodb://db7:majebDic5Ot&@db7opend.tech-active.com:5006/opend_opens_clicks',{ useNewUrlParser: true ,useUnifiedTopology: true });

var Schema = new mongoose.Schema({
    campaign_id: { type: Number },
    campaign_mode : {type : String},
    advertiser_id: {type: Number},
    publisher_id: {type: Number},
    contact_id: {type: Number},
    opend_age: {type: Number},
    opend_location: {type: String},
    flag: {type: Number},
    opend_gender: {type: String},
    campaign_email_content_id: {type: String},
    opend_absplit_config_sub_con_ids: {type: Number},
    openrate_clickrate_urls_id : {type : String}, 
    actual_urls: {type: String},
    converted_url: {
        type: String
    },
    mail_token: {
        type: String
    },
    ip: {
        type: String
    },
    user_agent: {
        type: String
    },
    created: {
        type: String
    },
    location: {
        type: String
    },
    device_os: {
        type: String
    },
    delivery_type: {
        type: String
    },
    timestamp: {
        type: Number
    },
    open_duration: {
        type: Number
    },
    priority: {
        type: Number
    },

    email_domain_id: {
        type: String
    },
    white_list_flag: {
        type: String
    },
    status_flag: {
        type: String
    },
    status_details: {
        type: String
    }
},{collection : "opend_campaign_open_full" })

var model1 = conn2.model('opend_campaign_open_full', Schema);


module.exports = Opens = model1

// Opens.find({ }, function (err, docs) { 
//     if (err){ 
//         console.log(err) 
//     } 
//     else{ 
//         console.log("Result : ", docs); 
//     } 
// }); 
