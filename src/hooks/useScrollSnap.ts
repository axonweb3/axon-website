import React from "react";

function useScrollSnap() {
  const [scrollSnap, setScrollSnap] = React.useState(true);

  React.useEffect(() => {
    const $html = document.querySelector('html');
    $html!.className = scrollSnap ? 'sm:snap-y sm:snap-mandatory sm:scroll-smooth' : '';
  }, [scrollSnap]);

  return { scrollSnap, setScrollSnap };
}

export default useScrollSnap;
