import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

const description = "Gedanken zu Technik, Informatik, Sport und allem dazwischen.";

export const metadata: Metadata = pageMetadata({ title: "Blog", description, path: "/blog" });

const dateFormat = new Intl.DateTimeFormat("de-CH", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" lead="Alles mögliche. Pudess esser tuot!" />

      <ol className={styles.list}>
        {posts.map((post, i) => (
          <Reveal as="li" key={post.title} className={styles.post} delay={i * 80}>
            <article className={styles.article}>
              <p className={styles.meta}>
                <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                <span aria-hidden="true">·</span>
                <span>{post.category}</span>
              </p>
              <div className={styles.body}>
                <h2 className="text-h3">{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
              <span className={styles.status}>Bald</span>
            </article>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
