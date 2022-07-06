// Constants declaration

// Responses declaration that are exported
exports.home = async (req, res) => {
  res.render('index', { title: 'Express' });
};
