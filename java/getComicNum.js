var getData;

function setComicNum(value) {
  funcSetItem("comicNum", value);
  funcGetItem("comicNum");
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
