var channel_cnt = 0;
var now_playing = -1;
var channel_now = 0;

audio = new Audio();
audiochannels = new Array();


function startingAuto() {
  var numbering = sessionStorage.getItem("auto_number");
  var startNumber = sessionStorage.getItem("auto_start");
  var endNumber = sessionStorage.getItem("auto_end");
}

function collectUrl(index, url) {

  console.log(index+" collectUrl...");
  channel_cnt = channel_cnt + 1;
  audiochannels[index] = url;

  var test = sessionStorage.getItem("auto_number");

  //처음 클릭을 위해서
  if (channel_cnt == Number(test))
  {
      console.log("..collect All Url");
  } 
}

function speakAll() {
  var numbering = sessionStorage.getItem("auto_number");
  var startNumber = sessionStorage.getItem("auto_start");
  var endNumber = sessionStorage.getItem("auto_end");

  console.log(startNumber+"~"+endNumber);

  var channel_now = startNumber;

  //new Audio('../data/sound/beepSound.mp3').play();

  //만약 Url이 다 있다면?

  //Url이 없다면?

  audio.src = audiochannels[channel_now];
  audio.play();
  console.log(channel_now + "is playing...");

   audio.addEventListener("ended", function () {

    if (channel_now < endNumber) 
    {
       channel_now++;
       audio.src = audiochannels[channel_now];
       audio.play();
       console.log(channel_now+"is playing...");
    } else 
    {
      console.log("end");
      //var audio2 = new Audio();
      //audio2.src = '../data/sound/beepSound.mp3';
      //audio2.play();
    }
  });
}

function preAudio(index, num, text) {
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:d5f963ba-824c-47fb-b6e5-67cecb164385",
  });

  //목소리 정하기
  if (num == 0) {
    var voiceId = "Matthew";
  } else if (num == 1) {
    var voiceId = "Brian";
  } else if (num == 2) {
    var voiceId = "Geraint";
  } else if (num == 3) {
    var voiceId = "Joanna";
  } else if (num == 4) {
    var voiceId = "Kendra";
  } else if (num == 5) {
    var voiceId = "Salli";
  }

  //속도
  var getSpeed = sessionStorage.getItem("rate");
  speed = "";
  speed += "'";
  speed += getSpeed;
  speed += "'";

  var speechParams = {
    OutputFormat: "mp3",
    SampleRate: "16000",
    Text: "",
    TextType: "ssml",
    VoiceId: "",
  };

  speechParams.VoiceId = voiceId;

  speechParams.Text =
    "<speak>" +
    "<prosody rate=" +
    speed +
    ">" +
    text +
    "</prosody>" +
    "</speak>";

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      console.log(index+"...go to collectUrl()");
      collectUrl(index, url);
    }
  });
}

function speakTextIntro(index, num, text) {
  //var blank = "....";
  preAudio(index, num, text);
}

function speakTextPanel(index, num, number, location, composition) {
  //var blank = "....";
  //preAudio(index, num, number + blank + location + blank + composition);
  preAudio(index, num, number + location + composition);
}

function speakTextBalloon(index, num, script) {
  //var blank = "....";
  preAudio(index, num, script);
}
function speakTextCharacter(index, num, name, action, emotion, appearance) {
  this.appearance = appearance;
  if (this.appearance == "undefined") this.appearance = "";
  //var blank = "....";
  //preAudio(index,num,name + blank + action + blank + emotion + blank + this.appearance);
  preAudio(index,num,name + action + emotion + this.appearance);
}
