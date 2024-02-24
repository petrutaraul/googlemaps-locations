import { classNames } from "../utils/classNames";

export default function AddLocationButton({ location, addLocation }) {
  return (
    <button
      onClick={() => addLocation()}
      disabled={!location}
      className={classNames(
        "inline-block px-8 py-4 mx-1 my-2 text-center text-white rounded-full cursor-pointer text-lg",
        location ? "bg-blue-500" : "bg-gray-500",
        !location && "cursor-not-allowed"
      )}
    >
      ADD
    </button>
  );
}
