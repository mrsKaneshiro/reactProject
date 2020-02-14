/*压缩前的JS入口文件*/
import React from 'react'
import ReactDom from 'react-dom'

console.log('hhhh ngixe')
/**在JS中创建虚拟reactDom并渲染的步骤
 * 1. 安装react依赖：react；react-dom；
 * 2. 在需要的JS中引入这两包，inport
 * 3. 创建虚拟dom  React.createElement("标签"，{属性对象}，"子节点")
 * 4. 渲染到页面 ReactDom.render("需要渲染的DOM","容器")
 * ---------中控里对react的操作都是从JS里渲染的,
 *          xxx.view.js,模板没有单独写都是在这个文件中写的,
 *          页面逻辑都是用react处理，数据用的JS5的collection
 * ---------权限系统是用的JSX
 */
const reactH5 = React.createElement("h5",{"id":"1","title":"gaoxintest"},'这是一个h5')
//如果渲染JSX的语法，必须配置babel 转换语法。
const reactJsx = (
    <div>
        <div>这部分使用JSX</div>
        <div>使用babel解析的</div>
    </div>
)
ReactDom.render(reactJsx,document.getElementById("app"))
