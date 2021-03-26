import fetch from "isomorphic-unfetch";
import Profile from "../../component/Profile";
import css from "styled-jsx/css";

const style = css `
    .user-contents-wrapper {
        display:flex;
        padding:20px;
    }
    .repos-wrapper {
        width : 100%;
        height : 100vh;
        overflow : scroll;
        padding: 0px 16px;
    }
    .repos-header {
        padding:16px 0;
        font-size:14px;
        font-weight:600;
        border-bottom:1px solid #ele4e8;
    }
    .repos-count {
        display:inline-block;
        padding:2px 5px;
        margin-left:6px;
        font-size:12px;
        font-weight:600;
        line-weight:1;
        color:#586069;
        background-color:rgba(27,31,35,0.08);
        border-radius:20px;
    }
`;

const name = ({ user, repos }) => {
    if(!user) {
        return null;
    }
    return (
        <>
            <div className="user-contents-wrapper">
                <Profile user={user}/>
                <div className="repos-wrapper">
                    <div className="repos-header">
                        Repsitories
                        <span className="repos-count">{user.public_repos}</span>
                    </div>
                </div>
                <style jsx>{style}</style>
            </div>
        </>
    );
}

export const getServerSideProps = async({ query }) => {
    const { name } = query;

    try {
        let user;
        let repos;

        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status === 200) {
            user = await res.json();
            console.log(user);
        }

        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`);
        if(repoRes.status === 200) {
            repos = await repoRes.json();
            console.log(repos);
        }

        return {props:{ user, repos }};
    } catch (e) {
        console.log(e);
        return {props:{}};
    }
}

export default name;