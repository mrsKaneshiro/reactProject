import React from 'react'
import ReactDom from 'react-dom'
import {Form, Button, Input, Row } from 'antd'
import $ from 'jquery'

class mainPage extends React.Component{
    constructor(props){
        super(props)
    }

    onCheck(){
        //获取表单的输入
        var fieldsValue = this.props.form.getFieldsValue();
        var inputNuber = fieldsValue.inputNuber
        console.log(inputNuber)
    }

    validateInput(rule, value, callback){
        //每次输入的改变,都会调用这个函数
        //callback 提示渲染到页面
        if (value.indexOf("GGG") > -1 || value.indexOf("ggg") > -1){
            callback("不需要输入GGG  或者 ggg");
        }else{
            callback();
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formBox = (
            <Form  name="dynamic_rule">
                <Row>
                    <Form.Item style={{width:400,marginBottom:0}}>
                        {
                            getFieldDecorator("inputNuber",{
                                validateFirst: true,
                                rules: [
                                    { required: true, message: '请输入数字ID' },
                                    { validator: $.proxy(this.validateInput, this) },
                                ],
                            })(<Input style={{width:200}} placeholder="Please input number" />)
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={$.proxy(this.onCheck, this)}>
                        Check
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        )
        return formBox
    }
}

//将mainPage组件经过 Form.create()包装一下，使得这个组件自带form属性
const WrappedForm = Form.create()(mainPage);

export default WrappedForm;