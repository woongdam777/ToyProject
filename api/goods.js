let xhr = new XMLHttpRequest();
let url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire'; /*URL*/
let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('Q0') + '=' + encodeURIComponent('서울'); /**/
queryParams += '&' + encodeURIComponent('Q1') + '=' + encodeURIComponent('종로'); /**/
queryParams += '&' + encodeURIComponent('QT') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('QN') + '=' + encodeURIComponent(''); /**/
queryParams += '&' + encodeURIComponent('ORD') + '=' + encodeURIComponent('NAME'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      // alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
      let xmlDoc = new DOMParser().parseFromString(this.responseText, "text/xml");
      let items = xmlDoc.getElementsByTagName("item");

      for (let i = 0; i < items.length; i++) {
          let dutyAddr = items[i].querySelector("dutyAddr").textContent;
          let dutyTel1 = items[i].querySelector("dutyTel1").textContent;
          let dutyName = items[i].querySelector("dutyName").textContent;

          let resultTr = document.createElement('tr');
          resultTr.innerHTML = `<th>`+dutyName+`</th>`+`<td>`+dutyAddr+`</td>`+`<td>`+dutyTel1+`</td>`;

          let contentElements = document.querySelector(".primary>table>tbody");
          contentElements.appendChild(resultTr);
      }

      

    }
};

xhr.send('');