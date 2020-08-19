var fox, love;
var elText, flag1, flag2, flag3;
var getData;

var flag1 = localStorage.getItem("elements1");
var flag2 = localStorage.getItem("elements2");
var flag3 = localStorage.getItem("elements3");

function changeData() {
  if (flag1 == "false") {
    var a = document.getElementById("panel").innerHTML;

    localStorage.setItem("a", a);

    var s = localStorage.getItem("a");

    var str = "";

    var b = str;
    var aa = document.getElementById("panel");
    aa.innerHTML = b;
  }
  if (flag2 == "false") {
    var a = document.getElementById("balloon").innerHTML;
    localStorage.setItem("a2", a);

    var s = localStorage.getItem("a2");

    var str = "";

    var aa = document.getElementById("balloon");
    aa.innerHTML = str;
  }
  if (flag3 == "false") {
    var a = document.getElementById("character").innerHTML;

    localStorage.setItem("a3", a);

    var s = localStorage.getItem("a3");

    var str = "";

    var aa = document.getElementById("character");
    aa.innerHTML = str;
  }
}

function readComicNum() {
  funcgetItem("comicNum");
}

function readToggleData() {
  funcgetItem("elements");
}
