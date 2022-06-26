import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)

import Router from 'vue-router'
 
Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Main',
        component:()=>import('../views/Main.vue'),
        redirect:'/home',
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User')
            },
            {
                path:'/mall',
                name:'mall',
                component:()=>import('../views/mall')
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../views/other/PageOne.vue')
            },
            {
                path:'/page2',  
                name:'page2',
                component:()=>import('../views/other/PageTwo.vue')
            },
        ]
    },
    {
         path:'/login',
         name:'login',
         component:()=>import ('../views/Login/login.vue')
    }
    
]
    const router = new VueRouter({
        mode:'history',
        routes
    })
    const originalPush = Router.prototype.push
    const originalReplace = Router.prototype.replace
    // push
    Router.prototype.push = function push (location, onResolve, onReject) {
      if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
      return originalPush.call(this, location).catch(err => err)
    }
    // replace
    Router.prototype.replace = function push (location, onResolve, onReject) {
      if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
      return originalReplace.call(this, location).catch(err => err)
    }
export default router