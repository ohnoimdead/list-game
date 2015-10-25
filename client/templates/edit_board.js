Template.EditBoard.events({
  'submit #editBoardForm': function(evt) {
    evt.preventDefault();

    UpsertBoard(evt.target);

    Router.go('/');
  }
});
