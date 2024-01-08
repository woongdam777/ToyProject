import "./App.css";
import { useState } from "react";

function App() {
  const handleData = (data) => {
    console.log("Data:", data);
  };

  let post = `강남 우동 맛집`;
  let [글제목, b] = useState([
    "오늘 베스트 추천",
    "남자 코트 추천",
    "월간 바지 추천",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [글쓰기, 글쓰기변경] = useState(["",""]);

  function 남여변경() {
    let copy = [...글제목];
    copy[1] =
      copy[1] === "남자 코트 추천" ? "여자 코트 추천" : "남자 코트 추천";
    b(copy);
  }

  function 가나다순정렬() {
    let copy = [...글제목];
    copy.sort();
    b(copy);
  }

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.모달제목]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.남여변경}>변경</button>
      </div>
    );
  }

  function 따봉증가(i) {
    let copy = [...따봉];
    copy[i] += 1;
    console.log(copy);
    따봉변경(copy);
  }

  function 게시글추가(){
    b([...글제목,글쓰기[0]]);
    따봉변경([...따봉,0]);
  }

  function 게시글삭제(i){
    let copyTitle = [...글제목];
    let copy따봉 = [...따봉];

    copyTitle.splice(i, 1); 
    copy따봉.splice(i, 1);

    b(copyTitle);
    따봉변경(copy따봉);
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
      

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              <span
                onClick={() => {
                  modal == false ? setModal(true) : setModal(false);
                  setModalTitle(i);
                }}
              >
                {글제목[i]}
              </span>
              <span
                onClick={() => {
                  따봉증가(i);
                }}
              >
                👍
              </span>
              {따봉[i]} <button onClick={()=>{게시글삭제(i);}}>삭제</button>
            </h4>
            <p>12월 31일 발행</p>
          </div>
        );
      })}

      <p>글쓰기</p>
      제목 <input onChange={(e) => {글쓰기변경(e.target.value,글쓰기[1]);}}/><br/>
      내용 <input onChange={(e) => {글쓰기변경(글쓰기[0],e.target.value);}}/><br/>
      
      <div>
        <button onClick={()=>{게시글추가();}}>게시글 추가</button>  
      </div>

      {modal == true ? (
        <Modal 모달제목={modalTitle} 남여변경={남여변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

export default App;
