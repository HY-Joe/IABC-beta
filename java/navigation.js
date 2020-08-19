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
    $("#comics_img").attr(
      "data",
      "./data/svg/page/fox/FOX_CHILLINTALES_T17_Page.svg"
    );
  } else if (modeName == "scrip") {
    page = num;

    sessionsetItem("strip1", page);
    sessiongetItem("strip1");
    $("#comics_img").attr(
      "data",
      "./data/svg/strip/fox/FOX_CHILLINTALES_T17_Scrip_" + page + ".svg"
    );
  } else if (modeName == "panel") {
    page = num;

    sessionsetItem("panel1", page);
    sessiongetItem("panel1");
    $("#comics_img").attr(
      "data",
      "./data/svg/panel/fox/FOX_CHILLINTALES_T17_Panel_" + page + ".svg"
    );
  }

  // $(window).ready(function(){
  //     alert("안녕 나는 눈물 젖은 빵이");
  //     $('#comics_img').focus();
  //   });
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
    $("#comics_img").attr(
      "data",
      "./data/svg/page/love/PIKE_BOYLOVEGIRLS_T41_Page.svg"
    );
  } else if (modeName == "scrip") {
    page = num;

    sessionsetItem("strip2", page);
    sessiongetItem("strip2");
    $("#comics_img").attr(
      "data",
      "./data/svg/strip/love/PIKE_BOYLOVEGIRLS_T41_Scrip_" + page + ".svg"
    );
  } else if (modeName == "panel") {
    page = num;

    sessionsetItem("panel2", page);
    sessiongetItem("panel2");
    $("#comics_img").attr(
      "data",
      "./data/svg/panel/love/PIKE_BOYLOVEGIRLS_T41_Panel_" + page + ".svg"
    );
  }

  // $(window).ready(function(){
  //     $('#comics_img').focus();
  //   });
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
