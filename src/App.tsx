import React from 'react';
import './App.css';
import BasicTable from "./components/material/table";

const App = () => {
  const mockConfig = [
    {
      minWidth: 150,
      field: "country",
      displayName: "Country",
    },
    {
      minWidth: 150,
      field: "athlete",
      displayName: "Athlete",
    },
    {
      field: "gold",
      minWidth: 150,
      displayName: "Gold",
    },
    {
      minWidth: 150,
      field: "silver",
      displayName: "Silver",
    },
    {
      minWidth: 150,
      field: "bronze",
      displayName: "Bronze",
    },
    {
      minWidth: 150,
      field: "total",
      displayName: "Total",
    },
  ];

  const mockData = [
    {
      id: 1,
      country: "United States",
      athlete: "Michael Phelps",
      gold: 8,
      silver: 0,
      bronze: 0,
      total: 8,
    },
    {
      id: 2,
      country: "United States",
      athlete: "Michael Phelps",
      gold: 8,
      silver: 0,
      bronze: 0,
      total: 8,
    },
    {
      id: 3,
      country: "United States",
      athlete: "Michael Phelps",
      gold: 8,
      silver: 0,
      bronze: 0,
      total: 8,
    },
  ];

  return (
    <div
      id={ 'table-wrapper' }
      style={ {
        width: '100%'
      } }
    >
      <BasicTable rows={ mockData } columnDefs={ mockConfig } parentId={ 'table-wrapper' }/>
    </div>
  );
}

export default App;
