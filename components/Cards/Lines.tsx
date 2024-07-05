"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
  />
);

export default function Lines() {
  const data = [
    {
      id: "japan",
      color: "hsl(275, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 45,
        },
        {
          x: "helicopter",
          y: 63,
        },
        {
          x: "boat",
          y: 101,
        },
        {
          x: "train",
          y: 227,
        },
        {
          x: "subway",
          y: 140,
        },
        {
          x: "bus",
          y: 186,
        },
        {
          x: "car",
          y: 296,
        },
        {
          x: "moto",
          y: 37,
        },
        {
          x: "bicycle",
          y: 277,
        },
        {
          x: "horse",
          y: 298,
        },
        {
          x: "skateboard",
          y: 269,
        },
        {
          x: "others",
          y: 22,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(287, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 217,
        },
        {
          x: "helicopter",
          y: 102,
        },
        {
          x: "boat",
          y: 200,
        },
        {
          x: "train",
          y: 200,
        },
        {
          x: "subway",
          y: 95,
        },
        {
          x: "bus",
          y: 33,
        },
        {
          x: "car",
          y: 158,
        },
        {
          x: "moto",
          y: 224,
        },
        {
          x: "bicycle",
          y: 241,
        },
        {
          x: "horse",
          y: 57,
        },
        {
          x: "skateboard",
          y: 270,
        },
        {
          x: "others",
          y: 44,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(263, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 85,
        },
        {
          x: "helicopter",
          y: 21,
        },
        {
          x: "boat",
          y: 126,
        },
        {
          x: "train",
          y: 177,
        },
        {
          x: "subway",
          y: 266,
        },
        {
          x: "bus",
          y: 81,
        },
        {
          x: "car",
          y: 274,
        },
        {
          x: "moto",
          y: 14,
        },
        {
          x: "bicycle",
          y: 86,
        },
        {
          x: "horse",
          y: 88,
        },
        {
          x: "skateboard",
          y: 249,
        },
        {
          x: "others",
          y: 153,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(3, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 65,
        },
        {
          x: "helicopter",
          y: 194,
        },
        {
          x: "boat",
          y: 245,
        },
        {
          x: "train",
          y: 61,
        },
        {
          x: "subway",
          y: 197,
        },
        {
          x: "bus",
          y: 140,
        },
        {
          x: "car",
          y: 161,
        },
        {
          x: "moto",
          y: 163,
        },
        {
          x: "bicycle",
          y: 246,
        },
        {
          x: "horse",
          y: 184,
        },
        {
          x: "skateboard",
          y: 173,
        },
        {
          x: "others",
          y: 56,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(277, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 243,
        },
        {
          x: "helicopter",
          y: 16,
        },
        {
          x: "boat",
          y: 130,
        },
        {
          x: "train",
          y: 182,
        },
        {
          x: "subway",
          y: 58,
        },
        {
          x: "bus",
          y: 40,
        },
        {
          x: "car",
          y: 251,
        },
        {
          x: "moto",
          y: 270,
        },
        {
          x: "bicycle",
          y: 161,
        },
        {
          x: "horse",
          y: 57,
        },
        {
          x: "skateboard",
          y: 246,
        },
        {
          x: "others",
          y: 157,
        },
      ],
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[264px] flex items-center w-full">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
