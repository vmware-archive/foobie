
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Foobar | Home', bodyid: 'home'  });
};

exports.how = function(req, res){
  res.render('how', { title: 'Foobar | How', bodyid: 'how'  });
};

exports.gallery = function(req, res){
  res.render('gallery', { title: 'Foobar | Gallery', bodyid: 'gallery' });
};