import React from 'react';
import Icon from '../Icon';

const Modal = ({ feature, onClose }) => {
  if (!feature) return null;

  const { title, icon, modalContent } = feature;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Icon name={icon} className="w-7 h-7 text-indigo-500" />
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-full">
            <Icon name="x" className="w-6 h-6" />
          </button>
        </header>
        
        <div className="overflow-y-auto">
          {modalContent.type === 'component' ? (
            modalContent.component
          ) : (
            <div className="p-6 space-y-6">
              {modalContent.longDescription && <p className="text-gray-600">{modalContent.longDescription}</p>}
              {modalContent.workflow && (
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Workflow:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    {modalContent.workflow.map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                </div>
              )}
              {modalContent.techStack && (
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {modalContent.techStack.map((tech, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;