import React from 'react'
import ReactDom from 'react-dom'
/**
 * 组件创建的步骤
 * 构造函数的方式要求，render与构造函数平级
 * 执行前改变压缩入口
 */
function Hello(props){
    //props 这个是一个只读的属性不允许修改
    console.log("props",props)
    const myHello =(
        <div>
            <h3>这里是hello组件</h3>
            <h4>{props.name}</h4>
        </div>)
    return myHello
}

//模拟外部传来的属性
const dog={
    name:"cindy",
    age:"14"
}

ReactDom.render(<Hello name={dog.name} ></Hello>,document.getElementById("app"))