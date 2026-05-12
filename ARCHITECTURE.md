# ARCHITECTURE.md

## Application Architecture

### Frontend

Built using:
- Next.js
- React
- TypeScript
- Tailwind CSS

## Core Components

### Pricing Display

Stores AI plan details in a structured array:
- ChatGPT
- Claude
- GitHub Copilot
- Gemini

Displays:
- Plan name
- Price
- Features

### Audit Form

User inputs:
- User Type
- AI Tool
- Monthly Spend
- Team Size

### Audit Logic

Calculates:
- Recommended spending
- Monthly savings or extra spending
- Yearly impact
- Per-person cost
- Spending grade
- Personalized recommendation

### Result Display

Shows:
- Monthly status
- Yearly status
- Spending grade
- Recommended spending
- Feedback message

## Deployment

Hosted on Vercel with GitHub integration.