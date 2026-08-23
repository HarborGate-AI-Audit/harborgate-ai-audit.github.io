# HarborGate AI Audit ページコンテンツ計画

## 1. 文書の役割

本書は、公式Webサイトのページ構成とcopyの計画を管理する。公開可能な事実を承認する文書ではない。

- `docs/content-register.md`を、事実を公開できるかどうか、使用できるwording、制約、review triggerの唯一のauthorityとする。
- 本書で計画済みまたはdraft済みのcontentも、自動的に承認済みpublic contentにはならない。
- Codexを含む実装者は、欠けているcompany fact、service fact、実績、contact destinationその他のpublic factを推測または創作しない。
- 検証またはhuman approvalが必要なcontentは、必要な確認と登録簿上の公開判断が完了するまで`BLOCKED`とする。
- 実装作業は`TODO.md`のstable IDで管理し、本書へpage copyや完了状態を逆流させない。

## 2. 計画status

本書では、次の語だけをplanning statusまたはexecution statusとして使用する。これらは`docs/content-register.md`のpublication decisionを置き換えない。Authorityの説明で`INTERNAL_ONLY`などの登録簿statusを引用する場合、それをplanning statusとして扱わない。

| Status | 意味 |
|---|---|
| `LIVE` | 現在のsiteに実装されている。公開承認が将来も有効であることを保証するstatusではない。 |
| `APPROVED` | 登録簿で公開が認められ、記録された条件を満たす範囲。 |
| `DRAFT` | Copyまたは構成の案。Human reviewと登録簿照合を経るまで公開しない。 |
| `TODO` | 着手可能な計画作業。未実装・未完了。 |
| `BLOCKED` | 証拠、decision、承認または先行条件が不足しており、実装してはならない。 |
| `DEFERRED` | 現在のcore content completionから意図的に外した将来候補。 |
| `DONE` | `TODO.md`のexecution itemがDefinition of Doneを満たし、必要なhuman gateと登録簿照合を完了し、durableなEvidenceを記録した。 |

`LIVE`、`APPROVED`、`DRAFT`はcontentの実装・publication状態を表し、`TODO`、`BLOCKED`、`DEFERRED`、`DONE`はexecution lifecycleを表す。Conversation memoryや説明だけでは`DONE`にしない。

### Approved-copy handoff

`CONTENT-001`から`CONTENT-006`が作る承認済みcopyは、対応する`docs/content-copy/<STABLE-ID>.md`をdurableなimplementation handoffとする。各artifactはStable ID、page/service scope、参照するcontent-register ID、exact approved wording、条件・必須disclaimer、durableなreview・commit evidenceを含む。対応artifactへexact human-approved copyを記録するまで、これらのCONTENT itemを`DONE`にできない。今回はartifactを作成しない。

Artifactは`docs/content-register.md`を置き換えない。PAGE taskは対応artifactと実装時点の登録簿の双方を照合し、artifactの存在だけをpublication authorityとして扱わない。

## 3. `/` ホーム

### Page purpose

会社の位置づけ、4つのservice、支援の考え方を短時間で理解できる入口を提供し、閲覧者を適切なservice情報とcontact案内へ導く。

### Primary audience

生成AI導入、AI品質・governance、DX、securityに課題があり、相談先や支援範囲を初めて確認する組織担当者。

### Current implemented sections

- `LIVE`: Heroのbrand name、tagline、core proposition。
- `LIVE`: 会社紹介と個別設計方針、company pageへのlink。
- `LIVE`: 承認済みservice scopeを基にした3つのstrength。
- `LIVE`: 4serviceのsummary cardとservices pageへのlink。
- `LIVE`: MandatoryなAudit qualification。
- `LIVE`: 支援の考え方とHarbor/Gateのbrand origin。
- `LIVE`: Preparation-stateのcontact CTA。

現行copyの正確な内容は`src/pages/index.astro`、`src/config/site.ts`、`src/data/services.ts`を参照し、本書では再定義しない。

### Desired final sections

- `TODO`: Conciseなcorporate positioning。
- `TODO`: Approvedな3つのstrength。
- `TODO`: 4service overview。
- `TODO`: Visitorの課題から該当serviceへ進む、より明確な導線。
- `TODO`: 個別相談から支援設計までのsupport process説明。
- `BLOCKED`: Trustまたはcredibility contentは、claimごとの検証と公開承認後だけ追加する。
- `TODO`: Contact CTA。

