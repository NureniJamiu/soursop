import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="white" />
    <Path
      d="M20.2376 10H19.7976C19.2671 10 18.7584 10.2107 18.3834 10.5858C18.0083 10.9609 17.7976 11.4696 17.7976 12V12.18C17.7972 12.5307 17.7046 12.8752 17.5291 13.1788C17.3536 13.4825 17.1013 13.7346 16.7976 13.91L16.3676 14.16C16.0635 14.3355 15.7187 14.4279 15.3676 14.4279C15.0165 14.4279 14.6716 14.3355 14.3676 14.16L14.2176 14.08C13.7586 13.8153 13.2134 13.7434 12.7016 13.8803C12.1897 14.0172 11.7531 14.3515 11.4876 14.81L11.2676 15.19C11.0028 15.6489 10.931 16.1942 11.0679 16.706C11.2048 17.2178 11.5391 17.6544 11.9976 17.92L12.1476 18.02C12.4499 18.1945 12.7012 18.4451 12.8766 18.7468C13.0521 19.0486 13.1455 19.391 13.1476 19.74V20.25C13.149 20.6024 13.0572 20.949 12.8816 21.2545C12.706 21.5601 12.4528 21.8138 12.1476 21.99L11.9976 22.08C11.5391 22.3456 11.2048 22.7822 11.0679 23.294C10.931 23.8058 11.0028 24.3511 11.2676 24.81L11.4876 25.19C11.7531 25.6485 12.1897 25.9828 12.7016 26.1197C13.2134 26.2566 13.7586 26.1847 14.2176 25.92L14.3676 25.84C14.6716 25.6645 15.0165 25.5721 15.3676 25.5721C15.7187 25.5721 16.0635 25.6645 16.3676 25.84L16.7976 26.09C17.1013 26.2654 17.3536 26.5175 17.5291 26.8212C17.7046 27.1248 17.7972 27.4693 17.7976 27.82V28C17.7976 28.5304 18.0083 29.0391 18.3834 29.4142C18.7584 29.7893 19.2671 30 19.7976 30H20.2376C20.768 30 21.2767 29.7893 21.6518 29.4142C22.0269 29.0391 22.2376 28.5304 22.2376 28V27.82C22.2379 27.4693 22.3305 27.1248 22.506 26.8212C22.6816 26.5175 22.9338 26.2654 23.2376 26.09L23.6676 25.84C23.9716 25.6645 24.3165 25.5721 24.6676 25.5721C25.0187 25.5721 25.3635 25.6645 25.6676 25.84L25.8176 25.92C26.2765 26.1847 26.8217 26.2566 27.3336 26.1197C27.8454 25.9828 28.282 25.6485 28.5476 25.19L28.7676 24.8C29.0323 24.3411 29.1041 23.7958 28.9673 23.284C28.8304 22.7722 28.496 22.3356 28.0376 22.07L27.8876 21.99C27.5824 21.8138 27.3291 21.5601 27.1535 21.2545C26.9779 20.949 26.8862 20.6024 26.8876 20.25V19.75C26.8862 19.3976 26.9779 19.051 27.1535 18.7455C27.3291 18.4399 27.5824 18.1862 27.8876 18.01L28.0376 17.92C28.496 17.6544 28.8304 17.2178 28.9673 16.706C29.1041 16.1942 29.0323 15.6489 28.7676 15.19L28.5476 14.81C28.282 14.3515 27.8454 14.0172 27.3336 13.8803C26.8217 13.7434 26.2765 13.8153 25.8176 14.08L25.6676 14.16C25.3635 14.3355 25.0187 14.4279 24.6676 14.4279C24.3165 14.4279 23.9716 14.3355 23.6676 14.16L23.2376 13.91C22.9338 13.7346 22.6816 13.4825 22.506 13.1788C22.3305 12.8752 22.2379 12.5307 22.2376 12.18V12C22.2376 11.4696 22.0269 10.9609 21.6518 10.5858C21.2767 10.2107 20.768 10 20.2376 10Z"
      stroke="#D77551"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.0176 23C21.6744 23 23.0176 21.6569 23.0176 20C23.0176 18.3431 21.6744 17 20.0176 17C18.3607 17 17.0176 18.3431 17.0176 20C17.0176 21.6569 18.3607 23 20.0176 23Z"
      stroke="#D77551"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export {SVGComponent as SettingsIcon};