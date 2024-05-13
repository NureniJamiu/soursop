import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      id="Vector"
      d="M23.2851 1.96421C23.4135 1.77398 23.4873 1.55286 23.4985 1.32444C23.5097 1.09603 23.458 0.868882 23.3489 0.667244C23.2397 0.465606 23.0773 0.297039 22.8788 0.179527C22.6803 0.0620148 22.4533 -3.4211e-05 22.222 1.41509e-08H1.77714C1.54601 0.000118045 1.31923 0.0622078 1.12097 0.179656C0.922713 0.297105 0.760391 0.465514 0.651295 0.666946C0.542199 0.868378 0.490416 1.09529 0.50146 1.32352C0.512504 1.55174 0.585962 1.77273 0.714011 1.96295L10.7218 16.8038V21.4737H6.88836V24H17.1108V21.4737H13.2774V16.8038L23.2851 1.96421ZM11.9996 14.1436L7.57198 7.57895H16.4272L11.9996 14.1436ZM19.8351 2.52632L18.1318 5.05263H5.86739L4.16408 2.52632H19.8351Z"
      fill={props.color || '#999999'}
    />
  </Svg>
);
export {SvgComponent as DrinksIcon};
