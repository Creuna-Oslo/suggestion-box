import React from 'react';
import Layout from '../layout';
import Main from 'components/main';

const suggestion = {
  id: 1,
  title: 'Eksempeltittel',
  text:
    'Her kan man skrive mye lurt. Her kan man skrive mye lurt Her kan man skrive mye lurt Her kan man skrive mye lurt ',
  category: 'Teknologi',
  likes: 4,
  date: new Date()
};

const suggestions = [
  { ...suggestion, id: '1', likes: 2 },
  { ...suggestion, id: '2', category: 'Kantine' },
  { ...suggestion, id: '3', likes: 7 }
];

const categories = ['Teknologi', 'Design', 'Innhold', 'Kantine', 'Øvrig'];

const Home = () => (
  <Layout showFooter={false} showHeader={false}>
    <Main suggestions={suggestions} categories={categories} />
  </Layout>
);

export default Home;