### Content already approved

- `APPROVED`: Brandとpositioningは`BRAND-001`から`BRAND-004`を参照する。
- `APPROVED`: Service status、scope、個別設計方針は`SERVICE-000`から`SERVICE-005`を参照する。
- `APPROVED`: Audit説明は`AUDIT-001`のmandatory wordingと条件を使用する。
- `LIVE`: Contactのpreparation-state案内は現行siteに実装されている。`LIVE`はpublication authorityではなく、新しいcontact copyまたはdestinationには登録簿上の承認とhuman gateが必要である。

### Content still to draft

- `DRAFT`: Service詳細確定後のconcise positioningと3 strengthsの構成調整。
- `DRAFT`: 課題別service導線とsupport processの見出し・説明。
- `DRAFT`: Contact CTAの最終copy。未承認contact destinationは含めない。

### Facts/evidence still required

- `BLOCKED`: Trust、credibility、research、achievement、caseに関するclaimはitem-level verificationとpublication approvalが必要。
- `BLOCKED`: 新しい成果、効果、availabilityのclaimは登録簿への根拠・制約・公開判断の記録が必要。

### Dependencies

- `TODO`: `PAGE-001`、`PAGE-002`の順でserviceとcompanyを実装する。
- `TODO`: `CONTENT-006`を承認済みcopy artifactへ確定し、その後`PAGE-003`を実装する。
- `TODO`: `PAGE-003`の後に`QA-001`、`QA-002`、`QA-003`の順でreviewと公開検証を行う。

### Deferred content

- `DEFERRED`: Research・technical credibility、case study、大学logo、analytics。

### Completion criteria

- `TODO`: Service詳細と矛盾せず、visitor problemからservice、support process、contact案内までの導線が明確である。
- `TODO`: 3 strengthsを含む全claimが登録簿に紐づき、条件付きwordingとAudit qualificationを保持する。
- `TODO`: Human content review、consistency review、accessibility/browser QA、public deployment validationを完了する。

## 4. `/services/` サービス

### Page purpose

4serviceの対象課題、scope、typical output、support approachを具体化するprimary detailed content pageとする。

### Primary audience

自組織の課題に合うserviceと相談可能な範囲を比較し、個別相談を検討する担当者。

### Current implemented sections

- `LIVE`: 課題に応じて支援を個別設計するpositioning。
- `LIVE`: 4serviceそれぞれの名称、summary、主な対象、主なoutput、支援の進め方。
- `LIVE`: MandatoryなAudit qualification。

現行copyは`src/pages/services/index.astro`、`src/data/services.ts`、`src/components/ServiceCard.astro`を参照し、本書では再定義しない。

### Desired final sections

- `TODO`: 4serviceごとにtarget problems、scope、typical outputs、support approach、suitable consultation examplesを明確にする。
- `TODO`: Service間の違いと、複数領域を組み合わせる場合の考え方を、承認済みscope内で説明する。
- `APPROVED`: 個別相談・project単位で支援内容を設計する方針を保持する。
- `BLOCKED`: Price、case count、guarantee、未承認availability claimは追加しない。

### Content already approved

- `APPROVED`: Company-level statusと4serviceの名称・scopeは`SERVICE-000`から`SERVICE-004`を参照する。
- `APPROVED`: Individual design principleは`SERVICE-005`を参照する。
- `APPROVED`: Audit qualificationは`AUDIT-001`を参照する。

### Content still to draft

- `DRAFT`: 各serviceの5要素を揃えた詳細copy。
- `DRAFT`: Suitable consultation examples。実績やavailabilityと誤認されない一般的な例としてhuman reviewを受ける。
- `DRAFT`: Service selectionまたは組合せを案内するpage composition。

### Facts/evidence still required

- `BLOCKED`: 現行scopeを超える対象、output、提供方法は登録簿の更新とhuman approvalが必要。
- `BLOCKED`: Price、case count、guarantee、availability、効果に関する新規claimは個別のauthorityとpublication approvalが必要。

### Dependencies

- `TODO`: `CONTENT-001`から`CONTENT-004`を`DONE`にして各copy artifactを作成し、その後`PAGE-001`を実装する。
- `TODO`: `PAGE-001`の後に`QA-001`、`QA-002`、`QA-003`の順でreviewと公開検証を行う。

