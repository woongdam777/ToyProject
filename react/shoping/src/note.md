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

/detail로 접속하면 상세페이지보여주고
/cart로 접속하면 장바구니 페이지 보여주고
...등

페이지 나누는 법(리액트 미사용)
1. html파일 만드렁서 상세페이지내용 채움
2. 누가 /detail로 접속하면 html파일보내줌

페이지 나누는 법(리액트 사용)
1.컴포넌트 만들어서 상세페이지내용 채움
2.누가 /detail 접속하면 그 컴포넌트 보여줌
react-router-dom 라이브러리 사용

import시 '' 안에 ./로 시작하는 것은 내가 만든 것, 없는 것은 대부분 설치한 라이브러리

1. 페이지 이동도와주는
useNavigate()

404페이지
{/* 404페이지 */}
{/* <Route path='*' element={<div>없는페이지</div>} /> */} 
* 모든 예외

Nested Routes 언제씀?
-여러 유사한 페이지 필요할떄

<Route path='/about' element={<About/>}>
  <Route path='member' element={<div>멤버임</div>} />
  {/* 그냥 멤버에 div만 보여줌 / 어바웃 안에 멤버 보이도록 */}
  <Route path='location' element={<div>위치정보임</div>} />
</Route>

{/* 위아래 같은 것, Nested Routes 태그안에 태그 / route 작성이 약간 간단해지는 이점*/}

<Route path='/about/member' element={<About/>} />
<Route path='/about/location' element={<About/>} />        

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      {/* 보여줄 자리 */}
      <Outlet></Outlet>
    </div>
  )
}