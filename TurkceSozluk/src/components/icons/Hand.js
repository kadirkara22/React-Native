import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHand = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M18.548 6.2c0-1.114-.43-2.182-1.195-2.97A4.02 4.02 0 0 0 14.47 2a4.02 4.02 0 0 0-2.883 1.23A4.264 4.264 0 0 0 10.39 6.2v9.114l-1.862-1.05a3.645 3.645 0 0 0-2.455-.409 3.714 3.714 0 0 0-2.16 1.267 3.914 3.914 0 0 0-.912 2.382 3.93 3.93 0 0 0 .741 2.444L11.071 30h15.47L28.2 16.378l-9.652-2.8V6.2Zm6.661 12.222L24.15 27.2H12.43L5.92 18.254a1.07 1.07 0 0 1 .025-1.382.997.997 0 0 1 1.334-.158l5.832 3.332V6.2c0-.371.143-.727.398-.99s.601-.41.962-.41c.36 0 .706.147.96.41.256.263.399.619.399.99v9.45l9.38 2.772Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgHand;
