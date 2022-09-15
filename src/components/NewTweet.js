import { useState } from "react";

const NewTweet = () => {

    const [text, setText] = useState('');

    const maxTweetLength = 280;
    const tweetLeft = maxTweetLength - text.length;

    const handleChange = (e) => {
        const text = e.target.value;
        setText(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add handle Submit call
        console.log('text: ', text);
        setText('');
    }

    return (
        <div>
            <h3 className="center">Compose New Text</h3>
            <form className="new-tweet" onSubmit={handleSubmit}>
                {/* TODO: Redirect to / if submitted */}
                <textarea 
                    className="textarea"
                    placeholder="What's happening?"
                    value={text}
                    onChange={handleChange}
                    maxLength={maxTweetLength} />
                {
                    tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>
                }
                <button className="btn" type="submit" disabled={!text.length}>Submit</button>
            </form>

        </div>
    )
}

export default NewTweet;