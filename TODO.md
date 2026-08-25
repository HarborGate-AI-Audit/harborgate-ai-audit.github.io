# HarborGate AI Audit 実行バックログ

## 1. 使い方

本書は実装と検証のbacklogであり、page copyまたはpublic factのauthorityではない。Page goalは`docs/content-plan.md`、publication authorityは`docs/content-register.md`を参照する。

- Stable IDはitemの移動やstatus変更でも再利用し、完了後も削除せず、別taskへ付け替えない。
- Priorityは`P0`（core page-content completionに必須）、`P1`（重要なnext-stage improvement）、`P2`（optional/future enhancement）とする。
- Execution Statusは`TODO`、`BLOCKED`、`DEFERRED`、`DONE`だけを使用する。説明、口頭合意、conversation memoryだけで完了扱いにしない。
- `DONE`にできるのは、Definition of Doneを満たし、必要なhuman gateが完了し、`docs/content-register.md`と整合し、review・approval・record・validationを後から回収できるdurableな場所を`Evidence`へ記録したitemだけである。
- 完了したitemはStable IDと`DONE` statusを恒久的な完了記録として残す。
- Reopenが必要な場合、元のDefinition of Doneが未達だったと実証できる場合を除き、新しいStable IDでchange taskを作成する。
- Human gateがあるitemは、記載されたapprovalを得るまでpublic implementationまたはpublicationへ進めない。
- `BLOCKED` itemはblock解除まで実装しない。解除時も`docs/content-register.md`のpublication decisionが優先する。
- `Evidence`の`—`はdurable evidence未記録を意味し、そのitemを`DONE`にできない。
- `Evidence`にはitemに応じた最小限のpublic-safeなrepository path、content-copy artifact、register ID、PR、commit SHA、workflow/deployment run、public URL audit recordなどを記録する。

### Approved-copy handoff

`CONTENT-001`から`CONTENT-006`の承認済みcopyは、将来のcopy taskで`docs/content-copy/<STABLE-ID>.md`へ記録する。対応artifactへexact human-approved copyを記録するまで、これらのCONTENT itemを`DONE`にできない。今回はそのdirectoryまたはartifactを作成しない。

各artifactはStable ID、page/service scope、参照するcontent-register ID、exact approved wording、適用条件・必須disclaimer、durableなreview・commit evidenceを含む。Artifactは`docs/content-register.md`を置き換えず、PAGE実装は対応artifactと実装時点の登録簿の両方を検証する。

### `CORE_CONTENT_COMPLETE`

Milestone `CORE_CONTENT_COMPLETE`は、次の12個のP0 itemがすべて`DONE`になった場合だけ成立する。

- `CONTENT-001`、`CONTENT-002`、`CONTENT-003`、`CONTENT-004`、`CONTENT-005`、`CONTENT-006`
- `PAGE-001`、`PAGE-002`、`PAGE-003`
- `QA-001`、`QA-002`、`QA-003`

これはnext content expansionが実装、review、deploy、public validationまで完了したことを意味する。Contact form、custom domain、university logo、research、case studies、analytics、optional OGP、および他の`P1`・`P2`・`BLOCKED`・`DEFERRED` itemは、人が明示的にP0へ昇格しない限りmilestoneをblockしない。すべてのfuture workが完了したという意味ではない。

## 2. `TODO`

### `CONTENT-001`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate AI Auditの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-001`、`SERVICE-005`、`AUDIT-001`と現行implementation。
- **Human gate:** Public copyとAudit qualificationの承認が必要。
- **Status:** `DONE`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、exact human-approved copyが`docs/content-copy/CONTENT-001.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** `docs/content-copy/CONTENT-001.md`; approved-copy snapshot `6e9c613322de8c306f91ac99fbc0213e6a999810`; Sections 3.1–3.7; SHA-256 `f6e1e81835c618a66eca8a5626de27d408f2681e729f9fc79635c129edb146b6`; human approval 2026-08-23

### `CONTENT-002`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate AI Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-002`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `DONE`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、exact human-approved copyが`docs/content-copy/CONTENT-002.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** `docs/content-copy/CONTENT-002.md`; approved-copy snapshot `0269c43c95750d1cbb45519b02023e5647fcef8d`; Sections 3.1–3.6; SHA-256 `a58ae7b943873c6ed02b6e3747705a5dec9461cc60658259f9d2887978e0d2fb`; human approval 2026-08-24

### `CONTENT-003`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate DX Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-003`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `DONE`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、exact human-approved copyが`docs/content-copy/CONTENT-003.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** `docs/content-copy/CONTENT-003.md`; approved-copy snapshot `3e3f5083c2ac6bb8a0ce233af432763e969fe713`; Sections 3.1–3.6; SHA-256 `d2e4060ae782206beddb4f8b8b49f0209317c6ff4fa8abf192c8787772c4448b`; human approval 2026-08-24

### `CONTENT-004`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** HarborGate Security Consultingの詳細service copyを、target problems、scope、typical outputs、support approach、suitable consultation examplesの5要素でdraftする。
- **Dependency:** `SERVICE-004`、`SERVICE-005`と現行implementation。
- **Human gate:** Public copyの承認が必要。
- **Status:** `DONE`
- **Definition of Done:** 5要素が承認済みscope内で揃い、price、case count、guarantee、unapproved availabilityを含まず、exact human-approved copyが`docs/content-copy/CONTENT-004.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** `docs/content-copy/CONTENT-004.md`; approved-copy snapshot `98fa8ff94106b36890ce43969225131815c3baa9`; Sections 3.1–3.6; SHA-256 `e7683eaa02086f9600dc2adc1e13d9f31b3a8f17858e8f7cfd8f265c5a05d301`; human approval 2026-08-25

