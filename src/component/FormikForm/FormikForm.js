import React, { Component } from 'react'
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

export default class FormikForm extends Component {
  render() {
    return (
      <div className="FormikForm">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
