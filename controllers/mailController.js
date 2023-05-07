const Mail = require('../models/mailModel');
const User = require('../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllMails = factory.getAll(Mail);
exports.getOneMail = factory.getOne(Mail);
exports.createMail = catchAsync(async (req, res, next) => {
    const id = req.user.userName;
    const checkUser = User.find({userName: req.body.to})
    if(checkUser){
        const newMail = await Mail.create({
            from: id,
            to: req.body.to,
            subject: req.body.subject,
            content: req.body.content
        });
        res.status(201).json({
            status: 'success',
            data: {
                mail: newMail
            }
        });
    }else{
        return next(new AppError('User not found', 404));
    }
})
exports.deleteMail = catchAsync(async (req, res, next) => {
    const deleteOne = await Mail.findByIdAndDelete({_id:req.params.id});
    if(!deleteOne){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: deleteOne
    });
})

exports.deleteMail2 = catchAsync(async (req, res, next) => {
    const deleteOne = await Mail.delete({_id:req.params.id});
    if(!deleteOne){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: deleteOne
    });
})

exports.updateMailLabal = catchAsync(async (req, res, next) => {
    const updateMail = await Mail.findByIdAndUpdate(req.params.id,req.body);
    if(!updateMail){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(201).json({
        status: 'success',
        data: {
            mail: updateMail
        }
    });
})

exports.updateMail = catchAsync(async (req, res, next) => {
    const id = req.user.userName;
    const checkUser = User.find();
    if(checkUser.userName === req.body.to || id != req.body.to){
        const newMail = await Mail.findByIdAndUpdate(req.params.id,req.body);
        res.status(201).json({
            status: 'success',
            data: {
                mail: newMail
            }
        });
    }else{
        return next(new AppError('User not found Or You can\'t send to yourself', 404));
    }
})

exports.restoreMail = catchAsync(async (req, res, next) => {
    const restore = await Mail.restore({_id:req.params.id});
    if(!restore){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: restore
    });
})

exports.deleteMailForce = catchAsync(async (req, res, next) => {
    const deleteOne = await Mail.findByIdAndDelete({_id:req.params.id});
    if(!deleteOne){
        return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: deleteOne
    });
})