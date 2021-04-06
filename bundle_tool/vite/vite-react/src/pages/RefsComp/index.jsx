import React, { useImperativeHandle, useRef } from "react";
import { Button, Input } from "antd";

const RefsChild = React.forwardRef((props, ref) => {
    return (
        <section>
            <h3 ref={ref}>child</h3>
            <section>this is children</section>
        </section>
    );
});

const RefsChildNomal = React.forwardRef((props, ref) => {
    const titleRef = useRef();
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            titleRef,
            focus: handleFocus,
        };
    });

    return (
        <section>
            <h3 ref={titleRef}>nomal child</h3>
            <section>
                <p>this is nomal children</p>
                <input ref={inputRef} type="text" />
            </section>
        </section>
    );
});

class RefsChildTwo extends React.Component {
    render() {
        return (
            <section>
                <h3>class child</h3>
                <section>this is children</section>
            </section>
        );
    }
}

const RefsFunc = () => {
    const funcRef = React.createRef();
    const funcNomalRef = React.createRef();
    const classRef = React.createRef();

    const handleClick = () => {
        console.log("children funcNomalRef::", funcNomalRef);
        console.log("children funcRef::", funcRef);
        console.log("children classRef::", classRef);
    };

    const handleFocus = () => {
        funcNomalRef.current.focus();
    };

    return (
        <section>
            <h2>function refs</h2>
            <section>
                <p>function parent</p>
                <Button onClick={handleClick}>get child ref</Button>
                <Button onClick={handleFocus}>focus</Button>
                <RefsChildNomal ref={funcNomalRef} />
                <RefsChild ref={funcRef} />
                <RefsChildTwo ref={classRef} />
            </section>
        </section>
    );
};

class RefsComp extends React.Component {
    render() {
        return (
            <section>
                <h2>CLASS refs</h2>
                <section>
                    <p>class parent</p>
                    <RefsFunc />
                </section>
            </section>
        );
    }
}

export default RefsComp;
