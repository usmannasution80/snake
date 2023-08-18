export default (props) => {
  const {direction, x, y} = props;
  const points = (() => {
    let points;
    switch(direction){
      case 'up':
        points = '0,5 5,5 2.5,0';
        break;
      case 'down':
        points = '0,0 5,0 2.5,5';
        break;
      case 'left':
        points = '0,0 0,5 5,2.5';
        break;
      default:
        points = '5,0 5,5 0,2.5';
    }
    return points;
  })();
  return (
    <svg
      width={1}
      height={1}
      viewBox="0 0 5 5"
      x={x}
      y={y}>
      <polygon
        points={points}
        fill="black"/>
      <svg
        width={4}
        height={4}
        viewBox="0 0 5 5"
        x={0.5}
        y={0.5}>
        <polygon
          points={points}
          fill={window.web.snakeColor}/>
      </svg>
    </svg>
  );
};
