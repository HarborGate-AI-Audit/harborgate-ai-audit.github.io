# HarborGate AI Audit 公式Webサイト仕様

## 1. 文書情報

- 文書ID: `HG-WEB-SITE-SPEC`
- 対象: 初期コーポレートサイト
- 状態: 初期コーポレートサイトの公開安全な仕様基線
- 正本: 本リポジトリの本ファイル
- 関連文書: `AGENTS.md`、`content-register.md`、`release-checklist.md`

## 2. 目的

公式Webサイトの公開範囲、情報源、ページ要件、技術制約、公開前ゲートを定義する。実装者は未承認事項を補完せず、内容登録簿の公開判断と条件に従う。

## 3. 正本の範囲

本リポジトリを、Webサイトのソースコード、人間が承認した公開文章、公開安全なsource ID、証拠status、公開判断、制約、review trigger、サイト仕様、公開checklistの正本とする。

## 4. 公開リポジトリと内部証拠台帳の分離

法務・大学・許可・契約・見積・人事・利益相反・顧客に関する原本、内部リンク、内部通信、rawまたはeditableな元データは、内部証拠台帳で管理する。公開リポジトリには原文や機密metadataを保存せず、許可されたsource IDだけを記録する。

## 5. 情報源の優先順位

1. 公式な法的文書
2. 大学による公式な認定書または許可書
3. 大学の責任部署による、より新しい公式連絡
4. 原本記録に基づくhuman operatorの確認
5. 承認済み事業working document
6. Draft、proposal、historical planning document

新しく権威の高い情報源は、通常、古い計画資料より優先する。ただし証拠の存在だけで公開承認とはしない。

## 6. 証拠不一致の扱い

- 不一致をsilentに解消しない。
- Human confirmationは運用判断または公開判断を更新できるが、公式文書の矛盾する文言を無断で書き換えない。
- 公式文言とhuman confirmationが矛盾する場合、争点となるqualifierは解決まで公開しない。
- 不一致は公開安全なsource ID、status、制約、review triggerで内容登録簿へ記録する。

## 7. 想定読者

- 生成AI導入、AI品質、governance、DX、securityを検討する組織担当者
- 個別相談や連携を検討する事業者・団体
- 会社情報や大学発venture認定を確認する閲覧者
- 公開内容をreviewする社内関係者

## 8. サイト目標

- 法人、brand、service scope、提供方法を誤解なく伝える。
- 生成AI導入、AI監査、securityを一体的に支援する価値を示す。
- `Audit`の意味を限定し、監査・認証・保証に関する誤解を防ぐ。
- 会社と大学を別主体として示す。
- 問い合わせ開始前の安全な案内を提供する。
- 静的で高速、accessible、responsiveなサイトを提供する。

## 9. 初期版で実装しないもの

- 詳細なcase study、顧客名、件数、契約・見積・project detail
- Award、論文、conference、research achievement、researchmap link
- Academic titleや大学affiliation
- Data入力form、file upload、third-party form service
- Analytics、tracking、不要なcookie
- Client-side frameworkまたは不要なJavaScript
- 未承認のcontact destination
- 大学logo asset（後続の明示的asset taskまで）
- Certification、assurance、法令適合、安全性、効果、risk除去の保証

## 10. 初期公開ルート

- `/`
- `/services/`
- `/company/`
- `/contact/`
- `/privacy/`
- `/404.html`

## 11. ページ別仕様

### Top page

- Brand name
- Tagline「AIを、安心して使える力に」
- Core proposition「生成AI導入支援 × AI監査（品質・ガバナンス） × セキュリティ」
- 短い会社紹介
- 承認済みservice scopeから構成する3つのstrength（具体的copyはhuman review対象）
- 4サービスのsummary
- 個別相談・project単位のcollaboration format
- Contact pageへのlink
- MandatoryなAudit qualification
- 初期minimumには詳細case studyを置かない

### Services page

- 4つのservice name
- 対象課題
- Scope
- Typical output
- Support approach
- ご相談内容に応じて個別に支援内容を設計する旨
- Individual launch-status badgeを置かない
- Globalな`準備中`labelを置かない

### Company page

