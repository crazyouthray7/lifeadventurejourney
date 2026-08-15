'use strict';

const ELEM_SCHOOLS = {
  taipei: '北方市立青禾國小',
  taichung: '中部市立光明國小',
  kaohsiung: '南方市立海灣國小',
  other: '山城國小'
};

const MID_STAR = {
  taipei: '北方市立中正國中',
  taichung: '中部市立居仁國中',
  kaohsiung: '南方市立五福國中',
  other: '縣立資優國中'
};

const MID_ARTS = {
  taipei: '北方市立仁愛國中',
  taichung: '中部市立文藝國中',
  kaohsiung: '南方市立前金國中',
  other: '縣立藝術國中'
};

const MID_NEAR = {
  taipei: '北方市立大安國中',
  taichung: '中部市立光明國中',
  kaohsiung: '南方市立大義國中',
  other: '鎮上的學區國中'
};

export const SCENES = [
  {
    id: 'life_childhood_001',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 8,
    title: '鳳凰木下的第一堂課',
    text: '九月第一個早晨，學校川堂掛著「歡迎新生」的紅布條，鳳凰木的影子爬滿走廊。你找到一年一班的教室，木桌椅還飄著新油漆味，名牌立在桌上，粉紅色的。鐘聲響起的瞬間，你緊張得手心冒汗。',
    tag: '校園｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '找個靠窗的位置坐下，安靜觀察班上每個人',
        hint: '先摸清環境，不急著出頭',
        effects: { curiosity: 3, social: 2, confidence: 1 }
      },
      {
        label: '鼓起勇氣，跟隔壁座位的同學自我介紹',
        hint: '可能會結巴，但總要踏出第一步',
        main: true,
        dice: {
          skill: 'language',
          dc: 8,
          pass: { social: 6, confidence: 5, mood: 4 },
          fail: { confidence: -3, stress: 3 }
        },
        chars: { friend: { rel: 4, met: true } }
      },
      {
        label: '乖乖坐好，等老師來安排',
        hint: '最安全，也最不引人注意',
        effects: { stress: -2, independence: 2, social: -1 }
      },
      {
        label: '紅著眼眶，抓著媽媽的衣角不放',
        hint: '想家想得不想放手',
        effects: { family: 4, confidence: -3, independence: -2, stress: -1 }
      }
    ]
  },
  {
    id: 'life_childhood_002',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 8,
    title: '福利社前的冬瓜茶',
    text: '下課鐘響，福利社的蒸籠冒著白煙，隔壁座那個綁著馬尾的同學分你半瓶冬瓜茶，說他的橡皮擦是奶奶做的，問你要不要一起畫課本邊角。走廊擠滿奔跑的腳步聲，你們坐在階梯上，交換了各自的秘密。',
    tag: '校園｜友誼',
    weight: 1.2,
    once: true,
    opts: [
      {
        label: '接下冬瓜茶，說「那我們是朋友了」',
        hint: '一句話，把陌生人變成朋友',
        main: true,
        effects: { social: 5, mood: 4, confidence: 2 },
        chars: { friend: { rel: 8, met: true } }
      },
      {
        label: '搖搖頭說你只喝溫水，低頭畫自己的課本',
        hint: '有點不好意思，還沒準備好',
        effects: { social: -1, independence: 3, arts: 2 },
        chars: { friend: { rel: 1, met: true } }
      },
      {
        label: '拉著他跑到操場去盪鞦韆',
        hint: '動作比說話快',
        effects: { sport: 2, social: 3, mood: 3 },
        chars: { friend: { rel: 6, met: true } }
      },
      {
        label: '追問他奶奶的事，一路聊到打鐘',
        hint: '你對別人的故事總是好奇',
        effects: { curiosity: 4, social: 3, language: 1 },
        chars: { friend: { rel: 5, met: true } }
      }
    ]
  },
  {
    id: 'life_childhood_003',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 9,
    title: '卡在七乘八的下午',
    text: '期中考前一晚，你蹲在餐桌邊背九九乘法表，媽媽在廚房洗碗，不時回頭看你有沒有偷懶。考卷發下來那天，天氣悶熱，電扇把考卷邊角吹得啪嗒響。你卡在七乘八，橡皮擦把格子越擦越黑。',
    tag: '課業｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把九九乘法表抄滿練習本，背到滾瓜爛熟',
        hint: '最笨也最踏實的方法',
        dice: {
          skill: 'math',
          dc: 9,
          pass: { math: 6, confidence: 4, stress: -2 },
          fail: { math: 2, stress: 4, mood: -2 }
        }
      },
      {
        label: '請媽媽用瓜子排成七排八行，一個一個數給你',
        hint: '有人陪，好像就沒那麼難',
        main: true,
        effects: { math: 4, family: 4, mood: 3 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '發考卷時緊張到手抖，看哪格就填哪格',
        hint: '賭一把運氣',
        effects: { stress: 5, mood: -3, confidence: -3, math: -1 }
      },
      {
        label: '把七乘八畫成七排八個點，自己數一遍',
        hint: '用圖像記，好像別人都沒想過',
        effects: { math: 5, arts: 2, curiosity: 3, confidence: 3 }
      }
    ]
  },
  {
    id: 'life_childhood_004',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 10,
    title: '拔河繩上的紅布條',
    text: '班際拔河賽，體育老師把全班分成兩隊，繩子中間的紅布條被磨得起了毛。你排在隊伍最後面，前面同學的球鞋在你腳邊揚起灰塵。哨聲一響，粗麻繩猛地勒進掌心，燙得發疼。',
    tag: '校園｜競賽',
    weight: 1,
    once: true,
    opts: [
      {
        label: '使出全身力氣往後拉，跟著大家喊口號',
        hint: '咬緊牙關，把身體壓低',
        dice: {
          skill: 'sport',
          dc: 9,
          pass: { sport: 5, confidence: 4, mood: 4, social: 2 },
          fail: { mood: -2, confidence: -2, stress: 2 }
        }
      },
      {
        label: '站在外圍負責喊加油、遞水',
        hint: '出不了力，就出嗓子',
        effects: { social: 4, leadership: 2, stress: -2 }
      },
      {
        label: '比賽結束，請大家喝福利社的冬瓜茶',
        hint: '把勝負化成一場開心的分享',
        main: true,
        effects: { social: 4, mood: 4, money: -120 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '賽後扶起跌坐在地的對手，遞上衛生紙',
        hint: '輸贏是一時的，人是長久的',
        effects: { social: 3, confidence: 3, family: 1 }
      }
    ]
  },
  {
    id: 'life_childhood_005',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 11,
    title: '樓梯間壓低的笑聲',
    text: '午休時間，你繞到後樓梯喝水，聽見轉角傳來的笑聲。幾個高年級的學長把張小胖的便當盒推倒在地，飯粒灑了一地。他蹲下去撿，肩膀一抖一抖，而走廊盡頭，訓導主任的皮鞋聲越來越近。',
    tag: '校園｜勇氣',
    weight: 1,
    once: true,
    opts: [
      {
        label: '衝出去大喊「老師來了！」，趁亂把人引開',
        hint: '聲音會抖，但總得有人開口',
        need: { stat: 'confidence', min: 45 },
        dice: {
          skill: 'language',
          dc: 10,
          pass: { confidence: 5, social: 4, mood: 4 },
          fail: { stress: 6, confidence: -4, mood: -3 }
        }
      },
      {
        label: '等他們走後，蹲下來幫他把飯粒一顆顆撿回便當盒',
        hint: '不聲張，但陪著他',
        main: true,
        effects: { social: 5, mood: 3, confidence: 2 },
        chars: { friend: { rel: 5, met: true } }
      },
      {
        label: '當作沒看見，低頭快步走回教室',
        hint: '你害怕自己變成下一個',
        warn: true,
        effects: { stress: 5, mood: -3, social: -2 }
      },
      {
        label: '下課後，把這件事悄悄告訴導師',
        hint: '告狀需要一點勇氣',
        need: { stat: 'confidence', min: 35 },
        effects: { confidence: 3, stress: 3 },
        chars: { teacher: { rel: 3, met: true } }
      }
    ]
  },
  {
    id: 'life_childhood_006',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 11,
    title: '沒有爸媽的第一個晚上',
    text: '夏令營在山上，帳篷外是此起彼落的蟬鳴和蛙叫。夜裡你裹著睡袋，聽見隔壁帳篷有人偷偷在哭。營火升起來時，教練教大家唱營火歌，火光照著一張張還沒睡醒的臉，你的喉嚨也跟著發緊。',
    tag: '戶外｜獨立',
    weight: 1,
    once: true,
    opts: [
      {
        label: '爬過去拍拍那個哭的人，說你也想家了',
        hint: '承認想家，其實不丟臉',
        main: true,
        effects: { social: 4, mood: 3 },
        chars: { friend: { rel: 5, met: true } }
      },
      {
        label: '跟著大家用力唱歌，把想念唱進歌裡',
        hint: '聲音越大，好像越不孤單',
        dice: {
          skill: 'arts',
          dc: 8,
          pass: { mood: 4, confidence: 4, stress: -3, social: 2 },
          fail: { mood: -1, confidence: -2, stress: 1 }
        }
      },
      {
        label: '翻出電話卡，跑去山下的公用電話打回家',
        hint: '聽媽媽的聲音，好像就安心了',
        effects: { family: 4, independence: -3, stress: -3, mood: 2 }
      },
      {
        label: '把想家的事寫進日記，決定自己撐過去',
        hint: '有些夜，只能自己吞',
        effects: { independence: 5, confidence: 3, curiosity: 2, mood: -2 }
      }
    ]
  },
  {
    id: 'life_childhood_007',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 11,
    title: '冰箱上的紅筆圈',
    text: '期中考成績單貼上冰箱那天，媽媽用紅筆把你的名次圈出來，說隔壁小宏這次又拿第一名。爸爸坐在客廳翻報紙，頭也沒抬，只「嗯」了一句。窗外蟬鳴很吵，你盯著那圈紅印，覺得它像個燒燙的印子。',
    tag: '家庭｜課業',
    weight: 1,
    once: true,
    opts: [
      {
        label: '告訴媽媽你已經很努力了，請她看看進步的分數',
        hint: '把委屈說出口，需要勇氣',
        main: true,
        dice: {
          skill: 'language',
          dc: 9,
          pass: { family: 5, confidence: 4, stress: -3, mood: 3 },
          fail: { family: -2, mood: -2, stress: 3 }
        },
        chars: { mom: { rel: 3 } }
      },
      {
        label: '關上房門，把成績單從冰箱上撕下來',
        hint: '悶著一口氣，總要發洩',
        warn: true,
        effects: { stress: -4, mood: -3, family: -4 },
        chars: { mom: { rel: -4 } }
      },
      {
        label: '下定決心，下次一定要考進前十',
        hint: '把壓力變成自己的動力',
        effects: { math: 4, stress: 4, confidence: 3 },
        chars: { mom: { rel: 2 } }
      },
      {
        label: '裝作沒聽見，抓起球鞋往外跑',
        hint: '至少下課十分鐘是自由的',
        effects: { sport: 2, stress: -2, family: -2, confidence: -1 },
        chars: { dad: { rel: -1, met: true } }
      }
    ]
  },
  {
    id: 'life_childhood_008',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 9,
    title: '鉛筆盒裡的一百塊',
    text: '這個月起，媽媽每週給你一百塊零用錢，你把鈔票摺得整整齊齊，塞進鉛筆盒夾層。福利社新進了草莓口味的橡皮擦，一支三十塊。你摸了摸鉛筆盒，又看了一眼教室後排那個裝滿五十元銅板的撲滿。',
    tag: '生活｜財物',
    weight: 1,
    once: true,
    opts: [
      {
        label: '忍住不買，把錢丟進撲滿',
        hint: '銅板落底的聲響，很悅耳',
        effects: { independence: 4, money: 100, stress: -1 }
      },
      {
        label: '買一支草莓橡皮擦，分給同桌一半',
        hint: '快樂用一半，就能換兩倍',
        effects: { mood: 4, money: -30, social: 2 },
        chars: { friend: { rel: 3 } }
      },
      {
        label: '拿去書局挑一本課外故事書',
        hint: '一百塊，買得到另一個世界',
        effects: { curiosity: 4, language: 3, money: -80 }
      },
      {
        label: '全部買成零食，跟大家一起吃',
        hint: '今天的開心，先花掉再說',
        effects: { mood: 3, social: 3, money: -100, health: -2 }
      }
    ]
  },
  {
    id: 'life_childhood_009',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 12,
    title: '紙箱裡的黃色絨毛',
    text: '放學路上，你在巷口紙箱裡發現一隻瑟瑟發抖的小黃狗，脖子上繫著紅色項圈，卻沒有名牌。天空開始飄雨，牠濕漉漉的眼睛看著你，嗚嗚地叫。你想起爸爸對毛髮過敏，媽媽最討厭家裡有味道。',
    tag: '生活｜善良',
    weight: 1,
    once: true,
    opts: [
      {
        label: '抱回家，跟爸媽爭取留下牠',
        hint: '需要說服兩個大人，還有一間會過敏的房子',
        main: true,
        need: { stat: 'language', min: 40 },
        dice: {
          skill: 'language',
          dc: 10,
          pass: { family: 5, confidence: 4, mood: 5, social: 2 },
          fail: { family: -2, mood: -3, stress: 3 }
        },
        chars: { mom: { rel: 2 }, dad: { rel: 2 } }
      },
      {
        label: '帶牠到騎樓躲雨，去超商買個小麵包餵牠',
        hint: '至少這個雨天，讓牠有個屋簷',
        effects: { mood: 4, social: 2, curiosity: 2, money: -15 }
      },
      {
        label: '記下動保專線，拜託大人幫忙通報',
        hint: '交給專業的人，是另一種負責任',
        effects: { independence: 3, social: 3, confidence: 2 }
      },
      {
        label: '告訴自己別多管閒事，快步走回家',
        hint: '雨越下越大，你不敢回頭看',
        warn: true,
        effects: { stress: 3, mood: -3 }
      }
    ]
  },
  {
    id: 'life_childhood_010',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 10,
    title: '游泳池的氯味',
    text: '暑假第一天，媽媽把泳帽和蛙鏡塞進你的書包，說學會游泳才能保護自己。泳池邊的氯味衝進鼻子，教練吹哨催著大家下水。你扶著池邊的磁磚，水淹到胸口，冰冰涼涼的，後面的同學已經撲通一聲跳了下去。',
    tag: '才藝｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '閉上眼深吸一口氣，照著教練的節奏踢水',
        hint: '嗆幾口水，是學會的代價',
        dice: {
          skill: 'sport',
          dc: 9,
          pass: { sport: 6, confidence: 4, stress: -3 },
          fail: { sport: 2, mood: -2, stress: 3, confidence: -2 }
        }
      },
      {
        label: '縮在池邊，怎麼也不肯鬆開扶欄',
        hint: '水看起來很深，像會吞人',
        effects: { stress: 3, independence: -2, sport: 1 }
      },
      {
        label: '請教練抓著你的手，教你一口一口閉氣',
        hint: '有人在旁邊，就不那麼怕了',
        main: true,
        effects: { sport: 4, confidence: 3, social: 2, stress: -2 }
      },
      {
        label: '改在岸上幫大家遞毛巾、記秒數',
        hint: '不一定要會游，也能在隊伍裡',
        effects: { social: 4, leadership: 2, sport: 1 }
      }
    ]
  },
  {
    id: 'life_childhood_011',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 12,
    title: '紙箱堆滿的那個黃昏',
    text: '爸爸說公司調職，全家要搬到另一座城市。搬家那晚，紙箱堆滿客廳，你心愛的腳踏車被拆成兩半靠著牆。最好的朋友站在巷口，手裡攥著一條舊鞋帶，說「一人一條，我們說好的」。夕陽把他的影子拉得好長。',
    tag: '家庭｜友誼',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把鞋帶綁在手腕上，說好一定寫信',
        hint: '一句約定，綁住了整個童年',
        main: true,
        effects: { mood: 3, social: 3 },
        chars: { friend: { rel: 8 } }
      },
      {
        label: '跟他勾小指，約定明年暑假一定再見',
        hint: '遠距離的友誼，靠的是信',
        effects: { independence: 3, mood: 3, confidence: 2 },
        chars: { friend: { rel: 6 } }
      },
      {
        label: '紅著眼眶說「等我長大，回來找你」',
        hint: '說出口的話，總要記得還',
        effects: { mood: -2, social: 3 },
        chars: { friend: { rel: 6 } }
      },
      {
        label: '甩甩頭說反正會認識新朋友，轉身上車',
        hint: '假裝不在乎，其實眼眶紅了',
        warn: true,
        effects: { independence: 3, mood: -3, social: -2 },
        chars: { friend: { rel: -2 } }
      }
    ]
  },
  {
    id: 'life_childhood_012',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 11,
    title: '病房窗台上的黃金葛',
    text: '高燒不退的第三天，你躺在病床上，消毒水的味道怎麼也躲不開。護士阿姨在床頭放了一小盆黃金葛，說它會陪你。窗外天空灰濛濛的，藥水一滴一滴落進點滴管，媽媽趴在床沿睡著了，手裡還握著你的手。',
    tag: '健康｜家庭',
    weight: 1,
    once: true,
    opts: [
      {
        label: '乖乖吃藥打針，想趕快好起來回家',
        hint: '身體聽話，病才走得快',
        main: true,
        effects: { health: 5, independence: 2, mood: 2, stress: -3 },
        chars: { mom: { rel: 3 } }
      },
      {
        label: '趁媽媽睡著，想偷偷拔掉點滴去走廊玩',
        hint: '那條軟管，看起來只是礙事',
        warn: true,
        effects: { health: -5, independence: 3, stress: 3 }
      },
      {
        label: '在點滴卡背面畫滿圖畫，送給護士阿姨',
        hint: '把病房過成了畫室',
        effects: { arts: 3, mood: 4, social: 3, health: 1 }
      },
      {
        label: '跟圖書角借故事書，整個下午讀完一本',
        hint: '書頁翻動的聲音，比點滴聲好聽',
        effects: { language: 3, curiosity: 3, mood: 2, health: 1 }
      }
    ]
  },
  {
    id: 'life_childhood_013',
    act: 'childhood',
    stage: 'kid',
    minAge: 10,
    maxAge: 12,
    title: '圖書館窗邊的金黃',
    text: '午後的圖書館安靜得像另一個世界，窗邊灑進一片金黃。你在童書區角落發現一本《十萬個為什麼》，封面磨白了，裡面寫著星星為什麼會閃。你坐在地板上慢慢翻，圖書館員阿姨輕輕走來，把一枚書籤放進你手心。',
    tag: '閱讀｜好奇',
    weight: 1,
    once: true,
    opts: [
      {
        label: '把整本書借回家，一個字一個字讀完',
        hint: '有些書，讀著讀著就長大了',
        main: true,
        effects: { curiosity: 5, language: 4, science: 3, mood: 3 }
      },
      {
        label: '坐在原地看到閉館，膝蓋都麻了',
        hint: '時間不知不覺溜走',
        effects: { curiosity: 4, science: 2, stress: -3, language: 2 }
      },
      {
        label: '鼓起勇氣問阿姨還有沒有類似的書',
        hint: '問一個問題，就可能打開整排書架',
        effects: { curiosity: 4, social: 3, language: 2 }
      },
      {
        label: '把想不懂的問題抄下來，回家問爸爸',
        hint: '爸爸不一定會，但他總想辦法',
        effects: { science: 3, family: 3, curiosity: 3 },
        chars: { dad: { rel: 3 } }
      }
    ]
  },
  {
    id: 'life_childhood_014',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 10,
    title: '打碎的花瓶',
    text: '一個不注意，你撞翻了客廳的玻璃花瓶，水流了一地，沾濕了地毯邊角。媽媽下樓問怎麼回事，你聽見自己的心跳怦怦怦。樓上陽台晾著的衣服微微晃動，你覺得整間客廳都在看你。',
    tag: '家庭｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '低頭承認是你弄的，小聲說對不起',
        hint: '誠實的當下很痛，但很輕',
        main: true,
        effects: { family: 4, confidence: 3, stress: -3, mood: 2 },
        chars: { mom: { rel: 4 } }
      },
      {
        label: '指著屋角的貓，說牠跳上來撞倒的',
        hint: '說謊就像滾雪球，越滾越大',
        warn: true,
        effects: { family: -4, stress: 5, mood: -3 },
        chars: { mom: { rel: -3 } }
      },
      {
        label: '什麼都不說，先去拿掃把把水掃乾淨',
        hint: '先補救，再談責怪',
        effects: { independence: 4, family: 2, stress: -2, confidence: 2 }
      },
      {
        label: '一溜煙躲回房間，假裝沒聽到',
        hint: '門一關，好像什麼都沒發生',
        effects: { stress: 3, family: -2, mood: -3 }
      }
    ]
  },
  {
    id: 'life_childhood_015',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 12,
    title: '紅土跑道上的號碼布',
    text: '運動會那天，天空藍得不像話，紅土跑道畫著一道一道白線。你別上號碼布，站在一百公尺起跑線上，太陽烤得後頸發燙，同學在觀眾席喊著你的名字。裁判舉起鳴槍，你的腳尖開始發抖。',
    tag: '校園｜競賽',
    weight: 1,
    once: true,
    opts: [
      {
        label: '槍響就全力衝刺，把加油聲甩在身後',
        hint: '這一刻，只想跑贏自己',
        dice: {
          skill: 'sport',
          dc: 10,
          pass: { sport: 6, confidence: 5, mood: 5, social: 2 },
          fail: { sport: 2, confidence: -2, stress: 2, mood: -2 }
        }
      },
      {
        label: '先閉上眼深呼吸，再慢慢走上起跑線',
        hint: '穩住心跳，比搶先一步重要',
        effects: { stress: -3, confidence: 2, sport: 2 }
      },
      {
        label: '反正跑不贏，就邊跑邊給自己喊加油',
        hint: '名次不重要，姿勢要帥',
        effects: { sport: 2, mood: 2, confidence: -2, stress: -2 }
      },
      {
        label: '衝線後，繞回去扶起跌倒的隔壁班選手',
        hint: '比起獎牌，有人更需要你',
        main: true,
        effects: { social: 5, confidence: 3, mood: 3 }
      }
    ]
  },
  {
    id: 'life_childhood_016',
    act: 'childhood',
    stage: 'kid',
    minAge: 10,
    maxAge: 12,
    title: '黑板上的粉筆正字',
    text: '五年級開學，老師宣布要選班長，黑板右邊開始出現一筆一筆的粉筆正字。體育股長阿豪已經拉了半班的人馬。放學後你掃完地，盯著空蕩蕩的教室，講台上那張空白的競選海報還等著有人填上名字。',
    tag: '校園｜領導',
    weight: 1,
    once: true,
    opts: [
      {
        label: '站出來參選，自己畫一張競選海報',
        hint: '名字寫上去，就沒有退路了',
        main: true,
        need: { stat: 'confidence', min: 50 },
        effects: { leadership: 4, confidence: 4, arts: 2, stress: 2 }
      },
      {
        label: '寫一份演講稿，說想為班上做的三件事',
        hint: '先想清楚，再站上台',
        need: { stat: 'language', min: 45 },
        dice: {
          skill: 'language',
          dc: 9,
          pass: { leadership: 5, confidence: 4, social: 3 },
          fail: { confidence: -3, stress: 3 }
        }
      },
      {
        label: '幫阿豪站台，說他比自己更適合',
        hint: '把機會讓出去，也是種選擇',
        effects: { social: 3, confidence: -2, leadership: 1 }
      },
      {
        label: '私底下問幾個好朋友，要不要支持你',
        hint: '選票也可以先聊天',
        effects: { social: 3, leadership: 2 },
        chars: { friend: { rel: 3 } }
      }
    ]
  },
  {
    id: 'life_childhood_017',
    act: 'childhood',
    stage: 'kid',
    minAge: 10,
    maxAge: 12,
    title: '作文簿上的紅圈',
    text: '作文《我的家》，你寫了家門口的麵攤、下雨天的騎樓，還有爸爸收攤後總多煮一碗麵給你。發作文簿那天，導師把你叫到走廊，眼鏡後的眼神很認真：「這篇，是你抄的嗎？」他手上那張紙，被紅筆圈得密密麻麻。',
    tag: '校園｜師生',
    weight: 1,
    once: true,
    opts: [
      {
        label: '漲紅著臉說是自己寫的，把家裡講給他聽',
        hint: '把真相說清楚，需要勇氣',
        main: true,
        dice: {
          skill: 'language',
          dc: 9,
          pass: { mood: 4, confidence: 4, stress: -2, language: 2 },
          fail: { stress: 4, mood: -3, confidence: -2 }
        },
        chars: { teacher: { rel: 5, met: true } }
      },
      {
        label: '低著頭不吭聲，眼淚在眼眶打轉',
        hint: '委屈到說不出話',
        effects: { mood: -3, stress: 3, confidence: -2 },
        chars: { teacher: { rel: -2 } }
      },
      {
        label: '把作文當場唸出來，用聲音證明是你寫的',
        hint: '每個細節，都是真的生活',
        need: { stat: 'language', min: 50 },
        effects: { confidence: 5, language: 3, mood: 3 },
        chars: { teacher: { rel: 5 } }
      },
      {
        label: '倔強地回「你拿去問我爸，他會證明」',
        hint: '話說出口，就有點衝',
        effects: { confidence: 3, mood: -1 },
        chars: { teacher: { rel: -3 }, dad: { rel: 2 } }
      }
    ]
  },
  {
    id: 'life_childhood_018',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 9,
    title: '十分鐘的鐘聲',
    text: '下課鐘響，教室瞬間像炸開的米花。福利社窗口前排滿人，蒸氣裡飄著關東煮的香味。你口袋裡只有媽媽剛塞的幾個銅板，夠買一枝冰棒或一包科學麵。隔壁班的朋友跑來，招手要你去操場盪鞦韆。',
    tag: '校園｜友誼',
    weight: 1.2,
    once: true,
    opts: [
      {
        label: '買一枝冰棒，跟朋友一人一口輪流吃',
        hint: '甜的東西，分著吃更好吃',
        effects: { mood: 4, social: 3, money: -15 },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '不花錢，跑去操場玩紅綠燈',
        hint: '跑幾圈，比冰棒還涼快',
        effects: { sport: 3, social: 3, mood: 3 }
      },
      {
        label: '跟朋友比賽誰的鞦韆盪得高',
        hint: '風灌進衣服裡的瞬間，最自由',
        effects: { sport: 3, confidence: 3, mood: 3, stress: -2 }
      },
      {
        label: '留在教室，趁安靜把作業先寫完',
        hint: '少玩十分鐘，回家多玩一小時',
        effects: { independence: 3, stress: -3, social: -1, language: 1 }
      }
    ]
  },
  {
    id: 'life_childhood_019',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 11,
    title: '門縫透出的燈光',
    text: '半夜，你被一陣壓低的爭吵驚醒，臥室門縫透著客廳的燈光。爸爸說這個月的房租，媽媽說你的補習費，你聽不太懂，卻知道他們在生氣。棉被裡很暖，你不敢動，怕一動就把門縫那道光弄滅了。',
    tag: '家庭｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '假裝上廁所，經過客廳時問「你們吵架了嗎」',
        hint: '一句話，可能讓火氣更旺',
        dice: {
          skill: 'language',
          dc: 10,
          pass: { family: 4, stress: -3, mood: 2 },
          fail: { family: -3, stress: 5, mood: -3 }
        },
        chars: { mom: { rel: 2 }, dad: { rel: 2 } }
      },
      {
        label: '用枕頭捂住耳朵，翻個身繼續睡',
        hint: '好像聽不見，就沒有發生',
        effects: { stress: 3, mood: -2, family: -2 }
      },
      {
        label: '第二天早上，畫一幅全家福貼上冰箱',
        hint: '說不出口的，畫得出來',
        main: true,
        effects: { arts: 3, family: 4, mood: 4, stress: -2 },
        chars: { mom: { rel: 3 }, dad: { rel: 3 } }
      },
      {
        label: '不提吵架，但主動去把碗洗乾淨',
        hint: '小小的分擔，是另一種安慰',
        effects: { independence: 4, family: 3, mood: 2 },
        chars: { mom: { rel: 3 } }
      }
    ]
  },
  {
    id: 'life_childhood_020',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 12,
    title: '從鄉下來的轉學生',
    text: '開學第二週，老師帶進一個曬得黑黑的轉學生，他講話帶著濃濃的口音，幾個同學低聲笑他「ㄢㄤ不分」。下課後他一個人站在教室角落，低頭摸著課桌的刻痕。午休鈴響，全班往操場跑，只有他留在原地。',
    tag: '校園｜友誼',
    weight: 1,
    once: true,
    opts: [
      {
        label: '走過去，邀他一起到操場打球',
        hint: '一句話，就能把孤單推開',
        main: true,
        effects: { social: 4, sport: 2, mood: 3 },
        chars: { friend: { rel: 6, met: true } }
      },
      {
        label: '回頭對笑他的同學說「別這樣笑人家」',
        hint: '站出來，聲音可以不大但要有',
        dice: {
          skill: 'language',
          dc: 8,
          pass: { social: 4, confidence: 4, mood: 2 },
          fail: { stress: 2, confidence: -2 }
        },
        chars: { friend: { rel: 4 } }
      },
      {
        label: '坐到他旁邊，問他鄉下長什麼樣',
        hint: '你對沒去過的地方總是好奇',
        effects: { curiosity: 4, social: 3, language: 2 },
        chars: { friend: { rel: 5 } }
      },
      {
        label: '繼續跟自己的朋友玩，當作沒看見',
        hint: '錯過一次開口，可能就是整個學期',
        effects: { mood: -2, social: -1, stress: 2 }
      }
    ]
  },
  {
    id: 'life_childhood_021',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 11,
    title: '恐龍骨架的長影子',
    text: '校外教學那天，遊覽車沿著海岸公路搖搖晃晃，窗外是一片藍到發亮的海洋。博物館的恐龍骨架在昏暗的燈光下投下長長的影子，講解員的聲音在大廳裡迴盪。你墊起腳尖，想看清那顆巨大的頭骨。',
    tag: '校外｜好奇',
    weight: 1,
    once: true,
    opts: [
      {
        label: '擠到最前面，把講解員的話一字不漏聽完',
        hint: '有些疑問，這次錯過就沒有下次',
        effects: { science: 4, curiosity: 4, language: 2 }
      },
      {
        label: '拉著朋友去紀念品店挑化石橡皮擦',
        hint: '帶回家的，是整個博物館的縮影',
        effects: { social: 3, mood: 3, money: -50 },
        chars: { friend: { rel: 3 } }
      },
      {
        label: '主動幫暈車的同學拿塑膠袋、倒水',
        hint: '照顧別人，好像自己也長大了',
        main: true,
        effects: { social: 4, confidence: 3, mood: 3 }
      },
      {
        label: '趁導師不注意，自己鑽進別的分區探險',
        hint: '迷路的風景，總是最特別',
        dice: {
          skill: 'science',
          dc: 9,
          pass: { science: 4, curiosity: 4, independence: 3, confidence: 3 },
          fail: { stress: 5, mood: -3, confidence: -3 }
        }
      }
    ]
  },
  {
    id: 'life_childhood_022',
    act: 'childhood',
    stage: 'kid',
    minAge: 10,
    maxAge: 12,
    title: '撲滿裡的金屬聲',
    text: '你想要的遊戲機要三千兩百塊，你把每週零用錢、考試獎金、過年紅包一點一點塞進撲滿。撲滿一天天變重，搖一搖，會發出悅耳的金屬聲。那晚你打開撲滿數錢，已經兩千八，還差四百。',
    tag: '生活｜財物',
    weight: 1,
    once: true,
    opts: [
      {
        label: '忍著不買，說再存兩個月就夠了',
        hint: '等的滋味，讓擁有的那一刻更甜',
        effects: { independence: 4, stress: -1, mood: -1, money: 400 }
      },
      {
        label: '跟媽媽商量，用做家事換零用錢補足差額',
        hint: '開口談條件，也是種能力',
        main: true,
        need: { stat: 'language', min: 40 },
        dice: {
          skill: 'language',
          dc: 8,
          pass: { independence: 4, family: 3, money: 400, confidence: 3 },
          fail: { money: 100, confidence: -2 }
        },
        chars: { mom: { rel: 2 } }
      },
      {
        label: '忍不住先買一半價值的東西，之後再補',
        hint: '先爽一下，剩下的再說',
        effects: { mood: 3, money: -1600, stress: -2 }
      },
      {
        label: '發現存錢本身比買東西更有趣，繼續存',
        hint: '每天搖一次撲滿，是最踏實的期待',
        effects: { independence: 4, curiosity: 2, mood: 2, money: 400 }
      }
    ]
  },
  {
    id: 'life_childhood_023',
    act: 'childhood',
    stage: 'kid',
    minAge: 7,
    maxAge: 10,
    title: '蠟燭影子的晚上',
    text: '颱風夜，外面的風呼呼地嚎，雨點砸在玻璃上啪啪響。忽然整棟房子黑了——停電了。媽媽點起蠟燭，你的影子在牆上忽大忽小；爸爸把收音機調到氣象台，播報員的聲音斷斷續續。你們三個人縮在客廳涼蓆上。',
    tag: '家庭｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '用手在燭光前扮各種動物，逗爸媽笑',
        hint: '一個影子，能讓整間屋子亮起來',
        main: true,
        effects: { family: 4, mood: 5, arts: 2, stress: -3 }
      },
      {
        label: '安靜地聽收音機，問爸爸颱風是怎麼來的',
        hint: '大人把世界講給你聽',
        effects: { science: 3, curiosity: 4, stress: -2 },
        chars: { dad: { rel: 4 } }
      },
      {
        label: '怕黑，緊抓媽媽的衣角不放',
        hint: '在黑暗裡，媽媽的手是最亮的光',
        effects: { family: 3, stress: -2, independence: -2 }
      },
      {
        label: '提議全家一起玩撲克牌，等電來',
        hint: '原來停電的晚上，可以這樣過',
        effects: { family: 3, social: 3, leadership: 2, mood: 3 }
      }
    ]
  },
  {
    id: 'life_childhood_024',
    act: 'childhood',
    stage: 'kid',
    minAge: 9,
    maxAge: 12,
    title: '阿嬤院子裡的芒果樹',
    text: '暑假回阿嬤家，她院子裡的芒果樹結滿青綠色的果子。阿嬤搬了張矮凳坐在樹下，用蒲扇慢慢扇著，說這棵樹是你爸爸小時候種的。她從圍裙口袋掏出一個布包，裡面包著幾顆晒乾的酸梅乾，「你阿公以前最愛吃這個。」',
    tag: '家庭｜親情',
    weight: 1,
    once: true,
    opts: [
      {
        label: '爬上樹摘一顆芒果，第一個分給阿嬤',
        hint: '她笑得比芒果還甜',
        main: true,
        effects: { family: 4, sport: 2, mood: 4 },
        chars: { elder: { rel: 6, met: true } }
      },
      {
        label: '搬張小板凳坐下，聽她講爸爸的糗事',
        hint: '大人也是小孩長大的',
        effects: { family: 4, curiosity: 3, mood: 3 },
        chars: { elder: { rel: 5 } }
      },
      {
        label: '幫她把酸梅乾一片片裝進玻璃罐',
        hint: '有些事，動手做比說話親',
        effects: { independence: 2, family: 3, mood: 2 },
        chars: { elder: { rel: 4 } }
      },
      {
        label: '覺得無聊，一直吵著要看電視',
        hint: '你沒發現，阿嬤的眼神暗了一下',
        warn: true,
        effects: { family: -3, mood: -2 },
        chars: { elder: { rel: -3 } }
      }
    ]
  },
  {
    id: 'life_childhood_025',
    act: 'childhood',
    stage: 'kid',
    minAge: 12,
    maxAge: 12,
    title: '畢業典禮的鳳凰花',
    text: '六月的鳳凰花紅得刺眼，你別上「畢業生」的胸花，站在禮堂裡。校長講完話，全體起立唱畢業歌，隔壁排的同學偷偷揉眼睛。你低頭看自己磨白的帆布鞋，忽然明白，這可能是最後一次跟這群人一起唱歌。',
    tag: '校園｜成長',
    weight: 1,
    once: true,
    opts: [
      {
        label: '用力唱完畢業歌，把這一刻記進心裡',
        hint: '有些日子，過完才知道是最好的一天',
        main: true,
        effects: { mood: 3, social: 3, confidence: 2 }
      },
      {
        label: '跑到每個朋友桌前，要簽名留念',
        hint: '白制服上的簽名，是最好的畢業禮物',
        effects: { social: 4, mood: 3 },
        chars: { friend: { rel: 5 } }
      },
      {
        label: '把胸花小心摘下來，夾進最喜歡的書裡',
        hint: '花會枯，書會留著',
        effects: { mood: 2, curiosity: 2, independence: 2 }
      },
      {
        label: '跟最要好的朋友約定，以後也要一直聯絡',
        hint: '童年結束了，友情還長著呢',
        effects: { social: 4, confidence: 3, mood: 4 },
        chars: { friend: { rel: 7 } }
      }
    ]
  },
  {
    id: 'life_childhood_026',
    act: 'childhood',
    stage: 'kid',
    minAge: 6,
    maxAge: 12,
    title: '阿公的懷錶與阿嬤的紅包',
    text: '週末，你們一家回鄉下。阿公坐在藤椅上，從口袋掏出一只銅懷錶，說那是他年輕時攢了三個月薪水買的；阿嬤從廚房端出剛蒸好的紅龜粿，硬是塞兩個到你手裡。他們老了，笑起來時眼角的皺紋像歲月的河。',
    tag: '親屬｜家族',
    weight: 1,
    once: true,
    cond: (S) => !!(S.family && S.family.tree),
    opts: [
      {
        label: '陪阿公數懷錶上的刻度，聽他講年輕時的故事',
        hint: '有些故事，錯過就再也聽不到了',
        main: true,
        effects: { family: 5, curiosity: 4, mood: 4 },
        chars: { mom: { rel: 2 }, dad: { rel: 2 } }
      },
      {
        label: '幫阿嬤捏紅龜粿，學她手上的功夫',
        hint: '手藝是這樣一代一代傳下來的',
        effects: { family: 4, arts: 3, mood: 3 }
      },
      {
        label: '把紅包收好，說要存起來以後孝順他們',
        hint: '一張紙鈔，裝著兩份心意',
        effects: { family: 4, money: 600, mood: 2 }
      },
      {
        label: '跑去找堂表兄弟姐妹玩，鬧到滿身汗',
        hint: '過年過節，就是要這樣才熱鬧',
        effects: { social: 4, sport: 3, mood: 5, family: 2 }
      }
    ]
  },
  {
    id: 'life_childhood_027',
    act: 'childhood',
    stage: 'kid',
    minAge: 8,
    maxAge: 12,
    title: '堂表兄弟姐妹的巷戰',
    text: '過年回老家，客廳堆滿了人。大伯家的堂哥、二舅家的表妹全都來了，大人們圍著圓桌搓麻將，你們這群小的被趕到巷子裡去玩。磚牆、鞭炮屑、巷口那隻老黃狗——你們把它當成整座冒險島。',
    tag: '親屬｜家族',
    weight: 1,
    once: true,
    cond: (S) => !!(S.family && S.family.tree),
    opts: [
      {
        label: '當鬼抓人的鬼，追得大家滿巷子跑',
        hint: '誰跑得最快，誰就是今天的英雄',
        effects: { sport: 4, social: 3, mood: 5 }
      },
      {
        label: '躲進老黃狗的窩旁邊，躲到沒人找得到',
        hint: '最好的藏身處，永遠在最不起眼的地方',
        effects: { curiosity: 3, social: 3, mood: 4 }
      },
      {
        label: '拉著表妹一起用紅磚塊疊城堡',
        hint: '一個蓋屋頂，一個砌城牆',
        effects: { arts: 4, family: 3, social: 2 }
      },
      {
        label: '搶到最後一個鞭炮，點燃前猶豫了',
        hint: '有些事，開頭需要一點勇氣',
        dice: {
          skill: 'sport',
          dc: 8,
          pass: { confidence: 4, mood: 3, social: 2 },
          fail: { stress: 2, mood: -1 }
        }
      }
    ]
  }
];

