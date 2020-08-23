var data;

for (var i = 1; i <= 2; i++) {
  var modeName = sessiongetItem("mode1");
  var fileName = data;
  fileName += i;
  if (i == 1) {
    for (var j = 1; j <= 3; j++) {
      if (j == 1) {
        sessiongetItem(fileName);
        var getName = data;

        if (data == null || data == "undefined") {
          sessionsetItem("panel1", 1);
          sessiongetItem("panel1");
        } else {
          sessiongetItem("panel1");
        }
      } else if (j == 2) {
        sessiongetItem(fileName);

        if (data == null || data == "undefined") {
          sessionsetItem("strip1", 1);
          sessiongetItem("strip1");
        } else {
          sessiongetItem("strip1");
        }
      } else if (j == 3) {
        sessiongetItem(fileName);

        if (data == null || data == "undefined") {
          sessionsetItem("page1", 1);
          sessiongetItem("page1");
        } else {
          sessiongetItem("page1");
        }
      }
    }
  } else if (i == 2) {
    for (var j = 1; j <= 3; j++) {
      if (j == 1) {
        sessiongetItem(fileName);
        if (data == null || data == "undefined") {
          sessionsetItem("panel2", 1);
          sessiongetItem("panel2");
        } else {
          sessiongetItem("panel2");
        }
      } else if (j == 2) {
        sessiongetItem(fileName);

        if (data == null || data == "undefined") {
          sessionsetItem("strip2", 1);
          sessiongetItem("strip2");
        } else {
          sessiongetItem("strip2");
        }
      } else if (j == 3) {
        sessiongetItem(fileName);

        if (data == null || data == "undefined") {
          sessionsetItem("page2", 1);
          sessiongetItem("page2");
        } else {
          sessiongetItem("page2");
        }
      }
    }
  }
}

function sessiongetItem(key) {
  this.key = key;

  data = sessionStorage.getItem(this.key);
}

function sessionsetItem(key, value) {
  this.key = key;
  this.value = value;

  sessionStorage.setItem(this.key, this.value);
}
