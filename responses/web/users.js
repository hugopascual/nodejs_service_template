// Constants declaration

//-----------------------------------------------------------
// GET /login
exports.loginForm = async (req, res) => {
    res.render('loginForm', { title: 'Express' });
};

//-----------------------------------------------------------