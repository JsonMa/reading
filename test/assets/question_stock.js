'use strict';

const stock = [
  {
    index: 1,
    title: '中国近现代史上第一个不平等条约是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《虎门条约》',
      },
      {
        identifer: 'B',
        description: '《南京条约》',
      },
      {
        identifer: 'C',
        description: '《辛丑条约》',
      },
      {
        identifer: 'D',
        description: '《马关条约》',
      },
    ],
    answer: 'B',
  },
  {
    index: 2,
    title: '近代中国开眼看世界的第一人是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '龚自珍',
      },
      {
        identifer: 'B',
        description: '魏源',
      },
      {
        identifer: 'C',
        description: '林则徐',
      },
      {
        identifer: 'D',
        description: '孙中山',
      },
    ],
    answer: 'C',
  },
  {
    index: 3,
    title: '近代中国高举起俄国十月社会主义革命旗帜的第一人是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '陈独秀',
      },
      {
        identifer: 'B',
        description: '李大钊',
      },
      {
        identifer: 'C',
        description: '毛泽东',
      },
      {
        identifer: 'D',
        description: '邓小平',
      },
    ],
    answer: 'B',
  },
  {
    index: 4,
    title: '近代中国高举起俄国十月社会主义革命旗帜的第一人是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '陈独秀',
      },
      {
        identifer: 'B',
        description: '李大钊',
      },
      {
        identifer: 'C',
        description: '毛泽东',
      },
      {
        identifer: 'D',
        description: '邓小平',
      },
    ],
    answer: 'B',
  },
  {
    index: 5,
    title: '1941年初，王震率领八路军第三五九旅开赴南泥湾实行军垦屯田。这一行动发生的主要背景是在陕甘宁边区开展的（ ）。',
    options: [
      {
        identifer: 'A',
        description: '整风运动',
      },
      {
        identifer: 'B',
        description: '练兵运动',
      },
      {
        identifer: 'C',
        description: '大生产运动',
      },
      {
        identifer: 'D',
        description: '三反运动‍',
      },
    ],
    answer: 'C',
  },
  {
    index: 6,
    title: '全面抗战爆发之后，中国军队取得的第一个大胜利，并且打破了所谓“皇军不可战胜”的神话的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '黄土岭战役',
      },
      {
        identifer: 'B',
        description: '平型关大捷',
      },
      {
        identifer: 'C',
        description: '镇南关大捷',
      },
      {
        identifer: 'D',
        description: '淞沪会战',
      },
    ],
    answer: 'B',
  },
  {
    index: 7,
    title: '解放战争转入战略进攻阶段后组织的三大战役是什么？请按时间先后顺序进行选择（ ）。',
    options: [
      {
        identifer: 'A',
        description: '辽沈战役、平津战役、淮海战役',
      },
      {
        identifer: 'B',
        description: '淮海战役、平津战役、辽沈战役',
      },
      {
        identifer: 'C',
        description: '辽沈战役、淮海战役、平津战役',
      },
      {
        identifer: 'D',
        description: '平津战役、淮海战役、辽沈战役',
      },
    ],
    answer: 'C',
  },
  {
    index: 8,
    title: '1860年第二次鸦片战争时期，（ ）火烧了圆明园。',
    options: [
      {
        identifer: 'A',
        description: '八国联军 ',
      },
      {
        identifer: 'B',
        description: '英国军队 ',
      },
      {
        identifer: 'C',
        description: '英法联军',
      },
      {
        identifer: 'D',
        description: '德法联军',
      },
    ],
    answer: 'C',
  },
  {
    index: 9,
    title: '五四时期，陈独秀认为要依靠“德先生”和“赛先生”来救中国。他说的“德先生”是指（ ）。',
    options: [
      {
        identifer: 'A',
        description: '民主',
      },
      {
        identifer: 'B',
        description: '科学',
      },
      {
        identifer: 'C',
        description: '伦理',
      },
      {
        identifer: 'D',
        description: '宗教',
      },
    ],
    answer: 'A',
  },
  {
    index: 10,
    title: '中国共产党党徽为镰刀和（ ）组成的图案。',
    options: [
      {
        identifer: 'A',
        description: '斧头',
      },
      {
        identifer: 'B',
        description: '火炬',
      },
      {
        identifer: 'C',
        description: '五星',
      },
      {
        identifer: 'D',
        description: '锤头',
      },
    ],
    answer: 'D',
  },
  {
    index: 11,
    title: '（ ）是中国革命史上具有划时代意义的事件，标志着新民主主义革命的伟大开端。',
    options: [
      {
        identifer: 'A',
        description: '辛亥革命',
      },
      {
        identifer: 'B',
        description: '中国共产党的建立',
      },
      {
        identifer: 'C',
        description: '五四运动',
      },
      {
        identifer: 'D',
        description: '第一次国共合作',
      },
    ],
    answer: 'C',
  },
  {
    index: 12,
    title: '1919年5月4日，五四爱国运动爆发的直接导火索是（  ）。',
    options: [
      {
        identifer: 'A',
        description: '巴黎和会上中国外交的失败',
      },
      {
        identifer: 'B',
        description: '日本制造“济南惨案”',
      },
      {
        identifer: 'C',
        description: '日本出兵占领青岛',
      },
      {
        identifer: 'D',
        description: '《凡尔赛和约》的签订',
      },
    ],
    answer: 'A',
  },
  {
    index: 13,
    title: '1919年5月，中国最早的马克思主义者（  ）在《新青年》发表《我的马克思主义观》，系统地介绍了马克思主义。',
    options: [
      {
        identifer: 'A',
        description: '陈独秀 ',
      },
      {
        identifer: 'B',
        description: '李大钊',
      },
      {
        identifer: 'C',
        description: '周恩来 ',
      },
      {
        identifer: 'D',
        description: '邓中夏',
      },
    ],
    answer: 'B',
  },
  {
    index: 14,
    title: '1920年8月，（  ）翻译的《共产党宣言》第一个中文全译本在上海出版。',
    options: [
      {
        identifer: 'A',
        description: '李大钊 ',
      },
      {
        identifer: 'B',
        description: '陈独秀',
      },
      {
        identifer: 'C',
        description: '李达',
      },
      {
        identifer: 'D',
        description: '陈望道',
      },
    ],
    answer: 'D',
  },
  {
    index: 15,
    title: '中国共产党第一次全国代表大会是于（  ）在上海召开的。',
    options: [
      {
        identifer: 'A',
        description: '1919年7月1日',
      },
      {
        identifer: 'B',
        description: '1920年7月23日',
      },
      {
        identifer: 'C',
        description: '1921年7月23日',
      },
      {
        identifer: 'D',
        description: '1922年7月1日',
      },
    ],
    answer: 'C',
  },
  {
    index: 16,
    title: '中国共产党第一次全国代表大会在上海举行时，参加会议的有毛泽东、董必武、李达等13名代表，他们代表了全国（  ）多名党员。',
    options: [
      {
        identifer: 'A',
        description: '50',
      },
      {
        identifer: 'B',
        description: '60',
      },
      {
        identifer: 'C',
        description: '80',
      },
      {
        identifer: 'D',
        description: '100',
      },
    ],
    answer: 'A',
  },
  {
    index: 17,
    title: '1921年7月，中国共产党第一次全国代表大会在上海召开期间，由于受到暗探侦察和巡捕骚扰，大会最后一天的会议转移到（ ）举行。',
    options: [
      {
        identifer: 'A',
        description: '上海浦东',
      },
      {
        identifer: 'B',
        description: '无锡太湖',
      },
      {
        identifer: 'C',
        description: '嘉兴南湖',
      },
      {
        identifer: 'D',
        description: '杭州西湖',
      },
    ],
    answer: 'C',
  },
  {
    index: 18,
    title: '作为党公开领导工人运动机关的中国劳动组合书记部是在党的（  ）之后成立的。',
    options: [
      {
        identifer: 'A',
        description: '一大',
      },
      {
        identifer: 'B',
        description: '二大',
      },
      {
        identifer: 'C',
        description: '三大',
      },
      {
        identifer: 'D',
        description: '四大',
      },
    ],
    answer: 'A',
  },
  {
    index: 19,
    title: '党的（　）第一次明确提出彻底的反对帝国主义、反对封建主义的民主革命纲领。',
    options: [
      {
        identifer: 'A',
        description: '一大',
      },
      {
        identifer: 'B',
        description: '二大',
      },
      {
        identifer: 'C',
        description: '三大',
      },
      {
        identifer: 'D',
        description: '四大',
      },
    ],
    answer: 'B',
  },
  {
    index: 20,
    title: '在1922年5月全国第一次劳动大会前后，以1922年1月（　）罢工为起点，1923年2月（　）工人罢工为终点，掀起了中国工人运动的第一个高潮。',
    options: [
      {
        identifer: 'A',
        description: '省港　安源路矿',
      },
      {
        identifer: 'B',
        description: '香港海员　京汉铁路',
      },
      {
        identifer: 'C',
        description: '省港　京张铁路',
      },
      {
        identifer: 'D',
        description: '香港海员 京奉铁路',
      },
    ],
    answer: 'B',
  },
  {
    index: 21,
    title: '1923年6月，中共三大在（  ）召开，决定全体共产党员以个人名义加入国民党，以建立各民主阶级的统一战线。',
    options: [
      {
        identifer: 'A',
        description: '北京',
      },
      {
        identifer: 'B',
        description: '上海',
      },
      {
        identifer: 'C',
        description: '广州',
      },
      {
        identifer: 'D',
        description: '武汉',
      },
    ],
    answer: 'C',
  },
  {
    index: 22,
    title: '1925年1月，党在上海举行（  ）。这次大会明确提出了无产阶级在民主革命中的领导权和工农联盟问题。',
    options: [
      {
        identifer: 'A',
        description: '三届一中全会',
      },
      {
        identifer: 'B',
        description: '第四次全国代表大会',
      },
      {
        identifer: 'C',
        description: '中央执行委员会特别会议',
      },
      {
        identifer: 'D',
        description: '中共中央紧急会议',
      },
    ],
    answer: 'B',
  },
  {
    index: 23,
    title: '中国工人运动史上持续时间最长的一次罢工是（　）。',
    options: [
      {
        identifer: 'A',
        description: '安源路矿工人罢工',
      },
      {
        identifer: 'B',
        description: '京汉铁路工人大罢工',
      },
      {
        identifer: 'C',
        description: '省港大罢工',
      },
      {
        identifer: 'D',
        description: '香港海员罢工',
      },
    ],
    answer: 'C',
  },
  {
    index: 24,
    title: '1926年5月，第六届农民运动讲习所在广州开学，由（  ）担任所长。',
    options: [
      {
        identifer: 'A',
        description: '毛泽东',
      },
      {
        identifer: 'B',
        description: '彭湃',
      },
      {
        identifer: 'C',
        description: '萧楚女',
      },
      {
        identifer: 'D',
        description: '高语罕',
      },
    ],
    answer: 'A',
  },
  {
    index: 25,
    title: '北伐战争期间，叶挺独立团所在的国民革命军（　）被称为“铁军”。',
    options: [
      {
        identifer: 'A',
        description: '第一军',
      },
      {
        identifer: 'B',
        description: '第二军',
      },
      {
        identifer: 'C',
        description: '第四军',
      },
      {
        identifer: 'D',
        description: '第七军',
      },
    ],
    answer: 'C',
  },
  {
    index: 26,
    title: '1926年9月，毛泽东发表（　）一文，指出“农民问题乃国民革命的中心问题”。',
    options: [
      {
        identifer: 'A',
        description: '《中国社会各阶级的分析》',
      },
      {
        identifer: 'B',
        description: '《国民革命与农民运动》',
      },
      {
        identifer: 'C',
        description: '《湖南农民运动考察报告》',
      },
      {
        identifer: 'D',
        description: '《星星之火，可以燎原》',
      },
    ],
    answer: 'B',
  },
  {
    index: 27,
    title: '1927年8月1日，在周恩来、贺龙、叶挺、朱德、刘伯承等领导下举行的（  ）打响了武装反抗国民党反动派的第一枪，标志着中国共产党独立地领导革命战争、创建人民军队和武装夺取政权的开始。',
    options: [
      {
        identifer: 'A',
        description: '秋收起义',
      },
      {
        identifer: 'B',
        description: '南昌起义',
      },
      {
        identifer: 'C',
        description: '广州起义',
      },
      {
        identifer: 'D',
        description: '海陆丰起义',
      },
    ],
    answer: 'B',
  },
  {
    index: 28,
    title: '在1927年八七会议上，毛泽东提出了（  ）的思想。',
    options: [
      {
        identifer: 'A',
        description: '党指挥枪 ',
      },
      {
        identifer: 'B',
        description: '农村包围城市',
      },
      {
        identifer: 'C',
        description: '创建农村革命根据地',
      },
      {
        identifer: 'D',
        description: '枪杆子里出政权',
      },
    ],
    answer: 'D',
  },
  {
    index: 29,
    title: '毛泽东诗词“地主重重压迫，农民个个同仇。秋收时节暮云愁，霹雳一声暴动”反映的是1927年爆发的（　）。',
    options: [
      {
        identifer: 'A',
        description: '秋收起义',
      },
      {
        identifer: 'B',
        description: '南昌起义',
      },
      {
        identifer: 'C',
        description: '广州起义',
      },
      {
        identifer: 'D',
        description: '麻城起义',
      },
    ],
    answer: 'A',
  },
  {
    index: 30,
    title: '1927年，毛泽东领导的秋收起义部队进军井冈山时，在江西永新县进行了著名的“三湾改编”，把支部建在（  ）上，加强了党对军队的领导。',
    options: [
      {
        identifer: 'A',
        description: '团',
      },
      {
        identifer: 'B',
        description: '营',
      },
      {
        identifer: 'C',
        description: '连',
      },
      {
        identifer: 'D',
        description: '排',
      },
    ],
    answer: 'C',
  },
  {
    index: 31,
    title: '1927年12月11日，在张太雷、叶挺、周文雍、恽代英、杨殷、叶剑英、聂荣臻等人的领导下，发动了（  ），建立苏维埃政府。',
    options: [
      {
        identifer: 'A',
        description: '秋收起义',
      },
      {
        identifer: 'B',
        description: '南昌起义',
      },
      {
        identifer: 'C',
        description: '广州起义',
      },
      {
        identifer: 'D',
        description: '麻城起义',
      },
    ],
    answer: 'C',
  },
  {
    index: 32,
    title: '党的历史上唯一一次在国外召开的全国代表大会是（　）。',
    options: [
      {
        identifer: 'A',
        description: '四大',
      },
      {
        identifer: 'B',
        description: '五大',
      },
      {
        identifer: 'C',
        description: '六大',
      },
      {
        identifer: 'D',
        description: '七大',
      },
    ],
    answer: 'C',
  },
  {
    index: 33,
    title: '1928年12月，在中共中央代表（  ）和张云逸、雷经天、韦拔群、李明瑞、俞作豫等人领导先后发动了百色起义和龙州起义，建立了红七军、红八军和左、右江革命根据地。',
    options: [
      {
        identifer: 'A',
        description: '邓小平',
      },
      {
        identifer: 'B',
        description: '彭德怀',
      },
      {
        identifer: 'C',
        description: '刘伯承',
      },
      {
        identifer: 'D',
        description: '滕代远',
      },
    ],
    answer: 'A',
  },
  {
    index: 34,
    title: '1930年1月，毛泽东在（  ）中总结了各个革命根据地的经验，发展了“工农武装割据”的思想，开始形成了以农村包围城市，在农村地区先建立和发展红色政权，待条件成熟时再夺取全国政权的关于中国革命道路的理论。',
    options: [
      {
        identifer: 'A',
        description: '《湖南农民运动考察报告》',
      },
      {
        identifer: 'B',
        description: '《反对本本主义》',
      },
      {
        identifer: 'C',
        description: '《古田会议决议》',
      },
      {
        identifer: 'D',
        description: '《星星之火，可以燎原》',
      },
    ],
    answer: 'D',
  },
  {
    index: 35,
    title: '1931年春，毛泽东总结土地革命的经验，制定了一条完整的土地革命路线，即（　），保护中小工商业者，消灭地主阶级，变封建半封建的土地所有制为农民的土地所有制。',
    options: [
      {
        identifer: 'A',
        description: '依靠贫农，联合雇农、中农，限制富农',
      },
      {
        identifer: 'B',
        description: '依靠贫农，联合雇农、中农，消灭富农',
      },
      {
        identifer: 'C',
        description: '依靠贫农、雇农，联合中农，限制富农',
      },
      {
        identifer: 'D',
        description: '依靠贫农、雇农，限制中农，消灭富农',
      },
    ],
    answer: 'C',
  },
  {
    index: 36,
    title: '在左倾错误的影响下，中央苏区第五次反“围剿”失利，中央红军于（  ）开始长征。',
    options: [
      {
        identifer: 'A',
        description: '1934年10月',
      },
      {
        identifer: 'B',
        description: '1934年5月',
      },
      {
        identifer: 'C',
        description: '1934年1月',
      },
      {
        identifer: 'D',
        description: '1933年10月',
      },
    ],
    answer: 'A',
  },
  {
    index: 37,
    title: '红军主力长征后，留下来的一部分红军和游击队在（　）的领导下，独立坚持了三年之久的游击战争。',
    options: [
      {
        identifer: 'A',
        description: '陈毅、贺龙',
      },
      {
        identifer: 'B',
        description: '贺龙、项英',
      },
      {
        identifer: 'C',
        description: '项英、陈毅',
      },
      {
        identifer: 'D',
        description: '叶挺、贺龙',
      },
    ],
    answer: 'C',
  },
  {
    index: 38,
    title: '（　）是中央红军长征中最壮烈的一战，此战后，红军人数从长征出发时的8.6万余人锐减至3万余人。',
    options: [
      {
        identifer: 'A',
        description: '湘江战役',
      },
      {
        identifer: 'B',
        description: '乌江之战',
      },
      {
        identifer: 'C',
        description: '飞夺泸定桥',
      },
      {
        identifer: 'D',
        description: '四渡赤水',
      },
    ],
    answer: 'A',
  },
  {
    index: 39,
    title: '1935年1月，在红军长征途中，中央政治局召开了扩大会议，即（ ），结束了党内“左”倾教条主义错误在中央的统治，确立了毛泽东在中共中央和红军中的领导地位。在极其危急的情况下挽救了党、挽救了红军、挽救了中国革命，成为党的历史上一个生死攸关的转折点。',
    options: [
      {
        identifer: 'A',
        description: '八七会议',
      },
      {
        identifer: 'B',
        description: '遵义会议',
      },
      {
        identifer: 'C',
        description: '通道会议',
      },
      {
        identifer: 'D',
        description: '两河口会议',
      },
    ],
    answer: 'B',
  },
  {
    index: 40,
    title: '1935年，在中国共产党的组织和领导下，针对日本制造的华北事变，北平学生举行了声势浩大的抗日救亡示威游行活动，这就是著名的（ ）。',
    options: [
      {
        identifer: 'A',
        description: '一二一运动',
      },
      {
        identifer: 'B',
        description: '五四运动',
      },
      {
        identifer: 'C',
        description: '一二九运动',
      },
      {
        identifer: 'D',
        description: '五二〇运动',
      },
    ],
    answer: 'C',
  },
  {
    index: 41,
    title: '红军主力长征至大凉山彝族地区时，红军总参谋长（　）同彝族果基部落首领小叶丹歃血为盟，实现了民族团结，使红军顺利地通过这个地区。',
    options: [
      {
        identifer: 'A',
        description: '徐向前',
      },
      {
        identifer: 'B',
        description: '刘伯承',
      },
      {
        identifer: 'C',
        description: '叶剑英',
      },
      {
        identifer: 'D',
        description: '林彪',
      },
    ],
    answer: 'B',
  },
  {
    index: 42,
    title: '1935年中国共产党发表了著名的八一宣言，提出了（  ）的口号。',
    options: [
      {
        identifer: 'A',
        description: '停止内战，一致抗日',
      },
      {
        identifer: 'B',
        description: '反蒋抗日',
      },
      {
        identifer: 'C',
        description: '国共合作，共同抗日',
      },
      {
        identifer: 'D',
        description: '逼蒋抗日',
      },
    ],
    answer: 'A',
  },
  {
    index: 43,
    title: '1935年12月，中国共产党召开了著名的（  ），确定了建立抗日民族统一战线的政策。',
    options: [
      {
        identifer: 'A',
        description: '六届四中全会',
      },
      {
        identifer: 'B',
        description: '瓦窑堡会议',
      },
      {
        identifer: 'C',
        description: '遵义会议',
      },
      {
        identifer: 'D',
        description: '洛川会议',
      },
    ],
    answer: 'B',
  },
  {
    index: 44,
    title: '1936年6月，美国记者埃德加·斯诺访问陕北并根据对毛泽东、周恩来、朱德等中共领导人和红军将士进行了访谈，撰成（  ）一书，第一次向外界详细介绍了中国共产党和红军的事迹，中国国内和世界产生了重大影响。',
    options: [
      {
        identifer: 'A',
        description: '《来自红色中国的报道》',
      },
      {
        identifer: 'B',
        description: '《中国未完成的革命》',
      },
      {
        identifer: 'C',
        description: '《西行漫记》（又名《红星照耀中国》）',
      },
      {
        identifer: 'D',
        description: '《红色中国的挑战》',
      },
    ],
    answer: 'C',
  },
  {
    index: 45,
    title: '1936年12月12日发生的震惊中外的（  ）及其和平解决，对促成以国共两党合作为基础的抗日民族统一战线的建立，起了重要的作用。',
    options: [
      {
        identifer: 'A',
        description: '西安事变',
      },
      {
        identifer: 'B',
        description: '华北事变',
      },
      {
        identifer: 'C',
        description: '两广事变',
      },
      {
        identifer: 'D',
        description: '福建事变',
      },
    ],
    answer: 'A',
  },
  {
    index: 46,
    title: '1937年8月22日至25日，中央召开著名的洛川会议，通过了（  ），提出了全面抗战路线。',
    options: [
      {
        identifer: 'A',
        description: '《抗日救国十大纲领》',
      },
      {
        identifer: 'B',
        description: '《中共中央为公布国共合作宣言》',
      },
      {
        identifer: 'C',
        description: '《抗日救国告全体同胞书》',
      },
      {
        identifer: 'D',
        description: '《中国共产党在抗日时期的任务》',
      },
    ],
    answer: 'A',
  },
  {
    index: 47,
    title: '国共两党实现第二次合作的标志是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '西安事变的和平解决',
      },
      {
        identifer: 'B',
        description: '八一三事变后国民政府发表自卫声明',
      },
      {
        identifer: 'C',
        description: '红军改编为国民革命军',
      },
      {
        identifer: 'D',
        description: '国民党公布《中共中央为公布国共合作宣言》并发表蒋介石谈话',
      },
    ],
    answer: 'D',
  },
  {
    index: 48,
    title: '1937年8月25日，中央军委发布红军改编为国民革命军第八路军的命令，八路军参谋长是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '彭德怀',
      },
      {
        identifer: 'B',
        description: '朱德',
      },
      {
        identifer: 'C',
        description: '叶剑英',
      },
      {
        identifer: 'D',
        description: '左权',
      },
    ],
    answer: 'C',
  },
  {
    index: 49,
    title: '1937年8月25日，中央军委发布红军改编为国民革命军第八路军的命令，八路军政治部主任是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '左权',
      },
      {
        identifer: 'B',
        description: '邓小平',
      },
      {
        identifer: 'C',
        description: '周恩来',
      },
      {
        identifer: 'D',
        description: '任弼时',
      },
    ],
    answer: 'D',
  },
  {
    index: 50,
    title: '1937年8月，红军改编为八路军后，担任一一五师师长的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '林彪',
      },
      {
        identifer: 'B',
        description: '贺龙',
      },
      {
        identifer: 'C',
        description: '刘伯承',
      },
      {
        identifer: 'D',
        description: '聂荣臻',
      },
    ],
    answer: 'A',
  },
  {
    index: 51,
    title: '下列说法无误的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '前苏联小说《钢铁是怎样炼成的》作为一部闪烁着崇高的理想主义光芒的长篇小说，它最大的成功之处就在于塑造了奥斯特洛夫斯基这一无产阶级英雄形象。',
      },
      {
        identifer: 'B',
        description: '《小石潭记》《岳阳楼记》《醉翁亭记》《水调歌头（明月几时有）》都是“唐宋八大家”的作品。',
      },
      {
        identifer: 'C',
        description: '《海底两万里》《名人传》的作者分别是“现代科学幻想小说之父”凡尔纳和法国著名的人道主义作家罗曼〃罗兰。',
      },
      {
        identifer: 'D',
        description: '《史记》是我国第一部纪传体通史，《左传》是我国第一部叙事完备的编年体史书，《战国策》是我国第一部语录体史书。',
      },
    ],
    answer: 'C',
  },
  {
    index: 52,
    title: '下面名著中的人物和情节对应不正确的一项是( )。',
    options: [
      {
        identifer: 'A',
        description: '孙悟空——车迟国斗法（《西游记》）',
      },
      {
        identifer: 'B',
        description: '张飞——刮骨疗毒（《三国演义》）',
      },
      {
        identifer: 'C',
        description: '林黛玉——焚稿断痴情（《红楼梦》）',
      },
      {
        identifer: 'D',
        description: '鲁提辖——拳打镇关西（《水浒传》）',
      },
    ],
    answer: 'B',
  },
  {
    index: 53,
    title: '下列说法有误的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《战国策》是西汉末年刘向整理编辑的一部国别体史书，我们学过的《唐雎不辱使命》《邹忌讽齐王纳谏》《曹刿论战》均选自此书。',
      },
      {
        identifer: 'B',
        description: '《小石潭记》《醉翁亭记》是我国古典文学“记”类作品中的经典之作，其作者都在“唐宋八大家”之列。',
      },
      {
        identifer: 'C',
        description: '蒲松龄，字留仙，世称“聊斋先生”，清代文学家。郭沫若曾为蒲松龄故居写了“写鬼写妖高人一等，刺贪刺虐入骨三分”的对联。',
      },
      {
        identifer: 'D',
        description: '任何一部优秀的小说，总有使人难忘的人物形象，如《西游记》中的猪八戒、《儒林外史》中的范进、《故乡》中的杨二嫂、《我的叔叔于勒》中的菲利浦夫妇等。塑造人物形象是小说反映社会生活的主要手段。',
      },
    ],
    answer: 'A',
  },
  {
    index: 54,
    title: '有关文学常识的表述完全正确的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '朱自清是散文家、诗人、学者，我们学过的《背影》《老王》都是他的作品。',
      },
      {
        identifer: 'B',
        description: '鲁迅的散文《社戏》《从百草园到三味书屋》都表现了童年生活的情趣。',
      },
      {
        identifer: 'C',
        description: '《变色龙》的作者是法国作家契诃夫，他是世界著名的短篇小说巨匠。',
      },
      {
        identifer: 'D',
        description: '苏轼是“唐宋八大家”之一，我们曾学过他的作品《记承天寺夜游》',
      },
    ],
    answer: 'D',
  },
  {
    index: 55,
    title: '下列有关名著表述有误的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《水浒》成功地塑造了一批栩栩如生的人物形象，如鲁智深和李逵，他们都嫉恶如仇、侠肝义胆、脾气火爆、粗中有细，给人留下了深刻的印象。',
      },
      {
        identifer: 'B',
        description: '《繁星〃春水》用短小轻灵的文字形式，表现母爱、童真、自然三大主题。',
      },
      {
        identifer: 'C',
        description: '“用痛苦换取欢乐”这句话是对贝多芬一生的归纳。世界不曾给予贝多芬欢乐，但他却创造了欢乐来给予世界！',
      },
      {
        identifer: 'D',
        description: '《格列佛游记》讲述了英国船医格列佛因海难等原因等流落到小人国、大人国等地的有趣经历，想像奇异，讽刺尖锐而深刻。',
      },
    ],
    answer: 'A',
  },
  {
    index: 56,
    title: '下列关于文学常识的表述正确的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《西游记》作者是元末明初小说家吴承恩。',
      },
      {
        identifer: 'B',
        description: '王维,唐代诗人、画家,字摩诘。他是唐代“边塞诗派”的代表诗人,代表作品 如《使至塞上》。',
      },
      {
        identifer: 'C',
        description: '莫泊桑，法国作家，被称为短篇小说巨匠，代表作《项链》《羊脂球》。我们学过他的《福楼拜家的星期天》《我的叔叔于勒》。',
      },
      {
        identifer: 'D',
        description: '“假如生活欺骗了你,不要悲伤,不要心急!忧郁的日子须要镇静:相信吧,快乐的日子将会来临。”出自德国诗人普希金的诗歌《假如生活欺骗了你》。',
      },
    ],
    answer: 'C',
  },
  {
    index: 57,
    title: '选出下列说法有误的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '李白，字太白，号青莲居士，唐代诗人。我们曾学过他的《闻王昌龄左迁龙标遥有此寄》。',
      },
      {
        identifer: 'B',
        description: '《江城子〃密州出猎》的作者是苏轼，字子瞻，自号东坡居士，宋代文学家。',
      },
      {
        identifer: 'C',
        description: '《诗经》是我国最早的一部诗歌总集，收录了从西周到春秋时期的诗歌305篇，也称“诗三百”。',
      },
      {
        identifer: 'D',
        description: '《泊秦淮》选自《樊川文集》，作者杜牧，字牧之，宋代诗人。',
      },
    ],
    answer: 'D',
  },
  {
    index: 58,
    title: '以下故事情节中，以宋江为主要人物的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '私放晁天王',
      },
      {
        identifer: 'B',
        description: '景阳冈打虎',
      },
      {
        identifer: 'C',
        description: '风雪山神庙',
      },
      {
        identifer: 'D',
        description: '拳打镇关西',
      },
    ],
    answer: 'A',
  },
  {
    index: 59,
    title: '他贫穷却不趋炎附势，残疾却不屈从命运；他战胜了种种的磨难，扼住了命运的咽喉，攀上了生命的巅峰。他是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '托尔斯泰',
      },
      {
        identifer: 'B',
        description: '米开朗琪罗',
      },
      {
        identifer: 'C',
        description: '贝多芬',
      },
      {
        identifer: 'D',
        description: '祥子',
      },
    ],
    answer: 'C',
  },
  {
    index: 60,
    title: '“我砍倒了一棵杉树⋯⋯然后，我又花了一个月的工夫把它刮得略具规模，成为船底的形状，使它可以船底朝下浮在水里。又花了将近三个月的工夫把它的内部挖空，把它做得完全像一只小船。”这段话出自（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《格列佛游记》',
      },
      {
        identifer: 'B',
        description: '《骆驼祥子》',
      },
      {
        identifer: 'C',
        description: '《名人传》',
      },
      {
        identifer: 'D',
        description: '《鲁滨孙漂流记》',
      },
    ],
    answer: 'D',
  },
  {
    index: 61,
    title: '“豆蔻”是指（ ）岁。',
    options: [
      {
        identifer: 'A',
        description: '十三',
      },
      {
        identifer: 'B',
        description: '十五',
      },
      {
        identifer: 'C',
        description: '十八',
      },
      {
        identifer: 'D',
        description: '二十',
      },
    ],
    answer: 'A',
  },
  {
    index: 62,
    title: '友谊的深浅，由下列那一个成语可以看出情义最为深重？（ ）。',
    options: [
      {
        identifer: 'A',
        description: '莫逆之交',
      },
      {
        identifer: 'B',
        description: '金兰之交',
      },
      {
        identifer: 'C',
        description: '刎颈之交',
      },
      {
        identifer: 'D',
        description: '点头之交',
      },
    ],
    answer: 'C',
  },
  {
    index: 63,
    title: '一提到书法中的草书，人们便会想到“颠张醉素”，请问下列属于颠张的作品的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '自叙帖',
      },
      {
        identifer: 'B',
        description: '自言帖',
      },
      {
        identifer: 'C',
        description: '中秋帖',
      },
      {
        identifer: 'D',
        description: '黄州寒食帖',
      },
    ],
    answer: 'B',
  },
  {
    index: 64,
    title: '鲁迅先生称（ ）为“史家之绝唱，无韵之离骚”。',
    options: [
      {
        identifer: 'A',
        description: '司马迁',
      },
      {
        identifer: 'B',
        description: '李白',
      },
      {
        identifer: 'C',
        description: '曹植',
      },
      {
        identifer: 'D',
        description: '杜甫',
      },
    ],
    answer: 'A',
  },
  {
    index: 65,
    title: '郑谷有诗曰：“何事文星与酒星，一时钟在李先生。高吟大醉三千百，留着人间伴月明。”诗中的李先生指的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '李商隐',
      },
      {
        identifer: 'B',
        description: '李贺',
      },
      {
        identifer: 'C',
        description: '李白',
      },
      {
        identifer: 'D',
        description: '李煜',
      },
    ],
    answer: 'C',
  },
  {
    index: 66,
    title: '下列说法正确的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '李清照，宋代女词人，号易安居士，在诗词方面均有成就。我们学过她的《武陵春》和《如梦令》',
      },
      {
        identifer: 'B',
        description: '“你若真心要学，我这里有《王摩诘全集》，你且把他的五言律读一百首，细心揣摩透熟了，然后再读一二百首老杜的七言律⋯不用一年的工夫，不愁不是诗翁了!”这句话出自曹雪芹的小说《红楼梦》中薛宝钗之口。',
      },
      {
        identifer: 'C',
        description: '“唐宋八大家”指的是韩愈、柳宗元、杜甫、苏洵、苏轼、苏辙、王安石、欧阳修。',
      },
      {
        identifer: 'D',
        description: '冰心，原名谢婉莹，现代著名作家、儿童文学家，深受印度作家泰戈尔的影响，主要作品有《繁星》《女神》《寄小读者》等。',
      },
    ],
    answer: 'A',
  },
  {
    index: 67,
    title: '下列关于文学常识的说法有错误的一项是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《陈涉世家》节选自我国第一部纪传体通史《史记》，它的作者是西汉史学家、文学家司马迁，《孙权劝学》选自北宋政治家、史学家司马光主持编纂的编年体通史《资治通鉴》。',
      },
      {
        identifer: 'B',
        description: '辑录了《阿长与〈山海经〉》《风筝》《藤野先生》等作品的《朝花夕拾》，是鲁迅先生回忆童年、少年和青年时期不同生活经历与体验的散文集。',
      },
      {
        identifer: 'C',
        description: '我国台湾诗人余光中的《乡愁》，通过“邮票”“船票”“坟墓”和“海峡”这四种物象表达内心情感。',
      },
      {
        identifer: 'D',
        description: '奥楚蔑洛夫、韩麦尔这两个人物分别出自俄国契诃夫的《变色龙》	、法国都德的《最后一课》。',
      },
    ],
    answer: 'B',
  },
  {
    index: 68,
    title: '下列文学常识搭配有误的一项是( ）。',
    options: [
      {
        identifer: 'A',
        description: '《与朱元思书》——吴均——南朝梁文学家',
      },
      {
        identifer: 'B',
        description: '《岳阳楼记》——欧阳修——北宋文学家',
      },
      {
        identifer: 'C',
        description: '《芦花荡》——孙犁——现代作家',
      },
      {
        identifer: 'D',
        description: '《假如生活欺骗了你》——普希金——俄国诗人',
      },
    ],
    answer: 'B',
  },
  {
    index: 69,
    title: '唐代著作《五经正义》出自（	）。',
    options: [
      {
        identifer: 'A',
        description: '韩愈',
      },
      {
        identifer: 'B',
        description: '孙复',
      },
      {
        identifer: 'C',
        description: '孔颖达',
      },
      {
        identifer: 'D',
        description: '程颐',
      },
    ],
    answer: 'C',
  },
  {
    index: 70,
    title: '下面哪句是道家语（ ）。',
    options: [
      {
        identifer: 'A',
        description: '视人之国若视其国,视人之家若视其家,视人之身若视其身',
      },
      {
        identifer: 'B',
        description: '道可道,非常道,名可名,非常名',
      },
      {
        identifer: 'C',
        description: '然则旋岁偃岳而常静,江河竟注而不流,野马飘鼓而不动,日月历天而不周,何复怪哉?',
      },
      {
        identifer: 'D',
        description: '为政以德,譬如北辰,居其所,而众星拱之',
      },
    ],
    answer: 'B',
  },
  {
    index: 71,
    title: '科举制在中国影响深远，乡试录取者称为“举人”，会试录取者称为“贡生”，那么殿试录取者称为（ ）。',
    options: [
      {
        identifer: 'A',
        description: '“大元”',
      },
      {
        identifer: 'B',
        description: '“解元”',
      },
      {
        identifer: 'C',
        description: '“进士”',
      },
      {
        identifer: 'D',
        description: '“榜眼”',
      },
    ],
    answer: 'C',
  },
  {
    index: 72,
    title: '“生当做人杰，死亦为鬼雄，至今思项羽，不肯过江东。”为哪位诗人的作品？（ ）。',
    options: [
      {
        identifer: 'A',
        description: '李白',
      },
      {
        identifer: 'B',
        description: '杜甫',
      },
      {
        identifer: 'C',
        description: '李商隐',
      },
      {
        identifer: 'D',
        description: '李清照',
      },
    ],
    answer: 'D',
  },
  {
    index: 73,
    title: '“四羊方尊”是哪个朝代的文物：（ ）。',
    options: [
      {
        identifer: 'A',
        description: '周',
      },
      {
        identifer: 'B',
        description: '元',
      },
      {
        identifer: 'C',
        description: '商',
      },
      {
        identifer: 'D',
        description: '夏',
      },
    ],
    answer: 'C',
  },
  {
    index: 74,
    title: ' 张渭《别韦郎中》一诗中有“不知郎中桑落酒，教人无奈别离何”一句，句中所提到的“桑落酒”原产地在（ ）。',
    options: [
      {
        identifer: 'A',
        description: '永济',
      },
      {
        identifer: 'B',
        description: '桑落',
      },
      {
        identifer: 'C',
        description: '汾阳',
      },
      {
        identifer: 'D',
        description: '绵竹',
      },
    ],
    answer: 'A',
  },
  {
    index: 75,
    title: '“天道有常，不为尧存，不为桀亡。”是百家中那位思想家的观点( )。',
    options: [
      {
        identifer: 'A',
        description: '孟子',
      },
      {
        identifer: 'B',
        description: '韩非子',
      },
      {
        identifer: 'C',
        description: '荀子',
      },
      {
        identifer: 'D',
        description: '老子',
      },
    ],
    answer: 'C',
  },
  {
    index: 76,
    title: '爵是一种典礼时用的酒器，那么爵有几只脚？（ ）。',
    options: [
      {
        identifer: 'A',
        description: '三只脚',
      },
      {
        identifer: 'B',
        description: '两只脚',
      },
      {
        identifer: 'C',
        description: '四只脚',
      },
      {
        identifer: 'D',
        description: '五只脚',
      },
    ],
    answer: 'A',
  },
  {
    index: 77,
    title: '魏晋时期，建安七子是当时文学的代表人物，下列属于建安七子的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '嵇康',
      },
      {
        identifer: 'B',
        description: '曹植',
      },
      {
        identifer: 'C',
        description: '山涛',
      },
      {
        identifer: 'D',
        description: '阮瑀',
      },
    ],
    answer: 'D',
  },
  {
    index: 78,
    title: '南宋时期出现了中兴四大诗人，其中陆游声名最著，下列各诗句不是陆游所作的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '塞上长城空自许，镜中衰鬓已先斑',
      },
      {
        identifer: 'B',
        description: '山重水复疑无路，柳暗花明又一村',
      },
      {
        identifer: 'C',
        description: '折腰曾愧五斗米，负郭元无三顷田',
      },
      {
        identifer: 'D',
        description: '京华结交尽奇士，意气相期共生死',
      },
    ],
    answer: 'C',
  },
  {
    index: 79,
    title: '下列哪一个名称的由来与伍子胥有关？（	）。',
    options: [
      {
        identifer: 'A',
        description: '月老',
      },
      {
        identifer: 'B',
        description: '千金小姐',
      },
      {
        identifer: 'C',
        description: '新郎',
      },
      {
        identifer: 'D',
        description: '岳父',
      },
    ],
    answer: 'B',
  },
  {
    index: 80,
    title: '下列不属于中医别称的的是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '杏林',
      },
      {
        identifer: 'B',
        description: '悬壶',
      },
      {
        identifer: 'C',
        description: '黄芪',
      },
      {
        identifer: 'D',
        description: '歧黄',
      },
    ],
    answer: 'C',
  },
  {
    index: 81,
    title: '“茕茕子立，形影相吊”出自（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《出师表》',
      },
      {
        identifer: 'B',
        description: '《答司马谏议书》',
      },
      {
        identifer: 'C',
        description: '《陈情表》',
      },
      {
        identifer: 'D',
        description: '《报刘一丈书》',
      },
    ],
    answer: 'C',
  },
  {
    index: 82,
    title: '将《孟子》由子部入经部的人物是谁?（ ）。',
    options: [
      {
        identifer: 'A',
        description: '孙复',
      },
      {
        identifer: 'B',
        description: '韩愈',
      },
      {
        identifer: 'C',
        description: '王安石',
      },
      {
        identifer: 'D',
        description: '朱熹',
      },
    ],
    answer: 'D',
  },
  {
    index: 83,
    title: '“形存则神存，形谢则神灭”是由谁提出的（ ）。',
    options: [
      {
        identifer: 'A',
        description: '范缜',
      },
      {
        identifer: 'B',
        description: '柳宗元',
      },
      {
        identifer: 'C',
        description: '周敦颐',
      },
      {
        identifer: 'D',
        description: '歧黄',
      },
    ],
    answer: 'A',
  },
  {
    index: 84,
    title: '（ ）时期，国家设立五经博士。',
    options: [
      {
        identifer: 'A',
        description: '秦始皇',
      },
      {
        identifer: 'B',
        description: '汉武帝',
      },
      {
        identifer: 'C',
        description: '汉高祖',
      },
      {
        identifer: 'D',
        description: '光武帝',
      },
    ],
    answer: 'B',
  },
  {
    index: 85,
    title: '菩提本无树,明镜亦非台,本来无一物,何处惹尘埃,出自（ ）。',
    options: [
      {
        identifer: 'A',
        description: '慧思',
      },
      {
        identifer: 'B',
        description: '慧能',
      },
      {
        identifer: 'C',
        description: '神秀',
      },
      {
        identifer: 'D',
        description: '玄奘',
      },
    ],
    answer: 'B',
  },
  {
    index: 86,
    title: '宋朝著名的女词人除了大家所熟悉的李清照外，还有一位朱淑真。前者的词集叫做《漱玉词》，请问后者词集是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《饮水词》',
      },
      {
        identifer: 'B',
        description: '《花外集》',
      },
      {
        identifer: 'C',
        description: '《梦窗词》',
      },
      {
        identifer: 'D',
        description: '《断肠词》',
      },
    ],
    answer: 'D',
  },
  {
    index: 87,
    title: '韩非子的法治思想主要强调什么相结合（ ）。',
    options: [
      {
        identifer: 'A',
        description: '道、术、势',
      },
      {
        identifer: 'B',
        description: '法、术、势',
      },
      {
        identifer: 'C',
        description: '道、法、势',
      },
      {
        identifer: 'D',
        description: '道、法、师',
      },
    ],
    answer: 'B',
  },
  {
    index: 88,
    title: '国画是我国传统的美术形式，我国存世最早最完整的国画作品是下列的哪件作品？（ ）。',
    options: [
      {
        identifer: 'A',
        description: '顾恺之的《女史箴图》',
      },
      {
        identifer: 'B',
        description: '张僧繇的《梁武帝像》',
      },
      {
        identifer: 'C',
        description: '周昉的《簪花仕女图》',
      },
      {
        identifer: 'D',
        description: '吴道子的《天王送子图》',
      },
    ],
    answer: 'A',
  },
  {
    index: 89,
    title: '下列名句出处对应都正确的一项是（ ）①方今天下，舍我其谁。②朝闻道，夕死可矣。③吾生也有涯，而知也无涯。	④九层之台，起于累土。',
    options: [
      {
        identifer: 'A',
        description: '孔子	孟子	老子	庄子',
      },
      {
        identifer: 'B',
        description: '孟子	孔子	老子	庄子',
      },
      {
        identifer: 'C',
        description: '孟子	孔子	庄子	老子',
      },
      {
        identifer: 'D',
        description: '孔子	孟子	庄子	老子',
      },
    ],
    answer: 'C',
  },
  {
    index: 90,
    title: '鲜卑族俗称其主为（ ）。',
    options: [
      {
        identifer: 'A',
        description: '天子',
      },
      {
        identifer: 'B',
        description: '陛下',
      },
      {
        identifer: 'C',
        description: '可汗',
      },
      {
        identifer: 'D',
        description: '大王',
      },
    ],
    answer: 'C',
  },
  {
    index: 91,
    title: '西汉哪位皇帝在位是昭君出塞嫁给了呼韩邪单于（ ）。',
    options: [
      {
        identifer: 'A',
        description: '汉元帝',
      },
      {
        identifer: 'B',
        description: '汉武帝',
      },
      {
        identifer: 'C',
        description: '汉高祖',
      },
      {
        identifer: 'D',
        description: '汉明帝',
      },
    ],
    answer: 'A',
  },
  {
    index: 92,
    title: '“西出阳关无故人”中的“阳关”位于现在哪个省（ ）。',
    options: [
      {
        identifer: 'A',
        description: '新疆',
      },
      {
        identifer: 'B',
        description: '甘肃',
      },
      {
        identifer: 'C',
        description: '宁夏',
      },
      {
        identifer: 'D',
        description: '陕西',
      },
    ],
    answer: 'B',
  },
  {
    index: 93,
    title: '我国第一所创办国学研究机构的大学是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '北京大学',
      },
      {
        identifer: 'B',
        description: '清华大学',
      },
      {
        identifer: 'C',
        description: '厦门大学',
      },
      {
        identifer: 'D',
        description: '东南大学',
      },
    ],
    answer: 'A',
  },
  {
    index: 94,
    title: '“文章合为时而著，歌诗合为事而作”是由谁提出的（ ）。',
    options: [
      {
        identifer: 'A',
        description: '白居易',
      },
      {
        identifer: 'B',
        description: '柳宗元',
      },
      {
        identifer: 'C',
        description: '周敦颐',
      },
      {
        identifer: 'D',
        description: '刘禹锡',
      },
    ],
    answer: 'A',
  },
  {
    index: 95,
    title: '“甲骨学”在近代语言文字研究中占有重要地位。在甲骨学史上,有四位学者做出过重大贡献,被钱玄同誉为“甲骨四堂”。四位之中，号“雪堂”的是下列哪位学者（ ）。',
    options: [
      {
        identifer: 'A',
        description: '罗振玉',
      },
      {
        identifer: 'B',
        description: '王国维',
      },
      {
        identifer: 'C',
        description: '董作宾',
      },
      {
        identifer: 'D',
        description: '郭沫若',
      },
    ],
    answer: 'A',
  },
  {
    index: 96,
    title: '十三经是历史上十三部儒家经典的总称，分别是《诗经》、《尚书》、《周礼》、《仪礼》、《礼记》、《周易》、《左传》、《公羊传》、《谷粱传》、《论语》、《尔雅》、《孝经》、《孟子》。十三经由汉代的五经逐渐发展而来，最终形成于什么时期？（ ）。',
    options: [
      {
        identifer: 'A',
        description: '唐朝',
      },
      {
        identifer: 'B',
        description: '五代',
      },
      {
        identifer: 'C',
        description: '南宋',
      },
      {
        identifer: 'D',
        description: '明朝',
      },
    ],
    answer: 'C',
  },
  {
    index: 97,
    title: '下面有关佛教故事的画卷是（ ）。',
    options: [
      {
        identifer: 'A',
        description: '顾恺之的“女史箴图”',
      },
      {
        identifer: 'B',
        description: '张僧繇的“梁武帝像”',
      },
      {
        identifer: 'C',
        description: '周昉的“簪花仕女图”',
      },
      {
        identifer: 'D',
        description: '吴道子的“天王送子图”',
      },
    ],
    answer: 'D',
  },
  {
    index: 98,
    title: '中书令是唐代的重要的中央官员，由于唐太宗在即位前曾任这个职务，因此在唐朝此后的时期，这个官职轻易不授。安史之乱后，下列哪位曾经担任过中书令（ ）。',
    options: [
      {
        identifer: 'A',
        description: '郭子仪',
      },
      {
        identifer: 'B',
        description: '杨炎',
      },
      {
        identifer: 'C',
        description: '牛僧孺',
      },
      {
        identifer: 'D',
        description: '李德裕',
      },
    ],
    answer: 'A',
  },
  {
    index: 99,
    title: '下面哪个选项是”四书”的构成（ ）。',
    options: [
      {
        identifer: 'A',
        description: '大学.中庸.论语.尔雅',
      },
      {
        identifer: 'B',
        description: '大学.中庸.论语.孟子',
      },
      {
        identifer: 'C',
        description: '大学.孝经.论语.尔雅',
      },
      {
        identifer: 'D',
        description: '大学.孝经.论语.孟子',
      },
    ],
    answer: 'B',
  },
  {
    index: 100,
    title: '厦门大学校训“自强不息，止于至善”中的“止于至善”出自（ ）。',
    options: [
      {
        identifer: 'A',
        description: '《论语》',
      },
      {
        identifer: 'B',
        description: '《诗经》',
      },
      {
        identifer: 'C',
        description: '《礼记》',
      },
      {
        identifer: 'D',
        description: '《太平经》',
      },
    ],
    answer: 'C',
  },
];

module.exports = stock;
