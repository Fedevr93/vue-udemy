import { createRouter, createWebHashHistory } from 'vue-router'

import ListPage from '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'
import AboutPage from '../modules/pokemon/pages/AboutPage'

const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
]

const router = createRouter(
{
  history: createWebHashHistory(),
  routes,  
})

export default router