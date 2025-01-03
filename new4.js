document.querySelector("button").addEventListener("click", function () {
    (async function () {
        const parser = new DOMParser();

        const res = await fetch(`https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=${document.querySelector("input").value}&rvprop=content&rvparse&origin=*`);
        const data = await res.text();
        const txt = await parser.parseFromString(data, "text/xml");
        const html = txt.querySelector("rev");
        document.querySelector("main").innerHTML = html.textContent;

        const images = document.querySelectorAll("img, video, audio, source"); // ページ内の全てのimg要素を取得

        images.forEach(img => {
            const src = img.getAttribute("src");  // src属性を取得
            const srcset = img.getAttribute("srcset");

            if (src) {  // srcが存在する場合のみ
                img.setAttribute("src", "https:"+src);
            }
            if (srcset) {
                img.removeAttribute("srcset");
            }
        });
    })();
});
