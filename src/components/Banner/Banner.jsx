import "./banner.css";
import banner from "../../images/banner.png";

export default function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="banner-content">
        <h1>Крупнейшая коллекция природных артефактов</h1>
        <p>
          Являясь всего лишь частью общей картины, интерактивные прототипы,
          которые представляют собой яркий пример яркого политического и
          социального эффекта.
        </p>
        <button>Исследовать</button>
      </div>
    </section>
  );
}
