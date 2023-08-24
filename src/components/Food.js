function Food(props){
  const {x, y} = props;
  return (
    <svg
      x={x}
      y={y}
      width={1}
      height={1}
      viewBox="0 0 10 10">
      <rect
        x={0}
        y={0}
        height={10}
        width={10}>
        <animate
          attributeName="fill"
          values="red;green;blue"
          dur={1}
          repeatCount="indefinite"/>
      </rect>
    </svg>
  );
}

export default Food;