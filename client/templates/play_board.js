Template.PlayBoard.helpers({
  'fixIndex': function(index) {
    return index + 1;
  },
  'dealWithBlanks': function(val) {
    if(val) return val;
    return Spacebars.SafeString('&nbsp;');
  },
  'getRandomValues': function(board) {
    if(board === null) return;

    var randIndex = [],
        shuffledValues = [];

    for(var i = 0; i < 60; i++) {
      randIndex.push(i);
    }

    // Suffle the index array
    for(var j, x, i = randIndex.length; i; j = Math.floor(Math.random() * i), x = randIndex[--i], randIndex[i] = randIndex[j], randIndex[j] = x);

    for(var i = 0; i < 60; i++) {
      var thisRandIndex = randIndex[i],
          categoryNumber = 1;

      if(thisRandIndex >= 30) {
        categoryNumber = 2;
        thisRandIndex -= 30;
      }

      shuffledValues.push(board['category' + categoryNumber][thisRandIndex]);
    }

    return shuffledValues;
  }
});

Template.PlayBoard.events({
  'click .board-space': function(evt) {
    var target = $(evt.target);

    if(target.hasClass('right-area')) {
      if(target.hasClass('team-a-highlight')) {
        target.removeClass('team-a-highlight');
        target.addClass('team-b-highlight');
      }
      else if(target.hasClass('team-b-highlight')) {
        target.removeClass('team-b-highlight');
      }
      else {
        target.addClass('team-a-highlight');
      }

      return;
    }

    if(!target.hasClass('board-space')) {
        target = $(evt.target.parentElement);
    }

    if(target.find('.space-overlay').is(':visible')) {
      target.find('.space-value').show();
      target.find('.space-overlay').hide();
      target.addClass('team-a');
    } else {
      // cycle through the various states for the cell
      if(target.hasClass('team-a')) {
        target.removeClass('team-a');
        target.addClass('team-b');
      }
      else if(target.hasClass('team-b')) {
        target.removeClass('team-b');
        target.addClass('contested');
      }
      else if(target.hasClass('contested')) {
        target.removeClass('contested');
        target.addClass('team-a');
      }
    }
  }
});
