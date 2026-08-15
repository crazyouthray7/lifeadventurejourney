/**
 * 人生冒險誌｜人生模擬器 — 啟程（19-24 歲）
 * Produce By: CrazyRL7
 *
 * 依 .omo/spec.md §4/§5/§6/§8/§9 撰寫。
 * 內容代理 F：大學生活（19-21）＋ 職場起步（22-24），
 * 含里程碑 m_firstjob（22 歲）與 m_relationship（24 歲）。
 */
export const SCENES = [
  {
    id: 'life_departure_001',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 19,
    title: '清晨五點二十的客運',
    text: '媽媽在車站幫你拉了兩次行李箱的拉鏈，說「到了打個電話」。車窗外的故鄉一點一點退成地平線，你第一次覺得，票根上「首都」兩個字重得像一塊石頭。',
    tag: '離家｜獨立',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '握著手機，等媽媽到家才敢放心',
        hint: '在異地的第一個晚上，學會報平安',
        effects: { family: 5, mood: -3, independence: 2 },
        chars: { mom: { rel: 3, met: true } }
      },
      {
        label: '戴起耳機，把自己拋進新城市的人潮',
        hint: '用忙碌蓋過離鄉的酸澀',
        effects: { independence: 5, stress: -5, family: -2 }
      },
      {
        label: '自己扛行李，不讓任何人幫忙',
        hint: '從第一站就學著獨立',
        need: { stat: 'confidence', min: 40 },
        effects: { independence: 6, confidence: 3, health: -2 }
      },
      {
        label: '傳訊息給國中死黨：我到首都了',
        hint: '故鄉的牽掛，是路上第一個聯絡的人',
        effects: { social: 4, mood: 4 },
        chars: { friend: { rel: 4, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_002',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 19,
    title: '三坪半的異地',
    text: '宿舍的床板比家裡的書桌還窄，室友半夜戴著耳機打電動，鍵盤聲隔著木板咚咚地傳過來。牆上貼著前一位學長留下的A4紙：「廁所輪值表，逾期三次者，請全寢喝手搖。」',
    tag: '大學｜生活',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '主動排值日表，把周三倒垃圾寫上自己的名字',
        hint: '先伸出手的人，往往先交到朋友',
        effects: { social: 5, independence: 3 },
        chars: { bestie: { rel: 6, met: true } }
      },
      {
        label: '把自己裹進被子，等室友先開口',
        hint: '慢熱的人，需要多一點時間',
        effects: { mood: -3, social: -3 }
      },
      {
        label: '直接找他約法三章，語氣很硬',
        hint: '界線劃得太早，偶爾會劃傷關係',
        effects: { confidence: 4, social: -3, stress: 2 }
      },
      {
        label: '遞一瓶飲料過去，說「鄰居，打擾一下」',
        hint: '一點小善意，換一個能聊天的室友',
        effects: { social: 4, mood: 4 },
        chars: { bestie: { rel: 5, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_003',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 19,
    title: '迎新夜的營火',
    text: '學長姐把營火疊得比人高，你的名牌被別針別歪了。隔壁系的新生唱走音，全場笑得蹲在地上。有人遞給你一支烤棉花糖，說「嗨，我是乙班的。」那是你第一次覺得，自己真的「入學」了。',
    tag: '大學｜人際',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '接過棉花糖，跟著笑鬧到營火熄滅',
        hint: '有些友情，從一支烤焦的棉花糖開始',
        effects: { social: 6, mood: 5 },
        chars: { bestie: { rel: 5, met: true } }
      },
      {
        label: '站在外圈看火光，記下幾個看起來可靠的名字',
        hint: '先觀察，再決定把時間留給誰',
        effects: { social: 2, curiosity: 3, confidence: 2 }
      },
      {
        label: '提早離場去圖書館佔位置',
        hint: '避開熱鬧，換一個安靜的晚上',
        effects: { independence: 3, social: -4, stress: -3, math: 2 }
      }
    ]
  },
  {
    id: 'life_departure_004',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '超商大夜的第一班',
    text: '冰櫃的嗡鳴比車站的廣播還熟悉。你學會了關東煮要三點前補貨、發票機卡紙要敲哪個角落。凌晨兩點，一個醉漢趴在座位區，你握著抹布，猶豫要不要叫店長。',
    tag: '打工｜獨立',
    once: true,
    flags: { key: 'departure_parttime' },
    opts: [
      {
        label: '拿條毛巾給他墊著，問他要不要喝熱水',
        hint: '無關對錯，這是你待人接物的方式',
        effects: { mood: 4, social: 4, money: 1800 }
      },
      {
        label: '按內部對講機，請店長下來處理',
        hint: '安全優先，人情可以放後面',
        effects: { confidence: 4, stress: -3, money: 1800 }
      },
      {
        label: '假裝沒看到，退回櫃台滑手機',
        hint: '有些夜晚，你選擇視而不見',
        effects: { mood: -5, stress: 3, money: 1800 }
      }
    ]
  },
  {
    id: 'life_departure_005',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 21,
    title: '第四節課的下課鈴',
    text: '宿舍頂樓的水塔邊，三個人分著一罐啤酒，你看見對面教學樓的燈一間一間滅掉。期中考倒數兩週，而你已經連翹了五堂線性代數。鋁罐在手裡冰得刺骨，一點也不解渴。',
    tag: '大學｜代價',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '起身去圖書館，把積欠的講義一次補完',
        hint: '現在補救，還來得及',
        dice: {
          skill: 'math',
          dc: 12,
          pass: { math: 6, mood: 3 },
          fail: { math: 2, stress: 6, mood: -3 }
        }
      },
      {
        label: '喝完剩下的半罐，明天再說',
        hint: '逃避一時，壓力的利息不會遲到',
        effects: { mood: -2, stress: 5, math: -2 }
      },
      {
        label: '回宿舍打給高中老師，說「我好像跟不上」',
        hint: '有些困惑，只有信任的人解得開',
        effects: { mood: 4, stress: -5, math: 2 },
        chars: { teacher: { rel: 4, met: true } },
        thread: { type: 'revisit', atAge: 26, sceneId: 'life_thread_001' }
      }
    ]
  },
  {
    id: 'life_departure_006',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 21,
    title: '吉他社的迎新茶會',
    text: '學長彈了半首〈寶島曼波〉就忘譜，全場拍手起鬨。你的視線越過人群，看見靠窗的女生低頭調弦，頭頂是一盞太亮的日光燈。她抬頭對你笑了一下，又繼續調弦。你突然覺得，社費五百元很值得。',
    tag: '大學｜愛情',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    flags: { key: 'departure_met_crush' },
    opts: [
      {
        label: '走過去問她「那首歌叫什麼名字」',
        hint: '一句話的距離，可能是五年的故事',
        need: { stat: 'social', min: 45 },
        dice: {
          skill: 'social',
          dc: 11,
          pass: { mood: 6, social: 4, confidence: 3 },
          fail: { mood: -3, confidence: -2 }
        },
        chars: { crush: { rel: 6, met: true } }
      },
      {
        label: '回去後在社團群組傳訊息，自我介紹',
        hint: '慢一點沒關係，別讓心意過期',
        effects: { social: 2, mood: 2 },
        chars: { crush: { rel: 3, met: true } }
      },
      {
        label: '把吉他放回琴架，默默報名了社課',
        hint: '先把自己練好，也是靠近的方式',
        effects: { curiosity: 3, arts: 4, mood: 2 }
      }
    ]
  },
  {
    id: 'life_departure_007',
    act: 'departure',
    stage: 'adult',
    minAge: 20,
    maxAge: 21,
    title: '頂樓的風',
    text: '晚上十點，你把外套當毯子披在肩上，靠著宿舍頂樓的圍牆。城市的燈海一路延伸到視線盡頭，卻沒有一盞燈是你家的。系上學長說畢業後要去賣保險，你開始懷疑，四年後的自己會在哪裡。',
    tag: '大學｜迷茫',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '拿出手機，記下三個想做的事，不管多遠',
        hint: '把迷茫寫下來，它就變成方向',
        effects: { curiosity: 5, confidence: 4, mood: 2 },
        thread: { type: 'revisit', atAge: 30, sceneId: 'life_thread_002' }
      },
      {
        label: '打給爸爸，問他當年怎麼決定',
        hint: '你以為遙遠的路，他也走過',
        effects: { family: 5, mood: 3 },
        chars: { dad: { rel: 5, met: true } }
      },
      {
        label: '把這個念頭壓下去，明天還有課要上',
        hint: '藏起來的問題，不會自己長出答案',
        effects: { stress: 4, mood: -3 }
      }
    ]
  },
  {
    id: 'life_departure_008',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '電話裡的一分三十秒',
    text: '媽媽在電話那頭說「你阿嬤說你瘦了」，你其實三個月沒回去。她小心翼翼問要不要多寄五千，你看著戶頭裡打工存下的錢，突然不知道怎麼回。沉默了一分半，是她先掛的電話。',
    tag: '家庭｜獨立',
    once: true,
    opts: [
      {
        label: '匯了八千回去，說「這是給阿嬤買水果的」',
        hint: '長大，是開始學會回報',
        effects: { money: -8000, family: 6, independence: 3 },
        chars: { mom: { rel: 5, met: true } }
      },
      {
        label: '老實說最近房租漲了，需要她支援',
        hint: '偶爾示弱，也是一種勇敢',
        effects: { money: 5000, family: 2, independence: -3, stress: -5 },
        chars: { mom: { rel: 2, met: true } }
      },
      {
        label: '說「都好」，然後把手機靜音',
        hint: '報喜不報憂，是把家人關在門外',
        effects: { family: -5, mood: -4, independence: 2 }
      }
    ]
  },
  {
    id: 'life_departure_009',
    act: 'departure',
    stage: 'adult',
    minAge: 20,
    maxAge: 20,
    title: '成績單寄出的前一晚',
    text: '系辦的紅榜貼出二一預警名單，你的學號混在一排陌生的名字裡。寢室的燈亮到三點，檯燈下是翻爛的原文書，每一頁都在嘲笑你高中時的選擇。',
    tag: '大學｜學業',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '找教授談，把不懂的地方一次問完',
        hint: '放下身段，把問題問到會為止',
        dice: {
          skill: 'science',
          dc: 13,
          pass: { science: 7, mood: 3 },
          fail: { science: 2, stress: 6, confidence: -3 }
        }
      },
      {
        label: '把所有賭注押在期末考，不眠不休',
        hint: '燃燒自己，是危險的賭局',
        dice: {
          skill: 'math',
          dc: 14,
          pass: { math: 6, stress: -5 },
          fail: { math: 2, stress: 8, health: -3 }
        }
      },
      {
        label: '打給摯友哭了一場，說想休學',
        hint: '承認脆弱的人，才接得住自己',
        effects: { mood: 4, stress: -6, family: -3 },
        chars: { bestie: { rel: 6, met: true } }
      },
      {
        label: '刪掉社團通知，逼自己留在圖書館',
        hint: '暫時的孤獨，換一條活路',
        effects: { independence: 4, social: -3, arts: -2 }
      }
    ]
  },
  {
    id: 'life_departure_010',
    act: 'departure',
    stage: 'adult',
    minAge: 20,
    maxAge: 23,
    title: '午夜的騎樓',
    text: '雨下得沒有要停的意思，你騎著舊機車躲在騎樓裡，腰間是剛領的工資袋。家教的小孩這次考了全班第二，家長多塞了你一百。手機彈出期末報告的分組通知，而你還沒找到隊友。',
    tag: '打工｜獨立',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '把工資分成兩半，一半固定存起來',
        hint: '對錢有紀律的人，路會走得穩',
        effects: { money: 5000, independence: 3, stress: -3 }
      },
      {
        label: '辭掉家教，專心準備期末',
        hint: '取捨之間，先顧好學分',
        effects: { money: -5000, math: 4, stress: -6, mood: 3 }
      },
      {
        label: '把分組需求丟上群組，賭有人拉你一把',
        hint: '主動求助，不是示弱',
        effects: { social: 4, mood: 2 },
        chars: { bestie: { rel: 3, met: true } }
      },
      {
        label: '通宵做完，白天照常去打工',
        hint: '一個人扛下所有，通常是硬撐',
        warn: true,
        effects: { health: -6, money: 5000, stress: 6, math: 2 }
      }
    ]
  },
  {
    id: 'life_departure_011',
    act: 'departure',
    stage: 'adult',
    minAge: 20,
    maxAge: 24,
    title: '壁癌那面牆',
    text: '大二搬出宿舍，你在學校後門租了一間頂樓加蓋。牆角爬著一片潮濕的壁癌，房東說「漆一漆就好」。下雨的夜裡，那面牆像一張慢慢擴張的地圖，而你月底的戶頭只剩一萬出頭。',
    tag: '獨立｜經濟',
    once: true,
    opts: [
      {
        label: '自己買批土和油漆，趁週末把它刷過',
        hint: '住的地方，是自己一筆一筆刷出來的',
        effects: { money: -800, independence: 5, stress: -4, arts: 2 }
      },
      {
        label: '拍下照片找房東理論，要他處理',
        hint: '權益要自己站出來爭',
        dice: {
          skill: 'language',
          dc: 12,
          pass: { confidence: 5, money: 2000, stress: -3 },
          fail: { stress: 4, mood: -3 }
        }
      },
      {
        label: '貼張海報蓋過去，當作沒看到',
        hint: '問題不會因為被遮住而消失',
        effects: { mood: -3, stress: 4 }
      },
      {
        label: '搬回宿舍，多一個室友也認了',
        hint: '在省錢和舒適之間，你選了前者',
        effects: { money: 2000, independence: -4, social: 3 }
      }
    ]
  },
  {
    id: 'life_departure_012',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '除夕的圓桌',
    text: '年夜飯的圓桌上多了一雙你的碗筷，爸爸難得開了那瓶收在櫃子裡的高粱。親戚問你念的系將來做什麼，你說「還在想」，整桌安靜了三秒。媽媽在廚房裡接了一句「孩子剛回來，別問這些。」',
    tag: '家庭｜過年',
    once: true,
    opts: [
      {
        label: '舉杯敬爸爸，說「我今年學會煮菜了」',
        hint: '成年人的和解，常常從一句家常開始',
        effects: { family: 6, mood: 4 },
        chars: { dad: { rel: 5, met: true } }
      },
      {
        label: '認真說起自己對未來的打算',
        hint: '把野心說出口，就多一份落實的決心',
        effects: { confidence: 5, family: 3, curiosity: 3 }
      },
      {
        label: '打哈哈帶過，低頭滑手機',
        hint: '躲過問題，也躲過了圍坐的家人',
        effects: { family: -5, mood: -2 }
      }
    ]
  },
  {
    id: 'life_departure_013',
    act: 'departure',
    stage: 'adult',
    minAge: 21,
    maxAge: 24,
    title: '打工換來的一疊紙鈔',
    text: '二十一歲前夕，你數著這學期打工攢下的三萬二。室友約你暑假去離島，說機票船票加民宿「一人八千」。窗外的蟬叫得很大聲，大學生活快結束了，而你不確定該把這疊錢花在哪裡。',
    tag: '大學｜金錢',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '去離島，有些風景只有這個夏天有',
        hint: '把錢換成記憶，也是一種投資',
        effects: { money: -8000, mood: 8, social: 5 },
        chars: { bestie: { rel: 5, met: true } }
      },
      {
        label: '存起來，當作畢業後的第一桶金',
        hint: '留給未來的自己，多一點底氣',
        effects: { independence: 5, stress: -3, family: 2 }
      },
      {
        label: '換一台像樣的工作機',
        hint: '工具越順手，本事越有地方使',
        effects: { money: -15000, tech: 4, curiosity: 3 }
      },
      {
        label: '留在學校接兩個家教，把時間賣給夏天',
        hint: '金錢買得到未來，但買不回暑假',
        warn: true,
        effects: { money: 20000, health: -4, mood: -5, social: -4 }
      }
    ]
  },
  {
    id: 'life_departure_014',
    act: 'departure',
    stage: 'adult',
    minAge: 21,
    maxAge: 21,
    title: '實習生名牌的第一天',
    text: '你的名牌掛繩比正式員工短一截，工位被晾在角落。主管丟給你一份四十頁的簡報說「先看熟」，午休時沒人叫你一起去吃飯。窗外那座城市最高的大樓在正午的陽光裡反著光，你第一次聞到職場的味道——咖啡、影印機，還有一點緊張。',
    tag: '職場｜大學',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '記住每個人的名字，主動問「有需要幫忙的嗎」',
        hint: '新人最值錢的，是那點不自量力的熱情',
        need: { stat: 'confidence', min: 45 },
        effects: { social: 5, confidence: 4 },
        chars: { boss: { rel: 3, met: true } }
      },
      {
        label: '乖乖把簡報翻完，筆記做滿',
        hint: '先把本分做好，再談表現',
        effects: { language: 4, leadership: 2, stress: -2 }
      },
      {
        label: '下班跟實習生同事去吃冰，交換情報',
        hint: '同期生，是職場最早的朋友',
        effects: { social: 4, mood: 4 }
      },
      {
        label: '覺得自己不適合，當晚就更新履歷',
        hint: '先否定自己，是最容易的退路',
        effects: { confidence: -5, stress: -6 }
      }
    ]
  },
  {
    id: 'life_departure_015',
    act: 'departure',
    stage: 'adult',
    minAge: 21,
    maxAge: 21,
    title: '畢業典禮後的便利商店',
    text: '學士服還掛在肩上，你在便利商店的微波爐前，等一份二十元的義大利麵。手機裡是十封已讀未回的求職回函，投出去的履歷像丟進水裡的石頭。店外下著雨，你算著下個月的房租。',
    tag: '畢業｜求職',
    once: true,
    cond: (S) => S.education === 'university' || S.education === 'graduate',
    opts: [
      {
        label: '把作品集從頭改一遍，投給更大的公司',
        hint: '碰壁一百次，只要一次回響就夠',
        effects: { tech: 3, arts: 3, confidence: 3, stress: 3 }
      },
      {
        label: '先接一份穩定的工作，房租要緊',
        hint: '生存優先，夢想可以慢慢排隊',
        effects: { money: 5000, independence: 3, mood: -3 }
      },
      {
        label: '打給摯友，說「我怕我找不到工作」',
        hint: '害怕說出來，就沒那麼可怕了',
        effects: { mood: 4, stress: -5, social: 3 },
        chars: { bestie: { rel: 5, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_016',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '第一天就被記住的名字',
    text: '上班第一天，行政把你的帳號權限搞錯三次，你蹲在茶水間跟IT借VPN。下午五點，主管走過你位置丟下一句「明天開會要用，今晚給我」。你看了看時間，離末班地鐵還有五個小時。',
    tag: '職場｜新人',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '留下來做完，順便摸熟部門的檔案系統',
        hint: '把加班變成學習，虧欠就少一點',
        dice: {
          skill: 'tech',
          dc: 12,
          pass: { tech: 5, confidence: 4, stress: -4 },
          fail: { stress: 7, mood: -4 }
        },
        chars: { boss: { rel: 3, met: true } }
      },
      {
        label: '準時下班，明天再面對',
        hint: '工作與生活的界線，要自己畫',
        effects: { stress: -5, independence: 2, mood: 2 },
        chars: { boss: { rel: -3, met: true } }
      },
      {
        label: '找人問清楚流程，不做白工',
        hint: '會問的人，走的路最短',
        effects: { social: 3, leadership: 2, confidence: 3 }
      }
    ]
  },
  {
    id: 'life_departure_017',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '大家的新人',
    text: '三份便當、兩杯咖啡、一次影印機卡紙，你成了部門的公用儲藏室。學姊把她的份量推給你時笑說「能者多勞」。你咬著便當裡的雞腿，盤算著怎麼開口。',
    tag: '職場｜新人',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '學著說「我手上還有工作，明天下午可以嗎」',
        hint: '溫和地畫線，不刺傷人也不委屈自己',
        effects: { confidence: 5, stress: -4, social: -2 },
        chars: { boss: { rel: 3, met: true } }
      },
      {
        label: '默默接下來，多做事少說話',
        hint: '好脾氣久了，會被當成應該',
        effects: { social: 4, stress: 5, mood: -3 }
      },
      {
        label: '找主管談談工作分配',
        hint: '向上溝通，是職場最重要的功課',
        dice: {
          skill: 'language',
          dc: 12,
          pass: { leadership: 5, stress: -4 },
          fail: { social: -3, stress: 4, confidence: -3 }
        },
        chars: { boss: { rel: 4, met: true } }
      },
      {
        label: '直接說「我不是打雜的」',
        hint: '界線一次劃太硬，容易傷到自己',
        warn: true,
        effects: { confidence: 6, social: -6, mood: 3 },
        chars: { boss: { rel: -5, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_018',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '深夜的會議室燈光',
    text: '十點半，會議室還亮著燈。你進去收杯子，看見主管一個人對著白板上的流程圖站了很久。他沒回頭，問了一句「新人，你覺得這個流程哪裡有問題」。白板筆滾到地上，你愣在原地。',
    tag: '職場｜主管',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '誠實說出你的看法，即使不成熟',
        hint: '能被老闆問「你怎麼看」，是好運',
        need: { skill: 'leadership', min: 30 },
        main: true,
        dice: {
          skill: 'leadership',
          dc: 13,
          pass: { confidence: 6, stress: -3, mood: 3 },
          fail: { confidence: -2, stress: 3 }
        },
        chars: { boss: { rel: 5, met: true } }
      },
      {
        label: '說「我再研究看看」，幫他把白板收好',
        hint: '一句暖話，換一個深夜的理解',
        effects: { mood: 3, social: 2 },
        chars: { boss: { rel: 4, met: true } }
      },
      {
        label: '假裝沒聽見，默默退出會議室',
        hint: '躲開機會的人，也在躲開自己',
        effects: { stress: 4, confidence: -2 },
        chars: { boss: { rel: -4, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_019',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '末班地鐵的座位',
    text: '末班地鐵的座位空了大半，你靠著車門把手滑手機，群組裡主管還在追明天的進度。列車鑽進隧道，窗玻璃映出一張陌生的、沒什麼血色的臉。你算了算，這是本週第三次搭末班車回家。',
    tag: '職場｜加班',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    flags: { key: 'departure_overtime' },
    opts: [
      {
        label: '明天找主管談工作量，拿數據說話',
        hint: '用事實溝通，而不是用情緒',
        dice: {
          skill: 'language',
          dc: 13,
          pass: { stress: -8, leadership: 4, mood: 3 },
          fail: { stress: 5, mood: -3 }
        }
      },
      {
        label: '咬牙撐著，新人不能喊累',
        hint: '用健康換表現，最貴的投資',
        warn: true,
        effects: { independence: 3, health: -5, stress: 6, money: 5000 }
      },
      {
        label: '開始更新履歷，替自己留後路',
        hint: '給自己保留離開的權利',
        effects: { confidence: 4, stress: -4, mood: -2 },
        thread: { type: 'revisit', atAge: 27, sceneId: 'life_thread_003' }
      }
    ]
  },
  {
    id: 'life_departure_020',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '月底的餘額',
    text: '房租一萬五、水電瓦斯、便當錢，你的薪資明細躺在手機裡，扣完一切，餘額顯示 $ 3,280。你在便利商店門口站了三十秒，最後走進去，買了一杯最便宜的咖啡。',
    tag: '職場｜生活',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '開始記帳，砍掉不必要的花費',
        hint: '每一塊錢，都要知道自己的去處',
        effects: { money: 3000, stress: -4, independence: 3 }
      },
      {
        label: '下班接案子，替薪水開源',
        hint: '多一門本事，多一條生路',
        dice: {
          skill: 'tech',
          dc: 11,
          pass: { money: 8000, stress: 5 },
          fail: { money: 2000, stress: 8, health: -3 }
        }
      },
      {
        label: '先這樣吧，年輕就是要體驗生活',
        hint: '活在當下，帳單可不會等你',
        effects: { mood: 4, money: -3000, stress: 3 }
      },
      {
        label: '問問同事，有沒有好的理財方式',
        hint: '把焦慮變成問題，就有了方向',
        effects: { social: 3, curiosity: 3, money: 1000 }
      }
    ]
  },
  {
    id: 'life_departure_021',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '匯款通知的那一天',
    text: '你站在銀行的ATM前，戶頭裡是人生第一筆完整的月薪。媽媽上次在電話裡說「不用啦，你自己留著」，你卻記得她的手機螢幕裂了半年沒修。畫面停在「轉帳金額」那一欄，數字跳動著。',
    tag: '職場｜家庭',
    once: true,
    cond: (S) => S.job !== null,
    opts: [
      {
        label: '轉了五千回去，附註「給阿嬤買水果」',
        hint: '長大的證明，是開始回報',
        effects: { money: -5000, family: 6, mood: 4 },
        chars: { mom: { rel: 5, met: true } }
      },
      {
        label: '全數存下來，先安頓自己的生活',
        hint: '把自己照顧好，也是孝順',
        effects: { independence: 4, family: -2, mood: 2 }
      },
      {
        label: '買一支新手機寄回家',
        hint: '她捨不得換的，你幫她換',
        effects: { money: -8000, family: 5, confidence: 2 },
        chars: { mom: { rel: 4, met: true } }
      },
      {
        label: '問媽媽要不要，等她說要再轉',
        hint: '有些心意，猶豫著就冷掉了',
        effects: { family: -3, stress: 3 }
      }
    ]
  },
  {
    id: 'life_departure_022',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '尾牙抽獎的最後一輪',
    text: '舞台上的電子看板滾動著名字，同桌的業務阿姨喊著「等一下，我要去廁所」，全場笑翻。主持人念到你的部門，聚光燈掃過來，獎項跳成一台平板電腦。老闆在台上補了一句「明年業績再翻倍，人人有獎。」',
    tag: '職場｜友情',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '把獎品讓給隔壁的資深同事，說「你比較需要」',
        hint: '一次讓利，存下一份人情',
        effects: { social: 5, mood: 5 },
        chars: { boss: { rel: 4, met: true } },
        thread: { type: 'settle', atAge: 28, sceneId: 'life_thread_004' }
      },
      {
        label: '開心拿回家，換掉用了五年的舊平板',
        hint: '努力一年的獎賞，值得被好好使用',
        effects: { mood: 6, independence: 2, tech: 2 }
      },
      {
        label: '託人代售，換成現金應急',
        hint: '務實的人，獎品也是資產',
        effects: { money: 6000, social: -2, mood: 2 }
      }
    ]
  },
  {
    id: 'life_departure_023',
    act: 'departure',
    stage: 'adult',
    minAge: 19,
    maxAge: 24,
    title: '茶水間的三分鐘',
    text: '午休的茶水間，隔壁部門的同事捧著便當盒蹲在飲水機旁，說「你是不是也覺得，上班像在坐牢」。你看著她桌上那包沒拆的胃藥，沒接話。外頭下起午後雷陣雨，雨聲蓋過辦公室的電話鈴。',
    tag: '職場｜友情',
    once: true,
    cond: (S) => S.job !== null || (S.education !== 'university' && S.education !== 'graduate'),
    opts: [
      {
        label: '蹲下來，陪她吃完那個便當',
        hint: '職場的溫度，常常在茶水間裡',
        effects: { social: 5, mood: 4 }
      },
      {
        label: '接幾句話，交換一句真心話',
        hint: '適度的靠近，讓上班不那麼硬',
        effects: { social: 4, stress: -3 }
      },
      {
        label: '笑一笑說「我去補個水」，快步離開',
        hint: '保護自己，也隔開了所有人',
        effects: { social: -3, stress: 3 }
      }
    ]
  },
  {
    id: 'life_departure_024',
    act: 'departure',
    stage: 'adult',
    minAge: 22,
    maxAge: 24,
    title: 'HR 的通知信',
    text: '週五傍晚，HR 的郵件躺在你的收件匣：「請於下週一上午九點，至二樓會議室。」部門謠傳裁員名單有一半是你這個職級。你關掉郵件，窗外夕陽正好，城裡的車流塞成一條長龍。',
    tag: '職場｜轉折',
    once: true,
    cond: (S) => S.job !== null,
    opts: [
      {
        label: '週末把履歷和作品集翻出來，全力投',
        hint: '把危機當成換軌的時刻',
        dice: {
          skill: 'tech',
          dc: 13,
          pass: { confidence: 6, stress: -4, money: 5000 },
          fail: { stress: 8, mood: -4 }
        }
      },
      {
        label: '先按兵不動，聽聽主管怎麼說',
        hint: '資訊不足時，別急著出牌',
        effects: { stress: 5, confidence: 2 }
      },
      {
        label: '打給摯友，說「我可能要被裁了」',
        hint: '無助時，朋友是最近的避風港',
        effects: { mood: 4, stress: -7, family: 3 },
        chars: { bestie: { rel: 6, met: true } }
      },
      {
        label: '主動找主管聊，爭取留下或調部門',
        hint: '最壞的結果，不會比沉默更糟',
        dice: {
          skill: 'leadership',
          dc: 14,
          pass: { confidence: 6, independence: 3, mood: 3 },
          fail: { stress: 6, confidence: -3 }
        },
        chars: { boss: { rel: 5, met: true } }
      }
    ]
  },
  {
    id: 'life_departure_025',
    act: 'departure',
    stage: 'adult',
    minAge: 23,
    maxAge: 24,
    title: '隔壁公司開出的條件',
    text: '獵頭把一張 offer 推到桌上：月薪多八千、週休二日、離你家兩站地鐵。但現在的主管昨天才說，下個月要提拔你帶一個小專案。兩張紙擺在你面前，一張是錢，一張是剛建立起來的信任。',
    tag: '職場｜抉擇',
    once: true,
    cond: (S) => S.job !== null,
    opts: [
      {
        label: '接受挖角，薪水優先',
        hint: '選擇更好的條件，是對自己的負責',
        effects: { money: 8000, confidence: 5, independence: 4, mood: 4 },
        chars: { boss: { rel: -3, met: true } }
      },
      {
        label: '留下來，接下主管的小專案',
        hint: '信任比薪水更難得，也值得投資',
        main: true,
        effects: { leadership: 5, confidence: 5, money: 3000 },
        chars: { boss: { rel: 6, met: true } }
      },
      {
        label: '兩邊都先談著，看誰更有誠意',
        hint: '同時踩兩條船，小心落水',
        warn: true,
        effects: { money: 12000, stress: 6, social: -3 },
        chars: { boss: { rel: -5, met: true } },
        thread: { type: 'settle', atAge: 30, sceneId: 'life_thread_005' }
      },
      {
        label: '打給摯友，聽聽她的意見',
        hint: '重要的決定，值得讓在乎的人參與',
        effects: { social: 3, mood: 3 },
        chars: { bestie: { rel: 4, met: true } }
      }
    ]
  }
];

export const DEPARTURE_MILESTONES = [
  {
    id: 'm_firstjob',
    age: 22,
    title: '第一份工作',
    text: '學士服的流蘇晃在風裡，你把自己的履歷看了最後一眼，按下「送出」。接下來，是決定你第一份工作的時刻——每一份選擇，都是你對自己未來的一張選票。',
    kind: 'choice',
    opts: [
      {
        label: '成為工程師，把第一支程式寫成職業',
        hint: '大學四年，值得一個程式語言的未來',
        need: { skill: 'math', min: 45, tech: 45 },
        setJob: { id: 'engineer', title: '工程師', salary: 42000, tier: '專業' },
        effects: { confidence: 4, independence: 4, curiosity: 3 }
      },
      {
        label: '站上講台，成為一名教師',
        hint: '把喜歡的事，變成穩定的事',
        need: { skill: 'language', min: 45 },
        setJob: { id: 'teacher', title: '教師', salary: 39000, tier: '專業' },
        effects: { confidence: 3, family: 3, social: 3 }
      },
      {
        label: '進事務所，做一名會計',
        hint: '數字的世界，需要精準的心',
        need: { skill: 'math', min: 40 },
        setJob: { id: 'accountant', title: '會計', salary: 36000, tier: '白領' },
        effects: { confidence: 3, independence: 3 }
      },
      {
        label: '用一支筆，做設計師',
        hint: '把想像力，變成可以交付的作品',
        need: { skill: 'arts', min: 40 },
        setJob: { id: 'designer', title: '設計師', salary: 35000, tier: '白領' },
        effects: { arts: 3, confidence: 3, mood: 3 }
      },
      {
        label: '跑業務，靠口才與膽識闖蕩',
        hint: '把「不怕被拒絕」練成本事',
        need: { stat: 'social', min: 50 },
        setJob: { id: 'sales', title: '業務', salary: 32000, tier: '白領' },
        effects: { social: 4, confidence: 4, money: 3000 }
      },
      {
        label: '進行銷，學會說故事',
        hint: '讓產品被看見，也是一種創作',
        need: { skill: 'language', min: 40 },
        setJob: { id: 'marketing', title: '行銷', salary: 34000, tier: '白領' },
        effects: { language: 3, curiosity: 3, mood: 3 }
      },
      {
        label: '當技術員，把手藝練到頂',
        hint: '專業不是只有白領才有',
        need: { skill: 'tech', min: 30 },
        setJob: { id: 'technician', title: '技術員', salary: 30000, tier: '基層' },
        effects: { tech: 4, independence: 3, health: 3 }
      },
      {
        label: '做行政助理，把細節當成專業',
        hint: '穩定的節奏，適合細心的人',
        need: { skill: 'language', min: 35 },
        setJob: { id: 'admin', title: '行政助理', salary: 29000, tier: '白領' },
        effects: { language: 3, social: 3, stress: -3 }
      },
      {
        label: '進服務業，磨出待人接物的功夫',
        hint: '服務業的第一課，是學會微笑',
        setJob: { id: 'service', title: '服務業人員', salary: 28000, tier: '基層' },
        effects: { social: 4, health: 3, money: 2000 }
      },
      {
        label: '繼續深造，兩年後換更高的起點',
        hint: '研究所的辛苦，會變成履歷上的底氣',
        need: { stat: 'curiosity', min: 40 },
        f: (S) => { S.education = 'graduate'; },
        effects: { curiosity: 5, stress: 5, confidence: 2 }
      }
    ]
  },
  {
    id: 'm_relationship',
    age: 24,
    title: '關係',
    text: '二十四歲的夏天，路邊的鳳凰木開得正好。有些心動拖了五年，有些默契早就超過了友情。你決定，是時候給自己的關係一個答案。',
    kind: 'choice',
    opts: [
      {
        label: '與大學時那個心動的人確認關係',
        hint: '有些心動拖了五年，該有答案了',
        need: { stat: 'confidence', min: 40 },
        setSpouse: 'partner',
        effects: { mood: 8, social: 4, family: 3 },
        chars: { crush: { rel: 8, met: true } }
      },
      {
        label: '與摯友昇華成更深的關係',
        hint: '最好的愛情，常常長在友誼裡',
        setSpouse: 'partner',
        effects: { mood: 6, social: 5 },
        chars: { bestie: { rel: 8, met: true } }
      },
      {
        label: '和 crush 好好道別，把美好留在那年夏天',
        hint: '有些故事，不一定要有結局',
        effects: { mood: -2, family: 3, independence: 3 },
        chars: { crush: { rel: 3, met: true } }
      },
      {
        label: '保持單身，把時間留給自己',
        hint: '一個人也可以把日子過得很滿',
        effects: { independence: 5, confidence: 3, mood: 3 }
      },
      {
        label: '專心衝事業，感情先放著',
        hint: '現在拼命工作，是為了將來的選擇權',
        effects: { confidence: 5, independence: 4, stress: -4 }
      }
    ]
  }
];