export const CHILDHOOD_MILESTONES = [
  {
    id: 'm_elementary',
    age: 7,
    title: '背起書包的那一天',
    text: '你背著全新的書包站在校門口，鳳凰木的葉子在風裡沙沙作響。媽媽蹲下來幫你把名牌別好，說：「從今天起，你就是一年級了。」你轉過身，走進那扇即將承載你六年光陰的校門。',
    kind: 'auto',
    setSchool: { name: '北方市立青禾國小', level: 'elementary' },
    f: (S) => {
      S.school = ELEM_SCHOOLS[S.birth.city] || ELEM_SCHOOLS.taipei;
      S.education = 'elementary';
    }
  },
  {
    id: 'm_middle',
    age: 12,
    title: '國中入學的抉擇',
    text: '畢業後那個暑假，爸爸把一張國中入學說明單放在餐桌上，說：「唸哪間國中，你自己決定。」說明單上有明星國中的簡介，也有隔壁那間走路十分鐘就到的學區國中。你攤開單子，蠅頭小字寫滿了未來的兩種方向。',
    kind: 'choice',
    opts: [
      {
        label: '報考明星國中，衝刺升學班',
        hint: '課業重、同儕強，適合課業表現好的你',
        need: { stat: 'math', min: 60 },
        effects: { stress: 4, confidence: 3, math: 3 },
        setSchool: { name: '北方市立中正國中', level: 'middle' },
        f: (S) => {
          S.school = MID_STAR[S.birth.city] || MID_STAR.taipei;
          S.education = 'middle';
        }
      },
      {
        label: '唸有美術班的國中，走藝術特長',
        hint: '需要一定的藝術底子',
        need: { stat: 'arts', min: 50 },
        effects: { arts: 3, stress: 2, mood: 3 },
        setSchool: { name: '北方市立仁愛國中', level: 'middle' },
        f: (S) => {
          S.school = MID_ARTS[S.birth.city] || MID_ARTS.taipei;
          S.education = 'middle';
        }
      },
      {
        label: '就近入學，唸家附近的國中',
        hint: '走十分鐘就到的學區國中，壓力小些',
        effects: { stress: -3, family: 3, mood: 2 },
        setSchool: { name: '北方市立大安國中', level: 'middle' },
        f: (S) => {
          S.school = MID_NEAR[S.birth.city] || MID_NEAR.taipei;
          S.education = 'middle';
        }
      },
      {
        label: '出國唸中學，看看更大的世界',
        hint: '需要語言與財力，提早獨立',
        need: { stat: 'language', min: 50 },
        warn: true,
        effects: { independence: 8, language: 5, curiosity: 5, stress: 5, money: -150000, family: -4 },
        setSchool: { name: '美國｜聖安德魯中學', level: 'middle' },
        f: (S) => {
          S.school = '美國・聖安德魯中學';
          S.education = 'middle';
          S.flags.abroad = true;
          S.flags.abroadCountry = '美國';
        }
      }
    ]
  },
];
