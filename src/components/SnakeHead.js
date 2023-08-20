function SnakeHead(props){
  const {direction, x, y} = props;
  let mouthHeight;
  let mouthWidth;
  const coordinates = (() => {

    let coordinates = {};

    switch(direction){

      case 'up':
        mouthWidth  = 3;
        mouthHeight = 1;
        coordinates = {
          leftEye  : [1, 3],
          rightEye : [3, 3],
          mouth    : [1, 1]
        };
        break;

      case 'down':
        mouthWidth  = 3;
        mouthHeight = 1;
        coordinates = {
          leftEye  : [3, 1],
          rightEye : [1, 1],
          mouth    : [1, 3]
        };
        break;

      case 'left':
        mouthWidth  = 1;
        mouthHeight = 3;
        coordinates = {
          leftEye  : [3, 3],
          rightEye : [3, 1],
          mouth    : [1, 1]
        };
        break;

      default:
        mouthWidth  = 1;
        mouthHeight = 3;
        coordinates = {
          leftEye  : [1, 1],
          rightEye : [1, 3],
          mouth    : [3, 1]
        };

    }

    return coordinates;

  })();

  return (
    <svg
      width={1}
      height={1}
      x={x}
      y={y}
      viewBox="0 0 5 5">

      <rect
        width={5}
        height={5}
        fill="black"
        x={0}
        y={0}/>

      <svg
        width={4}
        height={4}
        x={0.5}
        y={0.5}
        viewBox="0 0 5 5">

        <rect
          width={5}
          height={5}
          x={0}
          y={0}
          fill={window.web.snakeColor}/>

      </svg>

      <rect
        x={coordinates.leftEye[0]}
        y={coordinates.leftEye[1]}
        fill="black"
        width={1}
        height={1}/>

      <rect
        x={coordinates.rightEye[0]}
        y={coordinates.rightEye[1]}
        fill="red"
        width={1}
        height={1}/>

      <rect
        x={coordinates.mouth[0]}
        y={coordinates.mouth[1]}
        width={mouthWidth}
        height={mouthHeight}
        fill="black"/>

    </svg>
  );
};

export default SnakeHead;