import Post from "@/app/(afterLogin)/_component/Post";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
}
