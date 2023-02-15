E.showMessage("My\nSimple\nApp","LearnHelper")

var lastBtn;
setWatch(function() {
  if (lastBtn && lastBtn.time > getTime() - 1) {
    // Ignore duplicate presses within 1 second
    return;
  }
  lastBtn = {
    time: getTime(),
    btn: "side"
  };
  // Code to go back to home screen
  g.reset(); // Clear the screen
  Bangle.drawWidgets(); // Redraw the widgets
}, BTN1, {repeat:true});