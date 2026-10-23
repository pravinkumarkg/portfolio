import codeEditorImage from "../assets/images/code-editor.jpeg";

const Projects = ({ refProp }) => {
    return (
        <>
            <section className="dark:bg-[#181818]" ref={refProp}>
                <div className="projects-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3 text-gray-900 dark:text-gray-100">Projects</h2>
                    <p className="text-gray-600 max-w-2xl m-auto mb-5 lg:mb-12 text-gray-600 dark:text-gray-300">A selection of personal projects showcasing diverse capabilities</p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-7xl m-auto">
                        <div className="border border-[#bdbdbd] rounded-2xl">
                            <img className="rounded-t-2xl h-[400px] w-full" src={codeEditorImage} alt="code-editor" />
                            <div className="p-3 md:p-6 text-left flex flex-col gap-4">
                                <p className="font-bold text-gray-700 dark:text-gray-300">Personal Portfolio</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Developed a personal portfolio website using React.js and Tailwind CSS to showcase professional experience,technical skills and projects.
                                    Built reusable React components and responsive layouts for a consistent user experience across desktop and mobile devices.
                                    Organized portfolio sections to present professional background, frontend skills and project work.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">React</p>
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">Tailwind CSS</p>
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">Javascript</p>
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">Responsive Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-[#bdbdbd] rounded-2xl">
                            <img className="rounded-t-2xl h-[400px] w-full" src={codeEditorImage} alt="code-editor" />
                            <div className="p-3 md:p-6 text-left flex flex-col gap-4">
                                <p className="font-bold text-gray-700 dark:text-gray-300">Frontend Mastery — Frontend Learning Dashboard</p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Developing a personal learning dashboard to practise modern frontend technologies and component-based development.
                                    Setting up application routing and reusable layouts for learning, practice, challenges and project sections.
                                    Building reusable UI components with a focus on maintainability and responsive design.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">React</p>
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
