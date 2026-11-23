// 실제 운영 API는 CMS 첫 화면의 '서버 주소 설정'에서 입력하여 저장할 수 있습니다.
// 운영 주소가 고정되어 있다면 아래 문자열을 변경해 GitHub에 업로드하세요.
export const DEFAULT_API_URL = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  ? 'http://127.0.0.1:8787'
  : 'https://YOUR-SENIOR-TV-API.workers.dev';
