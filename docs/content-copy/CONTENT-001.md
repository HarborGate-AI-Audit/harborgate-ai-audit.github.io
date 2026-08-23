# CONTENT-001 — HarborGate AI Audit 詳細サービスcopy

## 1. Artifact status

- Stable ID: `CONTENT-001`
- State: `HUMAN_APPROVED_PENDING_COMMIT`
- Target page: `/services/`
- Service: `HarborGate AI Audit`
- Publication authority: `docs/content-register.md`
- Implementation consumer: `PAGE-001`

このartifact自体は公開を許可するものではありません。`CONTENT-001`を`DONE`にする前、または`PAGE-001`がこのcopyを利用する前に、人間による承認と`docs/content-register.md`との整合確認が必要です。

## 2. Authority references

Publication authorityとして参照する登録簿ID:

- `SERVICE-001`
- `SERVICE-005`
- `AUDIT-001`
- `AUDIT-002`

現行implementationの参照元:

- `src/data/services.ts`
- `src/pages/services/index.astro`
- `src/components/ServiceCard.astro`

このsectionはreview metadataであり、公開用copyではありません。

## 3. Draft public copy

このsectionだけが、将来のpublic implementationを想定したdraft copyです。人間による承認が完了するまでは公開しません。

### 3.1 Short service introduction

HarborGate AI Auditは、AIモデル、プロンプト設計、運用プロセスを対象に、品質・ガバナンス・リスクの観点から評価します。評価結果から課題を整理し、改善に向けた助言を行います。

### 3.2 Target problems

たとえば、次のような課題について評価観点や確認事項を整理します。

- 複数のAIモデルや設定を検討しているが、比較・評価の観点が明確になっていない
- プロンプトによって出力品質にばらつきがあり、評価方法を揃えたい
- AI利用を始めているが、運用上の確認事項やリスクを十分に整理できていない
- 品質・ガバナンス・リスクを横断して、評価・確認の観点を整理したい

### 3.3 Scope

- **AIモデル:** AIモデルの特徴や出力を、必要な評価観点に沿って比較・整理します。
- **プロンプト設計:** プロンプトの構成と出力の傾向を確認し、評価観点と改善点を整理します。
- **運用プロセス:** 利用手順、確認ポイント、運用上のリスクを確認し、見直しに向けた助言を行います。

### 3.4 Typical outputs

ご相談内容に応じて、必要なアウトプットを個別に設計します。以下はアウトプットの区分であり、すべてを一律に提供するものではありません。

- **評価観点・チェックリスト:** 評価対象に応じて、確認に必要な観点と項目を整理します。
- **現状可視化レポート:** 評価結果を整理し、現在の状況と確認が必要な点を可視化します。
- **リスク評価:** 品質・ガバナンス・リスクの観点から、注意すべき事項と優先順位を整理します。
- **改善ロードマップ:** 課題と優先順位に基づき、改善に向けた検討事項を段階的に整理します。

### 3.5 Support approach

ご相談内容に応じて個別に支援内容を設計します。次の流れは支援の考え方を示すものであり、一律の支援内容を示すものではありません。

1. ご相談内容と評価の目的を確認します。
2. 評価対象と、品質・ガバナンス・リスクの評価観点を整理します。
3. 設定した観点に沿って評価・比較します。
4. 評価結果から課題とリスクを整理し、対応の優先順位を明確にします。
5. 改善に向けた助言と、次に検討する事項を整理します。

評価対象を整理する際は、評価に必要な情報の範囲を確認しながら進めます。

### 3.6 Suitable consultation examples

以下は、一般的なご相談テーマの例です。

- 複数の生成AIモデルを同じ観点で比較したい
- 社内で利用しているプロンプトの評価方法を整理したい
- AI出力の品質確認に用いる観点を揃えたい
- 生成AIの運用におけるリスクと確認項目を整理したい
- PoCから本番運用へ移る前に評価観点を整理したい

※上記は一般的なご相談テーマの例であり、特定の顧客事例や支援実績を示すものではありません。

### 3.7 Mandatory Audit qualification

本サイトにおける「Audit」は、財務諸表監査、法定監査、監査法人による監査または第三者認証を意味するものではありません。AIの品質・ガバナンス・リスクを評価し、改善に向けた助言を行うサービスを指します。

## 4. Optional microcopy candidates

以下はすべてdraft候補であり、公開承認済みのcopyではありません。

- Section heading候補: `AIの評価から、課題整理と改善へ`
- One-line lead候補: `品質・ガバナンス・リスクの観点からAIを評価し、改善に向けた次の一歩を整理します。`

## 5. Human review checklist

- [x] 5要素が揃っている
- [x] `SERVICE-001`のscopeを超えていない
- [x] `SERVICE-005`の個別設計方針と整合する
- [x] `AUDIT-001`がexact wordingで含まれる
- [x] `AUDIT-002`の禁止claimを含まない
- [x] consultation examplesが実績・availability表現になっていない
- [x] price・case count・guaranteeを含まない
- [x] 公開copyとして人間が承認した

## 6. Approval and durable evidence

- Human approval: `APPROVED_UNCHANGED`
- Approval scope: `Sections 3.1–3.7`
- Approved wording: `Sections 3.1–3.7 exactly as recorded in this artifact`
- Human approval date: `2026-08-23`
- Human approval instruction: `CONTENT-001をこの文面で承認します`
- Durable approval evidence: `PENDING_COMMIT`
- Implementation handoff: `BLOCKED until durable commit evidence is recorded and CONTENT-001 is completed in TODO.md`

人間の判断はこのworking-tree artifactに記録されていますが、conversation memoryと未commitのworking treeはdurableなcompletion evidenceではありません。後続の明示的なcommit taskでこのexact approved artifactをcommitするまで、`CONTENT-001`を完了できません。
