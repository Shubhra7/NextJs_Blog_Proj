'use client';
import { useState } from "react";
import styles from "./Contact.module.css";

const Page = () => {
  const handleSubmit = (e) =>{
      e.preventDefault()

      if (!name || !email || !phone || !desc) {
          alert("Please fill in all the fields.");
          return;
      }

      const data = {phone, name, email, desc}
      console.log(name, email, phone, desc);
      fetch('/api/contact',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Sucess: ',data);
          alert("Thanks for connecting us!!❤️")
        })
        .catch((err)=>{
          console.error('Error: ',err)
        })
      


      setName("");
      setEmail("");
      setPhone("");
      setDesc("");


  }

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [desc,setDesc] = useState('')

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            className={styles.input}
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className={styles.input}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            className={styles.input}
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="desc">Elaborate your concern</label>
          <textarea
            id="desc"
            name="desc"
            placeholder="Write your concern here..."
            className={styles.textarea}
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
