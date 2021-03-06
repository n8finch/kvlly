import React from 'react'
import { Link } from 'gatsby'

import Image from '../components/image'
import SEO from '../components/seo'

import {
  FaInstagram,
  FaTwitter,
  FaDev,
  FaLinkedin,
  FaEnvelope,
  FaCoffee,
  FaBeer,
} from 'react-icons/fa'

const IndexPage = () => (
  <>
    <div className="siteHeader">
      <h1>I'm Kelly Vaughn &mdash;</h1>
      <h2>Entrepreneur, Developer, & Shopify Expert</h2>
    </div>
    <SEO title="Kelly Vaughn | Entrepeneur, Developer, Shopify Expert" />
    <div className="home-flex">
      <div className="home-content">
        <p>
          I'm a frontend developer and run a marketing agency specializing in
          Shopify.
        </p>
        <p>
          During the day (and night - let's be honest) I run{' '}
          <a
            target="_blank"
            href="https://thetaproom.com"
            rel="noopener noreferrer"
          >
            The Taproom Agency
          </a>
          {'. '}I also write about{' '}
          <a
            href="https://dev.to/kelly"
            target="_blank"
            rel="noopener noreferrer"
          >
            entrepreneurship
          </a>
          {' and '}
          <a
            target="_blank"
            href="https://mailchi.mp/f71b4a1fbd00/thetaproom"
            rel="noopener noreferrer"
          >
            ecommerce
          </a>
          {', '}
          and I also <Link to="/speaking">speak</Link> on these same topics.
        </p>
        <ul className="social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/kvlly"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/taproomkelly"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/kellyvaughn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:kelly@thetaproom.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/kelly"
            >
              <FaDev />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thetaproom.com"
            >
              <FaBeer />
            </a>
          </li>
          <li>
            <Link to="/buy-kelly-coffee">
              <FaCoffee />
            </Link>
          </li>
        </ul>
      </div>
      <div className="home-image">
        <Image />
      </div>
    </div>
    <div />
  </>
)

export default IndexPage
