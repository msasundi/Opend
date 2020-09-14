var mongoose = require('mongoose')
var conn2 = mongoose.createConnection('mongodb://db2:Dum_twip8@db2opend.tech-active.com:5006/opend_campaigndb2',{ useNewUrlParser: true ,useUnifiedTopology: true });

var Schema = new mongoose.Schema({
    inserted_sent_id: {
        type: String,
        required: true
    },
    encrypted_email: {
    type: String,
    required: true
  },
  email_domain_id: {
    type: Number,
    required: true
  },
  encoding_type: {
    type: Number,
    required: true
  },
  campaign_id: {
    type: Number,
    required: true
  },
  campaign_email_content_id: {
    type: String,
    required: true
  }
  ,
  batch_inserted_id: {
    type: Number,
    required: true
  },
  email_from_name: {
    type: String,
    required: true
  },
  email_to: {
    type: String,
    required: true
  },
  vertical_type: {
    type: Number,
    required: true
  },
  advertiser_id: {
    type: Number,
    required: true
  },
  
  category_id: {
    type: Number,
    required: true
  },
  publisher_id: {
    type: Number,
    required: true
  },
  publisher_price_per_mail: {
    type: Number,
    required: true
  },
  advertiser_price_per_mail: {
    type: Number,
    required: true
  },
  pulisher_discount: {
    type: Number,
    required: true
  },
  advertiser_discount: {
    type: Number,
    required: true
  },
  contact_id: {
    type: Number,
    required: true
  },
  campaign_mode: {
    type: String,
    required: true
  },
  mail_token: {
    type: String,
    required: true
},
  absplit_config_sub_con_ids: {
    type: Number,
    required: true
  },
  cost_type: {
    type: String,
    required: true
  },
  publisher_cost_type: {
    type: String,
    required: true
  },
  email_deliverability: {
    type: Number,
    required: true
  },
  white_list_flag: {
    type: Number,
    required: true
  },
  opend_age: {
    type: Number,
    required: true
  },
  opend_loc: {
    type: String,
    required: true
  },
  opend_region: {
    type: String,
    required: true
  },

  opend_town: {
    type: String,
    required: true
  },
  opend_unsubscribe_link: {
    type: String,
    required: true
  },
  opend_outsource_link: {
    type: String,
    required: true
  },
  opend_gender: {
    type: String,
    required: true
  },
  opend_campaign_type: {
    type: String,
    required: true
  },
  insert_status: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  send_time: {
    type: Number,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  status_flag: {
    type: String,
    required: true
  }


},{collection : "opend_campaign_send_full" })

var model2 = conn2.model('opend_campaign_send_full', Schema);

module.exports = Opens = model2