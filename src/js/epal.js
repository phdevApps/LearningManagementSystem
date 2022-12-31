let messageContainer = document.querySelector('[data-message-container]');
let messageInput = document.querySelector('[data-message-input]');
let sendButton = document.querySelector('[data-send-button]');
let botHeader = document.querySelector("[data-bot-header]")
let botContent = document.querySelector("[data-bot-content]")

const send_API = async (message, url) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', "application/json")

    const opts = {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
            content: message
        })
    }

    const response = await fetch(url, opts)
    const jsonData = response.json()

    return jsonData
}

async function sendMessage() {
    let message = messageInput.value;

    if (message) {
        displayMessage(message, "user");
        messageInput.value = '';

        const res = await send_API(message, window.location.href)
        console.log(res)
        receiveMessage(res.data)
    }

}

function receiveMessage(message) {
    let receive_message = messageInput.value;

    if (message) {
        displayMessage(message, "bot");
        messageInput.value = '';
    }
}

function displayMessage(message, source) {
    let messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList = "ai-bot__message-container__message";

    if (source == "user") {
        messageElement.setAttribute("data-message-source", "user")

    } else {
        messageElement.setAttribute("data-message-source", "bot")
    }

    messageContainer.appendChild(messageElement);
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

botHeader.addEventListener("click", () => {
    botContent.classList.toggle("ai-bot__info-container__content--active")
    console.log("here")
})