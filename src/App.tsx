/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Wind, Radio, Sparkles } from 'lucide-react';

const avatarUrl = "/logo.png"; // Placeholder for the uploaded logo

const gufengSongs = {
  '2': Array.from(new Set(['落', '紫', '藏', '鱼', '劫', '初听', '芊芊', '断钗', '招摇', '月出', '悦神', '千年', '狐言', '惊鹊', '步戏', '红尘', '山鬼', '墓夏', '清音', '伶人', '怎叹', '青丝', '赤伶', '剑伤', '风月', '青衣', '春颂', '不染', '昔言', '年轮', '汝南', '琴师', '摧雪', '参商', '如歌', '栖凰', '对弈', '夜奔', '出仙', '相思', '万载', '剑魂', '祖籁', '标题', '哪吒', '空待', '识君', '伴我', '归潮', '观鹤', '酒家', '离骚', '春涧', '夜探', '不凡', '不悔', '与归', '娱神', '忘川', '隔世', '愿我', '繁花', '借月', '问情', '入画', '飞天', '逃禅', '无归', '与妆', '山僧', '囍', '至尊', '念破'])),
  '3': Array.from(new Set(['采茶纪', '回马枪', '水上灯', '桃花凉', '孽海记', '湖心亭', '风筝误', '风催雨', '不老梦', '入梦也', '苍兰契', '等天晴', '后人叹', '朝暮雪', '花木兰', '红尘辗', '须尽欢', '美周郎', '花亦山', '听夜雨', '小嫦娥', '君不语', '青玉案', '木兰行', '何曾惧', '车马慢', '临江仙', '四万秋', '伯虎说', '贺新婚', '云中客', '万梦集', '千年缘', '我与剑', '难生恨', '天欲雪', '是风动', '梦望断', '典狱司', '愚人歌', '虞兮叹', '云与海', '求神呐', '谁与归', '星河叹', '过山门', '山海谣', '乱世书', '长安月', '老酒街', '三万天', '应怀酒', '入梦现', '放鹤亭', '不良人', '剑与雪', '岸边客', '空探枝', '千秋令', '待潮生', '枉凝眉', '策神霄', '鸳鸯债', '半壶纱', '霁夜茶', '寻常歌', '长安忆', '伶仃谣', '何以歌', '春不晚', '花满楼', '枕万梦', '过月亮', '别回头', '相思谣', '马步谣', '云水谣', '游山恋', '待潮声', '东风志', '桃花诺', '九万字', '拜无忧', '叹云兮', '御龙吟', '眉间雪', '相见欢', '沈园外', '不谓侠', '青玉恋', '青花引', '入梦局', '小城谣', '戏文说', '楚歌起'])),
  '4': Array.from(new Set(['长安姑娘', '石楠小札', '明月天涯', '金玉良缘', '倾尽天下', '千秋迭梦', '天行九歌', '此去半生', '如是我闻', '棠梨煎雪', '白虹贯日', '茶靡情梦', '君临天下', '天地缓缓', '风月绵绵', '夜雨寄北', '墨影侠声', '长虹使者', '腐草为萤', '惊鸿一面', '俯首称臣', '此生不换', '弱水三千', '唐人恋曲', '青山予我', '月满清爵', '西厢寻他', '自卑亭记', '临风夜语', '听风无涯', '青山有剑', '冠世一战', '松烟入墨', '青鸟衔风', '红颜如霜', '不负人间', '一载百味', '人间白首', '执琴东游', '相逢无期', '天命风流', '笔底知交', '美人画卷', '秋殇别恋', '金风玉露', '月华沉梦', '肆意的河', '驾鹤西去'])),
  'more': Array.from(new Set(['曲终人亦散', '邀尽人间酒', '永定四十年', '难耐一身闲', '江南烟语色', '昨夜风今宵月', '天龙八部之宿敌', '曾有青鸟衔枝来', '第三十八年夏至', '云梯雨矢散海棠', '海棠又落微雨时', '我在落雪时写相思', '我的一个道姑朋友', '大海忽然溢出心脏', '千年等一回', '梦回花事了', '红尘共长生', '向晚待春风', '飞雪落红尘', '折枝花满衣', '以剑试情长', '连挑风波去', '白马入芦花', '清明上河图', '天涯共此时', '新贵妃醉酒', '等不到的等待', '雪落下的声音', '新鸳鸯蝴蝶梦', '白云喝了人间酒', '轻舟已过万重山', '九九八十一', '晚夜微雨问海棠']))
};

