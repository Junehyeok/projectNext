import { GoMail } from "react-icons/go";
import fetch from "isomorphic-unfetch";
import css from "styled-jsx/css";

const style = css`
    h2 {
        margin-left:20px;
    }
    .user-bio {
        margin-top : 12px;
        font-style: italic;
    }

    .profile-box {
        width : 25%;
        max-width : 272px;
        margin-right :26px;
    }

    .profile-image-wrapper {
        width : 100%;
        border : 1px solid #ele4e8;
    }

    .profile-image-wrapper .profile-image {
        display : block;
        width : 100%;
    }

    .profile-username {
        margin : 0;
        padding-top :16px;
        font-size : 26px;
    }

    .profile-user-login {
        margin:0;
        font-size:20px;
    }

    .profile-user-bio {
        margin:0;
        padding-top:16px;
        font-size:14px;
    }

    .profile-user-info {
        display : flex;
        align-items : center;
        margin: 4px 0 0;
    }

    .profile-user-info-text {
        margin-left : 6px;
    }
 `;

const name = ({user}) => {  
    if(!user) {
        return null;
    }
    return (
        <>
        { user ? (
            <div className="profile-box">
                <div className="profile-image-wrapper">
                    <img className="profile-image" src={user.avatar_url} alt={`${user.name} 프로필 이미지`} />
                </div>
                <h2 className="profile-username">{user.name}</h2>
                <p className="profile-user-login">{user.login}</p>
                <p className="profile-user-bio">{user.bio}</p>
                <p className="profile-user-info">
                    <GoMail size={16} color="#5a737d" />
                    <span className="profile-user-info-text">{user.email}</span>
                </p>
            </div>
        ) : (
            <div>유저정보가 없습니다.</div>
        )}
        <style jsx>{style}</style>
        </>
    )
}


/*const name = ({ user }) => {
    console.log("asdfjkladsjfaklsf")
    const username = user&&user.name;
    return <div>{username}</div>;
};*/
// terminal yarn add react-icons 설치
export const getServerSideProps = async({ query }) => {
    const { name } = query;
    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if(res.status === 200) {
            const user = await res.json();
            console.log(user);
            console.log(user.avatar_url)
            return {props:{user}};
        }
        return {props:{}};
    } catch (e) {
        console.log(e);
        return {props:{}};
    }
}

export default name;