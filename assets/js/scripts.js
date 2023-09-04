const languageLinks = document.querySelectorAll(".language-switch");

  if (languageLinks) {
    languageLinks.forEach((item) => {
      item.addEventListener("click", () => {
        // 현재 URL 가져오기
        let currentUrl = window.location.href;
        let newUrl = addLanguageCode(currentUrl);
        
        // 생성된 URL로 페이지 이동
        window.location.href = newUrl;
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
