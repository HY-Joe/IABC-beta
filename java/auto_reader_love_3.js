
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
function Script_love_page_1() {
  sessionStorage.setItem("auto_number", 128);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 128);
  sessionStorage.setItem("script_flag", true);
  VO_love_1();
  VO_love_2();
  VO_love_3();
  VO_love_4();
  VO_love_5();
  VO_love_6();
  VO_love_7();
}
function VO_love_page_1() {
  sessionStorage.setItem("auto_number", 128);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 128);
  sessionStorage.setItem("script_flag", false);
  VO_love_1();
  VO_love_2();
  VO_love_3();
  VO_love_4();
  VO_love_5();
  VO_love_6();
  VO_love_7();
}


function VO_love_strip_1() {
  sessionStorage.setItem("auto_number", 49);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 49);
  VO_love_1();
  VO_love_2();
  VO_love_3();
}
function VO_love_strip_2() {
  sessionStorage.setItem("auto_number", 41);
  sessionStorage.setItem("auto_start", 50);
  sessionStorage.setItem("auto_end", 90);
  VO_love_4();
  VO_love_5();
}
function VO_love_strip_3() {
  sessionStorage.setItem("auto_number", 38);
  sessionStorage.setItem("auto_start", 91);
  sessionStorage.setItem("auto_end", 128);
  VO_love_6();
  VO_love_7();
}


function VO_love_panel_1() {
  sessionStorage.setItem("auto_number", 17);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 17);
  VO_love_1();
}
function VO_love_panel_2() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 18);
  sessionStorage.setItem("auto_end", 32);
  VO_love_2();
}
function VO_love_panel_3() {
  sessionStorage.setItem("auto_number", 17);
  sessionStorage.setItem("auto_start", 33);
  sessionStorage.setItem("auto_end", 49);
  VO_love_3();
}
function VO_love_panel_4() {
  sessionStorage.setItem("auto_number", 12);
  sessionStorage.setItem("auto_start", 50);
  sessionStorage.setItem("auto_end", 61);
  VO_love_4();
}
function VO_love_panel_5() {
  sessionStorage.setItem("auto_number", 29);
  sessionStorage.setItem("auto_start", 62);
  sessionStorage.setItem("auto_end", 90);
  VO_love_5();
}
function VO_love_panel_6() {
  sessionStorage.setItem("auto_number", 24);
  sessionStorage.setItem("auto_start", 91);
  sessionStorage.setItem("auto_end", 114);
  VO_love_6();
}
function VO_love_panel_7() {
  sessionStorage.setItem("auto_number", 14);
  sessionStorage.setItem("auto_start", 115);
  sessionStorage.setItem("auto_end", 128);
  VO_love_7();
}


