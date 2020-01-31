//webpack 构建的命令npx webpack
//向外暴露模块
module.exports ={
    entry:{
        //设置入口也可以不用设置; ./ 当前目录下找到src
        main:'./src/index.js'
    },
    output:{
        //这个指定与不指定都是被压缩到了这个文件下面的
        filename:'./main.js'
    },
    //设置环境是开发还是生产
    mode: 'development' , //'production',
}