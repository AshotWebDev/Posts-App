import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';
function RegistrPage() {
    
    const  validationSchema = yup.object().shape({
        name: yup.string().required('Պարտադիր գրել անուն'),
        lastName: yup.string().required('Պարտադիր գրել ազգանուն'),
        email: yup.string().email('Գրե՜ք ճիշտ Էլ. հասցե').required('Պարտադիր գրել Էլ. հասցե'),
        password: yup.string()
        .min(6, 'Գաղտնաբառը ամենաքիչ պետք է պարունակի 6 նիշ')
        .max(10, 'Գաղտնաբառը ամենաշաատը պետք է պարունակի 10 նիշ')
        .matches(/[0-9]/, 'Գաղտնաբառը պետք է պարունակի թվանշան')
        .matches(/[a-z]/, 'Գաղտնաբառը պետք է պարունակի  Փոքրատառ')
        .matches(/[A-Z]/, 'Գաղտնաբառը պետք է պարունակի  Մեծատառ')
        .matches(/[^\w]/, 'Գաղտնաբառը պետք է պարունակի  կետադրաական նշան')
        .required('Պարտադիր գրել գաղտնաբառը'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Գաղտնաբառները չեն համնկնում').required('Պարտադիր գրել գաղտնաբառը'),

    })
    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}

            onSubmit={(values, {resetForm})=>{
                
            }}

            validateOnBlur

            validationSchema={validationSchema}
        >
        
        {
            ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                <form className="reg-form"  onSubmit={handleSubmit}>
                    <h1>Registre</h1>
                    <div className="name-inp">
                        <input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.name && errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="lastName-inp">
                        <input type="text" name="lastName" placeholder="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
                    </div>

                    <div className="email-inp">
                        <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.email && errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="password-inp">
                        <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password && errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="confirmPassword-inp">
                        <input type="password" name="confirmPassword" placeholder="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.confirmPassword && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>

                    <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button>
                </form>
            )
        }
        </Formik>
    )
}

export default RegistrPage