import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'

Vue.config.productionTip = false

Vue.directive('myfocus', {
    inserted: function (el) {
        console.log(el)
    }
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
