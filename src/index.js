import React from 'react'
import ReactDom from 'react-dom'
import Hello from '@/Hello'
import './03.class使用.js' //没有暴露的对象直接import文件即可
import  {Button} from 'antd'

//import Antd from 'antd'
//var Button = Antd.Button

/*分割线，以下部分是引入测试的页面--------------------------------------------------- */
const mainPageJsx=(
    <div>
        <Hello></Hello>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
    </div>
)
/*分割线--------------------------------------------------------------------------- */
ReactDom.render(mainPageJsx, document.getElementById("app"));

