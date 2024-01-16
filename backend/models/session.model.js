const mongoose = require('mongoose');
const db = require("../config/db");
const { Schema } = mongoose;



const SessionSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"users"
    },
    docId:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"doc"
    },
    title:{
        type:String,
        default:""
    },
    desc:{
        type:String,
        require:true,
    },
    time:{
        type: String,
        
    },
    date:{
        type: String,
        default:[]
    },
    status:{
        type:String,
        default: "Upcoming"
    },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

SessionSchema.pre('save', async function(next) {
   
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

SessionSchema.pre('findOneAndUpdate', function(next) {

    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
    // Hash the password
    
});


const sessionModel = db.model('sessions',SessionSchema);

module.exports = sessionModel;