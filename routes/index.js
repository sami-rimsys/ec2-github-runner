const router = require('express').Router();
const { authenticate } = require('../middlewares/auth');
const {testInfo} = require("../controller/testController");

const loginRouter = require("./login");
const adminRouter = require('./admin');
const employeeRouter = require('./employee');
const companyRouter = require('./company');

router.get('/details',testInfo)
router.use('/login', loginRouter);
router.use('/admin',authenticate, adminRouter);
router.use('/employee', authenticate, employeeRouter);
router.use('/company',authenticate, companyRouter);

module.exports = router;