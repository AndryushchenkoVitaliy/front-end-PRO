import React from "react";

function EmojiItem({ emoji, votes, onVote }) {
  return (
    <div style={{ textAlign: "center" }}>
      
      <div
        style={{ fontSize: "50px", cursor: "pointer" }}
        onClick={onVote}
      >
        {emoji}
      </div>

      <div>{votes}</div>

    </div>
  );
}

export default EmojiItem;