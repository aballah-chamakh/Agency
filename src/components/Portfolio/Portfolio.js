import React from 'react' ;
// import basel1 from '../../imgs/portfolio/basel-1.png' ;
import basel1 from '../../imgs/portfolio/basel-1.png' ;
import basel2 from '../../imgs/portfolio/basel-2.png' ;
import basel3 from '../../imgs/portfolio/basel-3.png' ;
import './portfolio-css.scss' ;

class Portfolio extends React.Component{
  render(){
    return(
      <div id="portfolio" class="portfolio-container-back" >
        <div class="portfolio-container">
            <h1>nos type du travail</h1>
            <div class="portfolio-list">
                    <div class="portfolio-item" >
                          <img src="http://xpeedstudio.com/wp/marketo/images/home_list/home_two.jpg" />
                    </div>
                    <div class="portfolio-item" >
                          <img src="http://xpeedstudio.com/wp/marketo/images/watch.jpg" />
                    </div>
                    <div class="portfolio-item" >
                          <img src="http://xpeedstudio.com/wp/marketo/images/shoe.jpg" />
                    </div>
                    <div class="portfolio-item" >
                          <img src={basel1} />
                    </div>
                    <div class="portfolio-item" >
                          <img src={basel2} />
                    </div>
                    <div class="portfolio-item" >
                          <img src={basel3} />
                    </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Portfolio ;
// <div class="portfolio-item" >
//       <img src={basel2} />
// </div>
// <div class="portfolio-item" >
//       <img src={basel3} />
// </div>
