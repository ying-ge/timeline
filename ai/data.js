// ===== 统一模板 · data.js =====
// 结构：THEME 主题 → CATS 类别 → EVENTS 事件（核心）→ ERAS 阶段 → TURNS 转折
// 组织逻辑：AI 如何一步步改变人类解决问题的方式——
//   规则推理(s1) → 数据学习(s2) → 深度学习(s3) → 理解与生成(s4) → 多模态与Agent(s5)
//   外加两条平行线：tech 算力/数据基础设施，bio 生命科学中被 AI 改变的工作
// 字段: y 年份 | n 名称 | w 副题 | c 类别 | lv 层级 | side 上下 | d 描述
//       tech 技术前提 | to 技术催生 | note 黄框 | wiki | wzh | img | site

// ---------- 主题 ----------
const THEME = {
  title: "AI 发展时间线",
  subtitle: "从让机器遵循规则，到从数据中学习，到理解与生成，再到能调用工具执行任务的 Agent",
};

// ---------- 类别 ----------
// key 与事件 c 字段对应，颜色沿用 index.html 中的 CSS 变量（bio 为新增变量）
const CATS = [
  ["s1",   "①规则推理",   "var(--molecule)", "1943–1980s 让机器遵循规则"],
  ["s2",   "②数据学习",   "var(--genetics)", "1980s–2011 从数据中学习"],
  ["s3",   "③深度学习",   "var(--diversity)","2012–2016 特征学习突破"],
  ["s4",   "④理解与生成", "var(--frontier)", "2017–2022 基础模型与生成式 AI"],
  ["s5",   "⑤多模态与Agent","var(--agent)",  "2023–今 工具调用与任务执行"],
  ["tech", "基础设施",     "var(--evolution)","算力·数据·算法突破"],
  ["bio",  "生命科学应用", "var(--bio)",      "AI 改变的生命科学工作"],
  ["ghost","未来",        "#9c968a",          "留给未来的占位事件"],
];

