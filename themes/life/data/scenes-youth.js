export const SCENES = [
  {
    id: 'life_youth_001',
    act: 'youth',
    stage: 'teen',
    minAge: 13, maxAge: 13,
    title: '制服上的第二顆鈕釦',
    text: '國中第一天，你把小學制服收進紙箱。新制服領口緊得透不過氣，校門口人潮如浪，童年玩伴分到了隔壁班。走廊那頭，有人朝你點了一下頭。',
    tag: '校園｜成長',
    once: true,
    opts: [
      { label: '主動跟那個人打招呼', hint: '第一天就交個朋友', chars: { friend: { rel: 8, met: true } }, effects: { social: 6, mood: 3 } },
      { label: '低頭快步走進教室', hint: '先觀察一下再說', effects: { confidence: -2, curiosity: 2 } },
      { label: '跟童年玩伴約好中午見面', hint: '抓住僅剩的熟悉感', chars: { friend: { rel: 6, met: true } }, effects: { mood: 4, social: 2 } },
      { label: '把鈕釦重新縫緊，照照窗玻璃', hint: '面對全新的自己', effects: { confidence: 4, curiosity: 3 } }
    ]
  },
  {
    id: 'life_youth_002',
    act: 'youth',
    stage: 'teen',
    minAge: 13, maxAge: 14,
    title: '段考前一週的颱風假',
    text: '颱風假停課，作業卻沒停。窗外風雨拍打鐵皮屋頂，桌上攤著國一數學第一冊。鄰居家的補習班燈亮著，媽媽的手機震了三次。',
    tag: '升學｜壓力',
    once: true,
    opts: [
      { label: '自己把課本從頭啃一遍', hint: '靠自己的力量', dice: { skill: 'math', dc: 12, pass: { math: 6, confidence: 4, mood: 2 }, fail: { stress: 5, mood: -3 } } },
      { label: '報名隔壁的補習班', hint: '用錢換時間', effects: { money: -8000, math: 3, stress: -2 } },
      { label: '翻出小學的筆記找感覺', hint: '從基礎打起', effects: { math: 2, curiosity: 2 } },
      { label: '放下課本，睡個午覺再說', hint: '明天再面對', effects: { mood: 4, stress: 3, math: -2 } }
    ]
  },
  {
    id: 'life_youth_003',
    act: 'youth',
    stage: 'teen',
    minAge: 13, maxAge: 15,
    title: '掃地時間的角落',
    text: '打掃時間，掃地組長把同學的書包丟進垃圾桶。周圍的人笑了幾聲，又低下頭繼續掃地。那同學站在角落，握著掃把的指節發白。',
    tag: '校園｜成長',
    once: true,
    opts: [
      { label: '把書包撿起來遞回去', hint: '當個不沉默的人', dice: { skill: 'leadership', dc: 12, pass: { social: 8, confidence: 6, mood: 5 }, fail: { social: -2, stress: 3 } }, chars: { friend: { rel: 6, met: true } } },
      { label: '叫住掃地組長，當面講理', hint: '直接對質', dice: { skill: 'leadership', dc: 14, pass: { social: 6, confidence: 8 }, fail: { stress: 6, social: -3 } } },
      { label: '低著頭繼續掃地', hint: '多一事不如少一事', effects: { stress: 4, mood: -4 } },
      { label: '之後悄悄留一張紙條安慰他', hint: '用溫柔的方式靠近', chars: { friend: { rel: 4, met: true } }, effects: { social: 4, confidence: 2, mood: 3 } }
    ]
  },
  {
    id: 'life_youth_004',
    act: 'youth',
    stage: 'teen',
    minAge: 13, maxAge: 15,
    title: '凌晨兩點的手機光',
    text: '你把手機塞進枕頭底下，螢幕光還是漏出來。同學群組裡有人連發了三十則訊息，你忍不住點開。門外響起拖鞋聲，是媽媽。',
    tag: '家庭｜叛逆',
    once: true,
    opts: [
      { label: '關掉手機，裝睡', hint: '被抓到前先逃', effects: { stress: 2, family: -2 } },
      { label: '頂嘴：「大家都在玩！」', hint: '青春期的倔強', warn: true, chars: { mom: { rel: -6, met: true } }, effects: { family: -6, independence: 3, stress: 3 } },
      { label: '把手機交出去，說會改', hint: '認錯換和平', chars: { mom: { rel: 4, met: true } }, effects: { family: 5, independence: -2 } },
      { label: '跟媽媽商量規律的使用時間', hint: '談判桌上的青春', dice: { skill: 'leadership', dc: 13, pass: { family: 8, independence: 5, confidence: 4 }, fail: { family: -2, stress: 3 } }, chars: { mom: { rel: 6, met: true } } }
    ]
  },
  {
    id: 'life_youth_005',
    act: 'youth',
    stage: 'teen',
    minAge: 14, maxAge: 15,
    title: '砰地關上的房門',
    text: '爸爸說你成績退步是玩太多，你回了一句「你懂什麼」。房門在你身後砰地關上，牆上貼著的小學獎狀微微震動。客廳安靜了很久。',
    tag: '家庭｜叛逆',
    once: true,
    opts: [
      { label: '拉開門，說聲對不起', hint: '先低頭的勇氣', chars: { dad: { rel: 8, met: true }, mom: { rel: 4, met: true } }, effects: { family: 8, confidence: 3, mood: 4 } },
      { label: '在門後哭了一場', hint: '讓情緒流過', effects: { mood: -2, stress: -6, confidence: 2 } },
      { label: '隔天早餐時若無其事', hint: '假裝沒發生過', effects: { family: -3, stress: 2 } },
      { label: '寫一封信放在餐桌上', hint: '有些話說不出口', chars: { dad: { rel: 6, met: true } }, effects: { family: 6, confidence: 4, language: 3 } }
    ]
  },
  {
    id: 'life_youth_006',
    act: 'youth',
    stage: 'teen',
    minAge: 14, maxAge: 15,
    title: '社團博覽會的長桌',
    text: '操場排滿社團長桌。籃球社在傳球，美術社貼滿水彩海報，電腦教室外排著長龍。學長塞給你一張傳單，上面印著「招新中」。',
    tag: '社團｜成長',
    once: true,
    opts: [
      { label: '加入美術社，拿起畫筆', hint: '把情緒畫出來', effects: { arts: 6, mood: 4 } },
      { label: '報名籃球社，跑起來', hint: '用汗水說話', effects: { sport: 6, health: 4, social: 3 } },
      { label: '鑽進電腦教室寫程式', hint: '鍵盤上的世界', effects: { tech: 6, curiosity: 5 } },
      { label: '競選社團小幹部', hint: '學著帶人', effects: { leadership: 5, confidence: 5, social: 3 } }
    ]
  },
  {
    id: 'life_youth_007',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 16,
    title: '超商大夜班的開門鈴',
    text: '鄰居阿姨的超商缺人，時薪一百八。你站在冷凍櫃前學結帳，手上沾著關東煮的湯汁。錢包裡第一張自己賺的千元鈔，被你折得整整齊齊。',
    tag: '獨立｜打工',
    once: true,
    opts: [
      { label: '接下這個班，學著獨立', hint: '用自己的錢買想要的', effects: { money: 12000, independence: 6, stress: 5, mood: 2 } },
      { label: '拒絕，專心念書', hint: '升學優先', effects: { stress: -3, confidence: 2 } },
      { label: '只做假日班，慢慢來', hint: '兩邊兼顧', effects: { money: 5000, independence: 3, stress: 2 } },
      { label: '邀好友一起來打工', hint: '和朋友並肩賺錢', chars: { bestie: { rel: 5, met: true } }, effects: { social: 4, money: 8000, independence: 3 } }
    ]
  },
  {
    id: 'life_youth_008',
    act: 'youth',
    stage: 'teen',
    minAge: 14, maxAge: 15,
    title: '廁所門口的三人組',
    text: '教室後面多了一把空椅子。三個女生占據了最後一排，誰經過都笑一下。你上完廁所回來，發現自己的椅子被搬走了。',
    tag: '校園｜人際',
    once: true,
    opts: [
      { label: '搬回椅子，順手坐下', hint: '不被嚇到', dice: { skill: 'leadership', dc: 13, pass: { social: 7, confidence: 6 }, fail: { social: -3, stress: 4 } } },
      { label: '換到前排去坐', hint: '避開風暴中心', effects: { social: -2, stress: -2 } },
      { label: '拉一個朋友一起坐回來', hint: '有人陪你就不怕', chars: { bestie: { rel: 5, met: true } }, effects: { social: 5, confidence: 4 } },
      { label: '向導師反映', hint: '尋求大人的幫助', chars: { teacher: { rel: 3, met: true } }, effects: { social: 3, confidence: 2 } }
    ]
  },
  {
    id: 'life_youth_009',
    act: 'youth',
    stage: 'teen',
    minAge: 13, maxAge: 14,
    title: '鏡子裡不認識的人',
    text: '一夜之間，你長高了半個頭，聲音變了調，額頭冒出第一顆青春痘。鏡子裡的人有點陌生。體育課要量體重，你排在隊伍裡，心跳加速。',
    tag: '成長｜健康',
    once: true,
    opts: [
      { label: '抬頭挺胸走上體重計', hint: '接受自己的樣子', effects: { confidence: 6, health: 3, mood: 2 } },
      { label: '跟好友互相打氣', hint: '一起面對成長', chars: { bestie: { rel: 5, met: true } }, effects: { social: 5, mood: 4 } },
      { label: '開始注意飲食和運動', hint: '照顧這個身體', effects: { health: 5, sport: 3, confidence: 3 } },
      { label: '偷懶裝病請假', hint: '暫時逃避', effects: { mood: 3, confidence: -2, health: -2 } }
    ]
  },
  {
    id: 'life_youth_010',
    act: 'youth',
    stage: 'teen',
    minAge: 14, maxAge: 15,
    title: '自習教室的日光燈',
    text: '「距離會考還有九十八天。」補習班的自習教室裡，日光燈嗡嗡作響，有人趴著睡了，口水沾濕講義。你抬頭，看見自己名字寫在白板最上面。',
    tag: '升學｜壓力',
    once: true,
    opts: [
      { label: '訂一張百日衝刺表', hint: '把每一天用滿', dice: { skill: 'language', dc: 12, pass: { language: 5, math: 4, stress: -2, confidence: 3 }, fail: { stress: 5, mood: -3 } } },
      { label: '跟同桌約定互相監督', hint: '有人一起走', chars: { bestie: { rel: 5, met: true } }, effects: { social: 4, language: 3, math: 3 } },
      { label: '每天留一小時打球', hint: '張弛有度', effects: { sport: 4, health: 4, stress: -4, mood: 3 } },
      { label: '熬夜再念一輪', hint: '用時間換分數', effects: { math: 3, language: 2, stress: 8, health: -3 } }
    ]
  },
  {
    id: 'life_youth_011',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 15,
    title: '考場外的七月蟬鳴',
    text: '會考那天，考場外的蟬鳴大得嚇人。你走進教室，座位卡上貼著自己的名字。監考老師拆開牛皮紙袋，倒數開始。',
    tag: '升學｜壓力',
    once: true,
    opts: [
      { label: '深呼吸，先寫有把握的', hint: '穩住節奏', effects: { confidence: 5, stress: -4, math: 3, language: 3 } },
      { label: '腦中一片空白，握緊筆', hint: '硬著頭皮撐下去', dice: { skill: 'math', dc: 13, pass: { math: 4, language: 3, stress: -2 }, fail: { stress: 7, mood: -4, confidence: -3 } } },
      { label: '想起昨晚複習的重點', hint: '用碎片拼出答案', effects: { language: 3, math: 2, curiosity: 2 } },
      { label: '考完就忘，去買杯珍奶', hint: '結果留給未來', effects: { mood: 5, stress: -4, confidence: 2 } }
    ]
  },
  {
    id: 'life_youth_012',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 15,
    title: '火鍋店蒸汽後的人影',
    text: '國中謝師宴選在學校旁的吃到飽火鍋店。蒸汽模糊了每個人的臉，導師舉杯，聲音有點哽咽。你看著三年的同學，有人明年要去外地。',
    tag: '成長｜離別',
    once: true,
    opts: [
      { label: '敬導師一杯可樂', hint: '謝謝他三年的照顧', chars: { teacher: { rel: 7, met: true } }, effects: { social: 5, mood: 4, confidence: 3 } },
      { label: '跟好友約好常聯絡', hint: '把友情帶到下一站', chars: { bestie: { rel: 6, met: true } }, effects: { social: 5, mood: 5 } },
      { label: '偷偷看一眼暗戀的人', hint: '有些話還是說不出口', chars: { crush: { rel: 3, met: true } }, effects: { mood: 3, confidence: 2, curiosity: 2 } },
      { label: '幫大家拍照留念', hint: '把青春按下快門', effects: { arts: 3, social: 4, mood: 3 } }
    ]
  },
  {
    id: 'life_youth_013',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 16,
    title: '新生訓練的白色制服',
    text: '高中新生訓練，白色的制服在太陽下亮得刺眼。學長姐喊著口號，你走進陌生的教室，桌椅還黏著上一屆留下的貼紙。講台上有人對你笑了一下。',
    tag: '校園｜成長',
    once: true,
    opts: [
      { label: '坐到他旁邊，自我介紹', hint: '新生活的第一步', chars: { bestie: { rel: 7, met: true } }, effects: { social: 6, mood: 5, confidence: 4 } },
      { label: '把貼紙撕乾淨，寫上名字', hint: '占領自己的座位', effects: { independence: 4, confidence: 3 } },
      { label: '到處看看，記下逃生路線', hint: '先熟悉地形', effects: { curiosity: 4, independence: 2 } },
      { label: '跟國中好友傳訊息報平安', hint: '舊友情也要顧', chars: { friend: { rel: 5, met: true } }, effects: { social: 4, mood: 4 } }
    ]
  },
  {
    id: 'life_youth_014',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 16,
    title: '志願單上的兩個框',
    text: '高一下學期，導師發下選組志願單。社會組、自然組，兩個框。班上開始有人補習物理，有人開始背國學常識。你的筆尖停在表格上方。',
    tag: '升學｜抉擇',
    once: true,
    opts: [
      { label: '勾自然組，衝刺數理', hint: '往理工的路走', dice: { skill: 'math', dc: 13, pass: { math: 5, science: 4, confidence: 3 }, fail: { stress: 5, mood: -2 } } },
      { label: '勾社會組，深耕人文', hint: '往文組的路走', dice: { skill: 'language', dc: 13, pass: { language: 5, arts: 3, confidence: 3 }, fail: { stress: 5, mood: -2 } } },
      { label: '問導師的建議', hint: '聽聽過來人', chars: { teacher: { rel: 5, met: true } }, effects: { leadership: 3, confidence: 3, curiosity: 3 } },
      { label: '跟著好友填同一組', hint: '有人陪你就不怕', chars: { bestie: { rel: 5, met: true } }, effects: { social: 5, mood: 4, stress: -3 } }
    ]
  },
  {
    id: 'life_youth_015',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 17,
    title: '星期六下午的補習班',
    text: '星期六下午，補習班冷氣開得很強。老師在黑板上寫滿公式，台下有人打哈欠。隔壁桌的高三學長又睡著了，橡皮擦滾到你的腳邊。',
    tag: '升學｜壓力',
    once: true,
    opts: [
      { label: '把橡皮擦撿起來放回他桌上', hint: '一個小小的善意', effects: { social: 3, mood: 3 } },
      { label: '專心抄下每一行筆記', hint: '時間換分數', effects: { math: 4, science: 3, stress: 2 } },
      { label: '趁下課問老師問題', hint: '把不懂的地方補起來', dice: { skill: 'math', dc: 12, pass: { math: 5, confidence: 4 }, fail: { stress: 3, mood: -1 } }, chars: { teacher: { rel: 4, met: true } } },
      { label: '偷看手機等下課', hint: '撐過兩小時', effects: { stress: 2, mood: 2, math: -1 } }
    ]
  },
  {
    id: 'life_youth_016',
    act: 'youth',
    stage: 'teen',
    minAge: 17, maxAge: 18,
    title: '圖書館十點的關燈鈴',
    text: '指考倒數，圖書館十點關燈。管理員搖著鈴，你收拾講義，同桌的好友還趴著睡。窗外路燈亮著，常坐你對面的那個人也站了起來。',
    tag: '升學｜初戀',
    once: true,
    opts: [
      { label: '叫醒好友，一起走回家', hint: '夜路上的同伴', chars: { bestie: { rel: 5, met: true } }, effects: { social: 4, mood: 4, stress: -3 } },
      { label: '留在走廊再背一輪單字', hint: '多撐一下', dice: { skill: 'language', dc: 13, pass: { language: 5, confidence: 3, stress: -2 }, fail: { stress: 5, health: -2 } } },
      { label: '順路買宵夜犒賞自己', hint: '小小的獎勵', effects: { money: -200, mood: 5, health: -2 } },
      { label: '鼓起勇氣，跟對面那個人說話', hint: '這幾個月第一次聊', chars: { crush: { rel: 6, met: true } }, effects: { social: 4, mood: 6, confidence: 3 } }
    ]
  },
  {
    id: 'life_youth_017',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 18,
    title: '紅榜上的名字',
    text: '月考紅榜貼出來，你的名字爬上第三名。你最好的朋友這次掉到二十名之後，他的笑看起來有點僵。體育課分組，他故意沒叫你的名字。',
    tag: '友誼｜成長',
    once: true,
    opts: [
      { label: '主動找他談談', hint: '把話說開', dice: { skill: 'leadership', dc: 13, pass: { social: 7, mood: 4 }, fail: { social: -3, mood: -3 } }, chars: { bestie: { rel: 8, met: true } } },
      { label: '假裝沒看見，等他先開口', hint: '給彼此空間', effects: { social: -2, mood: -2 } },
      { label: '把筆記借他抄', hint: '用行動表示在乎', chars: { bestie: { rel: 5, met: true } }, effects: { social: 5, mood: 3, confidence: 2 } },
      { label: '開始跟別群人走在一起', hint: '另起爐灶', effects: { social: 3, independence: 3, mood: -2 } }
    ]
  },
  {
    id: 'life_youth_018',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 16,
    title: '籃球場旁的水龍頭',
    text: '體育課下課，你在水龍頭前沖臉。旁邊那個人遞來一包衛生紙，說「你用這個」。你抬頭，陽光在他身後，你忽然覺得自己的心跳聲好大。',
    tag: '初戀',
    once: true,
    opts: [
      { label: '低聲說謝謝，記住他的名字', hint: '有些悸動開始了', chars: { crush: { rel: 6, met: true } }, effects: { mood: 5, confidence: 2, curiosity: 3 } },
      { label: '開玩笑說「我要兩包」', hint: '用幽默掩飾慌張', chars: { crush: { rel: 4, met: true } }, effects: { mood: 4, social: 3 } },
      { label: '把衛生紙還回去說不用', hint: '慌亂地拒絕', effects: { mood: 2, stress: 2, confidence: -1 } },
      { label: '把這件事寫進日記', hint: '青春的第一頁', effects: { arts: 2, language: 2, mood: 4 } }
    ]
  },
  {
    id: 'life_youth_019',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 17,
    title: '借走的橡皮擦',
    text: '月考那天，他向你借橡皮擦。你遞過去，他沒有馬上還，整堂課都在轉。放學後他把橡皮擦塞回你手心，多了一張小紙條：「放學一起走吧？」',
    tag: '初戀',
    once: true,
    opts: [
      { label: '回紙條：「好啊。」', hint: '讓曖昧往前走', chars: { crush: { rel: 8, met: true } }, effects: { mood: 7, social: 5, confidence: 3 } },
      { label: '沒有回，只是隔天在校門口等他', hint: '讓時間回答', chars: { crush: { rel: 4, met: true } }, effects: { mood: 4, curiosity: 4 } },
      { label: '跟好友商量該怎麼辦', hint: '三個臭皮匠', chars: { bestie: { rel: 4, met: true } }, effects: { social: 4, mood: 4 } },
      { label: '把紙條收進鉛筆盒，當作沒看到', hint: '害怕改變現狀', effects: { stress: 3, mood: 2, confidence: -2 } }
    ]
  },
  {
    id: 'life_youth_020',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 17,
    title: '放學後的天台上',
    text: '放學後的天台，風把校服吹得鼓鼓的。他把手插在口袋裡，看向遠方的捷運，聲音有點抖：「我有話跟你說。」風忽然停了。',
    tag: '初戀',
    once: true,
    cond: (S) => !!(S.chars && S.chars.crush && S.chars.crush.met),
    opts: [
      { label: '先開口：「我喜歡你。」', hint: '把心意說出口', dice: { skill: 'leadership', dc: 13, pass: { confidence: 8, mood: 8, stress: -4, thread: { type: 'revisit', atAge: 23, sceneId: 'life_thread_crush_reunion' } }, fail: { mood: -5, confidence: -4, stress: 4, thread: { type: 'reconcile', atAge: 26, sceneId: 'life_thread_crush_reunion' } } }, chars: { crush: { rel: 10, met: true } } },
      { label: '等他先說，再回答', hint: '把節奏留給對方', chars: { crush: { rel: 6, met: true } }, effects: { mood: 6, confidence: 3 } },
      { label: '笑了：「我等你這句話很久了。」', hint: '原來你們都想著同一件事', chars: { crush: { rel: 9, met: true } }, effects: { mood: 9, social: 6, confidence: 4 }, thread: { type: 'revisit', atAge: 23, sceneId: 'life_thread_crush_reunion' } },
      { label: '藉口說「我要去補習」逃跑', hint: '害怕太好的事情', warn: true, effects: { stress: 5, mood: -2, confidence: -3 }, thread: { type: 'reconcile', atAge: 26, sceneId: 'life_thread_crush_reunion' } }
    ]
  },
  {
    id: 'life_youth_021',
    act: 'youth',
    stage: 'teen',
    minAge: 17, maxAge: 18,
    title: '畢業紀念冊的最後一頁',
    text: '畢業紀念冊傳到你手上，他請你寫「前程似錦」。你寫完遞回去，他翻到最後一頁，空白。窗外的鳳凰花開得火紅，你們再也沒有單獨說過話。',
    tag: '初戀｜離別',
    once: true,
    cond: (S) => !!(S.chars && S.chars.crush && S.chars.crush.met),
    opts: [
      { label: '把最後一頁寫滿一整頁', hint: '把沒說的話寫完', chars: { crush: { rel: 6, met: true } }, effects: { mood: 5, language: 4, confidence: 3 } },
      { label: '只寫四個字：前程似錦', hint: '讓遺憾停在這裡', effects: { mood: -2, stress: 2, confidence: 2 } },
      { label: '約他畢業後喝一杯珍奶', hint: '給青春留一個尾巴', chars: { crush: { rel: 7, met: true } }, effects: { social: 5, mood: 5 }, thread: { type: 'revisit', atAge: 24, sceneId: 'life_thread_crush_reunion' } },
      { label: '看著他走遠，沒有說話', hint: '把這頁留白', effects: { mood: -3, stress: 3 }, thread: { type: 'reconcile', atAge: 28, sceneId: 'life_thread_crush_reunion' } }
    ]
  },
  {
    id: 'life_youth_022',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 17,
    title: '成發前夜的頂樓練習',
    text: '社團成果發表會前一晚，你們在頂樓排練。吉他手按錯和弦，又重來。有人把手機手電筒當成舞台燈，照在你身上。明天，台下會有三百個人。',
    tag: '社團｜熱血',
    once: true,
    opts: [
      { label: '扛下獨奏的部分', hint: '把壓力變成掌聲', dice: { skill: 'arts', dc: 13, pass: { arts: 7, confidence: 7, mood: 5, leadership: 3 }, fail: { stress: 6, confidence: -3 } } },
      { label: '負責場控與器材', hint: '讓別人發光', effects: { leadership: 5, tech: 3, social: 4 } },
      { label: '拉所有人排好謝幕隊形', hint: '當那個黏合大家的人', dice: { skill: 'leadership', dc: 12, pass: { leadership: 7, social: 6, mood: 5 }, fail: { stress: 4, social: -2 } } },
      { label: '早早回家睡覺，明天再看', hint: '佛系參加', effects: { mood: 3, stress: -3, arts: 1 } }
    ]
  },
  {
    id: 'life_youth_023',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 17,
    title: '作文簿上的紅筆評語',
    text: '你交了一篇寫祖母的作文。隔週，導師把你留下，指著最後一段說：「這句寫得真好。」他沉默了一下：「要不要試試投稿校刊？」',
    tag: '師長｜成長',
    once: true,
    opts: [
      { label: '點頭接下這個機會', hint: '被看見的瞬間', chars: { teacher: { rel: 8, met: true } }, effects: { language: 6, confidence: 6, mood: 5 } },
      { label: '說「沒有啦，隨手寫的」', hint: '謙虛到退縮', effects: { confidence: -3, language: 2, mood: 2 } },
      { label: '問他能不能指導我', hint: '主動拜師', chars: { teacher: { rel: 7, met: true } }, effects: { language: 5, leadership: 3, confidence: 4 } },
      { label: '回家再讀一遍自己的作文', hint: '重新認識自己', effects: { language: 4, confidence: 4, curiosity: 3 } }
    ]
  },
  {
    id: 'life_youth_024',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 18,
    title: '教官室走廊的迴響',
    text: '教官室外的走廊長得沒有盡頭。有人檢舉你上課傳紙條「作弊」，其實那是你跟同桌討論題目。教官隔著辦公桌看你，語氣很平：「怎麼回事？」',
    tag: '師長｜誤會',
    once: true,
    opts: [
      { label: '把事情一五一十講清楚', hint: '用事實說話', dice: { skill: 'leadership', dc: 14, pass: { confidence: 7, social: 5, leadership: 4, stress: -3 }, fail: { stress: 7, mood: -4, confidence: -3 } } },
      { label: '沉默不語，低著頭', hint: '百口莫辯', effects: { stress: 5, mood: -4, confidence: -3 } },
      { label: '把紙條和課本都拿出來對質', hint: '讓證據說話', dice: { skill: 'language', dc: 12, pass: { confidence: 6, mood: 3, stress: -4 }, fail: { stress: 5 } } },
      { label: '事後寫信向導師解釋', hint: '用文字洗清誤會', chars: { teacher: { rel: 6, met: true } }, effects: { language: 4, confidence: 4, mood: 3 } }
    ]
  },
  {
    id: 'life_youth_025',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 18,
    title: '客廳裡摔破的茶杯',
    text: '深夜，客廳傳來茶杯摔破的聲音。爸爸吼著「每個月水電帳單誰在付」，媽媽低聲回了一句，門關上了。你站在樓梯口，手裡還握著要裝開水的杯子。',
    tag: '家庭｜風暴',
    once: true,
    opts: [
      { label: '走下樓，給媽媽一個擁抱', hint: '當她的靠山', chars: { mom: { rel: 8, met: true } }, effects: { family: 8, mood: 3, confidence: 4 } },
      { label: '跟爸爸談談經濟的事', hint: '幫他分擔一些', chars: { dad: { rel: 8, met: true } }, effects: { family: 7, independence: 4, mood: 3 } },
      { label: '默默回房，把門帶上', hint: '大人的事讓大人處理', effects: { stress: 5, family: -3, mood: -3 } },
      { label: '說「你們別吵了」', hint: '站出來打斷戰爭', warn: true, dice: { skill: 'leadership', dc: 14, pass: { family: 7, confidence: 5, independence: 3 }, fail: { family: -4, stress: 6 } }, chars: { mom: { rel: 3, met: true }, dad: { rel: 3, met: true } }, thread: { type: 'reconcile', atAge: 30, sceneId: 'life_thread_family_reconcile' } }
    ]
  },
  {
    id: 'life_youth_026',
    act: 'youth',
    stage: 'teen',
    minAge: 16, maxAge: 18,
    title: '房間牆上被撕下的海報',
    text: '你貼了一張搖滾樂團的海報，被收進抽屜。也許是媽媽收的，也許是你自己收的。你關上燈，坐在黑暗裡問自己：我到底想成為什麼樣的人？',
    tag: '自我｜成長',
    once: true,
    opts: [
      { label: '重新把海報貼回去', hint: '承認自己喜歡什麼', effects: { confidence: 6, independence: 5, mood: 3 } },
      { label: '去書店買一本關於夢想的書', hint: '在別人的路上找線索', effects: { curiosity: 5, language: 3, mood: 3 } },
      { label: '跟好友徹夜長談', hint: '一起找答案', chars: { bestie: { rel: 5, met: true } }, effects: { social: 5, mood: 4, confidence: 3 } },
      { label: '寫一封給十年後的自己', hint: '把問題留給時間', effects: { language: 5, confidence: 4, curiosity: 3 } }
    ]
  },
  {
    id: 'life_youth_027',
    act: 'youth',
    stage: 'teen',
    minAge: 18, maxAge: 18,
    title: '指考倒數第五十天的凌晨',
    text: '指考倒數第五十天，你凌晨一點半從書桌抬頭，檯燈照亮桌上的鉛筆屑。桌上那張附中的照片被你貼了很久，邊角都捲了。手機震了一下，是媽媽傳的：「餓嗎？」',
    tag: '升學｜壓力',
    once: true,
    opts: [
      { label: '回：「不餓，快念完了。」', hint: '別讓家人擔心', chars: { mom: { rel: 4, met: true } }, effects: { family: 4, stress: 2, mood: 3 } },
      { label: '走進廚房，幫她煮一碗麵', hint: '照顧自己也照顧她', chars: { mom: { rel: 7, met: true } }, effects: { family: 7, health: 3, mood: 5, stress: -3 } },
      { label: '關掉手機，繼續念', hint: '把時間留給書本', dice: { skill: 'math', dc: 13, pass: { math: 5, science: 4, confidence: 3 }, fail: { stress: 6, health: -3 } } },
      { label: '放下筆，去陽台吹風', hint: '讓腦子空一下', effects: { stress: -5, mood: 4, curiosity: 2 } }
    ]
  },
  {
    id: 'life_youth_028',
    act: 'youth',
    stage: 'teen',
    minAge: 18, maxAge: 18,
    title: '鳳凰花落下的畢業歌',
    text: '畢業典禮的操場，鳳凰花落了一地。校長念著名字，你走上台，看見台下媽媽眼眶紅紅的。禮堂外，社團的朋友在走廊等你最後一次合照。',
    tag: '成長｜離別',
    once: true,
    opts: [
      { label: '把學士帽拋向天空', hint: '好好跟青春道別', effects: { mood: 6, confidence: 5, independence: 4 } },
      { label: '跟媽媽合照，說聲謝謝', hint: '對家人說出口', chars: { mom: { rel: 6, met: true } }, effects: { family: 7, mood: 6 } },
      { label: '找到暗戀的人，拍一張合照', hint: '把遺憾留在照片外', chars: { crush: { rel: 5, met: true } }, effects: { mood: 5, social: 4 } },
      { label: '坐在座位上，把歌聽完', hint: '讓結尾慢慢來', effects: { curiosity: 3, mood: 4, confidence: 2 } }
    ]
  },
  {
    id: 'life_youth_029',
    act: 'youth',
    stage: 'teen',
    minAge: 15, maxAge: 17,
    title: '翻牆出去的那個下午',
    text: '星期三下午，訓育組長請假。隔壁班的同學朝你眨眼，比了一個翻牆的手勢。圍牆外是便利商店和漫畫店，圍牆內是還沒背完的英文單字。',
    tag: '叛逆｜獨立',
    once: true,
    opts: [
      { label: '翻過去，痛快一下午', hint: '叛逆的滋味', warn: true, dice: { skill: 'sport', dc: 12, pass: { independence: 6, mood: 6, stress: -4, social: 3 }, fail: { stress: 6, mood: -3, confidence: -3 } } },
      { label: '搖頭拒絕，回去背單字', hint: '忍住誘惑', effects: { language: 3, confidence: 3, stress: 2 } },
      { label: '翻過去，但提前回來打掃', hint: '玩也要負責', dice: { skill: 'sport', dc: 11, pass: { independence: 5, mood: 5, social: 4 }, fail: { stress: 4 } }, chars: { bestie: { rel: 3, met: true } } },
      { label: '勸他別翻，一起去打球', hint: '把精力用在正途', chars: { bestie: { rel: 4, met: true } }, effects: { sport: 4, social: 4, mood: 4, leadership: 3 } }
    ]
  },
  {
    id: 'life_youth_030',
    act: 'youth',
    stage: 'teen',
    minAge: 18, maxAge: 18,
    title: '十八歲生日蛋糕上的蠟燭',
    text: '十八歲生日，媽媽端出蛋糕，蠟燭是歪的。她說「吹蠟燭之前要先許願」。你閉上眼睛，聽見客廳的時鐘滴答走過。你忽然明白，明天開始，你要為自己的選擇負責。',
    tag: '成長｜成年',
    once: true,
    opts: [
      { label: '許願「考上想要的學校」', hint: '把未來寫進願望', effects: { confidence: 5, curiosity: 4, mood: 5 } },
      { label: '許願「家人平安健康」', hint: '把溫柔留給家人', chars: { mom: { rel: 5, met: true } }, effects: { family: 6, mood: 6, health: 3 } },
      { label: '沒有許願，把蠟燭一口吹熄', hint: '未來要靠自己闖', effects: { independence: 6, confidence: 5, stress: 2 } },
      { label: '跟好友在樓下放仙女棒', hint: '用光結束青春', chars: { bestie: { rel: 6, met: true } }, effects: { social: 6, mood: 7, curiosity: 3 } }
    ]
  }
];

