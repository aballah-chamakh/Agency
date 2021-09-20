import React from 'react' ;
import search from '../../imgs/search.png' ;
import './why-digital-css.scss' ;

class WhyDigital extends React.Component{
  render(){
    return(
      <div class="why-digital-container">
        <div class="why-digital-img">
                <h1>+60% des tunisiens cherche la phrase "site du vente en ligne" durant cette pondemie</h1>           <img src={search} />
        </div>
           <div class="why-digital-text">
                <h1>+60% des tunisiens cherche la phrase "site du vente en ligne" durant cette pondemie</h1>
                <p>
                    d'aprés le fameux site d'analyste des recherches du moteur "Google Trend" , 60% des tunisiens
                    durant cette periode du corona cherchent la phrase "site du vente en ligne"  , à cause du confinement et le besoin d'achat ,
                    dans ces conditions , un site e-commerce est nécessaire pour développer vrotre commerce

                </p>

           </div>
      </div>
    )
  }
}
export default WhyDigital ;
