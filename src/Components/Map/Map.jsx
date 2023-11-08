import GoogleMapReact from 'google-map-react';
import { BiCurrentLocation } from "react-icons/bi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MyyyMap = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
        <div className='dark:bg-gray-600 py-10 max-w-6xl mx-auto bg-blue-50 p-5 rounded-3xl mb-10'>
            <div className='flex gap-3'>
                <BiCurrentLocation className='text-3xl font-bold mt-1 dark:text-blue-500'></BiCurrentLocation>
                <h1 className='text-3xl font-bold mb-6 dark:text-blue-500'>Find Us On</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div>
                <img className='w-5/6' src="https://i.ibb.co/hs576QV/location.png" alt="" />
            </div>
           <div className='max-w-6xl mx-auto' style={{ height: '400px', width: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            </div>
        </div>
    );
};

export default MyyyMap;