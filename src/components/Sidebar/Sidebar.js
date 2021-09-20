import React from 'react' ;
import './sidebar-css.scss' ;

class Sidebar extends React.Component {
  render(){

    return(
      <div class="sidebar">
          <ul>
              <li><a href="#acceuil" onClick={this.props.toggleSidebar}>Acceuil</a></li>
              <li><a href="#services" onClick={this.props.toggleSidebar}>Services</a></li>
              <li><a href="#portfolio" onClick={this.props.toggleSidebar}>Portfolio</a></li>
              <li><a href="#contact" onClick={this.props.toggleSidebar}>contact</a></li>
          </ul>
      </div>
    )
  }
}
export default Sidebar ;
