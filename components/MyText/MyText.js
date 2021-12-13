Component({
  // 外部样式类，表示这个类是从外部传过来的（外部：调用此组件的父组件或页面），需要在 wxml 文件将这些类传入自己想要的位置
  // 思考：外部样式类的存在，可以让我们不用在组件外面再包一层去控制样式了。而且还能控制组件内部指定 Dom 的样式
  externalClasses: ['c-class'],
  properties: {
    text: { type: String, value: '默认的' },
    num: { type: Number, value: 0 },
    obj: { type: Object, value: { a: 1, b: 2 } },
  },
  data: {
    message: '自定义组件：',
  },
  methods: {
    onBtnClicked() {
      // 自定义事件，类似于 Vue 的 this.emit 方法，用法也差不多
      this.triggerEvent('showText', this.properties.text)
    }
  },
});
