const debounce = (node, config) => {
  const {delay = 750, callback} = config;

  let timer;

  const handleChange = (e) => {
    const {value} = e.target;
    
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(value);
    }, delay);
  };

  node.addEventListener('input', handleChange);

  return {
    destroy() {
      node.removeEventListener("input", handleChange);
    },
  };
};

export {debounce};
