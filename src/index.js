import './styles/youtube.scss'

import requestUser from '../mock/user.json';
//var requestRecommendVideo = '../mock/recommendVideo.json';
//var requestPopularVideo = '../mock/popularVideo.json';

import Notification from './js/gnb/Notification.js';

const notificationArea = document.getElementById('gnb-notification-area');
new Notification(notificationArea);

var request = new XMLHttpRequest();
request.open('GET', requestUser);
request.responseType = 'json';
request.send();

checkLogin(requestUser);

document.getElementById('button-login').addEventListener('click', () => {
  doLogin(requestUser);
  checkLogin(requestUser);
});
document.getElementById('button-logout').addEventListener('click', () => {
  doLogout(requestUser);
  checkLogin(requestUser);
});

document.getElementById('gnb-button-lnb').onclick = function() {
  openLayer('gnb-layer-lnb', 'gnb-button-lnb');
};
document.getElementById('gnb-button-lnb2').onclick = function() {
  openLayer('gnb-layer-lnb', 'gnb-button-lnb2');
};

document.getElementById('gnb-button-make').onclick = function() {
  openLayer('gnb-dropdown-make', 'gnb-button-make');
};
document.getElementById('gnb-button-app').onclick = function() {
  openLayer('gnb-dropdown-app', 'gnb-button-app');
};
//document.getElementById('gnb-button-notification').onclick = function() {
  //openLayer('gnb-dropdown-notification', 'gnb-button-notification');
//};
document.getElementById('gnb-button-account').onclick = function() {
  openLayer('gnb-dropdown-account', 'gnb-button-account');
};

document.addEventListener("click", function(event) {
  const dropdown = document.getElementById('gnb-dropdown-make');
  const button = document.getElementById('gnb-button-make');

  if (event.target.closest('#gnb-dropdown-make'))
    return;

  dropdown.classList.remove('open');
  toggleWaiAria(button, 'aria-expanded');
});

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

function toggleWaiAria(button, property) {
  let aria = button.getAttribute(property);

  if (aria === 'true') {
    aria = 'false';
  } else {
    aria = 'true';
  }
  button.setAttribute(property, aria);
}

function openLayer(dropdownName, buttonName) {
  const dropdown = document.getElementById(dropdownName);
  const button = document.getElementById(buttonName);

  dropdown.classList.toggle('open');

  toggleWaiAria(button, 'aria-expanded');
}