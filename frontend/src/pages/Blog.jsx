import React from "react";

const Blog = () => {
    return (
        <section className="w-full bg-white md:px-[7vw] md:pt-[3vw]">
            <div className="hidden md:flex justify-center items-center bg-[url('/assets/header-bg.jpeg')] bg-cover bg-center h-[24vw]">
                <div className="flex flex-col text-gray-300 leading-none px-[20vw] gap-[0.8vw]">
                    <span className="text-[0.8vw] font-medium tracking-wider">BLOG</span>
                    <h3 className="text-[2.5vw]">Lorem ipsum dolor sit amet consectetur se modi dolor vero. Unde repudiandae iure laboriosam consequatur dignissimos quasi!</h3>
                    <span className="text-[0.8vw] font-medium tracking-wider">15 March 2025</span>
                </div>
            </div>

            <div className="flex flex-col md:hidden">
                <img className="" src="/assets/header-bg.jpeg" alt="" />
                <div className="flex flex-col leading-tight px-25 gap-4 pt-8 pb-18">
                    <span className="text-base text-gray-400 font-medium tracking-wider">BLOG</span>
                    <h3 className="text-5xl leading-tight">Lorem ipsum dolor sit amet consectetur se modi dolor vero. Unde repudiandae iure laboriosam consequatur dignissimos quasi!</h3>
                    <span className="text-base text-gray-400 font-medium tracking-wider">15 MARCH 2025</span>
                </div>
            </div>

            <div className="flex flex-col px-[8vw] md:py-[8vw] text-gray-700">
                <div className="flex flex-col md:gap-[1vw] gap-8 text-left">
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores necessitatibus quibusdam distinctio aliquid voluptate cum nemo quod consequuntur eaque molestiae fugiat, ex voluptas. Facilis, debitis quae rerum sapiente ab dolore.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi natus dolorem voluptate id saepe incidunt hic sequi dolorum rerum ratione veritatis, enim aperiam quasi, perferendis voluptatum assumenda quibusdam ducimus?</p>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Lorem ipsum dolor  consequatur alias, non aliquam vel at expedita quaerat explicabo.</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                <div className="flex justify-center">
                <img src="/assets/img-13.jpg" alt="" className="md:w-[40vw] py-[1vw]"/>
                </div>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                </div>

                <div className="flex flex-col md:gap-[1vw] gap-8 text-left">
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores necessitatibus quibusdam distinctio aliquid voluptate cum nemo quod consequuntur eaque molestiae fugiat, ex voluptas. Facilis, debitis quae rerum sapiente ab dolore.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi natus dolorem voluptate id saepe incidunt hic sequi dolorum rerum ratione veritatis, enim aperiam quasi, perferendis voluptatum assumenda quibusdam ducimus?</p>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Lorem ipsum dolor  consequatur alias, non aliquam vel at expedita quaerat explicabo.</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                <div className="flex justify-center">
                <img src="/assets/img-13.jpg" alt="" className="md:w-[40vw] py-[1vw]"/>
                </div>
                <h3 className="md:text-[2.5vw] text-5xl leading-tight md:py-[0.5vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</h3>
                <p className="md:text-[1.2vw] text-2xl leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat harum mollitia maiores ullam commodi. Quia ipsa nam possimus dolores doloremque porro consequatur alias, non aliquam vel at expedita quaerat explicabo.</p>
                </div>
            </div>
        </section>
    )
}

export default Blog
