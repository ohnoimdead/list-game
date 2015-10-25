Template.Boards.helpers({
  'boards': function() {
    return Boards.find({}, {sort: {slug: 1}});
  }
});
