import { AiOutlineCode, AiOutlineMobile, AiOutlineThunderbolt, AiOutlineTeam } from "react-icons/ai";

const About = ({ refProp }) => {
    return (
        <>
            <section className="dark:bg-[#181818]" id="about-section" ref={refProp}>
              <div className="about-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center">
                <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3 text-gray-900 dark:text-gray-100">About Me</h2>
                <p className="mx-auto max-w-4xl mb-5 lg:mb-12 text-gray-600 dark:text-gray-300">
                    I am a Frontend Developer with 6+ years of experience building and maintaining responsive web applications. My core strengths include HTML5, CSS3, JavaScript (ES6+), responsive design, and creating user-friendly interfaces.

                    In my current role, I work on existing applications, implement UI enhancements, resolve frontend bugs, handle form validation, and integrate APIs. I also focus on reusable UI components, cross-browser compatibility, and writing clean, maintainable code.

                    I have hands-on experience with React.js, React Hooks, component-based development, and API integration. I am currently strengthening my skills in TypeScript, Redux Toolkit, and Next.js through practical projects to expand my capabilities in modern frontend development.

                    I enjoy learning new technologies, solving challenging UI problems, and building reliable web experiences that balance usability, functionality, and maintainability.
                </p>
                <div className="about-box-section-wrap flex flex-wrap md:flex-nowrap gap-3 lg:gap-5">
                    <div className="about-box-section border border-[#bdbdbd] w-full p-3 lg:p-6 flex gap-3 lg:gap-6 flex-col items-center rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                        <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                            <AiOutlineCode className="text-[20px]" />
                        </div>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Code Quality</p>
                        <p className="text-md text-gray-600 dark:text-gray-300">Writing maintainable and scalable code following best practices</p>
                    </div>
                    <div className="about-box-section border border-[#bdbdbd] w-full p-3 lg:p-6 flex gap-3 lg:gap-6 flex-col items-center rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                        <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                            <AiOutlineMobile className="text-[20px]" />
                        </div>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Responsive Layouts</p>
                        <p className="text-md text-gray-600 dark:text-gray-300">Ensuring seamless experiences across desktop, tablet, and mobile devices</p>
                    </div>
                    <div className="about-box-section border border-[#bdbdbd] w-full p-3 lg:p-6 flex gap-3 lg:gap-6 flex-col items-center rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-500 ease-in-out">
                        <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                            <AiOutlineThunderbolt className="text-[25px]" />
                        </div>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Optimized Performance</p>
                        <p className="text-md text-gray-600 dark:text-gray-300">Improving load times and runtime performance using modern techniques</p>
                    </div>
                    <div className="about-box-section border border-[#bdbdbd] w-full p-3 lg:p-6 flex gap-3 lg:gap-6 flex-col items-center rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-500 ease-in-out">
                        <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                            <AiOutlineTeam className="text-[25px]" />
                        </div>
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Collaboration</p>
                        <p className="text-md text-gray-600 dark:text-gray-300">Working closely with designers and backend teams to deliver quality products</p>
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default About;