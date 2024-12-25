(async function() {
    const parser = new DOMParser();

    const res = await fetch('https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=revisions&titles=%E6%97%A5%E6%9C%AC%E5%8F%B2%E3%81%AE%E5%87%BA%E6%9D%A5%E4%BA%8B%E4%B8%80%E8%A6%A7&rvprop=content&rvparse&origin=*');
    const data = await res.text();
    const txt = await parser.parseFromString(data, "text/xml");
    const html = txt.querySelector("rev");
    document.body.innerHTML = html.textContent;
  })();
