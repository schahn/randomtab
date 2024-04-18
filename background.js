/*
 * Copyright 2024 Stephen Hahn. All rights reserved.
 */

function randomTabAction(action) {
  var tab_query = {currentWindow: true};

  if (action == "select-audible") {
    tab_query.audible = true;
  }

  console.debug("action %s query %O", action, tab_query);

  browser.tabs.query(tab_query).then(value => {
    var n = value.length;
    var s = Math.trunc(Math.random() * n);

    if (n == 0) {
      console.log("no matching tabs for %s", action);
      return;
    }

    if (n == 1 && action != "select-audible") {
      /*
       * The query may return only one tab that is playing audio.  We should
       * switch to that tab.
       */
      return;
    }

    //  if (value[s].active highlightedj?

    if (action == "delete-random") {
      console.debug("deleted %O", value[s]);
      browser.tabs.remove(value[s].id);
    } else {
      // Action is select-random or select-audible.
      console.debug("selected %O", value[s]);
      browser.tabs.highlight({ tabs: value[s].index });
    }
  });
}

browser.browserAction.onClicked.addListener((tab, clickdata) => {
  if (clickdata["modifiers"].indexOf("Shift") >= 0) {
    randomTabAction("delete-random");
  } else if (clickdata["modifiers"].indexOf("Alt") >= 0) {
    randomTabAction("select-audible");
  } else {
    randomTabAction("select-random");
  }
});

browser.commands.getAll().then((commands) => {});

browser.commands.onCommand.addListener((a) => {
  console.log("accelerator");
  randomTabAction(a);
});
