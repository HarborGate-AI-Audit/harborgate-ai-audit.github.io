export const siteConfig = {
  siteUrl: 'https://harborgate-ai-audit.github.io',
  language: 'ja',
  locale: 'ja_JP',
  company: {
    legalName: {
      raw: '株式会社ＨａｒｂｏｒＧａｔｅ　ＡＩ　Ａｕｄｉｔ',
      display: '株式会社HarborGate AI Audit',
      kana: 'ハーバーゲートエーアイオーディット',
    },
    corporateNumber: '7250001021542',
    registeredAddress: {
      raw: '山口県下関市大学町２丁目１番１号下関市立大学Ｄ棟Ｄ－４０４',
      display: '山口県下関市大学町2丁目1番1号 下関市立大学D棟 D-404',
    },
    officers: [
      { role: '代表取締役', name: '白濵 成希' },
      { role: '取締役', name: '福田 龍樹' },
    ],
  },
  brand: {
    name: 'HarborGate AI Audit',
    reading: 'ハーバーゲートAIオーディット',
    tagline: 'AIを、安心して使える力に',
    coreProposition: '生成AI導入支援 × AI監査（品質・ガバナンス） × セキュリティ',
    defaultDescription:
      '株式会社HarborGate AI Auditは、生成AI導入支援、AIの品質・ガバナンス・リスク評価、DX、セキュリティ支援を、組織の課題に応じて個別に提供します。',
    companyIntroduction:
      '生成AI導入支援、AIの品質・ガバナンス・リスク評価、DX、セキュリティ支援を通じて、組織のAI活用を安全に、効果的に、継続的に進めることを支援します。',
    origin: {
      harbor: '安心して立ち戻れる安全な拠点',
      gate: '通過基準と入口統制',
    },
  },
  servicePosition: {
    status: 'サービス提供中',
    positioning: 'ご相談内容や組織の状況に応じて、支援内容を個別に設計します。',
  },
  universityVenture: {
    label: '下関市立大学発ベンチャー',
    statement: '下関市立大学発ベンチャーとして認定されています。',
    recognitionDate: '2026-02-10',
    nonEndorsement:
      '下関市立大学による大学発ベンチャー認定は、当社の製品・サービス等の品質・性能・安全性等を保証するものではありません。',
  },
  auditQualification:
    '本サイトにおける「Audit」は、財務諸表監査、法定監査、監査法人による監査または第三者認証を意味するものではありません。AIの品質・ガバナンス・リスクを評価し、改善に向けた助言を行うサービスを指します。',
  contact: {
    status: '準備中',
    message: 'お問い合わせフォームは現在準備中です。',
    confidentialityNotice:
      '承認されていない連絡経路には、個人情報、認証情報、営業秘密、未公開データその他の機密情報を送信しないでください。',
  },
  navigation: [
    { href: '/', label: 'ホーム' },
    { href: '/services/', label: 'サービス' },
    { href: '/company/', label: '会社概要' },
    { href: '/contact/', label: 'お問い合わせ' },
    { href: '/privacy/', label: 'プライバシー' },
  ],
} as const;

export function formatPageTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${siteConfig.brand.name}` : siteConfig.brand.name;
}
