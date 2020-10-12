
var getData, getLocalData;
var numberData, locationData, compositionData;
var scriptData;
var nameData, actionData, emotionData, appearanceData;
var flag1, flag2, flag3;
var flag4;
var flag5, flag6, flag7, flag8;


window.onload = function() {

  // Register touch event handlers
  //document.body.addEventListener('touchstart', process_touchstart, false);
  //document.body.addEventListener('touchmove', process_touchmove, false);
  //document.body.addEventListener('touchcancel', process_touchcancel, false);
  //document.body.addEventListener('touchend', process_touchend, false);


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

  console.log('새로운 만화 페이지');
  //자동 재생
  //'fox_'+'strip_'+1();
  //fox_strip_1();

  //new Audio('../../../java/beepSound.mp3').play();
}

/*
// touchstart handler
function process_touchstart(ev) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (ev.touches.length) {
    case 1: handle_one_touch(ev); break;
    case 2: handle_two_touches(ev); break;
    case 3: handle_three_touches(ev); break;
    case 4: handle_four_touches(ev); break;
    default: gesture_not_supported(ev); break;
  }
}
//function handle_one_touch(ev){alert('handle_one_touch!');}
//function handle_two_touches(ev){alert('handle_two_touch!');}
//function handle_three_touches(ev){alert('handle_three_touches');}
//function handle_four_touches(ev){alert('handle_four_touches');}
//function gesture_not_supported(ev){alert('gesture_not_supported');}

// Create touchstart handler
document.body.addEventListener('touchstart', function(ev) {
  // Iterate through the touch points that were activated
  // for this element and process each event 'target'
  for (var i=0; i < ev.targetTouches.length; i++) {
    process_target(ev.targetTouches[i].target);
//    alert('touch start!');
  }
}, false);

// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}

document.body.addEventListener('touchmove', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
  //   alert("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier +'touch move!');
   }   
}, false);

document.body.addEventListener('touchcancel', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
 //    alert('touch cancel!');
   }   
}, false);

document.body.addEventListener('touchend', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
 //    alert('touch touched!');
   }   
}, false);
*/


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

function Script_fox_page_1() {

 // location.href = "script_1.html";

  console.log('VO_fox_page_1()...');
  sessionStorage.setItem("auto_number", 79);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 79);
  
  sessionStorage.setItem("script_flag", true);

  VO_fox_1();
  VO_fox_2();
  VO_fox_3();
  VO_fox_4();
  VO_fox_5();
  VO_fox_6();

}


function VO_fox_page_1() {

  console.log('VO_fox_page_1()...');
  sessionStorage.setItem("auto_number", 79);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 79);

  sessionStorage.setItem("script_flag", false);

  VO_fox_1();
  VO_fox_2();
  VO_fox_3();
  VO_fox_4();
  VO_fox_5();
  VO_fox_6();

}

function VO_fox_strip_1() {
  sessionStorage.setItem("auto_number", 44);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 44);
  VO_fox_1();
  VO_fox_2();
  VO_fox_3();
}

function VO_fox_strip_2() {
  sessionStorage.setItem("auto_number", 35);
  sessionStorage.setItem("auto_start", 45);
  sessionStorage.setItem("auto_end", 79);
  VO_fox_4();
  VO_fox_5();
  VO_fox_6();
}


function VO_fox_panel_1() {

  sessionStorage.setItem("auto_number", 13);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 13);

  console.log("New fox_panel_1...");
  VO_fox_1();

}

