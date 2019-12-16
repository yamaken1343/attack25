# アタック25 with 画像クイズ
## 準備
1. ルートディレクトリにVTRクイズで使う動画を`movie.mp4`の名前で保存
2. `images`ディレクトリに表示させる画像を`1.jpg`から`26.jpg`の名前で保存  
番号はパネルのIDと対応する. 26はアタックチャンスパネル用の画像

## 使用の流れ
1. クイズを出題
2. 回答者が正解した場合に, `1: 画像を表示`に移行して画像クイズを出題
3. 画像クイズにも正解した場合に `2:`のボタンでモード移行してパネルの色を変更  
なお, 挟まれたパネルの色変更は手動
4. 適宜アタックチャンスを行う. 回答者が正解した場合は`アタックチャンス: 色変更`  
アタックチャンスで獲得したパネルの画像クイズを表示する際は`アタックチャンス: 画像を表示`を使用する
5. 全パネルの色が変わったら`VTRクイズ`に移行  
なお, 最もパネルが多かった人のパネル消去は`VTRクイズ: 消去モード`に移行し, 手動
6. 消去終了後, `VTRクイズ:動画再生`

## ライセンス
CC0