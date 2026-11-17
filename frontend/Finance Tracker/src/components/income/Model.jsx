import React from "react";
const Model = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full overflow-y-auto overflow-x-hidden bg-slate-950/40 p-4">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-xl shadow-slate-950/20">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
            <button
              type="button"
              className="text-slate-500 bg-transparent hover:bg-slate-100 hover:text-slate-950 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center cursor-pointer"
              onClick={onClose}
              aria-label="Close modal"
            >
              X
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Model;
