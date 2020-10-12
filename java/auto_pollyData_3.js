
audiochannels = new Array();
var channel_cnt = 0;
playchannel = new Array();
var playchannel_index = 0;

VOchannels = new Array();
var VO_channel_cnt = 0;
var VO_script ="";
VO_playchannel = new Array();
var VO_playchannel_index = 0;


function printScript(){
    document.getElementById("result").innerText = VO_script;
    console.log(VO_script);
}

function speakHello(value){

    url = './data/mp3/partial/intro/'+value+'.mp3';
    new Audio(url).play();
}


function setVO(index, flag, value)
{

  this.value = value;
  this.flag=flag;


  VO_channel_cnt = VO_channel_cnt + 1;

 // VOchannels[index] = this.value;

  //
  if(this.flag=='true'){
    console.log(index +'...is TRUE');
    VO_script += this.value+". ";
    //VO_playchannel_index++;
    //VO_playchannel[VO_playchannel_index] = index;
  }
    

  var test = sessionStorage.getItem("auto_number");
  var script_flag = sessionStorage.getItem("script_flag");
  console.log(script_flag+"...?");

  if (VO_channel_cnt == Number(test))
  {
      console.log("..collect All VO script..."+VO_playchannel_index);
      console.log(VO_script);
      if(script_flag == 'true'){ 
        console.log(script_flag+"true");
        printScript(); 
      }
      else {
        console.log(script_flag+"false");
        speakAllVO();
      }
  } 
}

function speakAllVO(text, opt_prop) 
{

  var synth = window.speechSynthesis;

  if (typeof SpeechSynthesisUtterance === "undefined" || typeof synth === "undefined") {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
  }
            
  synth.cancel(); // 현재 읽고있다면 초기화

  const prop = opt_prop || {};

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = prop.rate || 1; // 속도: 0.1 ~ 10      
  speechMsg.pitch = prop.pitch || 1; // 음높이: 0 ~ 2
  speechMsg.lang = prop.lang || "ko-KR";
  speechMsg.text = VO_script;
  
  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  synth.speak(speechMsg);

  // Function to add event listener to table
  var el = document.getElementById("VOttsSpeak");
  el.addEventListener("click", function()
  {
    if(synth.paused == false){
     synth.pause(); 
    }
      else{
        synth.resume();
      }
  });

}

function setMP3(index, flag, value)
{
  
  //console.log('setMP3...'+flag+"..."+value);


  var file_location = sessionStorage.getItem("file_location");
  this.value = value;
  this.flag=flag;


  channel_cnt = channel_cnt + 1;
  //url = '../../../data/mp3/partial'+file_location+value+'.mp3';
  
  url = file_location+value+'.mp3'; //intro용
  //console.log(url+"...");
  audiochannels[index] = url;

  //
  if(this.flag=='true'){
    console.log(index +'...is TRUE');
    playchannel_index++;
    playchannel[playchannel_index] = index;
  }
    

  var test = sessionStorage.getItem("auto_number");
  if (channel_cnt == Number(test))
  {
      console.log("..collect All Url..."+playchannel_index);
      speakAllMP3();
  } 
}

function speakAllMP3() {
  //var numbering = sessionStorage.getItem("auto_number");
  //var startNumber = sessionStorage.getItem("auto_start");
  //var endNumber = sessionStorage.getItem("auto_end");

  //console.log(startNumber+"~"+endNumber);

  console.log('speak ALL MP3 file...');
  var index_now = 1;
  var channel_now = playchannel[index_now];



  audio.src = audiochannels[channel_now];
  audio.play();
  console.log(channel_now + "is playing...");
  //console.log(audio.src+"...");

  
   audio.addEventListener("ended", function () {

    if (index_now < playchannel_index) 
    {
       index_now++;
       channel_now = playchannel[index_now];

       audio.src = audiochannels[channel_now];
       audio.play();
       console.log(channel_now+"is playing...");
    } else 
    {
      console.log("end");

      //new Audio('../../../data/sound/beepSound.mp3').play();
      new Audio('./data/sound/beepSound.mp3').play();

      console.log("..finished playing");
  
    }
  });



}


