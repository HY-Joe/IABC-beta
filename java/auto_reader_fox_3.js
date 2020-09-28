
var getData, getLocalData;
var numberData, locationData, compositionData;
var scriptData;
var nameData, actionData, emotionData, appearanceData;
var flag1, flag2, flag3;
var flag4;
var flag5, flag6, flag7, flag8;


window.onload = function() {
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

    sessionStorage.setItem("file_location", '/fox/fox_1/');

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
    sessionStorage.setItem("file_location", '/fox/fox_2/');
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
    sessionStorage.setItem("file_location", '/fox/fox_3/');
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
    sessionStorage.setItem("file_location", '/fox/fox_4/');
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
    sessionStorage.setItem("file_location", '/fox/fox_5/');
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
    sessionStorage.setItem("file_location", '/fox/fox_6/');
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
