import img1 from './assets/onepluscrop.jpg'
import img2 from './assets/rishabh.jpg'
import img3 from './assets/nikhil.jpeg'

import './creator.css'

const Creator = () => {
  

  return (
    <>
    
    <main className='main3'>      
      
      <div className="container">
      {/* <h1 className='creator1'> LEGENDS</h1> */}
      
  <div className="card">
    <div className="wrapper">
      <img src={img1} className="cover-image" />
      <h1 className='name1'>Anurag Singh</h1>
      <h2 className='name2'>Branch : ME</h2>
    </div>
    
    <img src={img1} className="character" />
  
  </div>



  <div className="card">
    <div className="wrapper">
      <img src={img2} className="cover-image" />
      <h1 className='name1'>RISHABH YADAV</h1>
      <h2 className='name2'>Branch : ECE</h2>
    </div>
    
    <img src={img2} className="character" />
  </div>



  <div className="card">
    <div className="wrapper">
      <img src={img3} className="cover-image" />
      <h1 className='name1'>NIKHIL SRIVASTAVA</h1>
      <h2 className='name2'>Branch : IT</h2>
    </div>

    <img src={img3} className="character" />
  </div>


      </div>
      
      </main>

    </>
  )
}

export default Creator
