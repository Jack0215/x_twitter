import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";
//children => i, login, page.tsx
//modal => @modal 하위 폴더들
//modal에다가 i폴더의 page.tsx를 넣으려면
//intercept routing 기능을 사용
//intercept routing은 폴더명 앞에 (.) or (..)을 넣어주면 됨 (브라우저 주소 기준)
type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
