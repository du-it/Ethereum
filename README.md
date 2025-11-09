# Ethereum Donation Listener

Dieses Repository ist das **Haupt-Repo** für ein modular aufgebautes Ethereum-Spendenprojekt. Es enthält zentrale Konfigurationen, globale Skripte und bindet spezialisierte Smart-Contract-Repositories als **Git-Submodule** unter `contracts/`.

## 1. 📦 Projektstruktur

```text
D:\develop\DLT\Ethereum\
├── contracts\
│   ├── DirectedFundraiser\   ← Submodul (Smart Contract)
│   └── ...                   ← weitere Sub-Repos
├── scripts\
│   ├── deploy_directedFundraiser.ts
│   └── loadEnv.ts
├── .env.template
├── .gitignore
├── hardhat.config.ts
└── package.json
```

## 2. 🔧 Setup (vollständiges Klonen inkl. Submodule)

```bash
git clone --recurse-submodules https://github.com/du-it/Ethereum.git
cd Ethereum
npm install
copy .env.template .env
```

## 3. 🧩 Submodul-Architektur

- Alle Smart Contracts liegen in separaten Repositories und sind als Submodule unter `contracts/` eingebunden.
- Jedes Submodul ist ein eigenständiges Git-Repo mit eigener Historie und Remote-URL.
- Änderungen in Submodulen müssen **im Submodul selbst** committed und gepusht werden.
- Das Haupt-Repo referenziert nur den Commit-Hash jedes Submoduls.

## 4. 🧠 Selektives Arbeiten mit Submodulen

Wenn du z. B. 100 Submodule hast, aber **nur eines bearbeiten willst**, kannst du gezielt vorgehen:

### A. Haupt-Repo klonen **ohne Submodule**

```bash
git clone https://github.com/du-it/Ethereum.git
cd Ethereum
```

### B. Nur ein bestimmtes Submodul initialisieren

```bash
git submodule update --init contracts/DirectedFundraiser
```

### C. Optional: Alle Submodule anzeigen

```bash
git config --file .gitmodules --get-regexp path
```

### D. Submodul aktualisieren

```bash
cd contracts/DirectedFundraiser
git pull origin main
```

### E. Submodul-Änderung im Haupt-Repo referenzieren

```bash
cd ../..
git add contracts/DirectedFundraiser
git commit -m "Update DirectedFundraiser submodule pointer"
git push
```

## 5. 🚀 Listener starten

```bash
npm run listener:sms     # nur SMS
npm run listener:email   # nur E-Mail
```

## 6. 🧪 Testen

```bash
npx hardhat test
```

## 7. 🔐 .env.template – sichere Vorlage

```env
SENDGRID_API_KEY=your-sendgrid-api-key
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=+1234567890
RECIPIENT_PHONE_NUMBER=+0987654321
RPC_URL=https://sepolia.infura.io/v3/your-infura-project-id
CONTRACT_ADDRESS=0xYourContractAddress
PRIVATE_KEY=your-wallet-private-key
```

## 8. 🚫 .gitignore – sensible Dateien ausschließen

```gitignore
.env
.env.local
.env.production
node_modules/
dist/
artifacts/
cache/
typechain/
```

## 9. ⚙️ package.json – Listener-Skripte

```json
{
  "scripts": {
    "listener:sms": "ts-node contracts/DirectedFundraiser/scripts/donation_listener4sms.ts",
    "listener:email": "ts-node contracts/DirectedFundraiser/scripts/donation_listener4email.ts",
    "test": "npx hardhat test"
  }
}
```
