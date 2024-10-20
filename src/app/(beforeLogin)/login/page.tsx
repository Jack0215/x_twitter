import { useRouter } from "next/navigation";
import Main from "../_component/Main";
export default function Login() {
  // redirect("/i/flow/login");
  const router = useRouter();
  router.replace("/i/folw/login");
  return <Main />;
}
