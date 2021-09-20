import React from 'react' ;
import logo from '../../imgs/dolzay2.png'
import './footer-css.scss' ;

class Footer extends React.Component{
  render(){
    return(
      <div id="contact" class="footer-container-back">
          <div  class="footer-container">
              <div class="footer-list">
                    <div class="footer-item-about">
                       <img src={logo} />
                       <p>
                          dolzay est une agence de développement web tunisienne , créer au sein
                          de la pondemie du corona et sa mission principale est de digitaliser
                          les entreprises du commerce à travers un site e-commerce
                          , pour qu'elles peuvent survivre
                          durant cette période .
                       </p>
                    </div>
                    <div class="footer-item-sitemap">
                    <div class="footer-item-sitemap-content">

                       <h1>liens utiles</h1>
                       <ul>
                           <li><a href="#acceuil">Acceuil</a></li>
                           <li><a href="#services">Services</a></li>
                           <li><a href="#portfolio">Portfolio</a></li>
                           <li><a href="#contact">contact</a></li>
                       </ul>
                    </div>
                    </div>
                    <div class="footer-item-contact">
                      <div class="footer-item-contact-content">
                       <h1>contact</h1>
                       <ul>
                            <li><i class="fas fa-phone-alt"></i> 58671414</li>
                            <li><i class="material-icons">email</i> dolzay@gmail.com</li>
                       </ul>
                      </div>
                    </div>
              </div>
              <div class="footer-sm" >
                  <ul>
                      <li><a href="https://www.facebook.com/Dolzay-110165387321253/"><i class="fab fa-facebook-square"></i></a></li>
                      <li><a href=""><i class="fab fa-instagram"></i></a></li>
                      <li><a href=""><i class="fab fa-twitter-square"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/dolzay/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B5BhiJ0b9S9adutSWQKMiXw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_companies-search_srp_result&lici=ky%2FGCH94TieZMss9m%2BbjNA%3D%3D"><i class="fab fa-linkedin	"></i></a></li>
                  </ul>
              </div>

          </div>
          <div class="bottom-footer">
              <p>allright are reserved for dolzay</p>
          </div>
      </div>
    )
  }
}
export default Footer ;
