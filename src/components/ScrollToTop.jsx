import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const[scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY > 500);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
    }, []);

    if(!scrollTop) return null; 

    return(
        <button className="fixed bottom-10 right-6 cursor-pointer" onClick={() => window.scrollTo({ top:0, behavior: "smooth" })}>
            <FaArrowCircleUp className="text-[24px] dark:text-white" />
        </button>
    )
}

export default ScrollToTop;