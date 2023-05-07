const express = require('express');
const userController = require("../controllers/userController");
const mailController = require("../controllers/mailController");
const authController = require("../controllers/authController");

const router = express.Router();

router
    .route('/:id/label')
    .put(mailController.updateMailLabal)

router
    .route('/:id/trash')
    .delete(mailController.deleteMail2)    

router
    .route('/:id/restore')   
    .patch(mailController.restoreMail) 

router
    .route('/:id/force')
    .delete(mailController.deleteMailForce)
    
router
    .route('/')
    .post(mailController.createMail)
    .get(mailController.getAllMails)
    
router
    .route('/:id')
    .get(mailController.getOneMail)
    .put(mailController.updateMail)
    .delete(mailController.deleteMail);

    
module.exports = router;