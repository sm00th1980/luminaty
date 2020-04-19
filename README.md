# Justified Grid Geometry calculating

## Example

![Video](example/video.gif)

Use:

```js
import getJustifyGridGeometry from 'justify-grid-geometry';

const CONTAINER_WIDTH = 500; //px

const tiles = [
  {
    width: 100,
    height: 100,
  },
  {
    width: 200,
    height: 200,
  },
  {
    width: 300,
    height: 300,
  },
];

const output = getJustifyGridGeometry(CONTAINER_WIDTH, tiles);
// [
//   [
//     {
//       height: 165.33333333333331,
//       width: 165.33333333333331,
//     },
//     {
//       height: 165.33333333333331,
//       width: 165.33333333333331,
//     },
//     {
//       height: 165.33333333333331,
//       width: 165.33333333333331,
//     },
//   ],
// ];
```
