import React from 'react'
import { Form, Input, Checkbox, Button, message, Icon } from 'antd'
import createHistory from 'history/createHashHistory'
import * as authAction from '../../actions/auth'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Register from '../../page/register/register';


// import './index.less'
import './login.css'
const FormItem = Form.Item;
const history = createHistory();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    }
  }

  handleSubmit = (e) => {
    const { authAction } = this.props;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    let name = this.props.form.getFieldsValue().userName;
    let pass = this.props.form.getFieldsValue().password;
    if (name === 'admin' && pass === '123456') {
      // 表单的路由处理
      history.push('/app/index');
      authAction.authenticate(true);
      setTimeout(() => {this.setState({ redirectToReferrer: true })}, 100);
    } else {
      message.info('用户名或密码错误');
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    return (
      <div className='login'>
        <div className='loginForm'>
          <div className='logo'>
            <h1>react</h1>
          </div>
          <div className="loginWrap">
            <Form className='form' onSubmit={this.handleSubmit}>
              <FormItem>
                {
                  getFieldDecorator('userName', {
                    rules: [{required: true, message: 'Please input your username!'}]
                  })
                  (
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username: admin" />
                  )
                }
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password: 123456" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                 Or <a href="/app/page/register">register now!</a>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  authAction: bindActionCreators(authAction, dispatch),
  dispatch: dispatch
})

let Loging = Form.create()(Login)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loging)