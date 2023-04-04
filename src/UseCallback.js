import { useCallback } from "react";

//useCallback - powoduje że funkcja nie jest rerenderowana, można tego użyć
//jak mamy w innym miejscu useEffect i przez to że funkcja jest
//rerenderowana powoduje odpalenie useEffect

const Component = () => {
  const usecallbackfnc = useCallback(() => {}, []);

  return <div></div>
};
