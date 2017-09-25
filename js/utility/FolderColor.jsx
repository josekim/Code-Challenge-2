import React from 'react';
import styled from 'styled-components';

const Folderdefault = styled.td`
  border-left: 5px solid #f3f3f3;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderBusiness = styled.td`
  border-left: 5px solid #d0bed7;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderHome = styled.td`
  border-left: 5px solid #c9e9ed;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderFinance = styled.td`
  border-left: 5px solid #e8bfdd;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderEducation = styled.td`
  border-left: 5px solid #c3e5bf;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderRealEstate = styled.td`
  border-left: 5px solid blue;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderJobs = styled.td`
  border-left: 5px solid #d6b689;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderTravel = styled.td`
  border-left: 5px solid #8aceb6;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderEntertainment = styled.td`
  border-left: 5px solid #9880e5;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;
const FolderSocialNetworking = styled.td`
  border-left: 5px solid #c94e6f;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;

const FolderNews = styled.td`
  border-left: 5px solid #c5c954;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;

const FolderShopping = styled.td`
  border-left: 5px solid #a0c679;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;

const FolderGroups = styled.td`
  border-left: 5px solid #71bcbb;
  border-top: 15px solid #f3f3f3;
  border-bottom: 15px solid #f3f3f3;
  padding-left: 15px;
`;

const FolderColor = name => {
  switch (name) {
    case 'Business':
      return <FolderBusiness />;
    case 'Home':
      return <FolderHome />;
    case 'Finance':
      return <FolderFinance />;
    case 'Education':
      return <FolderEducation />;
    case 'Travel':
      return <FolderTravel />;
    case 'Entertainment':
      return <FolderEntertainment />;
    case 'Social Networking':
      return <FolderSocialNetworking />;
    case 'News':
      return <FolderNews />;
    case 'Real Estate':
      return <FolderRealEstate />;
    case 'Jobs':
      return <FolderJobs />;
    case 'Shopping':
      return <FolderShopping />;
    case 'Groups':
      return <FolderGroups />;
    default:
      return <Folderdefault />;
  }
};
//eslint-disable-next-line
export { FolderColor };
