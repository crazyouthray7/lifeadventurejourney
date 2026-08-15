export const SCENES = [
  {
    id: 'life_midlife_001',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41, maxAge: 44,
    title: '上下夾擊的會議室',
    text: '會議室白板寫著明年業績要再成長百分之二十。老闆拍桌要你扛責任，下屬在群組抱怨工時太長。你的便當還躺在桌上，涼了，蓋子沒開過。',
    tag: '職涯｜壓力',
    once: true,
    opts: [
      { label: '把目標拆成可執行的階段，逐項分配', hint: '靠方法，不靠蠻力', dice: { skill: 'leadership', dc: 14, pass: { confidence: 6, stress: -5, social: 4 }, fail: { stress: 8, confidence: -2 } }, chars: { boss: { rel: 4, met: true } } },
      { label: '約下屬吃頓飯，聽聽他們卡在哪裡', hint: '先解決人，再解決事', effects: { social: 6, mood: 4, stress: -3 }, chars: { boss: { rel: 2, met: true } } },
      { label: '自己留下來把活扛完', hint: '熬夜換一時平安', effects: { confidence: 3, stress: 9, health: -3, mood: -4 } },
      { label: '開會時沉默，能拖就拖', hint: '暫時躲開炮火', effects: { stress: 6, confidence: -4, family: -3 } }
    ]
  },
  {
    id: 'life_midlife_002',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41, maxAge: 45,
    title: '新人的簡報',
    text: '新同事用一套你沒碰過的工具，二十分鐘做完你忙了一週的報表。總經理在會議上點名誇他「後生可畏」，你坐在原位，指尖發涼。',
    tag: '職涯｜失落',
    once: true,
    opts: [
      { label: '會後拉下臉請教他這套工具', hint: '面子換能力', effects: { curiosity: 6, tech: 5, stress: -3, confidence: -2 } },
      { label: '下班偷偷報名課程追上', hint: '用自己的時間補', effects: { money: -3000, tech: 6, stress: 4, curiosity: 3 } },
      { label: '主動提案和他合組專案，互相補位', hint: '把競爭變成合作', dice: { skill: 'leadership', dc: 13, pass: { social: 6, confidence: 5, mood: 4 }, fail: { stress: 4, confidence: -3 } }, chars: { boss: { rel: 5, met: true } } },
      { label: '嘴上恭喜，心裡把他當假想敵', hint: '悶著不說', effects: { stress: 7, mood: -5, social: -3 } }
    ]
  },
  {
    id: 'life_midlife_003',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41, maxAge: 46,
    title: '那扇又關上的房門',
    text: '孩子的房門在晚餐後砰地關上，碗筷動都沒動。你敲了兩下門，她隔著門喊「不要管我」。走廊那頭，伴侶搖了搖頭，眼神無奈。',
    tag: '家庭｜親子',
    once: true,
    opts: [
      { label: '隔著門說「飯在桌上，餓了自己盛」', hint: '把門留著，也把路留著', effects: { family: 5, mood: 2 }, chars: { child: { rel: 4, met: true } } },
      { label: '推門進去，今晚把話講清楚', hint: '對峙或溝通，一翻兩瞪眼', warn: true, dice: { skill: 'leadership', dc: 15, pass: { family: 6, confidence: 5, stress: -4 }, fail: { family: -8, stress: 8 } }, chars: { child: { rel: -5, met: true } } },
      { label: '請伴侶先聊聊，你們約好明天一起談', hint: '夫妻先同一陣線', effects: { family: 5, stress: -3, social: 3 }, chars: { partner: { rel: 5, met: true } } },
      { label: '把脾氣吞回去，等她氣消', hint: '忍一時風平浪靜', effects: { stress: 5, mood: -3, family: 2 } }
    ]
  },
  {
    id: 'life_midlife_004',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41, maxAge: 48,
    title: '客廳的電視聲',
    text: '週末午後，你們並肩坐在客廳，電視播著重播的韓劇。她打了個呵欠，你滑手機。兩個小時過去，你們說的話湊不滿十句。',
    tag: '家庭｜婚姻',
    once: true,
    opts: [
      { label: '牽起她的手，問她記不記得第一次約會', hint: '先伸出手的那個人', effects: { family: 6, mood: 6 }, chars: { partner: { rel: 6, met: true } } },
      { label: '關掉電視，拉她去吃那家老店', hint: '用行動打破安靜', effects: { money: -2000, family: 5, mood: 5 }, chars: { partner: { rel: 5, met: true } } },
      { label: '攤開來問：我們最近是不是怪怪的', hint: '冒險談一次真心話', dice: { skill: 'leadership', dc: 13, pass: { family: 8, stress: -5, mood: 3 }, fail: { family: -5, stress: 5 } }, chars: { partner: { rel: 6, met: true } } },
      { label: '繼續滑手機，日子就是這樣', hint: '至少平安', effects: { family: -3, stress: 4, mood: -3 } }
    ]
  },
  {
    id: 'life_midlife_005',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41, maxAge: 50,
    title: '把傘遞給雨裡的人',
    text: '部門來了個新人，簡報講得結結巴巴，主管當眾叫他重做。你看見他紅了眼眶，想起二十年前第一次上台的那個自己。',
    tag: '職涯｜傳承',
    once: true,
    opts: [
      { label: '私下教他怎麼架簡報，給他練一次', hint: '把學到的傳下去', dice: { skill: 'leadership', dc: 12, pass: { social: 6, mood: 5, confidence: 4 }, fail: { stress: 3, mood: -2 } }, chars: { boss: { rel: 3, met: true } } },
      { label: '私下告訴他「我也跌過，沒事的」', hint: '先接住人，再談方法', effects: { social: 6, mood: 6 }, chars: { boss: { rel: 2, met: true } } },
      { label: '幫他向主管爭取一次重上台的機會', hint: '承擔一點風險替人擋', dice: { skill: 'leadership', dc: 15, pass: { confidence: 6, leadership: 6, mood: 4 }, fail: { stress: 6, confidence: -3 } }, chars: { boss: { rel: 5, met: true } } },
      { label: '自掃門前雪，裝作沒看到', hint: '職場本就不是慈善事業', effects: { stress: -2, social: -4, mood: -2 } }
    ]
  },
  {
    id: 'life_midlife_006',
    act: 'midlife',
    stage: 'midlife',
    minAge: 45, maxAge: 49,
    title: '空了的房間',
    text: '你幫孩子把最後一箱行李搬上車，宿舍離家三百公里。回來推開她的房門，書桌空了，棉被摺得整整齊齊。你坐在她床沿，一時不知道該做什麼。',
    tag: '家庭｜空巢',
    once: true,
    opts: [
      { label: '從床頭櫃翻出她小時候的照片，一張張看', hint: '讓想念有地方放', effects: { family: 6, mood: -3 }, chars: { child: { rel: 5, met: true } } },
      { label: '打電話給伴侶：「晚上出去走走？」', hint: '空巢是兩人的事', effects: { family: 5, mood: 5 }, chars: { partner: { rel: 5, met: true } } },
      { label: '慢慢把房間整理成書房，留一格放她的東西', hint: '日子繼續，位置留著', effects: { family: 4, mood: 2, independence: 3 } },
      { label: '關上門，假裝她只是去補習', hint: '不看不碰，就不會痛', effects: { stress: 5, family: -3, mood: -5 } }
    ]
  },
  {
    id: 'life_midlife_007',
    act: 'midlife',
    stage: 'midlife',
    minAge: 45, maxAge: 48,
    title: '紅色星號',
    text: '體檢報告攤在桌上，血糖、血脂的欄位各畫了一個紅色星號。護理師在電話裡說「建議回診」，語氣很平淡，你的胃卻開始發緊。',
    tag: '健康｜警訊',
    once: true,
    opts: [
      { label: '掛號回診，把該查的都查清楚', hint: '面對它才能處理它', effects: { health: 5, stress: -5, money: -3000 } },
      { label: '買雙好鞋，開始每天快走，戒掉宵夜', hint: '先從小事改起', effects: { health: 8, sport: 5, mood: 3, stress: 2 } },
      { label: '買個血糖機自己紀錄，觀察三個月', hint: '用數據說服自己', effects: { health: 4, curiosity: 4, tech: 3 } },
      { label: '把報告塞進抽屜，當作沒這回事', hint: '不看就不存在', effects: { stress: 8, health: -6, mood: -3 } }
    ]
  },
  {
    id: 'life_midlife_008',
    act: 'midlife',
    stage: 'midlife',
    minAge: 43, maxAge: 47,
    title: '註冊單上的數字',
    text: '孩子的註冊單躺在玄關鞋櫃上。學雜費加宿舍費，一個數字抵掉你一個月薪水。你開著小夜燈算到凌晨一點，存款簿上的餘額默默回答你。',
    tag: '財務｜教育',
    once: true,
    opts: [
      { label: '咬牙一次付清，週末再兼差補回來', hint: '先撐過這一關', effects: { money: -150000, stress: 8, independence: 3, mood: -3 } },
      { label: '跟孩子坐下來談助學貸款與獎學金', hint: '家裡的難處，她也該知道', effects: { money: -60000, family: 6, confidence: 3, stress: -4 }, chars: { child: { rel: 4, met: true } } },
      { label: '和伴侶重新算預算，砍掉非必要開銷', hint: '兩個人的帳，一起面對', effects: { money: -60000, family: 4, stress: -3 }, chars: { partner: { rel: 4, met: true } } },
      { label: '先刷卡付掉，下個月的事下個月想', hint: '把問題延後', effects: { money: -90000, stress: 8, mood: -4 } }
    ]
  },
  {
    id: 'life_midlife_009',
    act: 'midlife',
    stage: 'midlife',
    minAge: 44, maxAge: 47,
    title: '藥袋上的六種藥',
    text: '媽媽的腿腫得下不了床，爸爸陪診時在走廊彎著腰，像被什麼壓垮了。你請了半天假，從診間窗口接過藥袋，上面印著六種藥名。',
    tag: '家庭｜照護',
    once: true,
    opts: [
      { label: '排開工作，先把這次回診陪完', hint: '有些時間錯過就沒了', effects: { family: 8, stress: 6, mood: 3 }, chars: { mom: { rel: 6, met: true }, dad: { rel: 5, met: true } } },
      { label: '約手足和伴侶開家庭會議，排輪班表', hint: '照護不能一個人扛', effects: { social: 5, stress: -4, family: 6 }, chars: { partner: { rel: 4, met: true } } },
      { label: '申請長照評估，把資源先準備起來', hint: '把專業的事交給專業', effects: { stress: -3, money: -20000, family: 3 }, chars: { mom: { rel: 3, met: true } } },
      { label: '出醫藥費、幫掛號，然後回公司上班', hint: '錢能到的就到，人先缺席', effects: { money: -20000, family: -4, stress: 6, mood: -4 }, chars: { mom: { rel: -3, met: true } } }
    ]
  },
  {
    id: 'life_midlife_010',
    act: 'midlife',
    stage: 'midlife',
    minAge: 44, maxAge: 48,
    title: '深夜投出的履歷',
    text: '老同事轉介一個機會，薪水少兩成，卻是你一直想做的事。深夜十二點，游標停在送出鍵上，閃了又閃，窗外偶爾過去一台車。',
    tag: '職涯｜轉折',
    once: true,
    opts: [
      { label: '按下送出，為自己想做的事賭一次', hint: '機會不會等人', need: { stat: 'confidence', min: 40 }, dice: { skill: 'confidence', dc: 14, pass: { mood: 8, curiosity: 6, independence: 5 }, fail: { stress: 8, mood: -6 } } },
      { label: '先把薪水差額和家庭開銷攤開算清楚', hint: '勇氣也要有地基', effects: { confidence: 3, stress: -3, family: 3 } },
      { label: '問伴侶：「你覺得我該去嗎？」', hint: '把決定變成兩人的事', effects: { family: 6, mood: 4 }, chars: { partner: { rel: 6, met: true } } },
      { label: '關掉視窗，繼續現在的生活', hint: '至少現在是安穩的', effects: { confidence: -4, stress: 4, mood: -3 } }
    ]
  },
  {
    id: 'life_midlife_011',
    act: 'midlife',
    stage: 'midlife',
    minAge: 46, maxAge: 50,
    title: '巷口的頂讓單',
    text: '常去的早餐店老闆遞來一張頂讓單：「我老了，你想不想接？」你夾著筷子的手停在半空。牆上的掛曆還是十年前印的。',
    tag: '職涯｜創業',
    once: true,
    opts: [
      { label: '頂下來，假日自己顧店', hint: '自己當老闆，也自己扛風險', warn: true, need: { stat: 'confidence', min: 45 }, dice: { skill: 'leadership', dc: 16, pass: { money: 60000, mood: 8, independence: 8, stress: 5 }, fail: { money: -60000, stress: 10, mood: -6 } } },
      { label: '先借三個月的帳來看，再請會計朋友算', hint: '用數字代替衝動', effects: { math: 4, confidence: 4, stress: -3, social: 3 } },
      { label: '跟老闆談合夥：他教，你出錢出力', hint: '用別人的經驗補自己的不足', effects: { money: -30000, leadership: 4, social: 4, stress: 3 } },
      { label: '婉拒，說自己不是這塊料', hint: '安穩有時也是選擇', effects: { mood: -4, confidence: -5, stress: -2 } }
    ]
  },
  {
    id: 'life_midlife_012',
    act: 'midlife',
    stage: 'midlife',
    minAge: 45, maxAge: 52,
    title: '爬不動的那段樓梯',
    text: '新辦公室在五樓，沒有電梯。你爬到三樓就得扶著欄杆喘氣，等心跳慢下來。年輕的同事三步併兩步，從你身邊颼颼走過去。',
    tag: '健康｜體力',
    once: true,
    opts: [
      { label: '報名健身房，固定一週三次', hint: '把體力當成投資', effects: { health: 8, sport: 6, money: -12000, mood: 4 } },
      { label: '每天提早一站下車，走路上班', hint: '零成本的運動', effects: { health: 4, sport: 4, mood: 2 } },
      { label: '從此能坐就坐、能搭車就搭車', hint: '讓它去吧', effects: { health: -4, stress: -2, money: -30000 } },
      { label: '揪伴侶一起晨走公園', hint: '運動也可以是約會', effects: { health: 5, family: 5, mood: 5 }, chars: { partner: { rel: 3, met: true } } }
    ]
  },
  {
    id: 'life_midlife_013',
    act: 'midlife',
    stage: 'midlife',
    minAge: 46, maxAge: 52,
    title: '醫療卡與自費單',
    text: '爸爸的住院通知下來，一般病房要等，自費單上寫著病房一晚八千。你站在批價櫃檯前，後面的隊伍輕輕嘆了一口氣。',
    tag: '財務｜照護',
    once: true,
    opts: [
      { label: '咬牙刷下去，讓爸爸住得舒服', hint: '錢再賺就有，時間不等人', effects: { money: -30000, family: 6, stress: 6, mood: -2 }, chars: { dad: { rel: 5, met: true } } },
      { label: '排一般病房，先請看護頂著', hint: '折衷的做法', effects: { money: -12000, stress: 3, family: 2 }, chars: { dad: { rel: 2, met: true } } },
      { label: '跟手足談好分攤比例，一起扛', hint: '這家是大家的', effects: { social: 4, money: -15000, stress: -4, family: 4 } },
      { label: '在醫院走廊站了很久，忽然掉眼淚', hint: '有些壓力總要洩出來', effects: { mood: -4, stress: -8, family: 5 } }
    ]
  },
  {
    id: 'life_midlife_014',
    act: 'midlife',
    stage: 'midlife',
    minAge: 48, maxAge: 53,
    title: '離手三十公分',
    text: '路邊攤的菜單字很小，你往後伸直手臂才看得清。老闆補了一句「字比較小」，你愣了一下——第一個念頭是「我老了」。',
    tag: '健康｜身體',
    once: true,
    opts: [
      { label: '去眼鏡行配一副老花眼鏡', hint: '認老，也善待自己', effects: { health: 4, mood: 2, money: -4000 } },
      { label: '順便做一次完整的眼睛檢查', hint: '看歲月的同時，也看看隱患', effects: { health: 6, money: -6000, stress: -3 } },
      { label: '傳訊息給老友：「你最近也這樣嗎」', hint: '讓同輩陪你一起老', effects: { social: 5, mood: 5 }, chars: { bestie: { rel: 5, met: true } } },
      { label: '嘴硬說「只是燈光太暗」', hint: '打死不承認', effects: { stress: 3, mood: -2, health: -3 } }
    ]
  },
  {
    id: 'life_midlife_015',
    act: 'midlife',
    stage: 'midlife',
    minAge: 46, maxAge: 52,
    title: '凌晨三點的電話',
    text: '凌晨三點，手機響了。媽媽在電話那頭哭著說，爸爸走了。你趕到醫院，他床邊的儀器已經關掉，臉上是鬆了一口氣的表情。他的口袋裡還留著早上那個藥袋。',
    tag: '家庭｜告別',
    once: true,
    opts: [
      { label: '握住他的手，把沒來得及說的話都說一遍', hint: '也許他聽得到', effects: { mood: -6, family: 8, stress: -6 }, chars: { dad: { rel: 8, met: true }, mom: { rel: 4, met: true } }, setParent: { dad: 'passed' } },
      { label: '打起精神，替媽媽處理後事、跑文件', hint: '還有活著的人要顧', effects: { family: 6, stress: 6, confidence: 3 }, chars: { mom: { rel: 6, met: true } }, setParent: { dad: 'passed' } },
      { label: '找到他修好的那台老腳踏車，擦乾淨', hint: '把想念放在具體的事上', effects: { mood: -5, family: 5 }, chars: { dad: { rel: 5, met: true } }, setParent: { dad: 'passed' } },
      { label: '躲進廁所，讓別人去面對', hint: '眼淚在關上的門裡', effects: { stress: 8, family: -5, mood: -6 }, setParent: { dad: 'passed' } }
    ]
  },
  {
    id: 'life_midlife_016',
    act: 'midlife',
    stage: 'midlife',
    minAge: 48, maxAge: 52,
    title: '週一早晨的紅燈',
    text: '星期一早上，你開車停在紅燈前，突然不想轉綠燈。辦公室的椅子坐下去就陷進同一個坑，桌上文件的高度二十年沒變過。',
    tag: '職涯｜倦怠',
    once: true,
    opts: [
      { label: '請三天假，一個人去海邊住民宿', hint: '先離開，才能看清楚', effects: { money: -15000, mood: 8, stress: -8, curiosity: 4 } },
      { label: '跟主管攤牌，談工作內容與壓力', hint: '把倦怠放到檯面上', need: { stat: 'confidence', min: 45 }, dice: { skill: 'confidence', dc: 14, pass: { confidence: 5, stress: -6, mood: 4 }, fail: { stress: 7, confidence: -3 } }, chars: { boss: { rel: 3, met: true } } },
      { label: '找老友喝一杯，吐吐苦水', hint: '苦水也要有人聽', effects: { social: 5, mood: 5, stress: -4 }, chars: { bestie: { rel: 4, met: true } } },
      { label: '撐著，反正大家都這樣過', hint: '最安全的，也最磨人', effects: { stress: 7, mood: -5, health: -3 } }
    ]
  },
  {
    id: 'life_midlife_017',
    act: 'midlife',
    stage: 'midlife',
    minAge: 50, maxAge: 54,
    title: '養護中心的午後',
    text: '你去看住院的祖父。他坐在窗邊，認得你的臉，叫出的卻是你小時候的乳名。護理師說他今天心情好，多吃了半碗粥。你替他削了一顆梨。',
    tag: '家庭｜和解',
    once: true,
    opts: [
      { label: '陪他坐到太陽下山，聽他講從前的故事', hint: '他記得的，多半是好的', effects: { family: 6, mood: 4, stress: -4 }, chars: { elder: { rel: 8, met: true } } },
      { label: '替他整理相冊，把照片按年份排好', hint: '為他留住時間', effects: { family: 6, mood: 3, arts: 3 }, chars: { elder: { rel: 6, met: true } } },
      { label: '問他有沒有想說卻一直沒說的話', hint: '趁還聽得見', dice: { skill: 'leadership', dc: 13, pass: { family: 8, mood: 5, stress: -5 }, fail: { mood: -3, stress: 3 } }, chars: { elder: { rel: 7, met: true } } },
      { label: '放下禮物就趕回公司，說下次再來', hint: '下次是什麼時候', effects: { family: -4, stress: 2, mood: -4 } }
    ]
  },
  {
    id: 'life_midlife_018',
    act: 'midlife',
    stage: 'midlife',
    minAge: 48, maxAge: 54,
    title: '白色玫瑰花籃',
    text: '高中同學的追思會，你穿黑西裝站在隊伍裡。他上個月還在群組說要約爬山。花籃上的白玫瑰很香，香得你幾乎喘不過氣。',
    tag: '人生｜失落',
    once: true,
    opts: [
      { label: '走到家屬面前，握著他們的手，說不出一句話', hint: '陪悲傷的人站一下', effects: { social: 5, mood: -3, confidence: 4 } },
      { label: '在簽名簿上寫下你們最後的約定：「山還沒爬。」', hint: '把沒做完的事寫下來', effects: { mood: -4, social: 4 } },
      { label: '散場後約幾個老同學吃飯，聊他生前的事', hint: '記得他活過的樣子', effects: { social: 7, mood: 2 }, chars: { bestie: { rel: 5, met: true } } },
      { label: '把車停在路邊哭了一場', hint: '眼淚是遲到的儀式', effects: { mood: -6, stress: -8, health: 2 } }
    ]
  },
  {
    id: 'life_midlife_019',
    act: 'midlife',
    stage: 'midlife',
    minAge: 50, maxAge: 55,
    title: '二十年後的火車站',
    text: '摯友從北方調回南方，你們約在火車站前的糖水攤。她頭髮短了，笑聲沒變。她遞給你的名片的頭銜很長，你們卻還是點了一碗一樣的紅豆湯。',
    tag: '人生｜友情',
    once: true,
    opts: [
      { label: '跟老闆加一碗粉圓，說「帳算我的」', hint: '有些情分不用算', effects: { social: 6, mood: 6, money: -500 }, chars: { bestie: { rel: 8, met: true } } },
      { label: '講起各自這些年摔過的跤，笑成一團', hint: '能說出來的痛，都過了', effects: { social: 7, mood: 7, stress: -4 }, chars: { bestie: { rel: 7, met: true } } },
      { label: '邀她下個月一起去爬山，把高中約定補上', hint: '當年那句「下次」終於能兌現', effects: { sport: 3, social: 5, mood: 5, health: 3 }, chars: { bestie: { rel: 6, met: true } } },
      { label: '聊到一半，手機響了，你說先走', hint: '成年人的時間總是不夠', effects: { social: -4, mood: -3, stress: 3 } }
    ]
  },
  {
    id: 'life_midlife_020',
    act: 'midlife',
    stage: 'midlife',
    minAge: 50, maxAge: 55,
    title: '最後一張繳款單',
    text: '銀行通知房貸剩下最後十二期。你翻出二十年前的第一張繳款單，上面的數字還是手寫的。同一間房子，孩子在你懷裡長到會頂嘴，再到自己收行李。',
    tag: '財務｜家庭',
    once: true,
    opts: [
      { label: '把剩下的房貸一次還清', hint: '還的不是錢，是安心', effects: { money: -300000, stress: -10, family: 4, mood: 5 } },
      { label: '按月繳完，多出來的錢拿去投資', hint: '讓錢繼續幫你工作', effects: { money: 50000, confidence: 3, curiosity: 3 } },
      { label: '把客廳重新粉刷，慶祝貸款還完', hint: '給房子一個新開始', effects: { money: -30000, mood: 6, family: 4 }, chars: { partner: { rel: 4, met: true } } },
      { label: '跟孩子說：這間房子以後是你們的根', hint: '把家的意思說清楚', effects: { family: 6, mood: 3 }, chars: { child: { rel: 4, met: true } } }
    ]
  },
  {
    id: 'life_midlife_021',
    act: 'midlife',
    stage: 'midlife',
    minAge: 50, maxAge: 56,
    title: '理專的白板',
    text: '理財專員在白板上畫退休金缺口：你六十歲時想維持現在的生活，每月還差兩萬。他問你風險承受度，你想到房貸、孩子的婚禮、爸媽的藥費，說不出話。',
    tag: '財務｜規劃',
    once: true,
    opts: [
      { label: '把月薪兩成定期定額投入穩健標的', hint: '慢慢來，比較快', dice: { skill: 'math', dc: 12, pass: { money: 20000, confidence: 4, stress: -3 }, fail: { money: -10000, stress: 3 } } },
      { label: '買儲蓄險與長照險，把風險先鎖住', hint: '替未來的自己買保險', effects: { money: -120000, stress: -6, family: 3 }, chars: { partner: { rel: 3, met: true } } },
      { label: '學著看懂財報，自己管理投資', hint: '錢不假手他人', effects: { math: 5, curiosity: 5, confidence: 3, stress: 3 } },
      { label: '聽理專的建議，一次投入高報酬商品', hint: '賭一把大的', warn: true, dice: { skill: 'math', dc: 17, pass: { money: 150000, mood: 8, confidence: 5 }, fail: { money: -150000, stress: 9, mood: -6 } } }
    ]
  },
  {
    id: 'life_midlife_022',
    act: 'midlife',
    stage: 'midlife',
    minAge: 50, maxAge: 55,
    title: '結婚紀念日的空位',
    text: '結婚紀念日，你在餐廳訂了位。她遲到二十分鐘，說主管臨時開會。她坐下時疲憊地笑了一下，你忽然發現，你們很久沒有這樣單獨吃一頓飯了。',
    tag: '家庭｜婚姻',
    once: true,
    opts: [
      { label: '關掉手機，這一晚只談你們的事', hint: '把時間留給眼前的人', effects: { family: 7, mood: 7 }, chars: { partner: { rel: 7, met: true } } },
      { label: '把燭光晚餐的錢省下，改訂下個月的小旅行', hint: '把儀式感存起來用', effects: { money: -20000, family: 6, mood: 6, curiosity: 4 }, chars: { partner: { rel: 6, met: true } } },
      { label: '坦白說：「孩子不在，家裡突然好安靜」', hint: '說出空巢後真實的感受', effects: { family: 6, mood: 4, stress: -4 }, chars: { partner: { rel: 6, met: true } } },
      { label: '吃完飯各自回去，跟平常一樣', hint: '習慣也是一種安穩', effects: { family: -3, mood: -3, stress: 2 } }
    ]
  },
  {
    id: 'life_midlife_023',
    act: 'midlife',
    stage: 'midlife',
    minAge: 52, maxAge: 58,
    title: '菜市場的清晨',
    text: '你陪媽媽去菜市場。她走得慢，從前是她牽你，現在你攙她。她在肉攤前殺價的氣場沒變，轉過身卻問你「你有沒有好好吃飯」，像你還是當年那個小孩。',
    tag: '家庭｜和解',
    once: true,
    opts: [
      { label: '告訴她「以後換我照顧你」', hint: '把角色接過來', effects: { family: 8, mood: 5 }, chars: { mom: { rel: 8, met: true } } },
      { label: '挽著她的手，慢慢逛完整條街', hint: '時間本來就該慢慢走', effects: { family: 7, health: 3, mood: 5 }, chars: { mom: { rel: 7, met: true } } },
      { label: '為年輕時頂過的嘴，說一聲對不起', hint: '和解不需要再等', dice: { skill: 'confidence', dc: 13, pass: { family: 10, mood: 6, stress: -6 }, fail: { mood: -2, stress: 3 } }, chars: { mom: { rel: 8, met: true } } },
      { label: '買完菜就各自回家，話不多', hint: '有些感情在心裡就好', effects: { family: 2, stress: 2 } }
    ]
  },
  {
    id: 'life_midlife_024',
    act: 'midlife',
    stage: 'midlife',
    minAge: 52, maxAge: 58,
    title: '視訊那頭的小套房',
    text: '孩子放長假回家，這次沒要你接送，自己訂了高鐵。晚餐時她說起宿舍、社團、打工的老闆，話比以前多。你聽著，忽然覺得她長成了一個你不認識、卻替他高興的人。',
    tag: '家庭｜親子',
    once: true,
    opts: [
      { label: '好好聽她說，不打斷、不給建議', hint: '她需要的是聽眾', effects: { family: 8, mood: 6 }, chars: { child: { rel: 7, met: true } } },
      { label: '跟她約定：以後大人的事，你可以自己做主', hint: '放手是最難的愛', effects: { family: 7, independence: 5, confidence: 4 }, chars: { child: { rel: 6, met: true } } },
      { label: '帶她去吃小時候最愛的那家麵店', hint: '味道是回家的路', effects: { family: 6, mood: 5 }, chars: { child: { rel: 5, met: true } } },
      { label: '忍不住問東問西，問到她又皺眉', hint: '關心一不小心就變成嘮叨', effects: { family: -3, stress: 3, mood: -2 }, chars: { child: { rel: -3, met: true } } }
    ]
  },
  {
    id: 'life_midlife_025',
    act: 'midlife',
    stage: 'midlife',
    minAge: 54, maxAge: 60,
    title: '清晨五點半的公園',
    text: '你開始晨跑後，第一次跑完三公里沒有停下來。汗濕了背，心跳聲在耳朵裡，你想起三十歲那年還嘲笑過「老年生活」。現在你在公園長椅坐下，太陽剛好照到腳邊。',
    tag: '健康｜運動',
    once: true,
    opts: [
      { label: '買支心率錶，把運動數據記錄起來', hint: '給自己可見的回饋', effects: { health: 6, sport: 5, tech: 3, money: -5000 } },
      { label: '加入公園的慢跑團，認識同齡人', hint: '一個人跑，不如一群人跑', effects: { health: 5, sport: 4, social: 6, mood: 4 } },
      { label: '把這個習慣傳給朋友和家人', hint: '好習慣也是禮物', effects: { health: 4, social: 5, family: 4 }, chars: { partner: { rel: 4, met: true } } },
      { label: '跑一次就喊累，回到從前的生活方式', hint: '改變從來不容易', effects: { health: -3, stress: 2, mood: -2 } }
    ]
  },
  {
    id: 'life_midlife_invest_001',
    act: 'midlife',
    stage: 'midlife',
    minAge: 40,
    maxAge: 48,
    title: '茶水間裡的股市話題',
    text: '午休時間，茶水間擠滿了人，大家都在滑手機看盤。同事湊過來說「最近那支飆股你買了嗎」，另一個說他同事的同事賺了一台車。你手機裡的通知欄，正好跳出證券戶的登入提醒。',
    tag: '金錢｜投資',
    once: true,
    opts: [
      { label: '研究財報，挑穩健的藍籌股慢慢買', hint: '用時間換複利', dice: { skill: 'math', dc: 13, pass: { money: 120000, confidence: 4, mood: 3 }, fail: { money: -30000, stress: 4 } } },
      { label: '跟風追那支飆股，賭一把', hint: '高風險，高報酬', warn: true, dice: { skill: 'math', dc: 17, pass: { money: 350000, mood: 8 }, fail: { money: -150000, stress: 8, mood: -6 } } },
      { label: '開一個定期定額，強迫自己存錢', hint: '最無聊，也最穩', effects: { money: -60000, confidence: 3, stress: -2 } },
      { label: '不碰股票，把錢放在定存', hint: '少賺，但心安', effects: { money: 20000, stress: -3 } }
    ]
  },
  {
    id: 'life_midlife_invest_002',
    act: 'midlife',
    stage: 'midlife',
    minAge: 42,
    maxAge: 50,
    title: '理財專員的電話',
    text: '理財專員打來，語氣熱絡地介紹一檔「穩健成長型」基金，說過去五年年化報酬不錯，還說現在申購有優惠。你手上正好有一筆閒錢，是去年年終獎金剩下來的。',
    tag: '金錢｜理財',
    once: true,
    opts: [
      { label: '申購基金，讓專業經理人操盤', hint: '把錢交給專業', dice: { skill: 'math', dc: 12, pass: { money: 80000, confidence: 3 }, fail: { money: -40000, stress: 4 } } },
      { label: '先查基金績效與費用再決定', hint: '魔鬼藏在細節裡', dice: { skill: 'tech', dc: 11, pass: { curiosity: 5, money: 100000, confidence: 4 }, fail: { stress: 3 } } },
      { label: '拒絕，自己研究被動投資', hint: '低成本指數化投資', effects: { money: -20000, curiosity: 4, tech: 3, confidence: 3 } },
      { label: '把錢留著，等更好的機會', hint: '現金為王', effects: { money: 50000, stress: -2 } }
    ]
  },
  {
    id: 'life_midlife_invest_003',
    act: 'midlife',
    stage: 'midlife',
    minAge: 44,
    maxAge: 52,
    title: '房仲傳來的那間老屋',
    text: '房仲傳來一間老公寓的照片，屋況老舊，但地點好、價格比行情低兩成。他說「整理一下出租，投報率不錯」。你點開圖，看見斑駁的牆和一個需要換掉的馬桶。',
    tag: '金錢｜房產',
    once: true,
    opts: [
      { label: '買下來，整理出租當包租公／婆', hint: '用租金養房子', warn: true, dice: { skill: 'math', dc: 14, pass: { money: 300000, confidence: 5, independence: 4 }, fail: { money: -200000, stress: 8, mood: -4 } } },
      { label: '先請人估價、算投報再決定', hint: '精算之後再出手', dice: { skill: 'tech', dc: 12, pass: { money: 150000, confidence: 4 }, fail: { money: -20000, stress: 3 } } },
      { label: '放棄，繼續租房就好', hint: '不背貸款，一身輕', effects: { stress: -4, mood: 2 } },
      { label: '跟家人合資，分攤風險', hint: '一家人一起投資', chars: { partner: { rel: 4, met: true } }, effects: { money: -50000, family: 4, stress: -2 } }
    ]
  },
  {
    id: 'life_midlife_invest_004',
    act: 'midlife',
    stage: 'midlife',
    minAge: 40,
    maxAge: 48,
    title: '深夜的幣圈群組',
    text: '朋友的幣圈群組半夜還在跳訊息，有人貼出一張暴漲的截圖，配文「早就說要上車」。你翻了一下自己空蕩的電子錢包，又看了一下新聞裡那些暴富和歸零的故事。',
    tag: '金錢｜高風險',
    once: true,
    opts: [
      { label: '小額試水，當作學費', hint: '別拿生活費賭', dice: { skill: 'tech', dc: 14, pass: { money: 50000, curiosity: 4 }, fail: { money: -30000, stress: 4 } } },
      { label: '孤注一擲，all in 翻身', hint: '翻身或歸零', warn: true, dice: { skill: 'tech', dc: 16, pass: { money: 600000, mood: 10, confidence: 6 }, fail: { money: -400000, stress: 12, mood: -8, family: -3 } } },
      { label: '研究白皮書，挑有價值的項目', hint: '看不懂就不碰', dice: { skill: 'tech', dc: 13, pass: { tech: 5, curiosity: 5, money: 30000 }, fail: { money: -10000, stress: 3 } } },
      { label: '退出群組，好好睡覺', hint: '不懂的錢不賺', effects: { stress: -5, mood: 2 } }
    ]
  },
  {
    id: 'life_midlife_invest_005',
    act: 'midlife',
    stage: 'midlife',
    minAge: 41,
    maxAge: 50,
    title: '老同事的副業邀約',
    text: '前同事約你吃飯，說他辭職創業，現在缺一個合夥人，資金一百萬、時間自由。他拍胸脯保證「我們認識十幾年了，不會虧待你」。你筷子停在半空，想起自己那份穩定的薪水。',
    tag: '金錢｜創業',
    once: true,
    opts: [
      { label: '合夥創業，賭一個可能', hint: '人生總要賭一次', warn: true, dice: { skill: 'leadership', dc: 15, pass: { money: 400000, independence: 8, confidence: 6, mood: 6 }, fail: { money: -300000, stress: 10, mood: -6 } } },
      { label: '婉拒，但願意當他的天使投資人', hint: '風險少一點', dice: { skill: 'math', dc: 13, pass: { money: 200000, confidence: 4 }, fail: { money: -100000, stress: 5 } } },
      { label: '先做兼職副業試水溫', hint: '兩條腿走路', effects: { money: -20000, stress: 4, curiosity: 4, tech: 3 } },
      { label: '謝謝他的邀請，繼續上班', hint: '穩穩地過日子', effects: { stress: -3, family: 2, mood: 1 } }
    ]
  },
  {
    id: 'life_midlife_lottery_001',
    act: 'midlife',
    stage: 'midlife',
    minAge: 40,
    maxAge: 58,
    title: '樂透開獎的夜晚',
    text: '週五晚上，彩券行門口排著隊。同事說頭獎上看好幾億，半開玩笑地慫恿你也買一張「當作買個夢」。你想起小時候第一次跟爸媽對發票，那種等待奇蹟的心跳。',
    tag: '金錢｜彩券',
    once: true,
    opts: [
      { label: '買一張，用 100 元換一個夢', hint: '給生活留一點期待', dice: { skill: 'math', dc: 17, pass: { money: 10000000, mood: 12, confidence: 6 }, fail: { money: -100, stress: 1 } } },
      { label: '跟同事合資包牌', hint: '人多力量大', dice: { skill: 'math', dc: 16, pass: { money: 3000000, social: 5, mood: 8 }, fail: { money: -500, stress: 2 } } },
      { label: '不買，把錢留著', hint: '不期待就不會失望', effects: { money: 100, stress: -2 } }
    ]
  },
  {
    id: 'life_midlife_lottery_002',
    act: 'midlife',
    stage: 'midlife',
    minAge: 42,
    maxAge: 60,
    title: '超商櫃台的刮刮樂',
    text: '結帳時，超商櫃台旁的刮刮樂亮著金色的宣傳貼紙。店員說今天有人刮中了十萬。你手裡握著零錢，想起一句話：人為什麼要買樂透？因為那是窮人唯一買得起的希望。',
    tag: '金錢｜彩券',
    once: true,
    opts: [
      { label: '買一張刮刮樂，當場刮開', hint: '十秒鐘的緊張感', dice: { skill: 'math', dc: 16, pass: { money: 50000, mood: 8 }, fail: { money: -200, mood: -1 } } },
      { label: '買兩張，一張送給家人', hint: '把希望分給家人', dice: { skill: 'math', dc: 15, pass: { money: 30000, family: 4, mood: 6 }, fail: { money: -400, mood: -1 } }, chars: { partner: { rel: 3, met: true } } },
      { label: '放下刮刮樂，去買一杯咖啡', hint: '把錢花在確定的快樂上', effects: { money: -100, mood: 3 } }
    ]
  },
  {
    id: 'life_midlife_lottery_003',
    act: 'midlife',
    stage: 'midlife',
    minAge: 45,
    maxAge: 60,
    title: '中了小獎的那張彩券',
    text: '你隨手對了一下彩券，居然中了四碼——金額不大，剛好夠一家人吃一頓好料的。老伴在廚房探出頭問你在笑什麼，你揚了揚手中的彩券。',
    tag: '金錢｜彩券',
    once: true,
    opts: [
      { label: '帶全家去慶祝一頓', hint: '小確幸要分享', effects: { money: -3000, family: 5, mood: 6 }, chars: { partner: { rel: 4, met: true } } },
      { label: '把獎金存起來，湊成孩子的學費', hint: '讓小錢變大錢', effects: { money: 8000, family: 3, confidence: 2 } },
      { label: '再買一批彩券，趁運氣好', hint: '貪心是賭徒的開端', warn: true, dice: { skill: 'math', dc: 15, pass: { money: 200000, mood: 6 }, fail: { money: -8000, mood: -3, stress: 3 } } },
      { label: '把彩券裱起來，當作紀念', hint: '記錄一下運氣好的時刻', effects: { mood: 4, arts: 2 } }
    ]
  }
];

