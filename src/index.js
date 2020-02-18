import React from 'react'
import ReactDom from 'react-dom'
import Hello from './06.class创建组件' //没有暴露的对象直接import文件即可
import  {Button} from 'antd'

//import Antd from 'antd'
//var Button = Antd.Button

/*分割线，以下部分是引入测试的页面--------------------------------------------------- */
const mainPageJsx=(
    <div>
        <Hello name="传入属性" id="123"></Hello>
    </div>
)
/*分割线--------------------------------------------------------------------------- */
ReactDom.render(mainPageJsx, document.getElementById("app"));

