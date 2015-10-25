Template.DeleteBoard.events({
  'click #confirmDelete': function() {
    Meteor.call('deleteBoard', this.slug);

    Router.go('/');
  }
});

