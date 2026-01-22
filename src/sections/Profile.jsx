import LapImage from "../assets/images/lap.jpeg";
import { AiFillLinkedin, AiFillGithub, AiOutlineDownload } from "react-icons/ai";

const Profile = ({refProp}) => {
    return (
        <>
            <section className="bg-[#ececf0]" ref={refProp}>
                <div className="profile-section px-4 lg:px-10 xxl:px-0 pt-20 md:pt-30 pb-16 max-w-[1440px] m-auto flex flex-col lg:flex-row lg:flex gap-6 lg:gap-12 justify-between" id="profile-section">
                    <div className="profile-left-sec lg:w-2/5">
                        <span>Hi there! I'm</span>
                        <h2 className="text-[36px] md:text-[60px] font-semibold">Frontend Developer</h2>
                        <p className="sm:text-[16px] md:text-[20px] text-[#717182] mb-4 md:mb-6">6 Years of Experience</p>
                        <p className="text-[#717182] mb-4 md:mb-6">Frontend Developer with 6 years of overall experience in developing responsive web layouts using HTML, CSS, and modern JavaScript (ES6+). Possess 1 year of hands-on experience with React.js, focusing on reusable component development and REST API integration. Proficient in UI styling frameworks including Bootstrap, Sass, and Tailwind CSS, with a strong focus on performance and maintainable UI code.</p>
                        <div className="flex gap-3 items-center">
                            <button className="flex gap-2 items-center bg-black px-3 py-2 text-white rounded-lg border cursor-pointer hover:bg-white hover:text-black hover:border-[#000000] transition-all duration-500 ease-in-out"><AiOutlineDownload className="text-[24px]" />View Resume</button>
                            <a href="">
                                <AiFillLinkedin className="text-[24px]" />
                            </a>
                            <a href="">
                                <AiFillGithub className="text-[24px]" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-right-sec lg:max-w-md w-full">
                        <img className="w-full h-[450px] object-cover rounded-4xl" src={LapImage} alt="lapImage" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;