import React from 'react'
import ReactDom from 'react-dom'
import Collection from './common.model'
import $ from "jquery"
var collection =new Collection()
class Hello extends React.Component{
    //this.props是传入所有属性的一个对象
    constructor(propsF){
        super(propsF)
        this.state={
            title:""
        }
    }
    componentDidMount(){

    }
    render(){
        return (
        <h4>Hello----组件-----{this.props.id}---TITLE:{this.state.title}</h4>
        )
    }
}
class Hi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:""
        }
    }
    componentDidMount(){
        this.setState({
            data: this.props.title
        })
        collection.on("success",$.proxy(this.success,this))
        console.log(collection)
    }
    success(){
        console.log("success")
    }
    componentWillMount(){
        collection.off("success") 
    }
    render(){
        return (
        <div>
            <h4>Hi----组件-----{this.props.id}----{this.state.data}</h4>
        </div>
        
        )
    }
}
class zuhe extends React.Component{
    
    render(){
       return( <div>
            <Hello id="hello"></Hello>
            <Hi id="hi" title="你好呀"></Hi>
        </div>)
    }
}
export default zuhe

/**注释：对组件的使用 ==<Hello></Hello> == 为class Hello创建实例对象
 * 向组件传入参数 == 为组件添加属性
 * 获取组件参数 == this.props
 */