import React from 'react' ;
import how_we_work from '../../imgs/HowWeWork.png' ;
import './howwework-css.scss' ;

class HowWeWork extends React.Component {
  render(){
    return(
      <div class="how-we-work-container-back">
          <div class="how-we-work-container">
              <div class="how-we-work-text">
                  <h1>Notre procédure du travail</h1>
                  <div class="steps-list">
                      <h4><i class="far fa-arrow-alt-circle-right"></i> nous fixons un rendez-vous</h4>
                      <h4><i class="far fa-arrow-alt-circle-right"></i> nous discutons comment on va développer votre site web</h4>
                      <h4><i class="far fa-arrow-alt-circle-right"></i> nous livrons le site web</h4>
                  </div>
              </div>
              <div class="how-we-work-img">
                  <img src={how_we_work} />
                  <div class="steps-list">
                  <h4><i class="far fa-arrow-alt-circle-right"></i> nous fixons un rendez-vous</h4>
                  <h4><i class="far fa-arrow-alt-circle-right"></i> nous discutons comment on va développer votre site web</h4>
                  <h4><i class="far fa-arrow-alt-circle-right"></i> nous livrons le site web</h4>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default HowWeWork ;
