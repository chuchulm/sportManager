import { useEffect, useState } from 'react';
import { Modal, Button, Input, Tooltip, Select } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { removeError, setError, uiCloseModalSala, uiOpenModalSala } from '../../actions/ui';
import { salaAddNew } from '../../actions/salas';

const ModalScreenSalas = () => {
  const { modalOpenSala, msgError } = useSelector((state) => state.ui);
  const { sede } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset, handleSelectChange] = useForm({
    name: '',
    selectedSede: null,
  });

  const { name, selectedSede } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('name is required'));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  const showModalSala = () => {
    dispatch(uiOpenModalSala());
  };

  // Agregar nueva sala

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      return msgError;
    }

    dispatch(salaAddNew({ ...formValues, id: uuidv4() }));

    reset();

    if (isFormValid()) {
      dispatch(uiCloseModalSala());
      console.log('correcto');
    }

    return null;
  };

  // validaciones

  const handleOk = () => {};

  const handleCancel = () => {
    dispatch(uiCloseModalSala());
  };

  return (
    <>
      <Button
        shape="round"
        onClick={showModalSala}
        style={{ background: '#da0024', color: '#ffff', width: '250px' }}
      >
        Agregar Sala
      </Button>
      <Modal
        visible={modalOpenSala}
        title="Agregar sala"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" shape="round" onClick={handleCancel} style={{ background: '' }}>
            Return
          </Button>,

          <Button
            key="submit"
            shape="round"
            onClick={handleSubmit}
            style={{ background: '#da0024', color: '#ffff' }}
          >
            Enviar
          </Button>,
        ]}
      >
        <div className="container">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">Sede</label>
              <Select
                placeholder="Seleccionar Sede"
                className="form-control"
                value={selectedSede}
                options={sede.data.map((e) => ({ label: e.name, value: e.id }))}
                onChange={(value) => handleSelectChange('selectedSede', value)}
                suffix={
                  <Tooltip title="Campo obligatorio">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />

              {msgError && <div className="sport-alert">Debes agregar una sala!!</div>}
            </div>
            <div className="col-6">
              <label htmlFor="">Nombre de la sala</label>
              <Input
                placeholder=""
                type="text"
                name="name"
                className="form-control"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                suffix={
                  <Tooltip title="Campo obligatorio">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />

              {msgError && <div className="sport-alert">Debes agregar una sala!!</div>}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalScreenSalas;
