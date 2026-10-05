# Release v1.0.0-rc.1

## Scope
This release candidate is designed for a low-cost static deployment and future custom-domain use.

### Included
- Redesigned bilingual homepage with clearer information hierarchy
- About, Programs, Health Knowledge, Harm Reduction, Professional Resources, Contact
- Deeper health education based on WHO / WHO-UNODC / HRI sources
- Static export architecture; no server database required
- GitHub Actions workflow for optional GitHub Pages deployment
- Vercel configuration and deployment documentation
- QA checklist and automated source-level QA

### Deliberately not included
- Member registration/login
- Sensitive health data collection
- Full 2008–2026 historical timeline
- Third-party news screenshots without explicit reuse rights

## Pre-launch checklist
1. Run `npm ci && npm run release-check`.
2. Review all Chinese/English text with the Association secretary.
3. Verify current address, phone and email.
4. Test desktop/mobile navigation and keyboard focus.
5. Run Lighthouse / axe accessibility checks in a deployed preview.
6. Check all external links.
7. Connect the Association-owned domain and verify HTTPS.
8. Add privacy/analytics consent only if analytics or tracking is later enabled.
