import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import PrintPage from "./pages/PrintPage";
import RefsComp from "./pages/RefsComp";
import TestAsyncState from "./pages/TestAsyncState";
import HookComp from "./pages/HookComp";
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
                    <Link to="/">HOME</Link> | <Link to="/print">PRINT</Link> |{" "}
                    <Link to="/refs">Refs转发</Link> |{" "}
                    <Link to="/testasyncstate">测试state变更的异步效果</Link> |{" "}
                    <Link to="/hookcomp">HOOK COMP</Link> |{" "}
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/print" component={PrintPage} />
                        <Route exact path="/refs" component={RefsComp} />
                        <Route exact path="/testasyncstate" component={TestAsyncState} />
                        <Route exact path="/hookcomp" component={HookComp} />
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
