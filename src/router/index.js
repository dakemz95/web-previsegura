import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Assists from '../views/Assists/index.vue'
import AMortuary from '../views/Assists/AMortuary.vue'
import AGrief from '../views/Assists/AGrief.vue'
import AMedical from '../views/Assists/AMedical.vue'
import AMedicalDates from '../views/Assists/AMedicalDates.vue'
import ADental from '../views/Assists/ADental.vue'
import CallCenter from '../views/CallCenter.vue'
import Contact from '../views/Contact.vue'

export default createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/asistencias',
      name: 'Assists',
      component: Assists,
      children: [
        {
          path: '/asistencias',
          component: AMortuary,
          alias: '/asistencias',
        },
        {
          path: '/asistencias/asistencia-funeraria',
          name: 'AMortuary',
          component: AMortuary,
        },
        {
          path: '/asistencias/asistencia-en-duelo',
          name: 'AGrief',
          component: AGrief,
        },
        {
          path: '/asistencias/asistencia-medica',
          name: 'AMedical',
          component: AMedical,
        },
        {
          path: '/asistencias/citas-medicas',
          name: 'AMedicalDates',
          component: AMedicalDates,
        },
        {
          path: '/asistencias/asistencias-odontologicas',
          name: 'ADental',
          component: ADental,
        },
      ]
    },
    {
      path: '/call-center',
      name: 'CallCenter',
      component: CallCenter
    },
    {
      path: '/contacto/:assist',
      alias: '/contacto',
      name: 'Contact',
      component: Contact,
      props: true
    },
  ]
})