
import React from 'react'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
// import { Link } from 'gatsby'
import Contact from '../components/Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../components/GalleryMenu'
// import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../components/PopSemi'





import styled from "styled-components"
const CustomBox = styled.div`
// .intro:before{
// 	content: "Full Stack Product Designer";
// 	white-space: pre-wrap; /* or pre-wrap */
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// z-index:1;
// font-size:250%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px white;
// animation: poof 1s forwards;
// animation-delay: 1s;
// }





.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -60px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

@media (min-width: 50rem) {
.speech1{padding:20px 50px !important;}
}

@media (max-width: 48rem) {
.intro:before{font-size:200%;}
.speech:after {right: -28px;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const Portfolio = graphql`
  query Portfolio {
    allFile(filter: { relativeDirectory: { eq: "favorites" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`




const Gal1Page = () => {
  const data = useStaticQuery(Portfolio)
  return (
	  <CustomBox>
    <Layout>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>


<div className="container" style={{margin:'1rem 8%',}}>
<h3 className="" style={{textAlign:'center', fontSize:'250%',}}>
About this site
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',  }}>

<p>
{/* <span className="txtshadow-header" style={{fontSize:'100px', color:'#ccc', position:'absolute', top:'-40px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'100px', color:'#ccc', position:'absolute', bottom:'-50px', right:'-10px',}}>&#10078;</span><br /> */}

Hi, I'm Laura and welcome to Dress Up Chef! This site became an outlet for a hobby that I took up during Hurricane Katrina. I started by creating an apron for myself and then others saw it and wanted one. Once I made one for all of my friends, I figured ya'll might like one too. 
</p>
<br />
{/* <h5>- Laura</h5> */}
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'0', overflow:'hidden'}}><Image alt="Co-worker talks about Todd Lambert" filename="mom-icon.jpg" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Laura Lambert</div>
</div>
</ScrollAnimation>

 </div>
 
 
 



 {/* <Image alt="Made in USA" filename="made-usa.png" style={{maxWidth:'150px'}} /> */}
 
 {/* <Image alt="Veteran owned business" filename="vet-owned.png" style={{maxWidth:'150px'}} /> */}




{/* <div className="container">
<h3 className="logotype1" style={{textAlign:'center', fontSize:'250%',}}>
Hats worn
</h3>
</div> */}


{/* <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>
<h2>Entrepreneur</h2>
<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    
<Image alt="Co-worker talks about Todd Lambert" filename="hats1.png" style={{borderColor:'transparent',}} />
</ScrollAnimation>

 </div> */}
 
 
 
 
 
 




{/* <div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
spotlight
</h3>
</div> */}

</section>


<section className='section outer'>
  
 
   
   
  <div className='container content'>
         
         
 
 
  <h2 className="" style={{textAlign:'center', fontSize:'160%',}}>
 Handmade in South Mississippi 
   </h2>
 
 <p>We proudly offer all of our products as completely handmade, unique and one-of-a-kind items that are made with quality and love. </p>


 <p>We proudly source all of our materials from second hand stores, right here on the Gulf Coast. Doing our small part in helping to keep materials out of landfills, we hope to help the planet while bringing you a quality product that makes you happy. </p>
 


 <div style={{width:'150px', margin:'1rem auto', display:''}}>
   
   {/* <Image alt="Veteran owned business" filename="vet-owned.png" style={{maxWidth:'150px'}}  /> */}
 <Image alt="Made in USA" filename="made-usa.png" style={{maxWidth:'150px'}} />
 </div>
 
  </div>
  </section>




<section className="  intro section" style={{display:'none'}}>



      <div className="container" style={{background:'', padding:'2rem',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
</section>



<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




 <ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutDown" animateOnce={false} delay={100} style={{ zIndex:'1', display:'none',}}>
<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Client List
</h3>
</div>
</ScrollAnimation>





 
 
</section>


<br />
<br />
    

<div className="content outer">
<ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutDown" animateOnce={false} delay={100} style={{ zIndex:'1', display:'',}}>
    <Contact />
    </ScrollAnimation>
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
