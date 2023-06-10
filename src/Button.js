import React, { useState, useRef } from 'react';
import './App.css';
import { RiFileCopyLine } from 'react-icons/ri';

function Button() {
    const [clicks, setClicks] = useState([]);
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);
  
    const handleClick = () => {
      const currentTime = new Date().toLocaleTimeString();
      const newClick = {
        time: currentTime,
        comment: comment.trim(),
      };
      setClicks([newClick, ...clicks]); // Add new click to the beginning of the array
      setComment(''); // Reset comment input field
      commentInputRef.current.focus(); // Focus on the comment input field after clicking the button
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleClick();
        const currentTime = "";
        const newClick = {
        time: currentTime,
        comment: comment.trim(),
      };
      setClicks([newClick, ...clicks]); // Add new click to the beginning of the array
      setComment(''); // Reset comment input field
      commentInputRef.current.focus(); // Focus on the comment input field after clicking the button
      }
    };
    const handleCopyToClipboard = () => {
      const textToCopy = clicks.map((click) => `${click.time}: ${click.comment}`).join('\n');
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log('Text copied to clipboard:', textToCopy);
        })
        .catch((error) => {
          console.error('Failed to copy text to clipboard:', error);
        });
    };
  return (
    <div>
     
      <button class="button" onClick={handleClick}> Log
        </button>
        
      <div class="form-control">
            <input class="input input-alt" placeholder="Add comment" ref={commentInputRef} type="text" value={comment} onChange={handleCommentChange} onKeyDown ={handleKeyDown} required="" type="text"></input>
            <span class="input-border input-border-alt"></span>
        </div>
      <div className="textContainer">
        {clicks.map((click, index) => (
          <div key={index} className="textLine">
            <span>{click.time}</span>
            <span> {click.comment}</span>
          </div>
        ))}
      </div>
      <button className="copyButton" onClick={handleCopyToClipboard}>
      <RiFileCopyLine /> 
      </button>
    </div>
  );
}

export default Button;
