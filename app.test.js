const { JSDOM } = require("jsdom");

const html = `
  <div id="chat-box"></div>
  <input type="text" id="message-input">
  <button id="send-btn">Send</button>
`;

const dom = new JSDOM(html);
global.document = dom.window.document;

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
}

appendMessage("You", "Test Message");

if (chatBox.innerHTML.includes("Test Message")) {
  console.log("✅ Test Passed");
} else {
  console.error("❌ Test Failed");
}
