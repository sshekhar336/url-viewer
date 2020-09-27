import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { Redirect } from 'react-router-dom';

export default function Dashboard() {

    const token = localStorage.getItem("token");

    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (token) {

        }
        else {
            setRedirect(true)
        }
    }, [redirect])

    if (redirect) {
        localStorage.clear()
        return <Redirect to='/' />;
    }

    return (
        <div className="dashboardContainer">
            <div className="header">
                <div className="eachHeaderElement">{localStorage.getItem("email")}</div>
                <div className="eachHeaderElement">
                    <input type="text"
                        style={{ width: '25vw' }}
                        value={url1}
                        onChange={(e) => setUrl1(e.target.value)}
                        placeholder="Enter url 1 here"
                    />
                </div>
                <div className="eachHeaderElement">
                    <input type="text"
                        style={{ width: '25vw' }}
                        value={url2}
                        onChange={(e) => setUrl2(e.target.value)}
                        placeholder="Enter url 2 here"
                    />
                </div>
                <div className="eachHeaderElement">
                    <button className="logoutButton"
                        onClick={() => setRedirect(true)}
                    >
                        Log out
                </button>
                </div>
            </div>
            <div className="viewAreaConatiner">
                <div className="viewArea">
                    {
                        url1.length > 0 ?
                            <iframe src={url1} style={{
                                height: "100%",
                                width: "100%"
                            }}
                                title="url2Viewer"
                            >
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                            : <p className="urlInputtext">Fill Url 1 in above input field to view the web page here.</p>
                    }
                </div>
                <div className="viewArea">
                    {
                        url2.length > 0 ?
                            <iframe src={url2} style={{
                                height: "100%",
                                width: "100%"
                            }}
                                title="url2Viewer"
                            >
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                            : <p className="urlInputtext">Fill Url 2 in above input field to view the web page here.</p>
                    }
                </div>
            </div>
        </div>
    )
}