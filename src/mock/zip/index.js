import Mock from 'mockjs'
//zip数据
Mock.mock('/zip/list', 'get',  {
        code: 0,
        'result|20': [{
            id: '@increment(1)',
            uid: '@guid',
            author: '@cname',
            readNum: '@integer(1,10000)',
            downNum:'@integer(100,1000)',
            title: '@cword(5,15)',
            content:'@cword(30)',
            level:'@integer(1,3)',
            imgurl:'@dataImage("50x50","zip")',
            time: '@date(yyyy-MM-dd hh:mm:ss)',
        }],
        total:20,
        message: '获取数据成功'
    }
)