html에서 src폴더의 이미지 넣을땐 이미지를 import

import bg from './bg.png'

function App(){
  return (
    <div>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
    </div>
  )
}
1. import 작명 from './이미지경로'
2. 이미지경로가 필요한 곳에서 작명한걸 사용

<img>태그 쓰고싶으면 <img src={bg}/> 


public 폴더에 있는 이미지 사용
<img src="/logo192.png" /> 

권장되는 방식
<img src={process.env.PUBLIC_URL + '/logo192.png'} /> 


다른파일에 있던 변수 가져오려면
1. 변수를 export하고
2. import하면 끝

export 하려면 export default 변수명

let a=10;
export default a;

import 작명 from '.data.js';

export여러개 하려면 export {변수1, 변수2};
import {a,b} from '.data.js';

함수, 컴포넌트 export 가능


object자료

let a = ['kim', 20]
let b = {name : 'kim', age : 20}

b.name

let data = [{첫번째상품},{},{}]

복잡한 자료에서 데이터 뽑을 땐 시작기호만 잘 보면 됩니다.

상품목록 컴포넌트화
상품명 데이터바인딩
반복적인 부분 map 반복문 쓰기