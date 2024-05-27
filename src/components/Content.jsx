import React from 'react'
import ContentHeader  from './ContentHeader';
import Card from '../components/Card';
import '../styles/content.css';
import EmployeeList from '../components/EmployeeList';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
      <EmployeeList />
    </div>
  );
};

export default Content;