class IncomingController { 
    constructor(smsMessageModel) {
        this.smsMessageModel = smsMessageModel;
    }

    processMessage(req, res, next) {
        const smsMessageModel = new this.smsMessageModel({
            ToCountry: req.body.ToCountry,
            ToState: req.body.ToState,
            SmsMessageSid: req.body.SmsMessageSid,
            NumMedia: req.body.NumMedia,
            ToCity: req.body.ToCity,
            FromZip: req.body.FromZip,
            SmsSid: req.body.SmsSid,
            FromState: req.body.FromState,
            SmsStatus: req.body.SmsStatus,
            FromCity: req.body.FromCity,
            Body: req.body.Body,
            FromCountry: req.body.FromCountry,
            To: req.body.To,
            ToZip: req.body.ToZip,
            NumSegments: req.body.NumSegments,
            MessageSid: req.body.MessageSid,
            AccountSid: req.body.AccountSid,
            From: req.body.From,
            ApiVersion: req.body.ApiVersion 
        });

        console.log('try to save');
        smsMessageModel.save((err, result) => {
            if (err) {
               console.log(err);
            } else {
               console.log('saved');
            }
        });

         /*
        Status callbacks
        You can use status callbacks to have Twilio reach out to your app when the status of a message has changed.

        Status callbacks do not control application flow, so TwiML does not need to be returned; 
        however, it's recommended that you respond to status callbacks with either a 204 No Content or a 200 OK with 
        Content-Type: text/xml and an empty <Response/> in the body. Failure to respond properly will result in warnings in Debugger.
        */
        res.status(204).send('<Response/>');

        console.log( req.body );
    };    
 }
 
 module.exports = IncomingController;