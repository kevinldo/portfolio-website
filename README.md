# KD Portfolio Website

Live site: [kedo.dev](https://kedo.dev)

Dev site (requires access): [dev.kedo.dev](https://dev.kedo.dev)


A single-page personal site showcasing myself. 
I've reset git history and obfuscated info about myself on purpose in this demo repo.

## Local Deployment Reference

### Docker

Prod (port 42318):
```bash
docker compose --profile prod up -d
"$BROWSER" http://localhost:42318
```

Dev (port 42319):
```bash
docker compose --profile dev up -d
"$BROWSER" http://localhost:42319
```

Rebuild clean:
```bash
docker compose down -v --rmi local --remove-orphans
docker compose build --no-cache --pull --profile prod
docker compose up -d --profile prod
```

Teardown all:
```bash
docker compose --profile dev --profile prod down -v --rmi local --remove-orphans
```

### No Docker
```bash
npm install
npm run dev                    # localhost
npm run dev -- --host 0.0.0.0  # dev container
npm run build
npm run lint
```

## Tech
Vite + TypeScript + React
