'use strict';

export const SCENES = [
  {
    id: 'life_oldage_001',
    act: 'oldage',
    stage: 'old',
    minAge: 61,
    maxAge: 66,
    title: '鬧鐘沒有響的早晨',
    text: '退休第一天，你照樣在天還沒亮就醒了，才想起來今天不用再趕車。陽台的風涼涼的，巷口早餐店的蒸氣正冒上來，你站在那裡，忽然不知道這個空白要拿什麼去填。桌上擺著老伴泡好的茶，杯子還冒著煙。',
    tag: '老後｜退休',
    weight: 1,
    once: true,
    opts: [
      {
        label: '坐到餐桌前，把那份燒餅油條慢慢吃完',
        hint: '決定從今天起，把日子過慢一點',
        main: true,
        effects: { mood: 5, stress: -4, family: 2 }
      },
      {
        label: '泡一壺老人茶，坐在陽台把晨光看完',
        hint: '原來天空是這樣一點一點亮起來的',
        effects: { mood: 3, stress: -3, curiosity: 2 }
      },
      {
        label: '穿上運動鞋，去公園走三圈再回來',
        hint: '動一動，才對得起這一天',
        effects: { health: 2, mood: 3, sport: 1, stress: -2 }
      },
      {
        label: '打電話給老朋友，笑說「我自由了」',
        hint: '有些快樂，要有人一起講才夠味',
        effects: { social: 4, mood: 3, confidence: 2 },
        chars: { friend: { rel: 4, met: true } }
      }
    ]
  },
  {
    id: 'life_oldage_002',
    act: 'oldage',
    stage: 'old',
    minAge: 61,
    maxAge: 70,
    title: '火車沿著海岸線慢慢開',
    text: '你說要去看看年輕時沒看過的風景，於是買了兩張火車票。車窗的風灌進來，海在右手邊一路沒斷。老伴在對座剝橘子，說「這趟等你退休，等了好多年」。小販推著餐車經過，她問你要不要吃海苔便當。',
    tag: '老後｜生活',
    weight: 1,
    once: true,
    cond: (S) => !!S.spouse,
    opts: [
      {
        label: '接下便當，把窗外第一眼海景指給老伴看',
        hint: '風景有她一起看，才算風景',
        main: true,
        effects: { mood: 5, family: 4, stress: -3 },
        chars: { partner: { rel: 6, met: true } }
      },
      {
        label: '記下沿途每一個地名，說下次還要再來',
        hint: '人生還長，風景還多',
        effects: { curiosity: 4, mood: 3, confidence: 2 }
      },
      {
        label: '在月台邊的郵筒，寄一張明信片給自己',
        hint: '寫下此刻，等回家時收',
        effects: { independence: 2, curiosity: 3, mood: 3, money: -80 }
      },
      {
        label: '嫌車廂冷氣太強，一路唸著要回家看狗',
        hint: '嘴上唸，腳底卻沒想下車',
        effects: { mood: 1, stress: -2, family: 2 },
        chars: { partner: { rel: 3 } }
      }
    ]
  },
  {
    id: 'life_oldage_003',
    act: 'oldage',
    stage: 'old',
    minAge: 61,
    maxAge: 72,
    title: '孫女的第一句「阿公」',
    text: '週六早上，兒媳把孩子託給你半天。你泡好奶粉，看她坐在餐桌椅上拍桌，咯咯地笑。你笨手笨腳地圍好圍兜，她仰起臉，忽然含含糊糊喊了句「阿公」。整個客廳忽然靜下來，連掛鐘都好像慢了半拍。',
    tag: '老後｜家庭',
    weight: 1.2,
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      {
        label: '蹲下來把孫女抱起來，眼眶有點熱',
        hint: '一聲「阿公」，把一輩子的辛苦都值得了',
        main: true,
        effects: { family: 5, mood: 5, stress: -2 },
        chars: { child: { rel: 4, met: true } }
      },
      {
        label: '拿出手機錄下來，說要留給老伴看',
        hint: '有些畫面，值得存一輩子',
        effects: { mood: 4, family: 3, curiosity: 2 },
        chars: { child: { rel: 3 } }
      },
      {
        label: '教她用積木疊一座比她還高的塔',
        hint: '她笑一次，你就年輕一歲',
        effects: { family: 3, curiosity: 3, arts: 1, mood: 3 },
        chars: { child: { rel: 3 } }
      },
      {
        label: '玩到一半，想起年輕時帶兒子的笨拙，笑了',
        hint: '原來自己也這樣跌跌撞撞過',
        effects: { mood: 4, family: 3, stress: -3 },
        chars: { child: { rel: 3 } }
      }
    ]
  },
  {
    id: 'life_oldage_004',
    act: 'oldage',
    stage: 'old',
    minAge: 61,
    maxAge: 70,
    title: '書法課的第一堂',
    text: '老年大學的教室在活動中心二樓，黑板還是綠的。老師要大家先寫自己的名字，毛筆沾滿墨，你懸著手腕，第一個字就糊成一團。隔壁座的老太太遞來一張衛生紙，說「慢慢來，我們有的是時間」。午後的陽光斜斜地鋪了一地。',
    tag: '老後｜學習',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把糊掉的字重寫十遍，直到筆畫有了形狀',
        hint: '老了，也還能學得會',
        effects: { arts: 4, confidence: 3, curiosity: 3, mood: 2 }
      },
      {
        label: '幫鄰座老太太的墨盤添水，聽她講她的一生',
        hint: '每張皺紋裡，都有一部故事',
        effects: { social: 4, mood: 3, curiosity: 3 }
      },
      {
        label: '下課後跟同學約好，下週一起再來練字',
        hint: '老年大學的作業，是用友誼寫的',
        effects: { social: 4, mood: 3, arts: 2 }
      },
      {
        label: '覺得坐不住，改去隔壁的合唱團試試',
        hint: '人生的第二堂課，也可以換一間',
        effects: { curiosity: 3, mood: 3, social: 2, arts: 2 }
      }
    ]
  },
  {
    id: 'life_oldage_005',
    act: 'oldage',
    stage: 'old',
    minAge: 61,
    maxAge: 70,
    title: '公園的晨光',
    text: '清晨六點半的公園，樹梢還掛著水珠。太極拳班的音樂從廣場那頭傳來，幾個熟面孔已經繞著步道走第二圈了。你活動著僵硬的膝蓋，呼出的氣在冬天裡凝成白霧，卻覺得這一天，像從沒這麼長、這麼慢過。',
    tag: '老後｜生活',
    weight: 1,
    once: true,
    opts: [
      {
        label: '跟著太極拳班做完整套，腿痠了也開心',
        hint: '把日子過成一套拳，一個呼吸一個呼吸',
        main: true,
        effects: { health: 4, sport: 2, mood: 3, stress: -2 }
      },
      {
        label: '繞著步道快走三圈，跟每個熟人打招呼',
        hint: '一圈問候，一圈晨光',
        effects: { health: 3, social: 4, mood: 3 }
      },
      {
        label: '在涼亭坐到太陽升高，只看晨光慢慢移動',
        hint: '有些早晨，適合用來發呆',
        effects: { mood: 3, stress: -3, curiosity: 2 }
      },
      {
        label: '撿起一片落葉帶回家，說要夾進年輕時的詩集',
        hint: '少年時的書，終於等到這片葉子',
        effects: { mood: 3, curiosity: 3, arts: 1 }
      }
    ]
  },
  {
    id: 'life_oldage_006',
    act: 'oldage',
    stage: 'old',
    minAge: 62,
    maxAge: 75,
    title: '圓桌上空著的位子',
    text: '同學會一年一次，今年訂在市中心那間老餐廳。菜一道道上，飯吃到一半，有人提起上個月剛走的那個名字，一桌人忽然安靜，筷子停在半空。服務生過來問要不要續壺茶，你低頭看碗裡涼掉的湯，發現自己記不清他最後一次笑是什麼時候。',
    tag: '老後｜友誼',
    weight: 1.2,
    once: true,
    opts: [
      {
        label: '舉起茶杯，說「敬他」，大家跟著乾杯',
        hint: '有些人走了，就用一杯茶送他',
        main: true,
        effects: { social: 4, mood: 4, stress: -3 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '跟同桌的人講起他年輕時的糗事，笑到眼角有淚',
        hint: '他最怕別人記得他嚴肅，其實他愛笑',
        effects: { mood: 5, social: 3, confidence: 2 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '把這天的合照洗出來，寄給沒能來的每個人',
        hint: '有些見面，這輩子可能只剩一次',
        effects: { social: 4, mood: 3, curiosity: 2 }
      },
      {
        label: '沉默地吃完那碗涼掉的湯，心想下一個會是誰',
        hint: '有些告別，先在心裡排隊',
        effects: { mood: -2, stress: 2, confidence: -1 }
      }
    ]
  },
  {
    id: 'life_oldage_007',
    act: 'oldage',
    stage: 'old',
    minAge: 65,
    maxAge: 78,
    title: '通訊錄裡暗掉的名字',
    text: '你在整理老手機的通訊錄，滑著滑著，看到好多已經不會再亮起的名字。有的人你記得他結婚那天的領帶顏色，有的人你只記得他住院前最後一通電話。手指停在一個名字上，你忽然想，已經三年沒有撥過這個號碼了。',
    tag: '老後｜告別',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把那個名字移到最上面，好好記住他',
        hint: '人走了，記住也是一種陪伴',
        main: true,
        effects: { social: 3, mood: 3, stress: -2 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '翻出舊照片，一張一張看，看到天亮',
        hint: '相簿會舊，記憶不會',
        effects: { curiosity: 4, mood: 2, family: 2 }
      },
      {
        label: '打給還連絡得上的老朋友，約這週就見面',
        hint: '別等「改天」，改天會變成下輩子',
        effects: { social: 5, mood: 4, confidence: 2 },
        chars: { friend: { rel: 5 } }
      },
      {
        label: '把幾個名字刪掉，說「緣分盡了就算了」',
        hint: '有些線，斷了就別再想它',
        warn: true,
        effects: { independence: 3, mood: -2, social: -2 }
      }
    ]
  },
  {
    id: 'life_oldage_008',
    act: 'oldage',
    stage: 'old',
    minAge: 66,
    maxAge: 72,
    title: '攤位前第一張鈔票',
    text: '你年輕時沒圓的夢，退休後捲起袖子自己動手。攤位上擺著你做的東西，路過的年輕人蹲下來問價錢，你說數字時喉嚨有點乾。他掏錢，你小心翼翼把第一張鈔票收進圍裙口袋，回頭看，家人在攤子後面對你比了個讚。',
    tag: '老後｜第二人生',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把第一張鈔票收進簿子裡，說這是新的開始',
        hint: '賺的不是錢，是證明自己還活著',
        main: true,
        effects: { confidence: 5, mood: 5, independence: 4, money: 3000 }
      },
      {
        label: '收攤後記下每個客人的喜好，琢磨怎麼改進',
        hint: '老手藝，也要有新花樣',
        effects: { curiosity: 4, confidence: 3, tech: 2 }
      },
      {
        label: '收攤後，跟來幫忙的家人說「這攤子，是我們一起的家」',
        hint: '一家人，在哪裡都是家',
        effects: { family: 4, mood: 4, independence: 2 },
        chars: { child: { rel: 3 } }
      },
      {
        label: '嫌太累，想收起來，卻想起那些年輕時的夢',
        hint: '夢還沒有做完，怎麼捨得收',
        effects: { mood: -2, stress: 3, confidence: -2 }
      }
    ]
  },
  {
    id: 'life_oldage_009',
    act: 'oldage',
    stage: 'old',
    minAge: 72,
    maxAge: 85,
    title: '診所候診椅上的下午',
    text: '候診椅的皮面磨得發亮，隔壁坐著的老先生低頭看自己的號碼牌。廣播喊到你名字時，護士量血壓，數字比去年高了一些。你想起自己還曾經爬過山、跑過馬拉松，此刻卻只看著牆上那張血壓對照表，一格一格地數。',
    tag: '老後｜健康',
    weight: 1,
    once: true,
    opts: [
      {
        label: '記下護士的每一句囑咐，回家貼在冰箱上',
        hint: '聽話，是老了以後最難也最需要的事',
        main: true,
        effects: { health: 4, confidence: 2, stress: -2 }
      },
      {
        label: '問醫生「我還能活多久」，話一出口自己先笑了',
        hint: '敢問出口，就不怕聽答案',
        effects: { health: 2, confidence: 4, mood: 2, stress: 2 }
      },
      {
        label: '走出診所，決定明天就再去公園多走兩圈',
        hint: '藥單不是判決，是提醒',
        effects: { health: 3, sport: 2, mood: 2 }
      },
      {
        label: '把藥單塞進口袋，跟家人說「就跟你說我沒事了」',
        hint: '倔強，是老年人最後的盔甲',
        warn: true,
        effects: { health: -2, confidence: 3, stress: 2, family: -1 },
        chars: { child: { rel: -2 } }
      }
    ]
  },
  {
    id: 'life_oldage_010',
    act: 'oldage',
    stage: 'old',
    minAge: 73,
    maxAge: 88,
    title: '病房窗外的樹影',
    text: '這次是真的躺進醫院了。床頭的點滴一滴一滴，消毒水的味道很熟悉，像小時候那次高燒。老伴把洗好的橘子剝成一瓣一瓣放在床頭櫃，兒子女兒輪流在夜裡陪床。護士小姐進來換藥時，你問她：「這樹開花的時候，我還在嗎？」',
    tag: '老後｜健康',
    weight: 1,
    once: true,
    opts: [
      {
        label: '握住老伴的手，說「這一路，辛苦你了」',
        hint: '最重的一句話，要用最輕的聲音說',
        main: true,
        effects: { family: 5, mood: 4, stress: -3 },
        chars: { partner: { rel: 6, met: true } }
      },
      {
        label: '叮囑子女別太累，把家裡的鑰匙交給他們',
        hint: '把門鑰匙交出去，就是把一輩子交出去',
        effects: { family: 4, confidence: 2, independence: 2 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '問醫生到底能不能好，好就出院，不好就坦然',
        hint: '答案不一定是壞的，但問了才知道',
        dice: {
          skill: 'health',
          dc: 14,
          pass: { health: 5, mood: 3, confidence: 3, stress: -3 },
          fail: { health: -3, mood: -4, stress: 3 }
        }
      },
      {
        label: '把病床搖高，靜靜看窗外那棵樹，直到護士來關燈',
        hint: '有些夜，靠著樹影也能熬過去',
        effects: { mood: 2, stress: -2, curiosity: 2, independence: 2 }
      }
    ]
  },
  {
    id: 'life_oldage_011',
    act: 'oldage',
    stage: 'old',
    minAge: 72,
    maxAge: 85,
    title: '白花前的鞠躬',
    text: '追思會場的冷氣很強，白花一排排擺在前方。你看著放大的照片裡，他還是那年公園下棋時精神奕奕的樣子。司儀喊著家屬答禮，你彎下腰，忽然想起約好秋天要一起去爬山，還有好多話，沒來得及說。',
    tag: '老後｜告別',
    weight: 1,
    once: true,
    opts: [
      {
        label: '在花前深深鞠三個躬，替他說出沒說完的話',
        hint: '送人的最後一程，要送得乾乾淨淨',
        main: true,
        effects: { mood: 4, social: 3, stress: -3 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '安慰家屬，說他走得安詳，沒有牽掛',
        hint: '這句話，其實是說給自己聽的',
        effects: { social: 5, mood: 3, family: 2 }
      },
      {
        label: '把他的棋盤帶回家，說「以後，我陪你下」',
        hint: '物件還在，人就沒有真的走',
        effects: { mood: 4, curiosity: 3, social: 2, stress: -2 }
      },
      {
        label: '走出會場，抬頭看天，覺得他就在雲後面',
        hint: '告別之後，還有另一種再見',
        effects: { mood: 3, confidence: 3, stress: -3 }
      }
    ]
  },
  {
    id: 'life_oldage_012',
    act: 'oldage',
    stage: 'old',
    minAge: 75,
    maxAge: 90,
    title: '老照片裡的人',
    text: '你翻出幾十年前的老照片，泛黃的邊角捲起來。照片裡的人有的還在，有的已經遠行。你一張張看完，發現自己一點也不怕那條終點線，怕的是還沒來得及好好道別。窗外的晚霞燒成一片橘紅，你把照片按年份一張張排好。',
    tag: '老後｜人生',
    weight: 1,
    once: true,
    opts: [
      {
        label: '寫一封信給二十年後的自己，說「要好好活著」',
        hint: '有些約定，要跟自己立',
        main: true,
        dice: {
          skill: 'confidence',
          dc: 15,
          pass: { mood: 4, confidence: 4, stress: -3 },
          fail: { mood: -2, stress: 3 }
        }
      },
      {
        label: '把照片分給每個人，附上一張手寫的字條',
        hint: '把回憶交出去，也是種整理',
        effects: { social: 5, family: 4, mood: 4 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '一個人在陽台坐到天黑，數著星星想誰已經在那裡',
        hint: '想念一個人，就是替他把星星數完',
        effects: { mood: 2, curiosity: 3, stress: -2, independence: 2 },
        chars: { elder: { rel: 3 } }
      },
      {
        label: '告訴自己別想這些，明天還要早起去公園',
        hint: '忙起來，眼淚就找不到路',
        effects: { stress: -3, mood: 1, health: 2 }
      }
    ]
  },
  {
    id: 'life_oldage_013',
    act: 'oldage',
    stage: 'old',
    minAge: 75,
    maxAge: 90,
    title: '把話說清楚的那一晚',
    text: '全家難得聚齊的晚餐後，你留大家在客廳。你拿出一個牛皮紙袋，裡面是地契、印章、你寫好的那幾頁字。你說：「有些事，趁我清醒的時候講清楚，你們以後才不用操心。」客廳很安靜，只聽得見電扇嗡嗡地轉。',
    tag: '老後｜交代',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把每一件事交代得清清楚楚，連存摺密碼都寫好',
        hint: '交代得越清楚，留下的牽掛就越少',
        dice: {
          skill: 'language',
          dc: 14,
          pass: { family: 6, confidence: 3, stress: -3 },
          fail: { family: 2, stress: 3, mood: -2 }
        },
        chars: { child: { rel: 5 } }
      },
      {
        label: '說「我只求你們好好照顧彼此，東西誰多誰少不重要」',
        hint: '把這句話說出口，就是真的放下了',
        main: true,
        effects: { family: 5, mood: 4, social: 3 },
        chars: { child: { rel: 5 } }
      },
      {
        label: '把孩子們的手疊在一起，說「你們就是我最大的家產」',
        hint: '最值錢的那份遺產，是他們自己',
        effects: { family: 6, mood: 5, confidence: 2 },
        chars: { child: { rel: 6 } }
      },
      {
        label: '話講到一半紅了眼眶，說「算了，以後再說」',
        hint: '有些話，講到一半才知道有多重',
        warn: true,
        effects: { mood: -2, stress: 3, confidence: -2 }
      }
    ]
  },
  {
    id: 'life_oldage_014',
    act: 'oldage',
    stage: 'old',
    minAge: 70,
    maxAge: 85,
    title: '老伴的白髮',
    text: '早晨你醒得早，替老伴把枕邊的藥分好，水杯擺在她手邊。她笑你越來越囉嗦，說你以前可是連自己的醫療卡都會弄丟的人。你們沒有再講年輕時的情話，只是靜靜坐在餐桌兩頭，吃著同樣的稀飯，偶爾抬頭笑一下。光從窗口照進來，把兩個影子靠得很近。',
    tag: '老後｜家庭',
    weight: 1.2,
    once: true,
    cond: (S) => !!S.spouse,
    opts: [
      {
        label: '伸手握住她的手，什麼話都不說',
        hint: '一輩子的話，都在這隻手裡了',
        main: true,
        effects: { family: 6, mood: 5, stress: -3 },
        chars: { partner: { rel: 7, met: true } }
      },
      {
        label: '說「下輩子還要做夫妻」，她瞪你一眼笑了',
        hint: '若真有下輩子，這句話要先說',
        effects: { family: 5, mood: 5, confidence: 2 },
        chars: { partner: { rel: 6 } }
      },
      {
        label: '把年輕時的相簿拿出來，一起看一整個下午',
        hint: '照片會褪色，那天的風不會',
        effects: { family: 5, mood: 4, curiosity: 3 },
        chars: { partner: { rel: 5 } }
      },
      {
        label: '想著自己身體越來越差，偷偷拜託她「別走在我前面」',
        hint: '最自私也最真的一句話',
        effects: { family: 4, mood: 2, stress: 3, confidence: -2 },
        chars: { partner: { rel: 4 } }
      }
    ]
  },
  {
    id: 'life_oldage_015',
    act: 'oldage',
    stage: 'old',
    minAge: 72,
    maxAge: 88,
    title: '孩子帶你去掛號',
    text: '你發現自己上下樓梯開始喘，孩子說什麼也要陪你去醫院。他在診間外排隊，幫你填單子，像你當年帶他去打預防針那樣。你看他背影，忽然想起他也曾小小的，牽著你的手問「打針會不會痛」。輪到你進診間，他回頭對你說：「我陪你。」',
    tag: '老後｜家庭',
    weight: 1,
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      {
        label: '拍拍他的肩膀說「有你真好」',
        hint: '他等這一句，也許等了一輩子',
        main: true,
        effects: { family: 6, mood: 5, stress: -3 },
        chars: { child: { rel: 7, met: true } }
      },
      {
        label: '跟他說「換我麻煩你了，不好意思」',
        hint: '父子之間的客氣，藏著多少說不出口的愛',
        effects: { family: 4, confidence: 3, mood: 3 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '看他忙進忙出，偷偷轉過頭把眼眶擦乾',
        hint: '有些感動，不忍心讓孩子看見',
        effects: { mood: 4, family: 4, stress: -2 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '倔強地說「我自己可以，你回公司吧」',
        hint: '不想拖累任何人，是老一輩的固執',
        warn: true,
        effects: { independence: 3, family: -2, mood: -2, stress: 2 },
        chars: { child: { rel: -3 } }
      }
    ]
  },
  {
    id: 'life_oldage_016',
    act: 'oldage',
    stage: 'old',
    minAge: 70,
    maxAge: 85,
    title: '媽媽的手，還是暖暖的',
    text: '近百歲的媽媽躺在老家的床上，意識有時清醒、有時糊塗。她忽然睜開眼，認出是你，乾癟的手慢慢抬起來，摸了一下你的臉，說：「你小時候，最怕黑。」她已經很久沒認出你了，這一刻卻比誰都清楚。窗外下著雨，你跪在床沿，不知道該說些什麼。',
    tag: '老後｜告別',
    weight: 1.2,
    once: true,
    cond: (S) => S.parentStatus.mom === 'alive',
    opts: [
      {
        label: '握住她的手，說「媽，謝謝你」',
        hint: '這句謝謝，欠了一輩子',
        main: true,
        effects: { family: 6, mood: 4, stress: -3 },
        chars: { mom: { rel: 6, met: true } },
        setParent: { mom: 'passed' }
      },
      {
        label: '跟她說「你放心，我過得很好」，一遍又一遍',
        hint: '她一生要的，不過就是這句話',
        effects: { family: 5, mood: 4, confidence: 3 },
        chars: { mom: { rel: 5 } },
        setParent: { mom: 'passed' }
      },
      {
        label: '把年輕時她織的毛衣拿來，輕輕蓋在她腿上',
        hint: '那件毛衣，是你小時候她熬夜織的',
        effects: { family: 5, mood: 4, arts: 1 },
        chars: { mom: { rel: 5 } },
        setParent: { mom: 'passed' }
      },
      {
        label: '一句話也說不出來，只是哭，像小時候被她抱在懷裡',
        hint: '在她面前，你永遠是那個怕黑的孩子',
        effects: { family: 5, mood: -2, stress: -3 },
        chars: { mom: { rel: 5 } },
        setParent: { mom: 'passed' }
      }
    ]
  },
  {
    id: 'life_oldage_017',
    act: 'oldage',
    stage: 'old',
    minAge: 70,
    maxAge: 85,
    title: '爸爸的最後一句話',
    text: '沉默了一輩子的爸爸，這次是真的不行了。他靠在病床上，喉頭滾了滾，用沙啞的聲音問你：「……這一生，你有沒有後悔過？」你愣住，想起他當年教你騎腳踏車，你摔了他也不扶，只說「自己爬起來」。他等你回答，眼神裡有這輩子第一次見到的軟弱。',
    tag: '老後｜告別',
    weight: 1.2,
    once: true,
    cond: (S) => S.parentStatus.dad === 'alive',
    opts: [
      {
        label: '說「後悔沒早點跟你說聲謝謝」',
        hint: '那聲謝謝，他等了一輩子',
        main: true,
        effects: { family: 6, mood: 4, confidence: 3 },
        chars: { dad: { rel: 7, met: true } },
        setParent: { dad: 'passed' }
      },
      {
        label: '說「沒有後悔，我活得很認真」',
        hint: '這是他最想聽到的答案',
        effects: { family: 5, confidence: 5, mood: 3 },
        chars: { dad: { rel: 6 } },
        setParent: { dad: 'passed' }
      },
      {
        label: '握著他的手，把一輩子的話都說給他聽',
        hint: '他話少，你就替他多說一點',
        effects: { family: 6, mood: 5, confidence: 2 },
        chars: { dad: { rel: 7 } },
        setParent: { dad: 'passed' }
      },
      {
        label: '哽咽著說「你還沒看到我孫子結婚呢」',
        hint: '有些遺憾，說出口就輕了一半',
        effects: { family: 5, mood: -2, confidence: 2 },
        chars: { dad: { rel: 6 } },
        setParent: { dad: 'passed' }
      }
    ]
  },
  {
    id: 'life_oldage_018',
    act: 'oldage',
    stage: 'old',
    minAge: 70,
    maxAge: 88,
    title: '多年後的那通電話',
    text: '你年輕時，為了某件事跟一個人斷了聯絡。多年後你偶然聽到他的近況，在通訊錄裡找到那個好久沒撥的號碼。手指停在撥出鍵上很久，窗外路燈一盞一盞亮起來，你想，也許這是最後一次還有機會把話說開。',
    tag: '老後｜和解',
    weight: 1,
    once: true,
    opts: [
      {
        label: '按下撥出鍵，把想講的話一次講完',
        hint: '有些話，現在不講就真的來不及了',
        main: true,
        dice: {
          skill: 'language',
          dc: 15,
          pass: { social: 5, mood: 5, stress: -4 },
          fail: { mood: -2, stress: 4, confidence: -2 }
        },
        chars: { friend: { rel: 5 } }
      },
      {
        label: '寫一封信，把道歉和謝謝都寫進去，寄出後不再等回音',
        hint: '和解的意義，在於說出口，不在於被原諒',
        effects: { social: 4, mood: 4, stress: -3, confidence: 2 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '直接去他常去的公園找他，說「好久不見」',
        hint: '有些和好，見面一個眼神就夠了',
        effects: { social: 5, confidence: 5, mood: 4, stress: -2 },
        chars: { friend: { rel: 5 } }
      },
      {
        label: '想想還是算了，把號碼刪掉，那塊石頭自己搬走',
        hint: '有些結，不一定要解開，背得動也行',
        effects: { independence: 4, mood: -1, stress: 2, confidence: 1 }
      }
    ]
  },
  {
    id: 'life_oldage_019',
    act: 'oldage',
    stage: 'old',
    minAge: 72,
    maxAge: 90,
    title: '孫子問你：人離開後會去哪裡',
    text: '孫子坐在你腿上，忽然仰頭問：「阿公，人離開以後會去哪裡？」你被問得一愣，看見他眼裡的認真。窗台上那盆你種了很久的蘭花剛開了花，你低頭看他，發現有些問題繞了大半生，還是第一次有人這樣問你。',
    tag: '老後｜家庭',
    weight: 1,
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      {
        label: '說「會變成很亮的星星，一直看著你」',
        hint: '他以後抬頭看天，就會想起你',
        main: true,
        effects: { family: 5, mood: 4, stress: -3 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '老實說「我也不知道，但我們都會好好的」',
        hint: '誠實，是能給他的最好答案',
        effects: { confidence: 5, mood: 4, curiosity: 3 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '反問他「你覺得呢」，聽他認真的答案',
        hint: '孩子的答案，有時比大人的更亮',
        effects: { curiosity: 4, family: 4, mood: 4 },
        chars: { child: { rel: 4 } }
      },
      {
        label: '別過頭去，說「小孩子別問這種事」',
        hint: '有些問題，躲到老了也躲不過',
        warn: true,
        effects: { family: -2, mood: -2, stress: 2 },
        chars: { child: { rel: -3 } }
      }
    ]
  },
  {
    id: 'life_oldage_020',
    act: 'oldage',
    stage: 'old',
    minAge: 78,
    maxAge: 95,
    title: '最後一次慢慢走',
    text: '你散步到年輕時常走的那條路，路旁的樹長高了好多，麵攤還在，老闆換成了第二代。你買了一碗以前常吃的麵，坐在同一張桌子，慢慢吃完。忽然覺得，這一生該做的事都做過了，該道別的人也都好好道別過了。夕陽斜斜地照過來，你把碗筷放好，想：這樣的一生，也夠了。',
    tag: '老後｜圓滿',
    weight: 1,
    once: true,
    opts: [
      {
        label: '沿著路走回家，把每個轉角都記一遍',
        hint: '把風景記進心裡，帶到下一個地方去',
        main: true,
        effects: { mood: 4, curiosity: 3, stress: -4, independence: 2 }
      },
      {
        label: '在老樹下坐著，直到天色完全暗下來',
        hint: '天色暗了，心裡卻很亮',
        effects: { mood: 4, stress: -4, curiosity: 2 }
      },
      {
        label: '回家把燈一盞盞打開，跟家人說「這一生，我們真的夠了」',
        hint: '這一句，比任何遺產都值錢',
        effects: { family: 6, mood: 5, confidence: 2 },
        chars: { child: { rel: 5 } }
      },
      {
        label: '倔強地想「我還能再活十年」',
        hint: '輸給時間以前，先別認輸',
        effects: { health: 2, confidence: 3, mood: 1, stress: 1 }
      }
    ]
  }
];

export const OLDAGE_MILESTONES = [
  {
    id: 'm_second',
    age: 65,
    title: '第二人生',
    text: '六十五歲生日那天，你不再需要收退休通知，因為你早就不在職場了。晨光從窗簾縫照進來，你坐了很久，忽然發現接下來的日子，沒有任何一個人再幫你安排好。這是你人生裡，第一次完全由自己決定的一件事——你想用它做什麼？',
    kind: 'choice',
    opts: [
      {
        label: '捲起袖子，去社區當志工，把剩下的時間分給需要的人',
        hint: '付出，讓日子重新有了重量',
        main: true,
        effects: { mood: 4, social: 5, confidence: 3, stress: -3 }
      },
      {
        label: '圓年輕時沒圓的夢，自己開一間小店',
        hint: '可能賠上積蓄，也可能圓一個夢',
        need: { stat: 'confidence', min: 55 },
        effects: { confidence: 5, mood: 4, independence: 4, money: -20000 }
      },
      {
        label: '揹起背包，把沒看過的風景都看一遍',
        hint: '花掉積蓄，換回一生的風景',
        effects: { mood: 5, curiosity: 5, health: 2, money: -15000 }
      },
      {
        label: '把時間留給家人，含飴弄孫',
        hint: '孩子長大了，換你陪孫子長大',
        need: { stat: 'family', min: 50 },
        effects: { family: 5, mood: 4, stress: -3 },
        chars: { child: { rel: 4, met: true } }
      },
      {
        label: '退而不休，繼續留在熟悉的位子上發揮餘熱',
        hint: '身體允許的話，工作也是一種養生',
        need: { stat: 'confidence', min: 60 },
        effects: { independence: 3, confidence: 3, money: 50000, stress: 4, health: -2 }
      }
    ]
  },
  {
    id: 'm_health',
    age: 72,
    title: '健康警訊',
    text: '七十二歲那年，體檢報告上的紅字比往年多了兩格。醫生把椅子轉過來，用很平穩的語氣說要控制血壓、少鹽、多走動，然後補了一句：「接下來，身體要自己顧了。」你坐在診間，第一次覺得時間不再站在你這邊。從這一年開始，每一天都得珍惜著用。',
    kind: 'auto'
  },
  {
    id: 'm_echo',
    age: 80,
    title: '回望',
    text: '八十歲的秋天，你坐在陽台，把這一生的事慢慢想了一遍。孩子們都成家了，老伴坐在身邊，朋友有先走的，也有還陪著的。你想著想著，忽然發現故事已經走到最後一章——這一生的故事，該好好說再見了。',
    kind: 'auto'
  }
];

export const ENDING = {
  epilogue: '人生終幕。八十歲之後的某一天，你坐在陽台那張老躺椅上，夕陽把屋子的影子拉得很長。你閉上眼，這一生的光，一盞一盞亮起來——在說再見以前，你想好好再看一遍。',
  epitaphs: [
    '這一生，他沒有虧欠過誰，也沒讓誰虧欠他。',
    '此生有憾，卻也因此，活得更加用力。',
    '他來過，愛過，最後是笑著走的。',
    '一生替別人撐傘的人，如今安歇了。'
  ],
  deathEpitaphs: [
    '他走的那天，窗台上的花正好開了。',
    '這一生他用力活過，最後是輕輕離開的。',
    '他留下的話不多，卻住在每一個人的心裡。'
  ]
};
