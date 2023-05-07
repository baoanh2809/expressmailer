const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/userModel');
const Mail = require('../models/mailModel');
const Wedding = require('../models/weddingModel');
const bridesmaids = require('../models/bridesmaidsModel');
const path = require('path');
const catchAsync = require('../utils/catchAsync');
const Templates = require('../models/templatesModel');
const Contact = require('../models/contactModel');
const AppError = require('../utils/appError');


exports.getStartedPage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('startedpage', {
    title: 'Get Started Page',
    mails
  });
})

exports.getImportantPage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('importantpage', {
    title: 'Important Page',
    mails
  });
})

exports.getTrashPage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('trashpage', {
    title: 'Trash Page',
    mails
  });
})

exports.getDraftsPage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('draftspage', {
    title: 'Drafts Page',
    mails
  });
} )

exports.getSendPage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('sendpage', {
    title: 'Send Page',
    mails
  });
})

exports.getSigIn = catchAsync(async (req, res, next) => {
  res.status(200).render('signin', {
    title: 'Log into your account'
  });
});
// getSignup
exports.getSignup = (req, res) => {
  res.status(200).render('signup', {
    title: 'Đăng ký tài khoản - #'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.getAccountSecurity = catchAsync(async (req, res, next) => {
  res.status(200).render('user-password', {
    title: 'Account security'
  });
});


exports.updateUserData = catchAsync(async (req, res, next) => {
  console.log(req.body)
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id, {
      photo: req.body.photo,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      nation: req.body.nation
  },
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).redirect('/user/me');
});

exports.stored = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).render('stored', {
    title: 'Stored Users',
    users
  });
});


exports.getHompage = catchAsync(async (req, res, next) => {
  const mails = await Mail.find();
  res.status(200).render('homepage', {
    title: 'ExpressMailer',
      mails, 
  });	
});


exports.getReset = catchAsync(async (req, res, next) => {
  const users = req.params.token;
  // console.log('123')
  // console.log(req.params.token);
  // res.status(200).json({
  //   users
  // });
  res.status(200).render('resetPassword', {
    title: 'Reset your password',
    users   
  });
});

exports.getForgotPassword = catchAsync(async (req, res, next) => {
  res.status(200).render('forgotPassword', {
    title: 'Forgot Password'
  });
}
)

exports.getDetailMail = catchAsync(async (req, res, next) => {
  const mail = await Mail.findById(req.params.id);
  res.status(200).render('detailmail', {
    title: 'Detail Mail',
    mail
  });
})