function VO_love_1() {
    sessionStorage.setItem("file_location", '/love/love_1/');

//Panel
  setVO(1,
    flag1,
    '첫번째 칸'
    );
  setVO(2,
    flag2,
    "어느 집 마당 앞, 자동차 앞"
    );
  setVO(3,
    flag3,
    "왼쪽에 신디의 옆모습이, 오른쪽에 커트의 앞모습이 있다."
    );
//Character
  setVO(4,
    flag5,
    "신디"
    );
  setVO(5,
    flag8,
    "검은 단발머리의 신디는 빨간 원피스를 입었다."
    );
  setVO(6,
    flag6,
    "그녀는 고개를 돌려 커트에게 말한다."
    );
  setVO(7,
    flag5,
    "커트"
    );
  setVO(8,
    flag8,
    "노란 머리의 커트는 화이트 반팔 셔츠, 베이지 반바지, 흰 신발을 신었다."
    );
  setVO(9,
    flag6,
    "그는 왼손에 테니스 라켓을 들고있다."
    );

//Balloon
  setVO(10,
    flag4,
    "신디가 말한다."
  );
  setVO(11,
    flag4,
    "커트"
  );
  setVO(12, 
    flag4,
    "어..."
  );
  setVO(13,
    flag4,
    "우리가 테니스 하러가는걸 까먹었어."
  );
  setVO(14,
    flag4,
    "커트가 말한다."
  );
  setVO(15,
    flag4,
    "음..."
  );  
  setVO(16,
    flag4,
    "자기야 괜찮아."
  );
  setVO(17,
    flag4,
    "우리 차라리 드라이브 하러 가자."
  );
}
function VO_love_2() {
    sessionStorage.setItem("file_location", '/love/love_2/');

//Panel
  setVO(18,
    flag1,
    '두번째 칸'
    );
  setVO(19,
    flag2,
    "노란 오픈카 안 "
    );
  setVO(20,
    flag3,
    "왼쪽에 신디의 얼굴이, 오른쪽에 커트의 얼굴이 있다."
    );
//Character
  setVO(21,
    flag5,
    "신디"
    );
  setVO(22,
    flag6,
    "신디는 차문에 손을 올려, 얼굴을 기대고 있다."
    );
  setVO(23,
    flag7,
    "그녀는 걱정이 가득한 표정이다."
    );
  setVO(24,
    flag5,
    "커트"
    );
  setVO(25,
    flag6,
    "커트는 운전석에서 신디를 보고 있다."
    );
  setVO(26,
    flag7,
    "그는 걱정된 표정이다."
    );

//Balloon
  setVO(27,
    flag4,
    "신디가 생각한다."
  );
  setVO(28,
    flag4,
    "나는 기분이 별로 좋지 않았다, 그리고 커트는 이를 바로 알아차렸다..."
  );
  setVO(29, 
    flag4,
    "커트가 말한다."
  );
  setVO(30,
    flag4,
    "신디, 요즘들어 많이 우울해 보여."
  );
  setVO(31,
    flag4,
    "내가 해줄수 있는게 있으면 좋겠어!"
  );
  setVO(32,
    flag4,
    "내가 널 행복하게 만들수 있게 해줘!"
  );  
}
function VO_love_3() {
    sessionStorage.setItem("file_location", '/love/love_3/');

//Panel
  setVO(33,
    flag1,
    '세번째 칸'
    );
  setVO(34,
    flag2,
    "노란 오픈카 안."
    );
  setVO(35,
    flag3,
    "왼쪽에 커트가, 오른쪽에 신디가, 서로를 마주보고있다."
    );
//Character
  setVO(36,
    flag6,
    "신디와 커트는 대화중이다."
    );
  setVO(37,
    flag5,
    "신디"
    );
  setVO(38,
    flag7,
    "그녀는 걱정하는 표정이다."
    );
  setVO(39,
    flag5,
    "커트"
    );
  setVO(40,
    flag7,
    "그는 걱정하는 표정이다."
    );

//Balloon
  setVO(41,
    flag4,
    "신디가 생각한다."
  );
  setVO(42,
    flag4,
    "난 무엇이 다가올지 알고있었지만, 그땐.."
  );
  setVO(43, 
    flag4,
    "그에게 말해주기 싫었다."
  );
  setVO(44,
    flag4,
    "난 분위기를 바꾸려 했다."
  );
  setVO(45,
    flag4,
    "신디가 말한다."
  );
  setVO(46,
    flag4,
    "세상에, 커트,"
  );  
  setVO(47,
    flag4,
    "넌 나를 너무 많이 걱정하고 있어!"
  );  
  setVO(48,
    flag4,
    "그러지마,"
  );  
  setVO(49,
    flag4,
    "우리 수영하러 가자."
  );  
}
function VO_love_4() {    
  sessionStorage.setItem("file_location", '/love/love_4/');

//Panel
  setVO(50,
    flag1,
    '네번째 칸'
    );
  setVO(51,
    flag2,
    "노란 배경"
    );
  setVO(52,
    flag3,
    "왼쪽 밑에 신디의 얼굴이 있다."
    );
//Character
  setVO(53,
    flag5,
    "신디"
    );
  setVO(54,
    flag7,
    "그녀는 고민이 많은 표정이다."
    );


//Balloon
  setVO(55,
    flag4,
    "그녀는 생각한다."
  );
  setVO(56,
    flag4,
    "나는 커트를 좋아했지만, 그를 사랑하지는 않았다."
  );
  setVO(57, 
    flag4,
    "그리고 그와 결혼하는것은 단지 부모님께 반항하는것이라는 것을 알았다."
  );
  setVO(58,
    flag4,
    "나는 이 문제를 혼자 이겨내야만 한다..."
  );
  setVO(59,
    flag4,
    "포기하지 않고!"
  );
  setVO(60,
    flag4,
    "그날 저녁, 우리는 글로리아 집에 들렀다."
  );  
  setVO(61,
    flag4,
    "많은 사람들이 글로리아네에 모여있었다."
  );  
}
function VO_love_5() {
  sessionStorage.setItem("file_location", '/love/love_5/');

//Panel
  setVO(62,
    flag1,
    '다섯번째 칸'
    );
  setVO(63,
    flag2,
    "파티가 열리고 있는 집 안."
    );
  setVO(64,
    flag3,
    "왼쪽에 커트와 신디가 서있고, 가운데 글로리아의 남편이 서있고, 글로리아는 오른쪽에 앉아있다."
    );
//Character
  setVO(65,
    flag5,
    "신디"
    );
  setVO(66,
    flag8,
    "검은 단발 머리의 신디는 노란 원피스를 입었다."
    );
  setVO(67,
    flag6,
    "그녀는 파란 코트를 왼손에 든채, 사람들과 대화중이다."
    );
  setVO(68,
    flag7,
    "그녀는 웃고 있다."
    );
    setVO(69,
    flag5,
    "커트"
    );
  setVO(70,
    flag8,
    "노란 머리의 커트는 갈색 정장에 초록 넥타이를 했다."
    );
  setVO(71,
    flag6,
    "그는 대화 중이다."
    );
  setVO(72,
    flag7,
    "그는 미소를 짓고 있다."
    );
  setVO(73,
    flag5,
    "글로리아의 남편"
    );
  setVO(74,
    flag8,
    "갈색 머리의 글로리아의 남편은 회색 정장에 파란 넥타이를 했다."
    );
  setVO(75,
    flag6,
    "그는 오른손에 와인잔을 들고 대화중이다."
    );
  setVO(76,
    flag7,
    "그의 눈썹은 올라가 있다."
    );
    setVO(77,
    flag5,
    "글로리아"
    );
  setVO(78,
    flag8,
    "금발 머리의 글로리아는 초록 드레스를 입었다."
    );
  setVO(79,
    flag6,
    "그녀는 오른손에 담배를 들고 대화중이다."
    );
  setVO(80,
    flag7,
    "그녀는 대수롭지 않은 표정이다."
    );

//Balloon
  setVO(81,
    flag4,
    "커트가 말한다."
  );
  setVO(82,
    flag4,
    "안녕 친구들!"
  );
  setVO(83, 
    flag4,
    "무슨 일이야?"
  );
  setVO(84,
    flag4,
    "글로리아의 남편이 말한다."
  );
  setVO(85,
    flag4,
    "반짝있는, 위트있는..."
  );
  setVO(86,
    flag4,
    "훌륭한 대화!"
  );  
  setVO(87,
    flag4,
    "분별있는 생각..."
  );  
    setVO(88,
    flag4,
    "어떤걸 기대했어?"
  );
  setVO(89,
    flag4,
    "글로리아가 말한다."
  );
  setVO(90,
    flag4,
    "평범한 저녁이라는 뜻이야!"
  );  
}
function VO_love_6() {
  sessionStorage.setItem("file_location", '/love/love_6/');

//Panel
  setVO(91,
    flag1,
    '여섯번째 칸'
    );
  setVO(92,
    flag2,
    "파티가 열리고 있는 집 안."
    );
  setVO(93,
    flag3,
    "왼쪽에서 부터, 글로리아의 남편, 글로리아, 커트가 소파에 일렬로 앉아있다. 신디는 오른쪽에 그들을 마주보고 따로 앉아있다."
    );

//Character
  setVO(94,
    flag5,
    "글로리아의 남편"
    );
  setVO(95,
    flag6,
    "글로리아의 남편은 소파에 팔을 올린채 앉아있다."
    );
  setVO(96,
    flag7,
    "그는 걱정이 많고, 풀이 죽은 표정이다."
    );
  setVO(97,
    flag5,
    "글로리아"
    );
  setVO(98,
    flag6,
    "글로리아는 팔짱을 낀채 앉아있다."
    );
  setVO(99,
    flag7,
    "그녀는 못마땅한 표정이다."
    );
  setVO(100,
    flag5,
    "커트"
    );
  setVO(101,
    flag6,
    "커트는 바닥을 보며 앉아있다."
    );
  setVO(102,
    flag7,
    "그는 공감하는 표정이다."
    );
  setVO(103,
    flag5,
    "신디"
    );
  setVO(104,
    flag6,
    "신디는 앞 세사람과 말하고 있다."
    );
  setVO(105,
    flag7,
    "그녀는 화가난 표정이다."
    );



//Balloon
  setVO(106,
    flag4,
    "대화는 목적없이 이어졌다..."
  );
  setVO(107,
    flag4,
    "글로리아의 남편이 말한다."
  );
  setVO(108, 
    flag4,
    "우리 아버지께서 내게 뉴욕에 있는 광고일을 맡기셨어."
  );
  setVO(109,
    flag4,
    "커트가 말한다."
  );
  setVO(110,
    flag4,
    "맞아, 나도 그래!"
  );
  setVO(111,
    flag4,
    "우리 아버지도 나를 은행으로 데려가셨지,"
  );  
  setVO(112,
    flag4,
    "나는 삼촌의 출판회사에서 일하고 싶은데..."
  );  
    setVO(113,
    flag4,
    "신디가 말한다."
  );
  setVO(114,
    flag4,
    "너가 운이 좋아 그 일을 한다는 생각은 안해봤어?"
  );
}
function VO_love_7() {
  sessionStorage.setItem("file_location", '/love/love_7/');

//Panel
  setVO(115,
    flag1,
    '페이지 마지막'
    );
  setVO(116,
    flag2,
    "집안의 창문 앞."
    );
  setVO(117,
    flag3,
    "신디의 상체는  오른쪽을 향한채로 가운데에 있다."
    );

//Character
  setVO(118,
    flag5,
    "신디"
    );
  setVO(119,
    flag6,
    "그녀는 창문 밖을 바라보고 있다."
    );
  setVO(120,
    flag7,
    "그녀는 화가 많이 나 보인다."
    );



//Balloon
  setVO(121,
    flag4,
    "커트가 말한다."
  );
  setVO(122,
    flag4,
    "운이 좋다고?"
  );
  setVO(123, 
    flag4,
    "우리 아버지는 이 마을의 절반을 도울만큼 충분한 여력이 되!"
  );
  setVO(124,
    flag4,
    "내가 왜 일하기를 원해야해?"
  );
  setVO(125,
    flag4,
    "신디가 말한다."
  );
  setVO(126,
    flag4,
    "너가 모른다면, 난 말 안할래."
  );  
  setVO(127,
    flag4,
    "글로리아의 남편이 말한다."
  );  
    setVO(128,
    flag4,
    "너 지금 나한테 하는 말이야?"
  );
}

