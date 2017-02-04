import React from 'react';

export default (props) => {
  return <div className='buttonContainer'>
    <a href={`https://clrksanford.github.io/${props.projectName}`}
      className='button projectLink'
      target='_blank'>
      Site
    </a>
    <a href={`https://github.com/clrksanford/${props.projectName}`}
      className='button projectLink'
      target='_blank'>
      GitHub
    </a>
  </div>
}