function VO_fox_panel_2() {
  sessionStorage.setItem("auto_number", 16);
  sessionStorage.setItem("auto_start", 14);
  sessionStorage.setItem("auto_end", 29);

  
  console.log("fox_panel_2...");
  VO_fox_2();

}
function VO_fox_panel_3() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 30);
  sessionStorage.setItem("auto_end", 44);

  
  console.log("fox_panel_3...");
  VO_fox_3();

}
function VO_fox_panel_4() {
  sessionStorage.setItem("auto_number", 11);
  sessionStorage.setItem("auto_start", 45);
  sessionStorage.setItem("auto_end", 55);


  console.log("fox_panel_4...");
  VO_fox_4();
}
function VO_fox_panel_5() {
  sessionStorage.setItem("auto_number", 9);
  sessionStorage.setItem("auto_start", 56);
  sessionStorage.setItem("auto_end", 64);


  console.log("fox_panel_5...");
  VO_fox_5();
}
function VO_fox_panel_6() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 65);
  sessionStorage.setItem("auto_end", 79);

  console.log("fox_panel_6...");
  VO_fox_6();
}


function VO_fox_1() {

 sessionStorage.setItem("file_location", './data/mp3/partial/fox/fox_1/');

//Panel
  setVO(1,
    flag1,
    '첫번째칸'
    );
  setVO(2,
    flag2,
    "숲 속의 나무 아래 "
    );
  setVO(3,
    flag3,
    "스티니의 전신은 가운데에 있다 "
    );
//Character
  setVO(4,
    flag5,
    "스티니"
    );
  setVO(5,
    flag8,
    "갈색머리의 스티니는 노란 셔츠와 빨간 망토를 입었다 "
    );
  setVO(6,
    flag6,
    "그는 왼손으로 머리를 만지면서 숲속을 걷고 있다 "
    );
  setVO(7,
    flag7,
    "그는 머리가 아파 보인다"
  );

//Balloon
  setVO(8,
    flag4,
    "내 할아버지 스티니는 브랜디 술를 마시고 결심하셨다."
  );
  setVO(9,
    flag4,
    "그리고 그는 으스스한 피트머키 숲속을 지나 집으로 향하였다."
  );
  setVO(10, 
    flag4,
    "스티니가 말한다."
  );
  setVO(11,
    flag5,
    "앗, 길을 잃어버렸네!"
  );
  setVO(12,
    flag4,
    "집을 빼앗기고 말거야..."
  );
  setVO(13,
    flag4,
    "이렇게 억울할수가!"
  );

  
}

function VO_fox_2() {
    sessionStorage.setItem("file_location",'./data/mp3/partial/fox/fox_2/');
  //Panel
  setVO(14,
    flag1,
    "두번째 칸"
    );
  setVO(15,
    flag2,
    "숲속의 나무들 사이 "); 
  setVO(16,
    flag3,
    "스티니의 뒷모습은 왼쪽에 낯선 사람은 오른쪽에 있다");

  //Character
  setVO(17,
    flag5,
    "스티니"
    );
  setVO(18,
    flag6,
    "그는 남자에게 질문을 한다"
    );
  setVO(19,
    flag5,
    "낯선 사람");
  setVO(20,
    flag8,
    "그는 모자가 달린 파란 망토를 걸쳤다");
  setVO(21,
    flag6,
    "오른손을 뻗으며 대답을 한다");
  setVO(22,
    flag7,
    "심각한 표정이다");

  //Balloon
  setVO(23,
    flag4,
    "갑자기 어두운 덤불 속에서 낯선 사람이 스티니의 길을 막았다."
    );
  setVO(24,
    flag4,
    "스티니가 말한다.");
  setVO(25,
    flag4,
    "뭐야?");
  setVO(26,
    flag4,
    "당신 누구야?");
  setVO(27,
    flag4,
    "낯선 사람이 말한다.");
  setVO(28,
    flag4,
    "스티니,");
  setVO(29,
    flag4,
    "나 계속 너를 찾아다녔어.");
}

