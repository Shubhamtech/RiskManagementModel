import "./App.css";
import Heading from "./components/Heading";
import Papa from "papaparse";
import { useState } from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
function App() {
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (result) {
        const columnArray = [];
        const valueArray = [];
        result.data.map((d) => {
          columnArray.push(Object.keys(d));
          valueArray.push(Object.values(d));
        });
        setData(result.data);
        setColumn(columnArray[0]);
        setValues(valueArray);
      },
    });
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          m: 2,
          mt: 20,
          mb: 10,
        }}>
        <Heading />
      </Box>
      <Box sx={{ border: 1, p: 4, alignItems: "center" }}>
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={handleFile}
          style={{ display: "block", margin: "10px auto" }}></input>
        <br />
        <PDFDownloadLink document={<PDFFile />} fileName="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading document..</button>
            ) : (
              <Box sx={{ alignItems: "center", mx: "auto",pl:24
               }}>
                <Button variant="contained">Download</Button>
              </Box>
            )
          }
        </PDFDownloadLink>
      </Box>
    </Container>
  );
}

export default App;
