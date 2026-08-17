# Trade With Chevy — Production Architecture

## Current phase
TWC is intentionally frontend-first. No banking, brokerage execution, KYC, or payment provider is represented as live functionality until the client supplies verified providers, credentials, legal text, and operating requirements.

## Target architecture

- Public marketing site: static HTML/CSS/JS.
- Secure application/API layer: server-side functions only.
- Authentication: provider-backed authenticated sessions when client portal work begins.
- AI: OpenAI API called only from the server; `OPENAI_API_KEY` must never reach browser code or Git history.
- Data: provider-neutral repository/service interfaces so Supabase, another Postgres service, or an existing client system can be connected later.
- Market data: verified third-party provider, with timestamps and source attribution where appropriate.
- Payments: regulated/approved payment processor; no card or bank credentials stored by TWC unless explicitly required and compliant.
- Audit: immutable server-side event records for security-sensitive actions.

## AI Assistant guardrails

The assistant is an educational and support layer. It may explain TWC services, platform workflows, financial terminology and risk concepts. It must not claim guaranteed returns, impersonate a licensed adviser, fabricate market data, approve KYC, move money, change account balances, or execute trades. Sensitive actions must remain in authenticated application workflows with explicit user confirmation and server-side authorization.

## Required production inputs

Before financial functionality goes live, obtain and verify:

1. Legal company identity and jurisdiction.
2. Applicable licences/authorisations and regulator details, if any.
3. Official support/contact channels.
4. Terms, privacy notice, risk disclosure and cookie requirements.
5. Approved broker/market-data/payment/KYC providers.
6. Client account and transaction rules.
7. Branding assets and verified testimonials.
8. Production domain and deployment ownership.

## Deployment rules

- Secrets are environment variables or managed secrets only.
- Never commit `.env`, API keys, private credentials or service-role keys.
- Use separate development/staging/production credentials.
- Require HTTPS in production.
- Enable security headers and restrictive CORS.
- Rate-limit public AI/support endpoints.
- Log security events without logging secrets or unnecessary financial/PII data.
