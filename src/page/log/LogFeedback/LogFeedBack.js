import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';
import './logfeedback.css'

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};


class  LogFeedback extends Component {


    render() {
        return (
            <div>
                <Form>
                    <div className="div1">
                        <span><h1>日志反馈</h1></span>
                    </div>
                    <div className="formitem">
                    <FormItem
                        {...formItemLayout}
                        label="title"
                        // validateStatus="error"
                        // help="Should be combination of numbers & alphabets"
                    >
                        <Input placeholder="please input your title" id="title"/>
                    </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="description" >

                            <Input
                                type='textarea'
                                placeholder="please input you description"
                                id="description"
                                row='6'
                                col='6'

                                autosize={{ minRows: 12, minCols: 12 }}
                            />
                        </FormItem>

                        <FormItem
                         wrapperCol={{ span: 12, offset: 5}}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>

                        </FormItem>
                    </div>

                </Form>

            </div>
        );
    }
}
const FeedBack = Form.create({})(LogFeedback);

export default FeedBack;


// ReactDOM.render(
//     <Form>
//         <FormItem
//             {...formItemLayout}
//             label="Fail"
//             validateStatus="error"
//             help="Should be combination of numbers & alphabets"
//         >
//             <Input placeholder="unavailable choice" id="error" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Warning"
//             validateStatus="warning"
//         >
//             <Input placeholder="Warning" id="warning" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Validating"
//             hasFeedback
//             validateStatus="validating"
//             help="The information is being validated..."
//         >
//             <Input placeholder="I'm the content is being validated" id="validating" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Success"
//             hasFeedback
//             validateStatus="success"
//         >
//             <Input placeholder="I'm the content" id="success" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Warning"
//             hasFeedback
//             validateStatus="warning"
//         >
//             <Input placeholder="Warning" id="warning" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Fail"
//             hasFeedback
//             validateStatus="error"
//             help="Should be combination of numbers & alphabets"
//         >
//             <Input placeholder="unavailable choice" id="error" />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Success"
//             hasFeedback
//             validateStatus="success"
//         >
//             <DatePicker style={{ width: '100%' }} />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Warning"
//             hasFeedback
//             validateStatus="warning"
//         >
//             <TimePicker style={{ width: '100%' }} />
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Error"
//             hasFeedback
//             validateStatus="error"
//         >
//             <Select defaultValue="1">
//                 <Option value="1">Option 1</Option>
//                 <Option value="2">Option 2</Option>
//                 <Option value="3">Option 3</Option>
//             </Select>
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Validating"
//             hasFeedback
//             validateStatus="validating"
//             help="The information is being validated..."
//         >
//             <Cascader defaultValue={['1']} options={[]} />
//         </FormItem>
//
//         <FormItem
//             label="inline"
//             {...formItemLayout}
//         >
//             <Col span={11}>
//                 <FormItem validateStatus="error" help="Please select the correct date">
//                     <DatePicker />
//                 </FormItem>
//             </Col>
//             <Col span={2}>
//         <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
//           -
//         </span>
//             </Col>
//             <Col span={11}>
//                 <FormItem>
//                     <DatePicker />
//                 </FormItem>
//             </Col>
//         </FormItem>
//
//         <FormItem
//             {...formItemLayout}
//             label="Success"
//             hasFeedback
//             validateStatus="success"
//         >
//             <InputNumber style={{ width: '100%' }} />
//         </FormItem>
//     </Form>,
//     mountNode);