export const MIDLIFE_MILESTONES = [
  {
    id: 'm_turn',
    age: 43,
    title: '職涯轉折',
    text: '開會到一半，總經理說要重組部門。同一年，獵頭、老同事、創業的邀約同時找上門。你站在四十歲的分岔口，第一次認真想：接下來二十年，要過成什麼樣子。',
    kind: 'choice',
    opts: [
      { label: '穩健轉職，跳槽到更大的舞台', hint: '用經驗換新天地', setJob: { id: 'manager', title: '主管經理', salary: 75000, tier: '高階' }, effects: { money: 20000, confidence: 5, stress: 4 } },
      { label: '辭職進修，換一條賽道重新出發', hint: '先歸零，再出發', effects: { money: -120000, curiosity: 8, confidence: 4, stress: 5 } },
      { label: '押上積蓄創業，自己當老闆', hint: '高風險，也可能高報酬', warn: true, need: { stat: 'confidence', min: 40 }, setJob: { id: 'entrepreneur', title: '創業家', salary: 70000, tier: '高階' }, effects: { money: -200000, independence: 8, stress: 10, mood: 6 } },
      { label: '維持現狀，穩穩做到退休', hint: '安穩也是一種選擇', effects: { stress: -4, confidence: -2, mood: -2 } }
    ]
  },
  {
    id: 'm_care',
    age: 47,
    title: '長輩照護',
    text: '媽媽跌倒後，醫生說需要長期照護。妹妹在北方，你在南方，誰照顧、怎麼照顧，第一次變成家裡必須面對的問題。你掛了電話，站在陽台很久，雖然菸已經戒了。',
    kind: 'choice',
    opts: [
      { label: '放下部分工作，親自照顧', hint: '最重，也最沒有遺憾', need: { stat: 'family', min: 40 }, effects: { money: -200000, stress: 12, health: -5, family: 10 }, chars: { mom: { rel: 8, met: true }, dad: { rel: 6, met: true } } },
      { label: '請專業看護，自己下班後接手', hint: '兩邊都想顧', effects: { money: -240000, stress: 4, family: 6 }, chars: { mom: { rel: 5, met: true } } },
      { label: '安排安養院，定期探望', hint: '把專業的事交給專業', effects: { money: -300000, stress: -8, family: -5, mood: -5 }, chars: { mom: { rel: -4, met: true } } },
      { label: '跟手足輪流，合請看護分攤費用', hint: '一家人一起扛', effects: { money: -120000, social: 5, stress: -3, family: 6 }, chars: { partner: { rel: 3, met: true } } }
    ]
  },
  {
    id: 'm_review50',
    age: 50,
    title: '人生盤點',
    text: '五十歲生日那天，你翻開二十歲寫的日記。有些事情照著劇本走了，更多的事情繞了遠路。孩子大了、父母老了、你也有了白頭髮。人生過了一半以上——那些沒做完的夢，你打算拿它們怎麼辦？',
    kind: 'auto',
    opts: null
  },
  {
    id: 'm_estate',
    age: 55,
    title: '遺產規劃',
    text: '同事的父親離開後，遺產卡在稅務與繼承的文件裡半年。你回家看著存款與房子，第一次想：要是有一天我不在了，家人要花多少力氣才能辦完這些事？',
    kind: 'choice',
    opts: [
      { label: '買足保險與長照險，把風險轉嫁', hint: '替家人擋掉意外', effects: { money: -120000, stress: -6, family: 4 }, chars: { partner: { rel: 4, met: true } } },
      { label: '調整投資組合，增加穩定現金流', hint: '讓錢自己照顧家人', dice: { skill: 'math', dc: 14, pass: { money: 30000, confidence: 4, stress: -3 }, fail: { money: -80000, stress: 5 } } },
      { label: '寫好遺囑，預立醫療決定', hint: '把最後的話先安排好', effects: { stress: -5, family: 5, confidence: 4, mood: 2 }, chars: { child: { rel: 4, met: true } } },
      { label: '先過好當下，這些以後再說', hint: '活著的事比較重要', effects: { mood: 3, stress: 3, family: -3 } }
    ]
  },
  {
    id: 'm_retireplan',
    age: 58,
    title: '退休規劃',
    text: '公司的老主管退休後的第一年，在群組說「比想像中空」。你算了一下自己的存款與退休金，還有兩年。你想，這次不能再被退休這個詞嚇到，得先想清楚要過什麼樣的生活。',
    kind: 'choice',
    opts: [
      { label: '精算退休金與年金，訂下退休日期', hint: '用數字把不安算清楚', effects: { confidence: 4, stress: -6, curiosity: 3, mood: 3 } },
      { label: '逐步縮減開銷，練習過簡樸生活', hint: '先習慣，再退休', effects: { money: 20000, stress: -3, family: 2, mood: -2 } },
      { label: '盤點退休後想做的事，列成清單', hint: '退休不是結束，是換跑道', effects: { mood: 7, curiosity: 6, stress: -4 } },
      { label: '不想面對，繼續加班逃避', hint: '先擱著，反正還兩年', effects: { stress: 7, mood: -4, confidence: -3 } }
    ]
  },
  {
    id: 'm_retire',
    age: 60,
    title: '退休',
    text: '六十歲生日的前一晚，你整理辦公桌，抽屜裡還有十年前的年度目標。明天過後，打卡鐘不會再為你響。你站在公司門口，回頭看了一眼亮著的辦公室。',
    kind: 'choice',
    opts: [
      { label: '退休，把時間還給自己', hint: '後半生由自己安排', setJob: null, f: (S) => { S.income = 0; }, effects: { mood: 12, stress: -12, health: 3 } },
      { label: '繼續工作，維持熟悉的節奏', hint: '有事做，人不老', effects: { money: 150000, stress: 4, mood: -2, confidence: 2 } },
      { label: '先請半年長假，試試退休生活', hint: '給自己一個緩衝', effects: { money: -150000, mood: 8, stress: -8, curiosity: 5 } }
    ]
  }
];
