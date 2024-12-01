import Room from "./_component/Room";
import style from "./messages.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
    </main>
  );
}
