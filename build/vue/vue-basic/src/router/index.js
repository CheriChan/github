import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(Router)





let routers=[
  {
    path: '',
    redirect: '/login',
    count:3
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('@/view/login/login')
  },
  {
    path: '/layout',
    name: 'layout',
    component:()=>import('@/view/layout/layout'),
    children:[
          {
            path: '/table1',
            name: 'table1',
            component:()=>import('@/view/table/table1')
          },
          {
            path: '/table2',
            name: 'table2',
            component:()=>import('@/view/table/table2')
          },
          {
            path: '/ElementTable',
            name: 'ElementTable',
            component:()=>import('@/view/components/ElementTable')
          },
          {
            path: '/RenderDom',
            name: 'RenderDom',
            component:()=>import('@/view/components/ElementTable/RenderDom')
          },
          {
            path: '/practice1',
            name: 'practice1',
            //component:()=>import('@/view/practice/practice1')
            component:resolve=>require(['@/view/practice/practice1'],resolve)
          },
          {
            path: '/components',
            name: 'components',
            component:()=>import('@/view/components')
          },
          {
            path: '/graph',
            name: 'graph',
            component:()=>import('@/view/components/graph')
          },
          {
            path: '/table3',
            name: 'table3',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/components/table1')
          },
          {
            path: '/screen1',
            name: 'screen1',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/screen/screen1')
          },
          {
            path: '/vuex1',
            name: 'vuex1',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/vuex/vuex1')
          },
          {
            path: '/timelinemap',
            name: 'timelinemap',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/echarts/TimelineMap')
          },
          {
            path: '/node1',
            name: 'node1',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/node/node1')
          },
          
          {
            path: '/test',
            name: 'test',
            //component:()=>import('@/view/practice/practice1')
            component:()=>import('@/view/test/test'),
            children:[{
                path: '/test1',
                name: 'test1',
                //component:()=>import('@/view/practice/practice1')
                component:()=>import('@/view/test/test1')
              },{
                path: '/test2',
                name: 'test2',
                //component:()=>import('@/view/practice/practice1')
                component:()=>import('@/view/test/test2')
              },
             ]
          },
          
    ]
  },
  
]




export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})