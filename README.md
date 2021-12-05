# mini-program-s

> 小程序，供学习使用

1、在没有配置 `entryPagePath` 的情况下，小程序默认会显示 `app.json` 里面第一个 `page` 所对应的页面，也就是首页

2、关于 `rpx`，所有屏幕的宽度都是 `750rpx`
  - 对于 `iphone6` 来说，宽度是 `375px`，所以 `1px = 2rpx`

3、可以使用 “ 添加编译模式 ”，使小程序默认打开某个路由

4、`image` 组件会有个默认大小 `320 * 240`

5、`app.js` 是小程序的入口，`app.json` 是全局配置，`app.wxss` 是全局样式，全局配置和全局样式可以被各个 `page` 自己的 `json` 和 `wxss` 文件覆盖

6、一个 `page` 可以没有 `json` 和 `wxss`，但是 `js` 文件和 `wxml` 是必需的

7、对于 `usingComponents`，建议：第三方 `UI` 组件写在全局 `app.json`，自定义组件写在 `page` 自己的 `json` 里

8、使用模板标签的时候，最好使用 `block` 包裹，否则生成的 `dom` 结构不干净，显示的样式可能也不如预期

9、关于 `navigateTo` 和 `redirectTo`
  - `navigateTo` 为从当前页面打开子页面，当前页面不会被销毁，可从子页面返回当前页面，打开子页面层级最高为 `10` 层


  - `redirectTo` 为替换当前页面，当前页面会被销毁，无法返回当前页面，按返回会回到当前页面的父页面



<br><br><br>