function VO_fox_3() {
    sessionStorage.setItem("file_location", './data/mp3/partial/fox/fox_3/');
  //panel
  setVO(30,
    flag1,
    "세번째 칸"
    );
  setVO(31,
    flag2,
    "숲속"); 
  setVO(32,
    flag3,
    "스티니의 상체는 왼쪽에 낯선 사람의 상체는 오른쪽에 있다"); 

  //Character
  setVO(33,
    flag6,
    "스티니와 낯선 사람이 이야기를 하고 있다"); 
  setVO(34,
    flag5,
    "스티니"
    );
  setVO(35,
    flag7,
    "그는 혼란스러운 표정이다"
    );
  setVO(36,
    flag5,
    "낯선 사람");
  setVO(37,
    flag8,
    "그는 심각한 표정이다");

  //Balloon
  setVO(38,
    flag4,
    "스티니가 말한다."
    );
  setVO(39,
    flag4,
    "저요?"
    );
  setVO(40,
    flag4,
    "당신이 나에게 원하는게 뭡니까?"
    );
  setVO(41,
    flag4,
    "낯선 사람이 말한다.");
  setVO(42,
    flag4,
    "이전 지주는 너의 저주로 인해 무덤속에서 방해를 받고 계신다.");
  setVO(43,
    flag4,
    "너가 감히 그를 뵙고 가기를 도전한다면,");
  setVO(44,
    flag4,
    "그는 회답을 하실것이다.");
}

function VO_fox_4() {
    sessionStorage.setItem("file_location", './data/mp3/partial/fox/fox_4/');
  //panel
  setVO(45,
    flag1,
    "네번째 칸"
    );
  setVO(46,
    flag2,
    "어두운 배경 낯선 사람에게 노란 빛이 드리워져 있다"); 
  setVO(47,
    flag3,
    "스티니는 왼쪽에 낯선 사람은 오른쪽에 있다"); 

    //Character
  setVO(48,
    flag6,
    "스티니와 낯선 사람은 대화하고 있다"); 
  setVO(49,
    flag5,
    "낯선사람"
    );
  setVO(50,
    flag7,
    "그는 무섭게 웃고 있다 "
    );


  //Balloon
  setVO(51,
  flag4,
  "스티니가 말한다 "
  );
  setVO(52,
  flag4,
  "저는 그 대답을 위해 지옥 문 그리고 양아버지께 갈 용기가 있습니다"
  );
  setVO(53,
  flag4,
  "낯선 사람이 말한다"
  );
  setVO(54,
  flag4,
  "하하하."
  );
  setVO(55,
  flag4,
  "그렇다면 나와 함께 가자, 스티니의 아들이여."
  );


}

function VO_fox_5() {
    sessionStorage.setItem("file_location", './data/mp3/partial/fox/fox_5/');
    //panel
  setVO(56,
    flag1,
    "다섯번째 칸"
    );
  setVO(57,
    flag2,
    "성문 앞"); 
  setVO(58,
    flag3,
    "스티니와 낯선 사람의 전신 뒷 모습이 가운데 있다"); 

    //Character
  setVO(59,
    flag6,
    "스티니와 낯선 사람은 함께 걷고 있다"); 


  //Balloon
  setVO(60,
    flag4,
    "그래서 스티니는 그를 따라갔다."); 
  setVO(61,
    flag4,
    "그리고 그들은 한 성의 입구에 다다랐다."); 
  setVO(62,
    flag4,
    "이상하다..."
  );
    setVO(63,
    flag4,
    "이곳이 12마일 떨어진 곳이라면 이곳은 이전 레드건틸렛 성의 입구인 것이 확실해."
  );
    setVO(64,
    flag4,
    "내가 꿈을 꾸고 있는것일까?"
  );
}

