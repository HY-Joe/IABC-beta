function speakTextIntro(num, text) {
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

  //
  var speechParams = {
    OutputFormat: "mp3",
    SampleRate: "16000",
    Text: "",
    TextType: "text",
    VoiceId: "",
  };
  var blank = ".... .... ....";
  speechParams.Text = text;
  speechParams.VoiceId = voiceId;

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      new Audio(url).play();
    }
  });
}

function speakText(num, number, location, composition) {
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:d5f963ba-824c-47fb-b6e5-67cecb164385",
  });

  var audioSourceId = num;

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

  //
  var speechParams = {
    OutputFormat: "mp3",
    SampleRate: "16000",
    Text: "",
    TextType: "text",
    VoiceId: "",
  };
  var blank = ".... .... ....";

  speechParams.Text = number + blank + location + blank + composition;
  speechParams.VoiceId = voiceId;

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      new Audio(url).play();
    }
  });
}
function speakTextBalloon(num, script) {
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:d5f963ba-824c-47fb-b6e5-67cecb164385",
  });

  var audioSourceId = num;

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

  //
  var speechParams = {
    OutputFormat: "mp3",
    SampleRate: "16000",
    Text: "",
    TextType: "text",
    VoiceId: "",
  };
  var blank = ".... .... ....";
  speechParams.Text = script;
  speechParams.VoiceId = voiceId;

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      new Audio(url).play();
    }
  });
}
function speakTextCharacter(num, name, action, emotion, appearance) {
  AWS.config.region = "us-east-1"; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:d5f963ba-824c-47fb-b6e5-67cecb164385",
  });

  var audioSourceId = num;

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

  //
  var speechParams = {
    OutputFormat: "mp3",
    SampleRate: "16000",
    Text: "",
    TextType: "text",
    VoiceId: "",
  };
  var blank = ".... .... ....";

  speechParams.Text =
    name + blank + action + blank + emotion + blank + appearance;
  speechParams.VoiceId = voiceId;

  var polly = new AWS.Polly({ apiVersion: "2016-06-10" });
  var signer = new AWS.Polly.Presigner(speechParams, polly);
  signer.getSynthesizeSpeechUrl(speechParams, function (error, url) {
    if (error) {
    } else {
      new Audio(url).play();
    }
  });
}
