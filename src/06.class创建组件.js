import React from 'react'
import ReactDom from 'react-dom'

class Hello extends React.Component{
    //this.props是传入所有属性的一个对象
    constructor(){
        super()
    }
    render(){
        return (
            <h4>父组件-----</h4>
        )
    }
}
class He extends Hello{
    constructor(props){
        super(props)
        this.ID=props.id
    }
    render(){
        return (
        <h4>子组件-----{this.ID}</h4>
        )
    }
}
export default He

/**注释：对组件的使用 ==<Hello></Hello> == 为class Hello创建实例对象
 * 向组件传入参数 == 为组件添加属性
 * 获取组件参数 == this.props
 */