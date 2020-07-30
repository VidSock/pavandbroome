import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../img/dressupchef-logo-vert.svg'
// import Install from '../Install'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
import { graphql } from 'gatsby'
import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
// import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}





@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  
  
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
  <Helmet>
    <title>{meta_title}</title>
    <meta name='description' content={meta_description} />
    <html className="fullhead" />
  </Helmet>
  
  





<CustomBox>





<br /><br />
 <ScrollAnimation animateIn="fadeIn" delay={100} offset={0} style={{position:'relative', paddingTop:'5%', overflow:'hidden', width:'100%', display:'flex', justifyContent:'center', verticalAlign:'center', alignContent:'center', alignItems: 'center',}}>
  
  <div className="container innerpanel" style={{padding:'1rem', backgroundColor:'#fff', width:'50%', borderRadius:'10px', filter:'blur(0px)',}}>
     <img className="logo" src={logo} alt="Pick 6 Logo" style={{maxHeight:'300px'}} />
     </div>
    </ScrollAnimation>
<br /><br /><br /><br /><br />



  
  <div className="outer" style={{display:'none', position:'relative', zIndex:'1'}}>
    <Contact className="container contactform" />
  </div>
  
  <br />
  
  
  </CustomBox>
  {/* <Install /> */}

  
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
  blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
