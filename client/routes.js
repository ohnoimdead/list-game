Router.route('/', function() {
  this.layout('NotPlayingLayout');
  this.render('Boards');
});

Router.route('/new_board', function() {
  this.layout('NotPlayingLayout');
  this.render('NewBoard');
});

Router.route('/delete/:slug', function() {
  this.layout('NotPlayingLayout');
  this.render('DeleteBoard', {
    data: function() {
      return Boards.findOne({slug: this.params.slug});
    }
  });
});

Router.route('/edit/:slug', function() {
  this.layout('NotPlayingLayout');
  this.render('EditBoard', {
    data: function() {
      return Boards.findOne({slug: this.params.slug});
    }
  });
});

Router.route('/play/:slug', function() {
  this.layout('PlayingLayout');
  this.render('PlayBoard', {
    data: function() {
      return Boards.findOne({slug: this.params.slug});
    }
  });
});
