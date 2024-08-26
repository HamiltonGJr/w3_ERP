import Chart from "react-apexcharts";

import { RadialBarProps } from "../../types/typesComponents";
import { defaultOptions } from "./style";

const RadialBarDasboard = ({ percentageGraphic }: RadialBarProps) => {
  return (
    <Chart
      series={[percentageGraphic]}
      width={80}
      height={80}
      options={defaultOptions}
      type="radialBar"
    />
  );
};

export default RadialBarDasboard;
