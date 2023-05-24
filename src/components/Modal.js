import { FaGithub, FaLink } from "react-icons/fa";
function Modal() {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {portfolio.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;

// {showModal ? (
//     <>
//       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//         <div className="relative w-auto my-6 mx-auto max-w-3xl">
//           {/*content*/}
//           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-sky-900/90 outline-none focus:outline-none">
//             {/*header*/}
//             <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
//               <h3 className="text-3xl font-bold uppercase text-cyan-400">
//                 {portfolio.title}
//               </h3>
//               <div className="flex gap-3 text-3xl text-cyan-400">
//                 <a
//                   href={portfolio.githubLink}
//                   target="_blank"
//                   className=""
//                 >
//                   <FaGithub />
//                 </a>
//                 <a
//                   href={portfolio.deployLink}
//                   target="_blank"
//                   className=""
//                 >
//                   <FaLink />
//                 </a>
//               </div>
//               <button
//             className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//             onClick={() => setShowModal(false)}
//           >
//             <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//               ×
//             </span>
//           </button>
//             </div>
//             {/*body*/}
//             <div className="relative p-4 overflow-y-auto">
//               <p className="my-4 text-cyan-400 text-lg leading-relaxed">
//                 Lorem ipsum dolor, sit amet cons ectetur adipis
//                 icing elit. Praesen tium, quibusdam facere quo
//                 laborum maiores sequi nam tenetur
//                 laud.g4eyerertgersdasdasdAD
//               </p>
//             </div>
//             {/*footer*/}
//             <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
//               <button
//                 className="text-rose-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => setShowModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </>
//   ) : null}
