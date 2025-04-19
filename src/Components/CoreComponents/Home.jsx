import React, { useState, useRef, useEffect } from "react";
import SendIcon from "../../assets/send.png";
import "./Home.css";
import { LOCALHOST_URL } from "../../../config";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);
  const bottomRef = useRef(null); // Ref for dummy div

  const handleInput = (event) => {
    setText(event.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const notify = (msg) => {
    toast.info(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  const sendData = async () => {
    if (!text.trim()) {
      notify("Please enter a message");
      return;
    }

    const newMessages = [...messages, { from: "user", text }];
    setMessages(newMessages);

    try {
      const response = await fetch(`${LOCALHOST_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      setMessages([...newMessages, { from: "ai", text: data.reply.trim() }]);
      setText("");

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">VasuX.ai</h1>

      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} /> {/* Dummy div for auto scroll */}
      </div>

      <div className="input-container">
        <textarea
          ref={textareaRef}
          placeholder="Shoot me a question"
          className="text-box"
          value={text}
          onChange={handleInput}
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendData();
            }
          }}
        />
        <button className="send-button" onClick={sendData}>
          <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
