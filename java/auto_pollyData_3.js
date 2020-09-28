
audiochannels = new Array();
var channel_cnt = 0;
//재생할 
playchannel = new Array();
var playchannel_index = 0;


function setMP3(index, flag, value)
{
  
  //console.log('setMP3...'+flag+"..."+value);


  var file_location = sessionStorage.getItem("file_location");
  this.value = value;
  this.flag=flag;


  channel_cnt = channel_cnt + 1;
  url = '../../../data/mp3/partial'+file_location+value+'.mp3';
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


  var index_now = 1;
  var channel_now = playchannel[index_now];


  audio.src = audiochannels[channel_now];
  audio.play();
  console.log(channel_now + "is playing...");

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

      new Audio('../../../data/sound/beepSound.mp3').play();

      console.log("..finished playing");
  
    }
  });
}


