const Home = () => import('@/views/Home.vue')
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]
export default routes