function love_page_1() {
  sessionStorage.setItem("auto_number", 128);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 128);

  love_1();
  love_2();
  love_3();
  love_4();
  love_5();
  love_6();
  love_7();
}


function love_strip_1() {
  sessionStorage.setItem("auto_number", 49);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 49);
  love_1();
  love_2();
  love_3();
}
function love_strip_2() {
  sessionStorage.setItem("auto_number", 41);
  sessionStorage.setItem("auto_start", 50);
  sessionStorage.setItem("auto_end", 90);
  love_4();
  love_5();
}
function love_strip_3() {
  sessionStorage.setItem("auto_number", 38);
  sessionStorage.setItem("auto_start", 91);
  sessionStorage.setItem("auto_end", 128);
  love_6();
  love_7();
}


function love_panel_1() {
  sessionStorage.setItem("auto_number", 17);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 17);
  love_1();
}
function love_panel_2() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 18);
  sessionStorage.setItem("auto_end", 32);
  love_2();
}
function love_panel_3() {
  sessionStorage.setItem("auto_number", 17);
  sessionStorage.setItem("auto_start", 33);
  sessionStorage.setItem("auto_end", 49);
  love_3();
}
function love_panel_4() {
  sessionStorage.setItem("auto_number", 12);
  sessionStorage.setItem("auto_start", 50);
  sessionStorage.setItem("auto_end", 61);
  love_4();
}
function love_panel_5() {
  sessionStorage.setItem("auto_number", 29);
  sessionStorage.setItem("auto_start", 62);
  sessionStorage.setItem("auto_end", 90);
  love_5();
}
function love_panel_6() {
  sessionStorage.setItem("auto_number", 24);
  sessionStorage.setItem("auto_start", 91);
  sessionStorage.setItem("auto_end", 114);
  love_6();
}
function love_panel_7() {
  sessionStorage.setItem("auto_number", 14);
  sessionStorage.setItem("auto_start", 115);
  sessionStorage.setItem("auto_end", 128);
  love_7();
}