const popSongs = {
  '2': Array.from(new Set(['椿', '等', '谁', '默', '蓝', '瞬', '雨爱', '虚拟', '唯一', '告白', '她说', '慢冷', '绿洲', '撒野', '不搭', '十年', '熬夜', '底牌', '断了', '指纹', '宠爱', '形容', '童话', '原谅', '晴天', '何者', '情歌', '成都', '青花', '爱错', '妥协', '雾里', '模特', '老伴', '小小', '嘉宾', '人质', '红豆', '如愿', '心跳', '彩虹', '过火', '泪桥', '舍得', '春泥', '入戏', '珠玉', '小宇', '尘埃', '瘦子', '偷心', '宿命', '发热', '骄傲', '于是', '天后', '泡汤', '哪吒', '着魔'])),
  '3': Array.from(new Set(['可海事', '爱存在', '外婆桥', '梅雨季', '月牙湾', '虫儿飞', '第一天', '小幸运', '多巴胺', '虹之间', '褪黑素', '胡广生', '梦里花', '喜欢你', '不将就', '笑忘书', '带我走', '我们啊', '到不了', '下雨天', '阿婆说', '天黑黑', '粉雾海', '欧若拉', '想自由', '恶作剧', '红玫瑰'])),
  '4': Array.from(new Set(['打上花火', '匆匆那年', '连名带姓', '路过人间', '我怀念的', '一点一滴', '喜剧之王', '天另一侧', '神魂颠倒', '无人之岛', '孤帆与岛', '飞天茅台', '场上争霸', '情有独钟', '就是哪吒', '孤独患者', '你之于你', '兔子先生', '天若有情', '一次就好', '不死之身', '赤莲如死', '突然想念', '飞萤燃夜', '时间煮雨', '消散对白', '失恋沙洲', '星月神话', '今夜有雨', '玫瑰少年', '感观先生', '达拉崩吧', '阿楚姑娘'])),
  'more': Array.from(new Set(['心愿便利贴', '下一个天亮', '一样的月光', '突然想起你', '一直很安静', '你把我灌醉', '回忆的沙漏', '下完这场雨', '至少还有你', '淋雨一直走', '七月七日晴', '直到你降临', '写在星星上', '有形的翅膀', '如果爱忘了', '白鸟过河滩', '你，好不好？', 'LETTING GO', '普鲁士蓝效应', '想见你想见你想见你', '在故事的最终', '半边山半边海', '超人诞生日记', '无人知晓的我', '十万毫升泪水', '不潮不用花钱', '阿飞的小蝴蝶', '第一次爱的人', '给电影人的情书', '银河爱情故事', '想把你唱给你听', '两个人的下雪天', '夏夜最后的烟火', '无与伦比的美丽', '负重一万斤长大', '漂洋过海来看你', '给我一个理由忘记', '在加纳共和国离婚', '刻在我心底的名字', '赏金排行榜', '先说谎的人', '你是就是我的风景', '别非要我大声说出来', 'City Of Stars', 'Always Online', 'Time Machine', 'On the Journey', 'One Night In Shanghai']))
};

