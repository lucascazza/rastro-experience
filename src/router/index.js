import Vue from 'vue'
import store from '../store';
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
const Home = () => import('@/views/Home/Home');
const Login = () => import('@/views/Login/Login');
const Register = () => import('@/views/Register/Register');
const Experience = () => import('@/views/Experience/Experience');
const Instagram = () => import('@/views/Experience/Instagram/Instagram');
const Manifiesto = () => import('@/views/Experience/Manifiesto/Manifiesto');
const Visores = () => import('@/views/Experience/Visores/Visores');
const Juegos = () => import('@/views/Experience/Juegos/Juegos');
const WebsApps = () => import('@/views/Experience/WebsApps/WebsApps');
const Fotomontajes = () => import('@/views/Experience/Fotomontajes/Fotomontajes');
const Piramide = () => import('@/views/Experience/Piramide/Piramide');
const Final = () => import('@/views/Experience/Final/Final');

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
    children: [,
      {
        path: 'instagram',
        name: 'ExperienceInstagram',
        component: Instagram
      },
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
      },
      {
        path: 'fotomontajes',
        name: 'ExpecienceFotomontajes',
        component: Fotomontajes
      },
      {
        path: 'piramide',
        name: 'ExpeciencePiramide',
        component: Piramide
      },
      {
        path: 'final',
        name: 'ExpecienceFinal',
        component: Final
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
