import { useState } from "react"

const useHooks = () => {
  const [num, setNum] = useState(0);
  const countUp = () => setNum((state) => state + 1);
  return {
    num,
    countUp
  }
}

export default useHooks;