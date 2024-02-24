export default function AddLocationButton({ location, addLocation }) {
  return (
    <button
      onClick={() => addLocation()}
      disabled={!location}
      style={{
        backgroundColor: location ? "#4CAF50" : "#888",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "12px",
      }}
    >
      ADD
    </button>
  );
}
