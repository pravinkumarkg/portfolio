export const useScrollToSection = () => {
    const scrollTo = (ref) => {
        if(ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    return { scrollTo };
}
