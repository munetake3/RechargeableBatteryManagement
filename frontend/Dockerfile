FROM node:20.16

# Expose the port
EXPOSE 3000

# Set the working directory
WORKDIR /app

# Copy the source code to the working directory
COPY . /app

# 依存関係をインストール
RUN npm install

# アプリケーションを実行するコマンド
CMD ["npm", "start"]
