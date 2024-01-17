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