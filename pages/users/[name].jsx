import fetch from "isomorphic-unfetch";
import Profile from "../../component/Profile";
import Repositories from "../../component/Repositories";
import css from "styled-jsx/css";

const style = css `
    .user-contents-wrapper {
        display:flex;
        padding:20px;
    }

`;

const name = ({ user, repos }) => {
    console.log("!!!!")
    console.log(user)
    console.log("!!!!")

    return (
        <div className="user-contents-wrapper">
            <Profile user={user} />
            <Repositories user={user} repos={repos}/>
            <style jsx>{style}</style>
        </div>
    );
}

export const getServerSideProps = async({ query }) => {
    const { name, page } = query;

    try {
        let user;
        let repos;

        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status === 200) {
            user = await res.json();
        }
 
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`);
        if(repoRes.status === 200) {
            repos = await repoRes.json();
        }

        return {props:{ user, repos }};
    } catch (e) {
        console.log(e);
        return {props:{}};
    }
}

export default name;