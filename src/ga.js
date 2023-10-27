// ga.js 파일 생성
export function initializeGA(trackingID) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingID);
}
