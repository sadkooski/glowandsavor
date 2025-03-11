import React from "react";

const About = () => {
    return (
<section className="w-full bg-white">
    <div className="flex flex-row w-full h-fit relative px-[12vw]">
            <img src="/assets/img-4.jpg"
                alt="Kontakt"
                className="w-[40vw] h-fit object-contain object-right-top z-1 "/>
            <div className="bg-gray-100 text-left flex flex-col gap-[2vw] py-[4vw] px-[10vw] w-[45vw] h-fit absolute top-[10%] left-[45%] z-0 ">
                <h3 className="text-[2vw]">Lorem ipsum dolor sir, a elit. Alias, excepturi totam aliquam provident doloremque explicabo s
                </h3>
                <p className="text-[1.7vw]">Lorem ipsum dolor sit ia, doloribus eviumremque tempore quae dolores? Unde soluta dolorum accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta dolorum temporibus quos omnis nobis repudiandae cumque vel non, corporis, veniam ratione. Nam autem voluptatem nihil accusantium illum amet commodi.</p>
            </div>
    </div>

    <div className="flex flex-row w-full h-[60vh] mt-[12vw] pr-[8vw] text-left">
            <p className="text-[1.7vw] pt-[2vw] px-[10vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos praesentium, alias neque necessitatibus impedit est, vero itaque molestiae consequatur, esse ut. Odio eligendi ea numquam praesentium dolores, quis sapiente voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam dolorem doloribus voluptas, tenetur illo quia sequi magnam suscipit vitae accusantium eveniet similique quibusdam eius amet delectus tempora repudiandae consectetur!Lorem</p>
        <img src="/assets/img-5.jpg"
                alt="Kontakt"
                className="w-[40vw] object-cover" />
    </div>
</section>
    )
}

export default About;