console.log("start")

var v = document.querySelector('video'); 
var t = prompt('Set the playback rate'); 
if (t != null){
    v.playbackRate = t;
}

