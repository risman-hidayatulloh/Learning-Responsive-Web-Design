import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Responsive Web Design Course Results</h3>
        <p className={styles.description}>
          In this Responsive Web Design Certification, you will learn the
          languages that developers use to build webpages: HTML (Hypertext
          Markup Language) for content, and CSS (Cascading Style Sheets) for
          design.
        </p>
        <p className={styles.description}>
          First, you will build a cat photo app to learn the basics of HTML and
          CSS. Later, you will learn modern techniques like CSS variables by
          building a penguin, and best practices for accessibility by building a
          quiz site.
        </p>
        <p className={styles.description}>
          Finally, you will learn how to make webpages that respond to different
          screen sizes by building a photo gallery with Flexbox, and a magazine
          article layout with CSS Grid.
        </p>
        <div className={styles.grid}>
          <Link href="/project1" className={styles.card}>
            <h2>1. Lern HTML by Building a Cat Photo App &rarr;</h2>
            <p>
              HTML tags give a webpage its structure. You can use HTML tags to
              add photos, buttons, and other elements to your webpage. In this
              course, you will learn the most common HTML tags by building your
              own cat photo app. Has 69 tasks to learn.
            </p>
          </Link>

          <Link href="/project2" className={styles.card}>
            <h2>2. Learn Basic CSS by Building a Cafe Menu &rarr;</h2>
            <p>
              CSS tells the browser how to display your webpage. You can use CSS
              to set the color, font, size, and other aspects of HTML elements.
              In this course, you will learn CSS by designing a menu page for a
              cafe webpage. Has 91 tasks to learn.
            </p>
          </Link>

          <Link href="/project3" className={styles.card}>
            <h2>
              3. Learn CSS Colors by Building a Set of Colored Markers &rarr;
            </h2>
            <p>
              Selecting the correct colors for your webpage can greatly improve
              the aesthetic appeal to your readers. In this course, you will
              build a set of colored markers. you will learn different ways to
              set color values and how to pair colors with each other. Has 94
              tasks to learn.
            </p>
          </Link>

          <Link href="/project4" className={styles.card}>
            <h2>4. Learn HTML Foms by Building a Registration Form &rarr;</h2>
            <p>
              You can use HTML forms to collect information from people who
              visit your webpage. In this course, you will learn HTML forms by
              building a signup page. you will learn how to control what types
              of data people can type into your form, and some new CSS tools for
              styling your page. Has 63 tasks to learn.
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://risman-hidayatulloh.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <small>Copyright &copy; 2022. Created by Risman Hidayatulloh</small>
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  );
}
