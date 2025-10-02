const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm  font-medium">{content}</p>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-green-200 text-white rounded-lg py-1 px-2 hover:bg-green-500"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DeleteAlert;
