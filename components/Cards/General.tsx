"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/circle-packing
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCirclePacking = ({ data }) => (
  <ResponsiveCirclePacking
    data={data}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    id="name"
    value="loc"
    colors={{ scheme: "nivo" }}
    childColor={{
      from: "color",
      modifiers: [["brighter", 0.4]],
    }}
    padding={4}
    enableLabels={true}
    labelsFilter={(n) => 2 === n.node.depth}
    labelsSkipRadius={10}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.5]],
    }}
    defs={[
      {
        id: "lines",
        type: "patternLines",
        background: "none",
        color: "inherit",
        rotation: -45,
        lineWidth: 5,
        spacing: 8,
      },
    ]}
    fill={[
      {
        match: {
          depth: 1,
        },
        id: "lines",
      },
    ]}
  />
);

export default function General() {
  const data = {
    name: "nivo",
    color: "hsl(71, 70%, 50%)",
    children: [
      {
        name: "viz",
        color: "hsl(125, 70%, 50%)",
        children: [
          {
            name: "stack",
            color: "hsl(12, 70%, 50%)",
            children: [
              {
                name: "cchart",
                color: "hsl(266, 70%, 50%)",
                loc: 52345,
              },
              {
                name: "xAxis",
                color: "hsl(294, 70%, 50%)",
                loc: 108442,
              },
              {
                name: "yAxis",
                color: "hsl(64, 70%, 50%)",
                loc: 199117,
              },
              {
                name: "layers",
                color: "hsl(330, 70%, 50%)",
                loc: 47495,
              },
            ],
          },
          {
            name: "ppie",
            color: "hsl(42, 70%, 50%)",
            children: [
              {
                name: "chart",
                color: "hsl(256, 70%, 50%)",
                children: [
                  {
                    name: "pie",
                    color: "hsl(8, 70%, 50%)",
                    children: [
                      {
                        name: "outline",
                        color: "hsl(87, 70%, 50%)",
                        loc: 34257,
                      },
                      {
                        name: "slices",
                        color: "hsl(149, 70%, 50%)",
                        loc: 19634,
                      },
                      {
                        name: "bbox",
                        color: "hsl(244, 70%, 50%)",
                        loc: 47570,
                      },
                    ],
                  },
                  {
                    name: "donut",
                    color: "hsl(124, 70%, 50%)",
                    loc: 90009,
                  },
                  {
                    name: "gauge",
                    color: "hsl(323, 70%, 50%)",
                    loc: 117892,
                  },
                ],
              },
              {
                name: "legends",
                color: "hsl(281, 70%, 50%)",
                loc: 116951,
              },
            ],
          },
        ],
      },
      {
        name: "colors",
        color: "hsl(186, 70%, 50%)",
        children: [
          {
            name: "rgb",
            color: "hsl(353, 70%, 50%)",
            loc: 9579,
          },
          {
            name: "hsl",
            color: "hsl(229, 70%, 50%)",
            loc: 77232,
          },
        ],
      },
      {
        name: "utils",
        color: "hsl(60, 70%, 50%)",
        children: [
          {
            name: "randomize",
            color: "hsl(155, 70%, 50%)",
            loc: 88931,
          },
          {
            name: "resetClock",
            color: "hsl(130, 70%, 50%)",
            loc: 166062,
          },
          {
            name: "noop",
            color: "hsl(302, 70%, 50%)",
            loc: 184680,
          },
          {
            name: "tick",
            color: "hsl(90, 70%, 50%)",
            loc: 14437,
          },
          {
            name: "forceGC",
            color: "hsl(223, 70%, 50%)",
            loc: 24487,
          },
          {
            name: "stackTrace",
            color: "hsl(290, 70%, 50%)",
            loc: 16695,
          },
          {
            name: "dbg",
            color: "hsl(5, 70%, 50%)",
            loc: 59806,
          },
        ],
      },
      {
        name: "generators",
        color: "hsl(208, 70%, 50%)",
        children: [
          {
            name: "address",
            color: "hsl(67, 70%, 50%)",
            loc: 117437,
          },
          {
            name: "city",
            color: "hsl(164, 70%, 50%)",
            loc: 123818,
          },
          {
            name: "animal",
            color: "hsl(129, 70%, 50%)",
            loc: 128525,
          },
          {
            name: "movie",
            color: "hsl(348, 70%, 50%)",
            loc: 137036,
          },
          {
            name: "user",
            color: "hsl(201, 70%, 50%)",
            loc: 4553,
          },
        ],
      },
      {
        name: "set",
        color: "hsl(68, 70%, 50%)",
        children: [
          {
            name: "clone",
            color: "hsl(15, 70%, 50%)",
            loc: 48289,
          },
          {
            name: "intersect",
            color: "hsl(72, 70%, 50%)",
            loc: 125731,
          },
          {
            name: "merge",
            color: "hsl(146, 70%, 50%)",
            loc: 45953,
          },
          {
            name: "reverse",
            color: "hsl(311, 70%, 50%)",
            loc: 152120,
          },
          {
            name: "toArray",
            color: "hsl(356, 70%, 50%)",
            loc: 57341,
          },
          {
            name: "toObject",
            color: "hsl(298, 70%, 50%)",
            loc: 181688,
          },
          {
            name: "fromCSV",
            color: "hsl(73, 70%, 50%)",
            loc: 105164,
          },
          {
            name: "slice",
            color: "hsl(216, 70%, 50%)",
            loc: 191698,
          },
          {
            name: "append",
            color: "hsl(120, 70%, 50%)",
            loc: 114942,
          },
          {
            name: "prepend",
            color: "hsl(126, 70%, 50%)",
            loc: 43368,
          },
          {
            name: "shuffle",
            color: "hsl(295, 70%, 50%)",
            loc: 1288,
          },
          {
            name: "pick",
            color: "hsl(209, 70%, 50%)",
            loc: 121384,
          },
          {
            name: "plouc",
            color: "hsl(246, 70%, 50%)",
            loc: 14029,
          },
        ],
      },
      {
        name: "text",
        color: "hsl(103, 70%, 50%)",
        children: [
          {
            name: "trim",
            color: "hsl(39, 70%, 50%)",
            loc: 101626,
          },
          {
            name: "slugify",
            color: "hsl(198, 70%, 50%)",
            loc: 129267,
          },
          {
            name: "snakeCase",
            color: "hsl(23, 70%, 50%)",
            loc: 95750,
          },
          {
            name: "camelCase",
            color: "hsl(294, 70%, 50%)",
            loc: 8197,
          },
          {
            name: "repeat",
            color: "hsl(271, 70%, 50%)",
            loc: 167111,
          },
          {
            name: "padLeft",
            color: "hsl(216, 70%, 50%)",
            loc: 163977,
          },
          {
            name: "padRight",
            color: "hsl(347, 70%, 50%)",
            loc: 135882,
          },
          {
            name: "sanitize",
            color: "hsl(99, 70%, 50%)",
            loc: 131824,
          },
          {
            name: "ploucify",
            color: "hsl(118, 70%, 50%)",
            loc: 168659,
          },
        ],
      },
      {
        name: "misc",
        color: "hsl(269, 70%, 50%)",
        children: [
          {
            name: "greetings",
            color: "hsl(41, 70%, 50%)",
            children: [
              {
                name: "hey",
                color: "hsl(343, 70%, 50%)",
                loc: 31611,
              },
              {
                name: "HOWDY",
                color: "hsl(274, 70%, 50%)",
                loc: 141510,
              },
              {
                name: "aloha",
                color: "hsl(283, 70%, 50%)",
                loc: 79610,
              },
              {
                name: "AHOY",
                color: "hsl(183, 70%, 50%)",
                loc: 30664,
              },
            ],
          },
          {
            name: "other",
            color: "hsl(114, 70%, 50%)",
            loc: 7806,
          },
          {
            name: "path",
            color: "hsl(27, 70%, 50%)",
            children: [
              {
                name: "pathA",
                color: "hsl(175, 70%, 50%)",
                loc: 173166,
              },
              {
                name: "pathB",
                color: "hsl(244, 70%, 50%)",
                children: [
                  {
                    name: "pathB1",
                    color: "hsl(285, 70%, 50%)",
                    loc: 76973,
                  },
                  {
                    name: "pathB2",
                    color: "hsl(239, 70%, 50%)",
                    loc: 90676,
                  },
                  {
                    name: "pathB3",
                    color: "hsl(329, 70%, 50%)",
                    loc: 29081,
                  },
                  {
                    name: "pathB4",
                    color: "hsl(324, 70%, 50%)",
                    loc: 54835,
                  },
                ],
              },
              {
                name: "pathC",
                color: "hsl(335, 70%, 50%)",
                children: [
                  {
                    name: "pathC1",
                    color: "hsl(338, 70%, 50%)",
                    loc: 141995,
                  },
                  {
                    name: "pathC2",
                    color: "hsl(126, 70%, 50%)",
                    loc: 178633,
                  },
                  {
                    name: "pathC3",
                    color: "hsl(256, 70%, 50%)",
                    loc: 68412,
                  },
                  {
                    name: "pathC4",
                    color: "hsl(303, 70%, 50%)",
                    loc: 27009,
                  },
                  {
                    name: "pathC5",
                    color: "hsl(176, 70%, 50%)",
                    loc: 91610,
                  },
                  {
                    name: "pathC6",
                    color: "hsl(23, 70%, 50%)",
                    loc: 102750,
                  },
                  {
                    name: "pathC7",
                    color: "hsl(240, 70%, 50%)",
                    loc: 153416,
                  },
                  {
                    name: "pathC8",
                    color: "hsl(220, 70%, 50%)",
                    loc: 176321,
                  },
                  {
                    name: "pathC9",
                    color: "hsl(294, 70%, 50%)",
                    loc: 34397,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full h-[400px]">
      <MyResponsiveCirclePacking data={data} />
    </div>
  );
}
