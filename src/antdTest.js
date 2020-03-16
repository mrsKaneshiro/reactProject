import { Form } from 'antd';
import { Input } from 'antd';

import React from 'react';
//如果想改变 Table 组件的样式，可以用一个div 嵌套table 

//引入子组件
const { TextArea } = Input;
const { FormItem }  = Form 

class App extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      var Form =  (<Form>
                      <FormItem>
                        {getFieldDecorator('setUserId')(
                            <TextArea style={{ width: 380, height:250 }} rows={10} placeholder="最多录入1000条，每行录入一条" />
                        )}
                        </FormItem>
                  </Form>)
      return Form
    }
}

export default App