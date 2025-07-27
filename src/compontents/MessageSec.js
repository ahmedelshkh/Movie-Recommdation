import { Link } from "react-router-dom";

function MessageSec() {
    return(
        <div className="message">
            <h1>Welcome To Our Movie App</h1>
            <p>Millions Of Movies And TV Shows To Discove. Explore Now</p>
            <form action="post">
                <input placeholder="Search And Explore" type="text" name="search" id="search" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default MessageSec;