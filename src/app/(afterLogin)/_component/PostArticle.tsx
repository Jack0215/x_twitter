"use client";
import { useRouter } from "next/navigation";
import style from "./post.module.css";
type Props = {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickName: string;
      image: string;
    };
    createdAt: Date;
    Images: string[];
  };
};
export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}