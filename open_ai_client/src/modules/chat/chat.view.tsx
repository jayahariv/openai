import React, { useState } from 'react';
import { AskGpt3 } from './chat.service'

const chatView = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await AskGpt3(question);
    setAnswer(response);
  };
  return (
    <div
      style={{
        width: '100vw', // Full width
        height: '100vh', // Full height
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#282c34',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            flexGrow: 1, // Use all available space
            width: '100%',
            height: '100%',
            padding: '15px',
            fontSize: '16px',
            border: 'none', // Remove border for a seamless look
            resize: 'none', // Prevent resizing
            boxSizing: 'border-box',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'white',
            color: 'blue',
            fontSize: '16px',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            width: '100%', // Full width button
            borderTop: '1px solid #ccc', // Optional: Separate button visually
          }}
        >
          Ask
        </button>
      </form>
      {answer && (
        <pre
          style={{
            padding: '10px',
            fontSize: '16px',
            textAlign: 'left',
            backgroundColor: '#fff',
            color: '#333',
            width: '100%',
            boxSizing: 'border-box',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            borderTop: '1px solid #ccc',
          }}
        >
          {answer}
        </pre>
      )}
    </div>
  );
};

export default chatView;