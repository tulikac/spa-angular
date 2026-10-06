# Angular SPA Sample

An Angular single-page application using Angular Router.

## Requirements

- Node.js 20.19, 22.12, or 24.0 and later
- npm 10 or later

## Run locally

```powershell
npm install
npm start
```

## Build

```powershell
npm run build
```

The production browser output is written to `dist/spa-angular/browser`.

## Verify

```powershell
npm test -- --watch=false
npm run build
npm start -- --configuration production --host 127.0.0.1 --port 8080
.\scripts\verify.ps1 -BaseUrl http://localhost:8080
```

## Routes

| Route | Purpose |
|---|---|
| `/` | Angular landing page and interactive hydration check |
| `/products/widget-1` | Direct client-side deep-link test |
| `/unknown-client-route` | Angular Router fallback test |
| `/health.json` | Static health marker |
| `/version.json` | Application and framework identity |