### Deferred content

- `DEFERRED`: Price、標準package、case study、case count。

### Completion criteria

- `TODO`: 4serviceすべてで5要素が揃い、scopeの重複と違いを閲覧者が理解できる。
- `TODO`: Registration authority、mandatory disclaimer、禁止claimをpage全体で照合し、human approvalを得る。
- `TODO`: Accessibility/browser QAとpublic deployment validationを完了する。

## 5. `/company/` 会社概要

### Page purpose

会社のmission、brand story、legal company information、認定情報とcompany/university separationを、役割を混同せずに示す。

### Primary audience

相談前に法人情報、運営主体、brandの背景、大学発venture認定を確認する閲覧者。

### Current implemented sections

- `LIVE`: 事業概要。
- `LIVE`: Legal company informationと所在地に関する補足。
- `LIVE`: Company roleに限定したofficer情報。
- `LIVE`: Harbor/Gateのbrand origin。
- `LIVE`: Neutralなrecognition、recognition date、mandatory non-endorsement。

現行copyは`src/pages/company/index.astro`と`src/config/site.ts`を参照し、本書では再定義しない。

### Desired final sections

- `TODO`: Mission。
- `TODO`: Harbor/Gate brand origin。
- `APPROVED`: Legal company information。
- `APPROVED`: University-venture recognition。
- `BLOCKED`: 新しい明示的なcompany/university separation wordingは、公開承認済みの登録簿entryまたはhuman-authorizedな登録簿更新・分割ができるまで追加しない。
- `BLOCKED`: Research・technical credibilityはitem-level verificationとpublication approval後だけ追加する。
- `DEFERRED`: Academic titleは別途承認されるまで掲載対象外とする。

### Content already approved

- `APPROVED`: Legal、normalized display、brand、officer情報は`ORG-001`から`ORG-005`、`BRAND-001`から`BRAND-004`、`TEAM-001`、`TEAM-002`を参照する。
- `APPROVED`: Recognitionは`UNI-001`から`UNI-005`の公開可能な項目と全条件を参照する。
- `LIVE`: 現行Company pageは、すでに`APPROVED`のcompany facts、recognition wording、recognition date、non-endorsement wordingに基づく。
- `INTERNAL_ONLY`: `UNI-008`はcompanyとuniversityを混同しないためのgovernance constraintであり、public copyのauthorityではない。新しい明示的な主体分離wordingには、公開承認済みの登録簿entryまたはhuman-authorizedな登録簿更新・分割が必要である。

### Content still to draft

- `DRAFT`: Mission statementとcompany story。Brand originの承認済み意味を超える新規factは加えない。
- `DRAFT`: Company/university separationを閲覧者向けに簡潔に示す構成。

### Facts/evidence still required

- `BLOCKED`: Missionの最終wordingにはhuman approvalが必要。
- `BLOCKED`: Research、technical credibility、academic title、affiliation、achievementはitem-level verificationとpublication decisionが必要。
- `BLOCKED`: Recognitionの未解決qualifierはauthorityによる解決まで使用しない。

### Dependencies

- `TODO`: `PAGE-001`を`DONE`にし、その後`CONTENT-005`を承認済みcopy artifactへ確定して`PAGE-002`を実装する。
- `TODO`: `PAGE-002`の後に`QA-001`、`QA-002`、`QA-003`の順でreviewと公開検証を行う。

### Deferred content

- `DEFERRED`: Research・technical credibility、academic title・affiliation、大学logo。

### Completion criteria

- `TODO`: Mission、brand story、legal facts、recognition、主体分離が別のsection目的として整理される。
- `TODO`: 全controlled factと条件を登録簿へ照合し、companyとuniversityを同一のoperating entityとして見せない。
- `TODO`: Human content review、accessibility/browser QA、public deployment validationを完了する。

## 6. `/contact/` お問い合わせ

### Page purpose

現在利用できるcontact手段のstatusを誤解なく案内し、未承認channelへの機密情報送信を防ぐ。

### Primary audience

相談を希望し、安全で正式な連絡方法を確認する閲覧者。

### Current implemented sections

- `LIVE`: Contact formがpreparation-stateである案内。
- `LIVE`: Siteに送信formまたは連絡機能がないことの説明。
- `LIVE`: 未承認channelへ機密情報を送信しないためのnotice。

