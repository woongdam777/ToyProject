html에서 src폴더의 이미지 넣을땐
이미지를 import 해오고 사용해야합니다. 

import bg from './bg.png'

function App(){
  return (
    <div>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
    </div>
  )
}
1. import 작명 from './이미지경로' 한 다음에

2. 이미지경로가 필요한 곳에서 작명한걸 사용하면 됩니다. 

<img>태그 쓰고싶으면 <img src={bg}/> 이렇게 써도 보입니다. 

귀찮으면 css파일을 활용합시다. 