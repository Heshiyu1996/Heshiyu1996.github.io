
const nav = [
    { text: '主页', link: '/' },
    // {
    //     text: '基础', items: [
    //         { text: 'JavaScript', link: '/basis/JavaScript/' },
    //         { text: 'HTML', link: '/basis/HTML/' },
    //         { text: 'CSS', link: '/basis/CSS/' },
    //     ]
    // },
    {
        text: '规范', items: [
            { text: 'CSS', link: '/standard/css/' },
            { text: 'JS', link: '/standard/js/' }
        ]
    },

    { text: 'GitHub', link: 'https://github.com/Heshiyu1996/Heshiyu1996.github.io' }
]
const sidebar = {
    '/blog/': getSidebar('blog'),
    '/standard/': getSidebar('standard'),
    '/frame/': getSidebar('frame')
}

let head = require('./head')

module.exports = {
    title: 'heshiyu\'s blog',
    description: '思而不学则殆',
    head, // 注入到当前页面的 HTML <head> 中的标签

    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级
    }
};

function getSidebar(barName) {
    const sidebar = {
        blog: [
            '/blog/'
        ],
        standard: [
            '/standard/css/',
            '/standard/js/',
        ]
    }
    return sidebar[barName]
}
