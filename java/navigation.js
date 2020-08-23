var pageNum;
var data;
var comicNumber;

function reload() {
  location.href = location.href;
}

function changeNavImg(num) {
  sessiongetItem("comicNum");
  comicNumber = data;

  if (comicNumber == "1") {
    firstNavi(num);
  } else if (comicNumber == "2") {
    secondNavi(num);
  }
}

function firstNavi(num) {
  var name = "mode1";
  sessiongetItem(name);
  modeName = data;

  var a = document.getElementById("inputSvg");

  if (modeName == "page") {
    page = num;

    sessionsetItem("page1", page);
    sessiongetItem("page1");
    location.href = "./page_" + page + ".html";
  } else if (modeName == "strip") {
    page = num;

    sessionsetItem("strip1", page);
    sessiongetItem("strip1");
    location.href = "./strip_" + page + ".html";
  } else if (modeName == "panel") {
    page = num;

    sessionsetItem("panel1", page);
    sessiongetItem("panel1");
    location.href = "./panel_" + page + ".html";
  }
}

function secondNavi(num) {
  var name = "mode1";
  sessiongetItem(name);
  modeName = data;

  var a = document.getElementById("inputSvg");

  if (modeName == "page") {
    page = num;

    sessionsetItem("page2", page);
    sessiongetItem("page2");
    location.href = "./page_" + page + ".html";
  } else if (modeName == "strip") {
    page = num;

    sessionsetItem("strip2", page);
    sessiongetItem("strip2");
    location.href = "./strip_" + page + ".html";
  } else if (modeName == "panel") {
    page = num;

    sessionsetItem("panel2", page);
    sessiongetItem("panel2");
    location.href = "./panel_" + page + ".html";
  }
}

function sessionsetItem(key, value) {
  this.key = key;
  this.value = value;

  sessionStorage.setItem(this.key, this.value);
}

function sessiongetItem(key) {
  this.key = key;

  data = sessionStorage.getItem(this.key);
}
