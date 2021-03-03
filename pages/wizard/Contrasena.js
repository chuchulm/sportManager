import React, { useState } from 'react'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';



const Contrasena = ( param ) => {

    const [ loginPassword, setLoginPassword ] = useState({
        password:'',
        repeatPassword:''
    });
    const [passwordError, setPasswordError] = useState(false);
    

    
    
   const { password, repeatPassword } = loginPassword

 
 
 
 const handleInputChange = ({ target, value }) => {

    
    setLoginPassword({

        [ target.name ]: target.value

        
    })


    if(!password === repeatPassword) {
        
        setPasswordError(true)

    }else if( value < 6 ){
        setPasswordError(true);
                  
        }else{
            setPasswordError(false);
            setLoginPassword(value)
        }
   }


    

    



    const handleSubmit = (e) =>{
        e.preventDefault();
      
    
    
    }




    return (
        <div className=''>
            
            <h1>Crea una nueva contraseña</h1>

            <form onSubmit={ handleSubmit }>
                <h3 className='div-contasena'>Contraseña</h3>
                    <input
                    type="password"
                    name="password"
                    className={ param ? "input-error" : "regular-input"}
                    placeholder=""
                    value={ password }
                    autoComplete="off"
                    onChange={ handleInputChange }
                    param = {passwordError}
                    required pattern=" "
                    title="El número de referencia consta de 3 letras mayúsculas y 4 dígitos."
                    />
                
                <h3 className='div-contasena mt-2'>Repite la contraseña</h3>
                    <input
                      type="password"
                      name="repeatPassword"
                      className={ param ? "input-error" : "regular-input"}
                      placeholder=""
                      value={ repeatPassword }
                      autoComplete="off"
                      onChange={ handleInputChange }
                      param = {passwordError}
                    />
            </form>
 

           


           
        </div>
    )
}
export default Contrasena;