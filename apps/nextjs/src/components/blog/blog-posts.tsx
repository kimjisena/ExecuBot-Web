import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { formatDate } from "~/lib/utils";
import { i18n } from "~/config/i18n-config";

interface Post {
  _id: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  image: string;
  authors: string[];
  slug: string;
}

interface BlogPostsProps {
  posts: Post[];
}

export function BlogPosts({ posts }: BlogPostsProps) {
  // Get the current language from the URL or use the default
  const currentLang = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] 
    : i18n.defaultLocale;
  
  // Function to prepend the language to the slug if needed
  const getLocalizedSlug = (slug: string) => {
    // If the slug already starts with the language, return it as is
    if (slug.startsWith(`/${currentLang}/`)) {
      return slug;
    }
    // Otherwise, prepend the language
    return `/${currentLang}${slug}`;
  };

  return (
    <div className="container space-y-10 py-6 md:py-10">
      <section>
        <h2 className="font-heading mb-4 text-3xl">Last Post</h2>
        <article className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            {posts[0]?.image && (
              <Image
                alt={posts[0].title}
                className="w-full rounded-lg border object-cover object-center md:h-64 lg:h-72"
                height={452}
                src={posts[0].image}
                width={804}
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-heading mb-2 text-2xl md:text-4xl">
              <Balancer>{posts[0]?.title}</Balancer>
            </h3>
            {posts[0]?.description && (
              <p className="text-muted-foreground md:text-lg">
                <Balancer>{posts[0]?.description}</Balancer>
              </p>
            )}
            <Link href={posts[0]?.slug ? getLocalizedSlug(posts[0].slug) : "/#"} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </div>
        </article>
      </section>

      <section>
        <h2 className="font-heading mb-4 text-3xl">Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  alt={post.title}
                  src={post.image}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                />
              )}
              <h2 className="font-heading line-clamp-1 text-2xl">
                {post.title}
              </h2>
              {post.description && (
                <p className="line-clamp-1 text-muted-foreground">
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={getLocalizedSlug(post.slug)} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
