import Mock from 'mockjs'
const { excelData } = Mock.mock({
    'excelData|30': [
        {
            id: '@increment(1)',
            uid: '@guid',
            author: '@cname',
            readNum: '@integer(1,10000)',
            title: '@cword(5,20)',
            importance: '@integer(3,10)',
            content:'@cword(20,50)',
            'type|1': ['CN', 'US', 'JP', 'EU'],
            'status': '@pick(success,warning,info,danger)',
            time: '@date(yyyy-MM-dd hh:mm:ss)',
        }
    ]
})
Mock.mock('/excel/list', 'get', () => {
    return {
        code: 0,
        result: excelData,
        total: excelData.length,
        message: '获取数据成功'
    }
})