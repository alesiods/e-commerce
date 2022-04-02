import React, { useState } from 'react'

const Form = (addBuyer) => {

    const [form, setForm] = useState({ nombre: '', apellido: '', telefono: '', email: '' })
    

    const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
    console.log(e.target.value);
    }


  return (
                                <form>
                                    <div className='row'>
                                    <div className='col-6'>
                                        <input 
                                        value={form.nombre}
                                        name='nombre' 
                                        type="text" 
                                        placeholder='Nombre' 
                                        className="form-control m-3"
                                        onChange={handleChange}/> 
                                    </div>
                                    <div className='col-6'>
                                        <input 
                                        value={form.apellido} 
                                        name='apellido' 
                                        type="text" 
                                        placeholder='Apellido' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/>
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-6'>
                                        <input 
                                        value={form.telefono}
                                        name='telefono' 
                                        type="text" 
                                        placeholder='Telefono' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/>
                                    </div>
                                    <div className='col-6'>
                                        <input 
                                        value={form.email}
                                        name='email' 
                                        type="email" 
                                        placeholder='Email' 
                                        className="form-control m-3" 
                                        onChange={handleChange}/> 
                                    </div>
                                    </div>
                                
                                    </form>
                                
  )
}

export default Form