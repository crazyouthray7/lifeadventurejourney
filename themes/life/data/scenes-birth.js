export const SCENES = [
  {
    id: 'life_birth_001',
    act: 'birth',
    stage: 'birth',
    minAge: 0,
    maxAge: 0,
    title: '台北，馬偕醫院的雨聲',
    text: '產房的空調嗡嗡作響，窗外的雨打在不鏽鋼窗框上，台北的夜濕得能擰出水。護理師托著你的後頸，一道刺目的光劈開水氣——你第一次睜眼，看見一張哭著笑的臉，和走廊盡頭一個壓低聲音、反覆確認數字的側影。你哭出第一聲，雨聲忽然都遠了。',
    tag: '家庭｜出生',
    weight: 1,
    once: true,
    cond: (S) => S.birth.city === 'taipei',
    flags: null,
    opts: [
      {
        label: '把小小的手指，勾住媽媽的食指',
        hint: '她的掌心被雨夜的風吹得發涼',
        main: true,
        effects: { family: 4, mood: 3 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '循著聲音，往爸爸的方向轉頭',
        hint: '走廊那頭，有人正低聲數著什麼',
        effects: { family: 3, curiosity: 3 },
        chars: { dad: { rel: 2, met: true } }
      },
      {
        label: '閉上眼，讓這個世界安靜一下',
        hint: '雨聲、燈光、說話聲，都太擠了',
        effects: { mood: 2, health: 2, stress: -2 }
      },
      {
        label: '聽媽媽哼完那首不成調的搖籃曲',
        hint: '這首歌的唱法，每個家都不一樣',
        effects: { family: 2, mood: 2 },
        f: (S) => {
          if (S.birth.family === 'poor') {
            S.stats.family += 4;
            S.stats.mood += 1;
          } else if (S.birth.family === 'middle') {
            S.stats.family += 2;
            S.stats.mood += 2;
          } else {
            S.stats.mood += 3;
          }
        }
      }
    ]
  },
  {
    id: 'life_birth_002',
    act: 'birth',
    stage: 'birth',
    minAge: 0,
    maxAge: 0,
    title: '台中，入秋的第一道太陽',
    text: '台中榮總的產房外是乾爽的早晨，太陽把榕樹的影子曬進長廊。阿姨們擠在會客室，比手畫腳爭著要幫你想名字，護理師說你出生時哭聲又亮又響，整層樓都聽見了。你打了個哈欠，第一次看清天花板那排日光燈——十六根，亮晃晃的，像一條沒人排好的路。',
    tag: '家庭｜出生',
    weight: 1,
    once: true,
    cond: (S) => S.birth.city === 'taichung',
    flags: null,
    opts: [
      {
        label: '伸手，去抓那道照進來的太陽',
        hint: '手心張開，光就從指縫漏下來',
        effects: { curiosity: 4, mood: 2 },
        chars: { mom: { rel: 2, met: true } }
      },
      {
        label: '把頭往媽媽懷裡靠，聞她身上的味道',
        hint: '藥水味、汗味，還有一點點麻油香',
        effects: { family: 4, mood: 3 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '瞪著日光燈，數那十六根亮著的',
        hint: '有些事，你從很小就喜歡數清楚',
        effects: { independence: 3, curiosity: 2 }
      },
      {
        label: '被外頭誰的大嗓門逗得笑出聲',
        hint: '台中人的熱，從你出生那天就聽見了',
        effects: { social: 3, mood: 2 },
        f: (S) => {
          if (S.birth.family === 'poor') {
            S.stats.family += 3;
          } else if (S.birth.family === 'rich') {
            S.stats.family += 1;
            S.stats.social += 1;
          }
        }
      }
    ]
  },
  {
    id: 'life_birth_003',
    act: 'birth',
    stage: 'birth',
    minAge: 0,
    maxAge: 0,
    title: '高雄，港邊的風灌進產房',
    text: '港邊的風捲進婦產科二樓，空氣裡混著鐵鏽與海味。高雄的日頭毒辣，護理師拉上簾子的時候，你隱約聽見碼頭貨櫃起重機咿呀作響。媽媽的嘴唇乾裂，還是低頭親了親你的額頭。你握著拳，像是在跟這座炎熱的南方城市宣戰。',
    tag: '家庭｜出生',
    weight: 1,
    once: true,
    cond: (S) => S.birth.city === 'kaohsiung',
    flags: null,
    opts: [
      {
        label: '握住媽媽的手指，跟她一起數窗外幾台吊車',
        hint: '海風裡，她的嘆息混著汽笛聲',
        effects: { family: 4, curiosity: 2 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '被窗外那聲汽笛嚇得哭出來',
        hint: '這座城市的聲音，你得多認識一下',
        effects: { stress: 3, mood: 2 },
        chars: { dad: { rel: 2, met: true } }
      },
      {
        label: '安靜地瞪著天花板那台舊電扇',
        hint: '風一轉，簾子就微微鼓起',
        effects: { independence: 3, stress: -2 }
      },
      {
        label: '攥緊拳頭，為自己哭出最大聲',
        hint: '每個小孩都用哭聲，跟世界討第一個位置',
        effects: { health: 2, confidence: 2, stress: 2 },
        f: (S) => {
          if (S.birth.family === 'poor') {
            S.stats.family += 3;
          } else if (S.birth.family === 'rich') {
            S.stats.money += 0;
            S.stats.family += 1;
          }
        }
      }
    ]
  },
  {
    id: 'life_birth_004',
    act: 'birth',
    stage: 'birth',
    minAge: 0,
    maxAge: 0,
    title: '小鎮，診所後窗的稻田',
    text: '鎮上唯一的婦產科診所，後窗正對一片剛收割的稻田，秋蟬叫到傍晚才肯歇。隔壁房的阿姨端來一鍋麻油雞湯，香味一路飄進產房。護理師說，你出生的那晚，整條街的人都曉得你的名字——雖然還沒人定案。',
    tag: '家庭｜出生',
    weight: 1,
    once: true,
    cond: (S) => S.birth.city === 'other',
    flags: null,
    opts: [
      {
        label: '聞著麻油雞的香氣，安穩地睡過去',
        hint: '這碗湯的味道，會跟你的童年綁在一起',
        effects: { family: 4, mood: 3, health: 2 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '被外頭阿姨的嗓門吵醒，跟著哼了兩聲',
        hint: '小鎮的消息，都是用吆喝聲傳的',
        effects: { social: 3, mood: 2 },
        chars: { elder: { rel: 3, met: true } }
      },
      {
        label: '透過紗窗，一直看那片焦黃的田',
        hint: '稻梗的氣味，是你對這個世界的第一印象',
        effects: { curiosity: 4, independence: 2 }
      },
      {
        label: '啼哭到整層診所都亮燈來看你',
        hint: '你的哭聲，是那天小鎮最大的新聞',
        effects: { health: 2, confidence: 2 },
        f: (S) => {
          if (S.birth.family === 'poor') {
            S.stats.family += 4;
            S.stats.mood += 1;
          } else if (S.birth.family === 'middle') {
            S.stats.family += 2;
            S.stats.mood += 2;
          }
        }
      }
    ]
  },
  {
    id: 'life_birth_005',
    act: 'birth',
    stage: 'birth',
    minAge: 1,
    maxAge: 1,
    title: '月光下的第一次伸手',
    text: '家裡的燈全關了，只有月光從紗窗漏進來。你趴在小床上，對天花板那顆慢慢轉的風扇影子伸出手，指尖在光裡抓了又抓。媽媽靠在門邊看你，沒有進房——她好像忽然明白，有些東西，你從這一刻起要自己去找了。',
    tag: '成長｜天生',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '翻過身，趴著把那片影子看個夠',
        hint: '這個世界，你想先弄清楚再決定怕不怕',
        need: { stat: 'curiosity', min: 45 },
        effects: { curiosity: 4, science: 2 },
        f: (S) => {
          if (S.birth.talent === 'curious' || S.birth.talent === 'precocious') {
            S.stats.curiosity += 2;
          }
        }
      },
      {
        label: '打個哈欠，自己閉上眼睛睡回去',
        hint: '睡著的世界比較安定，你天生就懂',
        effects: { health: 3, stress: -2, mood: 2 },
        f: (S) => {
          if (S.birth.talent === 'calm' || S.birth.talent === 'robust') {
            S.stats.health += 2;
          }
        }
      },
      {
        label: '對著門口的黑影，發出含糊的叫聲',
        hint: '有些夜晚，你就是想被誰抱一抱',
        effects: { social: 3, family: 3, mood: 3 },
        chars: { mom: { rel: 3 } },
        f: (S) => {
          if (S.birth.talent === 'sensitive') {
            S.stats.social += 2;
          }
        }
      },
      {
        label: '伸手夠向月光，直到指尖發涼',
        hint: '夠不到的東西，你也想牢牢記住',
        effects: { independence: 3, confidence: 2 },
        f: (S) => {
          if (S.birth.talent === 'precocious') {
            S.stats.confidence += 2;
          }
        }
      }
    ]
  },
  {
    id: 'life_birth_006',
    act: 'birth',
    stage: 'birth',
    minAge: 0,
    maxAge: 0,
    title: '凌晨三點，你還在哭',
    text: '凌晨三點，十坪的舊公寓裡，你的哭聲響得整個樓梯間都在迴盪。媽媽披著外套把你抱起來，在客廳來回走，地板被她的腳步磨得發亮。樓上的人敲了兩下地板——媽媽愣住了，把你抱得更緊，哼歌的聲音壓得比氣音還低。',
    tag: '家庭｜出生',
    weight: 1,
    once: true,
    cond: (S) => S.birth.family === 'poor',
    flags: null,
    opts: [
      {
        label: '哭聲慢慢停了，在她肩上蹭了蹭',
        hint: '這一晚，你跟她就這樣互相撐了過去',
        main: true,
        effects: { family: 5, mood: 3 },
        chars: { mom: { rel: 3 } }
      },
      {
        label: '把頭埋進她懷裡，聞肥皂和汗的味道',
        hint: '隔著一件薄外套，你記住她整夜的心跳',
        effects: { family: 4, health: 2, stress: -2 }
      },
      {
        label: '瞪著天花板上那條漏光的縫',
        hint: '燈一亮一滅，像在跟你說話',
        effects: { curiosity: 4, independence: 2 }
      },
      {
        label: '用更大的哭聲，把樓上那兩下敲門頂回去',
        hint: '你很小，就很會護著自己的家',
        effects: { independence: 3, stress: 3, family: 2 }
      }
    ]
  },
  {
    id: 'life_birth_007',
    act: 'birth',
    stage: 'birth',
    minAge: 2,
    maxAge: 3,
    title: '第一跤，磕在磨石子地板上',
    text: '你扶著茶几站起來，搖搖晃晃走了三步，然後像棵被風吹倒的小樹栽下去，額頭磕在磨石子地板上，轟地一聲。媽媽從廚房跑出來，手上還沾著肥皂泡。你愣了三秒，才決定要不要哭——這三秒，後來決定了很多事。',
    tag: '成長｜第一次',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '張嘴就哭，哭到鄰居都跑來問',
        hint: '有人心疼，眼淚就特別有道理',
        effects: { mood: 4, family: 3, health: -1 },
        chars: { mom: { rel: 2 } }
      },
      {
        label: '憋著淚，自己翻個身再爬起來',
        hint: '地板很涼，但你沒讓它把你留住',
        need: { stat: 'independence', min: 30 },
        effects: { independence: 5, confidence: 3, stress: 2 }
      },
      {
        label: '扶著茶几，再站起來試一次',
        hint: '額頭還腫著，腳已經又直了',
        dice: {
          skill: 'sport',
          dc: 8,
          pass: { independence: 5, confidence: 4, sport: 2 },
          fail: { mood: -2, stress: 2 }
        }
      },
      {
        label: '坐在地上，研究那顆絆倒你的彈珠',
        hint: '明明是你先看到它的，怎麼變成它絆你',
        effects: { curiosity: 4, science: 2, mood: 2 }
      }
    ]
  },
  {
    id: 'life_birth_008',
    act: 'birth',
    stage: 'birth',
    minAge: 3,
    maxAge: 4,
    title: '公園沙坑，穿黃雨鞋的小女孩',
    text: '公園的沙坑邊，一個穿黃色雨鞋的小女孩在你旁邊蹲下，二話不說拿走你桶裡的紅色塑膠鏟子。你愣住，她也愣住。然後她把鏟子遞回來，又往你桶裡補了一小鏟乾沙，像是賠禮，又像是要跟你分一塊地盤。',
    tag: '人際｜第一次',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '把鏟子推過去：我們一起挖',
        hint: '有些友誼，是從分一把鏟子開始的',
        main: true,
        effects: { social: 6, confidence: 2 },
        chars: { friend: { rel: 4, met: true } }
      },
      {
        label: '伸手把鏟子搶回來',
        hint: '這是我的，誰都別想動',
        effects: { independence: 3, social: -2, confidence: 2 }
      },
      {
        label: '拿走她遞回的鏟子，一句話沒說',
        hint: '你不確定，這個陌生人值不值得一個笑',
        effects: { independence: 2, social: -3, stress: 1 }
      },
      {
        label: '往她桶裡也倒一鏟沙',
        hint: '禮尚往來，是你在沙坑學會的第一課',
        dice: {
          skill: 'social',
          dc: 8,
          pass: { social: 6, confidence: 2, mood: 3 },
          fail: { social: 2, mood: 1 }
        }
      }
    ]
  },
  {
    id: 'life_birth_009',
    act: 'birth',
    stage: 'birth',
    minAge: 4,
    maxAge: 5,
    title: '巷口的浪浪，叼著半顆飯糰',
    text: '傍晚，你在巷口看見一隻髒兮兮的虎斑狗，嘴裡叼著你剛才掉在地上的半顆飯糰，蹲在牆角看你。爸爸走過來，說流浪狗不能養。狗搖了兩下尾巴，又搖了兩下——像是在跟你商量。',
    tag: '成長｜陪伴',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '把剩下的飯糰掰一半，放在離牠三步的地方',
        hint: '有些善意，只能放在剛剛好的距離',
        effects: { social: 3, mood: 4 },
        chars: { friend: { rel: 2 } }
      },
      {
        label: '拉著爸爸的衣角：帶牠回家好不好',
        hint: '你要為一個小生命，跟全世界爭一次',
        need: { stat: 'confidence', min: 40 },
        effects: { family: 3, social: 3, confidence: 2 },
        chars: { dad: { rel: 2 } }
      },
      {
        label: '蹲下來，跟牠對視很久很久',
        hint: '你好像第一次讀懂，什麼叫「怕人」',
        effects: { curiosity: 4, social: 2, mood: 2 }
      },
      {
        label: '轉頭就走，假裝沒看見',
        hint: '那天晚上，你一直在想那半顆飯糰',
        effects: { independence: 2, social: -2, stress: 1 }
      }
    ]
  },
  {
    id: 'life_birth_010',
    act: 'birth',
    stage: 'birth',
    minAge: 5,
    maxAge: 6,
    title: '搬家貨車，後照鏡裡的家',
    text: '搬家貨車的引擎發動了，後照鏡裡，住了四年的老公寓一格一格退後。你貼著車窗，看見陽台上那盆被忘掉的薄荷，還有樓下早餐店阿姨舉到一半的手。媽媽說，新家有電梯。你忽然有點捨不得那四層樓梯。',
    tag: '家庭｜變動',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '衝下車，把那盆薄荷抱回來自己養',
        hint: '有些東西，你決定要自己顧著',
        main: true,
        effects: { independence: 3, mood: 3, curiosity: 2 }
      },
      {
        label: '探出窗跟早餐店阿姨揮手：長大會回來吃',
        hint: '離開前，把話說滿，是她教你的',
        need: { stat: 'social', min: 45 },
        effects: { social: 4, family: 2, confidence: 2 },
        chars: { elder: { rel: 3 } }
      },
      {
        label: '問爸爸：為什麼我們一定要搬家',
        hint: '大人忙著打包，沒人好好回答過你',
        effects: { family: 3, curiosity: 4, independence: 1 }
      },
      {
        label: '把阿嬤縫的平安符塞進書包夾層',
        hint: '她說，到了新家再打開看',
        effects: { family: 3, mood: 2, stress: -2 },
        chars: { elder: { rel: 4, met: true } }
      }
    ]
  },
  {
    id: 'life_birth_011',
    act: 'birth',
    stage: 'birth',
    minAge: 4,
    maxAge: 6,
    title: '晚餐桌上，摔門的聲音',
    text: '晚餐桌上，媽媽的湯匙重重擱在碗邊。爸爸壓低聲音說了一句什麼，她站起來，椅子刮過磨石子地板。客廳的燈關掉一盞，餐桌一下就暗了一半。你夾起一根青菜，慢慢嚼，假裝沒發現碗裡多了一雙沒動過的筷子。',
    tag: '家庭｜裂痕',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '把碗裡的青菜挾到爸爸碗裡，什麼也不說',
        hint: '兩歲那年你就在想，吃飯時吵架最傷胃',
        effects: { family: 4, mood: 2, stress: 2 },
        chars: { dad: { rel: 2 } }
      },
      {
        label: '放下碗筷，躲進房間關上門',
        hint: '聽不見，好像就沒發生',
        effects: { independence: 3, stress: 3, family: -2, mood: -2 }
      },
      {
        label: '走過去拉媽媽的衣角，問她還要不要喝湯',
        hint: '湯還熱著，你不想看它涼掉',
        need: { stat: 'confidence', min: 35 },
        effects: { family: 5, social: 2, stress: 1, mood: -1 }
      },
      {
        label: '假裝肚子痛，把他們都叫到你床邊',
        hint: '你發現，自己一哭，他們就會停戰',
        warn: true,
        effects: { family: 2, mood: -1, stress: 2, health: -1 }
      }
    ]
  },
  {
    id: 'life_birth_012',
    act: 'birth',
    stage: 'birth',
    minAge: 4,
    maxAge: 6,
    title: '急診室的點滴，吊了一整夜',
    text: '你燒到三十九度七，嘴唇乾裂，被爸爸一路抱進急診室。護理師在你手背上找血管，針頭扎下去的時候你哭出聲。媽媽握住你的手，涼得跟點滴瓶裡的液體一樣。天亮時燒退了，她趴在你床沿睡著，白袍邊角還皺著。',
    tag: '健康｜考驗',
    weight: 1,
    once: true,
    cond: null,
    flags: null,
    opts: [
      {
        label: '把病床的被子分一半，蓋到她背上',
        hint: '她照顧你整夜，這次換你',
        main: true,
        effects: { family: 6, mood: 3, health: 2 },
        chars: { mom: { rel: 3 } }
      },
      {
        label: '醒著盯點滴，一滴一滴數到天亮',
        hint: '數著數著，你好像就不那麼怕了',
        effects: { independence: 4, curiosity: 2, stress: 3, health: 1 }
      },
      {
        label: '醒來就喊痛，要她寸步不離',
        hint: '有人心疼，疼好像就慢一點',
        effects: { family: 3, social: 1, confidence: -1, stress: 2 }
      },
      {
        label: '閉上眼，想像自己是醫生，把退燒藥水一滴滴送進身體',
        hint: '三十九度七的高燒裡，你想著要自己好起來',
        dice: {
          skill: 'health',
          dc: 9,
          pass: { health: 4, independence: 4, confidence: 3 },
          fail: { health: 2, stress: 3, mood: -2 }
        }
      }
    ]
  }
];

