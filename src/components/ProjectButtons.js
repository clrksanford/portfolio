import React from 'react';

export default (props) => {
  return <div className='buttonContainer'>
    <a href={props.codeLink}
      className='button projectLink'
      target='_blank'>
      See the site
    </a>
    <a href={props.siteLink}
      className='button projectLink'
      target='_blank'>
      See the code
    </a>
  </div>
}