function VO_fox_6() {
    sessionStorage.setItem("file_location", './data/mp3/partial/fox/fox_6/');
      //panel
  setVO(65,
    flag1,
    "페이지 마지막"
    );
  setVO(66,
    flag2,
    "한 건물의 문 앞"); 
  setVO(67,
    flag3,
    "스티니의 뒷모습은 왼쪽에 두갈의 앞모습은 가운데에 낯선 사람의 뒷 모습은 오른쪽에 있다."); 

    //Character
  setVO(68,
    flag5,
    "스티니"
    );
  setVO(69,
    flag6,
    "그는 오른손으로 두갈을 가리키며 말한다"
    );
  setVO(70,
    flag5,
    "두갈"
    );
  setVO(71,
    flag6,
    "그는 스티니에게 말한다"
    );
  setVO(72,
    flag7,
    "그는 진지한 표정이다"
    );
  setVO(73,
    flag5,
    "낯선 사람"
    );
  setVO(74,
    flag6,
    "그는 스티니 옆에 서있다"
    );

  //Balloon
  setVO(75,
    flag4,
    "문이 열리고 그들은 다른사람이 아닌 두갈에게 마중을 받았다."); 
  setVO(76,
    flag4,
    "스티니가 말한다"); 
  setVO(77,
    flag4,
    "두갈 맥캘럼, 저 당신이 죽은줄 알고 있었습니다."); 
  setVO(78,
    flag4,
    "두갈이 말한다."); 
  setVO(79,
    flag4,
    "나에대한건 잊어버리고, 지금부터 내가 하는 말 잘들어!"); 
}

function fox_page_1() {
  sessionStorage.setItem("auto_number", 79);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 79);

  fox_1();
  fox_2();
  fox_3();
  fox_4();
  fox_5();
  fox_6();

}

function fox_strip_1() {
  sessionStorage.setItem("auto_number", 44);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 44);
  fox_1();
  fox_2();
  fox_3();
}

function fox_strip_2() {
  sessionStorage.setItem("auto_number", 35);
  sessionStorage.setItem("auto_start", 45);
  sessionStorage.setItem("auto_end", 79);
  fox_4();
  fox_5();
  fox_6();
}


function fox_panel_1() {

  sessionStorage.setItem("auto_number", 13);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 13);

  console.log("New fox_panel_1...");
  fox_1();

}

function fox_panel_2() {
  sessionStorage.setItem("auto_number", 16);
  sessionStorage.setItem("auto_start", 14);
  sessionStorage.setItem("auto_end", 29);

  
  console.log("fox_panel_2...");
  fox_2();

}
function fox_panel_3() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 30);
  sessionStorage.setItem("auto_end", 44);

  
  console.log("fox_panel_3...");
  fox_3();

}
function fox_panel_4() {
  sessionStorage.setItem("auto_number", 11);
  sessionStorage.setItem("auto_start", 45);
  sessionStorage.setItem("auto_end", 55);


  console.log("fox_panel_4...");
  fox_4();
}
function fox_panel_5() {
  sessionStorage.setItem("auto_number", 9);
  sessionStorage.setItem("auto_start", 56);
  sessionStorage.setItem("auto_end", 64);


  console.log("fox_panel_5...");
  fox_5();
}
function fox_panel_6() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 65);
  sessionStorage.setItem("auto_end", 79);

  console.log("fox_panel_6...");
  fox_6();
}


function fox_1() {

 sessionStorage.setItem("file_location",'../../../data/mp3/partial/fox/fox_1/');

//Panel
  setMP3(1,
    flag1,
    'audio_첫번째칸'
    );
  setMP3(2,
    flag2,
    "audio_0_숲_속의_나무_아래_"
    );
  setMP3(3,
    flag3,
    "audio_1_스티니의_전신은_가운데에_있다_"
    );
//Character
  setMP3(4,
    flag5,
    "audio_2_스티니"
    );
  setMP3(5,
    flag8,
    "audio_2_갈색머리의_스티니는_노란_셔츠와_빨간_망토를_입었다_"
    );
  setMP3(6,
    flag6,
    "audio_3_그는_왼손으로_머리를_만지면서_숲속을_걷고_있다_"
    );
  setMP3(7,
    flag7,
    "audio_4_그는_머리가_아파_보인다_"
  );

//Balloon
  setMP3(8,
    flag4,
    "audio_5_내_할아버지__스티니는_브랜디_술_를_마시고_결심하셨~"
  );
  setMP3(9,
    flag4,
    "audio_6_그리고_그는_으스스한_피트머키_숲속을_지나_집으로_향~"
  );
  setMP3(10, 
    flag4,
    "audio_9_스티니가_말한다_"
  );
  setMP3(11,
    flag5,
    "audio_7_앗__길을_잃어버렸네_"
  );
  setMP3(12,
    flag4,
    "audio_8_집을_빼앗기고_말거야__"
  );
  setMP3(13,
    flag4,
    "audio_9_이렇게_억울할수가_"
  );

  
}