- Mission
- Brand nameの由来
- Legal company information
- 代表取締役と取締役
- Neutralな大学発venture認定文言
- 認定日
- Mandatoryな大学non-endorsement文言
- 会社と大学の主体分離
- Academic titleとresearch achievementは掲載しない

### Contact page

- 「お問い合わせフォームは現在準備中です。」
- Email address、telephone number、mailto linkを置かない
- Form endpoint、file upload、third-party form serviceを置かない
- 未承認channelへ機密情報を送信しないよう案内する

### Privacy page

- Definitiveな法的保証を行わない
- 初期static siteには問い合わせdata入力機能がないことを示す
- 将来のform導入前にprivacy policyと運用を再reviewする
- Data収集form導入前に法務・security・運用確認を完了する

### 404 page

- 明確なerror message
- Top pageへのlink
- 不要なJavaScriptなし

## 12. 共通コンポーネント

- Headerとprimary navigation
- Footer
- Base layout
- Service card
- Skip link
- 共通metadata
- Faviconとmanifest links
- Audit qualification
- 認定説明に伴うnon-endorsement文言

## 13. コンテンツ設計

- 1 sectionにつき1つの主要messageとする。
- 課題、支援scope、提供方法、次のactionを区別する。
- 法的事実、brand copy、service scope、将来構想を混同しない。
- 条件付き承認の条件とdisclaimerを省略しない。
- 事実の重複定義を避け、内容登録簿と将来のstructured data sourceへ集約する。

## 14. 会社情報

- Raw legal name: 株式会社ＨａｒｂｏｒＧａｔｅ　ＡＩ　Ａｕｄｉｔ
- Website display name: 株式会社HarborGate AI Audit
- Brand name: HarborGate AI Audit
- Corporate number: 7250001021542
- Kana: ハーバーゲートエーアイオーディット
- Raw registered address: 山口県下関市大学町２丁目１番１号下関市立大学Ｄ棟Ｄ－４０４
- Website display address: 山口県下関市大学町2丁目1番1号 下関市立大学D棟 D-404
- 法人は設立済みであり、会社を`設立準備中`と表記しない。

所在地は表示できるが、walk-in受付、自由な訪問、大学による運営・責任、大学施設への一般accessを示唆しない。

## 15. 役員情報

- 代表取締役: 白濵 成希
- 取締役: 福田 龍樹

初期サイトでは会社役職だけを表示する。取締役の就任日は不要とし、大学のacademic title・affiliation、outside-employmentの詳細と混在させない。

## 16. サービス提供状況

会社levelのstatusは`サービス提供中`である。過去の4サービス一律`準備中`はsupersededされており、復元しない。

1. **HarborGate AI Audit**: AI model、prompt design、運用processを品質・governance・riskの観点から評価し、改善を助言する。
2. **HarborGate AI Consulting**: 生成AIの企画・PoCから導入、運用、組織定着までを支援する。
3. **HarborGate DX Consulting**: 業務改善、data活用、system企画、cloud、network、基幹systemの検討を支援する。
4. **HarborGate Security Consulting**: 情報security・cybersecurity、教育、training、生成AI利用ruleを支援する。

サービスは個別相談・project単位で、顧客の課題と運用contextに応じて設計する。全serviceの実績、standard package、fixed scope・priceでのgeneral availabilityは主張しない。

## 17. Audit表記

必須文言:

> 本サイトにおける「Audit」は、財務諸表監査、法定監査、監査法人による監査または第三者認証を意味するものではありません。AIの品質・ガバナンス・リスクを評価し、改善に向けた助言を行うサービスを指します。

Certification、third-party assurance、法令適合、complete safety、生産性向上、risk eliminationを保証しない。

## 18. 大学発ベンチャー認定

- Neutral wording: 「下関市立大学発ベンチャーとして認定されています。」
- 認定日: 2026-02-10
- Official documentとhuman confirmationのqualifier conflictが解決するまで、`正式認定`と`暫定認定`のいずれも公開しない。
- Public pageでは不一致そのものを説明しない。
- 2027-03-31より前にstatusと公開文言をreviewする。

必須のnon-endorsement文言:

> 下関市立大学による大学発ベンチャー認定は、当社の製品・サービス等の品質・性能・安全性等を保証するものではありません。

## 19. 大学ロゴ

