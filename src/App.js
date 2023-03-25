
import './App.css';
import Heading from "./components/Heading";
import Papa from 'papaparse';
import { useState } from 'react';
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from '@react-pdf/renderer';
function App() {
  const [data,setData]=useState([]);
  const [columnArray,setColumn]=useState([]);
  const [values,setValues]=useState([]);

  const handleFile=(event)=>{
   Papa.parse(event.target.files[0],{
    header:true,
    skipEmptyLines:true,
    complete: function(result){
      const columnArray=[];
      const valueArray=[];
      result.data.map((d)=>{
        columnArray.push(Object.keys(d));
        valueArray.push(Object.values(d));

      });
      setData(result.data);
      setColumn(columnArray[0]);
      setValues(valueArray);
    }
   })
  }
  return (
    <div className="App">
        <Heading />
       
        <input
          type="file"
          name='file'
          accept='.csv'
          onChange={handleFile}
          style={{display:"block",margin:"10px auto"}}
        >
        </input>
        <p>
         this is a model for risk  checking
        </p>
        <br/>
        
       <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        {({loading})=> loading? (
         <button>Loading document..</button> 
         ) : (
         <button className="btn">Download</button>
         )
         }
       </PDFDownloadLink>
       
    </div>
  );
};

export default App;
