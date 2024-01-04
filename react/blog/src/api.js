const fetchData = (callback) => {
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '서비스키';
    // ... (나머지 쿼리 스트링 추가)
  
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const responseData = JSON.parse(this.responseText);
          callback(responseData);
        } else {
          console.error('Failed to fetch data');
        }
      }
    };
  
    xhr.send('');
  };
  
  export default fetchData;