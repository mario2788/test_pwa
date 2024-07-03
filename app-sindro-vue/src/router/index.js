

import { createRouter, createWebHistory } from 'vue-router'

import Body from  '@/views/Body.vue' // '../views/Body.vue'

const router = createRouter({

     history: createWebHistory(),

     routes: [
          {
               path: '/pwaVue',
               name: 'home',
               component: Body
               // component: () => import('../views/HomeView.vue')
          },
          // {
          //      path: '/about',
          //      name: 'about',
          //      // route level code-splitting
          //      // this generates a separate chunk (About.[hash].js) for this route
          //      // which is lazy-loaded when the route is visited.
          //      component: () => import('../views/HomeView.vue')
          // }
     ]
})

export default router
