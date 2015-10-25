UpsertBoard = function(formTarget) {
  var board = {};

  board.name = formTarget.boardName.value;
  board.lowerName = formTarget.boardName.value.toLowerCase();
  board.firstCategoryName = formTarget.firstCategoryName.value;
  board.secondCategoryName = formTarget.secondCategoryName.value;

  board.category1 = [];
  board.category2 = [];

  for(var i = 1; i <= 30; i++) {
    board.category1.push(formTarget['firstCategory' + i].value);
    board.category2.push(formTarget['secondCategory' + i].value);
  }

  Boards.update(formTarget.boardId.value, board, {upsert: true});
};
