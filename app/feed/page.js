import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'All Post',
//   description: 'explore all posts' 
// }

export async function generateMetadata({params}) {
  const posts = await getPosts()
  const numberOfPosts = posts.length;

  return  {
    title:`Browsse all  ${numberOfPosts} posts`,
    description: "brows all out posts"
  }
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
