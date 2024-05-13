import * as React from 'react';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = props => (
  <Svg
    width={181}
    height={180}
    viewBox="0 0 181 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={90.5}
      cy={90}
      r={88}
      fill="#F7D098"
      stroke="#F7D098"
      strokeWidth={4}
    />
    <Circle
      cx={90.5}
      cy={90}
      r={84}
      fill="#F7D098"
      stroke="#212121"
      strokeWidth={8}
    />
    <G filter="url(#filter0_d_188_1849)">
      <Path
        d="M54.7739 56.84C54.0246 56.84 53.5 57.4395 53.5 58.1889V58.2638C53.5 76.7734 56.4975 102.702 71.485 120.837C80.5525 131.853 89.3951 134.7 89.8447 134.85L90.2943 135L90.669 134.85C91.0437 134.7 100.036 131.853 109.029 120.837C123.941 102.702 127.014 76.7734 127.014 58.2638V58.1889C127.014 57.4395 126.414 56.84 125.74 56.84C125.515 56.84 103.933 56.0906 91.2685 45.3746C90.744 44.9249 89.9946 44.9249 89.47 45.3746C76.6557 56.0157 54.9988 56.7651 54.7739 56.84Z"
        fill="#FFB74D"
      />
      <Path
        opacity={0.2}
        d="M90.2194 47.5479C101.985 57.0649 120.419 58.7885 124.691 59.0133C124.616 77.1482 121.468 102.102 107.23 119.413C99.4367 128.93 91.6432 132.077 90.1445 132.602C88.6457 132.077 80.9271 128.93 73.1336 119.413C58.9704 102.102 55.8231 77.1482 55.7481 59.0133C59.9446 58.7136 78.4542 56.99 90.2194 47.5479ZM90.2194 45C89.9197 45 89.545 45.0749 89.3202 45.3747C76.6557 56.0158 54.9988 56.7652 54.7739 56.8401C54.0246 56.8401 53.5 57.4396 53.5 58.189V58.2639C53.5 76.7735 56.4975 102.702 71.485 120.837C80.5525 131.853 89.3951 134.7 89.8447 134.85L90.2943 135L90.669 134.85C91.0437 134.7 100.036 131.853 109.029 120.837C123.941 102.702 127.014 76.7735 127.014 58.2639V58.189C127.014 57.4396 126.414 56.8401 125.74 56.8401C125.515 56.8401 103.933 56.0908 91.2685 45.3747C90.8938 45.1499 90.5941 45 90.2194 45Z"
        fill="#424242"
      />
      <Path
        d="M62.4925 63.8092C61.893 63.8092 61.7432 64.5586 61.7432 65.0832V65.1581C61.7432 79.621 63.9913 99.9291 75.6815 114.092C82.7257 122.71 89.6199 124.958 89.9197 125.033L90.2194 125.108L90.5192 125.033C90.8189 124.958 97.7132 122.71 104.757 114.092C116.448 99.9291 118.696 79.696 118.696 65.1581V65.0832C118.696 64.4837 118.396 64.034 117.796 64.034H117.871C117.722 64.034 100.861 63.4345 90.9688 55.1165C90.5192 54.7418 89.9946 54.7418 89.545 55.1165V54.9666C79.5783 63.2847 62.7174 63.8092 62.4925 63.8092Z"
        fill="#FFE0A9"
      />
      <Path
        d="M117.796 64.0342C117.646 64.0342 100.785 63.4347 90.8937 55.0417C90.7438 54.8918 90.4441 54.8169 90.2192 54.8169V125.108L90.519 125.033C90.8187 124.958 97.713 122.71 104.757 114.092C116.447 99.9293 118.696 79.6962 118.696 65.1583V65.0833C118.696 64.5588 118.396 64.0342 117.796 64.0342Z"
        fill="#E58A1F"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export {SvgComponent as ShieldIcon};