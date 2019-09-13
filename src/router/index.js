import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Car = () => import('../views/car/Car')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/car',
      component:Car
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component :Profile
    }
  ]
}) 
