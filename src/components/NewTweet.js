import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from '../actions/tweets';

const NewTweet = ({ dispatch, id }) => {

    const [text, setText] = useState('');

    const maxTweetLength = 280;
    const tweetLeft = maxTweetLength - text.length;

    const handleChange = (e) => {
        const text = e.target.value;
        setText(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(handleAddTweet(text, id));

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

export default connect()(NewTweet);