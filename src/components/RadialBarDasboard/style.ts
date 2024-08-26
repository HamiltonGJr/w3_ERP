import ApexCharts from "apexcharts";

import theme from "../../styles/theme";

export const defaultOptions: ApexCharts.ApexOptions = {
  fill: { colors: [theme.colors.primary.light] },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: "45%" },
      track: { background: `${theme.colors.primary.innerDark}` },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: "12px",
          color: `${theme.colors.others.white}`,
          fontWeight: "bold",
        },
      },
    },
  },
};
