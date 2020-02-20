import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home');


Vue.use(Router);

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
    base: base,
    routes: [
        {
            path: '/',
            name: 'name',
            component: Home
        }

    ]
})