function fox_2() {
    sessionStorage.setItem("file_location", '../../../data/mp3/partial/fox/fox_2/');
  //Panel
  setMP3(14,
    flag1,
    "audio_두번째_칸"
    );
  setMP3(15,
    flag2,
    "audio_0_숲속의_나무들_사이_"); 
  setMP3(16,
    flag3,
    "audio_1_스티니의_뒷모습은_왼쪽에__낯선_사람은_오른쪽에_있다_");

  //Character
  setMP3(17,
    flag5,
    "audio_2_스티니"
    );
  setMP3(18,
    flag6,
    "audio_3_그는_남자에게_질문을_한다_"
    );
  setMP3(19,
    flag5,
    "audio_4_낯선_사람");
  setMP3(20,
    flag8,
    "audio_5_그는_모자가_달린_파란_망토를_걸쳤다_");
  setMP3(21,
    flag6,
    "audio_6_오른손을_뻗으며_대답을_한다_");
  setMP3(22,
    flag7,
    "audio_7_심각한_표정이다_");

  //Balloon
  setMP3(23,
    flag4,
    "audio_0_갑자기__어두운_덤불_속에서_낯선_사람이_스티니의_길~"
    );
  setMP3(24,
    flag4,
    "audio_9_스티니가_말한다_");
  setMP3(25,
    flag4,
    "audio_10_뭐야_");
  setMP3(26,
    flag4,
    "audio_11_당신_누구야_");
  setMP3(27,
    flag4,
    "audio_12_낯선_사람이_말한다_");
  setMP3(28,
    flag4,
    "audio_13_스티니_");
  setMP3(29,
    flag4,
    "audio_14_나_계속_너를_찾아다녔어_");
}

function fox_3() {
    sessionStorage.setItem("file_location", '../../../data/mp3/partial/fox/fox_3/');
  //panel
  setMP3(30,
    flag1,
    "audio_세번째_칸"
    );
  setMP3(31,
    flag2,
    "audio_0_숲속_"); 
  setMP3(32,
    flag3,
    "audio_0_스티니의_상체는_왼쪽에__낯선_사람의_상체는_오른쪽에~"); 

  //Character
  setMP3(33,
    flag6,
    "audio_1_스티니와_낯선_사람이_이야기를_하고_있다_"); 
  setMP3(34,
    flag5,
    "audio_3_스티니"
    );
  setMP3(35,
    flag7,
    "audio_4_그는_혼란스러운_표정이다_"
    );
  setMP3(36,
    flag5,
    "aaudio_5_낯선_사람");
  setMP3(37,
    flag8,
    "audio_6_그는_심각한_표정이다_");

  //Balloon
  setMP3(38,
    flag4,
    "audio_7_스티니가_말한다_"
    );
  setMP3(39,
    flag4,
    "audio_8_저요_"
    );
  setMP3(40,
    flag4,
    "audio_9_당신이_나에게_원하는게_뭡니까_"
    );
  setMP3(41,
    flag4,
    "audio_10_낯선_사람이_말한다_");
  setMP3(42,
    flag4,
    "audio_11_이전_지주는_너의_저주로_인해_무덤속에서_방해를_받고~");
  setMP3(43,
    flag4,
    "audio_12_너가_감히_그를_뵙고_가기를_도전한다면__");
  setMP3(44,
    flag4,
    "audio_13_그는_회답을_하실것이다_");
}

