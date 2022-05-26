## 概要

KT 用の js 講習リポジトリです

## 使い方

yyyymmdd の書式のフォルダの中にその日に使うファイルが格納されています。

## ローカルへの clone・環境設定

1. 以下のいずれかのコマンドで自分のローカル環境に clone してください。

   `git clone https://github.com/kozukaccd/kt-training.git`

   `git@github.com:kozukaccd/kt-training.git`

2. 以下を実行してください

   `npm install`

## 解答・提出方法

1. 解答前に、現在の main ブランチの最新をプロジェクトに取り込みます。プロジェクトのルートに`cd`して、以下のコマンドを実行してください

   `git checkout main`

   `git pull`

2. 解答用のブランチを切ります。以下のコマンドを実行してください

   `git branch -b 2022mmdd-answer`

3. 解答が終わったら以下を実行してください

   `git add -A`

   `git commit -m "[任意のコミットメッセージを入力する]"`

   `git push origin 2022mmdd-answer`
