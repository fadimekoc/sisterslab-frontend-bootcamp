import React from 'react';
import ReactDOM from 'react-dom';
import PhoneModelTable from './PhoneModelTable';

const App = () => {
  const phoneData = [
    {
      id: 1,
      brand: "Samsung",
      model: "Galaxy S21"
    },
    {
      id: 2,
      brand: "Apple",
      model: "İphone 13"
    },
    {
      id: 3,
      brand: "Google",
      model: "Pixel 6"
    },
    {

      id: 4,     
     brand: "OnePlus",
     model: "Nord N200"
    }
  ];

  return (
  <div>
 <h1>Phone Model Data Table</h1>
 <PhoneModelTable
  title = "Phone Model Information"
  text = "List of Phone Models"
  number = {4 }
  data={phoneData}

  />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
