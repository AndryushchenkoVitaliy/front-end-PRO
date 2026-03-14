import React from "react";

class EmojiItem extends React.Component {

    render() {

        const { emoji, votes, onVote } = this.props;

        return (
            
            <div style={{ textAlign: "center" }}>

                <div
                    style={{ fontSize: "45px", cursor: "pointer" }}
                    onClick={onVote}
                >
                    {emoji}
                </div>

                <div>{votes}</div>

            </div>
        );

    }

}

export default EmojiItem;