var getData, getLocalData;
var voiceData;
var numberData, locationData, compositionData;
var scriptData;
var nameData, actionData, emotionData, appearanceData;
var flag1, flag2, flag3;
var flag4;
var flag5, flag6, flag7, flag8;

function filteringData() {
  getLocal("panelFilter1");
  flag1 = getLocalData;

  getLocal("panelFilter2");
  flag2 = getLocalData;

  getLocal("panelFilter3");
  flag3 = getLocalData;

  getLocal("BalloonFilter1");
  flag4 = getLocalData;

  getLocal("characterFilter1");
  flag5 = getLocalData;

  getLocal("characterFilter2");
  flag6 = getLocalData;

  getLocal("characterFilter3");
  flag7 = getLocalData;

  getLocal("characterFilter4");
  flag8 = getLocalData;
}

function setPanelData(index, voice, value1, value2, value3) {
  filteringData();

  this.index = index;
  this.voice = voice;
  this.value1 = value1;
  this.value2 = value2;
  this.value3 = value3;

  var str =
    this.index +
    " : " +
    this.voice +
    " : " +
    this.value1 +
    " : " +
    this.value2 +
    " : " +
    this.value3;


  setSession("index", this.index);
  setSession("voice", this.voice);

  if (flag1 == "false") setSession("panelNumber", "");
  else setSession("panelNumber", this.value1);

  if (flag2 == "false") setSession("location", "");
  else setSession("location", this.value2);

  if (flag3 == "false") setSession("composition", "");
  else setSession("composition", this.value3);

  getPanelData();
}

function getPanelData() {
  getSession("index");
  indexData = getData;
  
  // console.log("auto_pollyData.js >> getPanelData: indexData >> " + indexData);

  getSession("voice");
  voiceData = getData;

  getSession("panelNumber");
  numberData = getData;

  getSession("location");
  locationData = getData;

  getSession("composition");
  compositionData = getData;
  
  speakText(indexData, voiceData, numberData, locationData, compositionData);
}

function setBalloonData(index, voice, value1) {
  filteringData();

  this.index = index;
  this.voice = voice;
  this.value1 = value1;

  var str = this.voice + " : " + this.value1;

  setSession("index", this.index);
  setSession("voice", this.voice);

  if (flag4 == "false") setSession("script", "");
  else setSession("script", this.value1);

  getBalloonData();
}

function getBalloonData() {
  getSession("index");
  indexData = getData;
  
  getSession("voice");
  voiceData = getData;

  getSession("script");
  scriptData = getData;

  speakTextBalloon(indexData, voiceData, scriptData);
}

function setCharacterData(index, voice, value1, value2, value3, value4) {
  filteringData();

  this.index = index;
  this.voice = voice;
  this.value1 = value1;
  this.value2 = value2;
  this.value3 = value3;
  this.value4 = value4;

  var str =
    this.index + 
    " : " +
    this.voice +
    " : " +
    this.value1 +
    " : " +
    this.value2 +
    " : " +
    this.value3 +
    " : " +
    this.value4;

  //  console.log(str);
  
  setSession("index", this.index); 
  setSession("voice", this.voice);

  if (flag5 == "false") setSession("name", "");
  else setSession("name", this.value1);

  if (flag6 == "false") setSession("action", "");
  else setSession("action", this.value2);

  if (flag7 == "false") setSession("emotion", "");
  else setSession("emotion", this.value3);

  if (flag7 == "false") setSession("appearance", "");
  else setSession("appearance", this.value4);

  getCharacterData();
}

function getCharacterData() {

  getSession("index");
  indexData = getData;
  
  getSession("index");
  indexData = getData;

  getSession("voice");
  voiceData = getData;

  getSession("name");
  nameData = getData;

  getSession("action");
  actionData = getData;

  getSession("emotion");
  emotionData = getData;

  getSession("appearance");
  appearanceData = getData;

  speakTextCharacter(
    indexData,
    voiceData,
    nameData,
    actionData,
    emotionData,
    appearanceData
  );
}

function setSession(key, value) {
  this.key = key;
  this.value = value;

  sessionStorage.setItem(this.key, this.value);
}

function getSession(key) {
  this.key = key;

  getData = sessionStorage.getItem(this.key);
}

function getLocal(key) {
  this.key = key;

  getLocalData = localStorage.getItem(this.key);
}