### `PAGE-001`

- **Priority:** `P0`
- **Area:** PAGE
- **Task:** Services pageと既存のreusable service-data/component architectureへ4 serviceの承認済み詳細copyを実装する。
- **Dependency:** `CONTENT-001`、`CONTENT-002`、`CONTENT-003`、`CONTENT-004`がすべて`DONE`で、`docs/content-copy/CONTENT-001.md`、`CONTENT-002.md`、`CONTENT-003.md`、`CONTENT-004.md`が存在すること。
- **Human gate:** Implementation scope authorizationとexact approved copyを実装することの確認が必要。Commit、push、merge、deploymentはそれぞれ該当taskで別途明示的な承認が必要。
- **Status:** `DONE`
- **Definition of Done:** 4 serviceのcontent setが各artifactと登録簿の承認scope内で実装され、Audit qualificationを含み、price、case count、guarantee、unapproved availabilityを追加せず、`npm run check`と`npm run build`を通過し、accepted workflowのPR・commit evidenceがdurableに記録された後だけ`DONE`になる。
- **Evidence:** implementation snapshot `3a913d3990fc4adc88ba22048a458e13dd1e475f`; Draft PR #7 `https://github.com/HarborGate-AI-Audit/harborgate-ai-audit.github.io/pull/7`; approved-copy implementation: `CONTENT-001` Sections 3.1–3.7 exact match, `CONTENT-002` Sections 3.1–3.6 exact match, `CONTENT-003` Sections 3.1–3.6 exact match, `CONTENT-004` Sections 3.1–3.6 exact match; `CONTENT-001` Section 3.7 verified; CONTACT authority gate PASS; legacy/unapproved services-copy audit PASS; `npm run check` PASS (0 errors / 0 warnings / 0 hints); `npm run build` PASS (6 pages generated); generated HTML verification PASS; responsive QA 320/768/1440 PASS; accessibility/keyboard QA PASS; homepage regression QA PASS

