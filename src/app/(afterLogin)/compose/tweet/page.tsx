//여기 tsx는 배경화면이고 (home의 children)
//@modal > compose > tweet > tage.tsx가 modal로 뜸
//home > page.tsx와 화면이 같음
import Home from "@/app/(afterLogin)/home/page";

export default function Page() {
  return <Home />;
}
