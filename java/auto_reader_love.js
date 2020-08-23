function love_page_1() {
  sessionStorage.setItem("auto_number", 40);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 40);

  love_1();
  love_2();
  love_3();
  love_4();
  love_5();
  love_6();
  love_7();
}

function love_strip_1() {
  sessionStorage.setItem("auto_number", 15);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 15);
  love_1();
  love_2();
  love_3();

  speakAll(15, 1, 15);
}
function love_strip_2() {
  sessionStorage.setItem("auto_number", 11);
  sessionStorage.setItem("auto_start", 16);
  sessionStorage.setItem("auto_end", 26);
  love_4();
  love_5();

  speakAll(11, 16, 26);
}
function love_strip_3() {
  sessionStorage.setItem("auto_number", 14);
  sessionStorage.setItem("auto_start", 27);
  sessionStorage.setItem("auto_end", 40);
  love_6();
  love_7();

  speakAll(14, 27, 40);
}

function love_panel_1() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 1);
  sessionStorage.setItem("auto_end", 5);
  love_1();
  speakAll(5, 1, 5);
}
function love_panel_2() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 6);
  sessionStorage.setItem("auto_end", 10);
  love_2();
  speakAll(5, 6, 10);
}
function love_panel_3() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 11);
  sessionStorage.setItem("auto_end", 15);
  love_3();
  speakAll(5, 11, 15);
}
function love_panel_4() {
  sessionStorage.setItem("auto_number", 3);
  sessionStorage.setItem("auto_start", 16);
  sessionStorage.setItem("auto_end", 18);
  love_4();
  speakAll(3, 16, 18);
}
function love_panel_5() {
  sessionStorage.setItem("auto_number", 8);
  sessionStorage.setItem("auto_start", 19);
  sessionStorage.setItem("auto_end", 26);
  love_5();
  speakAll(8, 19, 26);
}
function love_panel_6() {
  sessionStorage.setItem("auto_number", 9);
  sessionStorage.setItem("auto_start", 27);
  sessionStorage.setItem("auto_end", 35);
  love_6();
  speakAll(9, 27, 35);
}
function love_panel_7() {
  sessionStorage.setItem("auto_number", 5);
  sessionStorage.setItem("auto_start", 36);
  sessionStorage.setItem("auto_end", 40);
  love_7();
  speakAll(5, 36, 40);
}

