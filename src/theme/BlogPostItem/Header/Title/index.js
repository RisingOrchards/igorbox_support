import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
export default function BlogPostItemHeaderTitle({ className }) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title, frontMatter } = metadata;
  const TitleHeading = isBlogPostPage ? "h1" : "h2";

  const blogHeaderImage = () => {
    if (isBlogPostPage) {
      if (frontMatter?.image) {
        return <img src={frontMatter?.image} style={{ borderRadius: 10 }} />;
      }
    }
  };

  return (
    <TitleHeading className={clsx(styles.title, className)}>
      {blogHeaderImage()}
      {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
    </TitleHeading>
  );
}
