import { AiOutlineCalendar } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";

const Experience = ({ refProp }) => {
    return (
        <>
            <section className="bg-[#ececf0] dark:bg-[#181818]" ref={refProp}>
                <div className="experience-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center" id="experience-section">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3 text-gray-900 dark:text-gray-100">Experience</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl m-auto mb-5 lg:mb-12">6 years of professional growth and impactful contributions</p>
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
                                    <li>Designed and developed responsive user interfaces across admin panels, payment modules, live platforms, dashboards, and static landing pages, ensuring consistency across desktop, tablet, and mobile devices.</li>
                                    <li>Built theme-based and multi-layout UI implementations, enabling dynamic branding, color schemes, and user-specific configurations through admin settings.</li>
                                    <li>Implemented interactive UI functionality using JavaScript, jQuery, GSAP animations, date picker components, and client-side form validations (Parsley.js), with data persistence via browser localStorage where required.</li>
                                    <li>Identified and resolved UI bugs and Jira-reported issues, improved layout stability, navigation, browser compatibility, and performed cross-device testing on real devices.</li>
                                    <li>Refactored existing codebases and consolidated CSS styles to improve maintainability, performance, and adherence to coding standards while collaborating with cross-functional teams.</li>
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
                            <h4 className="text-left ml-3 md:ml-12 mb-3 font-medium text-gray-600 dark:text-gray-300">WordPress Experience</h4>
                            <div className="text-left ml-7 md:ml-17 text-[#717182] dark:text-gray-300 mb-3">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Developed custom blocks, custom fields, and custom post types to build flexible, content-driven WordPress websites.</li>
                                    <li>Implemented block templates and block patterns to reduce code duplication and improve content authoring efficiency.</li>
                                    <li>Managed dashboard-level content updates and WooCommerce configurations, including products, pricing, attributes, and discount logic.</li>
                                </ul>
                            </div>
                            <h4 className="text-left ml-3 md:ml-12 mb-3 font-medium text-gray-600 dark:text-gray-300">React Experience (1 Year)</h4>
                            <div className="text-left ml-7 md:ml-17 text-[#717182] dark:text-gray-300">
                                <ul className="list-disc flex gap-3 flex-col">
                                    <li>Built reusable UI components using React and PrimeReact, focusing on clean structure and component reusability.</li>
                                    <li>Implemented consistent UI styling using Styled System and Styled Components across applications.</li>
                                    <li>Integrated Redux to consume backend APIs and render dynamic data using both class-based and functional components.</li>
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
