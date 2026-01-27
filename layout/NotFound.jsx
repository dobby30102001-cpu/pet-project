import { useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/")
    }


    return (
        <div className="not-found-container">
            <div className="not-found-wapper">
                <h1 className="not-fount-title">Oops!</h1>

                <h2 className="not-fount-code">404 - PAGE NOT FOUND</h2>

                <p className="not-found-desc">
                    The page you are looking for might have been removed,<br />
                    had its name changed or is temporarily unavailable.
                </p>

                <button className="not-found-btn" onClick={handleBackHome}>GO TO HOME</button>
            </div>
        </div>
    )
};
