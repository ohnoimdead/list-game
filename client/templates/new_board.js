Template.NewBoard.events({
  'submit #newBoardForm': function(evt) {
    evt.preventDefault();

    UpsertBoard(evt.target);

    Router.go('/');
  }
});
