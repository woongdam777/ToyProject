--useState사용법

let [a, b] = useState('남자 코트 추천');
a : state에 보관했던 자료, b : state 변경을 도와주는 함수

--Destructuring 문법 : 좌우 깔맞춤?

let num = [1,2];

let [a, c] = [1,2];

let a = num[0];
let c = num[1];

state 왜 써야됨?
재렌더링됨

언제쓸래?
변동시 자동으로 html에 반영되게 만들고 싶으면 쓰자
자주변경될거같은 html부분은 만들어두자
글자, 클래스네임 등


onClick={}안엔 함수이름을 넣어야함
function(){} / () => {}

state변경은 등호 금지
state변경함수(새로운state)

array/object 다룰때 원본은 보존하는게 좋음
spread 문법 
동작원리

[state변경함수 특징]
기존 == 신규를 비교 같으면 변경안해줌 - 왜? 자원절약 안해도되니까

[array/object 특징]
let arr = [1,2,3]; // [1,2,3]이 어딨는지 아려주는 화살표만 들어있음
let arr -> ram이라는 공간에 담아둠
array/object 담은 변수엔 화살표만 저장됨

그렇기 때문에 " arr[0] = 8 " 이건 화살표를 8로 바꿔달라는 거니까 안됨, 화살표는 변경할 수 없음

변수1 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true같음

array/object는 reference data type이라서 그럼

... 배열 괄호 벗기고 다시 씌워주세요 라는 문법이라 생각하면 좋음
새로운 배열이 생성됨

state가 array/object면 독립적 카피본을 만들어서 수정해야 함 
shallow copy
deep copy

컴포넌트 만드는법
function만들고
return()안에 html담기
<함수명></함수명>쓰기

[동적인 UI 만드는 step]
1. html css 로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

{
    삼항연산자(ternary operator)
    조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
}

map() 사용법
1. array자료 갯수만큼 함수안의 코드 실행해줌
2. 함수의 파라미터는 array안에 있던 자료임
3. retrun에 뭐 적으면 array로 담아줌
[1,2,3].map(function(a){
    return '123123'
})

파라미터 2개까지 설정가능
i는 반복문 돌 때마다 0부터 1씩 증가하는 정수
[1,2,3].map(function(a,i){
    return '123123'
})

map함수
1. 왼쪽 array 자룜나큼 내부코드 실행해줌
2. retrun 오른쪽에 있는 걸 array로 담아줌
3. 유용한 파라미터 2개 사용가능

함수안에서 선언된 변수는 밖에서 사용불가
function 함수(){ 
    let a = 10;
}

쓰고싶으면 props쓰자
<App> <=부모
<Modal> <= 자식
부모->state->자식
이러면 부모가 가지고 잇는 state를 자식에게 전달 할수 있음

부모->자식 state 전송하는 법
1. <자식컴포넌트 작명={state이름}>
2. props 파라미터 등록후 props.작명 사용

부모->자식 state 전송하려면 props문법 쓰면 되는데
부모->자식만 전송

컴포넌트 많아지면 props 쓰는게 귀찮아짐

Q. 다양한 색 모달창이 필요하다
-> 인라인으로 넣는다
props를 사용해서 전달할수 있다.

파라미터 문법은 다양한 기능을 하는 함수를 만들때 사용함
props도 파라미터 문법이다.

props로 일반 문자도 전송가능


input에 뭔가 입력시 코드실행하고 싶으면
onChange / onInput

<input onChange={()=>{console.log(1)}}>

<input>에 입력한 값 가져오는 법
<input onChange={(e)=>{console.log(e.target.value)}}>
e->지금 발생하는 이벤트에 관련한 여러 기능이 담겨잇음
e.target -> 이벤트가 발생한 html
e.target.value -> 이벤트가 발생한 html의 값

상위 html로 퍼지는 이벤트 버블링을 막고 싶으면
e.stopPropagation()

<input>에 입력한 값 저장하려면
useState이용

state변경함수는 늦게처리됨-> 전문용어로 비동기처리