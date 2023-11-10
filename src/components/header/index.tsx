import "./style.scss";

function Header() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="header" onClick={reloadPage}>
        <div className="headerList">
          <ul className="list">
            <li>Home</li>
            <li>Emphasis</li>
            <li>Category</li>
          </ul>
        </div>

        <div className="logo">
          <h2 className="logoText">SpotAway</h2>
        </div>

        <div className="login">
          <button className="loginButton">Sign in</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
