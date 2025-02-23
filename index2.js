const cards = [
    "王政復古の大号令",
    "岩倉遣外使節団、横浜港を出発（～明治6（1873）年9月）",
    "征韓論争に破れた西郷隆盛・板垣退助ら、参議を辞す（明治6年の政変）",
    "民撰議院設立建白書提出",
    "鹿児島で西郷隆盛挙兵、西南戦争始まる（～10月24日）",
    "岩倉具視、憲法に関する意見を上奏",
    "伊藤博文、憲法調査のため、ヨーロッパへ向けて横浜を出発",
    "太政官制が廃止され、内閣制度が定められる（初代首相は伊藤博文）",
    "大日本帝国憲法発布",
    "第1回衆議院議員総選挙",
    "第2回衆議院議員総選挙。松方内閣による選挙干渉が政治問題化する",
    "日英通商航海条約調印（領事裁判権撤廃）",
    "日本、清国に宣戦布告。日清戦争勃発",
    "日清講和条約（下関条約）調印",
    "（第一回）日英同盟協約調印",
    "日本、ロシアに宣戦布告。日露戦争勃発",
    "日露講和条約（ポーツマス条約）調印",
    "韓国併合に関する条約調印",
    "日米通商航海条約改正調印（関税自主権確立）",
    "東京で憲政擁護大会開催、以後全国へ広まる（第1次護憲運動）",
    "オーストリアがセルビアに宣戦布告。第1次世界大戦勃発",
    "日本がドイツに宣戦布告",
    "日本が中国にいわゆる21ヵ条の要求を提示",
    "寺内内閣がシベリア出兵を宣言",
    "富山県中新川郡西水橋町で米騒動勃発、全国へ波及",
    "原敬内閣成立",
    "第1次世界大戦終結",
    "パリ講和会議開催（～6月28日）",
    "東京で普選期成大会開催、各地に普選運動広まる",
    "朝鮮で独立運動が全土に拡大（3.1独立運動）",
    "北京で学生によるデモが起こる（5.4運動）",
    "ベルサイユ講和条約調印",
    "国際連盟発足、日本も加盟国となる",
    "株価暴落、戦後恐慌始まる",
    "原首相東京駅で刺殺され、内閣総辞職",
    "ワシントン会議開催（～大正11年2月6日）",
    "関東大震災",
    "第2次護憲運動",
    "立憲民政党結成",
    "ロンドン海軍軍縮会議開会",
    "柳条湖事件（満洲事変勃発）",
    "満洲国建国宣言",
    "5.15事件",
    "日本、国際連盟脱退を通告",
    "2.26事件",
    "盧溝橋事件（日中戦争勃発）",
    "ドイツ、ポーランド進撃を開始（第2次世界大戦勃発）",
    "日独伊三国軍事同盟条約調印",
    "大政翼賛会発足",
    "東京大空襲",
    "アメリカ軍が沖縄本島に上陸",
    "ドイツが無条件降伏",
    "広島に原子爆弾投下",
    "ソ連、対日宣戦布告",
    "長崎に原子爆弾投下",
    "ポツダム宣言受諾",
    "天皇、「終戦の詔書」を放送",
    "降伏文書に調印",
    "米国政府、初期対日方針を発表",
    "GHQが民主化指令を出す",
    "日本国憲法公布",
    "第1回参議院議員通常選挙",
    "日本国憲法施行",
    "朝鮮戦争勃発",
    "サンフランシスコ講和条約・日米安全保障条約調印",
    "講和条約・日米安保条約発効",
    "保安隊発足",
    "第5次吉田内閣成立",
    "自衛隊発足"
];

document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 10) + "%";

let local_strage_data = localStorage.getItem("memo");
if (local_strage_data == null) {
    localStorage.setItem("memo", JSON.stringify(["1867年・1868年","1871年","1873年","1874年","1877年","1880年","1882年","1885年","1889年","1890年","1892年","1894年","1894年","1895年","1902年","1904年","1905年","1910年","1911年","1912年","1914年","1914年","1915年","1918年","1918年","1918年","1918年","1919年","1919年","1919年","1919年","1919年","1920年","1920年","1921年","1921年","1923年","1924年","1927年","1930年","1931年","1932年","1932年","1933年","1936年","1937年","1939年","1940年","1940年","1945年","1945年","1945年","1945年","1945年","1945年","1945年","1945年","1945年","1945年","1945年","1946年","1947年","1947年","1950年","1951年","1952年","1952年","1953年","1954年",]));
    localStorage.setItem("count", 0);
    localStorage.setItem("count_correct", 0);
}
let local_strage_array = JSON.parse(localStorage.getItem("memo"));

let random_num0 = 0;
let random_num1 = 0;

let count = 0;
document.querySelector("#next").addEventListener("click", function(){
    let memo_data = JSON.parse(localStorage.getItem("memo"));
    memo_data[random_num1] = document.querySelector("#input_c1").value;
    memo_data[random_num0] = document.querySelector("#input_c0").value;
    
    localStorage.setItem("memo", JSON.stringify(memo_data));

    document.querySelector("#input_c0").style.display = "none";
    document.querySelector("#input_c1").style.display = "none";
    document.body.style.background = "#fff";
    random_num0 = getRandom(0, cards.length - 1);
    random_num1 = getRandom(random_num0, cards.length - 1);
    document.querySelector("#tc0").textContent = "　 " + cards[random_num0];
    document.querySelector("#tc1").textContent = "　 " + cards[random_num1];

    document.querySelector("#c0").style.order = getRandom(0, 1);

    document.querySelector("#input_c0").value = JSON.parse(localStorage.getItem("memo"))[random_num0];
    document.querySelector("#input_c1").value = JSON.parse(localStorage.getItem("memo"))[random_num1];

    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);
    
    count = 0;
});


document.querySelector("#c0").addEventListener("click", function(){
    if (count == 0) {
        document.querySelector("#tc0").textContent = "⭕️" + document.querySelector("#tc0").textContent.substr(1);
        document.querySelector("#tc1").textContent = "❌" + document.querySelector("#tc1").textContent.substr(1);
        
        document.body.style.background = "rgb(171,191,240)";
        document.querySelector("#input_c0").style.display = "";
        document.querySelector("#input_c1").style.display = "";

        localStorage.setItem("count_correct", Number(localStorage.getItem("count_correct")) + 1);
    }

    document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 10) + "%";
    count = 1;
});
document.querySelector("#c1").addEventListener("click", function(){
    if (count == 0) {
        document.querySelector("#tc0").textContent = "⭕️" + document.querySelector("#tc0").textContent.substr(1);
        document.querySelector("#tc1").textContent = "❌" + document.querySelector("#tc1").textContent.substr(1);
        
        document.body.style.background = "rgb(245,168,163)";
        document.querySelector("#input_c0").style.display = "";
        document.querySelector("#input_c1").style.display = "";
    }
    document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 10) + "%";
    
    count = 1;
});


function getRandom(min, max) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return random;
}
function orgCeil(value, base) {
    return Math.ceil(value * base) / base;
}