function love_1() {
  setPanelData(
    1,
    4,
    "Panel One",
    "The place is the front yard of a house and in front of a car.",
    "CYNTHY’s profile body is on the left, and the CURT’s front body is on the right."
  );
  setCharacterData(
    2,
    4,
    "CYNTHY",
    "She turns her head and speaks to the man.",
    "Unknown",
    "A woman with black hair is wearing a long red dress."
  );
  setCharacterData(
    3,
    4,
    "CURT",
    "The man is holding a tennis racket with his left hand. His right hand is outstretched.",
    "His face is neutral.",
    "A man with yellow hair is wearing a white shirt, beige short pants and white shoes."
  );
  setBalloonData(4, 5, "CURT! OH... I FORGOT WE WERE GOING TO PLAY TENNIS!");
  setBalloonData(
    5,
    0,
    "WELL... OKAY, HONEY! I’D JUST AS SOON GO FOR A DRIVE, ANYWAY!"
  );
}
function love_2() {
  setPanelData(
    6,
    4,
    "Panel Two",
    "The place is inside a yellow convertible car.",
    "CYNTHY’s profile is on the left, and the CURT’s face is on the right."
  );
  setCharacterData(
    7,
    4,
    "CYNTHY",
    "She is leaning her arm against the car door.",
    "She seems worried.",
    ""
  );
  setCharacterData(
    8,
    4,
    "CURT",
    "He is driving and looking at the woman next to him.",
    "He seems worried.",
    ""
  );
  setBalloonData(
    9,
    5,
    "I WAS IN A BAD MOOD, AND CURT SENSED IT IMMEDIATELY..."
  );
  setBalloonData(
    10,
    0,
    "YOU’VE SEEMED SO UNHAPPY LATELY, CUNTHY! I WISH THERE WAS SOMETHING I COULD DO! WISH YOU’D LET ME TRY AND MAKE YOU HAPPY!"
  );
}
function love_3() {
  setPanelData(
    11,
    4,
    "Panel Three",
    "The place is inside a yellow convertible car.",
    "CYNTHY’s profile is on the right, and the CURT’s profile is on the left."
  );
  setCharacterData(
    12,
    4,
    "CURT",
    "He  is talking to the woman.",
    "He seems worried."
  );
  setCharacterData(
    13,
    4,
    "CYNTHY",
    "She is talking to the man.",
    "She seems worried."
  );
  setBalloonData(
    14,
    5,
    "I KNEW WHAT WAS COMING, BUT I DIDN’T WANT TO GIVE HIM AN ANSWER... NOT THEN. I TRIED TO CHANGE THE MOOD!"
  );
  setBalloonData(
    15,
    5,
    "GOODNESS, CURT, YOU WORRY ABOUT ME TOO MUCH! C’MON, LET’S GO FOR A SWIM!"
  );
}
function love_4() {
  setPanelData(
    16,
    4,
    "Panel Four",
    "Yellow background",
    "CYNTHY’s head is on the left bottom."
  );
  setCharacterData(17, 4, "CYNTHY", "Unknown", "She seems worried.");
  setBalloonData(
    18,
    5,
    "I LIKED CURT BUT I DIDN’T LOVE HIM, AND I KNEW THAT MARRYING HIM WOULD ONLY BE A SURRENDER TO MY PARENTS. I HAD TO LICK THIS PROBLEM MYSELF ... NOT GIVE IN TO IT! LATER THAT EVENING, WE DROPPED IN AT GLORIA’S. EVERYBODY GATHERED AT GLORIA’S.."
  );
}
function love_5() {
  setPanelData(
    19,
    4,
    "Panel Five",
    "The place is in front of the house where the party is held.",
    "CURT and CYNTHY stand on the left, GLORIA sits on the right, and her husband stands on the middle."
  );
  setCharacterData(
    20,
    4,
    "CURT",
    "He is in conversation with the people.",
    "He is smirking.",
    "A man with yellow hair  is wearing an orange suit with green tie."
  );
  setCharacterData(
    21,
    4,
    "CYNTHY",
    "She is in conversation with the people, holding a blue coat in her left arm.",
    "She is smiling.",
    "A woman with black hair is wearing a long yellow dress."
  );
  setCharacterData(
    22,
    4,
    "GLORIA’s HUSBAND",
    "He is in conversation with the people, holding a wine glass with his right hand.",
    "His eyebrows are raised.",
    "A man with brown hair is wearing a grey suit with blue tie."
  );
  setCharacterData(
    23,
    4,
    "GLORIA",
    "She is in conversation with the people, holding a cigarette with her right hand.",
    "She looks surprised.",
    "A woman with gold hair is wearing a green dress."
  );
  setBalloonData(24, 5, "HI, KIDS! WHAT’S UP?");
  setBalloonData(
    25,
    2,
    "SPARKLING WIT... BRILLIANT CONVERSATION... PENETRATING THOUGHT... WHAT DID YOU EXPECT?"
  );
  setBalloonData(26, 3, "HE MEANS IT’S THE USUAL DULL EVENING!");
}
function love_6() {
  setPanelData(
    27,
    4,
    "Panel Six",
    "The place is in front of the house where the party is held.",
    "From the left, CURT, Gloria, and her husband sit on the couch in series, while CYNTHY sits separately facing them on the right."
  );
  setCharacterData(
    28,
    4,
    "CURT",
    "He is sitting on a sofa, looking at the ground.",
    "He seems worried and downcast."
  );
  setCharacterData(
    29,
    4,
    "GLORIA",
    "She is sitting on the sofa with her arms crossed.",
    "She is expressionless."
  );
  setCharacterData(
    30,
    4,
    "GLORIA’s HUSBAND",
    "He is sitting on a sofa with his arms around the sofa.",
    "He is sympathetic."
  );
  setCharacterData(
    31,
    4,
    "CYNTHY",
    "She is talking to the three people in front.",
    "She seems to be irritated ."
  );
  setBalloonData(32, 4, "THE CONVERSATION WANDERED ON AIMLESSLY.....");
  setBalloonData(
    33,
    2,
    "MY OLD MAN SAYS I’M GOING TO HAVE TO TAKE THAT ADVERTISING JOB IN NEW YORK!"
  );
  setBalloonData(
    34,
    0,
    "YEAH, ME, TOO! HE’LL TAKE ME ON AT THE BANK, BUT I THINK I’D RATHER WORK IN MY UNCLE’S PUBLISHING HOUSE!"
  );
  setBalloonData(
    35,
    5,
    "DIT IT EVER OCCUR TO YOU THAT YOU’RE LUCKY TO GET JOBS?"
  );
}
function love_7() {
  setPanelData(
    36,
    4,
    "Panel Seven",
    "The place is in front of a window inside the house.",
    "CYNTHY’s profile is on the center facing right."
  );
  setCharacterData(
    37,
    4,
    "CYNTHY",
    "She is standing looking at the window.",
    "She seems to be outraged"
  );
  setBalloonData(
    38,
    0,
    "LUCKY? MY OLD MAN’S GOT ENOUGH DOUGH TO SUPPORT HALF THIS TOWN! WHY SHOULD I WANT TO WORK?"
  );
  setBalloonData(39, 5, "IF YOU DON’T KNOW, I’M NOT GOING TO TELL YOU!");
  setBalloonData(40, 2, "ARE YOU SPEAKING TO ME?");
}
