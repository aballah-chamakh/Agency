import React from 'react' ;
import './routing-css.scss' ;
import Navbar from '../components/Navbar/Navbar' ;
import FrontPage from '../components/FrontPage/FrontPage' ;
import WhyDigital from '../components/WhyDigital/WhyDigital' ;
import Services from '../components/Services/Services' ;
import TechUsed from '../components/TechUsed/TechUsed' ;
import Portfolio from '../components/Portfolio/Portfolio' ;
import HowWeWork from '../components/HowWeWork/HowWeWork' ;
import Footer from '../components/Footer/Footer' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import $ from "jquery";

class Routing extends React.Component {
  state = {
    sidebarToggled  : false ,
}
 componentDidMount(){
    let toggled = this.state.sidebarToggled ;
    let toggleSidebar = ()=>{this.setState({sidebarToggled  : !this.state.sidebarToggled})}
    $(window).resize(function(){
          if($('.routing-container').width() > 700 && $(".sidebar-container-toggled").css('left') == '0px' ){
              $("#sidebar-container-id").removeClass('sidebar-container-toggled').addClass('sidebar-container') ;
              console.log('done done ',toggled);
             // console.log("main baby   => => ");
             toggleSidebar() ;
           }
     })
}
  componentWillMount(){
      document.addEventListener('mousedown',this.handleClick,false) ;
  }
  componentWillUnmount(){
      document.removeEventListener('mousedown',this.handleClick,false)
  }
  handleClick = (e)=>{
      // (e.target != $('.sidebar-container') ||
      let target = $( e.target )[0];
      console.log($('.sidebar-container'));
      console.log(target);
      console.log($.contains($('.sidebar-container')[0],target));
      // !$.contains('.sidebar-container',e.target) &&
      if (!$.contains($('.sidebar-container')[0],target) && $('.sidebar-container').css('left') == '0px'){
          if(!$('.fa-bars').is(e.target) && !$('.fa-arrow-left').is(e.target) ){
            this.toggleSidebar('other baby  => => 1 ')
            console.log("other baby   => => 2");
          }

      }
  }
  toggleSidebar = (source)=>{
      $(".sidebar-container").toggleClass('sidebar-container-toggled') ;
      console.log(source);
      this.setState({sidebarToggled  : !this.state.sidebarToggled})
  }
  render(){

    return(
        <div class="routing-container" >
            <Navbar toggleSidebar={this.toggleSidebar} toggled={this.state.sidebarToggled} />
            <div  class="sidebar-container" ref={el=>this.sidebar=el}>
                <Sidebar toggleSidebar={this.toggleSidebar} />
            </div>
            <div class="call-us-container">
                <div class="phone-num"><i class="fas fa-phone-alt"></i> 58671414</div>
            </div>
            <FrontPage />
            <WhyDigital />
            <Services />
            <TechUsed />
            <Portfolio />
            <HowWeWork />
            <Footer />
        </div>
    )
  }
}
export default Routing  ;
