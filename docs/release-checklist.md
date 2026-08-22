# HarborGate AI Audit 公開チェックリスト

すべての項目はreleaseごとに人間が確認する。未確認項目を推測で完了扱いにせず、すべて未checkの状態から開始する。

## 1. リポジトリ状態

- [ ] 正しいrepository top-levelで作業している。
- [ ] 公開対象branch、HEAD、mainとの差分を記録した。
- [ ] Staged、unstaged、untracked pathを確認した。
- [ ] Existing user-authored workを保持している。
- [ ] Generated outputがtrackedされていない。

## 2. 変更範囲

- [ ] Taskで許可されたpathだけが変更されている。
- [ ] `git diff --name-status`を確認した。
- [ ] `git diff --stat`を確認した。
- [ ] Unrelated formattingまたはgenerated churnがない。
- [ ] Dependency、workflow、configurationの意図しない変更がない。

## 3. ビルド

- [ ] `git diff --check`が成功する。
- [ ] `npm run check`が成功し、Astro check errorがない。
- [ ] `npm run build`が成功する。
- [ ] Build outputにerrorがない。
- [ ] Buildされたrouteと想定routeが一致する。
- [ ] Generated outputを手動編集していない。

## 4. 会社情報

- [ ] Raw legal nameが内容登録簿と一致する。
- [ ] Website display nameが内容登録簿と一致する。
- [ ] Corporate numberが正しい。
- [ ] Rawとnormalized registered addressを混同していない。
- [ ] Companyを`設立準備中`と表記していない。
- [ ] Registered addressからwalk-in accessまたは大学運営を示唆していない。

## 5. 役員情報

- [ ] 代表取締役の氏名とcompany roleが承認内容と一致する。
- [ ] 取締役の氏名とcompany roleが承認内容と一致する。
- [ ] University academic title・affiliationを未承認で掲載していない。
- [ ] Company roleとuniversity roleを1つのtitleまたはvisual identityにしていない。
- [ ] Detailed outside-employment informationを掲載していない。

## 6. サービス

- [ ] Company-level statusが`サービス提供中`である。
- [ ] 4サービス一律のglobalな`準備中`statementが残っていない。
- [ ] Individual launch-status badgeを置いていない。
- [ ] 全serviceにcompleted caseがあるとclaimしていない。
- [ ] Standard packageまたはfixed scope・priceのgeneral availabilityをclaimしていない。
- [ ] ご相談内容に応じて個別に支援内容を設計する旨がある。
- [ ] 4service nameとscopeが内容登録簿に一致する。

## 7. 実績表現

- [ ] Confidentiality reviewなしのdetailed case studyがない。
- [ ] Identifiable customerまたはcounterparty nameがない。
- [ ] Contract、quotation、private project detailがない。
- [ ] Completion statusを誤認させる表現がない。
- [ ] Unapproved case countがない。
- [ ] 将来caseを掲載する場合、confidentiality、completion、identifiabilityをreviewした。

## 8. Audit表記

- [ ] MandatoryなAudit qualificationがvisibleである。
- [ ] Financial-statement auditのimplicationがない。
- [ ] Statutory auditのimplicationがない。
- [ ] Audit corporationによるauditのimplicationがない。
- [ ] Certificationまたはthird-party assuranceのimplicationがない。
- [ ] Legal complianceのguaranteeがない。
- [ ] Complete safety、生産性向上、risk eliminationのguaranteeがない。

## 9. 大学発ベンチャー認定

- [ ] Recognition wordingがneutralである。
- [ ] Conflict解決前に`正式認定`を掲載していない。
- [ ] Conflict解決前に`暫定認定`を掲載していない。
- [ ] Recognition dateが2026-02-10である。
- [ ] 2027-03-31より前のreview triggerに対応した。
- [ ] Mandatoryなuniversity non-endorsement wordingがある。
- [ ] Universityがserviceやdeliverableをcertifyまたはapproveする表現がない。
- [ ] Exclusive university service-provider statusをclaimしていない。

## 10. 大学ロゴ

- [ ] Later authorized taskがない限りuniversity-logo assetが存在しない。
- [ ] Rawまたはeditableなuniversity-logo sourceをauthorizationなしでcommitしていない。
- [ ] 使用assetがuniversity-supplied approved artworkである。
- [ ] Logoをredraw、recolor、distort、cropしていない。
- [ ] New company/university lockupを作っていない。
- [ ] Logoをcertification markとして使用していない。
- [ ] Company brandingがprimary、university brandingがsecondaryかつcontextualである。

## 11. 大学と会社の主体分離

- [ ] 株式会社HarborGate AI Auditをservice providerとして示している。
- [ ] Companyとuniversityを1つのoperating entityとして表現していない。
- [ ] Universityをservice providerとして表現していない。
- [ ] University guaranteeまたはoperational responsibilityを示唆していない。
- [ ] University duties、resources、funds、results、facilities、personnelをcompany resourceとして無断表示していない。
- [ ] Internal governance detailまたはstudent informationをpublic copyへ転載していない。

## 12. 問い合わせ

