import React from 'react'
import { ReactComponent as ShareDefault } from '../../assets/img/share.svg';
import { ReactComponent as ShareHover } from '../../assets/img/sharehover.svg';

const Share = () => {
    const [isShown, setIsShown] = React.useState(false);
  return (
    <div className='avatar_share'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        <div className='share_06'>
            {isShown? (
                <ShareHover/>
            ):(<ShareDefault />)}
          
        </div>
      </div>
  )
}

export default Share