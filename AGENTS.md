# HarborGate AI Audit website repository instructions

## 1. Repository purpose

This public repository contains the official HarborGate AI Audit website. It is the canonical source of truth for website source code and human-approved public wording.

## 2. Public-repository safety

- Treat every tracked and untracked repository path as potentially public.
- Store only public-safe source IDs, evidence statuses, publication decisions, approved wording, restrictions, and review triggers.
- Do not include internal links, message identifiers, source-document text, counterpart or customer identities, financial terms, internal infrastructure details, personnel records, personal information, or local filesystem paths.
- Preserve existing user-authored work and keep changes within the explicitly authorized scope.

## 3. Canonical-source policy

- Website source and approved public copy are canonical in this repository.
- Check `docs/content-register.md` before adding or changing a controlled fact.
- Do not invent company, officer, service, contact, recognition, case-study, research, or legal facts.
- Do not infer publication approval merely because supporting evidence exists.
- Keep repeated approved facts consistent across pages and documents.

## 4. Internal evidence kept outside the repository

Original legal records, university documents, approval evidence, internal links, contracts, quotations, employment records, conflict-of-interest records, customer materials, and editable source artwork remain outside this repository. Never copy those originals or confidential excerpts into this public repository.

## 5. Instruction hierarchy

Follow instructions in this order:

1. Applicable system, security, tool, and execution-environment constraints.
2. Explicit human authorization for the current task.
3. This `AGENTS.md`.
4. `docs/content-register.md`, `docs/site-spec.md`, and `docs/release-checklist.md`.
5. Other repository documentation.

`CLAUDE.md` is only a pointer to this file. If a material conflict remains after applying the hierarchy, stop and report it rather than guessing.

## 6. Required workflow before editing

1. Read the current task, this file, and relevant governance documents in full.
2. Verify repository top-level, branch, HEAD, staged, unstaged, and untracked state.
3. Safe-stop when an explicit baseline does not match.
4. Preserve existing user work and never discard unrelated changes.
5. Use a purpose-specific feature branch for normal development unless explicitly directed otherwise.
6. Identify the exact allowed paths and keep the diff within them.
7. Confirm every controlled public fact in the content register.
8. Run only the validations authorized for the task.

When an agent starts the development server, use `astro dev --background`. Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## 7. Evidence and approval hierarchy

Use this order of authority:

1. Official legal documents.
2. Official university recognition or permission documents.
3. Later official communications from the responsible university department.
4. Human operator confirmations based on original records.
5. Approved business working documents.
6. Drafts, proposals, and historical planning documents.

Later and more authoritative evidence normally supersedes older planning material. Evidence does not authorize publication unless the content register records an applicable publication decision.

## 8. Conflict-handling rules

- Record conflicts; never reconcile them silently.
- A human confirmation may update an operational or publication decision.
- A human confirmation must not silently rewrite contradictory wording in an official document.
- When official wording and a human confirmation conflict, disputed qualifiers remain unpublished until authoritative resolution.
- Keep conflict records public-safe and refer only to permitted source IDs.

## 9. Corporate-fact rules

- The corporation has been established; do not describe the company as `設立準備中`.
- Preserve distinctions among raw legal wording, normalized website wording, and brand wording.
- Do not change the legal name, corporate number, address, officers, or other controlled facts without approved evidence and human authorization.
- A registered university address does not imply walk-in access, university operation, university responsibility, or general access to university facilities.

## 10. Service-status rules

The company-level status is `サービス提供中`. Do not restore the historical global statement that all four services are `準備中`.

The controlled service lines are:

- HarborGate AI Audit
- HarborGate AI Consulting
- HarborGate DX Consulting
- HarborGate Security Consulting

Services are offered by individual consultation and project arrangement, with support designed for each customer's issue and operating context. Do not claim that every service has completed cases, is a standardized package, or is generally available at a fixed scope or price. Do not add per-service launch badges or case counts without separate authorization.

## 11. Audit terminology

`Audit` means evaluating AI quality, governance, and risk and providing improvement advice. It does not mean financial-statement audit, statutory audit, an audit by an audit corporation, third-party assurance, or certification.

Use the mandatory qualification in `docs/content-register.md`. Do not imply guaranteed legal compliance, complete safety, guaranteed productivity improvement, or guaranteed risk elimination.

