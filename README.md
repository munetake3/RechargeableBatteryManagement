# Rechargeable Battery Management

充電池管理アプリケーション

- 充電池をどのデバイスに使われているか確認することができる。
- 任意の設定に基づいて、充電池の交換時期になると通知およびメールで交換を促す。

## 環境構築手順

1. リポジトリをクローンする。  
   - HTTPSを使用する場合:  
     `git clone https://github.com/munetake3/RechargeableBatteryManagement.git`  
   - SSHを使用する場合:  
     `git@github.com:munetake3/RechargeableBatteryManagement.git`
1. クローンしたリポジトリのディレクトリに移動する。  
   `cd RechargeableBatteryManagement`
1. `.env.example`ファイルを元に`.env`ファイルを作成する。その後`.env`ファイルの`DB_PASSWORD`を設定する。  
   - Windowsの場合:  
     `copy .env.example .env`
   - LinuxまたはMacOSの場合:  
     `cp .env.example .env`
1. `Docker Compose`を使用してWebアプリケーションコンテナとDBコンテナを起動する。  
   コンテナを起動するコマンド:  
   `docker compose up -d`  
   起動後は以下のURLでサービスにアクセスできる。
   - `http://localhost:3000`: React アプリ
   - `http://localhost:8080`: Spring Boot アプリケーション
   - `http://localhost:5432`: PostgreSQL データベースサーバー

## 技術スタック

- Docker: 25.0.3
- Frontend
  - Node: 20.16.0
    - npm: 10.8.1
  - React: 18.3.1
- Backend
  - Java(OpenJDK): 21
  - Spring Boot: 3.3.1
  - maven: 3.9.8
- Database
  - PostgreSQL: 14.12
