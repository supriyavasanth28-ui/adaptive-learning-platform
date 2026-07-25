export default function Hint({ text, onUse }) {
  if (!text) {
    return null;
  }

  return (
    <div>
      <button onClick={onUse}>💡 Hint</button>
    </div>
  );
}
