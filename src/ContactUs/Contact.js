import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import {Form_Field , ValidationField} from '../ContactUs/Constant'
import { Form,Formik,ErrorMessage,Field} from 'formik'
import E404 from './E404'

 
const Contact = () => {

  const [isError, setIsError] = useState(false);

  const openNewPage = () => {
    console.log("this is onepage");

    //   const newPageURL = 'https://www.npmjs.com/package/yup';

    // window.open(newPageURL, '_blank');
  }

  // const openNewPage = () => {
  //   const filePath = 'E:\CodeNG\Hospitania\my-app\src\ContactUs\E404.js'; // Replace with the actual path to your local file
  //   const link = document.createElement('a');
  //   link.href = filePath;
  //   link.download = 'E404.js'; // Set the desired file name
  //   link.click();
  // };
  
  return (
    <div>
      <section className=' img1 overlay background-center text-white' data-overlay={6} data-overlay-color={'dark'}>
        <div className='container'>
          <div className=' text-center'>
            <h1 className='mb-1'>Building better teams</h1>
            <span>An opportunity to introduce the major benefits of your product and set the scene for what's to come</span>
          </div>
        </div>
      </section>
      <section className="pt-5 pt-md-7">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <h3 className="m-b10 text-uppercase">Get In Touch</h3>
              <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ut hic voluptatibus unde quam veritatis quae velit aperiam.
                Voluptatem laboriosam odio nulla, hic eius porro recusandae,
                nisi non quae nihil unde!
              </p><hr />
              <p className="m-b40 text">25, Lomonosova<br /> St. Moscow,<br />665087
              </p>
              <p className="text p-sm-b60">
                <strong>E:</strong> info@email.com<br />
                <strong>P:</strong> +01 12345 67890<br />
              </p>
            </div>  
            <div className='col-lg-6'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114041.02049143793!2d88.3612319145676!3d26.71941404416647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441dcd%3A0xdeb5c4702063edff!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1631501341871!5m2!1sen!2sin" width='100%' height='300'  loading="lazy" style={{border:'0px'}}>
              </iframe>
            </div>
          </div>
          <div className="row mt">
            <div className="col-lg-8 ">
              <div className='form'>
                <Formik initialValues={Form_Field}
                  validationSchema={ValidationField}>
                  <Form>
                    <div className="row">
                      <div className="col-sm-6">
                        <Field type="text" name="name" placeholder="Name" className='form-control'/>
                        <ErrorMessage name='name' render={msg => <div className='error'>{msg}</div>} /> 

                        <Field type="email" name="email" placeholder="Email" className='form-control'/>
                        <ErrorMessage name='email' render={msg => <div className='error'>{msg}</div>}></ErrorMessage>
                      </div>
                      <div className="col-sm-6">
                        <Field type="text" name="subject" placeholder="Subject" className='form-control'/>
                        <ErrorMessage name='subject' render={msg => <div className='error'>{msg}</div>}></ErrorMessage>

                        <Field type="number" name="phone" placeholder="Phone"className='form-control'/>
                        <ErrorMessage name='phone' render={msg => <div className='error'>{msg}</div>}></ErrorMessage>
                      </div>
                      <div className="col-sm-12 ">
                        <Field type="text" name="texthere" placeholder="Text Here" className='form-control'/>
                        <ErrorMessage name='texthere' render={msg => <div className='error'>{msg}</div>}></ErrorMessage>
                      </div> 
                      <div className="col-sm-12 mt">
                      <button type="submit" onClick={openNewPage}>SEND MESSAGE</button>                      </div>
                    </div> 
                  </Form>
                  
                </Formik>
                {isError && <E404 />}
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* <Footer/> */}
    </div>
  )
}

export default Contact;