Boards = new Mongo.Collection('boards');

Meteor.methods({
  upsertBoard: function(board) {
    Boards.update({slug: board.slug}, board, {upsert: true});
  },
  deleteBoard: function(boardName) {
    Boards.remove({slug: boardName});
  }
});

if(Meteor.isServer) {
  Meteor.startup(function() {
    Boards._ensureIndex({name: 1}, {unique: 1});
  });
}
