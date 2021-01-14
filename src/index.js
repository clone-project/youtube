import './styles/youtube.scss'

var requestUser = '../mock/user.json';
//var requestRecommendVideo = '../mock/recommendVideo.json';
//var requestPopularVideo = '../mock/popularVideo.json';

var request = new XMLHttpRequest();
request.open('GET', requestUser);
request.responseType = 'json';
request.send();

request.onload = function() {
  var userInfo = request.response;
  //var users = JSON.parse(userInfo);
  getUserInformation(users);
};

function getUserInformation(jsonObj) {
  document.getElementById('user-nickname').textContent = jsonObj.user.nickname;
  console.log(jsonObj.user.nickname);
}