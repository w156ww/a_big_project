import React from "react";
import Toolbar from "../Toolbar";
import "./index.scss";

const Home = () => {
    return (
        <div className="home">
            <h2>home</h2>
            <Toolbar></Toolbar>
            <div className="yes">
                yes
                <p>yes</p>
                <p>yes</p>
            </div>
            <div className="no">
                no
                <p>no</p>
                <p>no</p>
            </div>
            <section className="yes">
                <p>yes</p>
                <p>yes</p>
            </section>
        </div>
    );
};

export default Home;
