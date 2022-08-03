function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CUiweJIuG/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0
var cat=0
var cow=0
var lion=0


function gotResults(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255) + 1;
        random_number_g=Math.floor(Math.random() * 255) + 1;
        random_number_b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear... - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img=document.getElementById("defaultimg.png")

        if(results[0].label=="cat"){
            img.src=("cat.jpeg")
        } else if (results[0].label=="dog"){
            img.src=("dog.jpeg")
        } else if (results[0].label=="cow"){
            img.src=("cow.jpeg")
        } else if (results[0].label=="lion"){
            img.src=("lion.jpeg")
        } else{
            img.src=("defaultimg.png")
        }
    }
}