function love_1() {
    sessionStorage.setItem("file_location",  '../../../data/mp3/partial/love/love_1/');

//Panel
  setMP3(1,
    flag1,
    'audio_0_첫번째_칸'
    );
  setMP3(2,
    flag2,
    "audio_0_어느_집_마당_앞__자동차_앞_"
    );
  setMP3(3,
    flag3,
    "audio_1_왼쪽에_신디의_옆모습이__오른쪽에_커트의_앞모습이_있~"
    );
//Character
  setMP3(4,
    flag5,
    "audio_2_신디_"
    );
  setMP3(5,
    flag8,
    "audio_3_검은_단발머리의_신디는_빨간_원피스를_입었다_"
    );
  setMP3(6,
    flag6,
    "audio_4_그녀는_고개를_돌려_커트에게_말한다_"
    );
  setMP3(7,
    flag5,
    "audio_5_커트_"
    );
  setMP3(8,
    flag8,
    "audio_6_노란_머리의_커트는_화이트_반팔_셔츠__베이지_반바지~"
    );
  setMP3(9,
    flag6,
    "audio_7_그는_왼손에_테니스_라켓을_들고있다_"
    );

//Balloon
  setMP3(10,
    flag4,
    "audio_9_신디가_말한다_"
  );
  setMP3(11,
    flag4,
    "audio_10_커트"
  );
  setMP3(12, 
    flag4,
    "audio_11_어___"
  );
  setMP3(13,
    flag4,
    "audio_12_우리가_테니스_하러가는걸_까먹었어_"
  );
  setMP3(14,
    flag4,
    "audio_13_커트가_말한다_"
  );
  setMP3(15,
    flag4,
    "audio_14_음___"
  );  
  setMP3(16,
    flag4,
    "audio_15_자기야_괜찮아_"
  );
  setMP3(17,
    flag4,
    "audio_16_우리_차라리_드라이브_하러_가자_"
  );
}
function love_2() {
    sessionStorage.setItem("file_location",  '../../../data/mp3/partial/love/love_2/');

//Panel
  setMP3(18,
    flag1,
    'audio_1_두번째_칸'
    );
  setMP3(19,
    flag2,
    "audio_0_노란_오픈카_안_"
    );
  setMP3(20,
    flag3,
    "audio_1_왼쪽에_신디의_얼굴이__오른쪽에_커트의_얼굴이_있다_"
    );
//Character
  setMP3(21,
    flag5,
    "audio_2_신디"
    );
  setMP3(22,
    flag6,
    "audio_3_신디는_차문에_손을_올려__얼굴을_기대고_있다_"
    );
  setMP3(23,
    flag7,
    "audio_4_그녀는_걱정이_가득한_표정이다_"
    );
  setMP3(24,
    flag5,
    "audio_5_커트"
    );
  setMP3(25,
    flag6,
    "audio_6_커트는_운전석에서_신디를_보고_있다_"
    );
  setMP3(26,
    flag7,
    "audio_7_그는_걱정된_표정이다_"
    );

//Balloon
  setMP3(27,
    flag4,
    "audio_8_신디가_생각한다_"
  );
  setMP3(28,
    flag4,
    "audio_9_나는_기분이_별로_좋지_않았다__그리고_커트는_이를_~"
  );
  setMP3(29, 
    flag4,
    "audio_10_커트가_말한다_"
  );
  setMP3(30,
    flag4,
    "audio_11_신디__요즘들어_많이_우울해_보여_"
  );
  setMP3(31,
    flag4,
    "audio_12_내가_해줄수_있는게_있으면_좋겠어_"
  );
  setMP3(32,
    flag4,
    "audio_13_내가_널_행복하게_만들수_있게_해줘_"
  );  
}
function love_3() {
    sessionStorage.setItem("file_location",  '../../../data/mp3/partial/love/love_3/');

//Panel
  setMP3(33,
    flag1,
    'audio_2_세번째_칸'
    );
  setMP3(34,
    flag2,
    "audio_0_노란_오픈카_안_"
    );
  setMP3(35,
    flag3,
    "audio_1_왼쪽에_커트가__오른쪽에_신디가__서로를_마주보고있다_"
    );
//Character
  setMP3(36,
    flag6,
    "audio_2_신디와_커트는_대화중이다_"
    );
  setMP3(37,
    flag5,
    "audio_3_신디"
    );
  setMP3(38,
    flag7,
    "audio_4_그녀는_걱정하는_표정이다_"
    );
  setMP3(39,
    flag5,
    "audio_5_커트"
    );
  setMP3(40,
    flag7,
    "audio_6_그는_걱정하는_표정이다_"
    );

//Balloon
  setMP3(41,
    flag4,
    "audio_7_신디가_생각한다_"
  );
  setMP3(42,
    flag4,
    "audio_8_난_무엇이_다가올지_알고있었지만__그땐__"
  );
  setMP3(43, 
    flag4,
    "audio_9_그에게_말해주기_싫었다_"
  );
  setMP3(44,
    flag4,
    "audio_10_난_분위기를_바꾸려_했다_"
  );
  setMP3(45,
    flag4,
    "audio_11_신디가_말한다_"
  );
  setMP3(46,
    flag4,
    "audio_12_세상에__커트___"
  );  
  setMP3(47,
    flag4,
    "audio_13_넌_나를_너무_많이_걱정하고_있어_"
  );  
  setMP3(48,
    flag4,
    "audio_14_그러지마___"
  );  
  setMP3(49,
    flag4,
    "audio_15_우리_수영하러_가자_"
  );  
}
function love_4() {    
  sessionStorage.setItem("file_location", '../../../data/mp3/partial/love/love_4/');

//Panel
  setMP3(50,
    flag1,
    'audio_3_네번째_칸'
    );
  setMP3(51,
    flag2,
    "audio_0_노란_배경_"
    );
  setMP3(52,
    flag3,
    "audio_1_왼쪽_밑에_신디의_얼굴이_있다_"
    );
//Character
  setMP3(53,
    flag5,
    "audio_3_신디"
    );
  setMP3(54,
    flag7,
    "audio_2_그녀는_고민이_많은_표정이다_"
    );


//Balloon
  setMP3(55,
    flag4,
    "audio_3_그녀는_생각한다_"
  );
  setMP3(56,
    flag4,
    "audio_4_나는_커트를_좋아했지만__그를_사랑하지는_않았다_"
  );
  setMP3(57, 
    flag4,
    "audio_5_그리고_그와_결혼하는것은_단지_부모님께_반항하는것이라~"
  );
  setMP3(58,
    flag4,
    "audio_6_나는_이_문제를_혼자_이겨내야만_한다___"
  );
  setMP3(59,
    flag4,
    "audio_7_포기하지_않고_"
  );
  setMP3(60,
    flag4,
    "audio_8_그날_저녁__우리는_글로리아_집에_들렀다_"
  );  
  setMP3(61,
    flag4,
    "audio_9_많은_사람들이_글로리아네에_모여있었다_"
  );  
}
function love_5() {
  sessionStorage.setItem("file_location",  '../../../data/mp3/partial/love/love_5/');

//Panel
  setMP3(62,
    flag1,
    'audio_4_다섯번째_칸'
    );
  setMP3(63,
    flag2,
    "audio_0_파티가_열리고_있는_집_안_"
    );
  setMP3(64,
    flag3,
    "audio_1_왼쪽에_커트와_신디가_서있고__가운데_글로리아의_남편~"
    );
//Character
  setMP3(65,
    flag5,
    "audio_2_신디"
    );
  setMP3(66,
    flag8,
    "audio_3_검은_단발_머리의_신디는_노란_원피스를_입었다_"
    );
  setMP3(67,
    flag6,
    "audio_4_그녀는_파란_코트를_왼손에_든채__사람들과_대화중이다_"
    );
  setMP3(68,
    flag7,
    "audio_5_그녀는_웃고_있다_"
    );
    setMP3(69,
    flag5,
    "audio_6_커트"
    );
  setMP3(70,
    flag8,
    "audio_7_노란_머리의_커트는_갈색_정장에_초록_넥타이를_했다_"
    );
  setMP3(71,
    flag6,
    "audio_8_그는_대화_중이다_"
    );
  setMP3(72,
    flag7,
    "audio_9_그는_미소를_짓고_있다_"
    );
  setMP3(73,
    flag5,
    "audio_10_글로리아의_남편"
    );
  setMP3(74,
    flag8,
    "audio_11_갈색_머리의_글로리아의_남편은_회색_정장에_파란_넥타~"
    );
  setMP3(75,
    flag6,
    "audio_12_그는_오른손에_와인잔을_들고_대화중이다_"
    );
  setMP3(76,
    flag7,
    "audio_13_그의_눈썹은_올라가_있다_"
    );
    setMP3(77,
    flag5,
    "audio_14_글로리아"
    );
  setMP3(78,
    flag8,
    "audio_15_금발_머리의_글로리아는_초록_드레스를_입었다_"
    );
  setMP3(79,
    flag6,
    "audio_16_그녀는_오른손에_담배를_들고_대화중이다_"
    );
  setMP3(80,
    flag7,
    "audio_17_그녀는_대수롭지_않은_표정이다_"
    );

//Balloon
  setMP3(81,
    flag4,
    "audio_18_커트가_말한다_"
  );
  setMP3(82,
    flag4,
    "audio_19_안녕_친구들_"
  );
  setMP3(83, 
    flag4,
    "audio_20_무슨_일이야_"
  );
  setMP3(84,
    flag4,
    "audio_21_글로리아의_남편이_말한다_"
  );
  setMP3(85,
    flag4,
    "audio_22_반짝있는__위트있는___"
  );
  setMP3(86,
    flag4,
    "audio_23_훌륭한_대화_"
  );  
  setMP3(87,
    flag4,
    "audio_24_분별있는_생각___"
  );  
    setMP3(88,
    flag4,
    "audio_25_어떤걸_기대했어__"
  );
  setMP3(89,
    flag4,
    "audio_26_글로리아가_말한다_"
  );
  setMP3(90,
    flag4,
    "audio_27_평범한_저녁이라는_뜻이야_"
  );  
}
function love_6() {
  sessionStorage.setItem("file_location",  '../../../data/mp3/partial/love/love_6/');

//Panel
  setMP3(91,
    flag1,
    'audio_5_여섯번째_칸'
    );
  setMP3(92,
    flag2,
    "audio_0_파티가_열리고_있는_집_안_"
    );
  setMP3(93,
    flag3,
    "audio_1_왼쪽에서_부터__글로리아의_남편__글로리아__커트가_~"
    );

//Character
  setMP3(94,
    flag5,
    "audio_10_글로리아의_남편"
    );
  setMP3(95,
    flag6,
    "audio_3_글로리아의_남편글로리아의_남편은_소파에_팔을_올린채_~"
    );
  setMP3(96,
    flag7,
    "audio_5_그는_걱정이_많고__풀이_죽은_표정이다_"
    );
  setMP3(97,
    flag5,
    "audio_0_글로리아"
    );
  setMP3(98,
    flag6,
    "audio_1_글로리아는_팔짱을_낀채_앉아있다_"
    );
  setMP3(99,
    flag7,
    "audio_2_그녀는_못마땅한_표정이다_"
    );
  setMP3(100,
    flag5,
    "audio_3_커트"
    );
  setMP3(101,
    flag6,
    "audio_4_커트는_바닥을_보며_앉아있다_"
    );
  setMP3(102,
    flag7,
    "audio_4_그는_공감하는_표정이다_"
    );
  setMP3(103,
    flag5,
    "audio_6_신디"
    );
  setMP3(104,
    flag6,
    "audio_7_신디는_앞_세사람과_말하고_있다_"
    );
  setMP3(105,
    flag7,
    "audio_8_그녀는_화가난_표정이다_"
    );



//Balloon
  setMP3(106,
    flag4,
    "audio_11_대화는_목적없이_이어졌다___"
  );
  setMP3(107,
    flag4,
    "audio_12_글로리아의_남편이_말한다_"
  );
  setMP3(108, 
    flag4,
    "audio_13_우리_아버지께서_내게_뉴욕에_있는_광고일을_맡기셨어_"
  );
  setMP3(109,
    flag4,
    "audio_14_커트가_말한다_"
  );
  setMP3(110,
    flag4,
    "audio_15_맞아__나도_그래_"
  );
  setMP3(111,
    flag4,
    "audio_16_우리_아버지도_나를_은행으로_데려가셨지___"
  );  
  setMP3(112,
    flag4,
    "audio_17_나는_삼촌의_출판회사에서_일하고_싶은데___"
  );  
    setMP3(113,
    flag4,
    "audio_18_신디가_말한다_"
  );
  setMP3(114,
    flag4,
    "audio_19_너가_운이_좋아_그_일을_한다는_생각은_안해봤어__"
  );
}
function love_7() {
  sessionStorage.setItem("file_location", '../../../data/mp3/partial/love/love_7/');

//Panel
  setMP3(115,
    flag1,
    'audio_6_페이지_마지막'
    );
  setMP3(116,
    flag2,
    "audio_0_집안의_창문_앞_"
    );
  setMP3(117,
    flag3,
    "audio_1_신디의_상체는_오른쪽을_향한채로_가운데에_있다_"
    );

//Character
  setMP3(118,
    flag5,
    "audio_2_신디"
    );
  setMP3(119,
    flag6,
    "audio_3_그녀는_창문_밖을_바라보고_있다_"
    );
  setMP3(120,
    flag7,
    "audio_4_그녀는_화가_많이_나_보인다_"
    );



//Balloon
  setMP3(121,
    flag4,
    "audio_5_커트가_말한다_"
  );
  setMP3(122,
    flag4,
    "audio_6_운이_좋다고_"
  );
  setMP3(123, 
    flag4,
    "audio_7_우리_아버지는_이_마을의_절반을_도울만큼_충분한_여력~"
  );
  setMP3(124,
    flag4,
    "audio_8_내가_왜_일하기를_원해야해_"
  );
  setMP3(125,
    flag4,
    "audio_9_신디가_말한다_"
  );
  setMP3(126,
    flag4,
    "audio_10_너가_모른다면__난_말_안할래_"
  );  
  setMP3(127,
    flag4,
    "audio_11_글로리아의_남편이_말한다_"
  );  
    setMP3(128,
    flag4,
    "audio_12_너_지금_나한테_하는_말이야_"
  );
}
