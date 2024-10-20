"use client";

import Image from "next/image";
import style from "./logoutButton.module.css";
import Logo from "@/app/public/zlogo.png";
export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "zerohch0",
    nickname: "제로초",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={Logo} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
