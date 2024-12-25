import img1 from './assets/anupam.jpg'
import img2 from './assets/dheeren.jpg'
import img3 from './assets/rajan.jpg'
import img4 from './assets/bkp.jpg'


import './club.css'

const Faculty = () =>{
    return(
        <>
        <div>
                <h1 className='aboutus12'>FACULTY ADVISOR</h1>
                <hr className='hr'></hr>
                
            </div>
        <main className='main34'>
        <div className="container">
             
             <img className='banner-image' src={img4} ></img>
             <h1 className='word23'>Dr. B.K Pandey</h1>
             <button className='button34'>Chairman, CSA</button>
             
            </div>
            <div className="button-wrapper"> 
            
              
              </div>
              <div className="container">
             
             <img className='banner-image' src={img3} ></img>
             <h1 className='word23'>Dr. Rajan Mishra</h1>
             <button className='button34'>Vice Chairman, CSA</button>
             
            </div>
            <div className="button-wrapper"> 
            
              
              </div>
            <div className="container">
             
               <img className='banner-image' src={img1} ></img>
               <h1 className='word23'>Dr. Anupam Sahu               </h1>
               <button className='button34'>Faculty Incharge, TSC</button>
               
              </div>
              <div className="button-wrapper"> 
              
                
                </div>
                <div className="container">
             
               <img className='banner-image' src={img2} ></img>
               <h1 className='word23'>Dr. Dheerendra Singh               </h1>
               <button className='button34'>Faculty Advisor, SAE</button>
               
              </div>
              <div className="button-wrapper"> 
              
                
                </div>
               





        

        </main>
            
        </>
    )

}
export default Faculty