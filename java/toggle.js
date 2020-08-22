var toggleKey;
var getData;
var chk;
var nowChk;

var load;

function reload() {
  location.href = location.href;
}



for (var i = 1; i <= 3; i++) {
  load = "elements" + i;

  getItem(load);
  var test = getData;

  if (test == null || test == "undefined") {
    setItem(load, true);
    // if (i == 3) reload();
  }

  if (i == 1) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch1']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch1']").prop("checked", false);
    }
  } else if (i == 2) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch2']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch2']").prop("checked", false);
    }
  } else if (i == 3) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch3']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch3']").prop("checked", false);
    }
  }
}

function readToggleKey(num, value, element) {
  toggleKey = "elements" + num;

  nowChk = value.checked;

  setItem(toggleKey, nowChk);
  getItem(toggleKey);
}

for (var i = 1; i <= 3; i++) {
  load = "panelFilter" + i;

  getItem(load);
  var test = getData;

  if (test == null || test == "undefined") {
    setItem(load, true);
    // if (i == 3) reload();
  }

  if (i == 1) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch4']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch4']").prop("checked", false);
    }
  } else if (i == 2) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch5']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch5']").prop("checked", false);
    }
  } else if (i == 3) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch6']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch6']").prop("checked", false);
    }
  }
}

function readPanelFilter(num, value) {
  toggleKey = "panelFilter" + num;

  nowChk = value.checked;

  setItem(toggleKey, nowChk);
  getItem(toggleKey);
}

for (var i = 1; i < 2; i++) {
  load = "BalloonFilter" + i;

  getItem(load);
  var test = getData;

  if (test == null || test == "undefined") {
    setItem(load, true);
    // if (i == 3) reload();
  }

  if (i == 1) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch7']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch7']").prop("checked", false);
    }
  }
}

function readBalloonFilter(num, value) {
  toggleKey = "BalloonFilter" + num;

  nowChk = value.checked;

  setItem(toggleKey, nowChk);
  getItem(toggleKey);
}

for (var i = 1; i <= 4; i++) {
  load = "characterFilter" + i;

  getItem(load);
  var test = getData;

  if (test == null || test == "undefined") {
    setItem(load, true);
    // if (i == 4) reload();
  }

  if (i == 1) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch8']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch8']").prop("checked", false);
    }
  } else if (i == 2) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch9']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch9']").prop("checked", false);
    }
  } else if (i == 3) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch10']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch10']").prop("checked", false);
    }
  } else if (i == 4) {
    if (test == "true") {
      $("input:checkbox[id='customSwitch11']").prop("checked", true);
    } else if (test == "false") {
      $("input:checkbox[id='customSwitch11']").prop("checked", false);
    }
  }
}

function readCharacterFilter(num, value) {
  toggleKey = "characterFilter" + num;

  nowChk = value.checked;

  setItem(toggleKey, nowChk);
  getItem(toggleKey);
}

for (var i = 0; i < 1; i++) {
  load = "auto" + i;

  console.log(load);

  getItem(load);
  var test = getData;
  console.log(test  );
  if (test == null || test == "undefined") {
    console.log("바보..");
    setItem(load, true);
    if (i == 0) reload();
  }

  // if (i == 0) {
    console.log(i);
    if (test == "true") {
      console.log("true");
      $("input:checkbox[id='customSwitch0']").prop("checked", true);
    } else if (test == "false") {
      console.log("false");
      $("input:checkbox[id='customSwitch0']").prop("checked", false);
    }
  // }
}

function readAutoKey(num, value) {
  console.log(num);
  toggleKey = "auto" + num;

  nowChk = value.checked;

  setItem(toggleKey, nowChk);
  getItem(toggleKey);
}

function setItem(key, value) {
  localStorage.setItem(key, value);
}

function getItem(value) {
  getData = localStorage.getItem(value);
}
