import { showAlert } from "./alert";
import axios from 'axios';

export const updateMailMoveStarted = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                started: 'no'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}

export const updateMailMoveImportant = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                important: 'no'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}

export const updateMailUnread = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                read: 'no'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}