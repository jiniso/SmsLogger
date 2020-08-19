const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const smsMessageModel = new Schema({    
    createdOn: {
        type: Date,
        default: Date.now
    },
    ToCountry: {
        type: String
    },
    ToState: {
        type: String
    },
    SmsMessageSid: {
        type: String
    },
    NumMedia: {
        type: String
    },
    ToCity: {
        type: String
    },
    FromZip: {
        type: String
    },
    SmsSid: {
        type: String
    },
    FromState: {
        type: String
    },
    SmsStatus: {
        type: String
    },
    FromCity: {
        type: String
    },
    Body: {
        type: String
    },
    FromCountry: {
        type: String
    },
    To: {
        type: String
    },
    ToZip: {
        type: String
    },
    NumSegments: {
        type: String
    },
    MessageSid: {
        type: String
    },
    AccountSid: {
        type: String
    },
    From: {
        type: String
    },
    ApiVersion: {
        type: String
    }    
}); 

module.exports = mongoose.model('SmsMessage', smsMessageModel);
