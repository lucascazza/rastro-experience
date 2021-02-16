import Vue from 'vue'
import store from '../store';
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
const Home = () => import('@/views/Home/Home');
const Login = () => import('@/views/Login/Login');
const Register = () => import('@/views/Register/Register');
const Experience = () => import('@/views/Experience/Experience');
const Manifiesto = () => import('@/views/Experience/Manifiesto/Manifiesto');
const Visores = () => import('@/views/Experience/Visores/Visores');
const Juegos = () => import('@/views/Experience/Juegos/Juegos');
const WebsApps = () => import('@/views/Experience/WebsApps/WebsApps');

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
          path: 'manifiesto',
          name: 'ExperienceManifiesto',
          component: Manifiesto
      },
      {
        path: 'visores',
        name: 'ExperienceVisores',
        component: Visores
      },
      {
        path: 'juegos',
        name: 'ExperienceJuegos',
        component: Juegos
      },
      {
        path: 'webapps',
        name: 'ExpecienceWebsApps',
        component: WebsApps
      }
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
  {
    path: '/register',
    name: 'Register',
    component: Register
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
