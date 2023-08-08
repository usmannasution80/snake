export default (props) => {
  const {x, y} = props;
  return (
    <svg
      width={1}
      height={1}
      x={x}
      y={y}
      viewBox="0 0 5 5">
      <rect
        x={0}
        y={0}
        width={5}
        height={5}
        fill="black"/>
        <svg
          width={4}
          height={4}
          x={0.5}
          y={0.5}
          viewBox="0 0 5 5">
          <rect
            x={0}
            y={0}
            width={5}
            height={5}
            fill="white"/>
        </svg>
    </svg>
  );
};
