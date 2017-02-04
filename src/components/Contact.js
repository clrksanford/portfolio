import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return(
      <div className='pageContent'>
        <div className='row'>
          <div className='pageHeader'>
            <h3>Get In Touch</h3>
          </div>
          <div className='pageMain'>
            <div className='row flexContainerRow'>
              <div className='contactTile'>
                <a href='mailto:clrksanford@gmail.com'>
                  <i className="fa fa-envelope contactPageIcon" aria-hidden="true"></i>
                </a>
              </div>
              <div className='contactTile'>
                <i className="fa fa-map-marker contactPageIcon" aria-hidden="true"></i>
                <p>Austin, TX</p>
              </div>
              <div className='contactTile'>
                <a href='https://linkedin.com/in/clrksanford'>
                  <i className="fa fa-linkedin contactPageIcon" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pageHeader'>
          <h3>See What I've Been Up To</h3>
        </div>
        <div className='pageMain'>
          <div className='row flexContainerRow'>
            <div className='contactTile'>
              <a href='https://github.com/clrksanford' target='_blank'>
                <i className="fa fa-github contactPageIcon" aria-hidden="true"></i>
              </a>
            </div>
            <div className='contactTile'>
              <a href='https://twitter.com/clrksanford' target='_blank'>
                <i className="fa fa-twitter contactPageIcon" aria-hidden="true"></i>
              </a>
            </div>
            <div className='contactTile'>
              <a href='https://medium.com/@clrksanford' target='_blank'>
                <i className="fa fa-medium contactPageIcon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
