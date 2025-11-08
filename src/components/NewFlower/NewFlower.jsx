
import React from "react";
import "./NewFlower.css";
import newFlowerImg from "../../images/all.png";

export default function NewFlower() {
  return (
    <section className="new-flower">
      <h2 className="new-flower-title">Новые артефакты</h2>

      <div className="new-flower-container">
        <div className="new-flower-image-block">
          <img src={newFlowerImg} alt="Новые артефакты" className="new-flower-image" />
        </div>

        <div className="new-flower-info">
          <h3>Kurische Nehrung 24</h3>
          <p>
            Вот вам яркий пример современных тенденций — начало повседневной работы
            по формированию позиции вызывает срочную потребность методов управления процессами.
          </p>
          <p>
            Есть над чем задуматься: представители современных социальных резервов
            своевременно верифицированы.
          </p>
          <button className="read-more">Читать далее →</button>
        </div>
      </div>
    </section>
  );
}
