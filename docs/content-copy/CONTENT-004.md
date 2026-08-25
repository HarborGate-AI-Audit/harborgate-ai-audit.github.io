# CONTENT-004 — HarborGate Security Consulting 詳細サービスcopy

## 1. Artifact status

- Stable ID: `CONTENT-004`
- State: `HUMAN_APPROVED_DURABLE`
- Target page: `/services/`
- Service: `HarborGate Security Consulting`
- Publication authority: `docs/content-register.md`
- Implementation consumer: `PAGE-001`

このartifact自体は公開を許可するものではありません。`PAGE-001`がこのcopyを利用する前に、`CONTENT-001`から`CONTENT-004`までの完了と、実装時点の`docs/content-register.md`との整合確認が必要です。

## 2. Authority references

Publication authorityとして参照する登録簿ID:

- `SERVICE-004`
- `SERVICE-005`

現行implementationの参照元:

- `src/data/services.ts`
- `src/pages/services/index.astro`
- `src/components/ServiceCard.astro`

現行implementationはstructureの参照元であり、publication authorityではありません。このsectionはreview metadataであり、公開用copyではありません。

## 3. Draft public copy

このsectionのSections 3.1–3.6だけが、将来のpublic implementationを想定して人間承認されたcopyです。Artifactの記録だけでは実装を許可せず、`PAGE-001`の全dependencyと実装時点の登録簿を確認します。

### 3.1 サービス概要

情報セキュリティやサイバーセキュリティ、教育・研修、生成AI利用ルールについて、ご相談内容に応じて支援します。

現在の課題や検討したい内容を整理し、必要となる対象領域と支援範囲を明確にしながら進めます。

ご相談内容に応じて個別に支援内容を設計します。

### 3.2 対象となる課題

次のような、セキュリティや教育・研修、生成AI利用ルールに関する検討課題を対象とします。

- 情報セキュリティについて課題を感じているが、何から整理すればよいか分からない
- サイバーセキュリティについて、現在の課題や検討事項を整理したい
- セキュリティに関する教育について、目的や扱うテーマを整理したい
- セキュリティに関する研修について、どのような内容を検討すべきか整理したい
- 生成AIを利用する際のルールについて、組織として検討すべき事項を整理したい
- 複数の課題があり、どの領域から検討するか整理したい

具体的な対象範囲は案件ごとに異なります。

### 3.3 支援範囲

HarborGate Security Consultingでは、次の領域に関する支援を行います。

#### 情報セキュリティ

情報セキュリティについて、現在の課題や検討したい内容を確認し、今後検討すべき事項を整理します。

#### サイバーセキュリティ

サイバーセキュリティについて、現在の課題や検討したい内容を確認し、今後検討すべき事項を整理します。

#### 教育・研修

セキュリティに関する教育・研修について、目的や扱うテーマなどの検討事項を整理します。

#### 生成AI利用ルール

生成AIを利用する際のルールについて、現在の課題や組織内で検討すべき事項を整理します。

必要となる領域や支援内容は、ご相談内容に応じて個別に設定します。

### 3.4 想定アウトプット

アウトプットは案件ごとに異なります。支援内容に応じて、検討した内容を文書等に整理する場合があります。

例えば、次のような内容が考えられます。

- 現在の課題や検討事項の整理
- 情報セキュリティに関する検討事項の整理
- サイバーセキュリティに関する検討事項の整理
- 教育・研修の目的やテーマに関する整理
- 生成AI利用ルールに関する検討事項の整理
- 今後検討すべき事項の整理

実際のアウトプットの有無、形式、内容は、ご相談内容および個別に設定する支援範囲によって異なります。

### 3.5 支援の進め方

まず、ご相談の背景、現在の課題、検討したい内容を確認します。

その上で、情報セキュリティ、サイバーセキュリティ、教育・研修、生成AI利用ルールのうち、どの領域を対象とするかを整理します。

ご相談内容に応じて個別に支援内容を設計します。

個別のご相談やプロジェクトの状況に応じて、対象とする課題・領域と支援範囲を設定します。

### 3.6 適した相談例

以下は、HarborGate Security Consultingで想定する一般的な相談テーマの例です。特定の企業・団体への提供実績、導入事例、提供件数を示すものではありません。

- 「情報セキュリティについて、まず何を整理すればよいか相談したい」
- 「サイバーセキュリティについて、現在の課題と今後の検討事項を整理したい」
- 「セキュリティ教育について、どのようなテーマを扱うか検討したい」
- 「セキュリティ研修について、目的や内容を整理したい」
- 「生成AIを利用する際に、組織としてどのようなルールを検討すべきか整理したい」
- 「セキュリティに関する複数の課題があり、どこから検討するか整理したい」

