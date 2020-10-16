import Vue from 'vue';
import VueRouter from 'vue-router';
import CoachesList from "@/pages/CoachesList";
import CoachDetails from "@/components/coach/CoachDetails";
import CoachRegister from "@/pages/CoachRegister";
import CoachContact from "@/pages/CoachContact";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: CoachesList},
    {path: '/coaches/:coachId', component: CoachDetails},
    {path: '/coaches/:coachId/contact', component: CoachContact},
    {path: '/register', component: CoachRegister},
    {path: '/requests', component: null},
    {path: '/:notFound(.*)', component: null}


    // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