export const YOUTH_MILESTONES = [
  {
    id: 'm_high',
    age: 15,
    title: '高中會考',
    text: '國中三年，一戰定高下。會考成績單貼在家裡冰箱上，爸媽都圍了過來。下一個路口，是高中、高職，還是更遠的地方。',
    kind: 'choice',
    opts: [
      { label: '挑戰頂尖高中：師大附中', hint: '會考黑馬，擠進第一志願', need: { stat: 'math', min: 60 }, setSchool: { name: '國立臺灣師範大學附屬高級中學', level: 'high' }, effects: { confidence: 5, mood: 4, stress: -3 }, chars: { teacher: { rel: 5, met: true } } },
      { label: '念高職：大安高工', hint: '學一技之長，走科技的路', need: { stat: 'tech', min: 40 }, setSchool: { name: '臺北市立大安高級工業職業學校', level: 'high' }, effects: { tech: 4, independence: 3, confidence: 3 }, chars: { teacher: { rel: 3, met: true } } },
      { label: '念高職：華岡藝校', hint: '把熱情變成專業', need: { stat: 'arts', min: 40 }, setSchool: { name: '私立華岡藝術學校', level: 'high' }, effects: { arts: 4, independence: 3, confidence: 3 }, chars: { teacher: { rel: 3, met: true } } },
      { label: '去附近的社區高中', hint: '安穩念完高中三年', setSchool: { name: '臺北市立成淵高級中學', level: 'high' }, effects: { confidence: 3, stress: -3 }, chars: { teacher: { rel: 3, met: true } } }
    ]
  },
  {
    id: 'm_university',
    age: 18,
    title: '大學指考',
    text: '指考成績出爐那晚，查榜的網頁轉了三圈才載入。你鬆開滑鼠，數字停在半空。接下來的四年，你要去哪一個城市、念哪一個科系？',
    kind: 'choice',
    opts: [
      { label: '臺大醫科：懸壺濟世', hint: '需要頂尖的自然成績', need: { stat: 'science', min: 75 }, setSchool: { name: '國立臺灣大學', level: 'university' }, setMajor: '醫學系', effects: { science: 6, confidence: 5, stress: 5 }, chars: { teacher: { rel: 5, met: true } } },
      { label: '成大物理：探究世界底層', hint: '數理是入場券', need: { stat: 'math', min: 60 }, setSchool: { name: '國立成功大學', level: 'university' }, setMajor: '物理學系', effects: { math: 5, science: 5, confidence: 4 }, chars: { teacher: { rel: 4, met: true } } },
      { label: '臺大資工：寫出未來', hint: '數理與邏輯的雙重考驗', need: { stat: 'math', min: 70 }, setSchool: { name: '國立臺灣大學', level: 'university' }, setMajor: '資訊工程', effects: { math: 5, tech: 6, confidence: 5 }, chars: { teacher: { rel: 5, met: true } } },
      { label: '政大中文：深耕文字', hint: '語文能力是入場券', need: { stat: 'language', min: 60 }, setSchool: { name: '國立政治大學', level: 'university' }, setMajor: '中國文學', effects: { language: 6, arts: 3, confidence: 4 }, chars: { teacher: { rel: 5, met: true } } },
      { label: '政大企管：布局商場', hint: '數理與人際並重', need: { stat: 'math', min: 50 }, setSchool: { name: '國立政治大學', level: 'university' }, setMajor: '企業管理', effects: { math: 4, leadership: 5, social: 4 }, chars: { teacher: { rel: 4, met: true } } },
      { label: '臺藝大視傳：揮灑創作', hint: '讓作品說話', need: { stat: 'arts', min: 60 }, setSchool: { name: '國立臺灣藝術大學', level: 'university' }, setMajor: '視覺傳達設計', effects: { arts: 7, confidence: 5, mood: 5 }, chars: { teacher: { rel: 4, met: true } } },
      { label: '高職畢業，進工廠學技術', hint: '有一技之長，早點經濟獨立', need: { stat: 'tech', min: 50 }, setJob: { id: 'operator', title: '作業員', salary: 35000, tier: '基層' }, effects: { money: 5000, independence: 5, stress: 2 }, chars: { mom: { rel: 3, met: true } } },
      { label: '高中畢業，先出社會工作', hint: '早一步踏入社會', setJob: { id: 'waiter', title: '服務生', salary: 30000, tier: '基層' }, effects: { money: 3000, independence: 4, stress: 3 }, chars: { mom: { rel: 3, met: true } } }
    ]
  }
];