現行copyは`src/pages/contact/index.astro`と`src/config/site.ts`を参照し、本書では再定義しない。

### Desired final sections

- `LIVE`: 現在のpreparation-state copyを正式なcompany contact channelの承認まで維持する。
- `BLOCKED`: 将来のcompany contact channelまたはform。
- `BLOCKED`: Form導入時の利用目的、入力項目、confirmation、privacy notice、security notice、送信後案内。

### Content already approved

- `LIVE`: Current preparation-state案内とconfidentiality noticeは現行siteに実装されている。`LIVE`はimplementation stateであり、publication authorityではない。
- `BLOCKED`: `CONTACT-003`はfuture formのreview decisionが未完了であり、current copyまたは新規copyのpublication authorityにはならない。
- `APPROVED`: University email・telephoneを掲載しない制約は`CONTACT-001`、`CONTACT-002`を参照する。

### Content still to draft

- `BLOCKED`: Company contact channelとformのcopyはdestination、operation、privacy、securityのdecision後にdraftする。新しいdestinationまたはcopyは、登録簿上のpublication decisionと必要なhuman gateなしに追加しない。

### Facts/evidence still required

- `BLOCKED`: Company contact destination、owner、受付・応答運用、form architecture。
- `BLOCKED`: Privacy、security、legal、operational reviewとhuman approval。

### Dependencies

- `BLOCKED`: `CONTACT-001`から`CONTACT-004`。

### Deferred content

- `DEFERRED`: File upload、third-party integration、analyticsを伴うcontact機能。別途明示承認が必要。

### Completion criteria

- `LIVE`: Block解除までは、現行案内が正確で、連絡先や送信機能を推測で追加していない。
- `BLOCKED`: 将来実装はcontact destination、privacy、security、legal、operationの承認と登録簿更新を完了する。
- `BLOCKED`: Human review、accessibility/browser QA、送受信のoperational test、public deployment validationを完了する。

## 7. `/privacy/` プライバシー

### Page purpose

現在のstatic siteにおける情報取扱い機能を説明し、将来のdata collection導入前に必要なreviewを明示する。

### Primary audience

Siteが収集する情報とcontact機能の有無を確認する閲覧者、および将来のdata collectionをreviewする担当者。

### Current implemented sections

- `LIVE`: 現在のsite機能と、意図的なdata collection機能がないことの説明。
- `LIVE`: 機密情報を入力しない案内。
- `LIVE`: Form等の導入前にprivacy、security、legal、operationを見直す案内。

現行copyは`src/pages/privacy/index.astro`を参照し、本書では再定義しない。

### Desired final sections

- `LIVE`: 現在のstatic-site explanationをdata collectionの実態と一致させて維持する。
- `BLOCKED`: Contact form、analytics、cookiesその他のdata collection導入前に、収集・利用・保管・第三者提供・削除・窓口・通知をreviewする。
- `BLOCKED`: Review結果に基づくrevised privacy content。

### Content already approved

- `APPROVED`: Initial static siteとfuture reviewの範囲は`docs/content-register.md`および`docs/site-spec.md`のprivacy制約を参照する。

### Content still to draft

- `BLOCKED`: Data collection導入後のprivacy wording。実際のarchitectureとoperationが確定するまでdraftを公開しない。

### Facts/evidence still required

- `BLOCKED`: 収集項目、利用目的、third-party提供、security、retention、deletion、contact channel、同意・通知方法。
- `BLOCKED`: Privacy、security、legal、operational reviewとhuman approval。

### Dependencies

- `BLOCKED`: `CONTACT-001`から`CONTACT-004`。
- `BLOCKED`: Analytics等を提案する場合は別途explicit approval。

### Deferred content

- `DEFERRED`: Contact form、analytics、cookiesその他のdata collectionが存在しない間の将来policy詳細。

### Completion criteria

- `LIVE`: Current site behaviorと説明が一致し、definitiveなlegal guaranteeを行わない。
- `BLOCKED`: Data collection導入前に必要な全review、登録簿更新、human approval、implementation QAを完了する。

## 8. `/404.html`

### Page purpose

存在しないURLであることを明示し、閲覧者をhomeへ戻す。

### Primary audience

無効または変更済みのURLへ到達した閲覧者。

### Current implemented sections

- `LIVE`: 明確な404 message、URL確認案内、home navigation。
- `LIVE`: `noindex` metadataとJavaScriptを要しないstatic implementation。

