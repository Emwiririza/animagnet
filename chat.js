// Chat popup interactive features with API integration

document.addEventListener('DOMContentLoaded', function() {
    var chatForm = document.getElementById('chatForm');
    var chatMsg = document.getElementById('chatMsg');
    var chatError = document.getElementById('chatError');
    var chatSuccess = document.getElementById('chatSuccess');
    var chatLabel = document.querySelector('.chat-label');

    // Add a chat messages container if not present
    var chatPopup = document.getElementById('myForm');
    var chatMessages = document.createElement('div');
    chatMessages.id = 'chatMessages';
    chatMessages.style.maxHeight = '180px';
    chatMessages.style.overflowY = 'auto';
    chatMessages.style.marginBottom = '10px';
    chatMessages.style.padding = '6px 0';
    chatMessages.style.fontSize = '0.98em';
    chatForm.parentNode.insertBefore(chatMessages, chatForm);

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        chatError.style.display = 'none';
        chatSuccess.style.display = 'none';
        var msg = chatMsg.value.trim();
        if (!msg) {
            chatError.textContent = 'Please enter a message.';
            chatError.style.display = 'block';
            chatMsg.focus();
            return;
        }
        chatForm.querySelector('button[type="submit"]').disabled = true;
        // Show user message instantly
        addChatMessage('You', msg, true);
        chatMsg.value = '';
        chatLabel.classList.remove('active');
        // API integration: replace with your real endpoint
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: msg })
        })
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            // Simulate bot reply
            setTimeout(function() {
                addChatMessage('Richie', 'Thanks for your message! We will reply soon.', false);
            }, 700);
        })
        .catch(function(error) {
            chatError.textContent = 'Failed to send. Please try again.';
            chatError.style.display = 'block';
        })
        .finally(function() {
            chatForm.querySelector('button[type="submit"]').disabled = false;
        });
    });

    // Floating label effect for textarea
    chatMsg.addEventListener('input', function() {
        if (chatMsg.value.trim() !== '') {
            chatLabel.classList.add('active');
        } else {
            chatLabel.classList.remove('active');
        }
    });

    function addChatMessage(sender, text, isUser) {
        var msgDiv = document.createElement('div');
        msgDiv.style.marginBottom = '6px';
        msgDiv.style.display = 'flex';
        msgDiv.style.justifyContent = isUser ? 'flex-end' : 'flex-start';
        msgDiv.innerHTML = '<span style="background:' + (isUser ? '#de005e' : '#eee') + ';color:' + (isUser ? '#fff' : '#333') + ';padding:6px 12px;border-radius:12px;max-width:70%;display:inline-block;">' + (isUser ? '' : '<b>' + sender + ': </b>') + text + '</span>';
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
