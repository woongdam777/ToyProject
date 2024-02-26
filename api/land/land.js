// const key = '';

// var xhr = new XMLHttpRequest();
// var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade'; /*URL*/

// var queryParams = '?' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
// queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
// queryParams += '&' + encodeURIComponent(key) + '='+'서비스키'; /*Service Key*/
// // queryParams += '&' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
// document.getElementById('req').innerText = url+queryParams;

// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         let data = 'Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText;
//         // alert(data);
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(data, 'text/xml');

//         document.getElementById('content').innerText = data;
//         console.log(xmlDoc);
//     }
// };

// xhr.send('');

// var xhr = new XMLHttpRequest();
// var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade'; /*URL*/
// var queryParams = '?' + encodeURIComponent('') + '='+'서비스키'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
// queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');


// XMLHttpRequest를 사용하여 공공 데이터 포털 API에 요청을 보내고 데이터를 가져오는 함수
function fetchDataFromPublicDataPortal() {
    var xhr = new XMLHttpRequest();
    var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade'; /*URL*/
    var queryParams = '?' + '' + '='+'서비스키'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
    queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('201512'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // 요청이 성공하면 데이터를 처리합니다.
                console.log('Response body:', this.responseText);
            } else {
                // 요청이 실패한 경우에 대한 처리를 추가할 수 있습니다.
                console.error('Failed to fetch data. Status:', this.status);
            }
        }
    };

    xhr.send('');
}

// fetchDataFromPublicDataPortal 함수 호출
fetchDataFromPublicDataPortal();
