# Trade With Chevy (TWC)

Premium client-facing website foundation for Trade With Chevy.

## Current status

The repository now contains a responsive, accessible marketing site, contact workflow, legal-page frameworks, security headers and deployment configuration.

### Included

- Responsive premium landing page
- Mobile navigation with keyboard/ARIA handling
- SEO and social metadata
- Branded 404 page
- Contact form prepared for Netlify Forms
- Privacy, Terms and Risk Disclosure framework pages
- Security response headers through `netlify.toml`
- No fabricated trading performance claims
- Risk-aware financial-services copy

## Production architecture still required

A public marketing website must remain separate from any system that handles client identity, balances or money movement. The production application should use:

1. Authenticated client portal
2. Admin dashboard with role-based access control
3. KYC/AML workflow appropriate to the client's legal entity and jurisdiction
4. Verified market-data provider
5. Broker/execution integration if TWC actually provides execution
6. Payment provider integration with server-side verification
7. Immutable transaction/audit records
8. Notifications and support ticketing
9. Monitoring, backups and incident response
10. Approved legal/regulatory disclosures

Do **not** put secret keys, service-role credentials, payment credentials or trading credentials in frontend JavaScript.

## Important launch gate

The repository does not currently have a dedicated TWC Supabase backend or confirmed payment/broker provider. Those integrations cannot responsibly be invented. Before enabling real-money functionality, configure the client's legal entity, jurisdiction, regulatory position, provider accounts, domain and production credentials.

## Local preview

This is a static site. Serve the repository root with any static HTTP server, or deploy it to Netlify. Do not open production flows from `file://` because form and browser-security behavior differs.