Website表示は条件付き承認済みだが、asset integrationは後続の明示的taskへ延期する。使用時は大学提供の承認済みartworkだけを用い、redraw、recolor、distort、crop、新しいcompany/university lockup、certification mark化を禁止する。Company brandをprimary、university brandをsecondaryかつcontextualにする。

Website表示許可はrawまたはeditable source artworkの公開repository再配布許可を自動的に意味しない。その保管判断は`PENDING_HUMAN_CONFIRMATION`とする。

## 20. 大学と会社の主体分離

- Service providerは株式会社HarborGate AI Auditである。
- 大学をservice provider、保証主体、運営責任主体として示さない。
- Company roleとuniversity roleを別に扱う。
- 両者を1つのoperating entityとして表現しない。
- 内部の兼業、利益相反、研究、資金、作業、学生保護の詳細をpublic copyへ転載しない。

## 21. 問い合わせ

初期表示は「お問い合わせフォームは現在準備中です。」とする。大学email、大学telephone、invented company-domain address、mailto link、form endpoint、file upload、third-party service、intentional customer-data storage、analyticsを置かない。未承認channelへ機密情報を送信しないよう案内する。

## 22. プライバシー

初期static siteは問い合わせdataを意図的に収集しない。将来formを導入する前に、収集項目、利用目的、third-party提供、security、retention、deletion、問い合わせ窓口、同意・通知方法を法務・運用の両面でreviewし、privacy policyを改訂する。

## 23. アクセシビリティ

- Semantic landmarksとlogicalなheading hierarchy
- Pageごとに1つの`h1`
- Skip link
- Keyboard操作可能なnavigationとcontrols
- Visible focus
- `prefers-reduced-motion`への対応
- 適切なalternative textまたはdecorative treatment
- 十分なcontrastと読みやすさ

## 24. レスポンシブ

- Mobile-first
- Common mobile widthでhorizontal overflowなし
- Narrow viewportでnavigation、cards、tables、long stringsを読める
- 十分なtouch targetとspacing
- Text zoom時にcontentやcontrolを失わない

## 25. SEO・メタデータ

- Pageごとにuniqueなtitleとdescription
- Production URLとrouteに一致するcanonical URL
- `lang="ja"`
- Approved copyとassetだけを使うOpen Graph metadata
- Faviconとmanifestの全page共通化
- 実際のindexing方針に一致する`robots.txt`
- 初期公開では通常の公開ページのcrawlを許可する。
- `robots.txt`は`User-agent: *`と`Allow: /`を指定する。
- 404 pageは`robots.txt`で遮断せず、meta robotsの`noindex`でindex対象外とする。
- Sitemapは未導入のため、`robots.txt`には記載しない。
- 承認済みcompany factだけを使うstructured data

## 26. 技術制約

- Astro static output
- TypeScript strict
- Node.js 24とnpm
- Client-side frameworkなし
- Minimal JavaScript
- Semantic HTML
- CSS custom properties
- Responsive design
- Initial versionにanalyticsなし
- 不要なcookieなし
- 明示承認なしのdependency追加なし

## 27. 公開前ゲート

- 内容登録簿のstatus、wording、条件、review triggerを照合する。
- 公開checklistを全項目reviewする。
- `git diff --check`、`npm run check`、`npm run build`をこの順に成功させる。
- Company facts、officers、service、Audit、recognition、logo、contact、privacyをhuman reviewする。
- Keyboard、focus、motion、responsive、link、404、favicon、manifestをmanual checkする。
- GitHub Actions成功後にpublic URLをmanual checkする。

## 28. 未確定事項

- 認定qualifier conflictの権威ある解決
- Rawまたはeditableな大学logo sourceの公開repository保管可否
- Future inquiry formのdestination、運用、privacy設計
- Case studyのconfidentiality、completion status、identifiability review
- Academic title、affiliation、research achievementの個別検証
- Privacy policyの最終法務・運用review

## 29. 変更管理

- Controlled factの変更はsource ID、evidence status、publication decision、wording、restriction、review triggerとともに記録する。
- Conflictをsilentに解決しない。
- Site implementationとcontent approvalを別のreview観点とする。
- Commitとpushはtaskごとの明示承認がある場合だけ行う。
