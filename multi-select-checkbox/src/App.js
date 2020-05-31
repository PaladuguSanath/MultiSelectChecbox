import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxMultiSelect from "./Multiselect";
//import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import CheckBox from './CheckBox'

function App() {
  // const options = [
  //   { label: 'Thing 1', value: 1},
  //   { label: 'Thing 2', value: 2},
  // ];


  const dropDownLabel = (placeholderButtonLabel, value) => {
    console.log(" placeholderButtonLabel ",placeholderButtonLabel.value);
  };

  console.log('inSide App')
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
    { label: 'Option 6', value: 6 },
    { label: 'Option 7', value: 7 }
  ]

  const changeHandler = optionSelected => {
    console.log('optionSelected', optionSelected)
  }

  return (
    <div className="App">
     {//<CheckboxMultiSelect></CheckboxMultiSelect>
     //<ReactMultiSelectCheckboxes options={options} getDropdownButtonLabel={dropDownLabel}/>

     }

<CheckBox options={options} onChange={changeHandler}></CheckBox>
  

    </div>
  );
}

export default App;
