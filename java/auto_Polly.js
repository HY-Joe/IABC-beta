var channel_cnt = 0;

                     // number of channels
audiochannels = new Array();

// var flag = sessionStorage.getItem("countIndex");
// if (flag == null || flag == "undefined")
//   sessionStorage.setItem("countIndex", 0);
// console.log(Number(flag));

function startingAuto() {
  var numbering = sessionStorage.getItem("auto_number");
  var startNumber = sessionStorage.getItem("auto_start");
  var endNumber = sessionStorage.getItem("auto_end");

  console.log(numbering + " : " + startNumber + " : " + endNumber);
}

function collectUrl(index, url)
{
  channel_cnt = channel_cnt +1;


  audiochannels[index] = new Array();
  audiochannels[index]['channel'] = new Audio();
 // audiochannels[index]['finished'] = -1;
  audiochannels[index]['channel'].src = url;
  audiochannels[i]['channel'].load();
  
//console.log("auto_Polly.js >> collectUrl >> channel_cnt :: " + channel_cnt);

  var test = sessionStorage.getItem("auto_number");
  if (channel_cnt == Number(test))
    speakAll();

}


function speakAll()
{ 
  var numbering = sessionStorage.getItem("auto_number");
  var startNumber = sessionStorage.getItem("auto_start");
  var endNumber = sessionStorage.getItem("auto_end");

  // var count = sessionStorage.getItem("countIndex");
  // console.log("cnt :::  " + count);

  console.log('speakAll()- 다 모였습니다'+channel_cnt);
  
   // audiochannels[i]['channel'].play();
   // console.log(i+'번째 url 오디오가 시작');
  //  console.log(audiochannels[i]['channel'].ended);
   // console.log(audiochannels[i]['channel'].currentTime);
  //  console.log(audiochannels[i]['channel'].duration);
    //while(audiochannels[i]['channel'].ended != true){console.log('빙글빙글');}

  var channel_now = startNumber;
  var audio = new Audio(audiochannels[channel_now]['channel'].src);
 


  audio.play();


  audio.addEventListener('ended',function()
  {
        channel_now++;
        if(channel_now <= endNumber){
            audio.src = audiochannels[channel_now]['channel'].src;
            audio.play();
        }
        else{
            
        }
    });

  console.log('end');
}


function preAudio(index, num, text){
  
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
      //auto mode가 아닐 경우
      //playAudio(url);
      //auto mode일 경우
      var test = sessionStorage.getItem("auto_number");
      if (channel_cnt != Number(test))
        collectUrl(index, url);

    }
  });
}

function speakTextIntro(index, num, text) {

  var blank = ".... .... ....";
  preAudio(index, num,text);

}

function speakText(index, num, number, location, composition) {
  //alert("hh")
  var blank = ".... .... ....";
  preAudio(index, num,number + blank + location + blank + composition);

}
function speakTextBalloon(index, num, script) {

  var blank = ".... .... ....";
  preAudio(index, num,script);

}
function speakTextCharacter(index, num, name, action, emotion, appearance) {
  this.appearance = appearance;
  // console.log(this.appearance)
  if(this.appearance == 'undefined')
    this.appearance = "";
  var blank = ".... .... ....";
  preAudio(index, num,name + blank + action + blank + emotion + blank + this.appearance);

}
