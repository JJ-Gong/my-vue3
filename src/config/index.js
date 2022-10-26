/**
 * 环境配置文件
 * 开发环境
 * 测试环境
 * 线上环境
 */

const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/5e1213ee424d9b3c782e6f9513fbcca2/api',
    },
    test:{
        baseApi:'/test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/5e1213ee424d9b3c782e6f9513fbcca2/api',
    },
    pro:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/5e1213ee424d9b3c782e6f9513fbcca2/api',
    },
}

export default{
    
    env,
    // 总的mock开关
    mock:true,
    ...EnvConfig[env]
}