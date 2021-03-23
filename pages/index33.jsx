//import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
    const [name, setTitle] = useState("");
    const router = useRouter();

    return (
        <div>
            <button type="button" onClick={() => router.push("/tomato")}>
                go tomato
            </button>
            <p>이름</p>

            setName(input)값의 변경이 일어나면 name값이 변경된다.<br/>
            <input value={name} onChange={(e) => setTitle(e.target.value)} style={{marginRight:"12px"}}/>
            
            <button type="button" onClick={() => router.push("/vegetable/${name}")}>
                {name}으로 가기
            </button>

            <div>
                <img src="/git.JPG" alt="git"/>
            </div>
        </div>        
    );
};

export default App;