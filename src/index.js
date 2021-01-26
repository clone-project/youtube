import './styles/youtube.scss'

import requestUser from '../mock/user.json';
//var requestRecommendVideo = '../mock/recommendVideo.json';
//var requestPopularVideo = '../mock/popularVideo.json';

var request = new XMLHttpRequest();
request.open('GET', requestUser);
request.responseType = 'json';
request.send();

request.onload = function() {
  console.log(requestUser);
  checkLogin(requestUser);

  document.getElementById('button-login').addEventListener('click', () => {
    doLogin(requestUser);
    checkLogin(requestUser);
  });
  document.getElementById('button-logout').addEventListener('click', () => {
    doLogout(requestUser);
    checkLogin(requestUser);
  });
};

function checkLogin(jsonObj) {
  let gnbAccount = document.getElementById('gnb-account');

  if(jsonObj.user.login === true) {
    gnbAccount.classList.add('is_login');
    getUserInformation(jsonObj);
  }
  else {
    gnbAccount.classList.remove('is_login');
  }
}

function doLogin(jsonObj) {
  console.log("login");
  jsonObj.user.login = true;
}
function doLogout(jsonObj) {
  console.log("logout");
  jsonObj.user.login = false;

  console.log(jsonObj);
}

function getUserInformation(jsonObj) {
  document.getElementById('user-profile24').src = jsonObj.user.accounts[0].profile;
  document.getElementById('user-profile40').src = jsonObj.user.accounts[0].profile;
  document.getElementById('user-nickname').textContent = jsonObj.user.accounts[0].nickname;
  document.getElementById('user-id').textContent = jsonObj.user.id;
}

function openAccountLayer() {
  let dropdown = document.getElementById('gnb-dropdown-account');
  let button = document.getElementById('gnb-button-account');
  let aria = button.getAttribute('aria-expanded');

  dropdown.classList.add('open');

  if (aria === 'true') {
    aria = 'false';
  } else {
    aria = 'true';
  }
  button.setAttribute('aria-expanded', aria);
}

window.onload = function() {
  document.getElementById('gnb-button-account').onclick = function() {
    openAccountLayer();
  }
}