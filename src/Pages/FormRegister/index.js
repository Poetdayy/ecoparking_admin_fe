
import { PlusOutlined } from '@ant-design/icons';
import {Form, Input, Typography, Button, Space, Upload} from 'antd';
import { useState } from 'react';

const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const App = () => (
  <div className='app'>
    <Typography.Title level={4}>Form Đăng Ký Bãi Đỗ Xe</Typography.Title> 
    <div className='form'>
        <Space size={20} direction="vertical"> 
            <Form labelCol={{span:5}}>
                <Form.Item 
                name="fullName" 
                label="Họ Tên"
                rules ={[
                    {
                        required: true,
                        message: "Bạn chưa nhập họ tên"
                    },
                    {whitespace: true},
                ]}
                hasFeedback
                >
                <Input className='input_form' placeholder="Nhập tên chủ bãi xe"></Input>
                </Form.Item>

                <Form.Item name="email" label="Email"
                rules ={[
                    {
                        required: true,
                        message: "Bạn chưa nhập email"
                    },
                    {type: "email"},
                ]}
                hasFeedback>
                <Input className='input_form' placeholder="Nhập email"></Input>
                </Form.Item>

                <Form.Item name="phone" label="SĐT"rules ={[
                    {
                        required: true,
                        message: "Bạn chưa nhập số điện thoại"
                    },
                    {whitespace: true},
                ]}
                hasFeedback>
                <Input className='input_form' placeholder="Nhập số điện thoại"></Input>
                </Form.Item>

                <Form.Item name="address" label="Địa Chỉ"
                rules ={[
                    {
                        required: true,
                        message: "Bạn chưa nhập địa chỉ"
                    },
                    {whitespace: true},
                ]}
                hasFeedback>
                <Input className='input_form' placeholder="Nhập địa chỉ bãi đỗ"></Input>
                </Form.Item>

                <Form.Item label="Mô Tả">
                <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Ảnh" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Tải Lên</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item>
                <Button block className='button' type="primary">Gửi</Button>
                </Form.Item>
            </Form>
        </Space>     
    </div>
  </div>
);


export default App;
