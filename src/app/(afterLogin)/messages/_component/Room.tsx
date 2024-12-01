"use client";
import { faker } from "@faker-js/faker";
import style from "../messages.module.css";
import { useRouter } from "next/navigation";

export default function Room() {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요", createdAt: new Date() },
      { roomId: 123, content: "안녕하세요", createdAt: new Date() },
    ],
  };
  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };
  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.roomUserImage}>
        <img src={faker.image.avatar()} alt="" />
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b> &nbsp;
          <span>@{user.id}</span>
        </div>

        <div className={style.roomLasChat}>
          {user.Messages?.at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
