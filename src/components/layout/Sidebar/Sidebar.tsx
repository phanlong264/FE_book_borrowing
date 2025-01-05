import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <img
          src="/path-to-profile-image.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h2>Lana Del Rey</h2>
      </div>
      <nav className="sidebar-menu">
        <ul>
          <li>Trang chủ</li>
          <li>Bạn bè</li>
          <li>Thông báo</li>
          <li>Sách đã lưu</li>
          <li>Trạng thái đơn</li>
          <li>Giỏ hàng</li>
          <li>Tin nhắn</li>
          <li>Tạo sản phẩm</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;