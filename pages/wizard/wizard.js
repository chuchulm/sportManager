import React, { useState } from 'react'
import { Steps, Button, message, Form, input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Contrasena from './Contrasena';
import Sucursales from './Sucursarles';
import Salas      from './Salas';
import Actividades from './Actividades';
import Membresias from './Membresias';
import Empleados  from './Empleados';




const WizardSteps = () => {

  const { Step } = Steps;

  const steps = [
    {
      title: '',
      content: 'Crea una nueva contraseña',
      component: <Contrasena/>
      
    },
    {
      title: '',
      content: 'Second-content',
      component: <Sucursales/>
    },
    {
      title: '',
      content: 'Last-content',
      component: <Salas/>
    },
    {
      title: '',
      content: 'First-content',
      component: <Actividades/>
    },
    {
      title: '',
      content: 'Second-content',
      component: <Membresias/>
    },
    {
      title: '',
      content: 'Last-content',
      component: <Empleados/>
    },
  ];

  
 const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  
  return (
    <>
     
    

      <div className="contenedor__registro">
        <div className="contenedor__wizard">

        





          <div className="steps">
             <Steps current={current} className="steps">
                  {steps.map(item => (
                <Step  key={item.title} title={item.title}/>
                        
                  ))}
             </Steps>

             <div className="icons-bimate">
                
                  <div className=''><i class="fas fa-map-marker-alt bimate-icon"></i></div>
                  <div className='mr-1'><i class="fas fa-shield-alt  bimate-icon"></i></div>
                  <div className=''><i class="far fa-flag  bimate-icon"></i></div>
                  <div className=''><i class="far fa-list-alt  bimate-icon bimate-icon1 bimate-icon2"></i></div>
                  <div className=''><i class="fas fa-dumbbell bimate-icon bimate-icon1"></i></div>
                  <div className='ml-2'><i class="fas fa-user  bimate-icon bimate-icon1"></i></div>
                  
              
              </div>
             
          </div>
          

          <div className="steps-content">{steps[current].component}</div>

          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button style={{ background: '#da0024', color:'#ffff'}}  shape="round" onClick={() => next()}>
                Siguiente
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button style={{ background: '#da0024', color:'#ffff'}} shape="round" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button type="danger" style={{ margin: '0 8px', background: '#da0024', color:'#ffff'}} shape="round" onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WizardSteps;