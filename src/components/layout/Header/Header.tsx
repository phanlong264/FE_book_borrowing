import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img 
          src=""
          alt="LBook Logo"
          className="logo-image"
        />
      </div>
      <input type="text" placeholder="Tìm kiếm" className="search-bar" />
      <div className="profile-header">
        <span>Lana Del Rey</span>
        <img
          src="/path-to-header-profile.jpg"
          alt="Profile"
          className="header-profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
