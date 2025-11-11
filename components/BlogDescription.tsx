import Link from "next/link";
import Image from "next/image";
import { PostType } from "@/app/types";

export default function BlogDescription({ post }: { post: PostType }) {
  return (



      <div>
        <div className="flex font-roboto text-[8.62px] desktop:text-xs mb-[18px] gap-[5.74px] desktop:gap-2.5">
          <div className="font-bold text-[10px] desktop:text-xs">{post.category}</div>
          <div className="font-medium text-gray999 text-[10px] desktop:text-xs">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "2-digit",
                })
              : "Unknown Date"}
          </div>
        </div>

        <div className="font-raleway font-bold text-[17.23px] lg:text-[24px] leading-[24.3px] desktop:text-[32px] desktop:leading-[45px] mb-[12px] lg:mb-[27px]">
          {post.title}
        </div>

        <div className="font-roboto text-gray666 text-[11.49px] desktop:text-base mb-[21px] line-clamp-3"
			dangerouslySetInnerHTML={{ __html: post.desc }}
		>         
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-purple font-roboto block w-fit border-purple border py-[6.68px] px-[20.83px] desktop:px-[28px] desktop:py-[9.5px] rounded-[5.74px] text-[10px] desktop:text-sm font-bold"
        >
          Read more
        </Link>
      </div>

  );
}
