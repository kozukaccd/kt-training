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

   `git checkout main`　//main ブランチに切り替え（チェックアウト）

   `git pull` //リモート上にある main ブランチの情報を取得し反映

2. 解答用のブランチを切ります。以下のコマンドを実行してください

   `git checkout -b 2022mmdd-answer` //現在いるブランチをベースに 2022mmdd-answer というブランチを作成し、チェックアウト

3. 解答が終わったら以下を実行してください

   `git add -A` //現在の変更点全てをステージする

   `git commit -m "[任意のコミットメッセージを入力する]"` //ステージした変更点をメッセージ付きでコミットする

   `git push origin 2022mmdd-answer` //origin(リモート)へ、2022mmdd-answer というブランチを転送（プッシュ）する

以上で解答の提出が完了となります。
