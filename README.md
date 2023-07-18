### How to start project

1. **start backend service**
```
npm run start:be
```

2. **start frontend service**
```
npm run start:fe
```

3. **start both service**
```
npm run start:both
```
****
### initialize lerna

```
npm install -g lerna serve pm2
mkdir -p lerna-monorepo-example && cd lerna-monorepo-example
lerna init
```

### frontend setup

```
mkdir -p frontend && cd frontend
npx create-react-app .
```

### backend setup

```
mkdir -p backend cd backend
npm init
npm install express
```