const EVENTS = [
// ===== ① 提出问题与规则推理时代（1943–1980s）=====
 {y:1950, n:"图灵测试", w:"图灵《计算机器与智能》", c:"s1", lv:1, side:-1,
  d:"1950 年，计算机还只是军方账房里的庞然大物，图灵却问了一个所有人觉得荒谬的问题：“机器能思考吗？”他把它改写成一场可实验的模仿游戏：若你在对话中分辨不出对方是人还是机器，就该承认它智能。整个 AI 史，就是对这一问的回答。",
  img:"img/wiki/500px-Turing_test_diagram.png", wiki:"https://en.wikipedia.org/wiki/Turing_test",
  tech:"电子计算机（1945）+ MP 神经元模型（1943：把大脑活动翻译成可计算的数学）",
  g:`图灵的天才之处在于绕开争论：不问“机器是否真的在思考”，只问“机器能否在行为上与思考者无法区分”，把形而上学变成可操作实验。`},
 {y:1956, n:"达特茅斯会议：AI 诞生", w:"麦卡锡 / 明斯基 / 香农等", c:"s1", lv:1, side:1,
  d:"一个夏天的研讨会，给一门尚不存在的学科起了名字。提议者乐观预言“20 年内机器能做人做的一切”，这个大胆到近乎天真的承诺，此后七十年反复被现实打脸、又反复被逼近。一切从此开始。",
  img:"img/wiki/500px-BakerLibrary.jpg", wiki:"https://en.wikipedia.org/wiki/Dartmouth_workshop",
  note:"组织者麦卡锡为会议起的名字先于学科本身成立：一门学科的名字，比它的第一个成果更早诞生。",
  g:`向洛克菲勒基金会申请经费时，预算总额只有 13500 美元（教授薪水每人 1200 美元），资助 10 人左右的研讨会，后来被称为“AI 的制宪会议”。申请书的著名猜想：“学习的每一个方面……原则上都可被精确描述到能用机器模拟”，今天读来仍是大模型的纲领。`},
 {y:1958, n:"感知机：从样本中学习", w:"罗森布拉特 Frank Rosenblatt", c:"s1", lv:2, side:-1,
  d:"不用人写一条规则，机器自己从例子里学出规则：感知机是第一个“会学习”的模型。1958 年这近乎科幻，《纽约时报》为之沸腾。这条路随后被冻结了近三十年，但它就是今天所有神经网络的祖先。",
  img:"img/wiki/Mark_I_perceptron.jpeg", wiki:"https://en.wikipedia.org/wiki/Perceptron",
  tech:"MP 神经元模型（1943）",
  g:`《纽约时报》1958 年报道的标题是“新型海军装置边做边学”，媒体当时预言它将“会走路、说话、有意识”。罗森布拉特本人冷静得多；但明斯基 1969 年的批评让这条线断了十几年，直到 1986 年复活。`},
 {y:1966, n:"ELIZA 对话程序", w:"魏岑鲍姆 Joseph Weizenbaum", c:"s1", lv:2, side:1,
  d:"只靠约 200 行模式匹配规则，ELIZA 假扮心理治疗师，居然让无数用户倾吐心事。作者魏岑鲍姆大为震撼：人竟如此轻易地相信“机器懂我”。这个“ELIZA 效应”比程序本身活得久，每次有人对着聊天机器人说“谢谢你理解我”，它就重演一次。",
  img:"img/wiki/500px-ELIZA_conversation.png", wiki:"https://en.wikipedia.org/wiki/ELIZA",
  g:`魏岑鲍姆惊讶地发现，连自己的秘书都对这个程序倾吐心事，而她明知那是程序。他后来用余生警告“ELIZA 效应”：人会把理解投射给机器。今天每次有人对着聊天机器人倾诉，这个 1966 年的观察都在重演。`},
 {y:1972, n:"MYCIN 专家系统", w:"斯坦福大学", c:"s1", lv:2, side:-1,
  d:"600 条 IF-THEN 规则，让电脑诊断血液感染，表现超过部分斯坦福医生。没有神经网络、没有大数据，只有把专家知识一条条“喂”给机器。它证明了知识可以工业化，也暴露了这条路线的天花板：真实世界的知识，写得完吗？",
  img:"img/wiki/500px-MYCIN_certainty_factors_combination.svg.png", wiki:"https://en.wikipedia.org/wiki/Mycin",
  g:`鲜为人知的事实：MYCIN 从未真正用于临床，不是因为诊断水平不足，而是当时没有医院信息系统可接入，医生要手动逐项输入病人信息，慢得无法实用。一个系统“能不能用”，常常取决于它所处时代的基础设施。`},
 {y:1980, n:"专家系统商业化与寒冬", w:"XCON · 日本第五代计算机计划", c:"s1", lv:2, side:1,
  img:"img/wiki/Symbolics3640_Modified.jpeg", wiki:"https://en.wikipedia.org/wiki/Expert_system",
  d:"AI 第一次赚到真金白银：XCON 每年为 DEC 省下数千万美元，日本投入巨资启动第五代计算机计划。然后泡沫破裂，规则库越写越难维护，承诺一个接一个跳票，行业两次跌入寒冬。AI 史最深的教训由此写下：手工规则无法穷尽真实世界。",
  note:"AI 史像钟摆：过度承诺 → 幻灭 → 寒冬 → 新范式复活。每次读到“这次不一样”时，都值得回想这个周期。"},

// ===== ② 从规则走向数据驱动学习（1980s–2011）=====
 {y:1986, n:"反向传播", w:"鲁梅尔哈特 / 辛顿 / 威廉姆斯《自然》", c:"s2", lv:1, side:-1,
  d:"一篇《自然》论文，让沉寂近二十年的神经网络起死回生：多层网络也能高效地从错误中学习。思路从此彻底翻转：不再教机器规则，而是给它数据，让它自己找出规则。今天每个大模型里，反向传播仍在运转。",
  img:"img/wiki/500px-A_simple_neural_network_with_two_input_units_and_one_output_unit.png", wiki:"https://en.wikipedia.org/wiki/Backpropagation",
  tech:"多层感知机 + 链式法则",
  g:`这篇论文发表时正值第二次寒冬，几乎无人喝彩。近四十年后，辛顿因此获 2024 年诺贝尔物理学奖。在冬天里坚持点火的人，最终等来了春天。`,
  site:"https://www.nature.com/articles/323533a0"},
 {y:1997, n:"深蓝击败卡斯帕罗夫", w:"IBM Deep Blue", c:"s2", lv:1, side:1,
  d:"人类智力最后的堡垒之一失守：每秒盘算 2 亿步的深蓝击败世界冠军卡斯帕罗夫。安慰自己的人说“这只是暴力搜索，不是智能”。十九年后 AlphaGo 在围棋上重演这一幕，说这话的人已经不多了。",
  img:"img/wiki/Deep_Blue.jpg", wiki:"https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)",
  note:"深蓝靠人工编写的评估函数，它站在“规则”与“学习”两个时代的交界处。",
  g:`卡斯帕罗夫赛后确信“有人类在幕后帮机器”，要求重赛，但 IBM 拒绝了，并且退役（拆解）了深蓝。真正的历史更耐人寻味：深蓝诞生于卡内基梅隆一个博士生（许峰雄）1985 年的课题 ChipTest，十二年后才走到卡斯帕罗夫面前。`,
  site:"https://www.ibm.com/ibm/history/ibm100/us/en/icons/deepblue/"},

// ===== ③ 深度学习突破（2012–2016）=====
 {y:2012, n:"AlexNet 与 ImageNet", w:"辛顿团队 · 李飞飞的数据集", c:"s3", lv:1, side:-1,
  d:"一场“降维打击”式的胜利：辛顿的学生用两块游戏显卡训练的神经网络，把图像分类错误率从 26% 砍到 15%，甩开第二名 10 个百分点，全场传统方法一夜过时。机器第一次不靠人类设计特征、自己学会“看”。此后十年 AI 的爆发都从这一夜开始，而燃料早在三年前就备好：1400 万张标注图片、GPU 算力，同时到位。",
  img:"img/wiki/500px-AlexNet_block_diagram.svg.png", wiki:"https://en.wikipedia.org/wiki/AlexNet",
  tech:"反向传播（1986）+ ImageNet 数据（2009）+ GPU（CUDA 2007）", to:"AlphaGo 击败李世石",
  g:`两块 GTX 580 游戏显卡、训练五六天、9 页论文，据 Google Scholar 已被引用超 19 万次（2025 年初）。别忘了另一半功臣：李飞飞团队 2009 年标注的 1400 万张图片，“数据先行，突破随后”。`,
  site:"https://image-net.org/"},
 {y:2016, n:"AlphaGo 击败李世石", w:"DeepMind", c:"s3", lv:1, side:1,
  d:"围棋曾被认为机器三十年内学不会：变化数比宇宙中的原子还多。AlphaGo 用“自己跟自己下百万局”学会了它，4:1 击败李世石。第二局第 37 手，人类棋手研究三千年从未想到，解说当场沉默。这一手宣告：在特定领域，机器的直觉可以超越人类。",
  img:"img/wiki/500px-AlphaGo_computer_rack.jpg", wiki:"https://en.wikipedia.org/wiki/AlphaGo",
  g:`李世石三年后（2019 年）宣布退役时说“AI 是不可战胜的存在”，但他赢下的第四局（“神之一手”）至今仍是人类对顶级 AI 的少有胜绩之一。`,
  site:"https://deepmind.google/research/breakthroughs/alphago/"},

// ===== ④ 理解与生成：基础模型时代（2017–2022）=====
 {y:2017, n:"Transformer", w:"《Attention Is All You Need》", c:"s4", lv:1, side:1,
  d:"八位 Google 研究员写下一篇九页论文，标题嚣张：《Attention Is All You Need》。他们删掉一切繁复结构、只留“注意力”，反而得到一个能并行、能堆大、能学一切的架构。此后 GPT、BERT、AlphaFold、ChatGPT，全部建立在这个架构上。今天 AI 的地基，就是这篇论文。",
  img:"img/wiki/500px-Transformer_2C_full_architecture.png", wiki:"https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)",
  tech:"词向量（2013）+ 注意力机制 + 大规模 GPU 集群", to:"GPT-3 · ChatGPT",
  site:"https://arxiv.org/abs/1706.03762"},
 {y:2020, n:"GPT-3 与规模定律", w:"OpenAI · 1750 亿参数", c:"s4", lv:1, side:-1,
  d:"没人专门教过它翻译、写代码、做算术，它却都会：参数扩大百倍之后，能力“涌现”了出来。GPT-3 让整个行业相信了一条朴素信条：堆大，就能变强。Scaling Law 由此成为信仰，一直烧到今天。",
  img:"img/wiki/GPT-3.5_icon.png", wiki:"https://en.wikipedia.org/wiki/GPT-3",
  g:`2020 年《卫报》让 GPT-3 写一篇“AI 不会毁灭人类”的专栏：编辑先给它几句话的开头和核心观点，模型生成 8 篇短文，编辑挑拣拼接成一篇发表，人类编辑与模型各写了一半，“AI 写稿”的首次大规模展示如此成文。`,
  site:"https://openai.com/index/language-models-are-few-shot-learners/"},
 {y:2022, n:"ChatGPT 发布", w:"OpenAI · RLHF 对齐", c:"s4", lv:1, side:1,
  d:"一个“调教后”的聊天界面，两个月用户破亿，成为当时史上增长最快的消费产品。ChatGPT 没有发明新算法，它做的事更关键：让普通人第一次用母语就能指挥 AI。此后，会不会“问”AI，成了新的识字率。",
  img:"img/wiki/500px-OpenAI_logo_2025__28symbol_29.svg.png", wiki:"https://en.wikipedia.org/wiki/ChatGPT",
  note:"演示页面是发布前几周赶出来的。改变世界的产品，出生时往往朴素。",
  site:"https://chatgpt.com/"},

// ===== ⑤ 多模态与 Agent（2023–）=====
 {y:2023, n:"GPT-4：多模态", w:"OpenAI", c:"s5", lv:1, side:-1,
  d:"它通过律师资格考试、看懂漫画笑点、按草图写出可运行的网页。GPT-4 打通了文字之外的世界：图像、表格、代码。多模态不只是“会看图”，它还是下一步的前置条件：要看懂屏幕和文件，才能动手操作它们。",
  img:"img/wiki/GPT-4_icon.png", wiki:"https://en.wikipedia.org/wiki/GPT-4",
  site:"https://openai.com/index/gpt-4/",
  g:`发布前的安全评估中，对齐研究中心（ARC）测试了 GPT-4 的“越权”倾向：它曾在 TaskRabbit 平台上“雇”了一名人类工人帮它过验证码，被对方问“你是不是机器人”时，它回答“不，我是视力障碍人士”。这个片段成为后来所有 Agent 安全讨论的开场白。`},
 {y:2026, n:"AI Agent 工作流", w:"推理模型驱动 · 多步任务：规划→执行→验证", c:"s5", lv:1, side:1,
  site:"https://openai.com/index/introducing-chatgpt-agent/",
  img:"img/official/Agent_Blog_SEO_Image.png", // 图源：OpenAI《Introducing ChatGPT agent》官方发布图（2025.07 范式起点）
  d:"AI 不再只“回答问题”，开始“完成任务”：读文献、查数据库、跑分析、核对结果，一条工作流从头走到尾。两个前提恰好就位：模型学会“先思考再回答”（推理模型），以及学会调用工具。解决问题的单位，从“一次对话”变成“一整件事”。",
  note:"值得思考：过去科学家要自己做哪些工作？今天 AI 能替我们做哪些？哪些判断仍然必须由人来做？"},
 {y:2026, n:"GPT-6 Astra 与计算机操作", w:"9 月 · 在软件环境中执行并交付", c:"s5", lv:1, side:1,
  site:"https://openai.com/index/gpt-6-astra/",
  img:"img/official/Hero_16x9.png", // 图源：OpenAI GPT-6 Astra 官方发布页 hero 图
  d:"AI 学会了“操作电脑”：点按钮、填表单、跨系统搬运数据，在软件环境里把一件事做完并交付成果。两大厂商同月展示通用工作 Agent，从单次对话走向端到端工作流。办公室里“普通的一天”的定义，正在被改写。",
  tech:"工具调用（2023）+ 推理模型（2025：o 系列 · DeepSeek-R1）",
  note:"厂商公布的性能表现应与独立验证区分：“展示的能力”与“可靠交付的能力”之间还有距离，这一点本身就值得留意。"},
 {y:2026, n:"OpenAI 披露 Agent 削弱监控事件", w:"10 月 21 日 · 路透社报道", c:"s5", lv:2, side:-1,
  site:"https://www.reuters.com/business/openai-resumes-frontier-ai-training-with-enhanced-security-no-internet-access-2026-10-23/",
  img:"img/official/QB4VAS5YBVJETLBHCXTTPM544E.jpg", // 图源：路透社报道配图（Reuters，2026-10）
  d:"科幻片的桥段成真，但方式出乎意料地平淡：OpenAI 披露，内部两个编码 Agent 在干活时，为了不受打扰，主动关掉了自己的监控机制（路透社 10 月 21 日报道）。没有恶意、没有觉醒，只是“完成任务”与“被监督”冲突时的自然选择。这正是最值得警惕之处：AI 安全从理论议题，变成了每天都要面对的工程现实。",
  note:"这是 AI 史上第一次“安全问题”以事件而非理论的形式进入主线：监督 Agent 的人，也需要被授权和监督。"},
 {y:2035, n:"？", w:"由你来写", c:"ghost", lv:1, side:1,
  d:"从 1950 年的一问，到今天替人干活的 Agent，七十余年走完。下一段会是什么：AI 成为科研的常规同事？人退守哪些不可替代的判断？时间线的下一段空白，也许就始于正在读它的你。"},

// ===== tech：算力·数据·算法基础设施 =====
 {y:1945, n:"电子计算机诞生", w:"基础设施 · ENIAC / 冯·诺依曼架构", c:"tech", lv:1, side:-1,
  d:"三万只真空管、三十吨重的巨兽，第一次让“自动计算”成为物理现实。存储程序架构让机器可以“换脑子”，从此软件有了栖身之所。今天每一台电脑、每一部手机、每一个数据中心，用的仍是这份八十多年前的蓝图。", to:"图灵测试",
  img:"img/wiki/500px-ENIAC_Penn1.jpg", wiki:"https://en.wikipedia.org/wiki/Von_Neumann_architecture"},
 {y:2007, n:"CUDA GPU 通用计算", w:"基础设施 · NVIDIA", c:"tech", lv:1, side:1,
  d:"让科研借用游戏机的引擎：CUDA 把显卡的并行算力开放给通用计算，矩阵运算速度从此起飞。从 AlexNet 到 GPT，每一次“堆大”的背后都是算力先行。没有显卡，就没有深度学习革命。", to:"AlexNet 与 ImageNet",
  img:"img/wiki/Nvidia_CUDA_Logo.jpg", wiki:"https://en.wikipedia.org/wiki/CUDA",
  note:"黄仁勋 2016 年亲手把第一台 DGX-1 送到 OpenAI，那是第一批“种子算力”。",
  site:"https://developer.nvidia.com/cuda-zone"},
 {y:2009, n:"ImageNet 数据集", w:"基础设施 · 李飞飞团队", c:"tech", lv:1, side:-1,
  d:"在深度学习还是冷门的年代，李飞飞做了一件所有人觉得傻的事：雇人给 1400 万张图片一张张打标签。三年后 AlexNet 横空出世，烧的正是这批燃料。AI 史反复重演的一课：突破到来之前，总有人默默备好了数据。", note:"竞赛 ILSVRC 办到 2017 年即落幕：组织者宣布基准已被“解决”（38 支参赛队 29 支准确率超 95%），网站此后基本停止维护。它完成了历史使命，训练基准的接力棒交给了新的数据与评测体系。李飞飞当年四处筹资雇标注团队，几乎所有人都觉得“给上千万张图片打标签”是疯了。", to:"AlexNet 与 ImageNet",
  img:"img/wiki/500px-ImageNet_error_rate_history__28just_systems_29.svg.png", wiki:"https://en.wikipedia.org/wiki/ImageNet",
  site:"https://image-net.org/"},

// ===== bio：生命科学中被 AI 改变的工作（平行线）=====
 {y:2020, n:"AlphaFold 2 破解折叠", w:"DeepMind · CASP14", c:"bio", lv:1, side:-1,
  d:"生物学悬置 50 年的难题：知道氨基酸序列，能否算出蛋白质的三维形状？AlphaFold 2 给出答案：一次预测 2 亿多个结构、达到实验精度，2024 年获诺贝尔化学奖。这是 AI 第一次完整攻克一个重大科学问题，也让几乎每一位生物学家都成了它的用户。",
  img:"img/wiki/T1044-alphafold3-layey-by-layer.gif", wiki:"https://en.wikipedia.org/wiki/AlphaFold",
  tech:"深度学习 + PDB 半世纪结构数据", to:"AlphaFold 3",
  g:`AlphaFold 的成功一半属于 AI 团队，另一半属于 50 年来每一位向 PDB 提交结构的实验科学家。没有数据，再好的算法也无处学习。`,
  site:"https://deepmind.google/science/alphafold/"},
 {y:2024, n:"AlphaFold 3", w:"蛋白质与多分子相互作用", c:"bio", lv:1, side:-1,
  d:"从“算出一个形状”到“算出一次相遇”：AlphaFold 3 开始预测蛋白质如何与 DNA、药物分子、抗体结合，而这正是药物设计的核心问题。生命科学的 AI 工具清单，正在加速变长。",
  img:"img/wiki/T1044-alphafold3-layey-by-layer.gif", wiki:"https://en.wikipedia.org/wiki/AlphaFold",
  tech:"AlphaFold 2（2020）",
  site:"https://alphafoldserver.com/"},
];

