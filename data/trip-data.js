const commons = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1600`;
const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=86`;

export const tripData = {
  meta: {
    title: "新东方大游",
    subtitle: "花儿与少年之巴厘岛篇",
    routeLabel: "BALI · KOMODO · BROMO",
    dateLabel: "2026.08.19 — 08.26",
    peopleLabel: "2 男 5 女 · 7 人小队",
    heroImage: "./assets/photos/hero-nusa-penida.jpg",
    heroAlt: "用户提供的努沙佩尼达海岸航拍照片",
    heroSource: {
      name: "用户提供",
      url: "",
    },
    declaration: "七个人，一次横跨海岛、火山与龙的旅行。",
    note: "旅行作战手册 · 旅后纪念馆",
  },
  lookbook: [
    { image: "./assets/photos/lookbook-left-cliff.jpg", alt: "用户提供的佩尼达悬崖海岸步道照片", kicker: "NUSA PENIDA · CLIFF WALK", title: "沿着悬崖走向海", caption: "适合放在佩尼达东线与悬崖步道段落。" },
    { image: "./assets/photos/lookbook-right-top-bromo.jpg", alt: "用户提供的布罗莫火山云海照片", kicker: "BROMO · VOLCANO DAWN", title: "火山把清晨点亮", caption: "适合作为布罗莫日出与火山段落的视觉过场。" },
    { image: "./assets/photos/lookbook-middle-bottom-pink.jpg", alt: "用户提供的粉色沙滩照片", kicker: "PINK BEACH · KOMODO", title: "粉色沙滩的慢镜头", caption: "适合作为粉色沙滩与出海日的浪漫画面。" },
    { image: "./assets/photos/lookbook-right-bottom-gate.jpg", alt: "用户提供的巴厘岛寺庙门日落照片", kicker: "BALI · TEMPLE GATE", title: "日落穿过神庙门", caption: "适合放在文化氛围和转场段落。" },
  ],
  crew: [
    { name: "张硕", nickname: "硕导", role: "领队 / 总导演", tagline: "负责把大家带回来，也把故事带回来。", accent: "coral", avatarLabel: "硕", photo: "./assets/photos/crew-zhangshuo.png", photoAlt: "张硕在海边的照片", focusX: "52%", focusY: "56%" },
    { name: "彦娜", nickname: "娜就拍", role: "摄影 / 影像记录", tagline: "所有人都在玩，她在记录大家玩。", accent: "sunset", avatarLabel: "娜", photo: "./assets/photos/crew-yanna.jpg", photoAlt: "彦娜在海边的照片", focusX: "54%", focusY: "57%" },
    { name: "小花", nickname: "花小钱", role: "财务 / 费用记录", tagline: "浪漫可以超支，账单不可以。", accent: "blue", avatarLabel: "花", photo: "./assets/photos/crew-xiaohua.jpg", photoAlt: "小花在山景前的照片", focusX: "52%", focusY: "62%" },
    { name: "心怡", nickname: "怡路向南", role: "导航 / 路线指挥", tagline: "只要跟着她，就能抵达下一站。", accent: "mint", avatarLabel: "怡", photo: "./assets/photos/crew-xinyi.jpg", photoAlt: "心怡在海边栈桥旁的照片", focusX: "45%", focusY: "64%" },
    { name: "志坚", nickname: "坚强箱长", role: "行李官", tagline: "箱子在，人就在；人齐了，出发。", accent: "violet", avatarLabel: "坚", photo: "./assets/photos/crew-zhijian.jpg", photoAlt: "志坚在海边栏杆旁的照片", focusX: "50%", focusY: "58%" },
    { name: "俐媛", nickname: "媛气满满", role: "氛围担当 / 造型提醒", tagline: "每个日落，都要有合适的裙子。", accent: "pink", avatarLabel: "媛", photo: "./assets/photos/crew-liyuan.png", photoAlt: "俐媛在花园里的照片", focusX: "50%", focusY: "47%" },
    { name: "思聪", nickname: "聪明玩咖", role: "美食侦察 / 快乐气氛组", tagline: "先找美食，再找今天的名场面。", accent: "orange", avatarLabel: "聪", photo: "./assets/photos/crew-sicong.jpg", photoAlt: "思聪在船上海边自拍的照片", focusX: "50%", focusY: "43%" },
  ],
  route: [
    { label: "北京", sub: "出发", icon: "✈", tone: "orange" },
    { label: "香港", sub: "菠萝包中转", icon: "☕", tone: "coral" },
    { label: "巴厘岛", sub: "漂流 · Seminyak", icon: "🌴", tone: "sea" },
    { label: "佩尼达", sub: "东西线挑战", icon: "◒", tone: "sunset" },
    { label: "拉布安巴霍", sub: "登船找龙", icon: "⛵", tone: "blue" },
    { label: "科莫多", sub: "粉色沙滩", icon: "🐉", tone: "coral" },
    { label: "泗水", sub: "火山集合", icon: "▴", tone: "volcano" },
    { label: "布罗莫", sub: "日出时刻", icon: "☼", tone: "orange" },
    { label: "香港", sub: "返程彩蛋", icon: "🛍", tone: "coral" },
  ],
  days: [
    {
      date: "2026-08-19", dateLabel: "08 / 19", weekday: "周三", time: "14:30—18:25", location: "北京大兴 → 香港机场", kicker: "出发日 · 先吃点好的",
      plan: "菠萝包 / 奶茶 / 烧鹅", services: "", baggage: "23kg", flight: "香港航空 HX399", checkIn: "", hotel: "", bookingStatus: "已确认", cost: "机票 1900 / 人（文旅）", notes: "夜航准备：外套、耳机、纸巾、保温杯、拖鞋、蒸汽眼罩、墨镜。", packing: "身份证、护照、转换头、充电宝、充电线、颈枕、电话卡、印尼盾、相机", statusKey: "day-0819",
      routeStops: ["北京大兴", "香港机场", "菠萝包 / 奶茶 / 烧鹅"], returnTime: "18:25 抵达香港机场，夜间转机", outfit: "舒适长途飞行装 + 轻薄外套，鞋子要方便走机场。", food: ["菠萝包", "奶茶", "烧鹅"], weatherFallback: "香港中转：湿热，机场室内空调偏凉；出发前更新当日预报。", weatherLocation: { lat: 22.3193, lon: 114.1694, label: "香港机场" }, highlight: "七人集合，第一站先把香港吃进记忆里。", tone: "orange",
    },
    {
      date: "2026-08-20", dateLabel: "08 / 20", weekday: "周四", time: "02:00—07:05", location: "香港 → 巴厘岛（努拉莱伊机场）", kicker: "落地即开玩 · 水上开场",
      plan: "抵达后包车前往巴厘岛 T 河（Telaga Waja River）漂流，13:30 场次；结束后送回酒店。", services: "机场接机 + 包车 + 门票（已定）", baggage: "", flight: "香港航空 HX707", checkIn: "", hotel: "阿斯塔达拉海尔别墅（The Haere Seminyak）", bookingStatus: "已确认", cost: "238 / 人（漂流包车门票） · 酒店 1165 / 1晚", notes: "漂流后补水、换干衣，晚上不要排太满。", packing: "手机防水袋、防水包、护目眼镜、一次性雨衣、纸巾、湿巾、一次性浴巾 / 衣服 / 四件套、溯溪鞋 / 拖鞋", statusKey: "day-0820",
      routeStops: ["努拉莱伊机场", "包车接机", "Telaga Waja River", "Seminyak 酒店"], returnTime: "漂流结束后返回酒店，晚上不排重项目", outfit: "速干上衣 / 运动短裤或紧身裤 / 溯溪鞋；准备一套干衣。", food: ["Nasi Goreng 炒饭", "椰子水", "漂流后热食"], weatherFallback: "巴厘岛内陆：热带湿热，漂流时可能遇短时阵雨；出发前更新当日预报。", weatherLocation: { lat: -8.45, lon: 115.42, label: "Telaga Waja River" }, highlight: "T 河的水花，是这趟旅行的开场字幕。", tone: "sea",
    },
    {
      date: "2026-08-21", dateLabel: "08 / 21", weekday: "周五", time: "07:30—17:30", location: "巴厘岛 → 佩尼达", kicker: "东西线挑战 · 出片指数拉满",
      plan: "佩尼达西线 + 东线同日游：精灵坠崖 / Kelingking、Diamond Beach 等景点。", services: "佩尼达一日游（59 / 人）", baggage: "", flight: "", checkIn: "", hotel: "阿斯塔达拉海尔别墅（The Haere Seminyak）", bookingStatus: "已确认", cost: "酒店 880 / 1晚", notes: "东西线合并是高体力日，尽量轻装，提前确认船期与海况。", packing: "防晒霜、帽子、裙子、包包、防晒衣、舒适鞋子、芦荟胶 / 补水面膜", statusKey: "day-0821",
      routeStops: ["巴厘岛码头", "佩尼达西线", "Diamond Beach 东线", "返回巴厘岛"], returnTime: "17:30 左右回到巴厘岛，晚上安排补水与休息", outfit: "轻便速干衣 / 防晒衣 / 舒适运动鞋；裙子适合观景台，不建议穿拖鞋爬坡。", food: ["水果与椰子水", "印尼炒面 Mie Goreng", "回 Seminyak 后安排正式晚餐"], weatherFallback: "佩尼达：海风强、日晒明显，悬崖和海滩体感不同；出发前更新海况与天气。", weatherLocation: { lat: -8.73, lon: 115.54, label: "Nusa Penida" }, highlight: "今天的任务：把蓝色海水和七个人一起装进相册。", tone: "sunset",
    },
    {
      date: "2026-08-22", dateLabel: "08 / 22", weekday: "周六", time: "15:45—16:55", location: "巴厘岛 → 科莫多", kicker: "换一片海 · 拉布安巴霍报到",
      plan: "下午飞往科莫多，抵达后办理入住，准备第二天出海。", services: "", baggage: "15kg", flight: "印尼亚航 QZ648", checkIn: "8月8日 15:45 开放", hotel: "洲际·拉布安巴霍皇冠假日酒店", bookingStatus: "已确认", cost: "机票 · 酒店含早", notes: "把泳衣、墨镜、相机和防水包放进随身包。", packing: "美丽裙子、墨镜", statusKey: "day-0822",
      routeStops: ["Seminyak", "机场", "Labuan Bajo", "皇冠假日酒店"], returnTime: "16:55 抵达，办理入住后早点休息", outfit: "轻松海岛装 + 墨镜；泳衣、相机、防水包放随身包。", food: ["Labuan Bajo 海鲜", "烤鱼", "当地咖啡"], weatherFallback: "拉布安巴霍：热、晒、海风明显；出发前更新航班和当地天气。", weatherLocation: { lat: -8.496, lon: 119.887, label: "Labuan Bajo" }, highlight: "在酒店睡好，明天去看一座会移动的岛。", tone: "blue",
    },
    {
      date: "2026-08-23", dateLabel: "08 / 23", weekday: "周日", time: "06:00—19:00", location: "科莫多国家公园", kicker: "一日出海 · 找龙也找日落",
      plan: "06:00—06:30 接人；07:00 出发；08:30 Padar Island；11:00 Pink Beach；12:00 科莫多岛寻找科莫多龙；13:30 拖尾白沙滩；14:00 Manta Point 浮潜；15:00 Siaba Island 海龟浮潜；16:00 Kelor Island 远足；17:00 Kalong Island 蝙蝠日落；19:00 返回酒店。", services: "国家公园船游 + 门票", baggage: "", flight: "", checkIn: "", hotel: "洲际·拉布安巴霍皇冠假日酒店", bookingStatus: "已确认", cost: "528 + 150 元国家公园门票 · 酒店 2262 / 2晚（含早）", notes: "加床 330 RMB，提前 3—7 天联系酒店；全日海上行程，注意防晒、防晕船与防水。", packing: "美美的裙子、浮潜泳衣、袜子、手套、物理防晒、防水包、发绳、一次性浴巾、拖鞋、运动相机、洗护用品、防蚊液", statusKey: "day-0823",
      routeStops: ["酒店接人", "Padar Island", "Pink Beach", "Komodo Island", "浮潜三站", "Kalong Island 日落"], returnTime: "19:00 返回酒店，冲洗盐水后直接休息", outfit: "泳衣 + 防晒衣 / 速干裙；船上风大，带一件薄外套。", food: ["船上午餐", "水果与椰子水", "返程后 Labuan Bajo 海鲜"], weatherFallback: "科莫多海域：海风、海浪和能见度决定浮潜体验；以船家 / 向导现场判断为准。", weatherLocation: { lat: -8.55, lon: 119.49, label: "Komodo National Park" }, highlight: "粉色沙滩、海龟、魔鬼鱼，还有一群在海上奔波的人。", tone: "coral",
    },
    {
      date: "2026-08-24", dateLabel: "08 / 24", weekday: "周一", time: "18:40—19:10", location: "科莫多 → 泗水", kicker: "从海上转向火山",
      plan: "上午感受科莫多当地文化，下午飞往泗水，落地后尽快休息。", services: "", baggage: "10kg", flight: "Super Air Jet IU725", checkIn: "8月24日 06:40 开放", hotel: "达尔莫瑞士贝尔大酒店", bookingStatus: "已确认", cost: "机票 · 酒店", notes: "火山夜行前把充电、补水和保暖都准备好。", packing: "", statusKey: "day-0824",
      routeStops: ["科莫多当地文化", "机场", "泗水 Juanda 机场", "酒店"], returnTime: "19:10 落地泗水，尽快回酒店休息", outfit: "轻便换乘装；把火山保暖层、口罩、充电宝放在随身包。", food: ["机场简餐", "泗水 Rawon 黑牛肉汤"], weatherFallback: "泗水：热湿城市天气；夜间转火山区域后温度会明显下降。", weatherLocation: { lat: -7.25, lon: 112.75, label: "Surabaya" }, highlight: "从海风切换到火山风，今晚早点睡。", tone: "volcano",
    },
    {
      date: "2026-08-25", dateLabel: "08 / 25", weekday: "周二", time: "02:30—15:00", location: "泗水 → Bromo 火山", kicker: "凌晨出发 · 把日出追到山顶",
      plan: "02:30 抵达吉普车停靠点并换车；03:30—09:00 欣赏日出、在巴托克山拍摄、探索布罗莫火山口；10:00 返回泗水；12:00 午餐；15:00 抵达市中心酒店。", services: "Bromo 一日吉普车行程（248 / 人）", baggage: "", flight: "", checkIn: "", hotel: "达尔莫瑞士贝尔大酒店", bookingStatus: "已确认", cost: "酒店 797 / 2晚（不含早）", notes: "加床 227 RMB；凌晨低温与风大，亮色冲锋衣和口罩都要带。", packing: "亮色冲锋衣、速干长袖、墨镜、背包、运动鞋 / 鞋套、深色运动裤、防晒霜、口罩、面巾、湿巾、纸巾、保温杯", statusKey: "day-0825",
      routeStops: ["吉普车集合点", "Penanjakan 日出", "Batok 山", "Bromo 火山口", "泗水酒店"], returnTime: "15:00 左右回到泗水市中心酒店", outfit: "亮色冲锋衣 + 速干长袖 + 深色运动裤 + 运动鞋 / 鞋套。", food: ["途中简单午餐", "热饮", "泗水街头小吃"], weatherFallback: "Bromo 凌晨低温、风大并有火山灰；带口罩、保温杯和备用袜子，出发前更新山顶天气。", weatherLocation: { lat: -7.94, lon: 112.95, label: "Mount Bromo" }, highlight: "火山口见，今天每个人都是日出里的剪影。", tone: "orange",
    },
    {
      date: "2026-08-26", dateLabel: "08 / 26", weekday: "周三", time: "08:10—次日 01:35", location: "泗水 → 香港 → 北京大兴", kicker: "返程彩蛋 · 旅行不散场",
      plan: "泗水（朱安达 T2）飞香港机场 T1；香港购物、伴手礼、电话卡、开户、维多利亚港打卡；22:15 香港机场 T2 飞大兴。", services: "", baggage: "23kg", flight: "国泰航空 CX780 · 香港快运 UO234", checkIn: "UO234：8月24日 22:15 开放", hotel: "", bookingStatus: "已确认", cost: "机票 1900 / 人（文旅） · 759 / 人", notes: "最后一站也要拍照，别把相机收得太早。", packing: "", statusKey: "day-0826",
      routeStops: ["Surabaya Juanda T2", "香港机场 T1", "购物 / 维港", "香港机场 T2", "北京大兴"], returnTime: "22:15 香港机场 T2 值机，次日 01:35 抵达大兴", outfit: "舒适返程装 + 轻薄外套；给伴手礼留出行李空间。", food: ["菠萝包", "奶茶", "烧鹅", "伴手礼"], weatherFallback: "香港返程：湿热，城市步行与机场室内温差明显；出发前更新天气。", weatherLocation: { lat: 22.3193, lon: 114.1694, label: "Hong Kong" }, highlight: "买好伴手礼，把旅行折叠进箱子里带回家。", tone: "coral",
    },
  ],
  destinations: [
    {
      id: "seminyak", name: "Seminyak", region: "巴厘岛", summary: "椰影、泳池和落地后的第一口海岛空气。", tripPlan: "入住 The Haere Seminyak，作为巴厘岛行程的休息基地。", tips: ["落地第一晚优先补水和休息，留一点时间给泳池与附近散步。", "巴厘岛交通容易受拥堵影响，跨区域移动要预留缓冲。"], food: ["猪排饭 Babi Guling", "沙嗲 Satay", "椰子冰与当地咖啡"], photoNotes: "用泳池边的逆光、椰树影子和轻薄海岛色做第一组照片。", duration: "半天—1天", difficulty: "轻松", mapUrl: "https://www.google.com/maps/search/Seminyak+Bali", heroImage: { url: "./assets/photos/seminyak-beach.jpg", alt: "用户提供的巴厘岛海岸航拍照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }, gallery: [], replaceHint: "已放入用户提供的海岸航拍照片；旅行后可替换成你们抵达 Seminyak 的第一张合照。"
    },
    {
      id: "telaga-waja", name: "巴厘岛 T 河", region: "Telaga Waja River", summary: "落地即开玩的漂流开场，水花是这趟旅行的片头。", tripPlan: "8 月 20 日 13:30 场次，机场接机、包车、门票已定。", tips: ["漂流前把手机、相机和护照放进防水包，不要把贵重物品留在口袋。", "溯溪鞋或牢固拖鞋比时髦凉鞋更实用；结束后准备干衣和补水。"], food: ["漂流后安排热食和椰子水", "尝试当地 Nasi Goreng 炒饭"], photoNotes: "拍水花、湿发、队友互相搀扶的动态瞬间，不必人人都看镜头。", duration: "半天", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Telaga+Waja+River+Bali", heroImage: { url: unsplash("photo-1544551763-46a013bb70d5"), alt: "巴厘岛水上活动实景候选图", sourceName: "Unsplash", sourceUrl: "https://unsplash.com/s/photos/bali-rafting", isRealLocation: false }, gallery: [], replaceHint: "当前为水上活动氛围图；旅行后请替换成 Telaga Waja River 漂流实拍。"
    },
    {
      id: "nusa-penida-west", name: "佩尼达西线", region: "Nusa Penida", summary: "精灵坠崖、破碎海滩与被海风雕刻的悬崖线。", tripPlan: "与东线合并在同一天完成，属于全程高体力挑战。", tips: ["西线悬崖步道和观景点人流较多，鞋子、防晒和水比换装更优先。", "东西线同日需要确认船班、包车路线和返程时间，海况变化时以当地安排为准。"], food: ["路上补充水果、椰子水和简单炒饭", "回到住宿区再安排一顿完整晚餐"], photoNotes: "悬崖照保持安全距离；一张全员远景、一张角色近景就够。", duration: "半天以上", difficulty: "高", mapUrl: "https://www.google.com/maps/search/Kelingking+Beach+Nusa+Penida", heroImage: { url: "./assets/photos/nusa-penida-08-21.jpg", alt: "用户提供的佩尼达西线海岸照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }, gallery: [], replaceHint: "已放入用户提供的佩尼达海岸照片；旅行后可替换成悬崖观景台的全员照片。"
    },
    {
      id: "diamond-beach", name: "Diamond Beach", region: "Nusa Penida 东线", summary: "像钻石切面一样展开的海岸线，东线换一张海岛明信片。", tripPlan: "与佩尼达西线同日完成，注意体力与车程节奏。", tips: ["下到沙滩的台阶较陡，若时间紧可以只在高处观景，不必强行下到底。", "东线景点间移动时间较长，行程安排以包车司机和当日路况为准。"], food: ["备好小包装零食和水", "回程可尝试印尼炒面 Mie Goreng"], photoNotes: "高处俯拍最能体现海岸线层次；白色、珊瑚粉和海蓝都很出片。", duration: "1—2小时", difficulty: "中高", mapUrl: "https://www.google.com/maps/search/Diamond+Beach+Nusa+Penida", heroImage: { url: commons("Diamond Beach Nusa Penida.jpg"), alt: "Nusa Penida Diamond Beach 实景候选图", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Beaches_of_Nusa_Penida", isRealLocation: true }, gallery: [], replaceHint: "旅行后可替换成东线观景台或台阶上的旅行照片。"
    },
    {
      id: "padar", name: "Padar Island", region: "科莫多国家公园", summary: "三色海湾像一张被风吹开的地理明信片。", tripPlan: "08:30 登岛，安排在科莫多一日出海的第一段。", tips: ["清晨光线柔和、体感相对舒服；登高路段没有连续遮阴，带水和防晒。", "登岛路线和停留时间受船程、海况和当地向导安排影响，出发前再次确认。"], food: ["船上早餐与水果", "准备能量棒、椰子水等轻食"], photoNotes: "用三色海湾做大远景，人物只占画面一小部分，更有旅行纪录片感。", duration: "1.5—2小时", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Padar+Island+Indonesia", heroImage: { url: commons("Padar Island.jpg"), alt: "Padar Island 三色海湾实景候选图", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Padar", isRealLocation: true }, gallery: [], replaceHint: "旅行后可替换成登顶后的三色海湾合影。"
    },
    {
      id: "pink-beach", name: "Pink Beach", region: "科莫多国家公园", summary: "粉色沙粒、清透海水和一段短暂的海滩放空。", tripPlan: "11:00 到达，安排游泳、拍照与浮潜前的休息。", tips: ["粉色深浅会受光线与潮汐影响，页面中的颜色不代表每天都完全一致。", "保护珊瑚和沙滩，不带走砂石；浮潜前听从船员与向导安全说明。"], food: ["船上简餐", "海边适合补水，不建议携带容易融化的甜食"], photoNotes: "粉色沙滩适合低饱和浅色穿搭；留一张无人物的海岸线，给旅记留白。", duration: "1—1.5小时", difficulty: "轻松—中等", mapUrl: "https://www.google.com/maps/search/Pink+Beach+Komodo", heroImage: { url: "./assets/photos/pink-beach-01.jpg", alt: "用户提供的科莫多粉色沙滩航拍照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }, gallery: [{ url: "./assets/photos/pink-beach-02.jpg", alt: "用户提供的科莫多粉色沙滩海岸照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }], replaceHint: "已放入用户提供的粉色沙滩照片；旅行后可替换成七人海滩合照。"
    },
    {
      id: "komodo", name: "科莫多岛", region: "Komodo Island", summary: "寻找科莫多龙，也记得先听向导说完安全规则。", tripPlan: "12:00 登岛，在向导带领下寻找科莫多龙。", tips: ["必须跟随当地向导，不自行靠近或喂食野生动物；保持队伍完整。", "高温与日晒明显，轻装、长袖、帽子和水比复杂造型更重要。"], food: ["出海日以船上午餐为主", "返程后在 Labuan Bajo 选择海鲜或烤鱼"], photoNotes: "野生动物照片保持安全距离，用环境和脚印讲故事，不追逐动物。", duration: "1—2小时", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Komodo+Island+National+Park", heroImage: { url: commons("Komodo Dragons in the wild on Rinca island Indonesia..jpg"), alt: "科莫多龙实景候选图", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Komodo_dragons", isRealLocation: true }, gallery: [], replaceHint: "旅行后可替换成向导带队进入国家公园的照片。"
    },
    {
      id: "manta", name: "Manta Point", region: "科莫多海域", summary: "浮潜不是打卡速度，而是把自己交给海流和蓝色。", tripPlan: "14:00 魔鬼鱼浮潜，海况允许时按船员安排下水。", tips: ["是否能看到魔鬼鱼取决于海况和当日生态，不能保证；听从船员指挥。", "防水包、发绳、物理防晒、浮潜装备都要提前整理，船上行动更利落。"], food: ["船上补水和水果", "上岸后再安排一顿热食"], photoNotes: "水下相机优先拍人与海的比例，不要为了靠近动物牺牲安全距离。", duration: "1小时左右", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Manta+Point+Komodo", heroImage: { url: unsplash("photo-1544551763-46a013bb70d5"), alt: "印度尼西亚热带海域浮潜实景候选图", sourceName: "Unsplash", sourceUrl: "https://unsplash.com/s/photos/indonesia-snorkeling", isRealLocation: false }, gallery: [], replaceHint: "旅行后请替换成你们自己的水下照片；当前图片仅作海域氛围示意。"
    },
    {
      id: "siaba", name: "Siaba Island", region: "科莫多海域", summary: "和海龟一起慢下来的一站。", tripPlan: "15:00 海龟浮潜。", tips: ["保持安静、不要触碰海龟或追逐；以向导划定的浮潜区域为准。", "连续下水后容易疲劳，浮潜间隙补水、擦干、重新涂防晒。"], food: ["船上轻食", "准备独立水瓶，减少一次性塑料使用"], photoNotes: "让海水颜色和气泡成为主角，人物不需要占满画面。", duration: "45—60分钟", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Siaba+Island+Komodo", heroImage: { url: unsplash("photo-1544551763-46a013bb70d5"), alt: "印度尼西亚海域浮潜实景候选图", sourceName: "Unsplash", sourceUrl: "https://unsplash.com/s/photos/indonesia-snorkeling", isRealLocation: false }, gallery: [], replaceHint: "旅行后请替换成海龟浮潜的真实照片；当前图片仅作海域氛围示意。"
    },
    {
      id: "kelor", name: "Kelor Island", region: "科莫多国家公园", summary: "短暂上岸、爬一座小山，再看一眼清透的海。", tripPlan: "16:00 远足，看小鲨鱼。", tips: ["岛上短徒步仍需穿牢固鞋子，船上拖鞋适合下水但不适合爬坡。", "按照船员安排上下船，湿滑跳板不要抢拍。"], food: ["船上补水和简餐", "返程后在 Labuan Bajo 吃烤鱼或海鲜"], photoNotes: "适合拍一组不规则小相框：船、山、海、七个人的背影。", duration: "1小时左右", difficulty: "中等", mapUrl: "https://www.google.com/maps/search/Kelor+Island+Komodo", heroImage: { url: commons("Kelor island.jpg"), alt: "Kelor Island 科莫多群岛实景候选图", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Kelor_Island_(Komodo)", isRealLocation: true }, gallery: [], replaceHint: "旅行后可替换成小岛坡顶的远景照。"
    },
    {
      id: "kalong", name: "Kalong Island", region: "科莫多国家公园", summary: "蝙蝠群从岛上升起，日落把这一天收成一张金色底片。", tripPlan: "17:00 观看蝙蝠日落，19:00 返回酒店。", tips: ["日落和出海返程时间受季节、海况与船家安排影响，出发前再次确认。", "返程后及时擦干、补水、冲洗盐水，保管好湿衣物。"], food: ["回酒店后安排正式晚餐", "Labuan Bajo 可尝试当地海鲜与烤鱼"], photoNotes: "不要只拍太阳，把飞起的蝙蝠群和船的剪影一起放进画面。", duration: "1小时", difficulty: "轻松", mapUrl: "https://www.google.com/maps/search/Kalong+Island+Komodo", heroImage: { url: commons("Dusk & Dawn in Kalong Island, Labuan Bajo.jpg"), alt: "Kalong Island 科莫多群岛实景候选图", sourceName: "Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/Category:Kalong_Island", isRealLocation: true }, gallery: [], replaceHint: "旅行后可替换成船上看日落的金色照片。"
    },
    {
      id: "bromo", name: "Bromo 火山", region: "泗水 / 东爪哇", summary: "凌晨上吉普车，把日出追到火山口。", tripPlan: "02:30 换乘吉普车；03:30—09:00 看日出、拍摄巴托克山、探索火山口。", tips: ["凌晨风大且冷，亮色冲锋衣、速干长袖、口罩、保温杯都很实用。", "火山灰会弄脏鞋和衣服，鞋套或备用袜子能减少返程狼狈。"], food: ["途中安排简单午餐", "泗水可尝试 Rawon 黑牛肉汤或当地街头小吃"], photoNotes: "亮色冲锋衣会在灰黑火山地貌里成为最好的视觉锚点。", duration: "半天以上", difficulty: "高", mapUrl: "https://www.google.com/maps/search/Mount+Bromo+Indonesia", heroImage: { url: "./assets/photos/bromo-01.jpg", alt: "用户提供的 Bromo 火山日出照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }, gallery: [{ url: "./assets/photos/bromo-02.jpg", alt: "用户提供的 Bromo 火山补充照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }], replaceHint: "已放入用户提供的 Bromo 火山照片；旅行后可替换成七个人在火山日出里的剪影。"
    },
    {
      id: "hong-kong", name: "香港返程彩蛋", region: "Hong Kong", summary: "购物、伴手礼和维多利亚港，把旅程拉出一个轻快的尾音。", tripPlan: "中转期间购物、电话卡、开户、维多利亚港打卡。", tips: ["把转机时间、行李寄存和登机口距离留出余量，购物不要压线。", "最后一天适合拍一张七人合照，把旅行从海岛带回城市。"], food: ["菠萝包", "奶茶", "烧鹅"], photoNotes: "把港铁、霓虹灯和机场行李牌拍进返程故事里。", duration: "半天", difficulty: "轻松", mapUrl: "https://www.google.com/maps/search/Victoria+Harbour+Hong+Kong", heroImage: { url: "./assets/photos/hong-kong-dusk.jpg", alt: "用户提供的香港黄昏城市天际线照片", sourceName: "用户提供", sourceUrl: "", isRealLocation: true }, gallery: [], replaceHint: "已放入用户提供的香港黄昏照片；旅行后可替换成香港中转的最后一张合照。"
    },
  ],
  toolkit: [
    { label: "航班", icon: "✈", items: ["HX399 北京 → 香港 · 8/19", "HX707 香港 → 巴厘岛 · 8/20", "QZ648 巴厘岛 → 科莫多 · 8/22", "IU725 科莫多 → 泗水 · 8/24", "CX780 泗水 → 香港 · 8/26", "UO234 香港 → 大兴 · 8/26 深夜"] },
    { label: "住宿", icon: "⌂", items: ["The Haere Seminyak · 巴厘岛", "洲际·拉布安巴霍皇冠假日酒店 · 含早", "达尔莫瑞士贝尔大酒店 · 泗水"] },
    { label: "出发前再次确认", icon: "!", items: ["佩尼达东西线一日船班 / 海况 / 包车时间", "科莫多出海船家、浮潜条件与国家公园规则", "Bromo 吉普车接驳点与实时天气", "酒店加床、接送与联系人"] },
    { label: "随身小物", icon: "✦", items: ["护照 / 身份证 / 电话卡 / 印尼盾", "转换头 / 充电宝 / 充电线 / 相机", "防晒 / 防蚊 / 湿巾 / 保温杯 / 眼罩"] },
  ],
  packing: [
    { id: "universal", label: "所有人必带", icon: "✦", items: ["护照", "身份证", "转换头", "充电宝", "充电线", "电话卡", "印尼盾", "相机", "防晒霜", "湿巾", "保温杯"] },
    { id: "telaga", label: "T 河漂流", icon: "≈", items: ["手机防水袋", "防水包", "护目眼镜", "一次性雨衣", "溯溪鞋 / 拖鞋", "干衣"] },
    { id: "penida", label: "佩尼达东西线", icon: "◒", items: ["帽子", "防晒衣", "舒适鞋子", "轻便包包", "芦荟胶 / 补水面膜", "轻装出发"] },
    { id: "komodo", label: "浮潜 / 科莫多", icon: "🐚", items: ["浮潜泳衣", "袜子", "手套", "物理防晒", "防水包", "发绳", "一次性浴巾", "拖鞋", "运动相机", "防蚊液"] },
    { id: "bromo", label: "Bromo 火山", icon: "▴", items: ["亮色冲锋衣", "速干长袖", "墨镜", "背包", "运动鞋 / 鞋套", "深色运动裤", "口罩", "面巾", "纸巾", "保温杯"] },
  ],
  memoryFields: ["今日高光", "今日金句", "名场面", "成员留言"],
};
