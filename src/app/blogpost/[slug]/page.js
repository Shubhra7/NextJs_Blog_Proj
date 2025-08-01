// 'use client';
// import React, { useEffect, useState } from 'react';
import styles from '../BlogPost.module.css';
import axios from 'axios';
// import { useParams } from 'next/navigation';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
export default async function Page({ params }) {
  // const params = useParams();
  // const slug =  params?.slug;
  // const [blog,setBlog] = useState(null);

  // useEffect(()=>{
  //   if(!slug) return;

  //   axios.get(`http://localhost:3000/api/getblog?slug=${slug}`)
  //   .then((responese)=>{
  //     // console.log(responese.data);
  //     setBlog(responese.data)
  //   })
  //   .catch((err)=>{
  //     console.error('Error fetching blogs: ',err)
  //   })
  // },[slug])

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const { slug } = await params;

  const res = await fetch(`${baseUrl}/api/getblog?slug=${slug}`, {
    cache: 'no-store',
  });

  const blog = await res.json();

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogCard}>
          <h1 className={styles.blogTitle}>{blog?.title || slug}</h1>
          <p className={styles.blogMeta}>Verified by Shubhrajit</p>
          <hr className={styles.hrLine} />
          {blog ? (
            <div className={styles.blogContent}>
              <div
                className={styles.contentHtml}
                dangerouslySetInnerHTML={createMarkup(blog.content)}
              ></div>
            </div>
          ) : (
            <div className={styles.loading}>Loading blog content...</div>
          )}
        </div>
      </main>
    </div>
  );
}
