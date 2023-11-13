import React from 'react';
import {useEffect} from 'react';
import {createContext, useState} from 'react';
import axios from 'axios';

export const CategoryContext = createContext();

export const CategoryProvider = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://api.maharlikart.ph/v4.2/api/categories',
        );
        setCategories(response.data.data);
      } catch (error) {
        throw error;
      }
    };
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={[categories, setCategories]}>
      {props.children}
    </CategoryContext.Provider>
  );
};

const categoryExport = {CategoryContext, CategoryProvider};
export default categoryExport;
