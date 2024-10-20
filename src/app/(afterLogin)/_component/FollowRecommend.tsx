"use client";
import Image from "next/image";
import style from "./followRecommend.module.css";
import Logo from "@/app/public/zlogo.png";
export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "",
  };
  return (
    <div className={style.container}>
      <div className={style.userLogo}>
        <Image src={Logo} alt={user.id} />
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
