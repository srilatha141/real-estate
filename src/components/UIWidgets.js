import React, { useState } from 'react';

export default function UIWidgets({ scrollTop, chatbot }) {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChatbot = () => setChatOpen(!chatOpen);

  return (
    <>
      {scrollTop?.enabled && (
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1040,
            width: '40px',
            height: '40px',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '50%'
          }}
        >
          <i className={`fa fa-${scrollTop.icon}`}></i>
        </a>
      )}

      {chatbot?.enabled && (
        <>
          <button
            id="chatbotToggle"
            onClick={toggleChatbot}
            className={`btn btn-warning rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg animate__animated animate__infinite ${chatbot.toggleButton.animation}`}
            style={{
              width: chatbot.toggleButton.size,
              height: chatbot.toggleButton.size,
              zIndex: 1050,
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: chatbot.toggleButton.backgroundColor,
              borderColor: chatbot.toggleButton.backgroundColor,
              color: chatbot.toggleButton.textColor
            }}
          >
            <i className={`bi bi-${chatbot.toggleButton.icon}`}></i>
          </button>

          {chatOpen && (
            <div
              id="chatbotWindow"
              className="card position-fixed bottom-0 end-0 m-4 shadow-lg d-flex"
              style={{
                width: chatbot.window.width,
                height: chatbot.window.height,
                zIndex: 1051,
                borderRadius: '15px',
                overflow: 'hidden',
                flexDirection: 'column'
              }}
            >
              <div
                className="card-header bg-gradient text-white d-flex justify-content-between align-items-center"
                style={{ background: chatbot.window.gradient }}
              >
                <span className="fw-bold text-dark">{chatbot.window.title}</span>
                <button
                  type="button"
                  className="btn-close btn-close-dark"
                  aria-label="Close"
                  onClick={toggleChatbot}
                ></button>
              </div>
              <div
                className="card-body overflow-auto flex-grow-1"
                style={{ fontSize: '15px', backgroundColor: '#f0f2f5' }}
              >
                <div className="text-muted mb-2">{chatbot.window.welcomeMessage}</div>
              </div>
              <div className="card-footer p-2" style={{ backgroundColor: '#e9ecef' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={chatbot.window.inputPlaceholder}
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}