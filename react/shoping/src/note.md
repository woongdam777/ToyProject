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

상세페이지 여러개
props 사용하기
그리고 URL파라미터 사용하기
"주소:작명"
<Route path='/Detail:id' element={<Detail shoes={shoes} />} />
/Detail/1
/Detail/2
/Detail/3
알아서 보여줌
다만 보이는 내용이 똑같음

해결책
- 각각 다른 컴포넌트(페이지)를 100만개 만들던가
- 하나의 컴포넌트로 각각 다른 내용을 보여주든가

props 활용하면 컴포넌트 1개로 각각 다른 내용 가능

useParams라는 훅을 사용하면 됨
-구글링해서 찾음

URL 파라미터에 이상한거 입력하면?
id라는 변수가 이상하면 상품없다는 UI보여주세요~ 처리

URL은 여러개 쓸수 있음

여기서 문제발생
상품이 정렬되면? - 상세페이지가 이상해짐

/detail/0 접속시 0번째 상품말고 상품id가 0인걸 보여주면 좋을듯

function Detail(props){
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};
export default Detail 

1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌 
2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음 
3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에입력한번호 일 경우 결과를 변수에 담아줍니다. 
그럼 {상품1개} 이런거 남을듯요 출력해봅시다. 
4. 마지막으로 찾은 {상품1개}를 html에 데이터바인딩해놨습니다. 
 
더 짧게 쓰고 싶으면
props.shoes.find((x) => x.id == id )
이렇게 써도 똑같습니다. arrow function에서 return과 중괄호는 동시에 생략가능 

컴포넌트가 많은 경우 스타일링을 하다보면 불편함이 생기는데

1. class 만들어놓은걸 까먹고 중복해서 또 만들거나
2. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나
3. CSS 파일이 너무 길어져서 수정이 어렵거나.

npm install styled-components
import styled from 'styled-components'

컴포넌트이기때문에 작명은 대문자로
변수에 담아서 쓰면됨

장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일넣을 수 있습니다.
장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.
장점3. 페이지 로딩시간 단축됩니다.
덤장점. 스타일이 다른js에 오염안됨
덤장점. 페이지 로딩시간 단축 <style></style>로 넣어줘서 페이지속도향상


단점1. JS 파일이 매우 복잡 / 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵

단점2. JS 파일 간 중복 디자인이 많이 필요하면 다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 되지만,
근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도요

단점3. CSS 담당하는 디자이너가 있다면 협업시 불편할텐데 
그 사람이 styled-components 문법을 모른다면 
그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요하겠군요.
그래서 신기술같은거 도입시엔 언제나 미래를 생각해보아야합니다. 

-----
컴포넌트 라이프사이클 / 인생주기
1. 페이지에 장착 / 생성이 될 수도 있고 (전문용어로 mount)
2. 업데이트 / 재렌더링이 될 수도 있고 (전문용어로 update)
3. 필요없으면 제거 / 삭제가 될 수도 있습니다. (전문용어로 unmount)

왜 알아야되냐
중간중간 간섭가능 - 코드실행가능

useEffect 안에 적은 코드는 html 렌더링 이후에 동작합니다.
- 어려운 연산
- 서버에서 데이터가져오는 작업
- 타이머 장착하는거

useEffect라고 작명한 이유
함수의 핵심기능 외에 쓸데없는 기능들을 프로그래밍 용어로 side effect
컴포넌트의 핵심 기능은 html 렌더링이라 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리

-----
useEffect에 넣을 수 있는 실행조건 

useEffect(()=>{ 실행할코드 }, [count])
useEffect()의 둘째 파라미터로 [ ] 를 넣을 수 있는데 거기에 변수나 state같은 것들을 넣을 수 있습니다.
그렇게 하면 [ ]에 있는 변수나 state 가 변할 때만 useEffect 안의 코드를 실행해줍니다.
그래서 위의 코드는 count라는 변수가 변할 때만 useEffect 안의 코드가 실행되겠군요. 
(참고) [ ] 안에 state 여러개 넣을 수 있음
아무것도 안넣으면 컴포넌트 mount시 (로드시) 1회 실행하고 영영 실행해주지 않습니다.
[] 이거만 쓰면 update시 발동 막을수 있음 mount일때만 실행됨

- clean up function
useEffect 동작하기 전에 특정코드를 실행하고 싶으면 return ()=>{} 안에 넣을 수 있습니다. 
 ```js
useEffect(()=>{ 
  그 다음 실행됨 
  return ()=>{
    여기있는게 먼저실행됨
  }
}, [count])
```
그럼 useEffect 안에 있는 코드를 실행하기 전에 return ()=>{ } 안에 있는 코드를 실행해줍니다. 

(참고1) clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
(참고2) 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다