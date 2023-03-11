import { styled } from '@universal-labs/styled';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const EyeIcon = (props: SvgProps) => (
  <Svg viewBox='0 0 512 512' {...props}>
    <Circle cx={256} cy={256} r={64} fill={props.color} />
    <Path
      fill={props.color}
      d='M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z'
    />
  </Svg>
);

export default styled(EyeIcon);
