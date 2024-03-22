import { useState } from "react";

function useApiData(value) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  function setData(data) {
    setState((prev) => {
      return {
        ...prev,
        data: data,
      };
    });
  }
  function setLoadingToTrue() {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
  }
  function setLoadingToFalse() {
    setState((prev) => {
      return {
        ...prev,
        loading: false,
      };
    });
  }
  return [state, setData, { setLoadingToTrue, setLoadingToFalse }];
}
export default useApiData;
