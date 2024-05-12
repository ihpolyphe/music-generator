# music-generator
ユーザ入力を元に音楽を生成するwebアプリを作成する。

- フロントエンド：`Netlify`
- バックエンドはサーバレスでNetlify functionsを使用する。

## Setup
### Node.js

https://qiita.com/nekonekonekosan/items/61a6b9d4da6bdfd1d0bb
https://qiita.com/s_secual/items/0539f03bc21059bc9d0a

### Netlify 
Netlify使い方
https://qiita.com/niihara_megumu/items/db8c53f0f5de9f377976

### Netlify functions
https://app.netlify.com/sites/music-generator-by-musica/logs/functions


以下にアクセスするとapiが実行される。
https://music-generator-by-musica.netlify.app/.netlify/functions/index


### トラブルシューティング
nodejsのバージョンは20だとローカルの確認エラー、16にダウングレードしてok

https://qiita.com/n4a/items/bf79d2ef6371f9d61c7b
https://qiita.com/s_secual/items/0539f03bc21059bc9d0a

Netlifyのデプロイに失敗する。

→netlifyのnodejsも20で行ける。ビルドコマンドにレガシーSSLで実行するオプションを付与した。

https://qiita.com/akitkat/items/f455bbc088a408cbc3a5
