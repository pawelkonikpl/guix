const SettingsView = () => import('@/views/SettingsView.vue')

const settings = [
  {
    path: '/settings',
    name: 'settings',
    component: () => SettingsView,
  },
]

export default settings
