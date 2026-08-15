/**
 * 人生冒險誌｜人生模擬器 — 伏筆場景（各幕觸發的回訪/清算/和解）
 * Produce By: CrazyRL7
 *
 * 依 .omo/spec.md §4/§7 撰寫。
 * 內容代理 J：THREAD_SCENES 為各幕觸發伏筆時要演的場景，
 * 依場景來源留下「多年前……」的呼應；act 標記為觸發當下應歸屬的幕。
 * 完整索引表已公告於 spec §13。
 */
export const THREAD_SCENES = [
  {
    id: 'life_thread_001',
    act: 'nest',
    stage: 'adult',
    minAge: 26,
    maxAge: 27,
    title: '舊課本裡夾著的一封信',
    text: '搬家打包，你在高中課本堆裡翻出一張泛黃的便條紙，是那年導師夾在作文簿裡還給你的：「跟不上是正常的，重要的是你沒有停下來。」字跡有些褪色。你忽然想起大二那個深夜，你躲在宿舍樓梯間打給他，說「我好像跟不上」，他在那頭安靜聽完，才回了一句：「我等你的電話，很久了。」如今你已經比那年的自己，多走了一萬步。',
    tag: '伏筆｜師長｜回訪',
    once: true,
    opts: [
      {
        label: '回訊息給老師，約他週末喝杯咖啡',
        hint: '有些感謝，隔了十年也要說出口',
        effects: { social: 4, mood: 5, confidence: 3 },
        chars: { teacher: { rel: 6, met: true } }
      },
      {
        label: '把便條紙貼回書桌，繼續往前走',
        hint: '把那句話帶在身上',
        effects: { confidence: 4, mood: 3, stress: -3 }
      },
      {
        label: '撥電話給讀大學的表弟，說「跟不上也沒關係」',
        hint: '把當年接住你的那句話，傳下去',
        effects: { social: 4, mood: 4, leadership: 3 }
      },
      {
        label: '把信收回箱子，沒有回覆',
        hint: '有些話，你選擇留在那一年',
        effects: { mood: -2, stress: 2 }
      }
    ]
  },
  {
    id: 'life_thread_002',
    act: 'nest',
    stage: 'adult',
    minAge: 30,
    maxAge: 31,
    title: '搬進新家的第三個紙箱',
    text: '三十歲這年，你搬進自己的房子。整理到第三個紙箱，滾出一張寫著字、邊角捲起的便條紙——二十歲那年的你，在宿舍頂樓的風裡，記下三件想做的事：考到駕照、存下第一桶金、跟家人去一趟墾丁。你一條一條讀完，才發現前兩件不知不覺都做到了，第三件卻一直停在紙上。',
    tag: '伏筆｜夢想｜回訪',
    once: true,
    opts: [
      {
        label: '當天撥電話回家：「這個月，去墾丁吧」',
        hint: '三件想做的事，別再讓它等',
        effects: { family: 6, mood: 5, money: -8000 }
      },
      {
        label: '把那張便條紙貼在新家的冰箱上',
        hint: '三十歲的起點，從記得自己開始',
        effects: { confidence: 4, mood: 3, curiosity: 3 }
      },
      {
        label: '在第二件事旁畫一顆星星，替自己蓋章',
        hint: '做到了的事，值得被慶祝',
        effects: { confidence: 5, mood: 4 }
      },
      {
        label: '笑一笑，把紙條放回箱子',
        hint: '有些夢想，翻出來看看就好',
        effects: { mood: -2, stress: 2 }
      }
    ]
  },
  {
    id: 'life_thread_003',
    act: 'nest',
    stage: 'adult',
    minAge: 27,
    maxAge: 28,
    title: '人才庫裡沉睡三年的名字',
    text: '週四下班前，人事轉來一封邀約，對方公司說是在人才庫看到你的資料，附了一句：「你三年前更新過履歷，怎麼一直沒再動過？」你想起那個末班捷運的深夜，你在車廂裡一字一句重寫履歷，車窗玻璃映著自己蒼白的臉。那個替自己留後路的你，終於收到了回音。',
    tag: '伏筆｜職涯｜回訪',
    once: true,
    opts: [
      {
        label: '赴約那杯咖啡，看看門後是什麼',
        hint: '留後路的你，等到了回音',
        dice: {
          skill: 'leadership',
          dc: 12,
          pass: { money: 8000, confidence: 5, stress: -3 },
          fail: { stress: 4, mood: -2 }
        }
      },
      {
        label: '婉拒邀約，專注手上的案子',
        hint: '不是每個門都要進去',
        effects: { stress: -3, mood: 3, confidence: 2 }
      },
      {
        label: '把邀約告知主管，坦承「有人找過我」',
        hint: '用誠實換信任',
        effects: { leadership: 5, confidence: 4 },
        chars: { boss: { rel: 5, met: true } }
      },
      {
        label: '更新履歷，但不赴約',
        hint: '把後路修好，繼續往前走',
        effects: { independence: 4, stress: -2 }
      }
    ]
  },
  {
    id: 'life_thread_004',
    act: 'nest',
    stage: 'adult',
    minAge: 28,
    maxAge: 29,
    title: '人情債的利息',
    text: '二十八歲，尾牙上那位資深同事找上你，語氣親切得不像在求人：「你人最好了，這個專案下個月要交，你幫我扛一下。」你忽然想起五年前那場尾牙，你把抽中的平板讓給了她，她笑著說「你人真好」。你現在才明白，那句話不是感謝，是欠條——而人情債，利息比房貸還高。',
    tag: '伏筆｜職場｜清算',
    once: true,
    opts: [
      {
        label: '幫她扛，但把分工寫清楚',
        hint: '幫人可以，吃虧不行',
        effects: { social: 2, leadership: 4, stress: 4, confidence: 3 }
      },
      {
        label: '婉拒，說自己手上也有專案',
        hint: '學會說不，是長大的一部分',
        effects: { confidence: 5, social: -3, stress: -3 }
      },
      {
        label: '直接攤牌：「你要用五年前的平板抵債？」',
        hint: '把話說開，感情帳才不會滾雪球',
        warn: true,
        effects: { confidence: 6, social: -6, stress: 2 }
      },
      {
        label: '先找主管報備，把工作量攤在陽光下',
        hint: '借主管的手，替自己撐傘',
        dice: {
          skill: 'leadership',
          dc: 13,
          pass: { leadership: 5, stress: -5, social: 2 },
          fail: { stress: 5, social: -4 }
        },
        chars: { boss: { rel: 4, met: true } }
      }
    ]
  },
  {
    id: 'life_thread_005',
    act: 'nest',
    stage: 'adult',
    minAge: 30,
    maxAge: 31,
    title: '兩把椅子都坐過的痕跡',
    text: '三十歲，升遷面談的會議室裡，主管把一份舊檔案推到桌上：「去年隔壁公司開給你的條件，你兩邊都在談，對吧？」你想起二十三歲那年那杯喝完就散的咖啡，兩邊都握著電話，說「看誰更有誠意」。此刻你才懂，同時踩兩條船的人，船不會等人選——它先沉的，就是你的那條。',
    tag: '伏筆｜職涯｜清算',
    once: true,
    opts: [
      {
        label: '承認當年的事，但說明你當時的考量',
        hint: '過去的取巧，不該是現在的枷鎖',
        dice: {
          skill: 'leadership',
          dc: 14,
          pass: { confidence: 6, leadership: 5, stress: -4 },
          fail: { stress: 6, confidence: -4 }
        },
        chars: { boss: { rel: -3, met: true } }
      },
      {
        label: '沉默，等主管先開口',
        hint: '有些問題，答得越急越錯',
        effects: { stress: 5, confidence: -2 }
      },
      {
        label: '用這三年的績效，證明自己已經不同',
        hint: '最好的辯解，是現在的成績',
        effects: { confidence: 5, mood: 3, stress: 4, money: 3000 }
      },
      {
        label: '重新打開那份 offer，認真考慮離開',
        hint: '當信任裂了，走也是一種選擇',
        effects: { independence: 5, stress: -3, mood: -2 }
      }
    ]
  },
  {
    id: 'life_thread_crush_reunion',
    act: 'nest',
    stage: 'adult',
    minAge: 23,
    maxAge: 29,
    title: '多年後的同一杯珍奶',
    text: '下午三點，老街的飲料店排隊人龍裡，你認出前面那個人的背影。他也回過頭，愣了一下，笑出來：「……好久不見。」空氣裡還是高中的味道——鳳凰花、運動會殘留的汗味、你始終沒說出口的那句話。你手裡的菜單，握得微微發熱。',
    tag: '伏筆｜初戀｜回訪',
    once: true,
    opts: [
      {
        label: '一起坐下，把當年沒說的話一次說清楚',
        hint: '有些話，遲到了也比沒有好',
        effects: { mood: 6, social: 4, confidence: 4, stress: -3 },
        chars: { crush: { rel: 8, met: true } }
      },
      {
        label: '聊近況就好，把那年留白',
        hint: '不勉強續上的故事，也很美',
        effects: { mood: 3, social: 3 },
        chars: { crush: { rel: 3, met: true } }
      },
      {
        label: '交換聯絡方式，約定「改天真的再見」',
        hint: '把重逢續成新的故事',
        effects: { mood: 5, curiosity: 3 },
        chars: { crush: { rel: 5, met: true } }
      },
      {
        label: '說「我還有事」，快步離開，像當年那樣',
        hint: '有些頁，你選擇永遠留白',
        warn: true,
        effects: { mood: -4, stress: 3, confidence: -3 }
      }
    ]
  },
  {
    id: 'life_thread_family_reconcile',
    act: 'nest',
    stage: 'adult',
    minAge: 30,
    maxAge: 31,
    title: '三十年後的那杯茶',
    text: '三十歲，媽媽生日，你訂了一桌餐廳。爸媽還是會拌嘴，但語氣裡的火氣，已經燒成日常的白開水。你忽然想起十五歲那晚，那杯摔在客廳的茶杯，和你站在樓梯口吼的那句「你們別吵了」。這天你趁媽媽去洗手間，跟爸爸舉杯：「以前的事，就算了吧。」他愣了一下，把酒乾了。',
    tag: '伏筆｜家人｜和解',
    once: true,
    opts: [
      {
        label: '等媽媽回來，也對她說一次「這些年辛苦了」',
        hint: '和解，是對兩個人都說',
        effects: { family: 7, mood: 5 },
        chars: { mom: { rel: 6, met: true } }
      },
      {
        label: '把當年那件事講開，讓三個人都有機會說話',
        hint: '舊帳翻出來，是為了結帳',
        dice: {
          skill: 'leadership',
          dc: 13,
          pass: { family: 6, confidence: 4, stress: -4 },
          fail: { family: -3, stress: 5 }
        },
        chars: { dad: { rel: 4, met: true }, mom: { rel: 4, met: true } }
      },
      {
        label: '不翻舊帳，讓這頓飯平平靜靜吃完',
        hint: '有些和好，不需要言語',
        effects: { family: 3, mood: 3, stress: -2 }
      },
      {
        label: '訂一間民宿，下次換你們三個一起去',
        hint: '用新的記憶，覆蓋舊的裂痕',
        effects: { family: 5, mood: 4, money: -5000 }
      }
    ]
  },
  {
    id: 'life_thread_006',
    act: 'departure',
    stage: 'adult',
    minAge: 24,
    maxAge: 25,
    title: '凌晨兩點半的牙痛',
    text: '二十四歲，凌晨兩點半，你被臼齒一陣鈍痛叫醒，痛得整個人蜷起來。藥局關了，急診要排隊。你想起來，國小每學期保健室那張「請帶至牙醫檢查」的通知單，都被你塞進書包最底層。那顆蛀了很久的牙，終於忍到再也裝不下去——它開始向你討利息了。',
    tag: '伏筆｜健康｜清算',
    once: true,
    opts: [
      {
        label: '天亮就掛號，做根管治療，一次了結',
        hint: '牙齒的債，拖越久越貴',
        effects: { money: -12000, health: 4, stress: -4 }
      },
      {
        label: '先吃止痛藥頂著，等發薪日再說',
        hint: '把帳單再延後一個月',
        effects: { money: -200, stress: 4, health: -2, mood: -2 }
      },
      {
        label: '直接拔掉，省錢省事',
        hint: '少一顆牙，是長遠的虧',
        warn: true,
        effects: { money: -5000, health: -3, mood: -3 }
      },
      {
        label: '趁年輕矯正牙齒，把多年的問題一次解決',
        hint: '大筆投資，換一口整齊的牙',
        effects: { money: -80000, health: 3, confidence: 4, stress: 3 }
      }
    ]
  },
  {
    id: 'life_thread_007',
    act: 'nest',
    stage: 'adult',
    minAge: 32,
    maxAge: 33,
    title: '安養院走廊的酸梅乾',
    text: '三十二歲，你陪阿嬤住進安養院。她坐在輪椅裡，認得出你，講話卻慢得像樹蔭裡的光。護理師說她午睡起來，總唸著「要包酸梅乾給孫子」。你從包包裡掏出路上買的那包酸梅乾——就像那年暑假，她從圍裙口袋掏出來給你的一樣。你忽然想坐下來，把以前嫌囉嗦的話，一次聽完。',
    tag: '伏筆｜家人｜和解',
    once: true,
    opts: [
      {
        label: '把酸梅乾一顆顆剝開，餵她吃，陪她坐一下午',
        hint: '把錯過的那些暑假，坐回來',
        effects: { family: 6, mood: 5, stress: -3 },
        chars: { elder: { rel: 7, met: true } }
      },
      {
        label: '推她到院子裡，講你現在的工作和生活',
        hint: '她聽不懂，但她喜歡聽',
        effects: { family: 5, social: 3, mood: 4 },
        chars: { elder: { rel: 5, met: true } }
      },
      {
        label: '幫她把平安符換上新的紅線，掛回床頭',
        hint: '小時候她保你平安，現在換你',
        effects: { family: 4, independence: 2, mood: 3 },
        chars: { elder: { rel: 4, met: true } }
      },
      {
        label: '待了半小時就說下次再來',
        hint: '下一次，不一定還有下一次',
        effects: { family: -3, mood: -3, stress: 3 }
      }
    ]
  },
  {
    id: 'life_thread_008',
    act: 'midlife',
    stage: 'midlife',
    minAge: 45,
    maxAge: 46,
    title: '會議室裡沒人出聲的那一分鐘',
    text: '四十五歲，部門裁員名單公布。名單裡有個盡責的同事，前天還在熬夜補你那份簡報的缺口。會議室裡一片安靜，沒人替他說話。你握著筆，忽然想起國小那個被全班排擠的同學——你也是那些低著頭的人之一。時隔三十年，同樣的沉默又回到你面前，只是這次，沉默的價碼高多了。',
    tag: '伏筆｜職場｜清算',
    once: true,
    opts: [
      {
        label: '舉手站起來，把事實說給主管聽',
        hint: '這次，不要再低頭',
        dice: {
          skill: 'leadership',
          dc: 14,
          pass: { leadership: 6, confidence: 5, social: 3 },
          fail: { stress: 7, social: -4 }
        },
        chars: { boss: { rel: -2, met: true } }
      },
      {
        label: '會後私下找主管，替他爭取緩衝期',
        hint: '一次對話，可能改變一個家庭',
        effects: { social: 4, confidence: 3, stress: 2 },
        chars: { boss: { rel: 3, met: true } }
      },
      {
        label: '幫他寫推薦信，讓他有地方可去',
        hint: '送他下一個路口，也是盡一份力',
        effects: { social: 5, mood: 4, independence: 2 }
      },
      {
        label: '沉默，像當年一樣',
        hint: '有些債，會一直記到你下次面對',
        warn: true,
        effects: { mood: -5, stress: 5, confidence: -4 }
      }
    ]
  },
  {
    id: 'life_thread_009',
    act: 'midlife',
    stage: 'midlife',
    minAge: 55,
    maxAge: 56,
    title: '病床前背出的第一句',
    text: '五十五歲，你回到母校側門那家老咖啡館，是因為導師的女兒傳訊息說「他住院了，一直唸著你」。病床上的老師認不出你的臉，卻在你坐下後，忽然背出你國中那篇作文的第一句：「阿嬤的蒲扇，扇走我一個暑假的蟬。」他唸完，眼睛亮了一下，像是想起你是誰。你很久沒這樣，當著人的面哭了。',
    tag: '伏筆｜師長｜回訪',
    once: true,
    opts: [
      {
        label: '把整篇作文一字一句唸完，唸給他聽',
        hint: '他記得的，你替他說',
        effects: { mood: 5, language: 4, family: 2 },
        chars: { teacher: { rel: 8, met: true } }
      },
      {
        label: '幫他整理床頭那疊舊講義',
        hint: '像當年他幫你改作文那樣',
        effects: { social: 4, mood: 3 },
        chars: { teacher: { rel: 5, met: true } }
      },
      {
        label: '打給當年的同學，把老師的病房號碼傳給大家',
        hint: '他教過的人，不只你一個',
        effects: { social: 5, mood: 4, leadership: 2 }
      },
      {
        label: '握著他的手，安靜陪他坐了一下午',
        hint: '不必說話，也足夠了',
        effects: { family: 4, mood: 4, stress: -4 }
      }
    ]
  },
  {
    id: 'life_thread_010',
    act: 'midlife',
    stage: 'midlife',
    minAge: 57,
    maxAge: 58,
    title: '健檢報告上的三排紅字',
    text: '五十七歲，健檢報告攤在桌上，心臟、肝、血糖三排紅字。醫生推了推眼鏡，語氣平淡：「這個年紀，身體開始要你償還年輕時的帳了。」你想起二十多歲那些末班捷運的夜晚、凌晨兩點的公司、會議室裡三份便當兩杯咖啡的日子。你一直以為身體是無限額度的信用卡，現在才發現，帳單早就寄到了。',
    tag: '伏筆｜健康｜清算',
    once: true,
    opts: [
      {
        label: '當場排定複診，把作息徹底改掉',
        hint: '現在開始，還還得完',
        effects: { health: 6, stress: -5, mood: 2 }
      },
      {
        label: '安排手術，把問題一次處理乾淨',
        hint: '用錢買時間，趁還來得及',
        effects: { money: -50000, health: 5, stress: 3 }
      },
      {
        label: '開始每天慢跑，不靠藥先靠自己',
        hint: '把欠身體的運動，慢慢還',
        effects: { health: 5, sport: 4, mood: 3 }
      },
      {
        label: '把報告塞回文件夾，繼續工作',
        hint: '紅字不會因為不看而消失',
        warn: true,
        effects: { health: -4, stress: 4, mood: -3 }
      }
    ]
  },
  {
    id: 'life_thread_011',
    act: 'nest',
    stage: 'adult',
    minAge: 35,
    maxAge: 36,
    title: '發黃的圖畫本',
    text: '三十五歲，整理舊物，你翻到一本邊角捲起的圖畫本——小時候的你畫滿整本的魚、火箭和會發光的房子，用色大膽得連現在的你都吃驚。你坐在紙箱邊，一張一張翻完，才發現那個愛畫畫的小孩，從來沒有真的離開，只是被「該做的事」埋進很深的抽屜。',
    tag: '伏筆｜天賦｜回訪',
    once: true,
    opts: [
      {
        label: '買一盒水彩，重新開始畫',
        hint: '你欠那個小孩一支筆',
        effects: { arts: 5, mood: 5, confidence: 3, curiosity: 3 }
      },
      {
        label: '報名一門週末的繪畫課',
        hint: '把時間還給自己',
        effects: { money: -15000, arts: 4, mood: 4, stress: -3 }
      },
      {
        label: '把最喜歡的那張裱起來，掛在客廳',
        hint: '讓過去的自己，住進現在的家',
        effects: { money: -2000, arts: 3, mood: 4, confidence: 3 }
      },
      {
        label: '蓋回箱子，繼續忙眼前的事',
        hint: '有些盒子，打開就是一種勇氣',
        effects: { mood: -2, stress: 2 }
      }
    ]
  }
];
