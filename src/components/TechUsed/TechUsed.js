import React from 'react' ;
import './techused-css.scss' ;
import dj from '../../imgs/techs/dj.jpg' ;
import js from '../../imgs/techs/js.png' ;
import node from '../../imgs/techs/node.jpg' ;
import py from '../../imgs/techs/py.png' ;
import react from '../../imgs/techs/react.png' ;
import vue from '../../imgs/techs/vue.jpg' ;
import wc from '../../imgs/techs/wc.png' ;
import wp from '../../imgs/techs/wp.png' ;

class UsedTech extends React.Component {

      state = {
        tech_list :[
                  {img : wp ,name : 'wordpress'},
                  {img : wc ,name : 'woocomerce'},
                  {img : dj ,name : 'django'},
                  {img : py ,name : 'python'},
                  {img : js ,name : 'jvascript'},
                  {img : node ,name : 'node js'},
                  {img : react ,name : 'react js'},
                  {img : vue ,name : 'vue js'},
      ]
      }
      render(){
        return(
            <div class="tech-container-back">
              <div class="tech-container">
                <div class="tech-text" >
                    <h1>nos technologie</h1>
                    <p>
                        En Dolzay on utilise les modernes technologies du developement web
                        qui sont créer et même adopter dans le coeur des grandes entreprises du tech
                        comme : facebook , instagram , netflix , Airbnb ... , pour
                        vous garantir la qualité du dévelopement de votre platform digitale
                    </p>
                </div>
                <div class="tech-list">
                    {this.state.tech_list.map(tech=>{
                      return(
                        <div class="tech-item">
                            <img src={tech.img} />
                            <h3>{tech.name}</h3>
                        </div>
                      )
                    })
                    }
                </div>
            </div>
            </div>
        )
      }
}
export default UsedTech ;