export const BIRTH_MILESTONES = [
  {
    id: 'm_birth',
    age: 0,
    title: '誕生',
    text: '你在一聲啼哭裡報到，這座島的第一口空氣灌進肺裡。還沒想好要怎麼活，就有人開始替你決定接下來的事了——出生在哪裡，家裡過什麼樣的日子，會決定你前幾年看見什麼、聽到什麼、害怕什麼。',
    kind: 'choice',
    opts: [
      {
        label: '台北・老公寓的三合板隔間',
        hint: '爸爸在工地，媽媽在早餐店；夜裡捷運高架的轟隆聲從隔間縫鑽進來',
        effects: { money: -8000, family: 40, mood: 52, health: 62 },
        f: (S) => {
          S.birth.city = 'taipei';
          S.birth.family = 'poor';
          S.birth.parentsJob = '工地師傅與早餐店員工';
        }
      },
      {
        label: '台北・天母的巷弄與晚宴',
        hint: '爸爸是醫師，媽媽在事務所；你的第一個家，有一整間沒人睡的客房',
        effects: { money: 400000, family: 52, health: 72, mood: 58 },
        f: (S) => {
          S.birth.city = 'taipei';
          S.birth.family = 'rich';
          S.birth.parentsJob = '醫師與會計師';
        }
      },
      {
        label: '台中・舊城區的透天厝',
        hint: '爸爸是國中老師，媽媽在傳統市場賣菜；樓下攤位收攤的唰啦聲，是你的白噪音',
        effects: { money: 60000, family: 62, mood: 58, health: 68 },
        f: (S) => {
          S.birth.city = 'taichung';
          S.birth.family = 'middle';
          S.birth.parentsJob = '國中教師與市場攤販';
        }
      },
      {
        label: '高雄・港邊的公寓五樓',
        hint: '爸爸在貨櫃場輪班，媽媽在加工出口區；晚上海風把雨棚吹得啪啪響',
        effects: { money: -5000, family: 44, mood: 52, health: 64 },
        f: (S) => {
          S.birth.city = 'kaohsiung';
          S.birth.family = 'poor';
          S.birth.parentsJob = '貨櫃場作業員與加工區作業員';
        }
      },
      {
        label: '高雄・美術館旁的新大樓',
        hint: '爸爸經營貿易公司，媽媽是護理長；從陽台看得到整個港灣',
        effects: { money: 350000, family: 54, mood: 60, health: 70 },
        f: (S) => {
          S.birth.city = 'kaohsiung';
          S.birth.family = 'rich';
          S.birth.parentsJob = '貿易公司老闆與護理長';
        }
      },
      {
        label: '小鎮・婦產科診所與稻田',
        hint: '爸爸在鎮上模具廠，媽媽在國小代課；你的哭聲，是那天小鎮最大的新聞',
        effects: { money: 50000, family: 65, mood: 60, health: 66 },
        f: (S) => {
          S.birth.city = 'other';
          S.birth.family = 'middle';
          S.birth.parentsJob = '模具廠技師與國小代課教師';
        }
      }
    ]
  },
  {
    id: 'm_talent',
    age: 1,
    title: '天生特質',
    text: '一歲的某個午後，陽光斜斜照進客廳。你坐在竹製學步車裡，對著光裡浮動的灰塵伸出手，抓了又抓。那一刻，所有人都發現：這個小孩，好像哪裡不太一樣。',
    kind: 'choice',
    opts: [
      {
        label: '早慧・在咿呀聲裡抓著數字積木不放',
        hint: '字和數，對你來說像玩不完的玩具',
        effects: { language: 6, math: 6, curiosity: 4 },
        f: (S) => {
          S.birth.talent = 'precocious';
          S.birth.talentDesc = '對語言與數字格外敏銳，學什麼都比別人快一點';
        }
      },
      {
        label: '強健・學步車能推到阿嬤家的巷口',
        hint: '你的哭聲中氣十足，很少生病',
        effects: { health: 12, sport: 4 },
        f: (S) => {
          S.birth.talent = 'robust';
          S.birth.talentDesc = '體格結實，耐摔耐病，生命力旺盛';
        }
      },
      {
        label: '敏感・大人以為你在哭，其實你在感受',
        hint: '一句話、一個眼神，你都記得',
        effects: { mood: 5, social: 5, arts: 3 },
        f: (S) => {
          S.birth.talent = 'sensitive';
          S.birth.talentDesc = '對情緒與氛圍格外敏銳，共感力強，也容易受傷';
        }
      },
      {
        label: '沉穩・跌倒了先看看大家，再決定要不要哭',
        hint: '很少慌，很少怕，穩得像棵小樹',
        effects: { stress: -8, confidence: 4 },
        f: (S) => {
          S.birth.talent = 'calm';
          S.birth.talentDesc = '情緒穩定，抗壓性好，慌亂之中仍能自持';
        }
      },
      {
        label: '好奇・把媽媽的鍋蓋翻過來，研究為什麼是圓的',
        hint: '世界對你來說，是一間沒鎖門的玩具店',
        effects: { curiosity: 12, science: 4, tech: 2 },
        f: (S) => {
          S.birth.talent = 'curious';
          S.birth.talentDesc = '對萬事萬物充滿疑問，想到就動手去拆去試';
        }
      }
    ]
  },
  {
    id: 'm_preschool',
    age: 6,
    title: '入學前',
    text: '那年夏天結束前，媽媽把舊書包刷乾淨，縫上一塊新名牌布。開學日，你背著空蕩蕩的書包站在門口，裡面只裝著一個鉛筆盒和一顆捏得發熱的橡皮擦。學區的小學在兩條街外，鐘聲隔著屋頂傳過來。',
    kind: 'choice',
    opts: [
      {
        label: '把書包背好，回頭跟媽媽說：我自己走',
        hint: '放學記得在警衛室等她',
        main: true,
        setSchool: { name: '學區內的公立國小', level: 'elementary' },
        effects: { independence: 5, confidence: 4, family: 2 }
      },
      {
        label: '牽緊她的手，一路走到校門口才放開',
        hint: '新世界的第一天，需要一點勇氣存量',
        setSchool: { name: '學區內的公立國小', level: 'elementary' },
        effects: { family: 4, social: 3, mood: 3 }
      },
      {
        label: '在校門口停住，把書包裡的橡皮擦捏了又捏',
        hint: '那一刻，你第一次嘗到緊張的味道',
        setSchool: { name: '學區內的公立國小', level: 'elementary' },
        effects: { curiosity: 3, mood: 2, confidence: 1 }
      }
    ]
  }
];
