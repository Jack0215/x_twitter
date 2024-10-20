import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
      </TabProvider>
    </main>
  );
}
