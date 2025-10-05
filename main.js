var i = 0;
var txt = "Happy 3rd anniversary my lovey, another year, another reason to celebrate our relationship my love hehehe. Thank you for everything my loveee, the wonderful memories, experiences and specially thank you for the love that you gave to me. I know I'm a very insecure boyfriend but you've stayed by my side breaking through every struggle we encountered and even in bad times you're always there to support me and cheer me up I am very lucky to have you my loveee. There's no such perfect relationship, need lang gyud nato mag sinabtanay love and mo salig sa usag-usa I know masakal gyud ka usahay sa ako attitude im sorry sa dra na part but sometimes i just want to make you learn from your mistakes para malikayan na nimo sunod. Then importantly my loveee salamat kaayu sa part na naa gyapon ka bisan usahay walaang-wala gyud ko and usahay kay ma short tas atong oang laag mo sabot ra gyapon ka 🥺 I'm every happy gyud dra na part my loveee 😭 Thank you for everything gyyd my loveee 😭.........Every moment with you is a treasure. Having you in my life was the best 🥹, HAPPY ANNIVERSARY TO THE LOVE OF MY LIFE!, I LOVE YOUUUU VERYYYY MUCHHH 😘❤️❤️❤️❤️❤️❤️❤️";
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}