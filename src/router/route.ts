const Home = () => import('@/view/Home.vue')
const Example = () => import('@/view/example/index.vue')
const BaseScene = () => import("@/view/example/base-scene.vue")
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/example',
    name: 'example',
    component: Example,
    children: [{
      path: 'base-scene',
      component: BaseScene
    }]
  },
]
export default routes
