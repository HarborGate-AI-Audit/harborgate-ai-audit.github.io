# HarborGate AI Audit 内容・根拠登録簿

## 1. 目的

公式Webサイトで扱う統制対象の事実とconceptについて、公開安全なsource ID、証拠status、公開判断、承認文言、制約、review triggerを一元管理する。実装者は未承認情報を補完せず、本登録簿の判断に従う。

## 2. 公開範囲

本登録簿は公開repositoryに置けるmetadataと承認済みまたは検討中のpublic wordingだけを扱う。内部link、内部通信title・ID・excerpt、counterparty・customer identity、contract・quotation value、非公開project detail、詳細な人事・利益相反情報、personal data、blocked contact value、credential、source-document bodyは含めない。

## 3. 内部証拠台帳との分離

原本と内部承認記録はrepository外の内部証拠台帳で管理する。公開側で使用できるsource IDは次に限定する。

- `SRC-LEGAL-001`
- `SRC-BIZ-001`
- `SRC-UNI-RECOG-001`
- `SRC-UNI-LOGO-001`
- `SRC-INTERNAL-M365-001`
- `SRC-HUMAN-20260821`
- `SRC-GOV-001`
- `SRC-EXCLUDED-001`

これらを内部message title、URL、本文、相手方情報へ展開しない。

## 4. 証拠ステータス

- `VERIFIED_OFFICIAL`: 公式な法的文書、認定・許可文書、または責任部署の公式連絡で確認済み。
- `VERIFIED_OPERATOR`: 原本記録に基づくhuman operatorの確認で運用・公開判断を確認済み。
- `SUPPORTED_WORKING_SOURCE`: 承認済みworking sourceが支えるが、公式文書と同等には扱わない。
- `CONFLICT_OPEN`: 複数の証拠間の不一致が未解決。
- `SUPERSEDED`: 新しく権威の高い情報により過去の記載が置き換えられた。
- `EXCLUDED`: 対象法人または対象claimの根拠として使用しない。

## 5. 公開判断ステータス

- `APPROVED_FOR_INITIAL_SITE`: 初期siteに承認文言を公開できる。
- `APPROVED_WITH_CONDITIONS`: 記録した条件をすべて満たす場合だけ公開できる。
- `PENDING_HUMAN_CONFIRMATION`: Human confirmationまで公開しない。
- `BLOCKED`: 禁止対象。解除の根拠と承認が必要。
- `INTERNAL_ONLY`: 内部controlにのみ使用する。
- `DEFERRED`: 初期site対象外として延期する。
- `EXCLUDED`: 根拠および公開内容から除外する。

## 6. 公開用コンテンツ台帳

