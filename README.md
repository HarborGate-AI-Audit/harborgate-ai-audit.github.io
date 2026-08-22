# HarborGate AI Audit 公式Webサイト

## 1. プロジェクト名

HarborGate AI Audit 公式Webサイト

## 2. 開発状況

**初期コーポレートサイト構築中**

初期サイトはまだ完成しておらず、公開承認も完了していません。現在の画面や文章を公開済みの最終版として扱わないでください。

## 3. リポジトリの目的

この公開リポジトリは、株式会社HarborGate AI Auditの公式Webサイトのソースコードと、人間が承認した公開文章の正本です。統制対象の事実は[内容・根拠登録簿](docs/content-register.md)に従います。

## 4. 公開予定URL

<https://harborgate-ai-audit.github.io>

## 5. 技術構成

- Astro 7
- TypeScript strict
- Node.js 24
- npm
- GitHub Pages
- GitHub Actions

## 6. 前提環境

- Git
- nvm
- npm

`.nvmrc`に従いNode.js 24を使用します。

## 7. ローカルセットアップ

```sh
nvm use
npm ci
```

`npm ci`は既存の`package-lock.json`に基づいて依存関係を再現します。

## 8. 開発コマンド

```sh
npm run dev
```

エージェントが開発サーバーを起動する場合は、`AGENTS.md`に従ってbackground modeを使用します。

## 9. 本番ビルド・プレビュー

```sh
npm run check
npm run build
npm run preview
```

現在利用できる検証コマンドは`git diff --check`、`npm run check`、`npm run build`です。

## 10. リポジトリ構成

```text
.
├── .github/workflows/   GitHub Pagesデプロイworkflow
├── docs/                サイト仕様・内容登録簿・公開チェックリスト
├── public/              favicon・manifest等の静的資産
├── src/components/      Astroコンポーネント
├── src/layouts/         Astroレイアウト
├── src/pages/           公開ルート
├── AGENTS.md            正本となるリポジトリ指示
├── CLAUDE.md            AGENTS.mdへのポインター
├── astro.config.mjs     Astro設定
├── package.json         scriptsとdependencies
└── tsconfig.json        TypeScript strict設定
```

## 11. 公開文章の正本管理

- 承認済み公開文章とWebサイトのソースコードは、このリポジトリを正本とします。
- 会社情報、役員、サービス、認定、連絡先等の統制対象は`docs/content-register.md`の公開判断と条件に従います。
- 証拠の存在と公開承認を区別し、未承認事項を推測で補完しません。
- 情報源の不一致は記録し、無断で整合させません。

## 12. 内部証拠をリポジトリ外に置く方針

原本の法務資料、大学文書、承認記録、契約・見積資料、人事・利益相反資料、顧客資料、内部Microsoft 365リンクは公開リポジトリへ保存しません。公開側には、許可されたsource ID、証拠status、公開判断、承認文言、制約、review triggerだけを記録します。

## 13. ブランチ・レビュー運用

- `main`は公開branchです。
- 通常の開発は目的別feature branchで行います。
- 既存のユーザー作業を保持し、小さく確認可能な差分にします。
- stage、commit、pushは、対象タスクで明示的に許可された場合だけ行います。
- 公開前に[公開チェックリスト](docs/release-checklist.md)を人間が確認します。

## 14. GitHub Pagesデプロイ

`main`へのpushにより、現在のGitHub Actions workflowが`npm ci`、`npm run check`、`npm run build`を順に実行し、AstroサイトをGitHub Pagesへdeployします。workflow成功は、内容承認、ブラウザー表示、アクセシビリティ、公開URLの手動確認を代替しません。

## 15. セキュリティ

次の情報をcommitしません。

- credentials、secrets、tokens、private keys
- 顧客・個人・学生・未公開project情報
- 内部リンク、内部通知、原本資料、署名、印影
- 契約・見積の詳細、内部人事・利益相反情報
- 公開保管の承認がないrawまたはeditableな大学logo素材

## 16. 関連文書

- [Repository instructions](AGENTS.md)
- [サイト仕様](docs/site-spec.md)
- [内容・根拠登録簿](docs/content-register.md)
- [公開チェックリスト](docs/release-checklist.md)
