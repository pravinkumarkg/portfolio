import { AiOutlineInfoCircle } from "react-icons/ai"; 

const Skills = ({ refProp }) => {
    return (
        <section className="bg-[#ececf0] dark:bg-[#181818]" ref={refProp}>
            <div className="skill-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center" id="skill-section">
                <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3 text-gray-900 dark:text-gray-100">Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl m-auto mb-5 lg:mb-12">A comprehensive toolkit for building robust mobile applications</p>
                <div className="flex flex-wrap md:flex-nowrap gap-3 lg:gap-5 justify-center max-w-7xl m-auto">
                    <div className="w-full md:w-max">
                        <div className="bg-white dark:bg-[#161616] border border-[#bdbdbd] mb-5 p-5 flex gap-4 md:gap-6 flex-col items-center rounded-lg md:min-h-[200px] lg:min-h-[160px]">
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Core Technologies</p>
                            <div className="flex gap-4 flex-wrap">
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">HTML5</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">CSS3</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">JavaScript (ES6+)</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">React.js</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">REST API Integration</p>
                                <div className="bg-neutral-200 px-2 py-1 rounded-xl flex gap-2 items-center">
                                    WordPress
                                    <span className="relative">
                                        <AiOutlineInfoCircle className="peer cursor-pointer outline-0" tabIndex={0} />
                                        <span className="absolute hidden peer-hover:block peer-focus:block bg-black dark:bg-white text-white dark:text-black sm:whitespace-nowrap w-[150px] sm:w-max left-0 right-0 p-2 text-xs rounded-md mt-2">Custom Themes, Blocks, Post Types</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#161616] border border-[#bdbdbd] p-5 flex gap-4 md:gap-6 flex-col items-center rounded-lg md:min-h-[200px] lg:min-h-[160px]">
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">State Management & Data Handling</p>
                            <div className="flex gap-4 flex-wrap">
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">React Hooks</p>
                                <div className="bg-neutral-200 px-2 py-1 rounded-xl flex gap-2 items-center">
                                    API Integration
                                    <button className="relative">
                                        <AiOutlineInfoCircle className="peer cursor-pointer outline-0" tabIndex={0} />
                                        <span className="absolute right-0 hidden peer-hover:block peer-focus:block bg-black dark:bg-white text-white dark:text-black whitespace-nowrap p-2 mt-2 text-xs rounded-md">Fetch / Axios</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-max">
                        <div className="bg-white dark:bg-[#161616] border border-[#bdbdbd] mb-5 p-5 flex gap-4 md:gap-6 flex-col items-center rounded-lg md:min-h-[200px] lg:min-h-[160px]">
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">UI / Styling</p>
                            <div className="flex gap-4 flex-wrap">
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Responsive & Mobile-First Design</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Tailwind CSS</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Sass / SCSS</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Bootstrap</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#161616] border border-[#bdbdbd] p-5 flex gap-4 md:gap-6 flex-col items-center rounded-lg md:min-h-[200px] lg:min-h-[160px]">
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Tools & Workflow</p>
                            <div className="flex gap-4 flex-wrap">
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Git, GitHub, Bitbucket</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">VS Code</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Jira, Trello</p>
                                <p className="bg-neutral-200 px-2 py-1 rounded-xl">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;