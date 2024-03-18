import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import styled from 'styled-components'

// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px;
// `;

// 컴포넌트에 갈고리 다는 법 - 라이프사이클
// 옛방식
// class Detail2 extends React.Component{
//   componentDidMount(){
//     // 컴포넌트 mount시 여기 코드 실행됨
//   }
//   componentDidUpdate(){
//     //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
//   }
//   componentWillUnmount(){
//     //Detail2 컴포넌트가 삭제되기전에 실행할 코드
//   }
// }

function Detail(props) {

  // useEffect(()=>{
  //   //여기 적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
  //   let alert = document.querySelector(".alert");
  //   setTimeout(()=>{
  //     alert.style = "display:none";
  //   },2000);
  // });
  let [alert, setAlert] = useState(true);
  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, [])

  let {id} = useParams();

  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
        : null
      }
      {/* <YellowBtn bg="blue"></YellowBtn> */}
      {/* <YellowBtn bg="green"></YellowBtn> */}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" alt={props.shoes[id]} /> 
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail