import  { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer>
        <HeadFooterComponent />
        <HorizontalFooterComponent />
        <Span2FooterComponent />
      </footer>
    );
  }
}

class HeadFooterComponent extends Component {
  render() {
    return (
      <div className="headFooter">
        <Span1FooterComponent />
      </div>
    );
  }
}

class Span1FooterComponent extends Component {
  render() {
    return (
      <div className="span1Footer">
        <div className="div1Footer">

        <p>WEEBLY THEMES</p>

        <p> PRE SALE FAQS</p>

        <p>SUMIT A TICKET</p>
 

       </div>

       <div className="div2Footer">

        <p>WEEBLY THEMES</p>

        <p> PRE SALE FAQS</p>

        <p>SUMIT A TICKET</p>
 

       </div>

       <div className="div3Footer">

        <p>WEEBLY THEMES</p>

        <p> PRE SALE FAQS</p>

        <p>SUMIT A TICKET</p>
 
            </div>
            <div className="div4Footer">
             <p>WEEBLY THEMES</p>
             <p> PRE SALE FAQS</p>
             <p>SUMIT A TICKET</p>
             </div>
 
        <div className="div5Footer">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    );
  }
}

class HorizontalFooterComponent extends Component {
  render() {
    return <div className="horizontalFooter"></div>;
  }
}

class Span2FooterComponent extends Component {
  render() {
    return (
      <div className="span2Footer">
        <div className="div1Footer">
          <h1>LOGO</h1>
        </div>
        <div className="div2Footer">
        <div className="div2Footer">

        <p>WEEBLY THEMES</p>

        <p> PRE SALE FAQS</p>

        <p>SUMIT A TICKET</p>


       </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;