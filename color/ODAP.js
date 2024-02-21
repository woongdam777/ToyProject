document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // 클립보드 이벤트 감지
  document.addEventListener("paste", function (event) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let index in items) {
      const item = items[index];
      if (item.kind === "file") {
        const blob = item.getAsFile();
        const reader = new FileReader();
        reader.onload = function (event) {
          const img = new Image();
          img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            extractDominantColors(img);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(blob);
      }
    }
  });

  // 클릭시 클릭한 영역의 색상추출 및 표시
  canvas.addEventListener("click", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const imageData = ctx.getImageData(x, y, 1, 1);
    const pixel = imageData.data;
    const rgbaColor = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${
      pixel[3] / 255
    })`;
    document.getElementById("selectColorDisplay").style.backgroundColor = rgbaColor;
    document.getElementById("selectColorDisplay").innerText = rgbaColor;
  });

  // 대표 색상 추출 함수
  function extractDominantColors(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    const colorMap = {};

    // 이미지의 모든 픽셀을 반복하여 색상 맵을 만듭니다.
    for (let i = 0; i < pixels.length; i += 4) {
      const rgba = `rgba(${pixels[i]}, ${pixels[i + 1]}, ${pixels[i + 2]}, ${pixels[i + 3] / 255})`;
      if (!colorMap[rgba]) {
        colorMap[rgba] = 0;
      }
      colorMap[rgba]++;
    }

    // 색상 맵을 배열로 변환하여 정렬합니다.
    const colors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]);

    // 상위 5개의 대표 색상을 표시합니다.
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.innerHTML = '';
    for (let i = 0; i < 5 && i < colors.length; i++) {
      const colorSwatch = document.createElement('div');
      colorSwatch.className = 'colorSwatch';
      colorSwatch.style.backgroundColor = colors[i];
      colorDisplay.appendChild(colorSwatch);
    }
  }
});
