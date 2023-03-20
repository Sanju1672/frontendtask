import "./navi-page.css";

export default function NavigationPage() {

    return (
        <div className="navigation-wrapper">
           <div>
            <div> <a href="/profile">Profile</a></div>
            <div><a href="/posts">Posts</a></div>
            <div>  <a href="/gallery">Gallery</a></div>
            <div> <a href="/todo">ToDo</a></div>
            </div>
        </div>

    )
}