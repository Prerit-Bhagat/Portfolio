import React from 'react'
import styles from './Contact.module.css'
export const Contact = () => {
  return (
    <footer className={styles.foo}>
        <div className={styles.left}>
            <div className={styles.contactme}>Contact</div>
            <form action="/login" method="post" id='form'>
                <input type="text" name="message" className="mssg" placeholder='Enter Your Text Here'/>
                <input type="button" value="Click" id='btn' name='btn' />
            </form>
        </div>
        <ul className={styles.right}>
            <li className={styles.list}>
                <img src="https://t3.ftcdn.net/jpg/02/75/19/72/360_F_275197262_QfGoANunjZGL8nt6HyRTgGfjlPSkevPv.jpg" alt="Mail" className={styles.info}/>
                <a href="mailto:prerit001@gmail.com">prerit001@gmail.com</a>
            </li>
            <li className={styles.list}>
                <img src="https://st3.depositphotos.com/8943496/36360/v/450/depositphotos_363604792-stock-illustration-initial-letter-business-name-gold.jpg" alt="Linked-in" className={styles.info} />
                <a href="https://www.linkedin.com/in/prerit-bhagat-681b30253/">linkedin.com/preritbhagat</a>
            </li>
            <li className={styles.list}>
                <img src="https://t3.ftcdn.net/jpg/03/00/02/08/360_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg" alt="Instagram" className={styles.info} />
                <a href="https://www.instagram.com/preritbhagat/">instagram.com/preritbhagat</a>
            </li>
        </ul>
    </footer>
  )
}

// export default Contact
