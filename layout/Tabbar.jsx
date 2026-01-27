// import TabbarCommon from "../components/TabbarCommon";

export default function Tabbar() {
    return (
        <div className="app-tabbar-container">
            <div className="tabbar-logo">
                <img src="https://images.wallpapersden.com/image/download/black-hole-hd-digital_bWxuamuUmZqaraWkpJRobWllrWZrZ2U.jpg" alt="" />
            </div>
            <nav className="tabbar-menu-list">
                <a href="/" className="active">Home</a>
                <a href="/account">Account</a>
                <a href="/department" >Department</a>
                <a href="/project">Project</a>
                <a href="/group">Group</a>
                <a href="/drawing">Drawing</a>
                <a href="/setting">Setting</a>
                <a href="/login">Logout</a>
            </nav>
        </div>
    )

};
