/* eslint-disable */
import { showAlert } from './alert';
import axios from 'axios';


export const login = async (userName,password) => {
    console.log(userName,password);
    try{
        const res = await axios({
          method: 'POST',
          url: `http://localhost:3000/api/v1/users/login`,
          data: {
            userName,
            password
          }
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Logged in successfully!');
            window.setTimeout(() => {
              location.assign('/');
            }, 1500);
        }
    }
    catch(err) {
        showAlert('error', err.response.data.message);
     }
  };
  // exports func logout
export const logout = async () => {
    try{
        const res = await axios({
          method: 'GET',
          url: `http://localhost:3000/api/v1/users/logout`
        });
      if ((res.data.status = 'success')) {
        showAlert('success', 'logout success');
      
        window.setTimeout(() => {
          location.assign('/');
        }, 3000);
      }
       } 
    catch(err) {
        showAlert('error', 'login failed, please try again');
     }
}
//const signup
export const signup = async (name,userName,phone,password,passwordConfirm) => {
    try{
        const res = await axios({
          method: 'POST',
          url: `http://localhost:3000/api/v1/users/signup`,
          data: {
            name,
            userName,
            phone,
            password,
            passwordConfirm
          }
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Signup success');
            window.setTimeout(() => {
              location.assign('/');
            }, 1500);
        } else {
            showAlert('error', res.data.message);
        }
    }
    catch(err) {
        showAlert('error', err.response.data.message);
     }
}

export const forgotPassword = async (email) => {
    try{
        const res = await axios({
          method: 'POST',
          url: `http://localhost:3000/api/v1/users/forgotPassword`,
          data: {
            email
          }
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Email Sent!!Please check your Email!');
            window.setTimeout(() => {
              location.assign('/');
            }, 1500);
        } else {
            showAlert('error', res.data.message);
        }
    }
    catch(err) {
        showAlert('error', err.response.data.message);
     }
}

export const resetPassword = async (password, passwordConfirm, token) => {
    try{
        const res = await axios({
          method: 'PATCH',
          url: `http://localhost:3000/api/v1/users/resetPassword/${token}`,
          data: {
            password,
            passwordConfirm,
          }
        });
        if (res.data.status === 'success') {
            showAlert('Your Password Was Changed', 'Password Changed Successfully!');
            window.setTimeout(() => {
              location.assign('/');
            }, 1500);
        } else {
            showAlert('error', res.data.message);
        }
    }
    catch(err) {
        showAlert('error', err.response.data.message);
     }
}