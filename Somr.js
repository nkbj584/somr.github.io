function speakText() {
  const text = document.getElementById("inputText").value;

  if (!text) {
    alert("Please enter some text!");
    return;
  }

  // Example NariLabs TTS API endpoint (replace with real one if needed)
  const apiUrl = `https://narilabs.xyz/tts?text=${encodeURIComponent(text)}`;

  // Create a new Audio object and play it
  const audio = new Audio(apiUrl);
  audio.play();
}
