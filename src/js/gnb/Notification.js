export default class Notification {
   // 이벤트 제어를 위해 공통으로 알아야할 엘리먼트
   notificationButton = document.getElementById('gnb-button-notification');

  // 상위 컴포넌트 밑에 append 하는 형태로
  constructor(notificationArea) {
     const area = document.createElement("div");
     area.classList.add("dropdown_notification");
     area.innerHTML = `
     <div id="gnb-dropdown-notification" class="dropdown_notification">
      <div class="title_wrap">
        <h2 class="Stitle">알림</h2>
        <a href="https://www.youtube.com/account_notifications" class="link_setting">
          <span class="blind">설정</span>
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" class="svg_style icon_setting"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
        </a>
      </div>
      <div class="content_wrap">
        <div class="default">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" class="svg_style icon_notification_default"><g><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g></svg>
          <p class="main_description">여기에 알림이 표시됩니다.</p>
          <p class="sub_description">즐겨찾는 채널을 구독하여 최신 동영상의 알림을 받아 보세요.</p>
        </div>
      </div>
    </div>
    `;

     notificationArea.appendChild(area);

     // 멤버변수에 대입

    this.notificationArea = area;

    // 이벤트 초기화
  }

  initEvent() {
     // 왜 함수 뒤에 bind를 추가했을까 공부해봐
     // bind vs apply vs call 로 검색하면 자료 많이 나옴
      this.notificationArea.addEventListener("click", this.onClickElement.bind(this));
   }

   onClickElement() {
    // 클릭시 필요한 것들 정의
     console.log("click");
  }
}