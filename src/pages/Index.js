import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Sonja Olson's personal website. "}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>Hello, nice to meet you.</p>
        </div>
      </header>
      <p>
        Welcome to my website. I am a product manager with 5 years of experience
        as a software engineer, primarily focused on building solutions for the
        finance and technology sectors. I am a team player who can fill any role
        as a generalist, and at the same time, dive deep to develop solutions to
        complex problems. I am passionate about customer research, analytics,
        design and bettering financial products. I have a background working on
        a range of financial products including investing platforms, 401k
        management and billing and payment systems. An empathic leader and
        lifetime learner at heart, I am committed to building strong
        relationships between engineering, design and business to ensure
        everyone feels heard on product direction.
        <br />
        <br />
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, or <Link to="/contact">contact</Link>{' '}
        me.
      </p>
    </article>
  </Main>
);

export default Index;
