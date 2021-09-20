import React from 'react' ;
import './services-css.scss' ;
import custom from '../../imgs/services/custom.png' ;
import maintenance from '../../imgs/services/maintenance.png' ;
import vitrine from '../../imgs/services/vitrine.png' ;
import ecom from '../../imgs/services/online-shop.png' ;

class Services extends React.Component{
    state = {
      services : [
                {
                  img : vitrine ,
                  title : 'site vitrine' ,
                  description : "est un site web qui présente les produit et services de votre activité, sans vendre en ligne "
                },
                {
                  img : ecom ,
                  title : 'site e-commerce' ,
                  description : "une plateforme qui permet à un marchand de vendre ses produits sur internet sans problème de localisation"
                },
                {
                  img : custom ,
                  title : 'site sur mesure' ,
                  description : "une plateforme personnalisée selon le besoin du votre entreprise avec des fonctionalités illimitées "
                },
                {
                  img : maintenance ,
                  title : 'maintenance' ,
                  description : "pour fixer les problemes de votre site web existant ou ajouter des nouveaux fonctionalité "
                }
      ]
    }
    render(){
      return(
        <div id="services" class="services-container" >
            <h1>Nos Services</h1>
            <div class="services-list">
                  {this.state.services.map(service=>{
                      return(
                        <div class="service-item">
                            <img src={service.img} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                      )
                  })
                  }
            </div>
        </div>
      )
    }
}
export default Services ;
