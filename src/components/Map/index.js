import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Labeled } from 'react-admin';

const DateField = ({ source, record }) => {
  return (
    <Labeled label='Location on the map'>
      <GoogleMapReact
        center={{ lat: Number(record.lat), lng: Number(record.lng) }}
        zoom={16}
        style={{ width: 600, height: 400 }}
      >
        <LocationOnIcon
          fontSize='large'
          style={{ color: 'white' }}
          lat={Number(record.lat)}
          lng={Number(record.lng)}
        />
      </GoogleMapReact>
    </Labeled>
  );
};

export default DateField;
