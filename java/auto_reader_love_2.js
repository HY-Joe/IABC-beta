/*
window.onload = function() {
  sessionStorage.setItem("auto_number", 56);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 56);

  love_1();
  love_2();
  love_3();
  love_4();
  love_5();
  love_6();
  love_7();
}*/

function love_page_1() {
  sessionStorage.setItem("auto_number", 56);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 56);

  love_1();
  love_2();
  love_3();
  love_4();
  love_5();
  love_6();
  love_7();

  //speakAll(56, 1, 56);
}

function love_strip_1() {
  sessionStorage.setItem("auto_number", 21);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 21);
  love_1();
  love_2();
  love_3();

  //speakAll(21, 1, 21);
}
function love_strip_2() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 22);
  sessionStorage.setItem("auto_end", 36);
  love_4();
  love_5();

  //speakAll(15, 22, 36);
}
function love_strip_3() {
  sessionStorage.setItem("auto_number", 20);
  sessionStorage.setItem("auto_start", 37);
  sessionStorage.setItem("auto_end", 56);
  love_6();
  love_7();

  //speakAll(20, 37, 56);
}

function love_panel_1() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 7);
  love_1();
  //speakAll(7, 1, 7);
}
function love_panel_2() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 8);
  sessionStorage.setItem("auto_end", 14);
  love_2();
  //speakAll(7, 8, 14);
}
function love_panel_3() {
  sessionStorage.setItem("auto_number", 7);
  sessionStorage.setItem("auto_start", 15);
  sessionStorage.setItem("auto_end", 21);
  love_3();
  //speakAll(7, 15, 21);
}
function love_panel_4() {
  sessionStorage.setItem("auto_number", 4);
  sessionStorage.setItem("auto_start", 22);
  sessionStorage.setItem("auto_end", 25);
  love_4();
  //speakAll(4, 22, 25);
}
function love_panel_5() {
  sessionStorage.setItem("auto_number", 11);
  sessionStorage.setItem("auto_start", 26);
  sessionStorage.setItem("auto_end", 36);
  love_5();
  //speakAll(11, 26, 36);
}
function love_panel_6() {
  sessionStorage.setItem("auto_number", 12);
  sessionStorage.setItem("auto_start", 37);
  sessionStorage.setItem("auto_end", 48);
  love_6();
  //speakAll(12, 37, 38);
}
function love_panel_7() {
  sessionStorage.setItem("auto_number", 8);
  sessionStorage.setItem("auto_start", 49);
  sessionStorage.setItem("auto_end", 56);
  love_7();
 // speakAll(8, 49, 56);
}

