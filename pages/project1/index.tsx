export default function project1() {
  return (
    <div>
      {/* <!DOCTYPE html>*/}
      {/* <html lang="en">*/}
      {/* <head> */}
      <title>CatPhotoApp</title>
      <meta charSet="UTF-8" />
      {/* </head> */}
      {/* <body> */}
      <main>
        <h1>CatPhotoApp</h1>
        <section>
          <h2>Cat Photos</h2>
          {/* TODO: Add link to cat photos */}
          <p>
            Click here to view more{' '}
            <a
              target="_blank"
              href="https://freecatphotoapp.com"
              rel="noreferrer"
            >
              cat photos
            </a>
            .
          </p>
          <a href="https://freecatphotoapp.com">
            <img
              src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
              alt="A cute orange cat lying on its back."
            />
          </a>
        </section>
        <section>
          <h2>Cat Lists</h2>
          <h3>Things cats love:</h3>
          <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
          </ul>
          <figure>
            <img
              src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
              alt="A slice of lasagna on a plate."
            />
            <figcaption>
              Cats <em>love</em> lasagna.
            </figcaption>
          </figure>
          <h3>Top 3 things cats hate:</h3>
          <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
          </ol>
          <figure>
            <img
              src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
              alt="Five cats looking around a field."
            />
            <figcaption>
              Cats <strong>hate</strong> other cats.
            </figcaption>
          </figure>
        </section>
        <section>
          <h2>Cat Form</h2>
          <form action="https://freecatphotoapp.com/submit-cat-photo">
            <fieldset>
              <legend>Is your cat an indoor or outdoor cat?</legend>
              <label>
                <input
                  id="indoor"
                  type="radio"
                  name="indoor-outdoor"
                  defaultValue="indoor"
                  defaultChecked
                />{' '}
                Indoor
              </label>
              <label>
                <input
                  id="outdoor"
                  type="radio"
                  name="indoor-outdoor"
                  defaultValue="outdoor"
                />{' '}
                Outdoor
              </label>
            </fieldset>
            <fieldset>
              <legend>Whats your cats personality?</legend>
              <input
                id="loving"
                type="checkbox"
                name="personality"
                defaultValue="loving"
                defaultChecked
              />{' '}
              <label htmlFor="loving">Loving</label>
              <input
                id="lazy"
                type="checkbox"
                name="personality"
                defaultValue="lazy"
              />{' '}
              <label htmlFor="lazy">Lazy</label>
              <input
                id="energetic"
                type="checkbox"
                name="personality"
                defaultValue="energetic"
              />{' '}
              <label htmlFor="energetic">Energetic</label>
            </fieldset>
            <input
              type="text"
              name="catphotourl"
              placeholder="cat photo URL"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>
          No Copyright -{' '}
          <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
        </p>
      </footer>
      {/* </body> */}
      {/* </html> */}
    </div>
  );
}
