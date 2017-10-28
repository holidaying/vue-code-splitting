import Vue from 'vue'
import Router from 'vue-router'
// const Hello =() => import('components/Hello')
Vue.use(Router)
const Photos = () => import(
  /* webpackChunkName: "Photos" */
  'components/Hello')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Photos,
      //component: function (resolve) {
        //return import(/* webpackChunkName: "lodash" */ 
          //'components/Hello');
      	//require(["components/Hello"],resolve)
    //   	require.ensure([], function(){
    // 		resolve(require('components/Hello'));
  		// }, 'my_home');
      //}
    },
    {
      path: '/goodbye',
      name: 'goodbye',
      component: function (resolve) {
        return import(/* webpackChunkName: "lodash" */ 
          'components/goodBye');
      	//require(["components/goodBye"],resolve)
      // 	require.ensure([], function(){
    		//   resolve(require('components/goodBye'));
  		  // }, 'goodBye');
      }
    }
  ]
})
