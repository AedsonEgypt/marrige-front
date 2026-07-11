# Deploy na Vercel

## 1. Antes de fazer o deploy

Depois que o backend estiver no ar no Railway (veja `../marrige/DEPLOY.md`), edite
`src/environments/environment.prod.ts` e troque o `apiUrl` pela URL real do backend:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://SEU-BACKEND.up.railway.app/api'
};
```

Faça commit dessa alteração antes do deploy (ou a cada vez que a URL do backend mudar).

## 2. Criar o projeto na Vercel

1. Importe o repositório `marrige-front` na Vercel.
2. A Vercel deve detectar Angular automaticamente; o `vercel.json` já garante:
   - `buildCommand`: `npm run build` (equivalente a `ng build`, que por padrão já usa a configuration `production`, aplicando `environment.prod.ts`).
   - `outputDirectory`: `dist/marrige`.
   - rewrite catch-all para `index.html` (necessário para o roteamento client-side do Angular Router funcionar em refresh/URL direta).
3. Não é necessário configurar variáveis de ambiente na Vercel — a URL da API é definida em tempo de build via `environment.prod.ts`.

## 3. Depois do deploy

1. Pegue a URL gerada pela Vercel (ex: `https://seu-site.vercel.app`).
2. Configure `CORS_ALLOWED_ORIGINS` no backend (Railway) com essa URL, para o navegador poder chamar a API.
3. Teste o fluxo de login e as páginas que consomem a API (presentes, padrinhos) para confirmar que o `apiUrl` está correto.
