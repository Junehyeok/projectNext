import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
    const username = user && user.name;
    return(
        <>
            {username}
            {time}
        </>
    )
}

export const getStaticProps = async({ params }) => {
    try {
        const res = await fetch(`https://api.github.com/users/${params.name}`);
        const user = await res.json();
        if(res.status === 200) {
            const user = await res.json();
            return { props: {user, time : new Date().toISOString() } };
        }
        return {props: { time : new Date().toISOString() } };
    } catch (error) {  
        console.log(error);
        return {props: { time : new Date().toISOString() } };
    }
};

export async function getStaticPaths() {
    return {
        paths: [{params : {name: "Junehyeok" } }],
        fallback : true,
    }
}

export default name;