export default function App() {
  const [view, setView] = useState<'home' | 'gufeng' | 'pop'>('home');

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-hidden font-sans selection:bg-white/20">
      {/* Logo Icon */}
      <motion.div
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 cursor-pointer group"
        onClick={() => setView('home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] bg-[#121110]/50 backdrop-blur-md flex items-center justify-center text-xs text-white/50">
          <img
            src={avatarUrl}
            alt="Logo"
            className="w-full h-full object-cover absolute inset-0"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="text-[10px] text-center leading-tight">上传<br/>Logo</span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {view === 'home' && <HomeView key="home" onSelect={setView} />}
        {view === 'gufeng' && <GufengView key="gufeng" onBack={() => setView('home')} onSwitchToPop={() => setView('pop')} />}
        {view === 'pop' && <PopView key="pop" onBack={() => setView('home')} onSwitchToGufeng={() => setView('gufeng')} />}
      </AnimatePresence>
    </div>
  );
}

function HomeView({ onSelect }: { onSelect: (view: 'gufeng' | 'pop') => void }) {
  const [hovered, setHovered] = useState<'gufeng' | 'pop' | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden"
    >
      {/* Gufeng Side */}
      <motion.div 
        className="relative flex-1 h-full cursor-pointer group overflow-hidden bg-[#121110]"
        onHoverStart={() => setHovered('gufeng')}
        onHoverEnd={() => setHovered(null)}
        onClick={() => onSelect('gufeng')}
        animate={{ flex: hovered === 'gufeng' ? 1.2 : hovered === 'pop' ? 0.8 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ink Wash Background */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b18] to-[#0a0808] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,38,38,0.15),transparent_60%)]" />
        
        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-8 md:p-24 z-30">
          <motion.div 
            className="flex flex-col items-center md:items-start"
            animate={{ x: hovered === 'gufeng' ? 10 : 0, opacity: hovered === 'pop' ? 0.3 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Wind className="w-6 h-6 md:w-8 md:h-8 text-[#c3272b]/80 mb-4 md:mb-6" />
            <h2 className="font-serif text-4xl md:text-7xl font-medium text-[#e8e4dc] tracking-[0.2em] mb-2 md:mb-4 writing-vertical-rl md:writing-horizontal-tb">
              古风
            </h2>
            <p className="font-serif text-sm md:text-base text-[#a39b8f] tracking-[0.5em] uppercase">
              Traditional
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Pop Side */}
      <motion.div 
        className="relative flex-1 h-full cursor-pointer group overflow-hidden bg-[#05050a]"
        onHoverStart={() => setHovered('pop')}
        onHoverEnd={() => setHovered(null)}
        onClick={() => onSelect('pop')}
        animate={{ flex: hovered === 'pop' ? 1.2 : hovered === 'gufeng' ? 0.8 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Tech/Neon Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0a0514] to-[#05050a]" />
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#bc13fe]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[30vw] h-[30vw] bg-[#00f3ff]/10 rounded-full blur-[80px]" />

        <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center p-8 md:p-24 z-30">
          <motion.div 
            className="flex flex-col items-center md:items-end"
            animate={{ x: hovered === 'pop' ? -10 : 0, opacity: hovered === 'gufeng' ? 0.3 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Radio className="w-6 h-6 md:w-8 md:h-8 text-[#00f3ff]/80 mb-4 md:mb-6" />
            <h2 className="font-sans text-4xl md:text-7xl font-bold text-white tracking-[0.1em] mb-2 md:mb-4 italic">
              流行
            </h2>
            <p className="font-sans text-sm md:text-base text-[#8892b0] tracking-[0.5em] uppercase">
              Modern Pop
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GufengView({ onBack, onSwitchToPop }: { onBack: () => void, onSwitchToPop: () => void }) {
  const sections = [
    { title: '1-2字', data: gufengSongs['2'] },
    { title: '三字', data: gufengSongs['3'] },
    { title: '四字', data: gufengSongs['4'] },
    { title: '多字', data: gufengSongs['more'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#121110] relative overflow-y-auto scrollbar-hide"
    >
      {/* Ink Wash Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#2a1b18] to-transparent opacity-50" />
        
        {/* Abstract Ink Splatters / Clouds */}
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(195,39,43,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:px-6 md:py-24">
        <button 
          onClick={onBack}
          className="fixed top-4 left-4 md:top-8 md:left-8 p-2 md:p-3 rounded-full bg-[#1a1816]/80 border border-[#3a322a] text-[#a39b8f] hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all backdrop-blur-md group z-50"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="text-center mb-16 md:mb-32">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex flex-col items-center"
          >
            <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent to-[#c3272b]/50 mb-4 md:mb-6" />
            <h1 className="font-serif text-2xl md:text-5xl text-[#e8e4dc] tracking-[0.2em] md:tracking-[0.3em] font-medium ml-2 md:ml-3">
              半卷红尘·一曲兔音
            </h1>
            <p className="font-serif text-[#a39b8f] tracking-[0.3em] md:tracking-[0.5em] mt-4 md:mt-6 text-xs md:text-sm mb-6 md:mb-8">
              水墨丹青 琴瑟和鸣
            </p>
            <a 
              href="https://v.douyin.com/vDXW2fYfTqs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-[#c3272b]/10 border border-[#c3272b]/30 text-[#d0c8b8] hover:bg-[#c3272b]/20 hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all backdrop-blur-md text-xs md:text-sm tracking-widest flex items-center gap-2 group"
            >
              二兔首页
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        <div className="space-y-16 md:space-y-32">
          {sections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-6 md:gap-24"
            >
              <div className="md:w-24 flex-shrink-0 flex justify-start md:justify-end">
                <h3 className="font-serif text-2xl md:text-3xl text-[#c3272b] tracking-widest md:writing-vertical-rl md:h-32 border-l-2 md:border-l border-[#c3272b]/40 md:border-[#c3272b]/20 pl-3 md:pl-4">
                  {section.title}
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 content-start">
                {section.data.map((song, songIdx) => (
                  <motion.div
                    key={song}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: songIdx * 0.05, duration: 0.8 }}
                    className="group cursor-default"
                  >
                    <span className="font-serif text-base md:text-xl text-[#d0c8b8] group-hover:text-[#d4af37] transition-colors duration-500 tracking-widest relative">
                      {song}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#d4af37]/50 group-hover:w-full transition-all duration-500" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-32 flex justify-center">
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-t from-transparent to-[#c3272b]/30" />
        </div>
        
        {/* Bottom Left Switch Button */}
        <div className="mt-8 md:mt-12 flex justify-start">
          <button 
            onClick={onSwitchToPop}
            className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#1a1816]/80 border border-[#3a322a] text-[#a39b8f] hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all backdrop-blur-md text-xs md:text-sm tracking-widest flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            前往流行
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PopView({ onBack, onSwitchToGufeng }: { onBack: () => void, onSwitchToGufeng: () => void }) {
  const sections = [
    { title: '1-2', subtitle: '1-2字', data: popSongs['2'] },
    { title: 'THREE', subtitle: '三字', data: popSongs['3'] },
    { title: 'FOUR', subtitle: '四字', data: popSongs['4'] },
    { title: 'MORE', subtitle: '多字', data: popSongs['more'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#05050a] relative overflow-y-auto scrollbar-hide"
    >
      {/* Tech/Neon Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-[#bc13fe] rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#00f3ff] rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:px-6 md:py-24">
        <button 
          onClick={onBack}
          className="fixed top-4 left-4 md:top-8 md:left-8 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all backdrop-blur-xl z-50 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="mb-16 md:mb-32">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#00f3ff]" />
              <span className="font-sans text-[#00f3ff] tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-medium uppercase">
                Modern Pop
              </span>
            </div>
            <h1 className="font-sans text-3xl md:text-7xl text-white font-bold tracking-tight italic mb-6 md:mb-8">
              十里华灯 · 万象兔音
            </h1>
            <a 
              href="https://v.douyin.com/vDXW2fYfTqs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[#8892b0] hover:bg-[#00f3ff]/20 hover:text-white hover:border-[#00f3ff]/60 transition-all backdrop-blur-md text-xs md:text-sm tracking-widest flex items-center gap-2 group"
            >
              二兔首页
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-2xl md:rounded-3xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative h-full bg-white/[0.02] border border-white/[0.05] rounded-2xl md:rounded-3xl p-5 md:p-10 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/[0.1]">
                
                <div className="flex items-end gap-3 md:gap-4 mb-6 md:mb-10 border-b border-white/10 pb-4 md:pb-6">
                  <h3 className="font-sans text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic">
                    {section.title}
                  </h3>
                  <span className="font-sans text-white/30 tracking-widest text-xs md:text-sm mb-0.5 md:mb-1">
                    {section.subtitle}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {section.data.map((song, songIdx) => (
                    <motion.div
                      key={song}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: songIdx * 0.03, duration: 0.5 }}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 hover:text-[#00f3ff] transition-all duration-300 cursor-default"
                    >
                      <span className="font-sans text-xs md:text-base text-white/80 tracking-wide">
                        {song}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Right Switch Button */}
        <div className="mt-12 md:mt-24 flex justify-end">
          <button 
            onClick={onSwitchToGufeng}
            className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-xl text-xs md:text-sm tracking-widest flex items-center gap-2 group"
          >
            前往古风
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

