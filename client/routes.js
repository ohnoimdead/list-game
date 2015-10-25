Router.route('/', function() {
  this.layout('NotPlayingLayout');
  this.render('Boards');
});

Router.route('/new_board', function() {
  this.layout('NotPlayingLayout');
  this.render('NewBoard');
});

Router.route('/delete/:_id', function() {
  this.layout('NotPlayingLayout');
  this.render('DeleteBoard', {
    data: function() {
      return Boards.findOne({_id: this.params._id});
    }
  });
});

Router.route('/edit/:_id', function() {
  this.layout('NotPlayingLayout');
  this.render('EditBoard', {
    data: function() {
      return Boards.findOne({_id: this.params._id});
    }
  });
});

Router.route('/play/:_id', function() {
  this.layout('PlayingLayout');
  this.render('PlayBoard', {
    data: function() {
      return Boards.findOne(this.params._id);
    }
  });
});
