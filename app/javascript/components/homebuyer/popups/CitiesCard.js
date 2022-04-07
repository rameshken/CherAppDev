import React from 'react';
import "../../../../assets/homebuyer/_barpopup.scss";
import plusCircle from '../../../../assets/images/homebuyer/images/pluscircle-icon.png';
import yellowCircle from '../../../../assets/images/homebuyer/images/yellowcircle.png';
import { useState } from 'react';

export const CitiesCard = ({ santaMonica, cities, setCities }) => {
  const [image, setImage] = useState(false);

  return (
    <div>
      <div
        className='location-box'
        style={{
          width: '75.5%',
          border: '1px solid #dcdde4',
          borderRadius: 12,
        }}
      >
        <img src={santaMonica} alt='' />
        <div className='loc-des-add d-flex justify-content-between align-items-center'>
          <p style={{ marginTop: '0.5rem' }}>Santa Monica</p>
          <img
            src={image ? plusCircle : yellowCircle}
            onClick={() => {
              setImage(!image);
              setCities([...cities, 'Santa Monica']);
            }}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
