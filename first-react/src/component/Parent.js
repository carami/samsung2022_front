const Parent = (props) => {
  const style = {
    border: "4px solid green",
    padding: "16px",
  };

  return <div style={style}> Parent!!! {props.children}</div>;
};

export default Parent;
