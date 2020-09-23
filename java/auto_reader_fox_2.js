/*
window.onload = function() {
  sessionStorage.setItem("auto_number", 42);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 42);

  fox_1();
  fox_2();
  fox_3();
  fox_4();
  fox_5();
  fox_6();
}
*/

window.onload = function() {
 //fox_현재모드_현재num();
 // fox_++();
}

function fox_page_1() {
  sessionStorage.setItem("auto_number", 42);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 42);

  fox_1();
  fox_2();
  fox_3();
  fox_4();
  fox_5();
  fox_6();


  //speakAll(42, 1, 42);
}

function fox_strip_1() {
  sessionStorage.setItem("auto_number", 20);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 20);
  fox_1();
  fox_2();
  fox_3();

  //speakAll(20, 1, 20);
}

function fox_strip_2() {
  sessionStorage.setItem("auto_number", 22);
  sessionStorage.setItem("auto_start", 21);
  sessionStorage.setItem("auto_end", 42);
  fox_4();
  fox_5();
  fox_6();

  //speakAll(22, 21, 42);
}


function fox_panel_1() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 5);
  
  console.log("fox_panel_1...");
  fox_1();
  //speakAll(5, 1, 5);
}

function fox_panel_2() {
  sessionStorage.setItem("auto_number", 8);
  sessionStorage.setItem("auto_start", 6);
  sessionStorage.setItem("auto_end", 13);
  
  console.log("fox_panel_2...");
  fox_2();
  //speakAll(8, 6, 13);
}
function fox_panel_3() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 14);
  sessionStorage.setItem("auto_end", 20);
  
  console.log("fox_panel_3...");
  fox_3();
  //speakAll(7, 14, 20);
}
function fox_panel_4() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 21);
  sessionStorage.setItem("auto_end", 27);
  fox_4();
  //speakAll(7, 21, 27);
}
function fox_panel_5() {
  sessionStorage.setItem("auto_number", 6);
  sessionStorage.setItem("auto_start", 28);
  sessionStorage.setItem("auto_end", 33);
  fox_5();
  //speakAll(6, 28, 33);
}
function fox_panel_6() {
  sessionStorage.setItem("auto_number", 9);
  sessionStorage.setItem("auto_start", 34);
  sessionStorage.setItem("auto_end", 42);
  fox_6();
  //speakAll(9, 34, 42);
}


function fox_1() {
  //1~5
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
  setBalloonData(4, 4, "Steenie says");
  setBalloonData(5, 0, "AYE! I AM LOST! MY HOME WILL BE TAKEN--IS ME!");
}

function fox_2() {
  //6~13
  setPanelData(
    6,
    4,
    "Panel Two",
    "In a wood with trees.",
    "STEENIE is on the left and A Stranger is on the right."
  );
  setCharacterData(
    7,
    4,
    "STEENIE",
    "He is asking a question to a man.",
    ""
  );
  setCharacterData(
    8,
    4,
    "A Stranger",
    "He stretches his right hand forward towards the man and answers his question.",
    "He is serious.",
    "A man is wearing a blue long hooded cloak."
  );
  setBalloonData(
    9,
    4,
    "SUDDENLY, FROM A DARK THICKET, A STRANGER STEPPED BEFORE HIM..."
  );
  setBalloonData(10, 4, "Steenie says");
  setBalloonData(11, 0, "HUH! WHO ARE YOU?");
  setBalloonData(12, 4, "A stranger says");
  setBalloonData(13, 1, "STEENIE, I HAVE BEEN LOOKING FOR YOU.");
}

function fox_3() {
  //13~20
  setPanelData(
    14,
    4,
    "Panel Three",
    "In a wood with trees.",
    "STEENIE’s upper body  is on the left and A Stranger’s upper body  is on the right."
  );
  setCharacterData(
    15,
    4,
    "STEENIE",
    "He is talking to a man in front.",
    "He looks puzzled."
  );
  setCharacterData(
    16,
    4,
    "A Stranger",
    "He is talking to a man in front.",
    "He is serious."
  );
  setBalloonData(17, 4, "Steenie says");
  setBalloonData(
    18,
    0,
    "ME? WHAT ON AIRTH CAN YE WANT WITH ME?");
  setBalloonData(19, 4, "A stranger says");
  setBalloonData(
    20,
    1,
    "THE AULD LAIRD IS DISTURBED IN HIS GRAVE BY YOUR CURSES! IF YE DARE VEN-TURE TO GO AND SEE HIM, HE WILL GIVE YOU THE RECEIPT."
  );
}

function fox_4() {
  //21~27
  setPanelData(
    21,
    4,
    "Panel Four",
    "Black background with yellow light on a Stranger.",
    "STEENIE is on the left and A Stranger is on the right."
  );
  setCharacterData(
    22,
    4,
    "A Stranger",
    "He is talking to a man in front.",
    "He is laughing horribly."
  );
  setCharacterData(
    23,
    4,
    "STEENIE",
    "He is talking to a man in front.",
    ""
  );
  setBalloonData(24, 4, "Steenie says");
  setBalloonData(
    25,
    0,
    "I HAVE THE COURAGE TO GO TO THE GATES OF HELL, AND A STEP FARTHER, FOR THAT RECEIPT."
  );
  setBalloonData(26, 4, "A stranger says");
  setBalloonData(
    27,
    1,
    "HAHAHA THEN COME WITH ME, STEENIE STEENSON!");
}

function fox_5() {
  //21~25
  setPanelData(
    28,
    4,
    "Panel Five",
    "The place is in front of a castle gate.",
    "STTEENIE’s and a Stranger’s backs are in the center."
  );
  setCharacterData(
    29,
    4,
    "STEENIE",
    "He is walking alongside the man next to him.",
    ""
  );
  setCharacterData(
    30,
    4,
    "A Stranger",
    "He is walking alongside the man next to him.",
    ""
  );
  setBalloonData(
    31,
    4,
    "AND SO STEENIE WENT WITH THE MAN AND THEY SOON CAME TO THE DOOR OF A GRIM CASTLE..."
  );
  setBalloonData(32, 4, "Steenie thinks");
  setBalloonData(
    33,
    0,
    "STRANGE... IF I DIDN’T KNOW IT WAS A FULL TWELVE MILES AWAY, I’D SWEAR IT WAS THE OLD PORTICOES OF REDGAUNTLET CASTLE... CAN I BE DREAMING?"
  );
}

function fox_6() {
  //26~32
  setPanelData(
    34,
    4,
    "Panel Six",
    "The place is in front of a door.",
    "STEENIE’s back is on the left,  Stranger’s back is on the right, and DOUGAL’s front body is in the middle."
  );
  setCharacterData(
    35,
    4,
    "STEENIE",
    "He indicates the man with his index finger, talking to a man in front.",
    ""
  );
  setCharacterData(
    36,
    4,
    "DOUGAL",
    "He is talking to a man in front.",
    "He frowns and speaks seriously."
  );
  setCharacterData(
    37,
    4,
    "A Stranger",
    "He is standing next to STEENIE.",
    ""
  );
 
  setBalloonData(
    38,
    4,
    "THE DOOR OPENED AND THEY WERE GREETED BY NONE OTHER THAN DOUGAL..."
  );
  setBalloonData(39, 4, "Steenie says");
  setBalloonData(40, 0, "DOUGAL MAC CALLUM, I THOUGHT YE BE DEAD!");
  setBalloonData(41, 4, "Dougal says");
  setBalloonData(
    42,
    2,
    "FORGET ABOUT ME AND LISTEN WELL TO WHAT I HAVE TO SAY."
  );
}
