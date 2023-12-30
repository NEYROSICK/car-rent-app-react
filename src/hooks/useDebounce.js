import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debouncedValue;
};

useDebounce.propTypes = {
  value: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default useDebounce;
