let sites=["https://optical.toys/","https://paint.toys/","https://puginarug.com/","https://checkbox.toys/scale/","https://memory.toys/classic/easy/","https://clicking.toys/flip-grid/neat-nine/3-holes/","https://binarypiano.com/","https://maze.toys/mazes/mini/daily/","https://onesquareminesweeper.com/","https://alwaysjudgeabookbyitscover.com/","https://cant-not-tweet-this.com/","https://weirdorconfusing.com/","https://floatingqrcode.com/","https://thatsthefinger.com/","https://eelslap.com/","https://mondrianandme.com/","https://cursoreffects.com/","https://burymewithmymoney.com/","http://www.staggeringbeauty.com/","https://hooooooooo.com/","http://endless.horse/","http://corndog.io/","https://jacksonpollock.org/"]
let range=sites.length;
let button=document.getElementById("button");
function randomize(){
    console.log(range);
    let random=Math.floor(Math.random()*range)
    button.href=sites[random];
}