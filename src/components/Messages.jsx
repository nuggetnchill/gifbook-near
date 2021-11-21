import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages </h2>
      <div className="messages-container">
      {messages.map((message, i) => {
        
        const from = message.timestamp.substr(7,6);
        const to = message.timestamp.substr(message.timestamp.length-6);
        
        return(
        <div 
          key={i} 
          className={message.premium ? 'is-premium yeet-container' : 'yeet-container'}
        >
          <div
            className="account-avatar"
            style={{
              backgroundImage: `linear-gradient(to bottom, #${from}, #${to})`,
            }}
            ></div>
          <p>From: <strong>{message.sender}</strong></p>
          <p>{message.text}</p>
            {message.donation > 0.01 && (<p> <strong>Donation: </strong> {Number(message.donation/10**24).toFixed(2)}Ⓝ</p>)}
          <p className="time-stamp">{new Date(message.timestamp / 1000000).toLocaleString()}</p>
          {message.gif && (<img src={message.gif} onError={(event) => event.target.src = 'https://media.giphy.com/media/9muUXOtrd5gpG/giphy-downsized.gif'} />)}
        </div>)
      })}
      </div>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
