import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Close from "./Icons/close";

export default function Artist({ props }) {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  // return;
  return (
    <>
      <section
        className="c-artist-block flex flex-col max-w-full m-1"
        id={props.url}
      >
        <div
          className="c-artist-block__image w-[300px] h-[150px] md:w-[175px] md:h-[500px] z-[2] bg-cover bg-center flex items-end"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <span className="c-artist-block__content z-[3] ml-[10px]">
            <h3 className="c-artist-block__heading inline z-[3] text-2xl font-bold text-white uppercase hover:cursor-default mr-[60px]">
              {props.name}
            </h3>
            <div className="c-artist-block__heading--border h-[6px] w-[75px] bg-ur_red mt-[6px]"></div>
            <Button
              color={"blue"}
              label={"View Artist"}
              props={"my-[20px]"}
              click={() => setIsOpen(true)}
            />
          </span>
          <div className="c-artist-block__overlay"></div>
        </div>
        <div className="c-artist-block__bg"></div>
      </section>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-black p-12">
            <p>{props.name}</p>
            {/* <p>test</p> */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
    // <article className="h-64 w-64 sm:h-80 sm:w-80 m-1">
    //   {/* <h2>{data.author}</h2> */}
    //   {/* <h1>{data.metadata_title}</h1> */}
    //   <Transition
    //     show={isOpen}
    //     enter="transition duration-100 ease-out"
    //     enterFrom="transform scale-95 opacity-0"
    //     enterTo="transform scale-100 opacity-100"
    //     leave="transition duration-75 ease-out"
    //     leaveFrom="transform scale-100 opacity-100"
    //     leaveTo="transform scale-95 opacity-0"
    //   >
    //     <Dialog
    //       open={isOpen}
    //       onClose={() => setIsOpen(false)}
    //       className="relative z-50"
    //     >
    //       {/* The backdrop, rendered as a fixed sibling to the panel container */}
    //       <div className="fixed inset-0 bg-black/75" aria-hidden="true" />

    //       {/* Full-screen container to center the panel */}
    //       <div className="fixed inset-0 flex items-center justify-center p-4">
    //         {/* The actual dialog panel  */}
    //         <Dialog.Panel className="mx-auto w-full max-w-3xl rounded bg-black p-12 relative">
    //           <h1 className="text-3xl text-center pb-8">
    //             {data.metadata_title + " " + data.metadata_description}
    //           </h1>
    //           {/* <h1 className="text-base">{data.services[1].type}</h1> */}
    //           <button
    //             onClick={() => setIsOpen(false)}
    //             className="top-4 right-4 absolute"
    //           >
    //             <Close />
    //           </button>
    //         </Dialog.Panel>
    //       </div>
    //     </Dialog>
    //   </Transition>
    //   <div className="h-64 w-64 sm:h-80 sm:w-80 opacity-0 hover:opacity-100 transition-all bg-black/75 cursor-pointer absolute z-10 grid place-items-center">
    //     <Button
    //       color={"red"}
    //       label={"Stream"}
    //       props={""}
    //       click={() => setIsOpen(true)}
    //     />
    //   </div>
    // </article>
  );
}
