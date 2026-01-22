import { useScrollToSection } from "../../hooks/useScrollToSection";

const MobileMenu = ({sections, isMenuOpen, isMenuClose}) => {
    const { scrollTo } = useScrollToSection();

    return(
        <>
            {sections.map(({label, ref}) => {
                return(
                    <a key={label} className="text-lg" onClick={(e) => { e.preventDefault(); isMenuOpen(); scrollTo(ref); isMenuClose(); }}>{label}</a>
                )
            })}
        </>
    )
}

export default MobileMenu;