import {useParams} from "react-router-dom";
// import styled from 'styled-components'

// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px;
// `;

function Detail(props) {

  let {id} = useParams();

  return (
    <div className="container">
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