import { useEffect } from "react";

let oldValue = ""
let isFirstTime = true


export default function useDelay(fun, value, delay = 800) {

  useEffect(() => {

    if (isFirstTime) {
      isFirstTime = false
      fun()
      return
    }

    if (oldValue === value)
      return

    oldValue = value

    const timer = setTimeout(fun, delay);

    return () => clearTimeout(timer)

  }, [value, fun, delay])

}

