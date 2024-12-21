const cards = [
    "メソポタミア文明では、くさび形文字という文字が用いられました。",
    "中国文明では、甲骨文字という文字が用いられました。",
    "中国文明では、殷という王朝がおこりました。",
    "紀元前８世紀ごろから、地中海沿岸部にアテネやスパルタなどのポリスとよばれる都市国家が形成されました。",
    "マケドニアのアレクサンドロスの東方遠征によって、オリエントの文明とギリシャ文明がとけあい、ヘレニズム文化が生まれました。",
    "紀元前１世紀にイタリア半島を統一し、やがて地中海一帯を領土としたローマ帝国では、石づくりの道路や水道、コロセウムがつくられました。",
    "紀元前６～５世紀のころ、釈迦／シャカは仏教を開きました。",
    "紀元前後に、イエス＝キリストはキリスト教を開きました。",
    "紀元７世紀初め、ムハンマド／マホメットはイスラム教を開きました。",
    "紀元前６世紀ごろ、孔子が儒教のもとを開きました。",
    "紀元前秦という王朝の始皇帝が中国を統一して、中央集権体制を固めました。",
    "始皇帝北方の遊牧民族の侵入に備えて、万里の長城を築きました。",
    "紀元前漢が中国を統一し、武帝のときには大帝国となりました。",
    "中国の漢とローマ帝国との間には、シルクロード／絹の道とよばれる交通路が開け、東西文化の交流に大きな役割を果たしました。",
    "群馬県の岩宿遺跡で打製石器が発見され、日本にも旧石器時代があることがわかりました。",
    "縄目の文様がある、黒褐色で、厚くてもろい土器を、縄文土器といいます。",
    "縄文時代の人々は、狩りや漁に都合のよい台地にむらをつくり、竪穴住居に住んでいました。",
    "縄文時代に魔よけと自然の実りの豊かさなどを祈ってつくられた土製の人形を、土偶といいます。",
    "縄文時代の食べものの残りかすなどを捨てたところを、貝塚といいます。",
    "青森県の三内丸山遺跡は、大きな竪穴住居や多くの土偶が見つかっている縄文時代の遺跡です。",
    "弥生時代には、うすくて固く、曲線などの単純な文様がみられる弥生土器が使用されました。",
    "弥生時代には稲作が行われ、収穫した米は、高床倉庫／高床式倉庫に保存されました。",
    "静岡県の登呂遺跡は、水田のあとが見られる弥生時代の遺跡です。",
    "佐賀県の吉野ケ里遺跡は、弥生時代の遺跡です。",
    "『魏志』倭人伝には、邪馬台国の女王卑弥呼が30余りの国々を従えていたことが書かれています。",
    "４世紀ごろ、西日本の各地に、円と方形を組み合わせた、前方後円墳とよばれる大きな古墳がつくられるようになりました。",
    "大和政権の王は、大王とよばれ、後に天皇とよばれるようになりました。",
    "古墳の周りや頂上には、円筒型や人・家・動物をかたどった埴輪がおかれました。",
    "５世紀ごろの朝鮮半島を示した地図中の①は、高句麗という国です。",
    "５世紀ごろの朝鮮半島を示した地図中の②は、百済という国です。",
    "５世紀ごろの朝鮮半島を示した地図中の③は、新羅という国です。",
    "日本と大陸との関係が深まると、朝鮮から日本に移り住んだ渡来人によって、漢字や技術が伝えられました。",
    "聖徳太子は、推古天皇の摂政となり、蘇我馬子と協力して政治を行いました。",
    "聖徳太子は,冠位十二階／冠位十二階の制を定め、個人の能力や功績に応じて人材を登用するしくみをつくりました。",
    "聖徳太子は,政治の理想や役人の心得を示した、憲法十七条／十七条の憲法を制定しました。",
    "聖徳太子は,小野妹子を遣隋使として中国に遣わし、大陸の文化を取り入れ、対等な立場で国交を結ぼうとしました。",
    "聖徳太子は,厚く仏教を信仰したことから、日本最初の仏教文化である、飛鳥文化が栄えました。",
    "聖徳太子は,世界最古の木造建築物である、法隆寺を建立しました。",
    "中大兄皇子と中臣鎌足らは天皇中心の政治をめざすために、蘇我氏を滅ぼし、大化の改新を行いました。",
    "改新の詔の中で、私有民・私有地を廃止し、国家が直接支配する、公地・公民が示されました。",
    "戸籍をつくり、６歳以上の男女に口分田を割りあて、死後返させる制度を、班田収授法といいます。",
    "唐・新羅の大軍に攻められた百済 を救援するために朝鮮に出兵しましたが、白村江の戦いという戦いで敗れ、日本は半島から手を引くことになりました。",
    "天智天皇の死後、大友皇子と大海人皇子が皇位をめぐって争った戦いを、壬申の乱といいます。",
    "奈良県で、天武天皇のころにつくられた、日本で最初の、銅の貨幣である、富本銭が発見されました。",
    "唐にならって大宝律令がつくられ、律令政治のしくみが完成しました。",
    "奈良時代の農民の負担の１つで、収穫量の約３％の稲を地方の役所に納めるものを、租といいます。",
    "奈良時代の農民の負担の１つで、地方の特産物を都に納めるものを、調といいます。",
    "奈良時代の農民の負担の１つで、成年男子の３人に１人は兵士となり、その兵士から選ばれ、３年間北九州の守りにつくものを、防人といいます。",
    "都の市などで使用された貨幣を、和同開珎といいます。",
    "唐の都の長安にならって、奈良に平城京という都がつくられました。",
    "唐の文化や制度を取り入れるため、十数回派遣された使節を、遣唐使といいます。",
    "開墾した土地の永久私有を認める法である、墾田永年私財法が出されました。",
    " 聖武天皇のころ、貴族中心の仏教文化である、天平文化が栄えました。",
    "奈良時代に、行基は、各地をまわって仏教を広め、道路や橋をつくりました。",
    "唐の高僧の鑑真は、渡航に何度も失敗して失明しながらも日本に渡り、唐招提寺を建てて、仏教の発展に努めました。",
    "神話や伝承・記録をもとに、『古事記　』という歴史書がつくられました。",
    "奈良時代につくられた、国ごとの自然・産物・伝説などをまとめたものを、『風土記』といいます。",
    "奈良時代に、最古の和歌集である、『万葉集』がまとめられました。",
    "山上憶良は、当時の農民のつらい気持ちを「貧窮問答歌」によみました。",
    "平安京に都を移したのは、桓武天皇という天皇です。",
    "桓武天皇は東北地方の蝦夷を支配するために、坂上田村麻呂を征夷大将軍に任命しました。",
    "９世紀初め、最澄は、新しい仏教である天台宗を伝え、比叡山に延暦寺を建てました。",
    "９世紀初め、空海は、新しい仏教である真言宗を伝え、高野山に金剛峯寺を建てました。",
    "菅原道真の進言によって、遣唐使が停止されました。",
    "藤原氏は、娘を天皇の后にし、生まれた子を天皇にし、摂政・関白などの役職を独占して、政治の実権を握る摂関政治とよばれる政治を行いました。",
    "地方の豪族などが開墾した私有地は、荘園とよばれました。",
    "９世紀後半ごろから、唐の文化を土台にした、日本の自然や生活にあった文化である、国風文化が栄えました。",
    "平安時代の初めに、漢字をもとにして、かな文字という文字がつくりだされました。",
    "紫式部は、貴族の生活や感情をえがいた、『源氏物語』を書きました。",
    "清少納言は、自然の変化などをするどい感覚でえがいた随筆の『枕草子』を書きました。",
    "平安時代に、紀貫之らが、『古今和歌集』という和歌集を編集しました。",
    "平安時代の貴族の住まいのつくりを、寝殿造といいます。",
    "平安時代には、やわらかな線で日本の風物をえがく、大和絵がえがかれました。",
    "平安時代、社会が乱れる中、念仏を唱えて阿弥陀仏にすがれば死後に極楽浄土に生まれ変わるという、浄土信仰／浄土教／浄土の教えが広まりました。",
    "藤原頼通は、現在の京都府宇治市に、平等院鳳凰堂という阿弥陀堂を建てました。",
    "平安時代に、現在の岩手県平泉に、奥州藤原氏によって、中尊寺金色堂という阿弥陀堂が建てられました。",
    "下総国の豪族であった平将門は、関東地方で反乱を起こし、自らを新皇と名乗りました。",
    "伊予の国の役人であった藤原純友が、瀬戸内海の海賊を率いて、西国を荒らし回りました。",
    "白河天皇は位を譲って上皇となり、院として政治を行う、院政を行いました。",
    " 院政の実権をめぐり、上皇と天皇が対立する保元の乱という戦いがおこり、天皇側について勝利した平清盛と源義朝が勢力をのばしました。",
    "源氏と平氏が対立して平治の乱という戦いがおこり、勝利した平清盛が政治の実権を握りました。",
    "源義経は、壇ノ浦の戦いという戦いで、平氏を滅ぼしました。",
    "源頼朝は、義経を捕らえることを理由に、国ごとに守護を設置しました。",
    "源頼朝は、義経を捕らえることを理由に荘園・公領に地頭を設置しました。",
    "北条氏は、将軍を助ける役職である、執権として、幕府の政治を動かしました。",
    "将軍と主従関係を結んだ武士が、土地を仲立ちとして、御恩と奉公の関係で結ばれていたしくみを、封建制度といいます。",
    "鎌倉時代、将軍と主従関係を結んだ武士を、御家人といいます。",
    "源頼朝の妻である北条政子は、承久の乱のとき、御家人に対して頼朝の御恩を説きました。",
    "後鳥羽上皇が朝廷に政権を取り戻そうとし、承久の乱という戦いがおこりました。",
    "承久の乱のあと、京都の警備・朝廷の監視・西国武士への指図のために、京都に六波羅探題が設置されました。",
    "北条泰時は、日本最初の武家法である、御成敗式目／貞永式目を制定しました。",
    "鎌倉時代のころから、寺社の門前や交通の要所などに、日を決めてたてられた市を、定期市といいます。",
    "チンギス＝ハンはモンゴル高原の遊牧民族を統一してモンゴル帝国を建国しました。",
    "イタリアの商人であるマルコ＝ポーロは、フビライ=ハンに仕え、その体験が『東方見聞録〔世界の記述〕』にまとめられました。",
    "フビライ＝ハンは、日本に対して服属を求めてきましたが、日本が断ったため、朝鮮半島にある高麗とともに２度にわたって来攻しました。このことを、元寇といいます。",
    "元寇のときの幕府の執権は、北条時宗です。",
    "元寇のあと、窮乏した御家人を救うため、幕府は徳政令／永仁の徳政令を出しました。",
    "「南無阿弥陀仏」と唱えると、極楽に生まれることができるという浄土宗を、法然が開きました。",
    "阿弥陀仏を信じさえすれば、往生できるとし、悪人にこそ救われる道があるという浄土真宗親鸞が開きました。",
    "一遍は諸国を歩き、踊り念仏で時宗を広めました。",
    "日蓮は、法華経が正しいと説き、「南無妙法蓮華経」の題目を唱えれば救われるとする、日蓮宗を開きました。",
    "座禅を行う禅宗の１つである臨済宗は、栄西によって開かれました。",
    "座禅を行う禅宗の１つである曹洞宗は、道元によって開かれました。",
    "軍記物の１つである『平家物語』は、琵琶法師によって語り伝えられました。",
    "随筆の『徒然草』は、吉田兼行によって書かれました。",
    "鎌倉時代に、藤原定家らが『新古今和歌集』を編集しました。",
    "鎌倉時代、運慶・快慶によって、東大寺南大門の金剛力士像がつくられました。",
    "後醍醐天皇は、年号を改め、自ら建武の新政を行いました。",
    "足利尊氏が、京都に新しい天皇をおくと、後醍醐天皇は吉野に逃れ、南朝を開きました。",
    "室町幕府において、将軍を助ける役職を、管領といいます。",
    "足利義満は、中国の王朝と、日明貿易／勘合貿易とよばれる貿易を行\nいました。",
    "朝鮮半島では、李成桂が高麗を滅ぼし、朝鮮／李氏朝鮮／朝鮮国を建てました。",
    "尚氏が沖縄本島を統一し、琉球王国を建てました。",
    "室町時代のころ、商工業の同業者組合である座が、貴族や寺社の保護を受けて営業を独占しました。",
    "室町時代には、京都や堺などでは、町衆などの組織によって町の自治が行われました。",
    "室町時代のころ、有力農民のもとに惣とよばれる組織がつくられ、農民が団結して自治を行いました。",
    "近江国の馬借や農民たちが、借金を帳消しにする徳政令を求めて、正長の土一揆／正長の徳政一揆を起こしました。",
    "山城国で農村に住む武士である国人と農民が守護の軍を追放する、山城国一揆を起こし、８年間にわたって自治を行いました。",
    "加賀国で一向宗加賀の一向一揆を起こし、100年近くにわたって加賀国を支配しました。",
    "有力な守護大名であった細川勝元と山名宗全の争いに、将軍や管領家の後継ぎ争いがからんで、応仁の乱がおこりました。",
    "応仁の乱によって、多くの守護大名がおとろえ、代わってその家臣や村の侍である国人などが守護大名を倒して、戦国大名になりました。",
    "戦国大名は、自分の国を支配するため、分国法／家法とよばれる法律をつくりました。",
    "室町幕府の３代将軍足利義満のころの文化を、北山文化といいます。",
    "14世紀末、足利義満が京都の北山に建てた豪華な別荘を、金閣といいます。",
    "足利義満の保護を受けて、観阿弥・世阿弥父子によって能／能楽が大成されました。",
    "能と能の合間に演じられる、話し言葉をつかう劇を、狂言といいます。",
    "室町幕府の８代将軍足利義政のころの文化を、東山文化といいます。",
    "応仁の乱ののち、足利義政が京都の東山に建てた別荘を、銀閣といいます。",
    "現代の和風建築のもとになっている、床に畳が敷きつめられ、ふすまや障子で間仕切りをした部屋のつくりを、書院造といいます。",
    "室町時代に、自然の景色などを墨で描く水墨画が、雪舟によって大成されました。",
    "室町時代には、「浦島太郎」や「一寸法師」などの、お伽草紙が、庶民の読み物として親しまれました。",
    "随筆の『方丈記』を、鴨長明が書きました。",
    "ムハンマドの死後、後継者たちが勢力を拡大し、８世紀にはアッバース朝が成立し、首都としてバグダッドがつくられました。",
    "ローマ教皇の呼びかけに応じて、聖地エルサレムをイスラム勢力から奪回するために、数回にわたり十字軍が派遣されました。",
    "14世紀に北イタリアの都市からおこった、ギリシャやローマの文芸の復興を目指す文化上の動きを、ルネサンスといいます。",
    "15～16世紀に、レオナルド＝ダ＝ビン\r\nチが、「モナ＝リザ」「最後の晩餐」などの絵画を描きました。",
    "15～16世紀に、ミケランジェロが、「ダビデ像」などの彫刻をつくりました。",
    "16世紀、ローマ教皇の権威が衰えて教会や聖職者の堕落だらくが目立ったので、キリスト教本来の精神にもどろうという、宗教改革がおこりました。",
    "ドイツのルターは、教会が人々に免罪符を販売することに抗議し、宗教改革の口火を切りました。",
    "16世紀の中ごろ、スイスにおいて、カルバンは、人々が自分の職業に励み、富を蓄えることは神の心にかなっているとする宗教改革を行いました。",
    "カトリック教会側は教会内部で改革の動きがおこり、ロヨラやザビエルを中心にイエズス会が結成され、海外布教を行いました。",
    "コロンブスは、スペインの援助で、大西洋を横断して西インド諸島に到着しました。",
    "バスコ＝ダ＝ガマは、ポルトガルから喜望峰をまわり、インドに到着しました。",
    "マゼランは、世界一周の航海に出発し、部下がこれを達成しました。",
    "種子島に漂着したポルトガル人によって、鉄砲が伝えられました。",
    "スペインのイエズス会のフランシスコ＝ザビエ\r\nルが鹿児島に上陸し、キリスト教を伝えました。",
    "安土・桃山時代のころの、ポルトガル人・スペイン人との貿易を、南蛮貿易といいます。",
    "織田信長は、桶狭間の戦いという戦いで、今川義元を破りました。",
    "織田信長が、室町幕府第15代将軍である足利義昭を京都から追放し、室町幕府が滅亡しました。",
    "織田信長は、長篠の戦いという戦いで、武田勝頼に勝利しました。",
    "織田信長は、琵琶湖のほとりに、安土城を築きました。",
    "織田信長は、明智光秀に本能寺で自害に追い込まれました。",
    "織田信長は、座の特権を廃止し、市場の税を免除する、楽市・楽座を行いました。",
    "豊臣秀吉は、織田信長の死後、明智光秀を山崎の戦いという戦いで破りました。",
    "豊臣秀吉は全国の土地と農民を支配して年貢を確実にとるため、太閤検地を行いました。",
    "刀狩によって、武士と農民の身分がはっきりと区別される、兵農分離が進められました。",
    "豊臣秀吉は、石山本願寺のあと地に、大阪城を築きました。",
    "豊臣秀吉は、２度にわたり、小西行長らの兵を朝鮮に出兵させました。",
    "安土・桃山時代には、桃山文化とよばれる、新しく興った大名や大商人による豪華で壮大な文化が栄えました。",
    "桃山文化を代表する人物である狩野永徳は、『唐獅子図屏風』という障壁画を描きました。",
    "豊臣秀吉に仕えた堺の大商人である千利休は、茶道を大成しました。",
    "桃山文化の終わりごろ、出雲の阿国／出雲阿国が歌舞伎踊りをはじめました。",
    "石田三成は、関ヶ原の戦いで徳川家康に敗れました。",
    "２度にわたって徳川家康は、大阪城の豊臣氏を攻めました。この２度の戦いを、大阪の陣といいます。",
    "江戸幕府の最高職で、臨時に置かれたものを大老といいます。",
    "江戸幕府の将軍の下で、幕府の政治全体をまとめる役職は老中で、大目付・町奉行・勘定奉行などを指揮していました。",
    "幕府と大名が治める藩との封建的なしくみを、幕藩体制といいます。",
    "大名のうち、親藩は徳川氏の一族で、尾張・紀伊・水戸は、特に御三家とよばれました。",
    "大名のうち、譜代大名は関ヶ原の戦いよりも前から徳川氏に仕えていた大名です。",
    "大名のうち、外様大名は関ヶ原の戦いのときから徳川氏に仕えるようになった大名です。",
    "２代将軍の徳川秀忠のとき、大名の統制を目的とする武家諸法度という法令がはじめて出されました。",
    "武家諸法度に、大名に１年おきに江戸と領地に住\nまわせる制度である参勤交代が追加されました。",
    "江戸時代、土地を持ち、年貢を納める農民を本百姓といい、土地を持たない農民を水呑百姓といいます。",
    "江戸時代、百姓は、５～６戸で五人組を組織し、年貢の納入や犯罪の防止に共同責任を負わされました。",
    "徳川家康は、朱印状を発行して、外国との貿易を認める朱印船貿易という貿易をすすめました。",
    "朱印船貿易によって、東南アジア各地に、日本人の住む日本町ができました。",
    "江戸時代、イエスやマリアの像を踏むことで、キリスト教の信者であるのかどうかを調べる、踏絵／絵踏が行われました。",
    "キリスト教の信者が多い地方の農民が、天草四郎という少年をかしらに、島原・天草一揆／島原の乱を起こしました。",
    "江戸幕府が貿易を制限し、日本人の出入国を禁止した政策を、鎖国といいます。",
    "江戸時代、朝鮮とは、対馬藩という藩を通じて交易を行いました。",
    "江戸時代、朝鮮から、ほぼ将軍が代わるごとに朝鮮通信使／通信使という使節団が江戸に来るようになりました。",
    "江戸時代、薩摩藩という藩は、琉球王国を侵略し、検地を行って高い年貢を取り立てました。",
    "あくどい方法で交易を行う松前藩に対して、アイヌの族長であるシャクシャインが立ち上がりました。",
    "江戸時代、米の生産が増え、麻・綿・菜種・茶などの商品作物の栽培が広まりました。",
    "江戸時代、深く土地を耕すことができる、備中ぐわが発明されました。",
    "江戸時代、脱穀用の農具として、千歯こきが発明されました。",
    "江戸時代、綿づくりの肥料として、干鰯という鰯を干したものが使用されました。",
    "江戸時代、各藩の大名は、年貢米や特産物を大阪にある蔵屋敷に送り、ここで現金に換えました。",
    "江戸時代、大阪は、全国から産物が集められ、江戸をはじめとする各地に送り出されたので、後に「天下の台所」とよばれました。",
    "江戸時代、有力な商工業者は、株仲間という同業者の組合をつくり、営業を独占しました。",
    "徳川綱吉は、犬や各種の動物などを保護するために、生類憐みの令を出しました。",
    "徳川綱吉のあと、６・７代将軍に仕えた朱子学者新井白石は、長崎での貿易を制限するなどの正徳の治とよばれる政治を行いました。",
    "江戸時代、儒学の中でも、儒学の一派である朱子学が広く学ばれるようになりました。",
    "元禄文化のころ、井原西鶴は浮世草子とよばれる小説を書きました。『日本永代蔵』『世間胸算用』などの代表作があります。",
    "元禄文化のころ、松尾芭蕉は俳諧を芸術にまで高めました。紀行文『おくのほそ道』が有名です。",
    " 元禄文化のころ、近松門左衛門は人形浄瑠璃や歌舞伎の台本を書きました。『曾根崎心中』や『国性爺合戦』が有名です。",
    "元禄文化のころ、菱川師宣は『見返り美人図』などの浮世絵のもとを開きました。",
    "江戸幕府の８代将軍徳川吉宗は、享保の改革とよばれる政治改革を行いました。",
    "享保の改革で、裁判の公正とすみやかな判決を目的に、裁判の基準である、公事方御定書が定められました。",
    "江戸時代、農民が領主に対して集団で行った反抗を、百姓一揆といい、ききんのときに多発しました。",
    "江戸時代、都市における貧しい人々の暴動である打ちこわしがおこり、米屋や大商人を集団で襲いました。",
    "18世紀ごろ、問屋が農民に原料や道具・お金を貸して品物をつくらせ、それを引き取る、問屋制家内工業が行われるようになりました。",
    "19世紀、大商人などは、農民や職人を労働者として工場に集め、分業によって製品をつくらせる、工場制手工業／マニュファクチュアとよばれる方法で生産しました。",
    "江戸幕府の10代将軍のときに老中に取り立てられた田沼意次は、商人の経済力を利用して財政を立て直そうとし、株仲間を積極的に認める代わりに、税を取りました。",
    "老中の松平定信は、幕府の学校で朱子学以外の講義を禁止するなどの、寛政の改革という政治改革を行いました。",
    "江戸幕府は、外国船が近づいたら直ちに撃退しろという、異国船打払令／外国船打払令を出しました。",
    "起こったモリソン号事件に対する幕府の対応を批判した高野長英と渡辺崋山が罰せられたことを、蛮社の獄といいます。",
    "天保のききんで苦しんでいる人々を救おうと、大阪町奉行所の元役人であった大塩平八郎が、大阪で反乱を起こしました。",
    "老中の水野忠邦が、株仲間を解散して物価を引き下げようとするなどの、天保の改革という政治改革を行いました。",
    "江戸時代、各藩は、武士に儒学を学ばせるため、藩校を開きました。",
    "江戸時代、町人や百姓の子どもたちは７歳ごろから数年間、寺子屋に通って、読み・書き・そろばんなどを学びました。",
    "松阪の医者であった、本居宣長は、35年の歳月をかけて、『古事記伝記』をあらわし、国学を大成しました。",
    "杉田玄白と前野良沢らは、オランダ語の解剖書を翻訳し、『解体新書』として出版しました。",
    "伊能忠敬は、測量や天文学を学び、17年かけてほぼ全国の海岸線を歩いて測量し、かなり正確な地図をつくりました。",
    "化政文化のころ、十返舎一九は、『東海道中膝栗毛』という書物を書きました。",
    "化政文化のころ、滝沢馬琴は、『南総里見八犬伝』という書物を書きました。",
    "化政文化のころ、与謝蕪村は、「菜の花や　月は東に　日は西に」などの俳句をよみました。",
    "化政文化のころ、小林一茶は、「雀の子　そこのけそこのけ　御馬が通る」などの俳句をよみました。",
    "化政文化のころ、葛飾北斎は、『富嶽三十六景』などの浮世絵を描きました。",
    "化政文化のころ、歌川広重は、『東海道五十三次』などの浮世絵を描きました。",
    "16世紀後半、絶対王政を行ったイギリスのエリザベス1世は、イギリス国教会の長となり、東インド会社を設立しました。",
    "17世紀後半、絶対王政を行ったフランスのルイ14世は、役人と軍隊のしくみを整えて強大な力を持ち、ベルサイユ宮殿をつくりました。",
    "絶対王政を倒し、個人の自由と財産の私有を尊重する近代的な市民社会をつくる革命を、市民革命といいます。",
    "イギリスでは、国王が議会を無視して専制政治を行い、重税を課すなどをしたため、議会側が国王を処刑する革命が起こりました。この革命を、ピューリタン革命／清教徒革命といいます。",
    "イギリスで国民が、専制政治を行う国王を追放し、オランダから新しい国王を迎えました。この革命を、名誉革命といいます。",
    "イギリスが植民地のアメリカに対してさまざまな税を課したため、アメリカとイギリスの間で戦争になりました。この戦争を、アメリカ独立戦争／独立戦争といいます。",
    "アメリカで合衆国憲法が制定され、ワシントンが初代大統領になりました。",
    "フランスで国王や貴族の圧制に反抗した国民がバスチーユ牢獄を襲い、フランス革命という革命が始まりました。",
    "フランスでは、フランス革命後の政情不安の中で、軍人のナポレオンが人気を集め、皇帝になりました。",
    "工場制手工業から工場制機械工業へと発展することにともなう社会の大変革のことを産業革命といいます。18世紀にイギリスで始まりました。",
    "18世紀後半、産業革命がはじまったことから、イギリスは「世界の工場」とよばれました。",
    "ワットは蒸気機関の改良や、機械の改良・発明を行い、機械化が進みました。",
    "南北戦争中、アメリカの北部の大統領であるリンカン／リンカーンは、奴隷解放宣言を出しました。",
    "プロイセンのビスマルク首相は全ドイツを統一し、プロイセン王を皇帝とするドイツ帝国をつくりました。",
    "インドでイギリスの支配に対する不満が爆発し、イギリスのやとったインド兵である、セポイ／シパーヒーが反乱を起こしました。",
    "セポイの反乱を武力でおさえたイギリスは、インドのムガル帝国／ムガール帝国という帝国を滅ぼし、インドをイギリスの植民地にしました。",
    "イギリスは貿易保護を口実に、清との間で、アヘン戦争という戦争を起こし、イギリスが勝利しました。",
    "中国南部で洪秀全が反乱を起こし、太平天国という国を建てました。",
    "アメリカの使節であるペリーが４隻の軍艦を率いて浦賀沖に現れ、幕府に開国をせまりました。",
    "日本はアメリカと日米和親条約という条約を結びました。",
    "日米修好通商条約は不平等な条約で、外国人の裁判はその国の領事にまかせる、領事裁判権／治外法権という権利を相手国に認めました。",
    "日米修好通商条約は不平等な条約で、日本が輸入する際の関税を、自由に決定したり、変更したりすることができる、関税自主権という権利が、日本にはありませんでした。",
    "日米修好通商条約が結ばれて貿易が行われるようになると、日本は、おもに生糸や茶を輸出しました。",
    "江戸時代の終わりごろの、天皇を尊んで国の団結を固め、外国勢力を打ち払おうとする考えを、尊王攘夷論といいます。",
    "大老の井伊直弼、橋本左内や吉田松陰などの反対派をきびしく罰する、安政の大獄を行いました。",
    "井伊直弼が水戸藩の浪士によって、江戸城近くで暗殺される、桜田門外の変がおこりました。",
    "薩摩藩がイギリス人を殺傷する生麦事件という事件を起こし、イギリスと戦争になりました。",
    "長州藩という藩は、下関海峡を通る外国船を砲撃し、イギリス・アメリカ・フランス・オランダによって砲撃され、大きな打撃を受けました。",
    "江戸時代の終わりごろ、薩摩藩では、西郷隆盛と大久保利通らが、藩の実権を握っていました。",
    "土佐藩出身の坂本龍馬／坂本竜馬らが仲介して、薩摩藩と長州藩との間で、薩長同盟が結ばれました。",
    "15代将軍徳川慶喜が、政権を朝廷に返還することを申し出る、大政奉還を行いました。",
    "新政府軍と旧幕府軍との間で、戊辰戦争という戦いが始まりました。",
    "江戸時代の終わりごろから、明治時代の初めにかけての政治や社会の改革を、明治維新といいます。",
    "明治天皇が神に誓うという形で、五箇条の御誓文／五箇条の誓文という新政府の方針を発表しました。",
    "藩が持っていた土地と人民の支配権を朝廷に返上させ、藩主を新政府の地方官として知藩事に任命しました。これを、版籍奉還といいます。",
    "藩を廃止して知藩事をやめさせ、全国を府・県に分けて、中央から府知事・県令を派遣しました。これを、廃藩置県といいます。",
    "四民平等のもと、解放令という法令が出され、それまで差別されていた、えた・ひにんが廃止されました。",
    "岩倉具視を団長とする使節団が欧米に派遣され、産業や社会のようすを視察するとともに、条約改正の交渉を行いました。",
    "明治新政府は、清との間に、対等な日清修好条規という条約を結びました。",
    "朝鮮は鎖国を守っていたので、西郷隆盛は、武力を用いてでも朝鮮を開国させようという、征韓論を主張しました。",
    "江華島事件のあと、日本は朝鮮と、朝鮮に不利な日朝修好条規という条約を結び、朝鮮を開国させました。",
    "日本が樺太をロシアにゆずるかわりに、千島列島全部を日本の領土とする、樺太・千島交換条約という条約が結ばれました。",
    "明治時代、経済力を高め、強力な軍隊をつくる目標を、富国強兵といいます。",
    "明治時代、近代的な産業を育てて、生産を増やそうとする政策を、殖産興業といいます。",
    "土地所有者に地券を発行し、地価の３％を現金で納めさせる地租改正を行いました。",
    "徴兵令が出され、20歳以上の男子は兵役の義務が課されました。",
    "群馬県に官営の工場である、富岡製糸場がつくられました。",
    "明治政府は、蝦夷地を北海道と改めて開拓使を置き、屯田兵を送って農耕と防衛にあたらせました。",
    "政府の積極的な欧米文化の導入にともなって、都市の人々を中心に生活が変化しました。この変化を、文明開化といいます。",
    "学制が発布され、すべての国民が教育を受けられるようになりました。",
    "福沢諭吉は、『学問のすゝめ』という書物で、人間の平等と学問の大切さを説きました。",
    "中江兆民は、ルソーの『社会契約論』を翻訳して、紹介しました。",
    "鹿児島の士族らは、政府を去った西郷隆盛をおしたてて、西南戦争という反乱を起こしました。",
    "板垣退助らが、民撰議院設立の建白書を政府に提出し、国会の開設を要求しました。",
    "明治時代、薩摩藩、長州藩、土佐藩、肥前藩など、特定の藩の出身者によって行われた政治を、藩閥政治といいます。",
    "明治時代、藩閥政治を批判し、国民が選んだ議員からなる国会で政治を行うことを求めた、自由民権運動という運動がおこりました。",
    "板垣退助を党首とする、自由党という政党が結成されました。",
    "大隈重信を党首とする、立憲改進党が結成されました。",
    "伊藤博文は、ドイツの憲法を参考にして日本の憲法の作成をすすめ、初代内閣総理大臣に就任しました。",
    "天皇が国民にあたえる形で、アジア初の憲法である、大日本帝国憲法が発布されました。",
    "教育の基本とされたもので、忠君愛国の道徳が示された、教育勅語が出されました。",
    "第１回衆議院議員の選挙において、選挙権があったのは、「直接国税を15円以上納める、満25歳以上の男子」です。",
    "第１回衆議院議員の選挙において、選挙権があったのは、「直接国税を15円以上納める、満25歳以上の男子」です。",
    "第１回帝国議会が開かれ、衆議院と、皇族・華族・多額納税者などから成る、貴族院の二院制がとられました。",
    "欧米諸国が、強力な軍隊をもとに、植民地拡大に力を入れ、経済的にも支配するようになったことを、帝国主義といいます。",
    "朝鮮で大規模な農民の反乱である、甲午農民戦争が起こり、日本と清は、朝鮮に兵を送りました。",
    "下関条約によって、日本は清から遼東半島を得ましたが、三国干渉によって、清に返還しました。",
    "下関条約によって、日本は清から台湾・澎湖諸島を得て、第二次世界大戦終結まで、日本の植民地としました。",
    "欧米の中国侵略に対して、中国でおこった外国人排斥運動を外国の軍隊が出動して鎮圧しました。この事件を、義和団事件といいます。",
    "ロシアの南下政策に対抗するために、日本とイギリスが結んだ同盟を、日英同盟といいます。",
    "日露戦争が始まると、日本は苦戦しながらも勝利を重ね、日本海海戦でロシア艦隊を破りました。",
    "日露戦争では、社会主義者の幸徳秋水や堺利彦は反戦を唱えました。",
    "日露戦争では、キリスト教徒の内村鑑三は反戦を唱えました。",
    "日露戦争では、与謝野晶子は戦場の弟を思う気持ちを詩に表しました。",
    "日本とロシアの両国は、アメリカの仲立ちで、ポーツマス条約を結びました。",
    "日露戦争の講和条約であるポーツマス条約で、日本がロシアから賠償金を得られなかったため、日比谷焼き打ち事件という国民の暴動がおこりました。",
    "日本は韓国を保護国としたため、韓国内では激しい抵抗がおこりましたが、日本は武力でこれを抑えて、韓国を植民地にする、韓国併合を行いました。",
    "中国では、半植民地化が進んでいましたが、孫文が三民主義を唱え、革命運動をおしすすめました。",
    "武昌で軍隊が反乱を起こして、辛亥革命が始まり、翌南京を首都とする中華民国が成立しました。",
    "あるイギリス船が、紀伊半島沖で難破し、イギリス人船員はボートで助かり、日本人乗客は死亡する、ノルマントン号事件という事件がおこりました。",
    "外務大臣の陸奥宗光の撤廃に成功しました。",
    "外務大臣の小村寿太郎がアメリカと交渉し、関税自主権の回復に成功しました。",
    "明治時代、足尾銅山鉱毒事件によって、流域の農家や漁業関係者に大きな被害を与えたため、栃木県の衆議院議員であった田中正造が被害者の救済に努力しました。",
    "北里柴三郎は、破傷風血清療法を発見しました。",
    "野口英世は、黄熱病の研究を行いました。",
    "夏目漱石は、『坊っちゃん』『吾輩は猫である』などの作品を残した作家です。",
    "樋口一葉は、『たけくらべ』などの作品を残した作家です。",
    "オーストリアの皇太子夫妻が、セルビアの青年に暗殺される、サラエボ事件という事件が起こり、第一次世界大戦のきっかけとなりました。",
    "日本は権利の拡大をねらって、中国に対して、二十一か条の要求を出し、その多くを認めさせました。",
    "第一次世界大戦中、日本では、大戦景気とよばれる好景気になり、海運業など、急にお金持ちになった、成金とよばれる人がいました。",
    "ロシア革命の影響をおそれた日本やイギリスなどは、ロシアに兵を送り、革命をおさえるために干渉しました。これを、シベリア出兵といいます。",
    "富山県の漁村の主婦たちが安売りを求めて米屋を襲い、この動きが全国に広まりました。これを、米騒動といいます。",
    "米騒動のあと、立憲政友会の原敬は、本格的な政党内閣を組織しました。",
    "第一次世界大戦の講和条約がパリで開かれ、ベルサイユ条約が結ばれました。",
    "朝鮮のソウルで人々が「独立万歳」をさけんでデモ行進し、日本によって武力でしずめられました。この運動を、三・一独立運動／三・一運動といいます。",
    "中国の北京での学生集会をきっかけに、排日・反帝国主義を進める運動である、五・四運動がおこりました。",
    "アメリカ大統領のウィルソンは、第一次世界大戦中から、民族自決や平和のための国際組織の設立、軍備の制限などを提案していました。",
    "42か国の参加により、世界平和を目的に、国際連盟が成立しました。",
    "ワシントン会議という会議が開かれ、主要国の海軍の軍備を制限する条約が結ばれました。",
    "インドでは、非暴力・不服従を唱えるガンディーの指導のもと、イギリスに対して独立を求める運動が高まりました。",
    "大正時代の民主主義の実現を求める動きや風潮を、大正デモクラシーといいます。",
    "大正時代、藩閥政治を批判し、憲法に基づいた政治を守ろうとする、護憲運動という運動がおこりました。",
    "大正時代、政治学者の吉野作造は、民本主義という考えを主張しました。",
    "「四民平等」といわれながらも、きびしい差別に苦しんできた人々は、京都で全国水平社を結成しました。",
    "納税額に関係なく、25歳以上の男子に選挙権を与える、普通選挙法という法律が制定されました。",
    "普通選挙法と同時に、社会主義運動を取りしまるために、治安維持法という法律を制定しました。",
    "平塚らいてう／平塚雷鳥らが『青鞜』という雑誌を創刊し、女性の新しい生き方を主張し、参政権などを求める運動を進めました。",
    "関東大震災がおこり、死者・行方不明者が10万人をこえました。",
    "アメリカでは、世界恐慌後に、ルーズベルト大統領が、ニューディール政策という政策をとり、テネシー川の総合開発などを実施し、国民の購買力を高めました。",
    "世界恐慌後、イギリス・フランスでは、植民地との結びつきを強めて、外国の商品の関税を高くする、ブロック経済を実施して、他国の商品をしめ出しました。",
    "ファシズムは、民主主義を否定した軍国主義的な独裁政治のことで、ドイツのナチスやイタリアのファシスト党が行いました。",
    "ドイツでは、ヒトラーの率いるナチスという政党が政権を握って、独裁政治を行い、再軍備をし、ユダヤ人を迫害しました。",
    "イタリアでは、ムッソリーニのファシスト党が独裁政治を行い、エチオピアを併合しました。",
    "ソ連では、スターリンが指導者となって５か年計画を行い、農業の集団化と工業の発展を進めていたため、世界恐慌の影響をほとんど受けませんでした。",
    "日本軍は奉天郊外の柳条湖で、南満州鉄道を爆破して戦いを始め、満州国を建てました。この事件を、満州事変といいます。",
    "海軍将校らが犬養毅首相を暗殺したため、政党政治が終わりました。この事件を、五・一五事件といいます。",
    "陸軍の青年将校が軍部政権樹立を目的に、二・二六事件という事件をおこしました。",
    "北京郊外の盧溝橋で、日中の両軍が衝突したことをきっかけに、日中戦争という戦争が始まりました。",
    "国家総動員法が定められ、議会の許可なく、国民や物資を戦争などに動員できるようになりました。",
    "すべての政党が解党され、大政翼賛会という組織がつくられました。",
    "日本はドイツ・イタリアと日独伊三国同盟という同盟を結び、アメリカ・イギリスに対抗しました。",
    "日本の海軍がハワイの真珠湾を奇襲し、陸軍はマレー半島に上陸してアメリカ・イギリスに宣戦し、太平洋戦争という戦争が始まりました。",
    "広島という都市に原子爆弾が投下されました。",
    "長崎という都市に原子爆弾が投下されました。",
    "日本は、ポツダム宣言を受け入れて無条件降伏することを、国民に発表しました。",
    "アメリカのマッカーサーを最高司令官とする連合国軍最高司令官総司令部〔ＧＨＱ〕により、日本の民主化が進められました。",
    "第二次世界大戦後、連合国が日本の指導者の戦争責任を追及した極東国際軍事裁判／東京裁判という裁判が行われ、東条英機などが死刑になりました。",
    "戦争に協力した勢力とみなされた三井・三菱・住友・安田などの企業のグループを解体する、財閥解体が行われました。",
    "地主の土地を国が強制的に買い上げて、小作人に安く売りわたす、農地改革という政策が行われました。",
    "教育勅語に代わって教育基本法が制定され、平和と民主主義を守る人間を育てる教育がすすめられるようになりました。",
    "連合国の51か国が参加して、国際連合という組織が誕生しました。",
    "ソ連を中心とする社会主義諸国と、アメリカを中心とする資本主義諸国との間で、直接戦火を交えない厳しい対立がおこりました。この対立を、冷たい戦争／冷戦といいます。",
    "冷戦下、アメリカを中心とする資本主義諸国の軍事同盟である北大西洋条約機構／ＮＡＴＯが結成されました。",
    "冷戦下、ソ連を中心とする社会主義諸国がワルシャワ条約機構という組織を結成し、北大西洋条約機構〔ＮＡＴＯ〕に対抗しました。",
    "中国では、毛沢東を主席とする中華人民共和国(ちゅうかじんみんきょうわこく)が成立し、国民政府は台湾に逃れました。",
    "朝鮮半島では、北朝鮮が韓国に侵攻したことから、朝鮮戦争がおこりました。",
    "朝鮮戦争が始まると、アメリカ軍から大量の軍需物資の注文が集まったため、日本の経済は、特需景気とよばれる好景気になりました。",
    "朝鮮戦争中の日本を防衛するために、警察予備隊という組織がつくられました。",
    "吉田茂首相がサンフランシスコ平和条約に調印し、48か国との間に講和を結び、翌独立を回復しました。",
    "サンフランシスコ平和条約が結ばれたのと同じ日に、日本にアメリカ軍が駐留することを認めた、日米安全保障条約という条約が結ばれました。",
    "アジア・アフリカの新興独立国の首脳がインドネシアで、アジア・アフリカ会議という会議を開き、植民地主義への反対など、平和10原則を決議しました。",
    "日本は、日ソ共同宣言に調印してソ連と国交を回復し、同国際連合に加盟しました。",
    "日本では、高度経済成長とよばれる、めざましい経済成長が続き、人々の収入も増えました。",
    "日本は韓国と、日韓基本条約を結び、国交が正常化しました。",
    "沖縄がアメリカから返還されましたが、広大な米軍基地は残されました。",
    "日本は中華人民共和国との間で日中共同声明に調印し、国交を正常化しました。",
    "イスラエルとアラブ諸国の戦争である第四次中東戦争の影響で、原油の輸出価格が引き上げられたため、石油危機／オイルショック／石油ショックがおこり、日本の高度経済成長も終わりました。",
    "日本は中華人民共和国との間で日中平和友好条約を結び、さらに友好を深めました。",
    "冷戦の象徴であったベルリンの壁が撤去され、翌ドイツが統一されました。",
    "イラクがクウェートに侵攻したため、多国籍軍がイラクを攻撃した戦争を、湾岸戦争といいます。",
    "アメリカで同時多発テロ事件が発生し、その後、アフガニスタン攻撃、イラク戦争につながりました。"
];

document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 0.1) + "%";

let local_strage_data = localStorage.getItem("memo");
if (local_strage_data == null) {
    localStorage.setItem("memo", JSON.stringify([...Array(cards.length)]));
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
    random_num0 = getRandom(0, cards.length);
    random_num1 = getRandom(random_num0, cards.length);
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

    document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 0.1) + "%";
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
    document.querySelector("#percent").textContent = orgCeil(Number(localStorage.getItem("count_correct")) / Number(localStorage.getItem("count")) * 100, 0.1) + "%";
    
    count = 1;
});


function getRandom(min, max) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return random;
}
function orgCeil(value, base) {
    return Math.ceil(value * base) / base;
}
