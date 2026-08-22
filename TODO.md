# HarborGate AI Audit 実行バックログ

## 1. 使い方

本書は実装と検証のbacklogであり、page copyまたはpublic factのauthorityではない。Page goalは`docs/content-plan.md`、publication authorityは`docs/content-register.md`を参照する。

- Stable IDはitemの移動やstatus変更でも再利用し、別taskへ付け替えない。
- Priorityは`P0`（core page-content completionに必須）、`P1`（重要なnext-stage improvement）、`P2`（optional/future enhancement）とする。
- Statusは`TODO`、`BLOCKED`、`DEFERRED`を使用する。説明しただけのitemを完了扱いにしない。
- Human gateがあるitemは、記載されたapprovalを得るまでpublic implementationまたはpublicationへ進めない。
- `BLOCKED` itemはblock解除まで実装しない。解除時も`docs/content-register.md`のpublication decisionが優先する。

## 2. `TODO`

### `CONTENT-001`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate AI Auditの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-001`、`SERVICE-005`、`AUDIT-001`と現行implementation。
- **Human gate:** Public copyとAudit qualificationの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、human-approved copyとして実装taskへ渡せる。

### `CONTENT-002`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate AI Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-002`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、human-approved copyとして実装taskへ渡せる。

### `CONTENT-003`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate DX Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-003`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、human-approved copyとして実装taskへ渡せる。

### `CONTENT-004`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate Security Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-004`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、human-approved copyとして実装taskへ渡せる。

### `CONTENT-005`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** Company missionとHarbor/Gate brand storyのpage compositionとcopyをdraftする。
- **Dependency:** `BRAND-001`から`BRAND-004`、legal/company facts、現行company page。
- **Human gate:** Mission、story、company/university separationのpublic copy承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Missionとstoryが新規factを創作せず、legal facts、recognition、主体分離とsection上区別され、human-approved copyとして実装taskへ渡せる。

### `CONTENT-006`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** Service copy確定後にhomepage positioning、3 strengths、problem-to-service導線、support process、contact CTAをrefineする。
- **Dependency:** `CONTENT-001`から`CONTENT-005`。
- **Human gate:** Homepage全体のpublic copyとclaim承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Homepageがservice詳細と一致し、課題からserviceと次のactionへ進め、全claimが登録簿に紐づいたhuman-approved copyとして実装taskへ渡せる。

### `SEO-001`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Sitemapを導入するか決定し、導入する場合のroute、generation、`robots.txt`連携を定義する。
- **Dependency:** Final route inventoryとdeployment URL policy。
- **Human gate:** Indexing方針の承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Human-approved decision、対象route、implementation scope、validation方法が記録され、実装する場合は別taskが作成される。

### `SEO-002`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Approved factだけを用いるstructured-data designを作成する。
- **Dependency:** `docs/content-register.md`、final page composition、production URL policy。
- **Human gate:** Schema type、公開fact、生成元の承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 各propertyが登録簿IDへtraceでき、unapproved contact、logo、rating、case、credentialを含まないreview済みdesignになる。

### `SEO-003`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Page title、description、Open Graph textとasset参照方針をrefineする。
- **Dependency:** `CONTENT-006`、final page copy。Image追加部分は`ASSET-002`。
- **Human gate:** Metadata copyと使用assetの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 全public routeのmetadataがuniqueでpage copyと一致し、approved copy/assetsだけを使用し、canonical URL validation planを含む。

### `QA-001`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Substantive page expansion後にpage間のcontent consistencyをreviewする。
- **Dependency:** `CONTENT-001`から`CONTENT-006`の実装。
- **Human gate:** Controlled public wordingの最終human reviewが必要。
- **Status:** `TODO`
- **Definition of Done:** Company facts、service names・scope、Audit qualification、recognition、contact、privacy、CTA、metadataの差異が解消または明示的に記録される。

### `QA-002`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Substantive page expansion後にaccessibility、responsive、keyboard、representative-browser QAを実施する。
- **Dependency:** Page implementation完了と`QA-001`。
- **Human gate:** Manual QA結果のreviewが必要。
- **Status:** `TODO`
- **Definition of Done:** Release checklistのaccessibility、responsive、link、browser確認結果と未解決事項が記録され、release blockerが解消される。

### `QA-003`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Final public deploymentをvalidateする。
- **Dependency:** Relevant automated checks、`QA-001`、`QA-002`、deployment authorization。
- **Human gate:** Commit、push、merge、deploymentは各taskのexplicit authorizationが必要。
- **Status:** `TODO`
- **Definition of Done:** Approved commit、successful deployment job、public routes、404、representative assets、metadata、mobile/keyboard spot checkの結果がrelease recordに記録される。

## 3. `BLOCKED`

