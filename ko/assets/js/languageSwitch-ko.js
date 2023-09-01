const languageSwitches = document.querySelectorAll(".language-switch");

if (languageSwitches) {
    languageSwitches.forEach((item) => {
        item.addEventListener("click", () => {
            // 현재 URL 가져오기
            let currentUrl = window.location.href;
            let newUrl = toggleLanguageCode(currentUrl);

            // 생성된 URL로 페이지 이동
            window.location.href = newUrl;
        });
    });
}

// 언어 코드를 토글하여 새로운 URL 생성하는 함수
function toggleLanguageCode(url) {
    if (url.includes("/ko")) {
        // 이미 언어 코드가 있는 경우 /ko 제거
        return url.replace("/ko", "");
    } else {
        // 언어 코드가 없는 경우 /ko 추가
        return url + "/ko";
    }