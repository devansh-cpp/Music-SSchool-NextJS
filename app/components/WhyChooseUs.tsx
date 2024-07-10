"use client";

import { title } from "process";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title : "Collaborative Editing",
        description  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque sunt suscipit ipsam reiciendis ipsum, consequatur itaque id sed exercitationem optio fuga quaerat eius fugiat nam eos ducimus corporis. Cupiditate possimus soluta aut error repellendus tempora pariatur enim, ratione labore, repellat, veritatis cumque facilis eos corrupti reiciendis optio? Nisi, voluptatibus."
    },
    {
        title : "Running of Content",
        description  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque sunt suscipit ipsam reiciendis ipsum, consequatur itaque id sed exercitationem optio fuga quaerat eius fugiat nam eos ducimus corporis. Cupiditate possimus soluta aut error repellendus tempora pariatur enim, ratione labore, repellat, veritatis cumque facilis eos corrupti reiciendis optio? Nisi, voluptatibus."
    },
    {
        title : "Best Music COntent",
        description  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque sunt suscipit ipsam reiciendis ipsum, consequatur itaque id sed exercitationem optio fuga quaerat eius fugiat nam eos ducimus corporis. Cupiditate possimus soluta aut error repellendus tempora pariatur enim, ratione labore, repellat, veritatis cumque facilis eos corrupti reiciendis optio? Nisi, voluptatibus."
    },
    {
        title : "Learn with the best",
        description  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cumque sunt suscipit ipsam reiciendis ipsum, consequatur itaque id sed exercitationem optio fuga quaerat eius fugiat nam eos ducimus corporis. Cupiditate possimus soluta aut error repellendus tempora pariatur enim, ratione labore, repellat, veritatis cumque facilis eos corrupti reiciendis optio? Nisi, voluptatibus."
    },
]

export default  function WhyChooseUse(){
    return(
        <>
           <div>
            <StickyScroll content={content}/>
           </div>
        </>
    )
}