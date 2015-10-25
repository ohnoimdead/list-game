Template.DeleteBoard.events({
  'click #confirmDelete': function() {
    Boards.remove(this._id);

    Router.go('/');
  }
});

