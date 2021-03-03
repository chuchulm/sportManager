import { useEffect, useState } from "react";
import { Modal, Button, Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useForm } from "../../hooks/useForm";





const ModalScreenSalas = ({ setSala1, showModal2, onClose1 }) => {

  const [state, setState] = useState({loading: false, visible: false,});

  const [formValues, handleInputChange, reset ] = useForm({
      name:'',
      
  });

  const { name } = formValues;


  useEffect(() => {
    setState({...state, visible: showModal2})
  },[showModal2])

  


  const handleSubmit =(e) => {
    e.preventDefault();

    

    setSala1(name);

    setState({ loading: true });
    
  }


  const showModal = () => {
    setState({
      visible: true,
    });
    
    
  };

  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
     setState({ visible: false });
     onClose1()
  };

  
  const { visible, loading } = state;


  


    return (
      <>
       
         

        <Button  shape="round" onClick={showModal} style={{background: '#da0024', color: '#ffff', width: '250px'}}>
          Agregar sede
        </Button>

        <Modal
          visible={visible}
          title="Agregar sala"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[

        <Button key="back" shape="round" onClick={handleCancel} style={{background: ''}}>
          Return
        </Button>,
        
        <Button key="submit" shape="round" loading={loading} onClick={handleSubmit} style={{background: '#da0024', color: '#ffff'}} >
          Submit
        </Button>,
          ]}
        >


          <div className="container">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">Sala</label>
                <Input
                 placeholder=""
                 type="text"
                 name="name"
                 className="form-control"
                 autoComplete="off"
                 value={ name }
                 onChange={ handleInputChange }
                 
                 suffix={
                 <Tooltip title="Campo obligatorio">
                   <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                 </Tooltip>
                 }
                />     
      
              </div>
            </div>
          </div>

          
         
        </Modal>
      </>
    );
  
}

export default ModalScreenSalas; 

