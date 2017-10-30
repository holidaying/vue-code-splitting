# vue-code-splitting
vue按需加载

```

{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ],
  "plugins": ["syntax-dynamic-import"]
}
```
.bablerc的配置很重要
