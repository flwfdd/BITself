/*
 * @Author: flwfdd
 * @Date: 2022-05-28 01:19:14
 * @LastEditTime: 2022-07-31 22:43:13
 * @Description: 
 * _(:з」∠)_
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta:{keepAlive:false}
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('@/views/User.vue'),
      meta:{keepAlive:false}
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/views/Score.vue')
    },
    {
      path: '/paper',
      name: 'paper',
      component: () => import('@/views/Paper.vue')
    },
    {
      path: '/paper/edit/:id',
      name: 'paper_edit',
      component: () => import('@/views/PaperEdit.vue')
    },
    {
      path: '/paper/show/:id',
      name: 'paper_show',
      component: () => import('@/views/PaperShow.vue')
    },

    {
      path: '/course/show/:id',
      name: 'course_show',
      component: () => import('@/views/CourseShow.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/Course.vue')
    },
    {
      path: '/course/upload/:id',
      name: 'course_upload',
      component: () => import('@/views/CourseUpload.vue'),
      meta:{keepAlive:false}
    },

    {
      path: '/about/',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta:{keepAlive:false}
    },

    {
      path: '/admin/carousel/',
      name: 'admin_carousel',
      component: () => import('@/views/admin/Carousel.vue')
    },
    {
      path: '/admin/billboard/',
      name: 'admin_billboard',
      component: () => import('@/views/admin/Billboard.vue')
    },
  ]
});

export default router;
