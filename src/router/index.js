import Vue from 'vue'
import Router from 'vue-router'
import Home from './default'

Vue.use(Router)
const commonRoutes = []
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
let router = new Router({
    // base: process.env.BASE_URL,
    routes: commonRoutes.concat(Home)
})

router.beforeEach((to, from, next) => {
    next();
})
export default router;
