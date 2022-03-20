import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPosts state={props.state} />
        </div>
    );
}

export default Profile;