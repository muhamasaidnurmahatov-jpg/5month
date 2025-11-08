import "./Flowers.css";
import plant from "../../images/plant.png";
import flower from "../../images/flower.png";
import leaf from "../../images/leaf.png";
import wood from "../../images/wood.png";
import and from "../../images/1and3.png";


export default function Flowers() {
  return (
    <section className="flowers">
      <h2 className="flowers-title">Коллекция растений</h2>
      <div className="flowers-grid">
        <div className="flower-card">
          <img src={plant} alt="plant" className="flower-img" />
          <h3>Fig. 1 (plant)</h3>
          <p>Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <img src={flower} alt="flower" className="flower-img" />
          <h3>Fig. 2 (flower)</h3>
          <p>Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <img src={leaf} alt="leaf" className="flower-img" />
          <h3>Fig. 3 (leaf)</h3>
          <p>Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы.</p>
          <button>Подробнее</button>
        </div>

        <div className="flower-card">
          <img src={wood} alt="wood" className="flower-img" />
          <h3>Fig. 4 (wood)</h3>
          <p>Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.</p>
          <button>Подробнее</button>
        </div>
      </div>
      <div className="and">
        <br />
        <br />
        <img src={and} alt="" />
      </div>
    </section>
  );
}
