const Modal = ({children, openModal, setOpenModal, top}) => {
  const closeModal = (e) => {
    e.preventDefault();
    setOpenModal(false);

  };

  return (
    <>
      {openModal && (
        <div
          className={`fixed z-[1000] overflow-y-auto  w-full left-0 ${top ? top : "top-[10%]"}`}
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt- px- pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={closeModal}
              />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-auto">
              &#8203;
            </span>
            <div
              className="inline-block align-center  text-left overflow-hidden shadow-xl transform transition-all sm:my-0 sm:align-middle sm:max-w-7xl sm:max-h-[100vh] sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