### `CONTACT-001`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Official company contact channel、owner、受付・応答運用を決定する。
- **Dependency:** Operational decisionと公開可能なcompany contact destination。
- **Human gate:** Human operatorによるchannel、ownership、publication approvalが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved company channel、operational owner、使用条件、review triggerが登録簿へpublic-safeに記録される。大学のcontact valueやinvented destinationを使用しない。

### `CONTACT-002`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Inquiry form architectureを設計する。
- **Dependency:** `CONTACT-001`、data fields、hosting、delivery、storage、retentionのdecision。
- **Human gate:** Architectureと第三者service利用のexplicit approvalが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Data flow、validation、abuse protection、delivery、storage、retention、failure handlingを含むreview済みdesignが作成される。

### `CONTACT-003`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Formのprivacy、security、legal、operational reviewを完了する。
- **Dependency:** `CONTACT-002`とdraft privacy/contact copy。
- **Human gate:** Privacy、security、legal、operationのresponsible reviewer承認が必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Collection、purpose、third-party sharing、security、retention、deletion、notice、consent、incident handling、operationのdecisionとapprovalが記録される。

### `CONTACT-004`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Approved architectureとcopyに基づきcontact機能を実装する。
- **Dependency:** `CONTACT-001`から`CONTACT-003`の完了、登録簿更新、別taskでのimplementation authorization。
- **Human gate:** Implementation、public copy、production operation、deploymentの承認が必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved scopeだけを実装し、accessibility、security、privacy、delivery、failure、public deploymentのtestsを通過する。

### `ASSET-001`

- **Priority:** `P2`
- **Area:** ASSETS
- **Task:** University logoのpublic repository storageとpublic deployment authorizationを確定する。
- **Dependency:** `UNI-006`、`UNI-007`とapproved university-supplied artworkの取扱条件。
- **Human gate:** Repository redistributionとdeploymentの明示的なhuman authorizationが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Storage可否、使用可能asset、display条件、review triggerがpublic-safeに記録され、許可された場合だけ別asset taskが作成される。

### `DOMAIN-001`

- **Priority:** `P1`
- **Area:** DOMAIN
- **Task:** Custom domainを設定し、DNS、GitHub Pages、HTTPS、canonical URLを検証する。
- **Dependency:** Approved domain、DNS/Pages権限、deployment plan、rollback plan。
- **Human gate:** Domain decision、settings change、deploymentのexplicit authorizationが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved domainでDNSとPages設定が一致し、HTTPS、redirect、全route、canonical metadataをlive検証して記録する。

## 4. `DEFERRED`

### `CONTENT-007`

- **Priority:** `P2`
- **Area:** CONTENT
- **Task:** Research・technical credibility候補をitem単位で検証する。
- **Dependency:** Authoritative evidence、identification、publication approval、`RESEARCH-001`の更新。
- **Human gate:** 各itemのfact verificationとpublication approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** 各候補が独立したsource ID、evidence status、publication decision、wording、restriction、review triggerを持ち、承認itemだけが実装候補になる。

### `CONTENT-008`

- **Priority:** `P2`
- **Area:** CONTENT
- **Task:** Future case-study publication frameworkを設計する。
- **Dependency:** `CASE-001`、confidentiality、completion、identifiability、customer approvalの基準。
- **Human gate:** Frameworkと各caseのseparate publication approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Customer identity、case count、contract、quotation、private detailを自動公開せず、case単位のevidenceとapprovalを要求するreview templateが承認される。

### `ASSET-002`

- **Priority:** `P2`
- **Area:** ASSETS
- **Task:** Future OGP/social image assetを企画・制作する。
- **Dependency:** Approved brand direction、metadata copy、asset rights、target platform specification。
- **Human gate:** Creative、rights、public repository storage、deploymentの承認が必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Approved sourceとrightsを持つassetがrequired size・formatで用意され、alt/metadata用途とvisual QA結果が記録される。

### `SEO-004`

- **Priority:** `P2`
- **Area:** SEO
- **Task:** Analytics/tracking導入の必要性と条件を将来検討する。
- **Dependency:** Explicit business need、privacy、security、legal、cookie、operationのreview。
- **Human gate:** Data collectionとthird-party serviceのexplicit approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Introduce/do-not-introduce decisionと根拠が承認され、導入する場合はdata flow、privacy update、consent、retention、security、validationを別taskで定義する。

## 5. Initial counts

| Dimension | Count |
|---|---:|
| `P0` | 9 |
| `P1` | 8 |
| `P2` | 5 |
| `BLOCKED` | 6 |
| `DEFERRED` | 4 |

Priority counts cover all 22 items. Status counts shown separately identify the 6 blocked and 4 deferred items; the remaining 12 items are `TODO`.
