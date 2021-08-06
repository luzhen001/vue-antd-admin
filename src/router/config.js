import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
// 路由配置
const options = {
    routes: [
        {
            name: '登录',
            path: '/login',
            component: () => import('@/pages/login')
        },
        {
            name:'忘记密码',
            path:'/forgetpwd',
            component:()=> import('@/pages/forgetPwd')
        },
        {
            name: '403',
            path: '/403',
            component: () => import('@/pages/error/403'),
        },
        {
            name: '404',
            path: '*',
            component: () => import('@/pages/error/404'),
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
                    component: BlankView,
                    meta: {
                        icon: 'dashboard'
                    },
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
                    name:'图表',
                    path:'echarts',
                    component: BlankView,
                    meta:{
                        icon:'bar-chart'
                    },
                    children:[
                        {
                            name:'折线图',
                            path:'line',
                            component:()=>import('@/pages/echarts/line')
                        },
                        {
                            name:'柱状图',
                            path:'bar',
                            component:()=>import('@/pages/echarts/bar')
                        },
                        {
                            name:'雷达图',
                            path:'randar',
                            component:()=>import('@/pages/echarts/randar')
                        }
                    ]
                },
                {
                    name: '表单页',
                    path: 'form',
                    component: BlankView,
                    meta: {
                        icon: 'form',
                        page: {
                            cacheAble: false
                        }
                    },
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
                    component: BlankView,
                    meta: {
                        icon: 'table'
                    },
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
                            name: '高级表格',
                            path: 'table',
                            component: () => import('@/pages/list/table')
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
                    component: BlankView,
                    meta: {
                        icon: 'profile'
                    },
                    children: [
                        {
                            name: '基础详情页',
                            path: 'basic',
                            component: () => import('@/pages/detail/basic')
                        },
                        {
                            name: '高级详情页',
                            path: 'advance',
                            component: () => import('@/pages/detail/advance')
                        }
                    ]
                },
                {
                    name: '结果页',
                    path: 'result',
                    component: BlankView,
                    meta: {
                        icon: 'check-circle-o',
                    },
                    children: [
                        {
                            name: '警告',
                            path: 'warning',
                            component: () => import('@/pages/result/warning')
                        },
                        {
                            name: '失败',
                            path: 'error',
                            component: () => import('@/pages/result/error')
                        },
                        {
                            name: '成功',
                            path: 'success',
                            component: () => import('@/pages/result/success')
                        }
                    ]
                },
                {
                    name: '异常页',
                    path: 'error',
                    component: BlankView,
                    meta: {
                        icon: 'warning',
                    },
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
                    component: BlankView,
                    meta: {
                        icon: 'appstore-o'
                    },
                    children: [
                        {
                            name:'返回顶部',
                            path:'backtop',
                            component:()=>import('@/pages/components/backTop')
                        },
                        {
                            name:'复制',
                            path:'copyboard',
                            component:()=>import('@/pages/components/copyBoard')
                        },
                        {
                            name: '任务卡片',
                            path: 'taskcard',
                            component: () => import('@/pages/components/TaskCard')
                        }
                    ]
                },
                {
                    name:'个人中心',
                    path:'account',
                    component: BlankView,
                    meta: {
                        icon: 'user-o'
                    },
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
                    name:'Excel相关',
                    path:'excel',
                    component: BlankView,
                    meta: {
                        icon: 'file-excel'
                    },
                    children:[
                        {
                            name:'导出表格',
                            path:'exportexcel',
                            components:()=>import('@/pages/excel/exportexcel')
                        },
                        {
                            name:'导出已选项',
                            path:'exportselected',
                            components:()=>import('@/pages/excel/exportselected')
                        },
                        {
                            name:'导出多级表头',
                            path:'exportmerge',
                            components:()=>import('@/pages/excel/exportmerge')
                        },
                        {
                            name:'上传Excel',
                            path:'uploadexcel',
                            components:()=>import('@/pages/excel/uploadexcel')
                        }
                    ]
                },
                {
                    name:'Zip相关',
                    path:'zip',
                    component:()=>import('@/pages/zip'),
                    meta:{
                        icon:'file-zip'
                    }
                },
                {
                    name: '带参菜单',
                    path: 'menuquery',
                    component: () => import('@/pages/menuQuery'),
                    meta: {
                        icon: 'project',
                        query: {
                            name: 'zhangsan',
                            age:18,
                            uid:'123456789'
                        }
                    }
                },
                {
                    name: '动态路由菜单',
                    path: 'menudynamic/:id',
                    component: () => import('@/pages/menuDynamic'),
                    meta: {
                        icon: 'project',
                        params: {
                            id: 123
                        }
                    }
                }
            ]
        }
    ]
}
export default options