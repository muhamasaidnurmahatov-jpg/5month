import loginIcon from '../../images/log-in.png';
import searchIcon from '../../images/search.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">F & B</div>
        <nav className="nav">
          <a href="#" className="nav-link">Каталог</a>
          <a href="#" className="nav-link">Галерея</a>
          <a href="#" className="nav-link">О лаборатории</a>
          <a href="#" className="nav-link">Контакты</a>
        </nav>
        <div className="header-right">
          <img className="icon-btn" src={loginIcon} alt="Login" />
          <br />
          <img className="icon-btn" src={searchIcon} alt="Search" />
        </div>
      </div>
    </header>
  );
}
