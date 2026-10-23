import { AiOutlineCalendar } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";

const Experience = ({ refProp }) => {
    return (
        <>
            <section className="bg-[#ececf0] dark:bg-[#181818]" ref={refProp}>
                <div className="experience-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center" id="experience-section">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3 text-gray-900 dark:text-gray-100">Experience</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl m-auto mb-5 lg:mb-12">6+ years of professional growth and impactful contributions</p>
                    <div className="exp-section-wrapper max-w-3xl m-auto">
                        <div className="exp-section mb-5 bg-white dark:bg-transparent border border-[#bdbdbd] p-4 md:p-6 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                            <div className="flex gap-3">
                                <div className="bg-stone-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                    <FiBriefcase className="text-[24px]" />
                                </div>
                                <div className="flex gap-2 flex-col sm:flex-row justify-between w-full mb-4">
                                    <div className="text-left">
                                        <p className="text-[18px] font-medium text-gray-600 dark:text-gray-300">Sr. Software Developer</p>
                                        <p className="text-[#717182] dark:text-gray-100">Elito Innovations Pvt Ltd</p>
                                    </div>
                                    <div className="flex gap-2 text-[#717182] dark:text-gray-100">
                                        <AiOutlineCalendar className="text-[22px]" />Feb 2023 - Present
                                    </div>
                                </div>
                            </div>

                            <div className="text-left ml-7 md:ml-17 text-[#717182] dark:text-gray-300">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Developed and maintained responsive user interfaces for admin panels, dashboards, payment modules and client-facing applications.</li>
                                    <li>Built interactive UI features using JavaScript (ES6+), jQuery and animation libraries to improve usability and user experience.</li>
                                    <li>Optimized frontend performance by improving CSS/JavaScript assets and implementing lazy loading where appropriate.</li>
                                    <li>Resolved UI defects, cross-browser compatibility issues and mobile responsiveness problems across development sprints.</li>
                                    <li>Refactored legacy CSS and frontend code to improve maintainability, reduce duplication and support ongoing feature development.</li>
                                    <li>Collaborated within Agile development workflows to deliver UI enhancements, bug fixes and application improvements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-section mb-5 bg-white dark:bg-transparent border border-[#bdbdbd] p-4 md:p-6 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                            <div className="flex gap-3">
                                <div className="bg-stone-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                    <FiBriefcase className="text-[24px]" />
                                </div>
                                <div className="flex gap-2 flex-col sm:flex-row justify-between w-full mb-4">
                                    <div className="text-left">
                                        <p className="text-[18px] font-medium text-gray-600 dark:text-gray-300">Junior Software Engineer</p>
                                        <p className="text-[#717182] dark:text-gray-100">Madon Limited</p>
                                    </div>
                                    <div className="flex gap-2 text-[#717182] dark:text-gray-100">
                                        <AiOutlineCalendar className="text-[22px]" />June 2020 - Feb 2023
                                    </div>
                                </div>
                            </div>
                           
                            <h4 className="text-left ml-3 md:ml-12 mb-3 font-medium text-gray-600 dark:text-gray-300">React / Frontend Development</h4>
                            <div className="text-left ml-7 md:ml-17 mb-3 text-[#717182] dark:text-gray-300">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Developed reusable React functional components and used React Hooks to manage component state and behavior.</li>
                                    <li>Integrated REST APIs using Axios and async/await to retrieve and display data in dashboard and user-facing interfaces.</li>
                                    <li>Worked with component state and rendering optimization to improve UI responsiveness and code maintainability.</li>
                                    <li>Built responsive interfaces using HTML, CSS, JavaScript and reusable UI patterns.</li>
                                </ul>
                            </div>

                            <h4 className="text-left ml-3 md:ml-12 mb-3 font-medium text-gray-600 dark:text-gray-300">WordPress / WooCommerce</h4>
                            <div className="text-left ml-7 md:ml-17 text-[#717182] dark:text-gray-300 mb-3">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Developed and maintained WordPress pages and custom Gutenberg blocks to support flexible content management.</li>
                                    <li>Managed WooCommerce product configurations, pricing and discount-related functionality.</li>
                                    <li>Supported content publishing workflows and maintained website UI consistency.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="exp-section bg-white dark:bg-transparent border border-[#bdbdbd] p-4 md:p-6 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                            <div className="flex gap-3">
                                <div className="bg-stone-300 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                                    <FiBriefcase className="text-[24px]" />
                                </div>
                                <div className="flex gap-2 flex-col sm:flex-row justify-between w-full mb-4">
                                    <div className="text-left">
                                        <p className="text-[18px] font-medium text-gray-600 dark:text-gray-300">Intern</p>
                                        <p className="text-[#717182] dark:text-gray-300">Madon Limited</p>
                                    </div>
                                    <div className="flex gap-2 text-[#717182] dark:text-gray-300">
                                        <AiOutlineCalendar className="text-[22px]" />Sep 2019 - May 2020
                                    </div>
                                </div>
                            </div>
                            <div className="text-left ml-7 md:ml-17 text-[#717182] dark:text-gray-300">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Developed and maintained a responsive WordPress website, adhering to modern UI, accessibility, and mobile-first standards.</li>
                                    <li>Built and customized static and dynamic pages using HTML, CSS, Bootstrap, and the Gutenberg editor with reusable blocks and plugins.</li>
                                    <li>Collaborated on theme and plugin customization, ensuring clean structure, cross-browser compatibility, and optimized performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;
