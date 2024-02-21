const btn = document.querySelector('.btn>button');

btn.addEventListener('click',()=>{

  let add1 = document.querySelector('[name="address1"]').value;
  let add2 = document.querySelector('[name="address2"]').value;
  let week = document.querySelector('[name="week"]').value;

  console.log(add1+" "+add2+" "+week);

  let xhr = new XMLHttpRequest();
  let url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire'; /*URL*/
  // let key = '';
  let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
  // let queryParams = '?' + key + '='+'서비스키'; /*Service Key*/
  queryParams += '&' + encodeURIComponent('Q0') + '=' + encodeURIComponent(add1); /**/
  queryParams += '&' + encodeURIComponent('Q1') + '=' + encodeURIComponent(add2); /**/
  queryParams += '&' + encodeURIComponent('QT') + '=' + encodeURIComponent(week); /**/
  queryParams += '&' + encodeURIComponent('QN') + '=' + encodeURIComponent(''); /**/
  queryParams += '&' + encodeURIComponent('ORD') + '=' + encodeURIComponent('NAME'); /**/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('15'); /**/

  xhr.open('GET', url + queryParams);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
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
})

