import React from 'react' ;
import web_dev from '../../imgs/web_dev.jpg'
import './frontpage-css.scss' ;

class FrontPage extends React.Component{
  render(){
    return(
        <div id="acceuil" class="front-page-container" style={{backgroundImage: `url(${web_dev})`,backgroundRepeat : 'no-repeat',backgroundSize:'cover',margin:'0px',padding:'0px'}}>
              <div class="layer">
              </div>
              <div class="front-text">
                  <h1>Ne risquez pas le future du votre entreprise durant cette pondemie</h1>
                  <p>et digitaliser votre commerce à travers un site web e-commerce </p>
                  <button>appelez nous</button>
              </div>
        </div>
    )
  }
}
export default FrontPage ;
