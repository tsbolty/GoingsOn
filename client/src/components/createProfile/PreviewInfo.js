import React from 'react';
import './createProfile.css';

const PreviewInfo = ({profileInfo})=>{
  return(
    <div className= "card preview-card">
      <div className= "card-body">
        <h2 className= "card-title">{profileInfo.businessName}</h2>
      </div>
    </div>

  )
}

export default PreviewInfo;