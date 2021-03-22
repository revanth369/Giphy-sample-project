import { useEffect, useRef } from "react";

// this hook is used to add click event to close any
// section based on the reference passed when clicked outside the section

export const useClickOutsideClose = (ref, callback, when) => {
  const updateClosureOnRender = useRef(callback);
  useEffect(() => {
    updateClosureOnRender.current = callback;
  });
  const handleCloseEvent = ev => {
    const node = ev.target;
    if (ref.current && !ref.current.contains(node)) {
      updateClosureOnRender.current(ev);
    }
  };
  useEffect(() => {
    if (when) {
      document.addEventListener("click", handleCloseEvent, true);
      return () =>
        document.removeEventListener("click", handleCloseEvent, true);
    } else return;
  }, [when]);
};
