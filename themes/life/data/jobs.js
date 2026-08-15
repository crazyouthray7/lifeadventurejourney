export const JOBS = [
  {
    id: 'waiter',
    title: '服務生',
    tier: '基層',
    needEdu: '',
    needSkills: { language: 15, sport: 15 },
    baseSalary: 28000,
    growth: '時薪制，熟客多了小費也跟著多，磨出眼力可升領班。',
    desc: '在熱炒店與咖啡廳之間跑出一雙快腿，把每個忙碌的夜晚熬成微笑。'
  },
  {
    id: 'factory_worker',
    title: '作業員',
    tier: '基層',
    needEdu: '',
    needSkills: { sport: 20 },
    baseSalary: 29000,
    growth: '加班與年資決定數字，熬出產線經驗可轉組長、換日班。',
    desc: '產線上一站就是八小時，重複的動作裡有自己才懂的節奏。'
  },
  {
    id: 'retail_clerk',
    title: '零售店員',
    tier: '基層',
    needEdu: '',
    needSkills: { language: 20, math: 15 },
    baseSalary: 28000,
    growth: '輪班勤快有機會接店長，業績與年終掛勾。',
    desc: '補貨、結帳、替夜歸的人守著一盞燈。'
  },
  {
    id: 'police_fire',
    title: '軍警消',
    tier: '基層',
    needEdu: 'high',
    needSkills: { sport: 40, leadership: 20 },
    baseSalary: 32000,
    growth: '依年資與考績敘薪，本俸加給逐年調升。',
    desc: '穿上制服的重量，是替別人擋在風雨前面。'
  },
  {
    id: 'delivery',
    title: '外送員',
    tier: '基層',
    needEdu: '',
    needSkills: { sport: 20, tech: 15 },
    baseSalary: 30000,
    growth: '接單量決定收入，雨天寒流單價加倍，風裡來雨裡去。',
    desc: '騎著機車穿過大街小巷，把熱湯送到陌生人的家門前。'
  },
  {
    id: 'admin_assistant',
    title: '行政助理',
    tier: '白領',
    needEdu: 'high',
    needSkills: { language: 30, math: 20 },
    baseSalary: 33000,
    growth: '熟悉公司流程後可升專員、秘書，薪資平穩爬升。',
    desc: '訂便當、排會議、歸檔案，把一間公司的雜亂理成秩序。'
  },
  {
    id: 'sales',
    title: '業務',
    tier: '白領',
    needEdu: 'high',
    needSkills: { language: 40, leadership: 20 },
    baseSalary: 34000,
    growth: '底薪撐底、獎金撐夢，業績就是你的天花板。',
    desc: '把拒絕當成日常，靠一張嘴和一雙鞋跑出業績。'
  },
  {
    id: 'marketer',
    title: '行銷',
    tier: '白領',
    needEdu: 'university',
    needSkills: { language: 35, arts: 25 },
    baseSalary: 36000,
    growth: '作品越響亮身價越高，帶專案升主管薪資翻倍。',
    desc: '替產品說故事，讓陌生人甘願打開錢包。'
  },
  {
    id: 'accountant',
    title: '會計',
    tier: '白領',
    needEdu: 'university',
    needSkills: { math: 45 },
    baseSalary: 37000,
    growth: '考取會計師照或進事務所，年資與證照是調薪主力。',
    desc: '對帳、報稅、看穿數字背後的真相，帳目比人心誠實。'
  },
  {
    id: 'designer',
    title: '設計師',
    tier: '白領',
    needEdu: 'university',
    needSkills: { arts: 45, tech: 20 },
    baseSalary: 36000,
    growth: '接案價與名氣掛勾，作品集就是你的名片。',
    desc: '在截稿日前線熬夜，把靈感磨成能交付的作品。'
  },
  {
    id: 'engineer',
    title: '工程師',
    tier: '專業',
    needEdu: 'university',
    needSkills: { math: 40, tech: 40 },
    baseSalary: 42000,
    growth: '依年資與技術深度成長，跳槽談薪更有底氣。',
    desc: '寫程式、解 bug，用邏輯在鍵盤上蓋房子。'
  },
  {
    id: 'teacher',
    title: '教師',
    tier: '專業',
    needEdu: 'university',
    needSkills: { language: 40, math: 30, leadership: 30 },
    baseSalary: 44000,
    growth: '通過教甄後按年資敘薪，穩定而緩慢地漲。',
    desc: '站上講台把世界拆開給學生看，也把自己的一部分留在那裡。'
  },
  {
    id: 'lawyer',
    title: '律師',
    tier: '專業',
    needEdu: 'graduate',
    needSkills: { language: 50, leadership: 30 },
    baseSalary: 60000,
    growth: '牌照與口碑決定身價，名氣起來按件收費更高。',
    desc: '在法條與人性的夾縫裡，替人爭一個公正。'
  },
  {
    id: 'doctor',
    title: '醫師',
    tier: '專業',
    needEdu: 'graduate',
    needSkills: { science: 55, math: 40 },
    baseSalary: 60000,
    growth: '住院醫師磨練後升主治，科別與教學醫院決定薪水。',
    desc: '把別人的健康與安穩扛在肩上，一天二十四小時都是職責。'
  },
  {
    id: 'architect',
    title: '建築師',
    tier: '專業',
    needEdu: 'university',
    needSkills: { math: 45, arts: 40 },
    baseSalary: 48000,
    growth: '考取建築師執照後可按件計酬，名號越響話語權越大。',
    desc: '畫一條線決定一群人幾十年的生活，紙上起高樓。'
  },
  {
    id: 'nurse',
    title: '護理師',
    tier: '專業',
    needEdu: 'university',
    needSkills: { science: 40, sport: 20 },
    baseSalary: 42000,
    growth: '夜班與年資加給，升督導或轉專科護理師路更寬。',
    desc: '在三班輪替的病房裡，用最細的手做最溫柔的事。'
  },
  {
    id: 'entrepreneur',
    title: '創業家',
    tier: '高階',
    needEdu: 'university',
    needSkills: { leadership: 50, math: 30 },
    baseSalary: 70000,
    growth: '收入沒有上限也沒有下限，公司成長就是你的薪水。',
    desc: '把一份理想變成事業，同時承受它全部的重量。'
  },
  {
    id: 'manager',
    title: '主管經理',
    tier: '高階',
    needEdu: 'university',
    needSkills: { leadership: 50, language: 40 },
    baseSalary: 75000,
    growth: '績效與人脈決定能否再上一層，帶得動團隊身價就高。',
    desc: '管人、管事、管預算，替團隊扛責也替老闆分憂。'
  },
  {
    id: 'consultant',
    title: '專業顧問',
    tier: '高階',
    needEdu: 'graduate',
    needSkills: { language: 45, leadership: 40, math: 40 },
    baseSalary: 80000,
    growth: '按案計酬，資歷越深時薪越貴，靠專業說話。',
    desc: '帶著一身經驗走進別人的公司，指出那條他們沒看見的路。'
  },
  {
    id: 'freelancer',
    title: '自由創作者',
    tier: '自由',
    needEdu: 'high',
    needSkills: { arts: 40, tech: 30 },
    baseSalary: 32000,
    growth: '收入起伏大，作品與讀者決定行情，自律就是產能。',
    desc: '沒有老闆、沒有打卡、沒有穩定薪水，只有自己的名字。'
  },
  {
    id: 'remote_worker',
    title: '遠端工作者',
    tier: '自由',
    needEdu: 'university',
    needSkills: { tech: 40, language: 30 },
    baseSalary: 45000,
    growth: '跨國公司的薪水可能更高，彈性本身就是紅利。',
    desc: '在家、在咖啡廳、在世界的角落上班，螢幕就是辦公室。'
  },
  {
    id: 'investor',
    title: '投資人',
    tier: '自由',
    needEdu: 'university',
    needSkills: { math: 50, curiosity: 30 },
    baseSalary: 50000,
    growth: '報酬率決定收入，眼光、紀律與運氣缺一不可，市場起伏就是你的薪水單。',
    desc: '在股票、基金與趨勢之間穿梭，用時間和金錢一起工作。'
  },
  {
    id: 'landlord',
    title: '包租公／婆',
    tier: '自由',
    needEdu: 'high',
    needSkills: { math: 35, leadership: 20 },
    baseSalary: 42000,
    growth: '房產增值與租金逐年累積，管理得當就是一門安穩的長期生意。',
    desc: '把房子租給別人，把每個月的一筆收入，變成生活裡穩穩的底氣。'
  },
  {
    id: 'creator',
    title: '內容創作者',
    tier: '自由',
    needEdu: 'high',
    needSkills: { arts: 40, tech: 30, leadership: 20 },
    baseSalary: 36000,
    growth: '訂閱與流量決定收入，靈感是本金，穩定輸出才是複利。',
    desc: '用影片、文字或聲音與世界對話，把興趣慢慢養成一份事業。'
  }
];
