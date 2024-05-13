import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G id="home-03">
      <G id="Home 02">
        <Path
          id="Vector 3591"
          d="M9.49932 22L9.24868 18.4911C9.11394 16.6046 10.608 15 12.4993 15C14.3906 15 15.8847 16.6046 15.75 18.4911L15.4993 22"
          stroke="#395D45"
          strokeWidth={1.5}
        />
        <Path
          id="Rectangle 1147"
          d="M2.85139 13.2135C2.49837 10.9162 2.32186 9.76763 2.75617 8.74938C3.19047 7.73112 4.15403 7.03443 6.08114 5.64106L7.52099 4.6C9.91829 2.86667 11.1169 2 12.5 2C13.8831 2 15.0817 2.86667 17.479 4.6L18.9189 5.64106C20.846 7.03443 21.8095 7.73112 22.2438 8.74938C22.6781 9.76763 22.5016 10.9162 22.1486 13.2135L21.8476 15.1724C21.3471 18.4289 21.0969 20.0572 19.929 21.0286C18.7611 22 17.0537 22 13.6388 22H11.3612C7.94633 22 6.23891 22 5.071 21.0286C3.90309 20.0572 3.65287 18.4289 3.15243 15.1724L2.85139 13.2135Z"
          fill="#395D45"
          stroke="#395D45"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export {SvgComponent as HomeActiveIcon};
