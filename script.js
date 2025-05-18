const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('message-input');

sendBtn.addEventListener('click', () => {
  const message = input.value.trim();
  if (message) {
    appendMessage("You", message);
    simulateReply();
    input.value = '';
  }
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message');
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateReply() {
  const replies = ["Hi there!", "How's it going?", "That's interesting!", "Cool!", "Tell me more."];
  const reply = replies[Math.floor(Math.random() * replies.length)];
  setTimeout(() => appendMessage("Stranger", reply), 1000);
}
