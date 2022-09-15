import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from '../actions/tweets';
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {

    const navigate = useNavigate();
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
        if (!id) {
            navigate('/');
        }
    }

    return (
        <div>
            <h3 className="center">Compose New Text</h3>
            <form className="new-tweet" onSubmit={handleSubmit}>
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