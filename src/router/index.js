import Vue from 'vue'
import store from '../store';
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
const Home = () => import('@/views/Home/Home');
const Login = () => import('@/views/Login/Login');
const Experience = () => import('@/views/Experience/Experience');
const Primera = () => import('@/views/Experience/Primera/Primera');
const Segunda = () => import('@/views/Experience/Segunda/Segunda');

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
      depth: 1
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    children: [
      {
          path: 'primera',
          name: 'ExperiencePrimera',
          component: Primera
      },
      {
        path: 'segunda',
        name: 'ExperienceSegunda',
        component: Segunda
    },
    ],
    meta: {
      requiresAuth: true,
      depth: 1
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/token']) return next();
    else return next('/login');
  }
  return next();
})

export default router
