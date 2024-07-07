"use client";
import { log } from "console";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from "@nivo/calendar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
  <ResponsiveTimeRange
    data={data}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
  />
);
export default function Calendar() {
  function GenerateDataForYear();
  function generateDataArray(
    year: number,
    numberOfObjects: number,
    minValue: number,
    maxValue: number
  ) {
    const dataArray = [];

    for (let i = 1; i <= numberOfObjects; i++) {
      const randomValue =
        Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");

      const date = `${year}-${month}-${day}`;

      dataArray.push({ value: randomValue, day: date });
    }
    return dataArray;
  }

  // Example usage:
  const data = generateDataArray(2018, 200, 20, 100);

  console.log(`Generated ${data.length} items`);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the numbers of this year</CardDescription>
      </CardHeader>
      <CardContent className="h-[160px] flex items-center w-full">
        <MyResponsiveCalendar data={data} />
      </CardContent>
    </Card>
  );
}
