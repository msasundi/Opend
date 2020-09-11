const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    campaign_id: {
        type: Number,
        required: true
    },

    openrate_clickrate_urls_id: {
        type: Number,
        required: true
    },

    publisher_id: {
        type: Number,
        required: true
    },

    advertiser_id: {
        type: Number,
        required: true
    },

    contact_id: {
        type: Number,
        required: true
    },

    opend_age: {
        type: Number,
        required: true
    },

    opend_location: {
        type: String,
        required: true
    },


    opend_gender: {
        type: String,
        required: true
    },

    campaign_email_content_id: {
        type: String,
        required: true
    },

    opend_absplit_config_sub_con_ids: {
        type: Number,
        required: true
    },

    actual_urls: {
        type: String,
        required: true
    },

    mail_token: {
        type: String,
        required: true
    },

    flag: {
        type: Number,
        required: true
    },

    delivery_type: {
        type: Number,
        required: true
    },

    ip: {
        type: String,
        required: true
    },

    user_agent: {
        type: String,
        required: true
    },

    created: {
        type: String,
        required: true
    },

    converted_url: {
        type: String,
        required: true
    },

    timestamp: {
        type: Number,
        required: true
    },

    device_type: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    priority: {
        type: Number,
        required: true
    },

    selected_status: {
        type: Number,
        required: true
    },
    email_domain_id: {
        type: String,
        required: true
    },
    white_list_flag: {
        type: String,
        required: true
    },
    status_flag: {
        type: String,
        required: true
    },
    status_details: {
        type: String,
        required: true
    }



    

},{collection : "opend_campaign_click_full" });

mongoose.createConnection('mongodb://db7:majebDic5Ot&@db7opend.tech-active.com:5006/opend_opens_clicks',{ useNewUrlParser: true ,useUnifiedTopology: true });

module.exports = Clicks = mongoose.model("opend_campaign_click_full", UserSchema);