import Header from "../component/Header";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <style jsx global>{
                `body {
                    margin : 0;
                    font-family: Noto Sans, Noto Sans KR;
                }`
            }</style>
        </>
    );
};

export default MyApp;