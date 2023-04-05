const { useMemo } = require("react");

const Component = () => {
  const list = useMemo(() => {
    return <div></div>;
  }, []);

  return <div>{list}</div>;
};
 //useMemo - mozemy przechowywac wszystko czego nie chcemy re-renderowac
 