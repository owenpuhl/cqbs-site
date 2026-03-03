import { createTheme } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    colors: {
        dark: [
            '#fbfbfb',
            '#9b9b96',
            '#777670',
            '#616059',
            '#515048',
            '#45433b',
            '#3a3830',
            '#312f27',
            '#28261d',
            '#1e1d13'
        ],
        lavender: [
            "#f1f0ff",
            "#dfdef5",
            "#bcbbe2",
            "#9895cf",
            "#7976bf",
            "#6561b6",
            "#5b57b2",
            "#4b489d",
            "#423f8d",
            "#37367e"
        ],
        yellowBrown: [
            "#f6f6f3",
            "#e9e9e9",
            "#d3d2ce",
            "#bbb9b0",
            "#a7a396",
            "#9a9685",
            "#948f7b",
            "#807c68",
            "#726e5b",
            "#635f4a"
        ],
    },
    primaryColor: "yellowBrown",
    autoContrast: true,
});
