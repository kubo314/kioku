document.querySelector("button").addEventListener("click", function(){
  (async function() {
    const parser = new DOMParser();

    const res = await fetch(`https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=${document.querySelector("input").value}&rvprop=content&rvparse&origin=*`);
    const data = await res.text();
    const txt = await parser.parseFromString(data, "text/xml");
    const html = txt.querySelector("rev");
    document.querySelector("main").innerHTML = html.textContent;
  })();
});
