import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';
import Home from '../pages/Home/Home.vue';
import Category from '../pages/Category/Category.vue';
import Apple from '../pages/Apple/AppleDialog.vue';
import NextPage from '../components/demo/NextPage.vue';
import NextPage2 from '../components/demo/NextPage2.vue';
import Animation from '../pages/Animation/index.vue';
import Session from '../pages/Session/index.vue';
import LazyLoad from '../pages/LazyLoad/index.vue';
import SnapDom from '../pages/SnapDom/index.vue';
import Demo from '../pages/Demo/Demo.vue';
import DynamicCom from '../pages/DynamicCom/index.vue';
import Preloader from '../pages/Preloader/index.vue';
import Lottie from '../pages/Lottie/index.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/demo/next-page',
    name: 'nextPage',
    component: NextPage
  },
  {
    path: '/demo/next-page2',
    name: 'nextPage2',
    component: NextPage2
  },
  {
    path: '/apple',
    name: 'apple',
    component: Apple
  },
  {
    path: '/animation',
    name: 'animation',
    component: Animation
  },
  {
    path: '/session',
    name: 'session',
    component: Session
  },
  {
    path: '/lazy-load',
    name: 'lazyLoad',
    component: LazyLoad
  },
  {
    path: '/snapDom',
    name: 'snapDom',
    component: SnapDom
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/dynamicCom',
    name: 'dynamicCom',
    component: DynamicCom
  },
  {
    path: '/preloader',
    name: 'preloader',
    component: Preloader
  },
  {
    path: '/lottie',
    name: 'lottie',
    component: Lottie
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
