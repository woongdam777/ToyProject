const btn = document.querySelector('.btn>button');

btn.addEventListener('click',()=>{

  let add1 = document.querySelector('[name="address1"]').value;
  let add2 = document.querySelector('[name="address2"]').value;
  let week = document.querySelector('[name="week"]').value;

  console.log(add1+" "+add2+" "+week);

  let xhr = new XMLHttpRequest();
  let url = 'http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire'; /*URL*/
  let key = '';
  // let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
  let queryParams = '?' + key + '='+'서비스키'; /*Service Key*/
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
          let dutyTime = items[i].querySelector("dutyTime"+week+"s").textContent +" ~ "+ items[i].querySelector("dutyTime"+week+"c").textContent;

          let resultTr = document.createElement('tr');
          resultTr.innerHTML = `<th>`+dutyName+`</th>`+`<td>`+dutyAddr+`</td>`+`<td>`+dutyTel1+`</td>`+`<td>`+dutyTime+`</td>`;
          resultTr.addEventListener('click',()=>{
            let keyword = dutyName+dutyAddr.substring(0, dutyAddr.indexOf(' ', dutyAddr.indexOf(' ') + 1));
            searchPlaceByKeyword(keyword);
          });

          let contentElements = document.querySelector(".primary>table>tbody");
          contentElements.appendChild(resultTr);
      }
    }
  };

  xhr.send('');
})

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색하고, 세 번째 공백 이전의 부분 문자열을 키워드로 사용합니다
function searchPlaceByKeyword(keyword) {
    ps.keywordSearch(keyword, placesSearchCB); 
}

// 키워드 검색 완료 시 호출되는 콜백함수입니다
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        text: place.place_name
    });

    // 마커에 클릭 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
