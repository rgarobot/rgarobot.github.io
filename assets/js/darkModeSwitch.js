const darkModeSwitches = document.querySelectorAll(".dark-mode-switch");

if (darkModeSwitches) {
  darkModeSwitches.forEach((item) => {
    item.addEventListener("click", () => {
      darkModeSwitches.forEach((item) => item.classList.add("animated"));
      toggleDarkMode();
    });
  });
}

function toggleDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.documentElement.setAttribute("data-mode", "light");
    localStorage.setItem("darkMode", false);
    darkModeSwitches.forEach((item) => item.classList.add("light"));
    darkModeSwitches.forEach((item) => item.classList.remove("dark"));
  } else {
    document.documentElement.setAttribute("data-mode", "dark");
    localStorage.setItem("darkMode", true);
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
    darkModeSwitches.forEach((item) => item.classList.remove("light"));
  }
}

function initDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
    return;
  }
  if (darkMode === "false") {
    darkModeSwitches.forEach((item) => item.classList.add("light"));
    return;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-mode", "dark");
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
  }
}

initDarkMode();


const languageSwitches = document.querySelectorAll(".language-switch");

  if (languageSwitches) {
    languageSwitches.forEach((item) => {
      item.addEventListener("click", () => {
        // 현재 URL 가져오기
        let currentUrl = window.location.href;
        let newUrl = "";

        if (item.classList.contains("lang-en")) {
          // "lang-en" 클래스가 있는 경우 "/ko" 제거
          newUrl = removeLanguageCode(currentUrl);
        } else if (item.classList.contains("lang-ko")) {
          // "lang-ko" 클래스가 있는 경우 "/ko" 추가
          newUrl = addLanguageCode(currentUrl);
        }

        // 생성된 URL로 페이지 이동
        if (newUrl) {
          window.location.href = newUrl;
        }
      });
    });
  }

  // 언어 코드를 추가하여 새로운 URL 생성하는 함수
  function addLanguageCode(url) {
    // URL을 /로 분리하여 배열로 만들기
    let urlParts = url.split("/");

    // 배열 중 두 번째 요소(대표주소 다음의 경로)에 언어 코드 추가
    urlParts.splice(3, 0, "ko");

    // 새로운 URL 생성하여 반환
    let newUrl = urlParts.join("/");
    return newUrl;
  }

  // 언어 코드를 제거하여 새로운 URL 생성하는 함수
  function removeLanguageCode(url) {
    // "/ko"를 빈 문자열로 대체하여 언어 코드 제거
    let newUrl = url.replace("/ko", "");
    return newUrl;
  };
