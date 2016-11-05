import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='pageHeader'>
          <h3>Contact</h3>
        </div>
        <div className='pageMain'>
          <div className='row flexContainer'>
            <div className='contactTile'>
              <i className="fa fa-envelope contactPageIcon" aria-hidden="true"></i>
              <p>clrksanford@gmail.com</p>
            </div>
            <div className='contactTile'>
              <i className="fa fa-map-marker contactPageIcon" aria-hidden="true"></i>
              <p>Austin, TX</p>
            </div>
            <div className='contactTile'>
              <i className="fa fa-linkedin contactPageIcon" aria-hidden="true"></i>
              <p>linkedin.com/in/clrksanford</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
