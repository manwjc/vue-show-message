# vue-show-message

> 移动端居中弹框信息提示

## 安装
```JS
npm install vue-show-message --save
```

## 使用
```JS
//ES6引入
import showMessage from 'vue-show-message'
//require引入
var showMessage = require('vueShowMessage')

Vue.use(showMessage, {
	duration: 2000
})

//组件中使用
mounted() {
	this.$showMsg('弹框提示信息');
},
```

### Props说明

|    参数    |    作用   |   类型   | 默认值 |
| -----------------  | ---------------- | :--------: | :----------: |
| msg        | 提示信息 |String | '请稍候'
| duration   | 弹框持续显示时间 |Number | 2500

