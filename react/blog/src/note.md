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