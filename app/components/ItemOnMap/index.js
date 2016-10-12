/**
*
* ItemOnMap
*
*/

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

import styles from './styles.css';

class ItemOnMap extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.itemOnMap} style={{ height: '100%' }}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: '100%',
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={3}
              defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            >
            </GoogleMap>
          }
        />
      </div>
    );
  }
}

export default ItemOnMap;
