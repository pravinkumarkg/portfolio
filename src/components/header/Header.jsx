import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useScrollToSection } from "../../hooks/useScrollToSection";

const Header = ({ sections }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { scrollTo } = useScrollToSection();

    return(
        <section className="bg-white fixed top-0 w-full z-9">
            <div className="header-section flex justify-between p-5 max-w-[1440px] m-auto relative">
                <div></div>
                <div className="menu-wrapper gap-5 hidden md:flex">
                    {sections.map(({ label, ref}) => {
                        return(
                            <a key={label} href="" onClick={(e) => { e.preventDefault(); scrollTo(ref) }}>{label}</a>
                        )
                    })}
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-1 block md:hidden">
                    {isMenuOpen ? (
                        <AiOutlineClose className="text-[22px]" />
                    ) : (
                        <AiOutlineMenu className="text-[22px]" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu-wrapper absolute top-0 bg-[#ececf0] w-full h-dvh block md:hidden ">
                    <div className="mobile-menu flex flex-col items-center gap-8 mt-10">
                        <MobileMenu sections={sections} isMenuOpen={() => setIsMenuOpen(true)} isMenuClose={() => setIsMenuOpen(false)} />
                    </div>
                </div>
            )}

        </section>
    )
}

export default Header;