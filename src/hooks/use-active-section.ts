import { useEffect, useState } from "react";

/** Returns the id of the section currently nearest the top of the viewport. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const hashTarget = window.location.hash.slice(1);
        const targetInView = visible.find((entry) => entry.target.id === hashTarget);
        const current = targetInView ?? visible[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    const hash = window.location.hash.slice(1);
    if (ids.includes(hash)) setActive(hash);

    const onHashChange = () => {
      const next = window.location.hash.slice(1);
      if (ids.includes(next)) setActive(next);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [ids]);

  return active;
}
