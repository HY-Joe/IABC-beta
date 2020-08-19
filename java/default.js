var modeName = sessiongetItem("mode1");
var data;

for (var i = 1; i <= 2; i++) {
  var fileName = data;

  if (i == 1) {
    fileName += 1;
    sessiongetItem(fileName);
    console.log(data);
    
    if (data == null || data == "undefined") {
      if (modeName == "panel") {
        sessionsetItem("panel1", 1);
        sessiongetItem("panel1");
      } else if ( modeName == "scrip") {
        sessionsetItem("scrip1", 1);
        sessiongetItem("scrip1");
      } else if (modeName == "page") {
        sessionsetItem("page1", 1);
        sessiongetItem("page1");
      }
    } else {
      if (modeName == "panel")
        sessiongetItem("panel1");
      else if (modeName == "scrip")
        sessiongetItem("scrip1");
      else if (modeName == "page")
        sessiongetItem("page1");
    }
  } else if (i == 2) {
    fileName += 2;
    sessiongetItem(fileName);
    console.log(data);
    
    if (data == null || data == "undefined") {
      if (modeName == "panel") {
        sessionsetItem("panel2", 1);
        sessiongetItem("panel2");
      } else if ( modeName == "scrip") {
        sessionsetItem("scrip2", 1);
        sessiongetItem("scrip2");
      } else if (modeName == "page") {
        sessionsetItem("page2", 1);
        sessiongetItem("page2");
      }
    } else {
      if (modeName == "panel")
        sessiongetItem("panel2");
      else if (modeName == "scrip")
        sessiongetItem("scrip2");
      else if (modeName == "page")
        sessiongetItem("page2");
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
