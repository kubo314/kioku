async function wiki(url) {
    document.querySelector("button").classList.add("onclic");
    const parser = new DOMParser();

    const res = await fetch(`https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=${url}&rvprop=content&rvparse&origin=*`);
    const data = await res.text();
    const txt = await parser.parseFromString(data, "text/xml");
    const html = txt.querySelector("rev");
    document.querySelector("main").innerHTML = html.textContent;

    const images = document.querySelectorAll("img, video, audio, source");

    images.forEach(img => {
        const src = img.getAttribute("src");
        const srcset = img.getAttribute("srcset");

        if (src) {
            img.setAttribute("src", "https:" + src);
        }
        if (srcset) {
            img.removeAttribute("srcset");
        }
    });

    const a_elements = document.querySelectorAll("a");

    a_elements.forEach(a_element => {
        const href = a_element.getAttribute("href");

        if (href) {
            try {
                let changed_href = href.replace("/wiki/", window.location.href.replace(location.search, '') + "?url=")
                a_element.setAttribute("href", changed_href);
            } catch (e) {
            }
        }
    });

    document.querySelector("button").classList.remove("onclic");
};
window.addEventListener("load", function () {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    document.querySelector("input").value = params.get("url")
    if (params.get("url") !== null) {
        wiki(params.get("url"));
    }
});
document.querySelector("button").addEventListener("click", async function () {
    await wiki(document.querySelector("input").value);
});
