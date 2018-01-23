import './message.css'

const messageTip = {
	install(Vue, options) {
		let opt = {
			duration: '2500' // 持续时间
		}
		for(let property in options) {
			opt[property] = options[property]; // 使用 options 的配置
		}

		Vue.prototype.$showMsg = function(msg='请稍候') {
			if(document.getElementsByClassName('message').length) {
				// 如果toast还在，则不再执行
				return;
			}
			let toastTpl = Vue.extend({
				template:  `<transition name="fade" tag="div">
								<div class="message">
									<div class="text">${msg}</div>
								</div>
							</transition>`
			});
			let tpl = new toastTpl().$mount().$el;
			document.body.appendChild(tpl);
			setTimeout(() => {
				document.body.removeChild(tpl);
			}, opt.duration)
		}
	}
}
// 多页面直接引用script
if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(messageTip);
}

export default messageTip