import { Form, Input, Typography, Button, Space, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { thunkLogin } from '../Slice/authSlice';

const LoginPage = () => {

  const dispatch = useDispatch();
  const { error, status, userInfo } = useSelector(state => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'loggedIn' && userInfo.role === 0) {
      navigate('/');
    }
  }, [error, status, navigate, userInfo])


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').trim().required('Email is required'),
    password: Yup.string()
      .trim()
      .min(7, 'Password is too short')
      .max(20, 'Password is too long')
      .required('Password is required'),
  });

  return (
    <div
      className='Login'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1BBC9B',
      }}
    >
      <Formik
        initialValues={formik.initialValues}
        validationSchema={LoginSchema}
        onSubmit={values => {
          dispatch(thunkLogin({ email: values.email, password: values.password }));
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <div
              className='form'
              style={{
                borderRadius: '15px',
                backgroundColor: '#fff',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: "300px",
                width: "300px",
              }}
            >
              <Typography.Title level={4}>
                Login
              </Typography.Title>
              <Space direction='vertical'>
                <Form labelCol={{ span: 5 }}>
                  <Form.Item
                    style={{width:"250px", height:"30px"}}
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Bạn chưa nhập Username hoặc Email'
                      },
                      { whitespace: true },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className='site-form-item-icon' />}
                      className='input_form'
                      onChange={handleChange('email')}
                      placeholder='Nhập Username hoặc Email'
                    />
                    {errors.email && (
                        <span className="error" style={{color: "red"}}>{errors.email}</span>
                    )}
                  </Form.Item>
                  <Form.Item
                    style={{width:"250px", height:"30px"}}
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: 'Bạn chưa nhập password',
                      },
                      { type: 'string' },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className='site-form-item-icon' />}
                      className='input_form'
                      placeholder='Nhập password'
                      onChange={handleChange('password')}
                    />
                    {errors.password && (
                        <span className="error" style={{color: "red"}}>{errors.password}</span>
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                      <Checkbox color="">Remember me</Checkbox>
                    </Form.Item>
                    <a className='login-form-forgot' style={{color:'#1BBC9B'}} href='$'>
                      Forgot password
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button onClick={handleSubmit}  style={{ backgroundColor: '#1BBC9B', color:"#fff" }} block>
                      Đăng nhập
                    </Button>
                    {
                      error && (
                        <span className="error" style={{color: "red"}}>{error}</span>
                      )
                    }
                  </Form.Item>
                </Form>
              </Space>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginPage;