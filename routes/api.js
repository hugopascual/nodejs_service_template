const express = require('express');
const router = express.Router();

// GET Home page
router.get('/',function (req, res) {
    res.send('API NOT IMPLEMENTED')
});

//-----------------------------------------------------------

// Route path not found.
router.all('*', function(req, res, next) {

    var err = new Error('API NOT IMPLEMENTED');
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