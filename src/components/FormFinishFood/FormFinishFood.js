/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//CONTEXT ORDERFOOD
import { OrderFoodContext } from '../../components/Context/OrderFoodContext';
import { CounterContext } from '../../components/Context/CounterContext';

//MATERIAL UI
import { TextField, Button } from '@mui/material'

//COMP
import LoadingComp2 from '../LoadingComp/LoadingComp2';

//CSS
import './FormFinishFood.css'

//FORMIK AND YUP
import * as yup from 'yup';
import {Formik} from 'formik';


const yupSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Por favor, complertar campo'),
    lastName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Por favor, complertar campo'),
    phone: yup.number().required('Por favor, complertar campo'),
    address: yup.string().required('Por favor, complertar campo')
}).required();

const FormFinishFood = () => {
  const [orderFood, setOrderFood, priceTotal, setPriceTotal] = useContext(OrderFoodContext);
  const [generalCounter, setGeneralCounter] = useContext(CounterContext);

  const resetsAll = () =>{
    setOrderFood([]);
    setPriceTotal(0);
    setGeneralCounter(0);
  }

  // Datos de la Venta:
  const [purchaseID, setPurchaseID] = useState('');
  const [sendInf, setSendInf] = useState(0);

  //Funcion para Subir La Compra a la BD 
  const submitHandler = async (values, resetForm) => {
    setSendInf(1);
    setTimeout(()=>{
      setSendInf(2);
    },2000)
    //RELLENO INFORMACION DEL PEDIDO QUE VA EN LA BASE DE DATOS
    let orderClient = Object.assign({}, values);
    orderClient.foods = Object.assign({}, orderFood);;
    orderClient.valueFood = priceTotal;
    const docRef = await addDoc(collection(db, 'purchase'), {
			orderClient,
		});
    setPurchaseID(docRef.id);
    resetForm();
    localStorage.clear();
  };

  return (

    sendInf !== 0 ?
      sendInf === 1 ? 
        <div className='aceptacionCompra'>
          <LoadingComp2/> 
        </div>
      : 
        <div className='aceptacionCompra'>
          <p className='estiloFormCompraConfirmada'>MUCHAS GRACIAS POR SU COMPRA</p>
          <p className='estiloFormCompraConfirmada'>EL CODIGO DE COMPRA ES:{purchaseID}</p> 
          <Link className='botonForm' to = {`/`}> <Button onClick={resetsAll} className='botonInicioForm' sx={{bgcolor:'white', w:30, color:'black'}}> Inicio </Button> </Link>
        </div>
    :
      <div className='form'>
        <h2>CONFIRMACION COMPRA</h2>
        <Formik initialValues ={{firstName:'', lastName:'',phone:'',address:''}} 
          onSubmit={(values, {resetForm}) => submitHandler(values,resetForm)}
          validationSchema={yupSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit} className='acomodoFormulario'>
              <TextField
                name='firstName'
                placeholder='Ingresar Nombre'
                variant='outlined'
                sx={{mt:0, bgcolor:'white', borderRadius:5}}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
                {errors.firstName && touched.firstName && errors.firstName}
              <TextField
                name='lastName'
                placeholder='Ingresar Apellido'
                variant='outlined'
                sx={{mt:2, bgcolor:'white', borderRadius:5}}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                type='text'
              />
                {errors.lastName && touched.lastName && errors.lastName}
              <TextField
                name='phone'
                placeholder='Ingresar Telefono de contacto'
                variant='outlined'
                sx={{mt:2, bgcolor:'white', borderRadius:5}}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                type='number'
              />
              {errors.phone && touched.phone && errors.phone}
              <TextField
                name='address'
                placeholder='Ingresar Direccion'
                variant='outlined'
                sx={{mt:2, bgcolor:'white', borderRadius:5}}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {errors.address && touched.address && errors.address}
              <Button
                disabled={!(isValid && dirty)}
                type='submit'
                sx={{mt:2, bgcolor:'white',color:'black', borderRadius:5}}
              >
                Enviar Datos
              </Button>
              <p className='estiloFormCompraNOConfirmada'>Completar formulario para confirmación de compra</p>
            </form>
            )}
        </Formik>
      </div>
  );
};

export default FormFinishFood