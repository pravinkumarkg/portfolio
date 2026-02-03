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
                            <img className="rounded-t-2xl" src={codeEditorImage} alt="code-editor" />
                            <div className="p-3 md:p-6 text-left flex flex-col gap-4">
                                <p className="font-medium text-gray-600 dark:text-gray-300">BudgetBuddy</p>
                                <p className="text-gray-600 dark:text-gray-300">A personal finance management app with expense tracking, budget planning, and financial insights. Features beautiful charts and spending analytics.</p>
                                <div className="flex gap-4 flex-wrap">
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">React</p>
                                    <p className="bg-neutral-200 px-2 py-1 rounded-xl">Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-[#bdbdbd] rounded-2xl">
                            <img className="rounded-t-2xl" src={codeEditorImage} alt="code-editor" />
                            <div className="p-3 md:p-6 text-left flex flex-col gap-4">
                                <p className="font-medium text-gray-600 dark:text-gray-300">BudgetBuddy</p>
                                <p className="text-gray-600 dark:text-gray-300">A personal finance management app with expense tracking, budget planning, and financial insights. Features beautiful charts and spending analytics.</p>
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
