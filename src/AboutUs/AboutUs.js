import React from 'react';
import Footer from '../Footer/Footer';

const AboutUs = () => {

  const list1 = ['Lorem ipsum dolor sit amet', 'consectetuer adipiscing elit. Aenean', 'commodo ligula eget dolor. Aenean'];
  const list2 = ['Lorem ipsum dolor sit amet', 'consectetuer adipiscing elit. Aenean', 'commodo ligula eget dolor. Aenean'];

  return (
    <div>
      <section className=' img1 overlay background-center text-white' data-overlay={6} data-overlay-color={'dark'}>
        <div className='container'>
          <div className=' text-center'>
            <h1 className='m-0'>Building better teams</h1>
            <span>An opportunity to introduce the major benefits of your product and set the scene for what's to come</span>
          </div>
        </div>
      </section>
      <section className='m-5'>
        <div className='container'>
          <h2>Know About our Company.</h2>
          <div className='row'>
            <div className='col-lg-7 col-md-6'>
              <div className='row'>
                <div className='col-12'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ipsa molestias qui perspiciatis consectetur voluptas ratione quas optio natus Lorem ipsum
                    , dolor sit amet consectetur adipisicing elit. Eos mollitia architecto voluptatum. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <ul className='list list-icon'>
                    {list1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className='col-sm-6'>
                  <ul className='list list-icon'>
                    {list2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <h5>01. Discussion</h5>
                <p>Lorem ipsum dolor sit amet consectetur adi pisicing elit.
                  Id, quas? Ratione magnam pariatur consequuturn.
                </p>
              </div>
              <div>
                <h5>02. Making</h5>
                <p>Lorem ipsum dolor sit amet consectetur adi pisicing elit.
                  Id, quas? Ratione magnam pariatur consequuturn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default AboutUs;
