
var channel_now = 0;
var channel_cnt = 0;                   // number of channels
audiochannels = new Array();
 
//var x = document.getElementById("myAudio"); 

function playAudio(url) {
  //new Audio(url).play(); 
  
  //var a = new Audio(url);
  //a.play(); 

  channel_cnt = channel_cnt +1;

  audiochannels[channel_cnt] = new Array();
  audiochannels[channel_cnt]['channel'] = new Audio();
  audiochannels[channel_cnt]['finished'] = -1;
  
  
  if(channel_now > 0)
    audiochannels[channel_now]['channel'].pause();
  
  audiochannels[channel_cnt]['channel'].src = url;
  audiochannels[channel_cnt]['channel'].load();
  audiochannels[channel_cnt]['channel'].play();
  channel_now = channel_cnt;
  
}

function pauseAudio() { 
  //x.pause(); 
} 



function preAudio(num, text){
  
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
  var getSpeed = sessionStorage.getItem("rate"); //"'fast'"; //x-slow, slow, medium, fast,x-fast
  // console.log("rate : " + typeof(getSpeed));
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

  speechParams.Text = "<speak>" + "<prosody rate="+ speed + ">" + text + "</prosody>"+ "</speak>";

  

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      playAudio(url);
    }
  });
}

function speakTextIntro(num, text) {


  //
  var blank = ".... .... ....";
  preAudio(num,text);

}

function speakText(num, number, location, composition) {

  var blank = ".... .... ....";
  preAudio(num,number + blank + location + blank + composition);

}
function speakTextBalloon(num, script) {

  var blank = ".... .... ....";
  preAudio(num,script);

}
function speakTextCharacter(num, name, action, emotion, appearance) {
  this.appearance = appearance;
  // console.log(this.appearance)
  if(this.appearance == 'undefined')
    this.appearance = "";
  var blank = ".... .... ....";
  preAudio(num,name + blank + action + blank + emotion + blank + this.appearance);

}
