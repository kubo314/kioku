async function fetchImageAsBase64(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  
  // Uint8Array を文字列に変換
  const byteArray = new Uint8Array(arrayBuffer);
  let binaryString = '';
  
  byteArray.forEach(byte => {
    binaryString += String.fromCharCode(byte);
  });
  
  // btoa() で Base64 エンコード
  const base64String = btoa(binaryString);
  
  // MIMEタイプを付与して Base64 データとして返す
  const base64Image = `data:image/jpeg;base64,${base64String}`;
  
  return base64Image;
}

document.querySelector("button").addEventListener("click", function(){
  (async function() {
    const parser = new DOMParser();

    const res = await fetch(`https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=${document.querySelector("input").value}&rvprop=content&rvparse&origin=*`);
    const data = await res.text();
    const txt = await parser.parseFromString(data, "text/xml");
    const html = txt.querySelector("rev");
    document.querySelector("main").innerHTML = html.textContent;
    
    const images = document.querySelectorAll('img'); // ページ内の全てのimg要素を取得
    
    images.forEach(img => {
      const src = img.getAttribute('src');  // src属性を取得
      if (src) {  // srcが存在する場合のみ
        // 例: 外部の画像URLを指定してBase64に変換
          fetchImageAsBase64(src)
          .then(base64Image => {
            img.setAttribute("src", base64Image);
          })
          .catch(error => {
            console.error('Error:', error);
          });
          
      }
    });
  })();
});
