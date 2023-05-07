import { showAlert } from "./alert";
import axios from 'axios';

export const updateMail = async (id, to, subject, content) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}`,
            data:{
                to,
                subject,
                content
            }
        });
        if (res.data.status === 'success') {
                       
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}



export const updateDraftMail = async (id, to, subject, content) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}`,
            data:{
                to,
                subject,
                content,
                drafts: 'no'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);
            showAlert('success', 'Mail Send Successfully');          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}

export const updateMailStarted = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                started: 'yes'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}



export const updateMailImportant = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                important: 'yes'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}

export const DeleteTrash = async (data) => {
    try{
        const res = await axios({
            method: 'Delete',
            url: `http://localhost:3000/api/v1/mail/${data}/trash`,
        });
        if (res) {            
            showAlert('success', 'Mail Remove Trash Successfully');
            location.reload(true);                      
        }
    }
    catch (err) {
        showAlert('error', err.response.data.message);
    }   
}

export const RestoreTrash = async (data) => {
    try{
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:3000/api/v1/mail/${data}/restore`,
        });
        if (res) {            
            showAlert('success', 'Mail Restored Successfully');
            location.reload(true);                      
        }
    }
    catch (err) {
        showAlert('error', err.response.data.message);
    }   
}

export const updateMailRead = async (id) => {
    try {
        const res = await axios({
            method: 'PUT',
            url: `http://localhost:3000/api/v1/mail/${id}/label`,
            data:{
                read: 'yes'
            }
        });
        if (res.data.status === 'success') {
            location.reload(true);          
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
}