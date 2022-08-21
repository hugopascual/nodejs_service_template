// Constants declaration

// Responses declaration that are exported
//-----------------------------------------------------------
//
exports.send = async (req, res) => {
  res.send('Hi!');
};

//-----------------------------------------------------------
//
exports.render = async (req, res) => {
  res.render('index', { title: 'Express' });
};

//-----------------------------------------------------------