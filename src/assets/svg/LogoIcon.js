import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width={props.size || 40}
    height={props.size || 40}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_188_1290)">
      <Path
        d="M60.9523 0H19.0477C8.52793 0 0 8.52793 0 19.0477V60.9523C0 71.4721 8.52793 80 19.0477 80H60.9523C71.4721 80 80 71.4721 80 60.9523V19.0477C80 8.52793 71.4721 0 60.9523 0Z"
        fill={props.color || 'white'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.2151 64.7793C23.8325 53.3132 26.7181 57.9037 19.3801 46.7499C11.5436 34.8384 23.1415 9.76093 44.4571 14.1496C65.7727 18.5382 70.1613 47.0635 50.4129 58.0347L34.7395 37.973C40.3816 33.5844 46.0242 36.7191 51.3528 45.4959C55.8488 40.7137 56.055 34.5248 51.3528 28.9126C37.3154 12.1576 18.4393 31.7033 29.1101 46.1094L38.4988 57.5516C38.4436 57.5281 38.3798 57.5174 38.302 57.5251C38.2682 57.5285 38.2943 57.5243 38.2639 57.5298C38.2352 57.5354 38.2001 57.5465 38.1723 57.5602C37.9939 57.65 37.9486 57.8195 37.9452 57.899C37.94 58.0137 37.9879 58.1074 38.1099 58.2588C38.3285 58.5296 38.4782 58.7307 38.7756 58.5866C38.9112 58.5207 38.989 58.3726 38.9967 58.2695C38.9997 58.2255 38.9933 58.1814 38.9788 58.1365L39.6257 58.925C39.606 58.9113 39.5872 58.9002 39.5688 58.8924C39.3317 58.7893 39.0156 58.9699 39.0237 59.2544C39.0301 59.4914 39.3369 59.787 39.5097 60.0022C39.7253 60.2709 40.6024 61.3353 40.7243 61.5223C40.8424 61.7264 40.794 62.0382 40.495 62.1135C40.2118 62.185 40.0757 61.9647 39.8687 61.7071C39.6719 61.462 39.4751 61.2168 39.2783 60.9717C39.0806 60.7257 38.9377 60.4579 38.6767 60.4544C38.3845 60.451 38.2309 60.7291 38.2904 60.9503C38.3289 61.0932 38.7067 61.5223 38.8256 61.6707C39.2154 62.1568 39.6051 62.6423 39.9944 63.1284C40.2007 63.3859 40.3726 63.5694 40.2285 63.8206C40.0791 64.0811 39.7677 64.0679 39.6017 63.8929C39.4096 63.6901 39.1901 63.3833 39.0092 63.1579C38.0491 61.9604 37.0437 60.7432 36.1064 59.5462C35.9493 59.4439 35.7889 59.417 35.6135 59.5577C35.4385 59.6976 35.4291 59.8495 35.4894 60.0193C35.5793 60.1768 37.875 63.009 38.0975 63.2849C38.2579 63.4839 38.287 63.6221 38.1912 63.7962C38.0782 64.0015 37.86 64.0187 37.7197 63.9737C37.5289 63.913 37.0056 63.1805 36.8392 62.9735C36.5474 62.6107 36.2565 62.247 35.9648 61.8842C35.8467 61.7375 35.6704 61.4718 35.5172 61.4042C35.2015 61.2647 34.7502 61.6344 35.0958 62.0661L35.9596 63.142C36.0944 63.3097 36.2719 63.4753 36.2587 63.6713C36.2475 63.8377 36.1487 64.0323 35.9104 64.0473C35.6956 64.061 35.6165 63.9712 35.4445 63.7564C35.1891 63.4377 34.9093 62.9114 34.5204 63.145C34.33 63.2593 34.2911 63.4586 34.3441 63.6101C34.3968 63.7602 35.4766 65.0638 35.6233 65.2469C35.7256 65.3744 35.9793 65.6598 36.0435 65.7864C36.2287 66.1514 35.7697 66.5471 35.4424 66.2626C35.3393 66.1728 34.2753 64.8217 34.1366 64.6484C33.9142 64.3716 33.601 63.806 33.2061 64.171C33.0042 64.3575 33.0756 64.5761 33.2143 64.7785L33.2151 64.7793ZM37.039 58.9057C36.9269 59.0251 36.9008 59.212 36.9757 59.3528C37.0433 59.479 37.2713 59.734 37.3719 59.8598C37.472 59.9843 37.6559 60.2555 37.7847 60.318C38.1518 60.4964 38.4885 60.0934 38.3097 59.7733C38.2305 59.6317 37.6213 58.8805 37.5024 58.8193C37.3774 58.7547 37.1734 58.7632 37.039 58.9061V58.9057ZM32.6196 63.5271C32.8018 63.4407 32.842 63.2524 32.8356 63.1343C32.8266 62.9735 32.6761 62.828 32.5635 62.6881C32.3317 62.3989 32.1126 62.0271 31.7798 62.1884C31.6018 62.2748 31.5355 62.4537 31.547 62.5837C31.5616 62.7424 31.7152 62.8948 31.8264 63.0329C32.069 63.335 32.2666 63.6944 32.6196 63.5271ZM33.9428 60.1537C33.711 60.4566 34.0297 60.7364 34.2 60.949C34.3163 61.0945 34.3886 61.21 34.5538 61.2352C34.668 61.2523 34.8242 61.2382 34.9392 61.0928C35.1801 60.7886 34.8622 60.5096 34.6864 60.2902C34.5688 60.1434 34.4896 60.027 34.3292 60.0027C34.2171 59.9851 34.0524 60.0112 33.9428 60.1537ZM35.1271 59.1179C35.6417 58.9091 35.2216 58.101 34.7514 58.2999C34.2188 58.5249 34.6411 59.3151 35.1271 59.1179ZM33.6126 62.1696C33.2344 62.5298 33.8406 63.2096 34.2415 62.8169C34.606 62.4597 34.0147 61.7863 33.6126 62.1696Z"
        fill="#212121"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_188_1290">
        <Rect width={80} height={80} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export {SvgComponent as LogoIcon};
