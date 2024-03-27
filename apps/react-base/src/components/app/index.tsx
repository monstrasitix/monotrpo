import "@/landing/main";
import { randomInteger } from "@/random/index";
import { useEffect } from "react";

export const App = () => {
    useEffect(() => {
        console.log(randomInteger(20));
        console.log(randomInteger(30));
    }, []);

    return (
        <>
            <h1>Welcome</h1>
            <h1>Welcome</h1>
            <h1>Welcome</h1>
        </>
    );
};
