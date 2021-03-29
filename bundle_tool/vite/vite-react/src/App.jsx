import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import PrintPage from "./pages/PrintPage";
import { ThemeContext } from "./context";
import "./App.scss";
import "antd/dist/antd.css";

function App() {
    const [contextValue, setContextValue] = useState({
        theme: "light",
        toggleTheme: toggleTheme,
    });

    function toggleTheme() {
        setContextValue((value) => {
            return {
                ...value,
                theme: value.theme === "light" ? "dark" : "light",
            };
        });
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className="main">
                <Router>
                    <Link to="/">HOME</Link> | <Link to="/print">PRINT</Link>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/print" component={PrintPage} />
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
