import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Contact = ({ refProp }) => {
    return (
        <>
            <section className="contact-section px-4 xxl:px-0 py-10 xl:py-20 max-w-[1440px] m-auto text-center" ref={refProp}>
                <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-medium mb-3">Get In Touch</h2>
                <p className="text-gray-600 max-w-2xl m-auto mb-5 lg:mb-12">I’m open to frontend and React opportunities. Feel free to reach out for roles, collaborations, or discussions.</p>
                <div className="flex justify-between gap-6 max-w-3xl m-auto">
                    <div className="w-full border border-[#bdbdbd] cursor-pointer p-4 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                        <a href="mailto:pravinaswin86@gmail.com" className="flex flex-col items-center gap-2" target="_blank">
                            <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <AiOutlineMail className="text-[24px]" />
                            </div>
                            <p className="text-md md:text-lg font-medium">Email</p>
                        </a>
                    </div>
                    <div className="w-full border border-[#bdbdbd] cursor-pointer p-4 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                        <a href="https://www.linkedin.com/in/pravin-kumar-k-g-7b9448159/" className="flex flex-col items-center gap-2" target="_blank">
                            <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <AiFillLinkedin className="text-[24px]" />
                            </div>
                            <p className="text-md md:text-lg font-medium">LinkedIn</p>
                        </a>
                    </div>
                    <div className="w-full border border-[#bdbdbd] cursor-pointer p-4 rounded-lg hover:shadow-[7px_7px_10px_-6px_#bdbdbd,3px_3px_0px_-4px_#bdbdbd] transition-all duration-300 ease-in-out">
                        <a href="https://github.com/pravinkumarkg" className="flex flex-col items-center gap-2" target="_blank">
                            <div className="bg-stone-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <AiFillGithub className="text-[24px]" />
                            </div>
                            <p className="text-md md:text-lg font-medium">GitHub</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;