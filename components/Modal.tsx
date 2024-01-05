import React, { useState } from "react";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <>
          <div
            onClick={closeModal}
            className={`
              fixed inset-0 flex justify-center items-center transition-colors
              ${showModal ? "visible bg-black/20" : "invisible"}
            `}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`
                bg-white rounded-xl shadow p-6 transition-all 
                ${showModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}
              `}
            >
              <div className="text-center w-56">
                {/* <Trash size={56} className="mx-auto text-red-500" /> */}
                <div className="mx-auto my-4 w-48">
                  <h3 className="text-lg font-black text-gray-800">
                    Are u login ?
                  </h3>
                  <p className="text-sm text-gray-500">
                    Please login to continue
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="btn btn-danger w-full">Sign In</button>
                  <button className="btn btn-light w-full" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
