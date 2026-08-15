export const SCENES = [
  {
    id: 'life_nest_001',
    act: 'nest',
    stage: 'adult',
    minAge: 25, maxAge: 28,
    title: '會議桌上的最後一張簡報',
    text: '晨會，你負責的專案簡報排在最後一個。燈光暗下，投影幕亮起，主管翻著手上的資料，其他人交頭接耳。你昨晚改到凌晨三點的那張圖，正要成為全場焦點。',
    tag: '職涯｜成長',
    once: true,
    opts: [
      { label: '站起來，把簡報講完', hint: '機會在開口那一刻', main: true, dice: { skill: 'leadership', dc: 13, pass: { confidence: 8, mood: 6, stress: -4 }, fail: { stress: 6, confidence: -3 } }, chars: { boss: { rel: 8, met: true } } },
      { label: '照稿念，中規中矩', hint: '求穩不求亮眼', effects: { confidence: -2, stress: -2 } },
      { label: '先承認不足，請求會後補齊', hint: '誠實但不閃躲', chars: { boss: { rel: 3, met: true } }, effects: { confidence: 3, stress: 2 } }
    ]
  },
  {
    id: 'life_nest_002',
    act: 'nest',
    stage: 'adult',
    minAge: 26, maxAge: 30,
    title: '獵人頭的深夜訊息',
    text: '十一點四十分，手機亮了一下。獵人頭傳來訊息，報出一個你沒聽過的公司名字，薪資數字比現在高出三成。隔著螢幕，你聽見自己的心跳。',
    tag: '職涯｜選擇',
    once: true,
    opts: [
      { label: '約週末喝杯咖啡聊聊', hint: '先探探路，不急著跳', dice: { skill: 'leadership', dc: 12, pass: { confidence: 6, curiosity: 6, stress: -2 }, fail: { stress: 5, confidence: -2 } } },
      { label: '直接婉拒，專注現在的工作', hint: '熟悉的地方最安心', effects: { stress: -3, mood: 2 } },
      { label: '把訊息轉給現任主管', hint: '忠誠換信任', chars: { boss: { rel: 8, met: true } }, effects: { leadership: 4, confidence: 4 } }
    ]
  },
  {
    id: 'life_nest_003',
    act: 'nest',
    stage: 'adult',
    minAge: 27, maxAge: 31,
    title: '電梯裡的名單',
    text: '部門升遷名單貼在茶水間。你的名字不在上面，隔壁那個天天準時下班的同事卻在。電梯下樓時，他拍了拍你的肩說「辛苦了」，你的胃在翻攪。',
    tag: '職涯｜挫折',
    once: true,
    opts: [
      { label: '約主管喝咖啡，問清楚差距', hint: '把不滿變成情報', dice: { skill: 'leadership', dc: 14, pass: { confidence: 6, mood: 4, stress: -4 }, fail: { mood: -5, stress: 6 } }, chars: { boss: { rel: 4, met: true } } },
      { label: '把這口氣吞下去，加倍努力', hint: '用績效證明自己', effects: { stress: 6, mood: -3, confidence: 3 } },
      { label: '默默開始準備履歷', hint: '此處不留人', effects: { independence: 5, stress: 2, mood: -2 } }
    ]
  },
  {
    id: 'life_nest_004',
    act: 'nest',
    stage: 'adult',
    minAge: 28, maxAge: 32,
    title: '結案報告上的陌生名字',
    text: '季度結案報告定稿，你的專案數據全都對，只是署名欄最前面多了一個名字——主管的。他沒有提過。群組裡一片讚聲，都在恭喜他。',
    tag: '職涯｜職場政治',
    once: true,
    opts: [
      { label: '當面跟主管談這件事', hint: '把話說開', warn: true, dice: { skill: 'leadership', dc: 15, pass: { confidence: 7, mood: 5 }, fail: { stress: 8, mood: -5, social: -3 } }, chars: { boss: { rel: -5, met: true } } },
      { label: '留一封簡短郵件陳述事實', hint: '留證據，也留退路', effects: { confidence: 4, stress: 2 } },
      { label: '算了，下次自己守住', hint: '吃虧買經驗', effects: { mood: -4, stress: 4 } },
      { label: '把這件事告訴信任的同事', hint: '尋求盟友', chars: { bestie: { rel: 4, met: true } }, effects: { social: 4, mood: 2, stress: -2 } }
    ]
  },
  {
    id: 'life_nest_005',
    act: 'nest',
    stage: 'adult',
    minAge: 26, maxAge: 31,
    title: '下班後的第八節課',
    text: '晚上七點半，你在職訓教室坐下，桌上攤著第一堂課的講義。隔壁是剛下班的上班族，有人手機響了，那頭是孩子的哭聲。老師清了清喉嚨，投影幕亮起。',
    tag: '職涯｜進修',
    once: true,
    opts: [
      { label: '咬牙報名一整期課程', hint: '花錢投資自己', effects: { money: -30000, tech: 6, confidence: 4, stress: 4 } },
      { label: '先旁聽兩堂再決定', hint: '觀察再出手', effects: { curiosity: 5, stress: -2 } },
      { label: '買書自己讀', hint: '省錢但全靠自律', dice: { skill: 'curiosity', dc: 12, pass: { tech: 4, confidence: 3 }, fail: { stress: 4, mood: -2 } } }
    ]
  },
  {
    id: 'life_nest_006',
    act: 'nest',
    stage: 'adult',
    minAge: 28, maxAge: 34,
    title: '凌晨兩點的泡麵味',
    text: '專案上線前一週，你連續第三天凌晨兩點離開公司。便利商店的熱水壺邊，同事端著泡麵等你一起結帳。他咳嗽了好幾聲，你說「再撐一下，下週就好了」。',
    tag: '職涯｜健康',
    once: true,
    opts: [
      { label: '今晚準時下班，回家睡覺', hint: '身體是最大的資本', effects: { health: 5, mood: 4, stress: -5, money: -5000 } },
      { label: '跟同事一起撐到上線', hint: '團隊不能沒有你', warn: true, dice: { skill: 'health', dc: 13, pass: { leadership: 5, money: 8000, mood: 3 }, fail: { health: -8, stress: 8 } }, chars: { boss: { rel: 5, met: true } } },
      { label: '買維他命和護肝藥應急', hint: '用錢換一點心安', effects: { money: -3000, health: -2, stress: 2 } }
    ]
  },
  {
    id: 'life_nest_007',
    act: 'nest',
    stage: 'adult',
    minAge: 27, maxAge: 30,
    title: '年終入帳的簡訊聲',
    text: '年終入帳，銀行的簡訊響了兩次——稅前稅後的金額差距讓人心痛，但尾數依然是你月薪的兩倍。你把手機放進口袋，想起剛畢業時吃的那些超商便當。',
    tag: '職涯｜收入',
    once: true,
    opts: [
      { label: '留三成，好好犒賞自己一頓', hint: '偶爾善待自己', effects: { mood: 7, money: -15000 } },
      { label: '全數存進定存帳戶', hint: '未雨綢繆', effects: { money: 30000, independence: 5, stress: -3 } },
      { label: '匯一筆回老家給爸媽', hint: '把成就分給家人', chars: { mom: { rel: 6, met: true }, dad: { rel: 4, met: true } }, effects: { family: 7, money: -30000, mood: 5 } },
      { label: '報名一堂早就想上的課', hint: '繼續投資自己', effects: { money: -20000, tech: 5, confidence: 4 } }
    ]
  },
  {
    id: 'life_nest_008',
    act: 'nest',
    stage: 'adult',
    minAge: 26, maxAge: 29,
    title: '同一個杯子裡的兩支牙刷',
    text: '交往第二年，你們搬進同一個屋簷下。第一個晚上，他的牙刷跟你的擠在同一個杯子裡，你笑了笑。週末，他把臭襪子丟進垃圾桶，你看見了，他也看見你看見了。',
    tag: '感情｜同居',
    once: true,
    cond: (S) => S.chars.partner && S.chars.partner.met,
    opts: [
      { label: '把襪子撿起來，笑說「下次我自己洗」', hint: '用幽默化解摩擦', chars: { partner: { rel: 7, met: true } }, effects: { social: 4, mood: 5, family: 4 } },
      { label: '嚴肅討論家事分工', hint: '把規矩定下來', dice: { skill: 'leadership', dc: 13, pass: { family: 6, stress: -4 }, fail: { family: -4, mood: -3 } }, chars: { partner: { rel: 3, met: true } } },
      { label: '默默撿起來，什麼都不說', hint: '忍一時風平浪靜', effects: { mood: -2, stress: 3 } },
      { label: '趁機問「我們要不要存頭期款」', hint: '把話題帶向未來', chars: { partner: { rel: 5, met: true } }, effects: { family: 5, confidence: 3, stress: 2 } }
    ]
  },
  {
    id: 'life_nest_009',
    act: 'nest',
    stage: 'adult',
    minAge: 27, maxAge: 30,
    title: '水電費帳單的戰爭',
    text: '水電費帳單攤在茶几上，這個月超支一千二。他說是你的除濕機，你說是他的冷氣開整晚。客廳的電視正播著氣象預報，說颱風要來了。',
    tag: '感情｜日常',
    once: true,
    cond: (S) => S.chars.partner && S.chars.partner.met,
    opts: [
      { label: '先認一半，把責任劃清楚', hint: '別讓帳單傷感情', chars: { partner: { rel: 4, met: true } }, effects: { mood: 3, stress: -3, family: 4 } },
      { label: '訂一個記帳 App，公開透明', hint: '用工具解決爭執', effects: { tech: 3, confidence: 3, stress: -2 }, chars: { partner: { rel: 3, met: true } } },
      { label: '他愛開就開，反正付得起', hint: '計較少一點', effects: { money: -3000, mood: 4, stress: -4 } },
      { label: '把帳單拿去給爸媽看', hint: '尋求長輩仲裁', chars: { mom: { rel: 2, met: true } }, effects: { family: 2, stress: -2, independence: -3 } }
    ]
  },
  {
    id: 'life_nest_010',
    act: 'nest',
    stage: 'adult',
    minAge: 31, maxAge: 33,
    title: '戒指盒底的便利貼',
    text: '夕陽下，你在一間不貴的餐廳訂了靠窗的位置。口袋裡的戒指盒重得像一顆石頭。對方正好轉頭，問你「在看什麼？」你的舌頭突然打結。',
    tag: '婚姻｜選擇',
    once: true,
    cond: (S) => S.chars.partner && S.chars.partner.met,
    opts: [
      { label: '單膝下跪，把話說出口', hint: '賭上全部的勇氣', main: true, dice: { skill: 'confidence', dc: 14, pass: { mood: 10, family: 8, confidence: 6 }, fail: { mood: -6, stress: 6 } }, chars: { partner: { rel: 10, met: true } } },
      { label: '先緩緩，等更特別的時刻', hint: '求婚不能太隨便', effects: { stress: 3, confidence: -2 }, chars: { partner: { rel: 3, met: true } } },
      { label: '改聊未來，先探探她的口風', hint: '小心謹慎', chars: { partner: { rel: 5, met: true } }, effects: { social: 4, curiosity: 3 } }
    ]
  },
  {
    id: 'life_nest_011',
    act: 'nest',
    stage: 'adult',
    minAge: 33, maxAge: 34,
    title: '喜帖上的名字',
    text: '喜帖廠商送來打樣，紅底燙金，你的名字和對方並排印在上面。媽媽在電話裡問要不要多印十張給親戚，爸爸說「酒席錢他出」。你捏著喜帖，第一次覺得「成家」兩個字有了體積。',
    tag: '婚姻｜家庭',
    once: true,
    cond: (S) => S.spouse !== null,
    opts: [
      { label: '辦一場溫馨的小型婚禮', hint: '把錢留給未來', effects: { money: -300000, mood: 6, family: 5 } },
      { label: '辦一場風光的婚禮', hint: '一輩子只有一次', warn: true, dice: { skill: 'confidence', dc: 13, pass: { mood: 8, family: 6, money: -50000 }, fail: { money: -500000, stress: 8 } }, chars: { mom: { rel: 5, met: true } } },
      { label: '公證結婚，把錢省下來買房', hint: '儀式從簡', effects: { money: -10000, independence: 5, stress: -4 } }
    ]
  },
  {
    id: 'life_nest_012',
    act: 'nest',
    stage: 'adult',
    minAge: 34, maxAge: 35,
    title: '帳戶裡消失的三千元',
    text: '月底，你們一起坐在客廳算家用。這個月透支了，他的健身課、你的儲蓄險，兩張帳單疊在一起。電視播著重播的連續劇，誰都沒在聽。',
    tag: '婚姻｜日常',
    once: true,
    cond: (S) => S.spouse !== null,
    opts: [
      { label: '把帳本攤開，一起砍預算', hint: '夫妻同心，其利斷金', dice: { skill: 'leadership', dc: 13, pass: { family: 7, stress: -5, money: 5000 }, fail: { family: -4, stress: 5 } }, chars: { partner: { rel: 5, met: true } } },
      { label: '自己多接案子補家用', hint: '咬著牙多賺一點', effects: { money: 8000, stress: 6, health: -3 } },
      { label: '把帳單丟回給他管', hint: '輪到他當家', effects: { family: -3, stress: -3, money: -3000 } }
    ]
  },
  {
    id: 'life_nest_013',
    act: 'nest',
    stage: 'adult',
    minAge: 34, maxAge: 37,
    title: '半夜開著的陽台門',
    text: '吵完架，你摔了門，他去了陽台。煙味飄進來，你坐在床沿，看見門縫下他的影子沒有離開。窗外馬路的車聲忽然都停了。',
    tag: '婚姻｜和解',
    once: true,
    cond: (S) => S.spouse !== null,
    opts: [
      { label: '打開陽台門，說「進來吧」', hint: '先軟化的那一刻', chars: { partner: { rel: 8, met: true } }, effects: { family: 8, mood: 6, stress: -6 } },
      { label: '拿一件外套放到門邊', hint: '不說話的求和', chars: { partner: { rel: 5, met: true } }, effects: { family: 5, mood: 4 } },
      { label: '自己也去陽台，把話講完', hint: '讓爭吵有結論', dice: { skill: 'leadership', dc: 14, pass: { family: 6, mood: 5, stress: -5 }, fail: { family: -6, stress: 6 } }, chars: { partner: { rel: 4, met: true } } },
      { label: '回床上躺著，等天亮', hint: '用時間沖淡', effects: { mood: -4, family: -3, stress: 3 } }
    ]
  },
  {
    id: 'life_nest_014',
    act: 'nest',
    stage: 'adult',
    minAge: 26, maxAge: 29,
    title: '信箱裡的房仲 DM',
    text: '信箱塞了一張房仲的傳單，A4 紙上印著一間二房公寓的照片，開價讓人想直接丟掉。你把它夾進雜誌裡，下班回家的路上，路過那間公寓，窗戶亮著溫暖的燈。',
    tag: '住房｜選擇',
    once: true,
    opts: [
      { label: '約房仲看屋，試探行情', hint: '先看看總價在哪裡', dice: { skill: 'curiosity', dc: 12, pass: { curiosity: 5, confidence: 3 }, fail: { stress: 3, money: -5000 } } },
      { label: '把傳單丟掉，繼續租屋', hint: '租屋輕鬆自在', effects: { mood: 3, stress: -4 } },
      { label: '拍下傳單傳給爸媽問意見', hint: '聽聽過來人怎麼說', chars: { mom: { rel: 3, met: true }, dad: { rel: 3, met: true } }, effects: { family: 4, curiosity: 3 } }
    ]
  },
  {
    id: 'life_nest_015',
    act: 'nest',
    stage: 'adult',
    minAge: 28, maxAge: 31,
    title: '試算表上的頭期款',
    text: '你把存款、月薪、貸款試算表攤在桌上，數字在螢幕上排成一排。頭期款還差兩百萬。媽媽在電話裡說「有需要就跟我們說」，你嗯了兩聲，沒接話。',
    tag: '住房｜壓力',
    once: true,
    opts: [
      { label: '開口跟爸媽借頭期款', hint: '換一個自己的家', chars: { mom: { rel: 5, met: true }, dad: { rel: 4, met: true } }, effects: { money: 1500000, family: 4, stress: -5, independence: -5 } },
      { label: '咬著牙再存三年', hint: '不欠人情債', effects: { stress: 6, confidence: 5, money: 30000 } },
      { label: '降低目標，看更遠的郊區', hint: '退一步海闊天空', effects: { money: -50000, stress: -3, mood: -2 } },
      { label: '跟 partner 討論合資買房', hint: '兩個人的力量更大', chars: { partner: { rel: 5, met: true } }, effects: { family: 6, confidence: 4, stress: -3 } }
    ]
  },
  {
    id: 'life_nest_016',
    act: 'nest',
    stage: 'adult',
    minAge: 28, maxAge: 32,
    title: '第一期的房貸扣款',
    text: '交屋那天，你拿到鑰匙，空屋裡迴盪著你的腳步聲。一個月後，銀行簡訊通知房貸扣款成功。你站在自己客廳的落地窗前，窗外是別人家的陽台燈。',
    tag: '住房｜成家',
    once: true,
    cond: (S) => S.housing === 'own_house' || S.housing === 'own',
    opts: [
      { label: '買一束花，慶祝自己的房子', hint: '紀念這個時刻', effects: { money: -2000, mood: 7, confidence: 4 } },
      { label: '把第一筆房貸記錄存起來', hint: '見證每個開始', effects: { confidence: 5, family: 3 } },
      { label: '研究哪個週末去家具店', hint: '把空屋變成家', effects: { money: -50000, mood: 5, independence: 4 } },
      { label: '第一晚睡在空屋地板上', hint: '踏實地擁有它', effects: { mood: 6, stress: -4, health: -2 } }
    ]
  },
  {
    id: 'life_nest_017',
    act: 'nest',
    stage: 'adult',
    minAge: 27, maxAge: 30,
    title: '餐桌上多出來的那副碗筷',
    text: '你搬回老家住了一年，餐桌上多出你的碗筷。媽媽總是多盛一碗飯，爸爸的遙控器永遠停在吵的那台新聞台。晚上十一點，手機亮起，同事問你週末要不要去看屋。',
    tag: '住房｜家庭',
    once: true,
    opts: [
      { label: '留在爸媽身邊，省下房租', hint: '陪伴也是孝順', chars: { mom: { rel: 6, met: true }, dad: { rel: 5, met: true } }, effects: { family: 6, money: 8000, independence: -4, stress: -3 } },
      { label: '搬出去，找回自己的空間', hint: '距離有時是解藥', effects: { independence: 6, money: -15000, family: -3, stress: 2 } },
      { label: '跟爸媽約法三章，再住一年', hint: '兩全其美的折衷', dice: { skill: 'leadership', dc: 13, pass: { family: 5, independence: 4, stress: -3 }, fail: { family: -3, stress: 4 } }, chars: { mom: { rel: 4, met: true }, dad: { rel: 3, met: true } } }
    ]
  },
  {
    id: 'life_nest_018',
    act: 'nest',
    stage: 'adult',
    minAge: 33, maxAge: 36,
    title: '驗孕棒上的兩條線',
    text: '洗手台上的驗孕棒，顯示窗裡浮出兩條線。你數了三遍，第五遍才敢相信。衛生紙被捏成一團，你坐回床沿，他還在睡，呼吸很均勻。',
    tag: '家庭｜生育',
    once: true,
    cond: (S) => S.spouse !== null,
    opts: [
      { label: '搖醒他，一起看那兩條線', hint: '一起承擔這個消息', chars: { partner: { rel: 8, met: true } }, effects: { family: 8, mood: 8, stress: 3 } },
      { label: '先掛婦產科的號，確認再說', hint: '先冷靜求證', effects: { confidence: 4, stress: 2 } },
      { label: '坐到陽台，先把慌張消化掉', hint: '自己先接受', effects: { stress: 4, mood: -2, independence: 3 } },
      { label: '打給媽媽，問她當年怎麼辦', hint: '討教過來人', chars: { mom: { rel: 6, met: true } }, effects: { family: 5, mood: 4, confidence: 3 } }
    ]
  },
  {
    id: 'life_nest_019',
    act: 'nest',
    stage: 'adult',
    minAge: 34, maxAge: 37,
    title: '產房的燈很亮',
    text: '產房的燈很亮，護理師的聲音隔著霧傳來。當那聲啼哭響起的瞬間，你發現自己的眼眶是濕的。護理師把一個皺巴巴的小東西放到你懷裡，它比你手臂還短。',
    tag: '家庭｜生育',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '輕輕抱過來，貼在胸口', hint: '第一秒的觸感', main: true, chars: { child: { rel: 10, met: true } }, effects: { family: 10, mood: 10, stress: 4 } },
      { label: '先拍照，記錄這一刻', hint: '留住這個瞬間', effects: { mood: 6, family: 4 } },
      { label: '握緊 partner 的手，說謝謝', hint: '謝謝她熬過這十個月', chars: { partner: { rel: 8, met: true } }, effects: { family: 8, social: 4 } },
      { label: '手足無措，愣在原地', hint: '真實的第一反應', effects: { stress: 6, confidence: -3 } }
    ]
  },
  {
    id: 'life_nest_020',
    act: 'nest',
    stage: 'adult',
    minAge: 34, maxAge: 38,
    title: '凌晨三點的嬰兒哭聲',
    text: '凌晨三點，嬰兒的哭聲像鬧鐘一樣準時。你從床上彈起來，尿布、奶瓶、口水巾在黑暗裡摸成一團。客廳那盞夜燈下，partner 頂著黑眼圈對你苦笑，你們都快忘了好好睡覺是什麼感覺。',
    tag: '家庭｜育兒',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '認命地泡奶、換尿布', hint: '輪班的默契', dice: { skill: 'health', dc: 13, pass: { family: 6, stress: -4 }, fail: { health: -5, stress: 6 } }, chars: { partner: { rel: 5, met: true }, child: { rel: 5, met: true } } },
      { label: '搖醒 partner，輪到他值班', hint: '分工明確才撐得久', chars: { partner: { rel: 2, met: true } }, effects: { stress: -3, family: 2, health: 2 } },
      { label: '請媽媽來住一個月', hint: '後援部隊進場', chars: { mom: { rel: 5, met: true } }, effects: { family: 5, money: -10000, stress: -6 } },
      { label: '在客廳坐下，開始懷疑人生', hint: '新手爸媽的正常崩潰', warn: true, effects: { stress: 8, mood: -5 } }
    ]
  },
  {
    id: 'life_nest_021',
    act: 'nest',
    stage: 'adult',
    minAge: 35, maxAge: 38,
    title: '第一次笑出聲',
    text: '午後的陽光從窗簾縫漏進來，你把孩子舉高高，他揮著小手，忽然笑出聲——那種沒有理由的、純粹的笑。你愣住，眼淚莫名其妙地掉了下來。',
    tag: '家庭｜育兒',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '再舉一次，聽他再笑一次', hint: '把這一刻記在身體裡', main: true, chars: { child: { rel: 8, met: true } }, effects: { mood: 10, family: 8, stress: -5 } },
      { label: '拿手機錄下來', hint: '留給未來回味', effects: { family: 5, mood: 6 } },
      { label: '轉頭對 partner 說「你看」', hint: '分享的快樂加倍', chars: { partner: { rel: 6, met: true } }, effects: { family: 7, social: 4 } }
    ]
  },
  {
    id: 'life_nest_022',
    act: 'nest',
    stage: 'adult',
    minAge: 36, maxAge: 39,
    title: '幼稚園門口的哭聲',
    text: '幼稚園開學第一天，孩子在門口哭著抱緊你的大腿，指節都白了。旁邊另一個小孩已經跑進去玩滑梯。你蹲下來，手心全是汗。',
    tag: '家庭｜育兒',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '蹲下來約定「放學第一個來接你」', hint: '給他一個具體的承諾', chars: { child: { rel: 7, met: true } }, effects: { family: 7, confidence: 4, mood: 3 } },
      { label: '交給老師，狠下心轉身', hint: '讓他學著獨立', dice: { skill: 'independence', dc: 12, pass: { family: 5, independence: 5 }, fail: { stress: 5, family: -3 } }, chars: { child: { rel: 4, met: true } } },
      { label: '陪他在教室外站一整天', hint: '捨不得放手', effects: { family: 5, stress: 5, independence: -4 } }
    ]
  },
  {
    id: 'life_nest_023',
    act: 'nest',
    stage: 'adult',
    minAge: 38, maxAge: 40,
    title: '雙語幼稚園的報名表',
    text: '雙語幼稚園的報名表躺在桌上，註冊費抵你一個月的薪水。另一張是公立幼稚園的通知單，離家近，操場大。孩子踩著你的腳背，仰頭問「今天要吃什麼」。',
    tag: '家庭｜教育',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '咬牙送雙語，贏在起跑點', hint: '投資孩子的未來', effects: { money: -80000, stress: 5, family: 3 } },
      { label: '選公立，讓孩子慢慢長大', hint: '童年只有一次', main: true, effects: { money: -10000, family: 5, stress: -4, mood: 3 } },
      { label: '帶他去兩間學校走走看看', hint: '讓孩子自己感受', chars: { child: { rel: 5, met: true } }, effects: { family: 5, curiosity: 4, stress: -2 } }
    ]
  },
  {
    id: 'life_nest_024',
    act: 'nest',
    stage: 'adult',
    minAge: 35, maxAge: 38,
    title: '媽媽的白髮',
    text: '家庭聚餐，媽媽低頭夾菜，你忽然發現她鬢角的白髮已經壓不住。她忘了插電鍋的插頭，飯是半生的。她笑著說「最近老是忘東忘西」，爸爸在旁邊沒接話。',
    tag: '家庭｜父母',
    once: true,
    opts: [
      { label: '幫她預約全身健檢', hint: '趁還來得及', dice: { skill: 'health', dc: 12, pass: { family: 7, stress: -3 }, fail: { stress: 5, mood: -2 } }, chars: { mom: { rel: 8, met: true }, dad: { rel: 4, met: true } } },
      { label: '多回家吃幾次飯', hint: '陪伴比什麼都重要', chars: { mom: { rel: 6, met: true }, dad: { rel: 5, met: true } }, effects: { family: 7, mood: 5, stress: -4 } },
      { label: '提醒她吃保健食品', hint: '試試能做的', effects: { money: -5000, family: 3, stress: -2 } },
      { label: '若無其事，繼續聊別的話題', hint: '假裝沒看見', effects: { stress: 4, mood: -3 } }
    ]
  },
  {
    id: 'life_nest_025',
    act: 'nest',
    stage: 'adult',
    minAge: 36, maxAge: 40,
    title: '醫院的走廊很長',
    text: '爸爸的膝蓋痛了三個月，終於肯上醫院。候診間的走廊很長，他走得很慢，手扶著牆。你跟在後面，看著他後腦杓的白髮，想起小時候他牽著你的手。',
    tag: '家庭｜照護',
    once: true,
    opts: [
      { label: '走上前，攙住他的手臂', hint: '換你牽他走', main: true, chars: { dad: { rel: 8, met: true }, mom: { rel: 3, met: true } }, effects: { family: 8, mood: 6, confidence: 4 } },
      { label: '全程幫他掛號、領藥、問診', hint: '當他的代理律師', dice: { skill: 'leadership', dc: 13, pass: { family: 7, confidence: 5 }, fail: { stress: 6, family: -2 } }, chars: { dad: { rel: 6, met: true } } },
      { label: '跟他聊小時候的事緩和氣氛', hint: '讓他不那麼緊張', chars: { dad: { rel: 6, met: true } }, effects: { family: 6, mood: 5 } },
      { label: '請假一整天，全程陪同', hint: '把時間留給他', effects: { money: -3000, family: 5, stress: 2, mood: 3 } }
    ]
  },
  {
    id: 'life_nest_026',
    act: 'nest',
    stage: 'adult',
    minAge: 30, maxAge: 33,
    title: '同學會上的名片交換',
    text: '同學會，隔壁桌的同學遞出名片，頭銜比你的長兩行。你翻出自己的名片，上面還印著進公司第一年就沒換過的職稱。服務生問，要不要再續一壺茶。',
    tag: '職涯｜人生',
    once: true,
    opts: [
      { label: '老實聊自己的工作，不比較', hint: '坦蕩面對自己', effects: { confidence: 5, mood: 3 } },
      { label: '開始盤算轉職的下一步', hint: '把焦慮變成行動', effects: { curiosity: 5, stress: 4, independence: 3 } },
      { label: '提早離席，回公司加班', hint: '用忙碌逃避', effects: { stress: 5, health: -2, confidence: -2 } },
      { label: '約幾個老友續攤聊真心話', hint: '朋友的陪伴勝過比較', chars: { bestie: { rel: 6, met: true } }, effects: { social: 6, mood: 5, stress: -4 } }
    ]
  },
  {
    id: 'life_nest_027',
    act: 'nest',
    stage: 'adult',
    minAge: 30, maxAge: 36,
    title: '摯友失戀的那個雨天',
    text: '摯友頂著雨跑來你家，頭髮貼在額頭上，眼眶紅的。他沒說話，把手裡的酒瓶放在桌上。電視機開著，沒有人在看。',
    tag: '友情｜陪伴',
    once: true,
    opts: [
      { label: '開一瓶啤酒，陪他喝到天亮', hint: '有時只要陪著', warn: true, chars: { bestie: { rel: 8, met: true } }, effects: { social: 8, mood: 6, health: -3 } },
      { label: '幫他叫外送，聊到他想說為止', hint: '安靜的後援', chars: { bestie: { rel: 6, met: true } }, effects: { social: 6, mood: 5, stress: -2 } },
      { label: '跟他分析這段關係的問題', hint: '理性的朋友', chars: { bestie: { rel: 3, met: true } }, effects: { social: 3, confidence: 3 } },
      { label: '建議他去運動發洩情緒', hint: '身體動起來，心就沒那麼痛', effects: { social: 3, health: 3, sport: 4 } }
    ]
  },
  {
    id: 'life_nest_028',
    act: 'nest',
    stage: 'adult',
    minAge: 31, maxAge: 38,
    title: '主管轉交給你的那個案子',
    text: '下班前，主管把一份客戶名單放在你桌上。「這個案子交給你。」他頓了一下，「做得好，明年副理的位置就是你的。」他沒說做不好會怎樣。那份名單比你以往碰過的都棘手。',
    tag: '職涯｜貴人',
    once: true,
    opts: [
      { label: '接下案子，接下挑戰', hint: '機會與壓力並存', dice: { skill: 'leadership', dc: 15, pass: { confidence: 8, leadership: 6, money: 50000 }, fail: { stress: 8, confidence: -5, mood: -4 } }, chars: { boss: { rel: 6, met: true } } },
      { label: '先問清楚資源和期限', hint: '聰明地接下', dice: { skill: 'tech', dc: 13, pass: { leadership: 4, confidence: 4, stress: -3 }, fail: { stress: 5 } }, chars: { boss: { rel: 4, met: true } } },
      { label: '婉拒，說自己還在帶新案子', hint: '保守以對', chars: { boss: { rel: -4, met: true } }, effects: { stress: -4, confidence: -3, mood: -2 } }
    ]
  },
  {
    id: 'life_nest_029',
    act: 'nest',
    stage: 'adult',
    minAge: 35, maxAge: 39,
    title: '升遷公告與孩子的發燒',
    text: '升遷公告下來那週，孩子半夜發燒，你在急診室待到天亮。手機裡躺著主管的訊息：「新專案需要你，下週開會。」你的手還握著退燒貼的包裝。',
    tag: '家庭｜職涯',
    once: true,
    cond: (S) => S.children.length > 0,
    opts: [
      { label: '請假照顧孩子，專案延期', hint: '孩子的童年只有一次', chars: { child: { rel: 7, met: true }, partner: { rel: 5, met: true } }, effects: { family: 7, mood: 5, stress: 4, money: -5000 } },
      { label: '把孩子交給 partner，準時開會', hint: '家庭事業兩頭顧', chars: { partner: { rel: 3, met: true } }, effects: { money: 20000, stress: 5, family: -2 } },
      { label: '跟主管坦承狀況，爭取遠端', hint: '談出第三條路', dice: { skill: 'leadership', dc: 14, pass: { family: 5, confidence: 5, money: 15000 }, fail: { stress: 7, family: -3 } }, chars: { boss: { rel: 5, met: true } } }
    ]
  },
  {
    id: 'life_nest_030',
    act: 'nest',
    stage: 'adult',
    minAge: 38,
    maxAge: 40,
    title: '收拾舊書房的傍晚',
    text: '搬家前收拾書房，你翻出大學的畢業照、第一張識別證、沒寄出去的信。窗外天色漸暗，樓下廚房傳出炒菜聲。你坐在紙箱之間，忽然想數數這些年走了多遠。',
    tag: '人生｜回望',
    once: true,
    opts: [
      { label: '把這些都裝進箱子，好好收著', hint: '帶著回憶往前走', effects: { mood: 6, family: 4, confidence: 4 } },
      { label: '燒掉那些沒寄出去的信', hint: '放下一些什麼', effects: { mood: 4, stress: -6, confidence: 3 } },
      { label: '寫一封信給十年後的自己', hint: '跟未來的自己對話', effects: { language: 4, curiosity: 4, mood: 3 } },
      { label: '撥個電話給爸媽，說想回家', hint: '有些話現在說還來得及', chars: { mom: { rel: 5, met: true }, dad: { rel: 4, met: true } }, effects: { family: 6, mood: 5 } }
    ]
  },
  {
    id: 'life_nest_031',
    act: 'nest',
    stage: 'adult',
    minAge: 36,
    maxAge: 40,
    title: '異鄉的第一個清晨',
    text: '移民後的第一個清晨，你被陌生的鳥叫喚醒。窗外是一片你認不得的街景，冰箱裡還空著。你拿起手機，時差讓爸媽那邊還是半夜。你在新的地址寫下第一封寄回家的信。',
    tag: '移居｜起點',
    once: true,
    cond: (S) => !!S.flags.abroad,
    opts: [
      { label: '出門走走，認識附近的街道', hint: '把陌生走成熟悉', effects: { curiosity: 5, mood: 4, independence: 3 } },
      { label: '先打一通越洋電話回家', hint: '報個平安，讓家人放心', chars: { mom: { rel: 6, met: true }, dad: { rel: 4, met: true } }, effects: { family: 6, mood: 5, stress: -3 } },
      { label: '記下這個地址，開始新的生活', hint: '此地就是新的起點', effects: { independence: 5, confidence: 4, stress: 2 } },
      { label: '煮一杯咖啡，坐在窗前發呆', hint: '允許自己慢慢適應', effects: { mood: 3, stress: -2 } }
    ]
  },
  {
    id: 'life_nest_032',
    act: 'nest',
    stage: 'adult',
    minAge: 37,
    maxAge: 41,
    title: '異國同事的午餐邀約',
    text: '午休時間，異國的同事用還不太熟悉的語言問你要不要一起吃飯。你聽懂了一半，另一半靠著手勢和笑容補上。餐廳裡大家聊著你聽不太懂的笑話，你也跟著笑，忽然覺得好像沒有那麼遠了。',
    tag: '移居｜融入',
    once: true,
    cond: (S) => !!S.flags.abroad,
    opts: [
      { label: '努力開口，說錯也沒關係', hint: '語言是從丟臉開始的', dice: { skill: 'language', dc: 12, pass: { social: 6, confidence: 5, language: 3 }, fail: { social: 2, confidence: -2 } } },
      { label: '靜靜聽，先熟悉語感', hint: '觀察也是一種學習', effects: { curiosity: 4, language: 2, mood: 2 } },
      { label: '約他們下次一起做家鄉菜', hint: '用味道交流', effects: { social: 5, mood: 5, arts: 2, money: -2000 } },
      { label: '婉拒，先習慣一個人', hint: '慢慢來，比較快', effects: { independence: 3, mood: -2, stress: -2 } }
    ]
  }
];
export const NEST_MILESTONES = [
  {
    id: 'm_housing',
    age: 27,
    title: '住房',
    text: '爸媽問你「什麼時候要搬回家？」，房東傳訊息說「下個月要漲房租」。手邊的存款單趴著一列數字。你的家，要落在哪一個屋簷下？',
    kind: 'choice',
    opts: [
      { label: '咬牙買房，拿出頭期款', hint: '背上房貸，換一個自己的家', effects: { money: -2000000, stress: 8, confidence: 6 }, setHousing: 'own_house' },
      { label: '租一間好一點的房', hint: '自由移動，沒有負擔', effects: { money: -20000, mood: 4, stress: -3 }, setHousing: 'rent' },
      { label: '搬回家跟爸媽同住', hint: '省下房租，多陪陪家人', chars: { mom: { rel: 4, met: true }, dad: { rel: 4, met: true } }, effects: { money: 50000, family: 5, independence: -4 }, setHousing: 'family' }
    ]
  },
  {
    id: 'm_review30',
    age: 30,
    title: '人生盤點：而立之年',
    text: '三十歲那天，你打開銀行的 App 看存款數字，又滑過這十年的手機相簿。沒有誰在旁邊按讚，只有夜裡的你，和一面安靜的牆。有些選擇你慶幸，有些你還在消化。',
    kind: 'auto',
    opts: null
  },
  {
    id: 'm_marriage',
    age: 33,
    title: '婚姻',
    text: '三十三歲這年，你發現參加過的婚禮可以排出兩桌。同事問你「什麼時候輪到你」，爸媽在電話裡欲言又止。夜裡你看著天花板，把「結婚」兩個字放在嘴裡滾了滾。',
    kind: 'choice',
    opts: [
      { label: '與相伴的人結婚', hint: '牽起手，走進婚姻', need: { stat: 'family', min: 40 }, chars: { partner: { rel: 8, met: true } }, effects: { family: 8, mood: 8, money: -500000 }, setSpouse: 'partner' },
      { label: '決定不婚', hint: '婚姻不是人生的必選題', effects: { independence: 6, confidence: 4, stress: -3 } },
      { label: '繼續交往，順其自然', hint: '不給彼此壓力', chars: { partner: { rel: 3, met: true } }, effects: { mood: 4, stress: -4 } }
    ]
  },
  {
    id: 'm_immigrate',
    age: 35,
    title: '移居',
    text: '三十五歲，一封海外的邀請函躺在信箱裡。朋友說「趁還走得動，出去看看」，爸媽在電話裡沉默了一下。你盯著世界地圖，想：人生的下一站，要不要換一個國家？',
    kind: 'choice',
    opts: [
      { label: '移居美國，闖一闖', hint: '機會與壓力並存', need: { stat: 'language', min: 65 }, warn: true, effects: { money: -500000, independence: 6, stress: 6, curiosity: 5, family: -3 }, f: (S) => { S.flags.abroad = true; S.flags.abroadCountry = '美國'; }, thread: { sceneId: 'life_thread_immigrate_001', atAge: 36 } },
      { label: '移居加拿大，求安穩', hint: '地廣人稀，步調慢', need: { stat: 'language', min: 60 }, effects: { money: -400000, independence: 5, stress: 4, curiosity: 4, family: -2 }, f: (S) => { S.flags.abroad = true; S.flags.abroadCountry = '加拿大'; }, thread: { sceneId: 'life_thread_immigrate_001', atAge: 36 } },
      { label: '移居澳洲，換一種生活', hint: '陽光、海灘、慢活', need: { stat: 'language', min: 55 }, effects: { money: -350000, independence: 5, stress: 4, curiosity: 4, family: -2 }, f: (S) => { S.flags.abroad = true; S.flags.abroadCountry = '澳洲'; }, thread: { sceneId: 'life_thread_immigrate_001', atAge: 36 } },
      { label: '移居日本，離家不遠', hint: '文化相近，生活便利', need: { stat: 'language', min: 60 }, effects: { money: -300000, independence: 4, stress: 3, curiosity: 4, family: -2 }, f: (S) => { S.flags.abroad = true; S.flags.abroadCountry = '日本'; }, thread: { sceneId: 'life_thread_immigrate_001', atAge: 36 } },
      { label: '留在熟悉的土地深耕', hint: '此心安處是吾鄉', effects: { family: 4, mood: 3, stress: -3 } }
    ]
  },
  {
    id: 'm_family',
    age: 36,
    title: '家庭',
    text: '陽台的盆栽換過第三盆，客廳的電視重播著同一部電影。你停下手中的事，忽然認真問自己：這間屋子，要不要再多一個小小的成員？',
    kind: 'choice',
    opts: [
      { label: '準備迎接新成員', hint: '從兩人世界變成三人行', need: { stat: 'family', min: 45 }, chars: { partner: { rel: 6, met: true } }, effects: { family: 6, mood: 6, money: -50000 }, setChild: true },
      { label: '不生，享受現有的生活', hint: '人生不只一種活法', chars: { partner: { rel: 2, met: true } }, effects: { family: 2, independence: 5, mood: 3 } },
      { label: '再想想，先問問爸媽的意見', hint: '不著急', chars: { mom: { rel: 3, met: true } }, effects: { curiosity: 3, stress: 2 } }
    ]
  },
  {
    id: 'm_family2',
    age: 41,
    title: '家庭：第二個孩子',
    text: '孩子的作業本開始出現「我的家人」的繪圖，畫上除了爸爸媽媽，還有一個笑瞇瞇的小人影。你看著那幅畫，忽然覺得——也許家裡的熱鬧，可以再添一點。',
    kind: 'choice',
    when: (S) => (S.children || []).length >= 1,
    opts: [
      { label: '迎接第二個寶貝', hint: '手足是最長久的禮物', need: { stat: 'family', min: 45 }, chars: { partner: { rel: 5, met: true } }, effects: { family: 6, mood: 5, money: -60000 }, setChild: true },
      { label: '一個孩子就很好', hint: '把全部的愛留給他／她', chars: { partner: { rel: 2, met: true } }, effects: { family: 3, independence: 3, mood: 2 } }
    ]
  },
  {
    id: 'm_family3',
    age: 45,
    title: '家庭：第三個孩子',
    text: '孩子們開始搶電視遙控器，飯桌上永遠少一張椅子。你被兩個小傢伙追著跑了一圈，氣喘吁吁地笑出來——這個家，還能再熱鬧一點嗎？',
    kind: 'choice',
    when: (S) => (S.children || []).length >= 2,
    opts: [
      { label: '迎接第三個寶貝', hint: '熱鬧加倍，愛也加倍', need: { stat: 'family', min: 45 }, chars: { partner: { rel: 4, met: true } }, effects: { family: 6, mood: 4, money: -70000 }, setChild: true },
      { label: '三個孩子剛剛好', hint: '把心力留給眼前的孩子們', chars: { partner: { rel: 2, met: true } }, effects: { family: 2, stress: -2, mood: 2 } }
    ]
  },
  {
    id: 'm_review40',
    age: 40,
    title: '人生盤點：四十不惑',
    text: '四十歲這天，你站在自家客廳，檢查孩子有沒有帶錯作業本。手機彈出一張十年前的照片。你忽然明白，「不惑」不是什麼都懂，而是終於知道哪些事值得在意。',
    kind: 'auto',
    opts: null
  }
];
