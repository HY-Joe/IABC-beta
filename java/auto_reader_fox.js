function fox_page_1() {
  sessionStorage.setItem("auto_number", 32);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 32);

  fox_1();
  fox_2();
  fox_3();
  fox_4();
  fox_5();
  fox_6();


  speakAll(32, 1, 32);
}

function fox_strip_1() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 15);
  fox_1();
  fox_2();
  fox_3();

  speakAll(15, 1, 15);
}

function fox_strip_2() {
  sessionStorage.setItem("auto_number", 17);
  sessionStorage.setItem("auto_start", 16);
  sessionStorage.setItem("auto_end", 32);
  fox_4();
  fox_5();
  fox_6();

  speakAll(17, 16, 32);
}

function fox_panel_1() {
  sessionStorage.setItem("auto_number", 4);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 4);
  fox_1();
  speakAll(4, 1, 4);
}
function fox_panel_2() {
  sessionStorage.setItem("auto_number", 6);
  sessionStorage.setItem("auto_start", 5);
  sessionStorage.setItem("auto_end", 10);
  fox_2();
  speakAll(6, 5, 10);
}
function fox_panel_3() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 11);
  sessionStorage.setItem("auto_end", 15);
  fox_3();
  speakAll(5, 11, 15);
}
function fox_panel_4() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 16);
  sessionStorage.setItem("auto_end", 20);
  fox_4();
  speakAll(5, 16, 20);
}
function fox_panel_5() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 21);
  sessionStorage.setItem("auto_end", 25);
  fox_5();
  speakAll(5, 21, 25);
}
function fox_panel_6() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 26);
  sessionStorage.setItem("auto_end", 32);
  fox_6();
  speakAll(7, 26, 32);
}

function steenie_said() {
  
}
function fox_1() {
  //1~4
  setPanelData(
    1,
    4,
    "Panel One",
    "In a wood with trees.",
    "STEENIE’s full body is at the center"
  );
  setCharacterData(
    2,
    4,
    "STEENIE",
    "He is walking in the wood while touching his forehead with his left hand.",
    "He seems like he has a headache.",
    "A man has brown hair, wearing a yellow shirt with a red cloak."
  );
  setBalloonData(
    3,
    4,
    "MY GRANDFATHER, STEENIE, FOR-TIFIED HIMSELF WITH BRANDY AND MAKE HIS WAY HOME THROUGH THE DARK WOODS OF HAUNTED PITMURKIE..."
  );
  setBalloonData(4, 0, "AYE! I AM LOST! MY HOME WILL BE TAKEN--IS ME!");
}

function fox_2() {
  //5~10
  setPanelData(
    5,
    4,
    "Panel Two",
    "In a wood with trees.",
    "STEENIE is on the left and A Stranger is on the right."
  );
  setCharacterData(
    6,
    4,
    "STEENIE",
    "He is asking a question to a man.",
    ""
  );
  setCharacterData(
    7,
    4,
    "A Stranger",
    "He stretches his right hand forward towards the man and answers his question.",
    "He is serious.",
    "A man is wearing a blue long hooded cloak."
  );
  setBalloonData(
    8,
    4,
    "SUDDENLY, FROM A DARK THICKET, A STRANGER STEPPED BEFORE HIM..."
  );
  setBalloonData(9, 0, "HUH! WHO ARE YOU?");
  setBalloonData(10, 1, "STEENIE, I HAVE BEEN LOOKING FOR YOU.");
}

function fox_3() {
  //11~15
  setPanelData(
    11,
    4,
    "Panel Three",
    "In a wood with trees.",
    "STEENIE’s upper body  is on the left and A Stranger’s upper body  is on the right."
  );
  setCharacterData(
    12,
    4,
    "STEENIE",
    "He is talking to a man in front.",
    "He looks puzzled."
  );
  setCharacterData(
    13,
    4,
    "A Stranger",
    "He is talking to a man in front.",
    "He is serious."
  );
  setBalloonData(14, 0, "ME? WHAT ON AIRTH CAN YE WANT WITH ME?");
  setBalloonData(
    15,
    1,
    "THE AULD LAIRD IS DISTURBED IN HIS GRAVE BY YOUR CURSES! IF YE DARE VEN-TURE TO GO AND SEE HIM, HE WILL GIVE YOU THE RECEIPT."
  );
}

function fox_4() {
  //16~20
  setPanelData(
    16,
    4,
    "Panel Four",
    "Black background with yellow light on a Stranger.",
    "STEENIE is on the left and A Stranger is on the right."
  );
  setCharacterData(
    17,
    4,
    "A Stranger",
    "He is talking to a man in front.",
    "He is laughing horribly."
  );
  setCharacterData(
    18,
    4,
    "STEENIE",
    "He is talking to a man in front.",
    ""
  );
  setBalloonData(
    19,
    0,
    "I HAVE THE COURAGE TO GO TO THE GATES OF HELL, AND A STEP FARTHER, FOR THAT RECEIPT."
  );
  setBalloonData(20, 1, "HAHAHA THEN COME WITH ME, STEENIE STEENSON!");
}

function fox_5() {
  //21~25
  setPanelData(
    21,
    4,
    "Panel Five",
    "The place is in front of a castle gate.",
    "STTEENIE’s and a Stranger’s backs are in the center."
  );
  setCharacterData(
    22,
    4,
    "STEENIE",
    "He is walking alongside the man next to him.",
    ""
  );
  setCharacterData(
    23,
    4,
    "A Stranger",
    "He is walking alongside the man next to him.",
    ""
  );
  setBalloonData(
    24,
    4,
    "AND SO STEENIE WENT WITH THE MAN AND THEY SOON CAME TO THE DOOR OF A GRIM CASTLE..."
  );
  setBalloonData(
    25,
    0,
    "STRANGE... IF I DIDN’T KNOW IT WAS A FULL TWELVE MILES AWAY, I’D SWEAR IT WAS THE OLD PORTICOES OF REDGAUNTLET CASTLE... CAN I BE DREAMING?"
  );
}

function fox_6() {
  //26~32
  setPanelData(
    26,
    4,
    "Panel Six",
    "The place is in front of a door.",
    "STEENIE’s back is on the left,  Stranger’s back is on the right, and DOUGAL’s front body is in the middle."
  );
  setCharacterData(
    27,
    4,
    "STEENIE",
    "He indicates the man with his index finger, talking to a man in front.",
    ""
  );
  setCharacterData(
    28,
    4,
    "DOUGAL",
    "He is talking to a man in front.",
    "He frowns and speaks seriously."
  );
  setCharacterData(
    29,
    4,
    "A Stranger",
    "He is standing next to STEENIE.",
    ""
  );
  setBalloonData(
    30,
    4,
    "THE DOOR OPENED AND THEY WERE GREETED BY NONE OTHER THAN DOUGAL..."
  );
  setBalloonData(31, 0, "DOUGAL MAC CALLUM, I THOUGHT YE BE DEAD!");
  setBalloonData(
    32,
    2,
    "FORGET ABOUT ME AND LISTEN WELL TO WHAT I HAVE TO SAY."
  );
}
