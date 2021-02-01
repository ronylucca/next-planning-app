import styled from 'styled-components';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';

// eslint-disable-next-line no-unused-vars
const BackgroundImage = styled.div`
  background-image: url( ${db.bg} );
  flex: 1;
  background-size:cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin:auto;
    padding:15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Last of Us Part 2</h1>
          </Widget.Header>
          <Widget.Content>
            <p>More than a year waiting for this. Then it arrived on 2020</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <p>lorem ipsum lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ronylucca" />
    </QuizBackground>
  );
}
