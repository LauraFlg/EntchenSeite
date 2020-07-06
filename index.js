var likes = 0;

function onClick() {
  likes += 1;
  document.getElementById("likes").innerHTML = likes;
}

function onClickDislike() {
  likes -= 1;
  document.getElementById("likes").innerHTML = likes;
}

var likesSecond = 0;
function onClick1() {
  likesSecond += 1;
  document.getElementById("likesSecond").innerHTML = likesSecond;
}

function onClickDislike1() {
  likesSecond -= 1;
  document.getElementById("likesSecond").innerHTML = likesSecond;
}
