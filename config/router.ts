// 初始路由，路由的存在会直接影响构建时的模块
const defaultRoutes = [
    { path: '/userinfo', name: '个人信息', component: './User/Info', hideInMenu: true },
    { path: '/login', layout: false, component: './User/Login' },
    {
      path: '/server-manage',
      name: '服务监控',
      icon: 'cloudServer',
      access: 'service',
      routes: [
        {
          path: 'quota',
          name: '指标监控',
          component: './ServerManage/Quota',
          access: 'service.quota',
        },
        {
          path: 'logs',
          name: '客户端日志',
          component: './ServerManage/ClientLog',
          access: 'service.clientlog',
        },
        { path: '/server-manage', redirect: '/server-manage/quota' },
        { component: './404' },
      ],
    },
    { path: '/', redirect: '/server-manage/quota' },
    { component: './404' },
  ];

  export default defaultRoutes;

