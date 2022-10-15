const HomeView = () => import('@/views/HomeView.vue')

const home = [
  {
    path: '/home',
    name: 'home',
    component: () => HomeView,
  },
  {
    path: '/',
    redirect: '/home',
  },
]

export default home
