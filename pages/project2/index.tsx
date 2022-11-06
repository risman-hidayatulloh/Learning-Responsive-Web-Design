import styles from '../../styles/Project2.module.css';

export default function project1() {
  return (
    <div>
      {/* <!DOCTYPE html> */}
      {/* <html lang="en"> */}
      {/* <head> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cafe Menu</title>
      {/* <link href="styles.css" rel="stylesheet" /> */}
      {/* </head> */}
      {/* <body> */}
      <div className={styles.body}>
        <div className={styles.menu}>
          <main>
            <h1 className={styles.h1}>CAMPER CAFE</h1>
            <p className={styles.established}>Est. 2020</p>
            <hr className={styles.hr} />
            <section>
              <h2 className={styles.h2}>Coffee</h2>
              <img
                className={styles.img}
                src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
                alt="coffee icon"
              />
              <article className={styles.item}>
                <p className={styles.flavor}>French Vanilla</p>
                <p className={styles.price}>3.00</p>
              </article>
              <article className={styles.item}>
                <p className={styles.flavor}>Caramel Macchiato</p>
                <p className={styles.price}>3.75</p>
              </article>
              <article className={styles.item}>
                <p className={styles.flavor}>Pumpkin Spice</p>
                <p className={styles.price}>3.50</p>
              </article>
              <article className={styles.item}>
                <p className={styles.flavor}>Hazelnut</p>
                <p className={styles.price}>4.00</p>
              </article>
              <article className={styles.item}>
                <p className={styles.flavor}>Mocha</p>
                <p className={styles.price}>4.50</p>
              </article>
            </section>
            <section>
              <h2 className={styles.h2}>Desserts</h2>
              <img
                className={styles.img}
                src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
                alt="pie icon"
              />
              <article className={styles.item}>
                <p className={styles.dessert}>Donut</p>
                <p className={styles.price}>1.50</p>
              </article>
              <article className={styles.item}>
                <p className={styles.dessert}>Cherry Pie</p>
                <p className={styles.price}>2.75</p>
              </article>
              <article className={styles.item}>
                <p className={styles.dessert}>Cheesecake</p>
                <p className={styles.price}>3.00</p>
              </article>
              <article className={styles.item}>
                <p className={styles.dessert}>Cinnamon Roll</p>
                <p className={styles.price}>2.50</p>
              </article>
            </section>
          </main>
          <hr className={styles.hr} />
          <footer className={styles.footer}>
            <p>
              <a
                className={styles.a}
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noreferrer"
              >
                Visit our website
              </a>
            </p>
            <p className={styles.address}>123 Free Code Camp Drive</p>
          </footer>
        </div>
      </div>
      {/* </body> */}
      {/* </html> */}
    </div>
  );
}
