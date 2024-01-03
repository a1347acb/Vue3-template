1. 项目包管理方案
项目使用bun进行管理
2. 项目使用unplugin-auto-import、unplugin-vue-components进行自动按需引入、组件全局注册、composition api全局注册
3. 图标方案
项目使用iconify进行图标管理，并使用unplugin-auto-import、unplugin-vue-components进行自动按需导入，在项目中只需要按如下方式使用即可
[iconify](https://icon-sets.iconify.design/)
```html
<!-- i是前缀，ep是图标命名空间，suny是图标名称，具体的可以到iconify官网查看 -->
<i-ep-sunny />
```
由于是按需导入，所以在开发时需要安装对应的图标json并导入，例如安装element-plus的图标
```shell
bun add -D @iconify-json/ep
```