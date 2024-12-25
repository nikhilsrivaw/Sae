import img1 from './assets/baja3.jpg'
import img2 from './assets/supra4.jpg'
import img3 from './assets/aer02.jpg'
import img4 from './assets/disco.png'

import './club.css'

function App() {
  

  return (
    <>
    <div>
                <h1 className='aboutus12'>ABOUT US</h1>
                <hr className='hr'></hr>
                <p>SAE (Society of Automotive Engineers) COLLEGIATE CLUB, MMMUT CHAPTER is part of India leading resource for mobility technology. It opens door for many opportunities to their members through special activities like BAJA, SUPRA, ECOKART, EFFICYCLE, conducted nationwide. It is also the major conducting body of college tech-fest, Tech-srijan; providing students with many benefits through several events conducted under it, within the span of college years. All the club affairs are administered by the students themselves through the elected officers, counseled by the faculty advisor.
                </p>

            </div>
    <main className='main34'>

<div className="container">
 
   <img className='banner-image' src={img1} ></img>
   <h1 className='word23'>Baja SAE</h1>
   <button className='button34' onClick={() => window.open('https://baja-mmmut-sae.netlify.app/', '_blank')}>See More</button>
   
  </div>
  <div className="button-wrapper"> 
  
    
    </div>
    <div className="container">
 
   
   <img className='banner-image' src={img4} ></img>
   <h1 className='word23'>DISCO</h1>
   <button className='button34' onClick={() => window.open('https://disco-mmmut-sae.netlify.app/', '_blank')}>See More </button>
   
   
  </div>
  <div className="button-wrapper"> 
  
    
  </div>
  
    
    <div className="container">
 
   
   <img className='banner-image' src={img2} ></img>
   <h1 className='word23'>Supra</h1>
   <button className='button34' onClick={() => window.open('https://supra-mmmut-sae.netlify.app/', '_blank')}> See More</button>
   
  </div>
  <div className="button-wrapper"> 
  
    
  </div>
  
    
    <div className="container">
 
   
   <img className='banner-image' src={img3} ></img>
   <h1 className='word23'>Aeromodelling</h1>
   <button className='button34' onClick={() => window.open('https://aeromodelling-sae-mmmut.netlify.app/', '_blank')}>See More</button>
   
  </div>
  <div className="button-wrapper"> 
  
    
  </div>
  
    
    </main>

    

      
      
    </>
  )
}

export default App
