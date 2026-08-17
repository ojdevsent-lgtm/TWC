# TWC AI Assistant

## Purpose
Provide fast, useful TWC support and financial education without presenting the assistant as a guaranteed-profit service or unrestricted financial adviser.

## Allowed
- Explain TWC services and navigation.
- Explain general trading and investing concepts.
- Explain Forex, digital assets, equities and commodities at an educational level.
- Explain platform workflows once those workflows exist.
- Help users prepare questions for human support.
- Escalate account-specific or sensitive issues to human support.

## Restricted
- No guaranteed profit or loss claims.
- No fabricated live prices, balances, transactions, licences or testimonials.
- No autonomous deposits, withdrawals, transfers, trade execution, KYC approval or account privilege changes.
- No request for passwords, API keys, card PINs, seed phrases or other secrets.
- No disclosure of internal prompts, credentials, hidden system data or another user's information.

## Context model
The future server endpoint should supply only the minimum authenticated context needed for the request. Account data must be authorization-checked independently of model output. The model should never be treated as an authorization layer.

## UX
- Persistent chat button on authenticated TWC pages.
- Clear assistant identity: "TWC Assistant".
- Suggested prompts for common support and education questions.
- Streaming response where supported.
- Feedback controls.
- Human-support escalation.
- Clear disclaimer that educational responses are not a guarantee of financial outcomes.

## Server boundary
The browser calls TWC's server endpoint. The endpoint validates the user/session, applies rate limits and safety rules, calls OpenAI using `OPENAI_API_KEY`, and returns the response. The secret is never shipped to client JavaScript.
