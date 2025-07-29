import Mock from 'mockjs'


export default [{
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response: (req,res) => {
        // ?keyword=蔡徐坤
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10) + 1;
        let list = [];
        for(let i = 0; i < num; i++){
            // 随机内容
            const randomData = Mock.mock({
                title: '@ctitle(3,6)'
            })
            console.log(randomData);
            list.push(`${randomData.title}${keyword}`);
        }

        return {
            code: 0,
            data: list
        }
    }
},
{
    url: '/api/hotlist',
    method: 'get',
    timeout: 1000,
    response: (req,res) => {
        return {
            code: 0,
            data: [{
                id: '101',
                city: '北京'
            },{
                id: '102',
                city: '上海'
            },{
                id: '103',
                city: '广州'
            }]
        }
    }
},
{
    url: '/api/detail/:id',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        const randomData = Mock.mock({
            title: '@ctitle(5, 10)',
            price: '@integer(60, 100)',
            desc: '@cparagraph(10,30)',
            images: [
                {
                    url: '@image(300x200,@color, #fff, 图片)',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: '@image(300x200,@color, #fff, 图片)',
                    alt: '@ctitle(5, 10)'
                },
                {
                    url: '@image(300x200,@color, #fff, 图片)',
                    alt: '@ctitle(5, 10)'
                },
            ]
        })

        return {
            code: 0,
            data: randomData
        }
    }
}
]