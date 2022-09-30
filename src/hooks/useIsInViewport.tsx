import { useEffect, useMemo, useState } from "react";

export function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(
                ([entry]) => setIsIntersecting(entry.isIntersecting),
                { threshold: 0.5 }
            ),
        []
    );
    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}