function fox_4() {
    sessionStorage.setItem("file_location", '../../../data/mp3/partial/fox/fox_4/');
  //panel
  setMP3(45,
    flag1,
    "audio_네번째_칸"
    );
  setMP3(46,
    flag2,
    "audio_0_어두운_배경__낯선_사람에게_노란_빛이_드리워져_있다_"); 
  setMP3(47,
    flag3,
    "audio_1_스티니는_왼쪽에__낯선_사람은_오른쪽에_있다_"); 

    //Character
  setMP3(48,
    flag6,
    "audio_2_스티니와_낯선_사람은_대화하고_있다_"); 
  setMP3(49,
    flag5,
    "audio_3_낯선_사람"
    );
  setMP3(50,
    flag7,
    "audio_4_그는_무섭게_웃고_있다_"
    );


  //Balloon
  setMP3(51,
  flag4,
  "audio_5_스티니가_말한다_"
  );
  setMP3(52,
  flag4,
  "audio_6_저는_그_대답을_위해_지옥_문__그리고_양아버지께_갈~"
  );
  setMP3(53,
  flag4,
  "audio_7_낯선_사람이_말한다_"
  );
  setMP3(54,
  flag4,
  "audio_8_하하하_"
  );
  setMP3(55,
  flag4,
  "audio_9_그렇다면_나와_함께_가자__스티니의_아들이여_"
  );


}

function fox_5() {
    sessionStorage.setItem("file_location", '../../../data/mp3/partial/fox/fox_5/');
    //panel
  setMP3(56,
    flag1,
    "audio_다섯번째_칸"
    );
  setMP3(57,
    flag2,
    "audio_0_성문_앞_"); 
  setMP3(58,
    flag3,
    "audio_1_스티니와_낯선_사람의_전신_뒷_모습이_가운데_있다_"); 

    //Character
  setMP3(59,
    flag6,
    "audio_2_스티니와_낯선_사람은_함께_걷고_있다_"); 


  //Balloon
  setMP3(60,
    flag4,
    "audio_3_그래서_스티니는_그를_따라갔다_"); 
  setMP3(61,
    flag4,
    "audio_4_그리고_그들은_한_성의_입구에_다다랐다_"); 
  setMP3(62,
    flag4,
    "audio_5_이상하다___"
  );
    setMP3(63,
    flag4,
    "audio_6_이곳이_12마일_떨어진_곳이라면__이곳은_이전_레드건~"
  );
    setMP3(64,
    flag4,
    "audio_7_내가_꿈을_꾸고_있는것일까_"
  );
}

function fox_6() {
    sessionStorage.setItem("file_location", '../../../data/mp3/partial/fox/fox_6/');
      //panel
  setMP3(65,
    flag1,
    "audio_페이지_마지막"
    );
  setMP3(66,
    flag2,
    "audio_0_한_건물의_문_앞_"); 
  setMP3(67,
    flag3,
    "audio_1_스티니의_뒷모습은_왼쪽에__두갈의_앞모습은_가운데에_~"); 

    //Character
  setMP3(68,
    flag5,
    "audio_2_스티니"
    );
  setMP3(69,
    flag6,
    "audio_3_그는_오른손으로_두갈을_가리키며_말한다_"
    );
  setMP3(70,
    flag5,
    "audio_4_두갈"
    );
  setMP3(71,
    flag6,
    "audio_5_그는_스티니에게_말한다_"
    );
  setMP3(72,
    flag7,
    "audio_6_그는_진지한_표정이다_"
    );
  setMP3(73,
    flag5,
    "audio_7_낯선_사람"
    );
  setMP3(74,
    flag6,
    "audio_8_그는_스티니_옆에_서있다_"
    );

  //Balloon
  setMP3(75,
    flag4,
    "audio_9_문이_열리고__그들은_다른사람이_아닌_두갈에게_마중을~"); 
  setMP3(76,
    flag4,
    "audio_10_스티니가_말한다_"); 
  setMP3(77,
    flag4,
    "audio_11_두갈_맥캘럼__저_당신이_죽은줄_알고_있었습니다_"); 
  setMP3(78,
    flag4,
    "audio_12_두갈이_말한다_"); 
  setMP3(79,
    flag4,
    "audio_13_나에대한건_잊어버리고__지금부터_내가_하는_말_잘들어_"); 
}