現行copyは`src/pages/404.astro`を参照し、本書では再定義しない。

### Desired final sections

- `LIVE`: 現行の簡潔な404構成を維持する。

### Content already approved

- `APPROVED`: Custom 404、`noindex`、home navigationという構成は`docs/site-spec.md`に従う。

### Content still to draft

- `DEFERRED`: 現時点で追加copyを計画しない。

### Facts/evidence still required

- `DEFERRED`: 新しいcompany factやmarketing claimを必要としない。

### Dependencies

- `TODO`: Public behaviorの検証は`QA-003`に依存する。

### Deferred content

- `DEFERRED`: Search、dynamic suggestionその他のclient-side機能。

### Completion criteria

- `LIVE`: Custom `/404.html`がbuildされ、`noindex`、明確なmessage、home linkを保持する。
- `TODO`: Public deploymentで404 behaviorとhome navigationを確認する。

## 9. Site-wide content and assets

### Purpose and audience

全routeに共通するnavigation、metadata、qualification、asset、将来のplatform機能を一貫して管理する。対象は全閲覧者とsite reviewerである。

### Current implementation

- `LIVE`: Header、footer、primary navigation、skip link、共通metadata、favicon、manifest、approved-copy由来のpage metadata。
- `LIVE`: Analytics、tracking、不要なcookiesは導入していない。

### Desired final state

- `TODO`: Page間のterminology、service scope、CTA、metadataを一貫させる。
- `BLOCKED`: University logoはrepository storageとpublic deploymentのauthorizationを得るまで追加しない。
- `BLOCKED`: Custom domainはpage-content作業と分離し、設定権限とdomain decisionを確認して別taskで扱う。
- `TODO`: Sitemap decision、approved factだけを用いるstructured-data design、metadata/OGP refinementを後続taskとして検討する。
- `DEFERRED`: Case studiesとresearch achievementsはdedicated verification後にitem単位で検討する。
- `DEFERRED`: Analytics/trackingはexplicit approvalがない限り導入しない。

### Dependencies and completion criteria

- `TODO`: `SEO-001`から`SEO-003`、`QA-001`から`QA-003`。
- `BLOCKED`: `ASSET-001`、`DOMAIN-001`。
- `DEFERRED`: `CONTENT-007`、`CONTENT-008`、`ASSET-002`、`SEO-004`。
- `TODO`: 全共通contentが登録簿とpage contentに一致し、unapproved asset、claim、tracking、contact mechanismを含まない。

## 10. `CORE_CONTENT_COMPLETE`

Milestone `CORE_CONTENT_COMPLETE`は、`TODO.md`に定義する12個のP0 item、すなわち`CONTENT-001`から`CONTENT-006`、`PAGE-001`から`PAGE-003`、`QA-001`から`QA-003`がすべて`DONE`の場合だけ成立する。

このmilestoneはnext content expansionが実装、review、deploy、public validationまで完了したことを示す。Contact form、custom domain、university logo、research、case studies、analytics、optional OGP、および他の`P1`・`P2`・`BLOCKED`・`DEFERRED` itemは、人が明示的にP0へ昇格しない限りblockerではない。すべてのfuture workが完了したことは意味しない。

## 11. 運用方法

1. 作業開始前に`TODO.md`から1つのstable IDまたは小さな関連ID群を選ぶ。
2. `docs/content-plan.md`でpage goalを確認する。
3. `docs/content-register.md`でfact、wording、condition、restriction、review triggerを確認する。
4. `DRAFT`はhuman review前に公開せず、`BLOCKED`はblock解除前に実装しない。
5. `CONTENT-001`から`CONTENT-006`は`docs/content-copy/<STABLE-ID>.md`へ承認済みcopyを記録してから、依存するPAGE taskへ進む。
6. PAGE taskを完了してから、依存するQA taskへ進む。
7. 実装、content approval、release QAを別のreview gateとして記録する。
8. Definition of Done、human gate、登録簿整合を満たし、review・approval・validationを回収可能なdurable Evidenceへ記録した項目だけを`DONE`にする。Conversation memoryだけをEvidenceにしない。
9. Stable IDは`DONE`後も保持し、通常の再作業は新しいchange IDで管理する。元のDefinition of Doneが未達だったと実証できる場合だけ元itemをreopenする。