### `CONTENT-005`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** Company missionとHarbor/Gate brand storyのpage compositionとcopyをdraftする。
- **Dependency:** `PAGE-001`が`DONE`であること、`BRAND-001`から`BRAND-004`、legal/company facts、現行company page。
- **Human gate:** Mission、story、company/university separationのpublic copy承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Missionとstoryが新規factを創作せず、legal facts、recognition、主体分離とsection上区別され、exact human-approved copyが`docs/content-copy/CONTENT-005.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** —

### `PAGE-002`

- **Priority:** `P0`
- **Area:** PAGE
- **Task:** Company pageへ承認済みmission、brand story、company facts、recognition説明を実装する。
- **Dependency:** `CONTENT-005`と`PAGE-001`が`DONE`で、`docs/content-copy/CONTENT-005.md`が存在すること。
- **Human gate:** Exact Company public copy approval、company/university role-separation review、implementation authorizationが必要。Commit、push、merge、deploymentはそれぞれ該当taskで別途明示的な承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Missionとstoryを実装し、legal factsをcanonical config・登録簿から取得して維持し、承認済みrecognition wording・date・university non-endorsementを含み、`INTERNAL_ONLY`をpublic authorityとして使わず、未承認のacademic・research・contact情報を追加せず、`npm run check`と`npm run build`を通過し、accepted workflowのPR・commit evidenceがdurableに記録された後だけ`DONE`になる。
- **Evidence:** —

### `CONTENT-006`

- **Priority:** `P0`
- **Area:** CONTENT
- **Task:** Service copy確定後にhomepage positioning、3 strengths、problem-to-service導線、support process、contact CTAをrefineする。
- **Dependency:** `PAGE-001`と`PAGE-002`が`DONE`であること。
- **Human gate:** Homepage全体のpublic copyとclaim承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Homepageがservice詳細と一致し、課題からserviceと次のactionへ進め、全claimが登録簿に紐づき、exact human-approved copyが`docs/content-copy/CONTENT-006.md`へdurableに記録され、実装taskへ渡せる。
- **Evidence:** —

### `PAGE-003`

- **Priority:** `P0`
- **Area:** PAGE
- **Task:** Home pageへ承認済みhomepage copyと導線を実装する。
- **Dependency:** `CONTENT-006`、`PAGE-001`、`PAGE-002`がすべて`DONE`で、`docs/content-copy/CONTENT-006.md`が存在すること。
- **Human gate:** Homepage copy・claimとimplementation scopeの承認が必要。Commit、push、merge、deploymentはそれぞれ該当taskで別途明示的な承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Approved positioning、approved copyに従う3 strengths、problem-to-service導線、support process、承認済みcontact state内のCTAが実装され、service summaryがServices pageと一致し、Audit qualificationを含み、unsupported credibility・availability・guarantee claimを追加せず、`npm run check`と`npm run build`を通過し、accepted workflowのPR・commit evidenceがdurableに記録された後だけ`DONE`になる。
- **Evidence:** —

### `SEO-001`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Sitemapを導入するか決定し、導入する場合のroute、generation、`robots.txt`連携を定義する。
- **Dependency:** Final route inventoryとdeployment URL policy。
- **Human gate:** Indexing方針の承認が必要。
- **Status:** `TODO`
- **Definition of Done:** Human-approved decision、対象route、implementation scope、validation方法が記録され、実装する場合は別taskが作成される。
- **Evidence:** —

### `SEO-002`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Approved factだけを用いるstructured-data designを作成する。
- **Dependency:** `docs/content-register.md`、final page composition、production URL policy。
- **Human gate:** Schema type、公開fact、生成元の承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 各propertyが登録簿IDへtraceでき、unapproved contact、logo、rating、case、credentialを含まないreview済みdesignになる。
- **Evidence:** —

### `SEO-003`

- **Priority:** `P1`
- **Area:** SEO
- **Task:** Page title、description、Open Graph textとasset参照方針をrefineする。
- **Dependency:** `CONTENT-006`、final page copy。Image追加部分は`ASSET-002`。
- **Human gate:** Metadata copyと使用assetの承認が必要。
- **Status:** `TODO`
- **Definition of Done:** 全public routeのmetadataがuniqueでpage copyと一致し、approved copy/assetsだけを使用し、canonical URL validation planを含む。
- **Evidence:** —

### `QA-001`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Substantive page expansion後にpage間のcontent consistencyをreviewする。
- **Dependency:** `PAGE-001`、`PAGE-002`、`PAGE-003`がすべて`DONE`であること。
- **Human gate:** Controlled public wordingの最終human reviewが必要。
- **Status:** `TODO`
- **Definition of Done:** Company facts、service names・scope、Audit qualification、recognition、contact、privacy、CTA、metadataの差異が解消または明示的に記録され、review結果とapprovalを回収可能なdurable evidenceとして記録する。
- **Evidence:** —

### `QA-002`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Substantive page expansion後にaccessibility、responsive、keyboard、representative-browser QAを実施する。
- **Dependency:** `QA-001`、`PAGE-001`、`PAGE-002`、`PAGE-003`がすべて`DONE`であること。
- **Human gate:** Manual QA結果のreviewが必要。
- **Status:** `TODO`
- **Definition of Done:** Release checklistのaccessibility、responsive、link、keyboard、representative-browser確認結果と未解決事項がdurableに記録され、release blockerが解消される。`/tmp`だけに置かれた結果はEvidenceにしない。
- **Evidence:** —

### `QA-003`

- **Priority:** `P0`
- **Area:** QA
- **Task:** Final public deploymentをvalidateする。このitemはdeploymentを検証するだけで、commit、push、merge、settings変更またはdeploymentの権限を付与しない。
- **Dependency:** `QA-002`が`DONE`で、relevant automated checksが成功し、明示的なdeployment authorizationがあり、検証可能なdeployed artifactが存在すること。
- **Human gate:** Commit、push、merge、deploymentは各taskのexplicit authorizationが必要。
- **Status:** `TODO`
- **Definition of Done:** Merged PR・commit、successful deployment job、public routes、404、representative assets、metadata、mobile/keyboard spot checkを含むpublic audit結果がdurableなrelease recordに記録される。
- **Evidence:** —

## 3. `BLOCKED`

### `CONTACT-001`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Official company contact channel、owner、受付・応答運用を決定する。
- **Dependency:** Operational decisionと公開可能なcompany contact destination。
- **Human gate:** Human operatorによるchannel、ownership、publication approvalが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved company channel、operational owner、使用条件、review triggerが登録簿へpublic-safeに記録される。大学のcontact valueやinvented destinationを使用しない。
- **Evidence:** —

### `CONTACT-002`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Inquiry form architectureを設計する。
- **Dependency:** `CONTACT-001`、data fields、hosting、delivery、storage、retentionのdecision。
- **Human gate:** Architectureと第三者service利用のexplicit approvalが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Data flow、validation、abuse protection、delivery、storage、retention、failure handlingを含むreview済みdesignが作成される。
- **Evidence:** —

### `CONTACT-003`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Formのprivacy、security、legal、operational reviewを完了する。
- **Dependency:** `CONTACT-002`とdraft privacy/contact copy。
- **Human gate:** Privacy、security、legal、operationのresponsible reviewer承認が必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Collection、purpose、third-party sharing、security、retention、deletion、notice、consent、incident handling、operationのdecisionとapprovalが記録される。
- **Evidence:** —

### `CONTACT-004`

- **Priority:** `P1`
- **Area:** CONTACT
- **Task:** Approved architectureとcopyに基づきcontact機能を実装する。
- **Dependency:** `CONTACT-001`から`CONTACT-003`の完了、登録簿更新、別taskでのimplementation authorization。
- **Human gate:** Implementation、public copy、production operation、deploymentの承認が必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved scopeだけを実装し、accessibility、security、privacy、delivery、failure、public deploymentのtestsを通過する。
- **Evidence:** —

### `ASSET-001`

- **Priority:** `P2`
- **Area:** ASSETS
- **Task:** University logoのpublic repository storageとpublic deployment authorizationを確定する。
- **Dependency:** `UNI-006`、`UNI-007`とapproved university-supplied artworkの取扱条件。
- **Human gate:** Repository redistributionとdeploymentの明示的なhuman authorizationが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Storage可否、使用可能asset、display条件、review triggerがpublic-safeに記録され、許可された場合だけ別asset taskが作成される。
- **Evidence:** —

### `DOMAIN-001`

- **Priority:** `P1`
- **Area:** DOMAIN
- **Task:** Custom domainを設定し、DNS、GitHub Pages、HTTPS、canonical URLを検証する。
- **Dependency:** Approved domain、DNS/Pages権限、deployment plan、rollback plan。
- **Human gate:** Domain decision、settings change、deploymentのexplicit authorizationが必要。
- **Status:** `BLOCKED`
- **Definition of Done:** Approved domainでDNSとPages設定が一致し、HTTPS、redirect、全route、canonical metadataをlive検証して記録する。
- **Evidence:** —

## 4. `DEFERRED`

### `CONTENT-007`

- **Priority:** `P2`
- **Area:** CONTENT
- **Task:** Research・technical credibility候補をitem単位で検証する。
- **Dependency:** Authoritative evidence、identification、publication approval、`RESEARCH-001`の更新。
- **Human gate:** 各itemのfact verificationとpublication approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** 各候補が独立したsource ID、evidence status、publication decision、wording、restriction、review triggerを持ち、承認itemだけが実装候補になる。
- **Evidence:** —

### `CONTENT-008`

- **Priority:** `P2`
- **Area:** CONTENT
- **Task:** Future case-study publication frameworkを設計する。
- **Dependency:** `CASE-001`、confidentiality、completion、identifiability、customer approvalの基準。
- **Human gate:** Frameworkと各caseのseparate publication approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Customer identity、case count、contract、quotation、private detailを自動公開せず、case単位のevidenceとapprovalを要求するreview templateが承認される。
- **Evidence:** —

### `ASSET-002`

- **Priority:** `P2`
- **Area:** ASSETS
- **Task:** Future OGP/social image assetを企画・制作する。
- **Dependency:** Approved brand direction、metadata copy、asset rights、target platform specification。
- **Human gate:** Creative、rights、public repository storage、deploymentの承認が必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Approved sourceとrightsを持つassetがrequired size・formatで用意され、alt/metadata用途とvisual QA結果が記録される。
- **Evidence:** —

### `SEO-004`

- **Priority:** `P2`
- **Area:** SEO
- **Task:** Analytics/tracking導入の必要性と条件を将来検討する。
- **Dependency:** Explicit business need、privacy、security、legal、cookie、operationのreview。
- **Human gate:** Data collectionとthird-party serviceのexplicit approvalが必要。
- **Status:** `DEFERRED`
- **Definition of Done:** Introduce/do-not-introduce decisionと根拠が承認され、導入する場合はdata flow、privacy update、consent、retention、security、validationを別taskで定義する。
- **Evidence:** —

## 5. Initial counts

| Dimension | Count |
|---|---:|
| `P0` | 12 |
| `P1` | 8 |
| `P2` | 5 |
| `TODO` | 15 |
| `BLOCKED` | 6 |
| `DEFERRED` | 4 |
| `DONE` | 0 |

Priority counts and Status counts each cover all 25 unique items.
