import React, { useState } from 'react';
import { Space, Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';








const Contrasena = () => {
  const [formValues] = Form.useForm();
  const handleSubmit = (values) => {
    console.log('contrasenas correctas');
  };
  return (
    <div className=" box-contrasena">
      <div className=" caja-contrasena">
      <h1>Crea una nueva contraseña</h1>
      <Form
        name="basic"
        required
        form={formValues}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Contraseña"
          required
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese una contraseña',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label=" Repite Contraseña"
          name="repeatPassword"
          required
          rules={[
            {
              validator: async (obj, value) => {
                if (
                  value &&
                  formValues.getFieldValue('password') &&
                  formValues.getFieldValue('password') !== value
                ) {
                  return Promise.reject(new Error('Las contraseñas deben ser iguales'));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
       
      </Form>
      </div>
     
    </div>
  );
};
export default Contrasena;



