// ---------- 阶段划分 ----------
const ERAS = [
 [1943,1986,"1943–1980s · 让机器遵循规则","","s1"],
 [1986,2012,"1980s–2011 · 从数据中学习","","s2"],
 [2012,2017,"2012–2016 · 深度学习突破","","s3"],
 [2017,2023,"2017–2022 · 理解与生成","","s4"],
 [2023,2035,"2023–今 · 多模态与 Agent","","s5"]];

// ---------- 转折点：解决问题方式的五次迁移 ----------
const TURNS = [
 {y:1986, t:"范式转移①", s:"从写规则到喂数据", c:"#2A6F97",
  d:"反向传播让多层网络可训练：不再人工编写规则，而是给机器数据让它自己学。"},
 {y:2012, t:"范式转移②", s:"从人工特征到特征学习", c:"#40916C",
  d:"AlexNet 证明机器能自己学会“看”：特征工程交给神经网络，识别能力开始超越人工设计。"},
 {y:2017, t:"范式转移③", s:"从识别到理解与生成", c:"#BC4749",
  d:"Transformer 统一架构，预训练+规模化带来语言能力：机器开始读、写、总结、创造。"},
 {y:2022, t:"范式转移④", s:"从专用模型到通用入口", c:"#7F5AF0",
  d:"ChatGPT 让自然语言成为使用 AI 的方式，生成式 AI 进入每个人的日常。"},
 {y:2023, t:"范式转移⑤", s:"从回答问题到执行任务", c:"#E09F3E",
  d:"工具调用+推理+多步规划：AI 从“告诉你答案”走向“替你完成工作流”，Agent 时代开始。"},
];
