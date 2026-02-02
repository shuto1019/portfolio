# React Development Environment (Docker)

React + Vite を Docker コンテナで動かすための開発環境テンプレートです。  
Node.js をローカルにインストールせずに、すぐ React 開発を始められます。

---

## 前提条件

- Docker Desktop がインストールされていること

---

## 起動方法

```bash
# コンテナ起動
docker compose up -d

# コンテナに入る
docker compose exec react sh

# React プロジェクトへ移動
cd react-document-study

# 依存関係インストール
npm install

# 開発サーバー起動（外部アクセス許可）
npm run dev -- --host
ブラウザで以下にアクセスします。

arduino
コードをコピーする
http://localhost:5173
停止方法
bash
コードをコピーする
docker compose down