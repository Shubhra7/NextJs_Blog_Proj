'use client';  // ✅ Required for client-side rendering (CSR)
import { useEffect, useState } from 'react';  // ✅ React Hooks
import styles from './Blog.module.css';
import Link from 'next/link';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';  // ✅ Infinite scroll lib

// export const revalidate = 60; // Enables ISR

// step1 : Collect all the files from blogdata directory
// Step2 : Iterate through them and Display them
export default function page() {   // async removed since we use CSR now
  
  // const [blogs,setBlogs] = useState([])  ##

  // ****************  CSR ***********
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(3);  // initial blogs to show
  const [hasMore, setHasMore] = useState(true);  // track if more blogs exist

  // fetching all blogs from endpoint
  useEffect(() => {
    // console.log("Use Effect is running");

    axios.get('/api/blogs')
      .then((response) => {
        // console.log(response.data);
        setBlogs(response.data.slice(0, count));
        setHasMore(count < response.data.length);
      })
      .catch((err) => {
        console.error('Error fetching blogs: ', err);
      });
  }, [count]);  // dependency on count for dynamic update

  // 📦 fetch more data on scroll
  const fetchMoreData = async () => {
    const res = await axios.get('/api/blogs');
    const total = res.data.length;

    if (count >= total) {
      setHasMore(false);  // no more to load
      return;
    }

    setBlogs(res.data.slice(0, count + 3));  // load 3 more
    setCount(count + 3);
  };

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2c3e50' }}>
            ✍️ Latest Blog Posts
          </h1>

          <InfiniteScroll
            dataLength={blogs.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 style={{ color: '#aaa' }}>Loading more blogs...</h4>}
            endMessage={
              <p style={{ textAlign: 'center', color: '#aaa' }}>
                <b>Yay! You have seen it all ✨</b>
              </p>
            }
          >
            {blogs.map((blogitem) => {
              return (
                <div className={styles.card} key={blogitem.slug}>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                    <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                  </Link>
                  <p className={styles.blogMeta}>
                    By <strong>{blogitem.author}</strong> | 📅 Published recently
                  </p>
                  <p className={styles.blogDesc}>
                    {blogitem.metadesc.length > 160
                      ? blogitem.metadesc.slice(0, 160) + '...'
                      : blogitem.metadesc}
                  </p>
                </div>
              );
            })}
          </InfiniteScroll>
        </main>
      </div>
    </>
  );
}

// Previously used
// export async function getServerSideProps(context) {
//   return {
//     props: {harry: "Good boy"},  // will be passed to the page component as props
//   }
// }
