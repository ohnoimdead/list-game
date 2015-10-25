Template.Boards.helpers({
  'boards': function() {
    return Boards.find({}, {sort: {lowerName: 1}});
  }
});