- [ ] University email addressが存在しない。
- [ ] University telephone numberが存在しない。
- [ ] Invented company-domain addressがない。
- [ ] Invented form endpointまたはcontact destinationがない。
- [ ] Mailto linkがない。
- [ ] File uploadがない。
- [ ] Third-party form serviceがない。
- [ ] Confidential informationを未承認channelへ送信しないよう案内している。

## 13. プライバシー・機密情報

- [ ] Initial static siteにinquiry data-entry functionがない。
- [ ] Confidential informationを要求していない。
- [ ] Internal source linkがcommitされていない。
- [ ] Internal source documentがcommitされていない。
- [ ] Credentials、tokens、private keys、secretsが存在しない。
- [ ] Customer、personal、student、unpublished project dataが存在しない。
- [ ] Source body、signature、seal、internal notification textが存在しない。
- [ ] Future form導入前のprivacy、security、legal、operational reviewが明記されている。
- [ ] Privacy policyが実際のdata collectionと一致する。

## 14. アクセシビリティ

- [ ] 各pageに`h1`がexactly oneである。
- [ ] Heading hierarchyがlogicalである。
- [ ] Semantic landmarksを使用している。
- [ ] Skip linkが機能する。
- [ ] Keyboard navigationが機能する。
- [ ] Visible focusがある。
- [ ] `prefers-reduced-motion`が尊重される。
- [ ] Imageのalternative textまたはdecorative treatmentが適切である。
- [ ] Contrastとreadabilityをmanual checkした。

## 15. レスポンシブ

- [ ] Mobile widthでhorizontal overflowがない。
- [ ] Navigationがnarrow viewportで利用できる。
- [ ] Cards、tables、long stringsがviewport外へはみ出さない。
- [ ] Touch targetとspacingが十分である。
- [ ] Text zoom時にcontentまたはcontrolが失われない。
- [ ] Representative mobile、tablet、desktop widthをmanual checkした。

## 16. SEO・メタデータ

- [ ] Page titleがpageごとにuniqueである。
- [ ] Page descriptionがpageごとにuniqueである。
- [ ] Canonical URLが正しい。
- [ ] `lang="ja"`が設定されている。
- [ ] Open Graph metadataがapproved copyとassetだけを使用している。
- [ ] Structured dataがapproved company factsだけを使用している。
- [ ] `robots.txt`がactual indexing policyと一致する。

## 17. favicon・manifest

- [ ] `favicon.ico`へaccessできる。
- [ ] `favicon.svg`へaccessできる。
- [ ] `apple-touch-icon.png`へaccessできる。
- [ ] `site.webmanifest`へaccessできる。
- [ ] Manifest内のicon pathとsizeが正しい。
- [ ] 全pageがrequired favicon linksを出力する。
- [ ] Missingまたはcorruptなfavicon・manifest assetがない。

## 18. 内部リンク・404

- [ ] 全internal linkが正しいrouteへ移動する。
- [ ] Navigationとfooter linkが一致する。
- [ ] Broken anchorがない。
- [ ] `/404.html`がbuildされる。
- [ ] 404 pageに明確なmessageとtop-page linkがある。
- [ ] 404 pageに不要なJavaScriptがない。

## 19. GitHub Actions・Pages

- [ ] Deployment workflowの対象branchを確認した。
- [ ] Workflow permissionsが意図どおりである。
- [ ] GitHub Actions buildが成功する。
- [ ] GitHub Pages deployment jobが成功する。
- [ ] Deployment URLが想定domainと一致する。
- [ ] Generated artifactに意図しないfileがない。

## 20. 人間承認

- [ ] Human reviewerが全変更pageを読んだ。
- [ ] 内容登録簿のpublication decisionと条件を照合した。
- [ ] Company factsとofficer factsをhumanが承認した。
- [ ] Service statusとscopeをhumanが承認した。
- [ ] Audit qualificationをhumanが承認した。
- [ ] Recognition wordingとdisclaimerをhumanが承認した。
- [ ] Logoの条件とasset authorizationをhumanが確認した。
- [ ] Contact・privacy copyをhumanが承認した。
- [ ] Pending、blocked、internal-only、deferred、excluded contentが公開されていない。

## 21. 公開後確認

- [ ] Public URLをmanual checkした。
- [ ] Top、services、company、contact、privacy routeを確認した。
- [ ] 404 behaviorをpublic siteで確認した。
- [ ] Public siteでfaviconとmanifestを確認した。
- [ ] Mobileとkeyboard operationをpublic siteでspot checkした。
- [ ] Public contentがapproved commitと一致する。
- [ ] Unexpected cacheまたはstale assetがない。

## 22. 変更記録

- [ ] Release対象commit SHAを記録した。
- [ ] Human approverとapproval dateを記録した。
- [ ] Content register変更を記録した。
- [ ] Evidence conflictとresolutionを記録した。
- [ ] Pending decisionと次回review triggerを記録した。
- [ ] Deployment runとpublic verification結果を記録した。
- [ ] Rollbackまたはfollow-upのscopeとownerを記録した。
