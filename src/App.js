import React from 'react';
import { defaultTheme, Link, Provider } from '@adobe/react-spectrum';
import { Grid } from '@react-spectrum/layout';
import { View } from '@react-spectrum/view';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Helmet>
        <html className="spectrum spectrum--medium spectrum--dark" />
      </Helmet>

      <Grid
        areas={['header  header', 'sidebar content', 'footer  footer']}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="size-6000"
        gap="size-100"
      >
        <View gridArea="header">
          <h1>Spectrum Next Demo</h1>
        </View>

        <View gridArea="sidebar">
          <button
            type="button"
            className="spectrum-Button spectrum-Button--cta"
          >
            <span className="spectrum-Button-label">Button</span>
          </button>

          <nav>
            <ul className="spectrum-SideNav">
              <li className="spectrum-SideNav-item is-selected">
                <a
                  href="#"
                  className="spectrum-SideNav-itemLink"
                  aria-current="page"
                >
                  Section Title 1
                </a>
              </li>
              <li className="spectrum-SideNav-item is-disabled">
                <a className="spectrum-SideNav-itemLink">Section Title 2</a>
              </li>
              <li className="spectrum-SideNav-item">
                <a href="#" className="spectrum-SideNav-itemLink">
                  Section Title 3
                </a>
              </li>
              <li className="spectrum-SideNav-item">
                <a href="#" className="spectrum-SideNav-itemLink">
                  Section Title 4
                </a>
              </li>
            </ul>
          </nav>
        </View>

        <View gridArea="content">
          <main>
            <h1>
              Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p>
              Get started by editing <code>pages/index.js</code>
            </p>

            <div>
              <Link>
                <a href="https://nextjs.org/docs">
                  <h3>Documentation &rarr;</h3>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>
              </Link>

              <Link>
                <a href="https://nextjs.org/learn">
                  <h3>Learn &rarr;</h3>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </a>
              </Link>

              <Link>
                <a href="https://github.com/vercel/next.js/tree/master/examples">
                  <h3>Examples &rarr;</h3>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>
              </Link>

              <Link>
                <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                  <h3>Deploy &rarr;</h3>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </a>
              </Link>
            </div>
          </main>
        </View>

        <View gridArea="footer">
          <footer>
            <Link>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by <img src="/vercel.svg" alt="Vercel Logo" />
              </a>
            </Link>
          </footer>
        </View>
      </Grid>
    </Provider>
  );
}

export default App;
