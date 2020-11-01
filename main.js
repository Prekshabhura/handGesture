  
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(pic) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+pic+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);  //make a model
  
classifier = ml5.imageClassifier('k',modelLoaded);
//classifier function is  used to upload the model so that you can compare the image wit it.
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  //class 107 complete..    
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult); // is a predefined function of ml5.js that is used to compare the
    //captured image with the model, and get the results.
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;

    if(results[0].label == "happy")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128522;";
    }
    if(results[0].label == "sad")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128532;";
    }
    if(results[0].label == "angry")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128548;";
    }

    if(results[1].label == "happy")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "sad")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if(results[1].label == "angry")
    {
	    document.getElementById("update_emoji2").innerHTML = "&#128548;";
    }

  }
}
