// export const menus = [
//   {
//     name: '首页',
//     url: '/app/index',
//     icon: 'home'
//   },
//   {
//     name: '基础组件', url: '/app/basic', icon: 'appstore-o',
//     sub: [
//       {name: '按钮', url: '/app/basic/button', icon: ''},
//       {name: '图标', url: '/app/basic/icon', icon: ''},
//       {name: '轮播图', url: '/app/basic/carousel', icon: ''},
//       {name: '标签页', url: '/app/basic/tabs', icon: ''},
//       {name: '树形', url: '/app/basic/tree', icon: ''},
//       {name: '模态框', url: '/app/basic/modal', icon: ''},
//       {name: '提示', url: '/app/basic/tipNote', icon: ''},
//       {name: '富文本框', url: '/app/basic/richText', icon: ''}
//     ]
//   },
//   {
//     name: '表单', url: '/app/form', icon: 'edit',
//     sub: [
//       {name: '基础表单', url: '/app/form/basicForm', icon: ''},
//       {name: '其它表单', url: '/app/form/otherForm', icon: ''}
//     ]
//   },
//   {
//     name: '表格', url: '/app/table', icon: 'copy',
//     sub: [
//       {name: '基础表格', url: '/app/table/basicTable', icon: ''},
//       {name: '高级表格', url: '/app/table/seniorTable', icon: ''},
//       {name: '远程数据', url: '/app/table/dataTable', icon: ''}
//     ]
//   },
//   {
//     name: '图表', url: '/app/charts', icon: 'area-chart',
//     sub: [
//       {name: 'echarts', url: '/app/charts/echarts', icon: ''}
//     ]
//   },
//   {
//     name: '工具', url: '/app/utils', icon: 'tool',
//     sub: [
//       {name: '待办事项', url: '/app/utils/todoList', icon: ''},
//       {name: '房贷计算器', url: '/app/utils/mortgage', icon: ''}
//     ]
//   },
//   {
//     name: '地图', url: '/app/map', icon: 'environment-o'
//   },
//   {
//     name: '画廊', url: '/app/gallery', icon: 'picture'
//   }
// ]

export const menus =  [
    {
        name: '首页',
        icon: 'home',
        url: '/app/index'
    },
    {
        name: '用户管理',
        icon: 'user',
        url: '/app/user',
        sub: [
            {
                url: '/app/user/user_list',
                name: '用户列表',
                icon: ''
            },
            {
                url: '/app/user/user_add',
                name: '添加用户',
                icon: '',
            },
            // {
            //     url: '/app/user/user_edit',
            //     name: '修改用户',
            //     icon: '',
            // },
            {
                url: '/app/user/user_delete',
                name: '修改用户',
                icon: '',
            },

        ]
    },
    {
        name: '态势感知',
        icon: 'area-chart',
        url: '/app/situational',
        sub: [
            {
                url: '/app/situational/attack',
                name: '攻击排行',
                icon: ''
            },
            // {
            //     url: '/app/situational/attack_list',
            //     name: '累计攻击次数',
            //     icon: '',
            // },
            {
                url: '/app/situational/attack_map',
                name: '攻击热点图',
                icon: '',
            },
            {
                url: '/app/situational/attack_information',
                name: '实时信息',
                icon: '',
            },

        ]
    },
    {
        name: '表决器管理',
        icon: 'dashboard',
        url: '/app/voter',
        sub: [
            {
                url: '/app/voter/voter_list',
                name: '表决器列表',
                icon: ''
            },{
                url: '/app/voter/voter_load',
                name: '表决器负载',
                icon: ''
            },
            {
                url: '/app/voter/voter_edit',
                name: '修改表决器',
                icon: '',
            },{
                url: '/app/voter/voter_abnormal',
                name: '表决器异常',
                icon: '',
            },

        ]
    },
    {
        name: '执行体',
        icon: 'team',
        url: '/app/executive',
        sub: [
            {
                url: '/app/executive/executive_load_information',
                name: '执行体负载信息',
                icon: ''
            },
            {
                url: '/app/executive/executive_list',
                name: '执行体列表',
                icon: '',
            },

        ]
    },
    {
        name: '异常警报',
        icon: 'bulb',
        url: '/app/abnormal',
        sub: [
            {
                url: '/app/abnormal/executive_abnormal',
                name: '执行体警报',
                icon: ''
            },
        ]
    },


    {
        name: '网络拓扑',
        icon: 'global',
        url: '/app/topology',
        sub: [
            {
                url: '/app/topology/voter_executive',
                name: '执行体和表决器',
                icon: ''
            },
            {
                url: '/app/executive/executive_list',
                name: '执行体列表',
                icon: '',
            },

        ]
    },
    {
        name: '后台管理',
        icon: 'home',
        url: '/app/backstage',
        sub: [
            {
                url: '/app/backstage/voter_virtual',
                name: '表决器虚拟机',
                icon: ''
            },
            {
                url: '/app/backstage/virtual_template',
                name: '模板生成',
                icon: '',
            },
            {
                url: '/app/backstage/php',
                name: 'php处理',
                icon: '',
            },
            {
                url: '/app/backstage/sql',
                name: 'sql处理',
                icon: '',
            },
            {
                url: '/app/backstage/state_detection',
                name: '状态检测',
                icon: '',
            },
            {
                url: '/app/backstage/an_error',
                name: '错误信息推送',
                icon: '',
            },
        ]
    },
    {
        name: '日志管理',
        icon: 'team',
        url: '/app/log',
        sub: [
            {
                url: '/app/log/voter_log',
                name: '表决器日志管理',
                icon: ''
            },
            {
                url: '/app/log/feedback',
                name: '反馈',
                icon: '',
            },

        ]
    },
]
