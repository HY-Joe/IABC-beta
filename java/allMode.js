var keyName, chk, getData;
var chk1, chk2;
var comicNum;

readMode();

function readMode() {
  keyName = "mode1";
  funcGetItem(keyName);

  chk = getData;
  if (chk == null || chk == "undefined") funcSetItem(keyName, "panel");

  funcGetItem(keyName);
  chk = getData;

  $("input:radio[name=readMode]:input[value=" + chk + "]").attr(
    "checked",
    true
  );
}

function chAllComicMode(value) {
  var xx = value;

  funcSetItem("mode1", xx);

  funcGetItem("mode1");

  readMode();
}

function startComic() {
  funcGetItem("comicNum");
  comicNum = getData;

  funcGetItem(keyName);
  readingMode = getData;

  var name = "mode1";
  funcGetItem(name);
  var modeName = getData;

  if (comicNum == "1") {
    if (modeName == "page") {
      funcSetItem("page1", 1);
      location.href = "./html_reader/page/fox/" + readingMode + "_" + comicNum + ".html";  
    }
    else if (modeName == "strip") funcSetItem("strip1", 1);
    else if (modeName == "panel") {
      funcSetItem("panel1", 1);
      location.href = "./html_reader/panel/fox/" + readingMode + "_" + comicNum + ".html";  
    }
  } else if (comicNum == "2") {
    if (modeName == "page") funcSetItem("page2", 1);
    else if (modeName == "strip") funcSetItem("strip2", 1);
    else if (modeName == "panel") funcSetItem("panel2", 1);
  }
  // location.href = readingMode + "_" + comicNum + ".html";
}

function continuesComic() {
  funcGetItem("comicNum");
  comicNum = getData;

  var name = "mode1";
  funcGetItem(name);
  var modeName = getData;

  if (comicNum == "1") {
    if (modeName == "page") location.href = modeName + "_" + comicNum + ".html";
    else if (modeName == "strip")
      location.href = modeName + "_" + comicNum + ".html";
    else if (modeName == "panel")
      location.href = modeName + "_" + comicNum + ".html";
  } else if (comicNum == "2") {
    if (modeName == "page") location.href = modeName + "_" + comicNum + ".html";
    else if (modeName == "strip")
      location.href = modeName + "_" + comicNum + ".html";
    else if (modeName == "panel")
      location.href = modeName + "_" + comicNum + ".html";
  }
}

function funcSetItem(key, value) {
  this.key = key;
  this.value = value;

  sessionStorage.setItem(this.key, this.value);
}

function funcGetItem(key) {
  this.key = key;

  getData = sessionStorage.getItem(this.key);
}
