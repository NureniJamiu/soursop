import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx="16" cy="16" r="16" fill="#F7D098" />
    <Path
      d="M11.6 21.9641L12.4 19.9531C12.52 19.6417 12.7133 19.3944 12.98 19.2113C13.2467 19.0282 13.5467 18.937 13.88 18.9375H15.2V15.6672C13.16 15.5995 11.4499 15.2948 10.0696 14.7531C8.68933 14.2115 7.99947 13.575 8 12.8437C8 12.0583 8.78 11.388 10.34 10.8328C11.9 10.2776 13.7867 10 16 10C18.2267 10 20.1168 10.2776 21.6704 10.8328C23.224 11.388 24.0005 12.0583 24 12.8437C24 13.575 23.3099 14.2115 21.9296 14.7531C20.5493 15.2948 18.8395 15.5995 16.8 15.6672V18.9375H18.12C18.44 18.9375 18.7368 19.029 19.0104 19.2121C19.284 19.3952 19.4805 19.6422 19.6 19.9531L20.4 21.9641C20.5067 22.2078 20.4832 22.4415 20.3296 22.6652C20.176 22.889 19.9661 23.0005 19.7 23C19.5533 23 19.42 22.9594 19.3 22.8781C19.18 22.7969 19.0867 22.6818 19.02 22.5328L18.24 20.5625H13.76L12.98 22.5328C12.9133 22.6818 12.82 22.7969 12.7 22.8781C12.58 22.9594 12.4467 23 12.3 23C12.0333 23 11.8235 22.8881 11.6704 22.6644C11.5173 22.4407 11.4939 22.2073 11.6 21.9641ZM16 14.0625C17.2933 14.0625 18.5133 13.9474 19.66 13.7172C20.8067 13.487 21.6467 13.1958 22.18 12.8437C21.6467 12.4917 20.8067 12.2005 19.66 11.9703C18.5133 11.7401 17.2933 11.625 16 11.625C14.7067 11.625 13.4867 11.7401 12.34 11.9703C11.1933 12.2005 10.3533 12.4917 9.82 12.8437C10.3533 13.1958 11.1933 13.487 12.34 13.7172C13.4867 13.9474 14.7067 14.0625 16 14.0625Z"
      fill="#212121"
    />
  </Svg>
);
export {SvgComponent as Reservation};