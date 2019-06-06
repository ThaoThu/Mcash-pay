import React, { Component } from 'react'
import { Row, Col ,Carousel} from 'antd';
import navBg from '../assets/images/background_banner.png'
import './styles/getstart.less'
export default class GetStart extends Component {
  render() {
    return (
      <div className="get-start__wrapper d-flex align-items-center" style={{backgroundImage:`url(${navBg})`, backgroundSize:'cover',backgroundPosition:'center center'}}>
          <div className="container">
              <div className="row ">
                  <div className="col-md-6 get-start__text">
                        <h3 className="get-start__title color-white mt-30 ">
                                    Your Trust Cryptp Payment
                        </h3>
                        <div className="get-start__content color-white mt-20">
                            <p>Empower your business with borderless payment method</p>
                            <p>Start accepting crytocurrency today</p>
                            <button className="get-start__btn btn color-white  mt-20 mb-20">Get Started</button>
                        </div>
                  </div>
                  {/* <div className="col-md-6 get-start__slide ">
                        
                           <div id="carouselId" className="carousel slide" data-ride="carousel">
                               <ol className="carousel-indicators">
                                   <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                                   <li data-target="#carouselId" data-slide-to="1"></li>
                                   <li data-target="#carouselId" data-slide-to="2"></li>
                               </ol>
                               <div className="carousel-inner" role="listbox">
                                   <div className="carousel-item active">
                                       <img src="https://picsum.photos/500/300" alt="First slide" />
                                   </div>
                                   <div className="carousel-item">
                                        <img src="https://picsum.photos/500/300" alt="First slide" />
                                   </div>
                                   <div className="carousel-item">
                                        <img src="https://picsum.photos/500/300" alt="First slide" />
                                   </div>
                               </div>
                              
                           </div>

                    

                  </div> */}
              </div>
          </div>
      </div>
    )
  }
}
