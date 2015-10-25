UpsertBoard = function(formTarget) {
  var board = {};

  board.name = formTarget.boardName.value;
  board.slug = formTarget.boardName.value.toLowerCase().replace(/\ /g, '_'); // this is far too naive
  board.firstCategoryName = formTarget.firstCategoryName.value;
  board.secondCategoryName = formTarget.secondCategoryName.value;

  board.category1 = [];
  board.category2 = [];

  for(var i = 1; i <= 30; i++) {
    board.category1.push(formTarget['firstCategory' + i].value);
    board.category2.push(formTarget['secondCategory' + i].value);
  }

  Meteor.call('upsertBoard', board);
};
