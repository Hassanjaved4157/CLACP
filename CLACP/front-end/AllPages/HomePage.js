import React, { useEffect, useState } from 'react';
import HaderPart from '../Comonents/Hader';
import PagesMainContainer from '../Comonents/pagesMainContainer';
import FooterPart from '../Comonents/Footer';
import LawsMainContainer from '../Comonents/LawsMainContainer';
import LawsCardsFlatList from '../Comonents/LawsCards';
import HeaderParts from '../Comonents/HeaderParts';
import Navbar from '../Comonents/Navbar';

const HomePage = ({ navigation }) => {
  const [lawsData, setLawsData] = useState([]);

  useEffect(() => {
    // Fetch laws from the backend API
    const fetchLaws = async () => {
      try {
        const response = await fetch('http://192.168.1.3:5000/getLaws');
        const data = await response.json();
        setLawsData(data);
      } catch (error) {
        console.error('Error fetching laws:', error);
      }
    };

    fetchLaws();
  }, []);

  return (
    <PagesMainContainer>
      {/* <Navbar navigation={navigation} /> */}
      <HeaderParts />
      <LawsMainContainer>
        <LawsCardsFlatList lawsData={lawsData} />
      </LawsMainContainer>
      {/* <FooterPart /> */}
    </PagesMainContainer>
  );
};

export default HomePage;