| ID | Category | Public fact or concept | Public-safe source ID | Evidence status | Publication decision | Approved or proposed wording | Restrictions | Review trigger |
|---|---|---|---|---|---|---|---|---|
| `ORG-001` | 法人 | Raw legal name | `SRC-LEGAL-001` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | 株式会社ＨａｒｂｏｒＧａｔｅ　ＡＩ　Ａｕｄｉｔ | Raw表記として保持し、normalized displayと混同しない | Legal record変更時 |
| `ORG-002` | 法人 | Normalized website display name | `SRC-LEGAL-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | 株式会社HarborGate AI Audit | Legal nameそのものを書き換えたと説明しない | Display policy変更時 |
| `ORG-003` | 法人 | Corporate number | `SRC-LEGAL-001` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | 7250001021542 | Digitを省略・変更しない | Official number変更時 |
| `ORG-004` | 法人 | Rawとnormalized registered address | `SRC-LEGAL-001`, `SRC-HUMAN-20260821` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | Raw: 山口県下関市大学町２丁目１番１号下関市立大学Ｄ棟Ｄ－４０４／Display: 山口県下関市大学町2丁目1番1号 下関市立大学D棟 D-404 | Walk-in、unrestricted access、大学運営・責任、一般施設accessを示唆しない | Addressまたはdisplay policy変更時 |
| `ORG-005` | 法人 | Company established | `SRC-LEGAL-001` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | 法人は設立済みです。 | Historical planning wordingはsuperseded済み。Companyを`設立準備中`と表記しない | Legal status変更時 |
| `BRAND-001` | Brand | Brand name | `SRC-BIZ-001` | `SUPPORTED_WORKING_SOURCE` | `APPROVED_FOR_INITIAL_SITE` | HarborGate AI Audit | Legal display nameとの用途を区別する | Brand decision変更時 |
| `BRAND-002` | Brand | Japanese reading | `SRC-BIZ-001` | `SUPPORTED_WORKING_SOURCE` | `APPROVED_FOR_INITIAL_SITE` | ハーバーゲートAIオーディット | 未承認variationを追加しない | Brand decision変更時 |
| `BRAND-003` | Brand | Tagline | `SRC-BIZ-001` | `SUPPORTED_WORKING_SOURCE` | `APPROVED_FOR_INITIAL_SITE` | AIを、安心して使える力に | Complete safetyの保証説明を加えない | Tagline変更時 |
| `BRAND-004` | Brand | Core propositionとbrand origin | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | 生成AI導入支援 × AI監査（品質・ガバナンス） × セキュリティ。Harborは安全な拠点、Gateは入口管理と評価基準を表します。 | Service availabilityや効果保証を意味しない | Propositionまたはbrand story変更時 |
| `TEAM-001` | 役員 | Representative director、company role only | `SRC-LEGAL-001` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | 代表取締役 白濵 成希 | University title・affiliationと結合しない | Representative変更時 |
| `TEAM-002` | 役員 | Director、company role only | `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | 取締役 福田 龍樹 | Appointment date不要。University roleと結合しない | Officer変更時 |
| `SERVICE-000` | Service | Current company-level service status | `SRC-INTERNAL-M365-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | サービス提供中 | Historicalな4service一律`準備中`はsuperseded済みであり、復元しない | Company-level status変更時 |
| `SERVICE-001` | Service | AI model、prompt design、運用processの品質・governance・risk評価と改善助言 | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | HarborGate AI Audit | Individual launch-statusまたはcase-count badgeなし。Certification・guaranteeなし | Scopeまたは提供方法変更時 |
| `SERVICE-002` | Service | 生成AIの企画・PoCから導入、運用、組織定着までの支援 | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | HarborGate AI Consulting | Individual launch-statusまたはcase-count badgeなし。成果保証なし | Scopeまたは提供方法変更時 |
| `SERVICE-003` | Service | 業務改善、data活用、system企画、cloud、network、基幹system検討の支援 | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | HarborGate DX Consulting | Individual launch-statusまたはcase-count badgeなし。生産性保証なし | Scopeまたは提供方法変更時 |
| `SERVICE-004` | Service | 情報security・cybersecurity、教育、training、生成AI利用ruleの支援 | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | HarborGate Security Consulting | Individual launch-statusまたはcase-count badgeなし。完全な安全・法令適合・risk除去保証なし | Scopeまたは提供方法変更時 |
| `SERVICE-005` | Service | Individual design principle | `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | ご相談内容に応じて個別に支援内容を設計します。 | Standard package、fixed scope・priceでのgeneral availabilityを示さない | Delivery model変更時 |
| `CASE-001` | 実績 | Detailed case publication | `SRC-INTERNAL-M365-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `DEFERRED` | 公開文言なし | Confidentiality、completion status、identifiabilityをreviewするまでcustomer、contract、quotation、project detail、case countを公開しない | Anonymized caseの個別承認時 |
| `AUDIT-001` | 表記 | Mandatory Audit qualification | `SRC-BIZ-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_FOR_INITIAL_SITE` | 本サイトにおける「Audit」は、財務諸表監査、法定監査、監査法人による監査または第三者認証を意味するものではありません。AIの品質・ガバナンス・リスクを評価し、改善に向けた助言を行うサービスを指します。 | Auditを説明するpublic pageでvisibleにする | Wordingまたはservice scope変更時 |
| `AUDIT-002` | 表記 | Certification・assurance・guarantee implication | `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `BLOCKED` | 公開文言なし | Certification、法定・財務監査、監査法人保証、third-party assurance、法令適合、安全性、生産性、risk除去の保証を禁止 | 新しいauthorityとhuman approval提示時 |
| `UNI-001` | 認定 | Neutral recognized-venture wording | `SRC-UNI-RECOG-001`, `SRC-HUMAN-20260821` | `VERIFIED_OFFICIAL` | `APPROVED_WITH_CONDITIONS` | 下関市立大学発ベンチャーとして認定されています。 | Qualifierを付けず、non-endorsement wordingを併記する | Qualifier conflict解決時 |
| `UNI-002` | 認定 | Recognition date | `SRC-UNI-RECOG-001` | `VERIFIED_OFFICIAL` | `APPROVED_FOR_INITIAL_SITE` | 認定日: 2026-02-10 | Dateを変更しない | Recognition record変更時 |
| `UNI-003` | 認定 | Recognition review deadline | `SRC-UNI-RECOG-001` | `VERIFIED_OFFICIAL` | `APPROVED_WITH_CONDITIONS` | 公開文言への掲載は任意 | 2027-03-31より前にstatusとpublic wordingをreviewする | 2027-03-31より前、および更新・取消時 |
| `UNI-004` | 認定 | Formal/provisional qualifier conflict | `SRC-UNI-RECOG-001`, `SRC-HUMAN-20260821` | `CONFLICT_OPEN` | `BLOCKED` | 公開文言なし | `正式認定`と`暫定認定`の双方をauthority解決までpublic pageに掲載しない | Responsible university authorityによる解決時 |
| `UNI-005` | 認定 | Mandatory university non-endorsement | `SRC-UNI-RECOG-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | 下関市立大学による大学発ベンチャー認定は、当社の製品・サービス等の品質・性能・安全性等を保証するものではありません。 | Recognitionを説明する場所でmandatory | Recognition条件変更時 |
| `UNI-006` | 大学logo | Website display approved with conditions; integration deferred | `SRC-UNI-LOGO-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `APPROVED_WITH_CONDITIONS` | 公開文言なし | Approved supplied artworkのみ。Redraw、recolor、distort、crop、new lockup、certification mark化禁止。Asset追加はlater explicit task | Authorized asset integration task時 |
| `UNI-007` | 大学logo | Public redistribution of raw/editable source artwork | `SRC-UNI-LOGO-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `PENDING_HUMAN_CONFIRMATION` | 公開文言なし | Display permissionをpublic repository redistribution permissionとみなさない | Repository-storage authorization受領時 |
| `UNI-008` | Governance | Company/university role separation | `SRC-GOV-001` | `VERIFIED_OFFICIAL` | `INTERNAL_ONLY` | Public siteではservice providerを株式会社HarborGate AI Auditとし、大学と別主体であることを明確にします。 | 詳細な兼業、COI、研究、資金、作業、学生safeguardを転載せず、大学保証を示さない | Roleまたはgovernance condition変更時 |
| `CONTACT-001` | Contact | University-domain email is blocked | `SRC-INTERNAL-M365-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `BLOCKED` | 公開文言なし | Actual value、email link、代替のinvented addressを掲載しない | Approved company contact channel決定時 |
| `CONTACT-002` | Contact | University telephone is blocked | `SRC-INTERNAL-M365-001`, `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `BLOCKED` | 公開文言なし | Actual value、telephone link、代替のinvented numberを掲載しない | Approved company contact channel決定時 |
| `CONTACT-003` | Contact | Future inquiry form | `SRC-HUMAN-20260821` | `VERIFIED_OPERATOR` | `PENDING_HUMAN_CONFIRMATION` | お問い合わせフォームは現在準備中です。 | Endpoint、file upload、third-party service、intentional data storage、analyticsなし。機密情報を送信しないよう案内する | Form、privacy、security、operation承認時 |
| `RESEARCH-001` | Research | Research achievements | `SRC-BIZ-001` | `SUPPORTED_WORKING_SOURCE` | `DEFERRED` | 公開文言なし | Award、paper title、conference、publication、researchmap linkをitemごとにverifyする | Dedicated verificationとpublication approval時 |
| `SOURCE-EXCLUSION-001` | Source exclusion | Unrelated 2025 press release | `SRC-EXCLUDED-001` | `EXCLUDED` | `EXCLUDED` | 公開文言なし | HarborGateのidentity、founding sequence、first-company status、capital、representative、business activity、university relationshipの根拠にしない。`創立以来初`・`第1号企業`を別途確認なく使用しない | HarborGate固有のauthoritative evidence提示時 |

## 7. 未解決事項

- 認定に付すqualifierは公式文書とhuman confirmationが不一致であり、authorityによる解決まで公開しない。
- Rawまたはeditableな大学logo sourceのpublic repository保管可否はhuman confirmation待ち。
- Future inquiry formはdestination、privacy、security、operationの承認待ち。
- Detailed case、academic title・affiliation、research achievementは個別reviewまで延期する。

## 8. 変更履歴

| Date | Change | Authority |
|---|---|---|
| 2026-08-21 | Six-document draftをcurrent public-safe decisionsに合わせて改訂 | `SRC-HUMAN-20260821` |
