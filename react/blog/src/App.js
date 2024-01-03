import './App.css';
import { useState } from 'react';

function App() {

  let post =`강남 우동 맛집`;
  let [글제목, b] = useState(['오늘 베스트 추천','남자 코트 추천','월간 바지 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function 남여변경(){
    let copy = [...글제목];
    copy[1] = (copy[1] === '남자 코트 추천') ?'여자 코트 추천':'남자 코트 추천';
    b(copy);
  }

  function 가나다순정렬(){
    let copy = [...글제목];
    copy.sort();
    b(copy);
  }

  function Modal(){
    return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

  function 따봉증가(i){
    let copy = [...따봉];
    copy[i] +=1;
    따봉변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div>
        <button onClick={가나다순정렬}>가나다순정렬</button>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>12월 31일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span onClick={남여변경}>❤</span></h4>
        <p>12월 31일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{modal==false?setModal(true):setModal(false)}} >{ 글제목[2] }</h4>
        <p>12월 31일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return ( <div className="list" key={i}>
                      <h4>
                        <span onClick={()=>{modal==false?setModal(true):setModal(false)}}>{ 글제목[i] }</span>
                        <span onClick={ () => {따봉증가(i)}}>👍</span>
                        {따봉[i]}
                      </h4>
                      <p>12월 31일 발행</p>
                  </div>)
        })
      }

      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

export default App;
