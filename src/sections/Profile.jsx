import LapImage from "../assets/images/lap.jpeg";
import { AiFillLinkedin, AiFillGithub, AiOutlineDownload } from "react-icons/ai";

const Profile = ({refProp}) => {
    return (
        <>
            <section className="bg-[#ececf0] dark:bg-[#181818]" ref={refProp}>
                <div className="profile-section px-4 lg:px-10 xxl:px-0 pt-20 md:pt-30 pb-16 max-w-[1440px] m-auto flex flex-col lg:flex-row lg:flex gap-6 lg:gap-12 justify-between" id="profile-section">
                    <div className="profile-left-sec lg:w-2/5 flex flex-col gap-5 justify-center">
                        <p className="text-sm font-medium uppercase tracking-wider dark:text-white">
                            Frontend Developer
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold dark:text-white">
                            Hi, I'm Pravin Kumar
                        </h1>

                        <h2 className="text-xl md:text-2xl dark:text-white">
                            Building responsive, user-friendly web experiences.
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 dark:text-white">
                            I develop clean, responsive web interfaces using HTML,
                            CSS, JavaScript, and React. I enjoy solving UI challenges,
                            improving existing applications, and creating maintainable
                            frontend experiences.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">6+ Years in Frontend Development</span>
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">HTML5</span>
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">CSS3</span>
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">JavaScript</span>
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">Tailwind CSS</span>
                            <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg">React.js</span>
                        </div>

                        <div className="flex gap-3 items-center">
                            <button onClick={() => window.open("/Pravin_Kumar_Resume.pdf", "_blank")} className="flex gap-2 items-center bg-black px-3 py-2 text-white rounded-lg border cursor-pointer hover:bg-white hover:text-black hover:border-[#000000] transition-all duration-500 ease-in-out"><AiOutlineDownload className="text-[24px]" />View Resume</button>
                            <a href="https://www.linkedin.com/in/pravin-kumar-k-g-7b9448159/" target="_blank">
                                <AiFillLinkedin className="text-[24px] text-dark dark:text-white" />
                            </a>
                            <a href="https://github.com/pravinkumarkg" target="_blank">
                                <AiFillGithub className="text-[24px] text-dark dark:text-white" />
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