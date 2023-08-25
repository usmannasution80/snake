function Obstacle(props){
  const {x, y} = props;
  return (
    <svg
      width={1}
      height={1}
      x={x}
      y={y}
      viewBox="0 0 10 10">
      <rect
        x={0}
        y={0}
        width={10}
        height={10}
        fill="grey"/>
    </svg>
  );
}

export default Obstacle;