import Vue from 'vue';
import VueRouter from 'vue-router';
import CoachesList from "@/pages/CoachesList";
import CoachDetails from "@/components/coach/CoachDetails";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: CoachesList},
    {path: '/coaches/:coachId', component: CoachDetails, children: [
            {path: '/contact', component: null}
    ]},
    {path: '/register', component: null},
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
