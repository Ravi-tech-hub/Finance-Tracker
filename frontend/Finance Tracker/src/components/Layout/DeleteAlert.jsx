const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm font-medium text-slate-700">{content}</p>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-rose-600 text-white rounded-lg py-2 px-4 text-sm font-semibold hover:bg-rose-700"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteAlert;
