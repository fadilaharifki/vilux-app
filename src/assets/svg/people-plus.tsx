import React from 'react';
import { Svg, Path } from 'react-native-svg';

type PeoplePlusSVGProps = {
  color?: string;
  width?: number;
  height?: number;
};

const PeoplePlusSVG: React.FC<PeoplePlusSVGProps> = ({
  color = '#C9C9C9',
  width = 35,
  height = 34,
}) => (
  <Svg width={width} height={height} viewBox='0 0 35 34' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.4309 22.7262C6.72619 22.7262 1 23.7396 1 27.8001C1 31.8605 6.6913 32.9105 13.4309 32.9105C20.1373 32.9105 25.8617 31.8954 25.8617 27.8367C25.8617 23.7779 20.1722 22.7262 13.4309 22.7262Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.4309 16.935C17.8315 16.935 21.3983 13.3681 21.3983 8.96748C21.3983 4.56688 17.8315 1 13.4309 1C9.03201 1 5.46509 4.56688 5.46509 8.96748C5.44944 13.3524 8.99015 16.9193 13.3768 16.935H13.4309Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M29.6991 11.3242V18.3184'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M33.2676 14.8211H26.1338'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default PeoplePlusSVG;
