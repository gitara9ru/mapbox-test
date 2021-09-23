# hackday
## アクセスキーなど
.envというファイルを作成して
プロジェクト直下に配置する。
以下のように環境変数を定義してprocess.env.VUE_APP_MAPBOX_TOKENのようにして読み取る
```
# .envの中身例
VUE_APP_MAPBOX_TOKEN=hoge
```
## map-box-glとの相性問題
カスタマイズ制や先例の有無の問題が気になっているのでvue用のプラグインを避けたが、
vueと相性よくないかもしれないので、vue用のプラグインも検討したい。
vueのstyleで定義したクラスがmarkerに適用されないなどの問題を確認している。

## mapboxの動作確認
components/MapTest.vueをいじる。
## エラーについて
lintとtypescriptの型エラーなので放置している。

直せる人いたら直してほしい
黙らせる方法は以下ようなものがあるが、多用するとエラーを握りつぶすことになるので要注意
### lintエラー

```
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/ban-ts-comment": "off"
  },
```
### typescriptエラー
```
// @ts-ignore
エラーがでている行
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
