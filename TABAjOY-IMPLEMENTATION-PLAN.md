# Tabajoy 本地化改造记录

## 已确认的分批顺序

1. 全局层：`lang="ja"`、根 metadata、Tabajoy 品牌名、日语排版、Zen Maru Gothic、JPY 显示、全局导航/页脚/购物车文案。
2. 首页：日语品牌内容；真实商品图片/视频；无依据认证改为显眼的「テスト用仮データ」展示；评价为明确标注的虚构测试例；图片 alt 使用日语占位。
3. 商品层：`components/boty/product-grid.tsx`、`app/shop/page.tsx`、`app/product/[id]/page.tsx` 各自就地维护一致商品数据；不抽公共数据模块；价格统一 1,200 円（税込）；规格测试内容明确标记；保留购物车状态与计算。
4. 合规静态页：唯一新增路由的批次，需再次取得明确授权；企业事实统一 `[要記入]`。
5. SEO/结构化数据：页面级 metadata、canonical、Product JSON-LD；无真实价格以外的评价聚合数据，不生成 `review` 或 `aggregateRating`。

## 已确认的品牌与内容规则

- 品牌主轴：`手で触れる、小さなひと休み`；产品核心词 `スクイーズ`。
- 价格：1,200 円（税込）。
- 首页背景视频：之后由用户提供桌面 16:9、1920 × 1080 视频替换。
- 商品来源：就地维护三个商品数据区域，不抽取 `lib/products.ts`。
- 字体：Zen Maru Gothic；不新增 npm 依赖。
- 模拟评价、商品规格及演示性标识可用于测试，但显眼标注「テスト用仮データ」，评价需说明为架空测试例。
- 未确认图片对应关系时，alt 用 `[要差し替え]`；不得编造公司/资质/产品功效事实。
- 分类是浏览辅助，品牌主轴仍是触感与日常片刻放松。

## 第 3 批分类与商品对应

筛选维度：`食べもの`、`どうぶつ`、`星`、`キーホルダー`；商品可有多个分类。系列/辅助标签：`フードモチーフ`、`ねこモチーフ`、`星モチーフ`、`キーホルダー`。

| ID | 暂定日文名 | 分类 | 辅助标签 | 素材副本 |
|---|---|---|---|---|
| `croissant-cat` | クロワッサンねこ | 食べもの、どうぶつ | フードモチーフ、ねこモチーフ | `/products/croissant-cat.png`, `/products/croissant-cat.mp4` |
| `egg-rice-ball` | たまごおにぎり | 食べもの | フードモチーフ | `/products/egg-rice-ball.png`, `/products/egg-rice-ball.mp4` |
| `salmon-sushi-cat` | サーモン寿司ねこ | 食べもの、どうぶつ、キーホルダー | ねこモチーフ、キーホルダー | `/products/salmon-sushi-cat.png`, `/products/salmon-sushi-cat.mp4` |
| `salmon-sushi-keychain` | サーモン握り寿司 | 食べもの、キーホルダー | キーホルダー | `/products/salmon-sushi-keychain.png`, `/products/salmon-sushi-keychain.mp4` |
| `bread-collection` | パンのスクイーズ | 食べもの | フードモチーフ | `/products/bread-collection.jpg` |
| `sleepy-star` | ナイトキャップの星 | 星 | 星モチーフ | `/products/sleepy-star.png` |

上述日文名为素材目录映射用的暂定展示名。商品页尺寸、素材、对象年龄、原产国、注意事项及触感演示值由用户授权先生成测试内容，必须逐项显眼标注「テスト用仮データ」，不得表现为已核实商品事实。

## 第 3 批实施状态（2026-10-14）

- 三处商品数据就地同步为 6 个素材映射 ID；无详情 ID 缺失或静默错商品回退。
- 首页筛选与商店页筛选：`食べもの`、`どうぶつ`、`星`、`キーホルダー`；商店额外提供 `すべて`。
- 6 个商品均显示 1,200 円（税込），商品名、图片、日文 alt、辅助标签已对应。
- 详情页规格演示值及商品事实显眼标注「テスト用仮データ」；实物规格及注意事项日后须核实替换。
- 未修改 `cart-context.tsx`；首页快速加购保留原调用，详情页沿用原本仅局部按钮反馈的行为，没有接入状态管理。
- 验证：`./node_modules/.bin/tsc --noEmit` 通过，0 错误；`pnpm build` 通过；`pnpm lint` 因仓库缺少 eslint 可执行文件无法运行。浏览器确认 6 个详情路径均为 HTTP 200、商品名/价格匹配，控制台无错误。



- Next.js 16.0.10、React 19.2.0、Tailwind CSS 4.3.3、App Router；Tailwind 使用 CSS-first 配置。
- 禁止改 `components/boty/cart-context.tsx`、`components/theme-provider.tsx`、`next.config.mjs`、`tsconfig.json`。
- 不新增依赖、不提交、不推送、不建分支；不改购物车状态、计算、API 或结算逻辑。
- 每批运行本地 `./node_modules/.bin/tsc --noEmit`、项目 lint、build；基线类型错误 0。项目 lint 当前缺 ESLint 可执行文件，已记录为环境阻塞。
- 每批结束报告改动、差异、验证和自检，并停机等待确认。
