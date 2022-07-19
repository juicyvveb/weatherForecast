import VueRouter from 'vue-router'
import Main from './pages/Main.vue'
import Liked from './pages/Liked.vue'

export default new VueRouter ({
   routes : [
    { path: '/', component: Main },
    // { path: '/weatherForecast', name: 'main', component: Main },
    { path: '/saved', component: Liked },
  ],
  mode: 'history'
}
)
