import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import banner1 from '../public/banner1.png';
import banner2 from '../public/banner2.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

export default function Home() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    document.getElementsByClassName('footer')[0].classList.toggle('active');
  }

  return (
    <div className="screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div id="container">
          <div id="monitor">
            <div id="monitorscreen">
              <Carousel autoPlay={true} showThumbs={false}>
                <div>
                  <Image src={banner1} alt="Sample" />
                </div>
                <div>
                  <Image src={banner2} alt="Sample" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="controller" onClick={toggle}>
          <span className="controller-text">^</span>
        </div>
        <div className="controls">
          <Link href="/room" passHref>
            <a>Room </a>
          </Link>
          <Link href="/room" passHref>
            <a>Sessions </a>
          </Link>
          <Link href="/room" passHref>
            <a>Schedule</a>
          </Link>
          <Link href="/room" passHref>
            <a>Speaker</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
