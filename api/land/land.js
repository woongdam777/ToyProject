// const key = '';

var xhr = new XMLHttpRequest();
var url = 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSHTrade'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
// var queryParams = '?' + key + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('LAWD_CD') + '=' + encodeURIComponent('11110'); /**/
queryParams += '&' + encodeURIComponent('DEAL_YMD') + '=' + encodeURIComponent('202401'); /**/

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        let data = 'Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText;
        // alert(data);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        document.getElementById('content').innerText = data;
        console.log(xmlDoc);
    }
};

xhr.send('');

