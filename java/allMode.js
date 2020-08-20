var keyName, chk, getData;
var chk1, chk2;
var comicNum;
var rateValue;

readMode();
readRate();

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

function readRate() {
  rateValue = "rate";
  funcGetItem(rateValue);

  chk = getData;
  if (chk == null || chk == "undefined") funcSetItem(rateValue, "medium");

  funcGetItem(rateValue);
  chk = getData;

  $("input:radio[name=speakingRate]:input[value=" + chk + "]").attr(
    "checked",
    true
  );
}

function chSpeakingRate(value) {
  this.value = value;

  funcSetItem("rate", this.value);

  funcGetItem("rate");

  readRate();
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
  // var str = modeName + comicNum;
  // alert(str);
  if (comicNum == "1") {
    if (modeName == "page") {
      funcSetItem("page1", 1);
      location.href = "./html_reader/page/fox/" + readingMode + "_1.html";  
    }
    else if (modeName == "strip") {
      funcSetItem("strip1", 1);
      location.href = "./html_reader/strip/fox/" + readingMode + "_1.html";  
    }
    else if (modeName == "panel") {
      funcSetItem("panel1", 1);
      location.href = "./html_reader/panel/fox/" + readingMode + "_1.html";  
    }
  } else if (comicNum == "2") {
    if (modeName == "page") {
      funcSetItem("page2", 1);
      location.href = "./html_reader/page/love/" + readingMode + "_1.html";  
    }
    else if (modeName == "strip") { 
      funcSetItem("strip2", 1);
      location.href = "./html_reader/strip/love/" + readingMode + "_1.html";   
    }
    else if (modeName == "panel") {
      funcSetItem("panel2", 1);
      location.href = "./html_reader/panel/love/" + readingMode + "_1.html";    
    }
  }
  // location.href = readingMode + "_" + comicNum + ".html";
}

function continuesComic() {
  funcGetItem("comicNum");
  comicNum = getData;

  var name = "mode1";
  funcGetItem(name);
  var modeName = getData;

  var str = modeName + comicNum;
  // alert(str);
  funcGetItem(str);
  var flag = getData;
  if (comicNum == "1") {
    if (modeName == "page") 
      location.href = "./html_reader/page/fox/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "strip")
      location.href = "./html_reader/strip/fox/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "panel") 
      location.href = "./html_reader/panel/fox/" + modeName + "_" + flag + ".html";
  } else if (comicNum == "2") {
    if (modeName == "page") 
      location.href = "./html_reader/page/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "strip")
      location.href = "./html_reader/strip/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "panel")
      location.href = "./html_reader/panel/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
  }
}

function continuesComic2() {
  funcGetItem("comicNum");
  comicNum = getData;

  var name = "mode1";
  funcGetItem(name);
  var modeName = getData;

  var str = modeName + comicNum;
  // alert(str);
  funcGetItem(str);
  var flag = getData;
  if (comicNum == "1") {
    if (modeName == "page") 
      location.href = "../../page/fox/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "strip")
      location.href = "../../strip/fox/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "panel") 
      location.href = "../../panel/fox/" + modeName + "_" + flag + ".html";
  } else if (comicNum == "2") {
    if (modeName == "page") 
      location.href = "../../page/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "strip")
      location.href = "../../strip/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
    else if (modeName == "panel")
      location.href = "../../panel/love/" + modeName + "_" + flag + ".html";
      // location.href = modeName + "_" + flag + ".html";
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