## 4. Human review focus

このsectionはreview metadataであり、公開用copyではありません。

1. **Authority scope**
   - `SERVICE-004`の情報セキュリティ、サイバーセキュリティ、教育、研修、生成AI利用ルールの支援だけを説明しているか。
   - `SERVICE-005`の個別設計原則をexact wordingで保持しているか。
2. **教育・研修の構成**
   - 人間が承認したdesign decisionどおり、教育・研修を一つのScope itemとして扱っているか。
   - 固定curriculum、演習、資格、学習成果の保証等を追加していないか。
3. **生成AI利用ルールの境界**
   - 「組織内で検討すべき事項」という承認済みDRAFT wordingを保持しているか。
   - 情報管理全般、legal review、法令適合判断等へ拡張していないか。
4. **診断・監視・受託の境界**
   - 診断、脆弱性診断、penetration testing、SOC、監視、incident response、保守・運用代行を標準提供していないか。
5. **構築・実装の境界**
   - Networkやsecurity環境、製品、EDR、SIEM等の構築・実装を標準commitmentとしていないか。
6. **保証・assuranceの境界**
   - 完全な安全、法令適合、risk除去、漏えい・事故防止を保証していないか。
   - Formal audit、certification、third-party assuranceを示していないか。
7. **Typical outputsと相談例**
   - アウトプットが「整理」中心で、固定成果物・標準納品物になっていないか。
   - Consultation examplesが一般例であり、顧客事例・提供実績・availability claimになっていないか。
8. **Service boundaryと現行implementation**
   - AI Audit、AI Consulting、DX Consultingの役割を取り込んでいないか。
   - 現行implementationにある未承認のservice-specific wordingを引き継いでいないか。

## 5. Human review checklist

- [x] `SERVICE-004`のapproved scopeを超えていない
- [x] `SERVICE-005`の個別設計原則をexact wordingで維持している
- [x] 情報セキュリティのauthorityを尊重している
- [x] サイバーセキュリティのauthorityを尊重している
- [x] 教育・研修を人間承認どおり一つのScope itemとしている
- [x] 生成AI利用ルールのboundaryを維持している
- [x] 「組織内で検討すべき事項」というwordingを保持している
- [x] Sections 3.1–3.6に診断というwordingを含まない
- [x] 脆弱性診断・penetration testingを標準提供としていない
- [x] SOC・監視・managed security serviceを標準提供としていない
- [x] 構築・実装を標準commitmentとしていない
- [x] Incident responseの受託を標準提供としていない
- [x] 保守・運用代行を標準提供としていない
- [x] Formal audit・certification・third-party assuranceを示していない
- [x] Legal・compliance判断を標準提供としていない
- [x] 完全な安全・risk除去を保証していない
- [x] 情報漏えい・事故防止を保証していない
- [x] Fixed package・fixed scope・fixed priceを示していない
- [x] 顧客・case count・availability claimを含まない
- [x] AI Auditとのservice boundaryを維持している
- [x] AI Consultingとのservice boundaryを維持している
- [x] DX Consultingとのservice boundaryを維持している
- [x] Typical outputsがnon-fixedかつ「整理」中心である
- [x] Consultation examplesが一般的な相談テーマである
- [x] Public copyが肯定形かつ簡潔である
- [x] 現行implementationの未承認wordingを引き継いでいない

## 6. Approval and durable evidence

- Human approval: `APPROVED_UNCHANGED`
- Approval scope: `Sections 3.1–3.6`
- Approved wording: `Sections 3.1–3.6 exactly as recorded in this artifact`
- Human approval date: `2026-08-25`
- Human approval instruction: `2026-08-25にSections 3.1–3.6を変更なしで承認。Approved-copy SHA-256は e7683eaa02086f9600dc2adc1e13d9f31b3a8f17858e8f7cfd8f265c5a05d301。Sections 3.1–3.6外のmetadata-only更新は承認済みpublic copyを変更しない。`
- Approved-copy SHA-256: `e7683eaa02086f9600dc2adc1e13d9f31b3a8f17858e8f7cfd8f265c5a05d301`
- Durable approval evidence: `Git commit 98fa8ff94106b36890ce43969225131815c3baa9`
- Implementation handoff: `READY_FOR_PAGE-001 when CONTENT-001 through CONTENT-004 are DONE`

人間が承認したSections 3.1–3.6のexact copyは、Git commit `98fa8ff94106b36890ce43969225131815c3baa9`にdurableに記録されています。Section 4はreview metadataであり、承認scopeに含まれません。`PAGE-001`は`CONTENT-001`から`CONTENT-004`までのすべてが`DONE`になるまで開始できません。