## 12. University-recognition rules

- The recognition fact and recognition date may be published using the approved neutral wording.
- While the official-document and operator-confirmation qualifier conflict remains open, publish neither `正式認定` nor `暫定認定`.
- Do not describe the conflict on public website pages.
- Whenever recognition is explained, include the approved university non-endorsement wording.
- Review recognition status and wording before the date recorded in the content register.
- Do not imply university certification, approval of deliverables, quality assurance, operational responsibility, or exclusive-provider status.

## 13. University-logo rules

University-logo display is approved with conditions, but no asset may be added under the current documentation authorization. A later explicit asset task is required.

When separately authorized:

- use only approved university-supplied artwork;
- do not redraw, recolor, distort, crop, or create a company/university lockup;
- do not use the logo as a certification mark;
- keep company branding primary and university branding secondary and contextual;
- include the recognition non-endorsement wording where recognition is explained.

Website-display permission does not by itself authorize public-repository redistribution of raw or editable artwork. That storage decision requires human confirmation.

## 14. Company/university role separation

- Identify 株式会社HarborGate AI Audit as the service provider.
- Do not identify or imply the university as the service provider or operationally responsible entity.
- Keep company roles and university roles distinct.
- Do not present company and university as one operating entity.
- Detailed duty separation, outside-employment, conflict-of-interest, research, funding, effort, and student safeguards are internal controls and must not be reproduced as public copy.

## 15. Contact and privacy rules

- Do not publish university email addresses or telephone numbers.
- Do not invent a company-domain address, form endpoint, or other contact destination.
- Until a form is approved, state that the inquiry form is in preparation.
- Do not add mail links, file upload, third-party form services, intentional customer-data storage, or analytics without explicit authorization.
- Tell users not to send confidential information through an unapproved channel.
- Before deploying any data-collecting form, complete privacy, security, legal, and operational review.

## 16. Secrets and confidential information

Never commit credentials, secrets, tokens, private keys, personal data, student data, customer data, unpublished project information, internal source documents, signatures, seals, confidential communications, contract or quotation details, or detailed personnel and governance records.

## 17. Technical architecture

- Keep Astro and strict TypeScript as the technical foundation.
- Prefer Astro static output, static Astro components, semantic HTML, and minimal JavaScript.
- Do not add a client-side framework without explicit authorization.
- Prefer CSS custom properties and repository-native styles.
- Keep routes and asset paths compatible with configured GitHub Pages `site` and `base` values.

## 18. Accessibility and semantic HTML

- Use semantic landmarks and one `h1` per page.
- Maintain a logical heading hierarchy.
- Provide keyboard-operable navigation and controls, a skip link, and visible focus.
- Respect `prefers-reduced-motion`.
- Provide appropriate alternative text or decorative treatment for images.
- Maintain sufficient contrast and prevent mobile horizontal overflow.

## 19. Dependency management

- Use Node.js 24 through `.nvmrc`, npm, and the existing lockfile.
- Do not add, remove, install, or update dependencies without explicit authorization.
- Explain the need before any authorized dependency addition, update the lockfile, and run relevant validation.
- Do not install repository dependencies globally or into the system runtime.

## 20. Validation requirements

The currently available repository validation commands are:

```sh
git diff --check
npm run check
npm run build
```

`npm run check` performs Astro static and type validation and should run before `npm run build` for relevant site implementation changes. A successful check and build do not replace human checks for wording, accessibility, responsive behavior, links, deployment, or the public URL.

## 21. Commit and push authorization

- Do not stage or commit without explicit authorization for the current task.
- Do not push without separate explicit authorization.
- Do not pull, fetch, merge, rebase, reset, stash, cherry-pick, amend, tag, or alter `main` without explicit authorization.
- Use explicit paths when staging and inspect the staged patch.
- Keep commits small, reviewable, and limited to approved scope.

## 22. Required completion report

Report:

- outcome and any safe stop;
- initial and final branch, HEAD, and working-tree state;
- exact changed, created, staged, and committed paths;
- validation commands and exit statuses;
- preserved user work and unchanged protected paths;
- applicable approvals, conditions, conflicts, pending decisions, and unverified layers;
- generated outputs and whether they remain ignored;
- whether commit, push, network access, dependency changes, or settings changes occurred.