function love_1() {
  setPanelData(
    1,
    4,
    "Panel One",
    "The place is the front yard of a house and in front of a car.",
    "CYNTHY is on the left, and the CURT is on the right."
  );
  setCharacterData(
    2,
    4,
    "CYNTHY",
    "She turns her head and speaks to the man.",
    "A woman with black hair is wearing a long red dress."
  );
  setCharacterData(
    3,
    4,
    "CURT",
    "He is holding a tennis racket with his left hand. His right hand is outstretched.",
    "His face is neutral.",
    "A man with yellow hair is wearing a white shirt, beige short pants and white shoes."
  );
  setBalloonData(4, 4, "Cynthy says");
  setBalloonData(
    5,
    5,
    "CURT! OH... I FORGOT WE WERE GOING TO PLAY TENNIS!");
  setBalloonData(6, 4, "Curt says");
  setBalloonData(
    7,
    0,
    "WELL... OKAY, HONEY! I’D JUST AS SOON GO FOR A DRIVE, ANYWAY!"
  );
}
function love_2() {
  setPanelData(
    8,
    4,
    "Panel Two",
    "The place is inside a yellow convertible car.",
    "CYNTHY’s face is on the left, and the CURT’s face is on the right."
  );
  setCharacterData(
    9,
    4,
    "CYNTHY",
    "She is leaning her arm against the car door.",
    "She seems worried.",
    ""
  );
  setCharacterData(
    10,
    4,
    "CURT",
    "He is driving and looking at the woman next to him.",
    "He seems worried.",
    ""
  );
  setBalloonData(11, 4, "Cynthy thinks");
  setBalloonData(
    12,
    5,
    "I WAS IN A BAD MOOD, AND CURT SENSED it IMMEDIATELY..."
  );
  setBalloonData(13, 4, "Curt says");
  setBalloonData(
    14,
    0,
    "YOU’VE SEEMED SO UNHAPPY LATELY, CYNTHY! I WISH THERE WAS SOMETHING I COULD DO! WISH YOU’D LET ME TRY AND MAKE YOU HAPPY!"
  );
}
function love_3() {
  setPanelData(
    15,
    4,
    "Panel Three",
    "The place is inside a yellow convertible car.",
    "CYNTHY’s face is on the right, and the CURT’s face is on the left."
  );
  setCharacterData(
    16,
    4,
    "CURT",
    "He  is talking to the woman.",
    "He seems worried."
  );
  setCharacterData(
    17,
    4,
    "CYNTHY",
    "She is talking to the man.",
    "She seems worried."
  );
  setBalloonData(18, 4, "Cynthy thinks");
  setBalloonData(
    19,
    5,
    "I KNEW WHAT WAS COMING, BUT I DIDN’T WANT TO GIVE HIM AN ANSWER... NOT THEN. I TRIED TO CHANGE THE MOOD!"
  );
  setBalloonData(20, 4, "Cynthy says");
  setBalloonData(
    21,
    5,
    "GOODNESS, CURT, YOU WORRY ABOUT ME TOO MUCH! C’MON, LET’S GO FOR A SWIM!"
  );
}
function love_4() {
  setPanelData(
    22,
    4,
    "Panel Four",
    "Yellow background",
    "CYNTHY’s head is on the left bottom."
  );
  setCharacterData(23, 4, "CYNTHY", "", "She seems worried.");
  setBalloonData(24, 4, "Cynthy thinks");
  setBalloonData(
    25,
    5,
    "I LIKED CURT BUT I DIDN’T LOVE HIM, AND I KNEW THAT MARRYING HIM WOULD ONLY BE A SURRENDER TO MY PARENTS. I HAD TO LICK THIS PROBLEM MYSELF ... NOT GIVE IN TO it! LATER THAT EVENING, WE DROPPED IN AT GLORIA’S. EVERYBODY GATHERED AT GLORIA’S.."
  );
}
function love_5() {
  setPanelData(
    26,
    4,
    "Panel Five",
    "The place is in front of the house where the party is held.",
    "CURT and CYNTHY stand on the left, GLORIA sits on the right, and her husband stands on the middle."
  );
  setCharacterData(
    27,
    4,
    "CURT",
    "He is in conversation with the people.",
    "He is smirking.",
    "A man with yellow hair is wearing an orange suit with green tie."
  );
  setCharacterData(
    28,
    4,
    "CYNTHY",
    "She is in conversation with the people, holding a blue coat in her left arm.",
    "She is smiling.",
    "A woman with black hair is wearing a long yellow dress."
  );
  setCharacterData(
    29,
    4,
    "GLORIA’s HUSBAND",
    "He is in conversation with the people, holding a wine glass with his right hand.",
    "His eyebrows are raised.",
    "A man with brown hair is wearing a grey suit with blue tie."
  );
  setCharacterData(
    30,
    4,
    "GLORIA",
    "She is in conversation with the people, holding a cigarette with her right hand.",
    "She looks surprised.",
    "A woman with gold hair is wearing a green dress."
  );
  setBalloonData(31, 4, "Cynthy says");
  setBalloonData(32, 5, "HI KIDS! WHAT’S UP?");
  setBalloonData(33, 4, "Gloria's husband says");
  setBalloonData(
    34,
    2,
    "SPARKLING WIT... BRILLIANT CONVERSATION... PENETRATING THOUGHT... WHAT DID YOU EXPECT?"
  );
  setBalloonData(35, 4, "Gloria says");
  setBalloonData(36, 3, "HE MEANS it’S THE USUAL DULL EVENING!");
}
function love_6() {
  setPanelData(
    37,
    4,
    "Panel Six",
    "The place is in front of the house where the party is held.",
    "From the left, CURT, Gloria, and her husband sit on the couch in series, while CYNTHY sits separately facing them on the right."
  );
  setCharacterData(
    38,
    4,
    "CURT",
    "He is sitting on a sofa, looking at the ground.",
    "He seems worried and downcast."
  );
  setCharacterData(
    39,
    4,
    "GLORIA",
    "She is sitting on the sofa with her arms crossed.",
    "She is expressionless."
  );
  setCharacterData(
    40,
    4,
    "GLORIA’s HUSBAND",
    "He is sitting on a sofa with his arms around the sofa.",
    "He is sympathetic."
  );
  setCharacterData(
    41,
    4,
    "CYNTHY",
    "She is talking to the three people in front.",
    "She seems to be irritated ."
  );
  setBalloonData(42, 4, "THE CONVERSATION WANDERED ON AIMLESSLY.....");
  setBalloonData(43, 4, "Gloria's husband says");
  setBalloonData(
    44,
    2,
    "MY OLD MAN SAYS I’M GOING TO HAVE TO TAKE THAT ADVERTISING JOB IN NEW YORK!"
  );
  setBalloonData(45, 4, "Curt says");
  setBalloonData(
    46,
    0,
    "YEAH, ME TOO! HE’LL TAKE ME ON AT THE BANK, BUT I THINK I’D RATHER WORK IN MY UNCLE’S PUBLISHING HOUSE!"
  );
  setBalloonData(47, 4, "Cynthy says");
  setBalloonData(
    48,
    5,
    "DIT it EVER OCCUR TO YOU THAT YOU’RE LUCKY TO GET JOBS?"
  );
}
function love_7() {
  setPanelData(
    49,
    4,
    "Panel Seven",
    "The place is in front of a window inside the house.",
    "CYNTHY is on the center facing right."
  );
  setCharacterData(
    50,
    4,
    "CYNTHY",
    "She is standing, looking at the window.",
    "She seems to be outraged"
  );
  setBalloonData(51, 4, "Curt says");
  setBalloonData(
    52,
    0,
    "LUCKY? MY OLD MAN’S GOT ENOUGH DOUGH TO SUPPORT HALF THIS TOWN! WHY SHOULD I WANT TO WORK?"
  );
  setBalloonData(53, 4, "Cybthy says");
  setBalloonData(54, 5, "IF YOU DON’T KNOW, I’M NOT GOING TO TELL YOU!");
  setBalloonData(55, 4, "Gloria's husband says");
  setBalloonData(56, 2, "ARE YOU SPEAKING TO ME?");
}
