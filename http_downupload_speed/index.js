const http = require("http");
const fs = require("fs");

async function chunk(req,res){
    // 데이터를 5번 쪼게서 응답
    const iterateCount = 5

    // 헤더 응답.
    res.writeHead(200,{
        "content-type" : "text/plain",
        "content-length" : iterateCount*8,  // 전체길이 총 40byte
    })

    // 1초시 지연하며 청크 응답
    for await(const i of Array(iterateCount).keys()){
        res.write(`chunk ${i}.`)
        await new Promise(res => setTimeout(res,1000))
    }

    // 응답종료
    res.end()
} 

function upload(req, res){

} // 헤더 응답

function index(req, res){

}


// 서버 생성 및 핸들러 등록
const server = http.createServer((req, res) => {
    const {pathname} = new URL(req.url, `http://${req.headers}`)

    if(pathname === "/chunk") return chunk(req, res)
    if(pathname === "/upload") return upload(req, res)

    return index(req, res)
});

const PORT = 5500;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});