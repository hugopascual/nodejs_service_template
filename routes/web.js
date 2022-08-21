const express = require('express');
const router = express.Router();

const usersRes = require('../responses/web/users');
const indexRes = require('../responses/web/index');

//-----------------------------------------------------------
// Home
router.get('/', indexRes.home);

//-----------------------------------------------------------
// Users
router.get('/login', usersRes.loginForm)

//-----------------------------------------------------------

// Route path not found.
router.all('*', function(req, res, next) {

    var err = new Error('Direcction Not Found');
    err.status = 404;
    next(err);
});

//-----------------------------------------------------------

// Error
router.use(function(err, req, res) {

    var emsg = err.message || "Internal Server Error";

    console.log(emsg);

    res.status(err.status || 500)
        .send({error: emsg})
        .end();
});

//-----------------------------------------------------------

module.exports = router;

//-----------------------------------------------------------