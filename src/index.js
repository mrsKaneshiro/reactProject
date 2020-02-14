import React from 'react'
import ReactDom from 'react-dom'
import Hello from '@/Hello'
import './03.class使用.js' //没有暴露的对象直接import文件即可

/*分割线，以下部分是引入测试的页面--------------------------------------------------- */


ReactDom.render(<Hello></Hello>,document.getElementById("app"))
