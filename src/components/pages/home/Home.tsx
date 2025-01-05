import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="create-post">
        <input 
          type="text"
          placeholder="Tạo bài viết mới..."
          className="create-post-input"
        />
        <div className="create-post-actions">
          <button className="action-button">Hình ảnh</button>
          <button className="action-button">Video</button>
          <button className="action-button">Địa điểm</button>
        </div>
      </div>

      <div className="posts-list">
        <div className="post-item">
          <div className="post-header">
            <img 
              src="/path-to-profile.jpg"
              alt="Profile"
              className="header-profile-image"
            />
            <span>Nguyễn Minh Thuận</span>
          </div>
          <p className="post-content">tui muốn bán lại quyển sách này...</p>
          <img 
            src="/path-to-book-image.jpg" 
            alt="Howl's Moving Castle"
            width="100%"
            height="300"
          />
          <div className="post-actions">
            <button className="action-button">❤️</button>
            <button className="action-button">💬</button>
            <button className="action-button">📤</button>
          </div>
        </div>

        <div className="post-item">
          <div className="post-header">
            <img 
              src="/path-to-profile.jpg"
              alt="Profile"
              className="header-profile-image"
            />
            <span>Nguyễn Văn Ngọc</span>
          </div>
          <p className="post-content">Yo Reddit! What's a small thing that anyone can do</p>
          <img 
            src="/path-to-book-image2.jpg" 
            alt="Book Cover"
            width="100%"
            height="300"
          />
          <div className="post-actions">
            <button className="action-button">❤️</button>
            <button className="action-button">💬</button>
            <button className="action-button">📤</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
