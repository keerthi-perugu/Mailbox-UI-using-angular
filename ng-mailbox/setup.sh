#!/bin/bash
# NgMailbox Quick Setup Script
set -e

echo ""
echo "╔═══════════════════════════════════════╗"
echo "║        NgMailbox Setup Script         ║"
echo "╚═══════════════════════════════════════╝"
echo ""

# Check Node
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed. Please install Node 18+ from https://nodejs.org"
  exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "❌ Node.js 18+ required. Current: $(node -v)"
  exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install Angular CLI if missing
if ! command -v ng &> /dev/null; then
  echo "📦 Installing Angular CLI 16..."
  npm install -g @angular/cli@16
else
  echo "✅ Angular CLI $(ng version --skip-git 2>/dev/null | grep 'Angular CLI' | awk '{print $3}') detected"
fi

# Install deps
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ All done! Starting dev server..."
echo ""
echo "   ➜  http://localhost:4200"
echo ""
ng serve --open
