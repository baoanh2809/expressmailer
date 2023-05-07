/* eslint-disable */
import '@babel/polyfill';
import { showAlert } from './alert';
import { login, logout, signup, forgotPassword , resetPassword } from './login';
import { updateSettings } from './updateSetting';
import { updateMail , updateDraftMail, updateMailStarted ,updateMailImportant, DeleteTrash, RestoreTrash,updateMailRead } from './updateMail.js';
import { createMail, deleteMail} from './createMail';
import { updateMailMoveStarted,updateMailMoveImportant, updateMailUnread  } from './remove';
import { check } from 'prettier';


// console.log(socket);

const loginForm = document.querySelector('.form--login');
const forgotPasswordForm = document.querySelector('.forgot-password-form');
const resetPasswordForm = document.querySelector('.reset-password-form');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const updateMailForm = document.querySelector('.form-mail-send');
const draftMail = document.querySelector('.close');


const emailList = document.querySelectorAll('.emailList')
for(let i = 1; i<= 50;i++)
{     
    let clickable = document.getElementById(`email${i}`)    
    let menu = document.getElementById(`menu${i}`)   
    let outClick = document.getElementById(`out-click${i}`)    
    if(clickable){
      clickable.addEventListener('contextmenu',async(e)  => {
          e.preventDefault()
          menu.style.top = `${e.clientY}px`
          menu.style.left = `${e.clientX}px`
          menu.classList.add('show')
          outClick.style.display = "block"
        })
    }
    if(outClick){
      outClick.addEventListener('click', () => {
        menu.classList.remove('show')
        outClick.style.display = "none"
      })
    }   
    }


if(updateMailForm){
  updateMailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const id = document.getElementById('id').value;
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;
    await updateDraftMail(id, to,  subject, content);
  });
}

if (draftMail) {
  draftMail.addEventListener('click', async (e) => {
    e.preventDefault();   
    const id = document.getElementById('id').value;
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;
    console.log(content.length)
    if(!to && !subject && content.length == 1){
      await deleteMail(id);
    }
    else{
      await updateMail(id, to, subject, content);
    }
  });
}


const newEmail = document.getElementById('newEmail');
if(newEmail){
  newEmail.addEventListener('click', async (e) => {
    e.preventDefault();
    await createMail();
  });
}


if (resetPasswordForm) {
  resetPasswordForm.addEventListener('submit',async (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const token = document.getElementById('token').value;
     if (passwordConfirm !== password) {
      showAlert('error', 'Password is not same');
      return;
     } else {
        await resetPassword(password,passwordConfirm,token);
    }
  });
}

if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    forgotPassword(email)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const deleteBtn = $('.emailList')
  if(deleteBtn){
    deleteBtn.dblclick(function(e)  {
      e.preventDefault();      
      const id = $(this).data('id');
      location.assign('/mails/' + id)
    })
  }
 
},true)

document.addEventListener('DOMContentLoaded', function() {
  var startedId;
  var checkstarted 
  var addStarted = $('.btn-add-started');
  addStarted.click(function(e) {
    e.preventDefault();   
     startedId = $(this).data('id');
     checkstarted = $(this).data('change')
     console.log(startedId);
      console.log(checkstarted);
    if(checkstarted =="started")
    {
      updateMailStarted(startedId);
    }
    if(checkstarted =="re-started")
    {
      updateMailMoveStarted(startedId);
    }
    if(checkstarted =="important")
    {
      updateMailImportant(startedId);
    }   
    if(checkstarted =="re-important")
    {
      updateMailMoveImportant(startedId);
    }
    if(checkstarted =="delete")
    {
      DeleteTrash(startedId);
    }
    if(checkstarted =="restore")
    {
      RestoreTrash(startedId);
    }
    if(checkstarted =="force")
    {
      deleteMail(startedId);
    }
    if(checkstarted =="read")
    {
      updateMailRead(startedId);
    }
    if(checkstarted =="re-read")
    {
      updateMailUnread(startedId);
    }
  })
},true);

document.addEventListener('DOMContentLoaded', function() {
  var eventId;
  var deleteBtn = $('.btn-delete-event');
  deleteBtn.click(function(e) {
    e.preventDefault();
    var eventId = $(this).data('id');
    deleteEvent(eventId);
  });
});


//delegation
if (loginForm) {
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    console.log(userName, password)
    await login(userName, password);
  });
}
if (logOutBtn) {
  logOutBtn.addEventListener('click', logout, false);
} 

if (userDataForm) {
  userDataForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-settings').textContent = 'Updating...'
    const photoTest = document.getElementById('photo').files[0];
  
    if (photoTest == undefined) {
      const form = new FormData();
      form.append('name', document.getElementById('name').value);
      // form.append('email', document.getElementById('email').value);
      form.append('photo', document.getElementById('photoCover').value);
      form.append('address', document.getElementById('address').value);
      form.append('phone', document.getElementById('phone').value);
      form.append('nation', document.getElementById('nation').value);
      await updateSettings(form, 'data');
  } else {
      const form = new FormData();
      form.append('name', document.getElementById('name').value);
      // form.append('email', document.getElementById('email').value);
      form.append('photo', document.getElementById('photo').files[0]);
      form.append('address', document.getElementById('address').value);
      form.append('phone', document.getElementById('phone').value);
      form.append('nation', document.getElementById('nation').value);
      await updateSettings(form, 'data');
    }
  });
}
if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    if (passwordCurrent === password) {
      showAlert('error', 'Password is not same');
      return;
    }
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );
    document.querySelector('.btn--save-password').textContent = 'Save Password';
    userPasswordForm.reset();
  });
}
//bookBtn response dataset

//signup
if (signupForm) {
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('name1').value;
    const userName = document.getElementById('email1').value;
    const phone = document.getElementById('phone').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    // console.log(name, email1, phone, password1, password2)
    await signup(name, userName, phone, password1, password2);
  });
}

