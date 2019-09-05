import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CategoryCard from '../../components/categoryCard';
import navigateGql from '../../services/navigate.gql';

const Navigate: React.FC = () => {
  const { data, loading, error } = useQuery(navigateGql.getClientCardDatas);
  if (loading) return <div>'loading...'</div>;
  if (error) return null;
  console.log(data);
  return <CategoryCard cardData={data.cardDatas} />;
};

export default Navigate;
