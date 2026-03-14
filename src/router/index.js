/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */
// Composables
import {createRouter, createWebHistory} from 'vue-router/auto'
import {routes} from 'vue-router/auto-routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  AOS.init();
  if (to.fullPath.includes('/admin') && to.fullPath !== '/admin/login') {
    try {
      const response = await axios.get('/api/auth-check', {withCredentials: true});
      if (response.data.success) {
        return next();
      } else {
        return next('/admin/login');
      }
    } catch (err) {
      console.log(err);
      return next('/admin/login');
    }
  }
  next();
});

//로그
// function RouterLogging(to,from){
//   console.log(`from: ${from.path}=>to: ${to.path}`);
//   return true
// }


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router;
