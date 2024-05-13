import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="10"
    height="18"
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9 1L2.41421 7.58579C1.74755 8.25245 1.41421 8.58579 1.41421 9C1.41421 9.41421 1.74755 9.74755 2.41421 10.4142L9 17"
      stroke={props.color || '#ffffff'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export {SvgComponent as BackIcon};
