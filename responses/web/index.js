// Constants declaration

// Responses declaration that are exported
//-----------------------------------------------------------
// GET /
exports.home = async (req, res) => {
  res.render('index', { title: 'Express' });
};

//-----------------------------------------------------------