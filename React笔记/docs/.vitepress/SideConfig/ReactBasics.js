const commonPath = '/guide';
const viewPath = 'ReactBasics';
export default [
    {
        text: '侧边栏1',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '文档1', link: `${commonPath}/${viewPath}` },
            { text: '文档2', link: `${commonPath}/${viewPath}/index2` }
        ]
    },
    {
        text: '侧边栏2',
        collapsible: true,
        collapsed: true,
        items: [
            { text: '文档3', link: `${commonPath}/${viewPath}` },
            { text: '文档4', link: `${commonPath}/${viewPath}/index2` }
        ]
    }
]