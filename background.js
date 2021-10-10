/*
 * Copyright 2021 Stephen Hahn. All rights reserved.
 */

function randomTabAction(action) {
  browser.tabs.query({currentWindow: true}).then(value => {
    var n = value.length;
    var s = Math.trunc(Math.random() * n);

    if (n == 1) {
      return;
    }

    //  if (value[s] // is this tab?  is already highlightedj?

    if (action == "select") {
      console.log("selected \"" + value[s].title + "\"");
      browser.tabs.highlight({ tabs: [s] });
    } else {
      /* delete */
      console.log("deleted \"" + value[s].title + "\"");
      browser.tabs.remove(value[s].id);
    }
  });
}

browser.browserAction.onClicked.addListener((tab, clickdata) => {
  if (clickdata["modifiers"].indexOf("Shift") >= 0) {
    randomTabAction("delete");
  } else {
    randomTabAction("select");
  }
});

browser.commands.getAll().then((commands) => {});

browser.commands.onCommand.addListener(() => {
  console.log("accelerator");
  randomTabAction("select");
});
