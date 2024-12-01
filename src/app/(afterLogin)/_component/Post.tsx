import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface Props {
  noImage?: boolean;
}
export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: "jack",
      nickName: "majae",
      image: "/yRsRRjGO.jpg",
    },
    content: "twetter 코딩 중",
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 2,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 3,
        link: faker.image.urlLoremFlickr(),
      },
      {
        imageId: 4,
        link: faker.image.urlLoremFlickr(),
      }
    );
  }
  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickName} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickName}</span>
              &nbsp;.&nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
