export default function SoundButton({ text }) {
  function speak() {
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(formatSpeech(text));

    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    speechSynthesis.speak(utterance);
  }

  function formatSpeech(text) {
    return text.replace(/_+/g, "    blank   ");
  }

  return (
    <button onClick={speak} aria-label="Read question aloud">
      🔊 Listen
    </button>
  );
}
