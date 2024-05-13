import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = () => (
  <Svg
    width="181"
    height="180"
    viewBox="0 0 181 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx="90.5"
      cy="90"
      r="89.5"
      fill="#FAE0BA"
      fill-opacity="0.2"
      stroke="#F7D098"
    />
    <Circle cx="90.5" cy="90" r="50" fill="#E1BD8A" />
    <G clip-path="url(#clip0_244_600)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M116.956 71.6293C117.706 72.3794 118.127 73.3966 118.127 74.4573C118.127 75.5179 117.706 76.5352 116.956 77.2853L86.9747 107.267C86.5785 107.663 86.1081 107.977 85.5904 108.192C85.0727 108.406 84.5178 108.517 83.9574 108.517C83.397 108.517 82.8421 108.406 82.3244 108.192C81.8066 107.977 81.3362 107.663 80.94 107.267L66.044 92.3733C65.662 92.0043 65.3573 91.5629 65.1476 91.0749C64.938 90.5869 64.8276 90.062 64.823 89.5309C64.8184 88.9998 64.9196 88.473 65.1207 87.9814C65.3219 87.4899 65.6189 87.0433 65.9944 86.6677C66.37 86.2921 66.8166 85.9951 67.3082 85.794C67.7998 85.5929 68.3265 85.4916 68.8576 85.4963C69.3888 85.5009 69.9136 85.6112 70.4016 85.8209C70.8897 86.0305 71.331 86.3352 71.7 86.7173L83.956 98.9733L111.297 71.6293C111.669 71.2576 112.11 70.9627 112.595 70.7615C113.081 70.5603 113.601 70.4568 114.127 70.4568C114.652 70.4568 115.173 70.5603 115.658 70.7615C116.143 70.9627 116.585 71.2576 116.956 71.6293Z"
        fill="#333333"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_244_600">
        <Rect
          width="64"
          height="64"
          fill="white"
          transform="translate(59.5 58)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export {SvgComponent as CongratulationsIcon};
