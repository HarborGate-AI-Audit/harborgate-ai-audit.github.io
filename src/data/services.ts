export type ServiceId =
  | 'ai-audit'
  | 'ai-consulting'
  | 'dx-consulting'
  | 'security-consulting';

export interface ServiceDefinition {
  readonly id: ServiceId;
  readonly category: string;
  readonly name: string;
  readonly summary: string;
  readonly targets: readonly string[];
  readonly typicalOutputs: readonly string[];
  readonly supportApproach: string;
}

export const services = [
  {
    id: 'ai-audit',
    category: 'AI監査',
    name: 'HarborGate AI Audit',
    summary:
      'AIモデル、プロンプト設計、運用プロセスを対象に、品質・ガバナンス・リスクの観点から評価し、改善に向けた助言を行います。',
    targets: ['AIモデル', 'プロンプト設計', '運用プロセス'],
    typicalOutputs: [
      '評価観点・チェックリスト',
      '現状可視化レポート',
      'リスク評価',
      '改善ロードマップ',
    ],
    supportApproach:
      '評価結果に基づいて課題を整理し、改善に向けた対応を個別に設計します。',
  },
  {
    id: 'ai-consulting',
    category: 'AIコンサルティング',
    name: 'HarborGate AI Consulting',
    summary:
      '生成AIの導入企画からPoC、本番導入、運用、組織への定着までを伴走し、業務課題に応じたモデル選定と実装を支援します。',
    targets: ['導入企画', 'ユースケース設計', 'PoC', '本番導入', '運用・定着'],
    typicalOutputs: [
      'ユースケース設計',
      'モデル選定・比較',
      '運用ガイド',
      '社内説明資料',
      '定着化支援',
    ],
    supportApproach:
      '小さく検証し、評価結果を確認しながら導入範囲を段階的に拡張します。',
  },
  {
    id: 'dx-consulting',
    category: 'DXコンサルティング',
    name: 'HarborGate DX Consulting',
    summary:
      '業務改善、データ活用、システム構想、クラウド、ネットワーク、基幹システム等の検討を支援します。',
    targets: [
      '業務改善',
      'データ活用',
      'システム構想',
      'クラウド・ネットワーク',
      '基幹システム',
    ],
    typicalOutputs: [
      '現状診断',
      'To-Be設計',
      'システム構想',
      '要件整理',
    ],
    supportApproach:
      '現状の業務と制約を整理し、実行可能性を重視した段階的な改善案を設計します。',
  },
  {
    id: 'security-consulting',
    category: 'セキュリティ・コンサルティング',
    name: 'HarborGate Security Consulting',
    summary:
      '情報セキュリティ、サイバーセキュリティ、教育・研修、生成AI利用時の情報管理と運用ルール整備を支援します。',
    targets: [
      '情報セキュリティ',
      'サイバーセキュリティ',
      '教育・研修',
      '生成AI利用ルール',
      '継続的な運用改善',
    ],
    typicalOutputs: [
      '簡易診断',
      'ポリシー・運用ルール案',
      '研修資料',
      '演習',
      '継続的な改善提案',
    ],
    supportApproach:
      '組織規模と運用負荷を考慮し、実際に継続できる管理策と教育を設計します。',
  },
] as const satisfies readonly ServiceDefinition[];
