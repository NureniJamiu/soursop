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
    <G id="search">
      <G id="Search">
        <Path
          id="Vector"
          d="M18 17.5L22.5 22"
          stroke={props.color || '#999999'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={props.color}
        />
        <Path
          id="Vector_2"
          d="M20.5 11C20.5 6.02944 16.4706 2 11.5 2C6.52944 2 2.5 6.02944 2.5 11C2.5 15.9706 6.52944 20 11.5 20C16.4706 20 20.5 15.9706 20.5 11Z"
          stroke={props.color || '#999999'}
          strokeWidth={1.5}
          strokeLinejoin="round"
          fill={props.color}
        />
      </G>
    </G>
  </Svg>
);
export {SvgComponent as ExploreIcon};
