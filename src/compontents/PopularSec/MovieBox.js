import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function MovieBox(props) {
    const navigate = useNavigate();
    function handleNavigate(id) {
        navigate(`movie-details/${id}`)
    }
    return (
        <div onClick={() => handleNavigate(props.id)} key={props.id} className="box">
            <div className="image">
                <img src={props.img} alt="Movie"/>
                    <svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M128,28A100,100,0,1,0,228,128,100.11332,100.11332,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.10416,92.10416,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,128Zm48,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,184,128Zm-96,0a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,88,128Z">
                            </path>
                        </g>
                    </svg>
                    <div className="progress-container">
                        <svg className="progress-ring" width={((parseFloat(props.rate)/10)) * 80 } height="100">
                            <circle className="progress-ring__circle" stroke="green" stroke-width="3" fill="transparent" r="25" cx="50"
                                cy="50" />
                        </svg>
                        <span>
                            {props.rate}
                        </span>
                    </div>
            </div>
            <div className="des">
                <h3>
                    {props.title}
                </h3>
                <div className="date">
                    <span>
                        {props.date}
                    </span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                                fill="#000000"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;