export default function QuestionImage({ src, alt }) {
  if (!src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt || "Question visual"}
      style={{
        width: "250px",
        height: "250px",
        objectFit: "contain",
        display: "block",
        margin: "20px auto",
      }}
    />
  );
}
