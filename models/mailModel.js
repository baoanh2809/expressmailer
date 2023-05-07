const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const mailSchema = new mongoose.Schema({
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    subject:{
        type: String,
    },
    content:{
        type: String,
    },
    important:{
        type:String,         
        default: 'no'
    },
    started:{
        type:String,         
        default: 'no'
    },
    drafts:{
        type:String,         
        default: 'yes'
    },
    read:{
        type:String,
        default: 'no'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mailSchema.plugin(mongoose_delete,{deletedAt : true}, {overrideMethods: 'all'}  )

const Mail = mongoose.model('Mail', mailSchema);
module.exports = Mail;