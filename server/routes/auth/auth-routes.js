const express = require('express');
const {registerPatient,loginPatient,authMiddleware,logout} = require('../../controllers/auth/auth-controller');

const router = express.Router();

router.post('/register',registerPatient);
router.post('/login',loginPatient);
router.get('/check-auth',authMiddleware,(req,res) => {
    return res.status(200).json({
        success:true,
        message:'Authenticated',
        user:req.user
    })
});
router.post('/logout',logout);

module.exports = router;