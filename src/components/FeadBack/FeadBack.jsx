import "./feadBack.css";

export default function FeadBack() {
  return (
    <section className="feadback">
      <div className="feadback-content">
        <h2>Помочь проекту</h2>
        <p>
          Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора,
          кроме определения прогресса профессионального сообщества. Как принято считать,
          элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и
          финансовых предпосылок.
        </p>
        <form>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}
