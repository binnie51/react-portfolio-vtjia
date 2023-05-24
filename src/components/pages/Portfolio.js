import "../styles/Portfolio.css";
import { portfolios } from "../../portfolioData";

// icons
import { FaGithub, FaLink } from "react-icons/fa";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Portfolio() {
  // const [pageContent, setPageContent] = useState("App");
  const [isOpen, setIsOpen] = useState(false); // open/close modals

  // Note: have another state to store the data for modal to avoid opening all modals 
  // Only display specific data on the clicked card
  const [modalData, setModalData] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const filterContent = (portType) => {};

  return (
    <div
      className="container flex flex-wrap justify-between items-center mx-auto px-10 md:px-14 lg:px-20 pb-10"
      id="portfolios"
    >
      <section className="w-full mb-32">
        {/* <p className="text-center pt-16">Choose a category</p> */}
        <div className="flex flex-row gap-4 justify-center pb-4 pt-16">
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:border-b-2 focus:border-amber-600 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("apps")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-amber-600"></span>
            Apps
          </button>
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:border-b-2 focus:border-amber-600 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("graphic")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-amber-600"></span>
            Graphics
          </button>
          <button
            className="relative btnFilter uppercase overflow-hidden text-white tracking-wider focus:border-b-2 focus:border-amber-600 font-medium rounded text-sm px-3 py-2.5"
            type="button"
            onClick={() => filterContent("illustration")}
          >
            <span className="absolute inset-x-0 h-1 bottom-0 bg-amber-600"></span>
            Illustrations
          </button>
        </div>
        <h2 className="work-header font-bold leading-normal">Portfolio</h2>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center">
          {/* portfolio list */}
          {portfolios.map((portfolio) => {
            return (
              <div className="mb-4">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    src={portfolio.image}
                    alt={portfolio.alt}
                    className=" h-48 w-96 transition duration-300 ease-in-out"
                  />

                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 p-5">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                      {portfolio.title}
                    </h4>
                    <p className="leading-normal text-gray-100 line-clamp">
                      {portfolio.description}
                    </p>
                    <button
                      className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm mt-6 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setIsOpen(true); 
                        setModalData(portfolio);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
                
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
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
                          {/* modal starts here */}
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-sky-900/90 outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-400 rounded-t">
                                  <h3 className="text-3xl font-bold uppercase text-cyan-400">
                                    {modalData.title}
                                  </h3>
                                  <div className="flex gap-3 text-3xl text-cyan-400 ml-5">
                                    <a
                                      href={modalData.githubLink}
                                      target="_blank"
                                      className=""
                                    >
                                      <FaGithub />
                                    </a>
                                    <a
                                      href={modalData.deployLink}
                                      target="_blank"
                                      className=""
                                    >
                                      <FaLink />
                                    </a>
                                  </div>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 overflow-y-auto text-start">
                                  <p className="my-4 text-cyan-400 text-lg leading-relaxed">
                                    {modalData.description}
                                  </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-400 rounded-b">
                                  <button
                                    className="text-rose-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
          
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
