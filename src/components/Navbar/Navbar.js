import React from 'react' ;
import './navbar-css.scss' ;
import logo from '../../imgs/dolzay2.png'
import $ from "jquery";


class Navbar extends React.Component{
  state = {
    navbarBackgroundColor : "",
    toggled : false
  }
  componentDidMount(){
  $(window).resize(function(){
    if($(window).width() > 700 && window.scrollY < 60 ){
      $('.logo').height('80px') ;
      $('.logo').width('80px') ;
      $('.logo').css('margin-top','45px')
      console.log("grow it from resize");
    }else if(window.scrollY > 60 || (window.scrollY < 60 && $(window).width() < 700 )){
      $('.logo').height('45px') ;
      $('.logo').width('45px') ;
      $('.logo').css('margin-top','8px')
    }
  })
  document.addEventListener("scroll", () => {
  const navbarBackgroundColor = window.scrollY > 60 ? "#2C3E50" : "";

    if(window.scrollY > 60){
      console.log($('.logo').height());
      $('.logo').height('45px') ;
      $('.logo').width('45px') ;
      $('.logo').css('margin-top','8px')
    }
    else if($(window).width() > 700) {
      console.log("grow it from scroll");
      $('.logo').height('80px') ;
      $('.logo').width('80px') ;
      $('.logo').css('margin-top','45px')
    }

  this.setState({ navbarBackgroundColor: navbarBackgroundColor });
  });
}
toggleSidebar = ()=>{
  // if($('.sidebar-container').css('left') != '0px'){
      // console.log($('.sidebar-container').css('left') );
      this.props.toggleSidebar("main baby  => => ")
  // }
}
  render(){


    return(
       <div class="navbar-container" style={{backgroundColor:this.state.navbarBackgroundColor}}>
          {!this.props.toggled ? <i class="fas fa-bars" onClick={this.toggleSidebar}></i> : <i class="fas fa-arrow-left" onClick={this.toggleSidebar} ></i>}
            <div class="logo" >
                <img class="logo-img" src={logo} />
            </div>
            <ul class="navbar-list">
                <li><a href="#acceuil">Acceuil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
       </div>
    )
  }
}
export default Navbar ;
