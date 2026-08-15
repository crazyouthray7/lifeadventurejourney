export const CHARACTERS = [
  {
    id: 'mom',
    name: '媽媽',
    role: 'mother',
    intro: '她能在菜市場殺價殺出一個氣場，也會在半夜悄悄替你蓋被子，溫柔與殺氣是同一個人的兩面。',
    arcs: [
      '無條件接住你的人——不管你在外面摔得多重，她都先把你抱緊，再問發生什麼事。',
      '開始有爭執的對象——你長出自己的脾氣，她的擔心變成嘮叨，愛與衝突一起長大。',
      '需要你照顧的人——她的白髮藏不住歲月，這回換你接住她。'
    ],
    appearActs: ['birth', 'childhood', 'youth', 'departure', 'nest', 'midlife', 'oldage'],
    deathAge: null,
    traits: ['溫柔而堅強', '精打細算']
  },
  {
    id: 'dad',
    name: '爸爸',
    role: 'father',
    intro: '話很少，菸點得很慢，愛都藏在修好的腳踏車和悄悄多給的菜錢裡。',
    arcs: [
      '沉默的支柱——他話不多，卻把家扛在肩上，所有的愛都藏在動作裡。',
      '意見衝突——你的選擇撞上他的原則，他第一次對你大聲，也第一次學著放手。',
      '和解——有一天你發現他老了，他也終於說出那句沒講過的「辛苦了」。'
    ],
    appearActs: ['birth', 'childhood', 'youth', 'departure', 'nest', 'midlife'],
    deathAge: null,
    traits: ['沉默寡言', '不善表達但愛你']
  },
  {
    id: 'friend',
    name: '童年玩伴',
    role: 'childhood friend',
    intro: '你們的友情始於一塊分著吃的冰棒，和一起被罰站的那堂課。',
    arcs: [
      '一起長大的玩伴——捉迷藏、打彈珠，你們真的相信友誼會比暑假更長。',
      '各自人生——考場、職場、婚宴，你們越走越遠，卻從來沒有真正斷線。',
      '重逢——多年後一個電話，你們還能像小時候那樣笑成一團。'
    ],
    appearActs: ['childhood', 'youth', 'departure', 'nest', 'midlife', 'oldage'],
    deathAge: null,
    traits: ['開朗', '直率']
  },
  {
    id: 'teacher',
    name: '導師',
    role: 'mentor',
    intro: '他點名到你的名字時會先推一下眼鏡，好像怕認錯人。',
    arcs: [
      '賞識你的人——全班都放棄你的時候，只有他一個人還堅持相信你。',
      '嚴厲的教練——他對你的要求比對別人更高，因為他看得到你身上的光。',
      '一生的榜樣——你回頭才懂，那些苛責裡藏著他沒說出口的期許。'
    ],
    appearActs: ['youth', 'departure'],
    deathAge: null,
    traits: ['嚴格', '真誠']
  },
  {
    id: 'crush',
    name: '初戀',
    role: 'first love',
    intro: '夏天教室的風扇轉著，你偷偷看了她一整個學期，卻只敢在她經過時低下頭。',
    arcs: [
      '心動——下課鈴響的那一刻，全世界只剩下她的背影。',
      '遺憾或同行——說不出口的那句話，成了你青春裡最亮也最痛的顏色。',
      '多年後重逢——在某個轉角，她還是當年那個倔強的樣子，而你終於學會好好說再見。'
    ],
    appearActs: ['youth', 'departure'],
    deathAge: null,
    traits: ['清新', '倔強']
  },
  {
    id: 'bestie',
    name: '摯友',
    role: 'best friend',
    intro: '她總是一邊嫌你笨，一邊把你從每一場爛局裡撈出來。',
    arcs: [
      '同溫層——大學寢室裡的深夜談話，你們交換了比祕密更重的夢想。',
      '一起長大——畢業、搬家、失戀，她永遠是第一個知道你壞消息的人。',
      '患難見真情——她陪你熬過最暗的夜，你也記得在她哭的時候遞上衛生紙。'
    ],
    appearActs: ['departure', 'nest', 'midlife'],
    deathAge: null,
    traits: ['嘴硬', '心軟']
  },
  {
    id: 'partner',
    name: '伴侶',
    role: 'spouse',
    intro: '他不是會說漂亮話的人，但颱風天會記得幫你多買一把傘。',
    arcs: [
      '相遇——在人來人往的日常裡，他把你的平凡日子過成想一起變老的事。',
      '磨合——爭吵、冷戰、和好，你們終於學會愛一個真實的人。',
      '相守——牽著的手生了皺紋，他還是那個下雨天替你撐傘的人。'
    ],
    appearActs: ['nest', 'midlife', 'oldage'],
    deathAge: null,
    traits: ['穩定', '包容']
  },
  {
    id: 'boss',
    name: '職場貴人',
    role: 'mentor/rival',
    intro: '他開會時說話不帶感情，卻記得你前兩個月交的每一份報告。',
    arcs: [
      '賞識——他在一堆新鮮人裡挑中你，把你的笨拙磨成刀鋒。',
      '考驗——他把最難的案子丟給你，嘴上說是機會，其實是在試你的底線。',
      '亦敵亦友——你終於站到能與他平視的位置，他笑了，那笑裡有驕傲。'
    ],
    appearActs: ['departure', 'nest', 'midlife'],
    deathAge: null,
    traits: ['犀利', '惜才']
  },
  {
    id: 'child',
    name: '子女',
    role: 'child',
    intro: '她出生的第一聲哭，把你看過的所有星空都比了下去。',
    arcs: [
      '新生——你手忙腳亂地學著當父母，她卻已經決定要好好長大。',
      '叛逆——她關上房門的那年，你想起自己也曾這樣傷害過爸媽。',
      '離家與理解——她拖著行李箱回頭看你，你才懂父母那句沒說出口的話。'
    ],
    appearActs: ['nest', 'midlife', 'oldage'],
    deathAge: null,
    traits: ['倔強', '成長']
  },
  {
    id: 'elder',
    name: '祖父母',
    role: 'grandparent',
    intro: '他口袋裡總有梅子糖，也總有說不完的、你出生以前的故事。',
    arcs: [
      '寵愛——他是唯一會在你闖禍時還說「乖，阿公疼」的人。',
      '衰老——他開始記不清你的名字，卻還記得你小時候最愛吃的菜。',
      '告別——他走的那天很安靜，你卻在他常坐的椅子上哭了好久。'
    ],
    appearActs: ['birth', 'childhood', 'youth', 'departure', 'nest', 'midlife'],
    deathAge: 80,
    traits: ['慈祥', '唸舊']
  }
];
