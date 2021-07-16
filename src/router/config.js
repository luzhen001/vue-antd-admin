import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
// 路由配置
const options = {
    routes: [
        {
            name: '登录页',
            path: '/login',
            component: () => import('@/pages/login')
        },
        {
            name:'忘记密码',
            path:'/forgetPwd',
            component:()=> import('@/pages/forgetPwd')
        },
        {
            name: '404',
            path: '*',
            component: () => import('@/pages/error/404'),
        },
        {
            name: '403',
            path: '/403',
            component: () => import('@/pages/error/403'),
        },
       
        {
            name: '首页',
            path: '/',
            component: TabsView,
            redirect: '/login',
            children: [
                {
                    name: '仪表盘',
                    path: 'dashboard',
                    meta: {
                        icon: 'dashboard'
                    },
                    component: BlankView,
                    children: [
                        {
                            name: '工作台',
                            path: 'workplace',
                            meta: {
                                page: {
                                    closable: false
                                }
                            },
                            component: () => import('@/pages/dashboard/workplace'),
                        },
                        {
                            name: '分析页',
                            path: 'analysis',
                            component: () => import('@/pages/dashboard/analysis'),
                        }
                    ]
                },
                {
                    name: '表单页',
                    path: 'form',
                    meta: {
                        icon: 'form',
                        page: {
                            cacheAble: false
                        }
                    },
                    component: BlankView,
                    children: [
                        {
                            name: '基础表单',
                            path: 'basic',
                            component: () => import('@/pages/form/basic'),
                        },
                        {
                            name: '分步表单',
                            path: 'step',
                            component: () => import('@/pages/form/step'),
                        },
                        {
                            name: '高级表单',
                            path: 'advance',
                            component: () => import('@/pages/form/advance'),
                        }
                    ]
                },
                {
                    path: 'list',
                    name: '列表页',
                    meta: {
                        icon: 'table'
                    },
                    component: BlankView,
                    children: [
                        {
                            path: 'query',
                            name: '查询表格',
                            meta: {
                                authority: 'queryForm',
                            },
                            component: () => import('@/pages/list/QueryList'),
                        },
                        {
                            path: 'query/detail/:id',
                            name: '查询详情',
                            meta: {
                                highlight: '/list/query',
                                invisible: true
                            },
                            component: () => import('@/pages/list/QueryList')
                        },
                        {
                            path: 'primary',
                            name: '标准列表',
                            component: () => import('@/pages/list/StandardList'),
                        },
                        {
                            path: 'card',
                            name: '卡片列表',
                            component: () => import('@/pages/list/CardList'),
                        },
                        {
                            path: 'search',
                            name: '搜索列表',
                            component: () => import('@/pages/list/search/SearchLayout'),
                            children: [
                                {
                                    path: 'article',
                                    name: '文章',
                                    component: () => import('@/pages/list/search/ArticleList'),
                                },
                                {
                                    path: 'application',
                                    name: '应用',
                                    component: () => import('@/pages/list/search/ApplicationList'),
                                },
                                {
                                    path: 'project',
                                    name: '项目',
                                    component: () => import('@/pages/list/search/ProjectList'),
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '详情页',
                    path: 'details',
                    meta: {
                        icon: 'profile'
                    },
                    component: BlankView,
                    children: [
                        {
                            name: '基础详情页',
                            path: 'basic',
                            component: () => import('@/pages/detail/BasicDetail')
                        },
                        {
                            name: '高级详情页',
                            path: 'advance',
                            component: () => import('@/pages/detail/AdvancedDetail')
                        }
                    ]
                },
                {
                    name: '结果页',
                    path: 'result',
                    meta: {
                        icon: 'check-circle-o',
                    },
                    component: BlankView,
                    children: [
                        {
                            name: '成功',
                            path: 'success',
                            component: () => import('@/pages/result/Success')
                        },
                        {
                            name: '失败',
                            path: 'error',
                            component: () => import('@/pages/result/Error')
                        }
                    ]
                },
                {
                    name: '异常页',
                    path: 'error',
                    meta: {
                        icon: 'warning',
                    },
                    component: BlankView,
                    children: [
                        {
                            name: 'Exp404',
                            path: '404',
                            component: () => import('@/pages/error/404')
                        },
                        {
                            name: 'Exp403',
                            path: '403',
                            component: () => import('@/pages/error/403')
                        },
                        {
                            name: 'Exp500',
                            path: '500',
                            component: () => import('@/pages/error/500')
                        }
                    ]
                },
                {
                    name: '内置组件',
                    path: 'components',
                    meta: {
                        icon: 'appstore-o'
                    },
                    component: BlankView,
                    children: [
                        {
                            name:'返回顶部',
                            path:'backtop',
                            component:()=>import('@/pages/components/backTop')
                        },
                        {
                            name:'复制',
                            path:'copyBoard',
                            component:()=>import('@/pages/components/copyBoard')
                        },
                        {
                            name: '任务卡片',
                            path: 'taskCard',
                            component: () => import('@/pages/components/TaskCard')
                        },
                        {
                            name: '高级表格',
                            path: 'table',
                            component: () => import('@/pages/components/table')
                        }
                    ]
                },
                {
                    name:'个人中心',
                    path:'account',
                    meta: {
                        icon: 'user-o'
                    },
                    component: BlankView,
                    children:[
                        {
                            name:'个人中心',
                            path:'profile',
                            component:()=>import('@/pages/account/profile')
                        },
                        {
                            name:'个人设置',
                            path:'setting',
                            component:()=>import('@/pages/account/setting')
                        }
                    ]
                },
                {
                    name: '带参菜单',
                    path: 'menuquery',
                    meta: {
                        icon: 'project',
                        query: {
                            name: 'zhangsan',
                            age:18,
                            uid:'123456789'
                        }
                    },
                    component: () => import('@/pages/menuQuery')
                },
                {
                    name: '动态路由菜单',
                    path: 'menudynamic/:id',
                    meta: {
                        icon: 'project',
                        params: {
                            id: 123
                        }
                    },
                    component: () => import('@/pages/menuDynamic')
                }
            ]
        }
    ]
}
export default options