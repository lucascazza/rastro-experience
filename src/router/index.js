import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
const Home = () => import('@/views/Home/Home');
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
