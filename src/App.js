// App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mlogin from './Mlogin/Mlogin';
import MHome from './MHome/MHome';
import MReceptionist from './MReceptionist/MReceptionist';
import MListPatients from './MListPatients/MListPatients';
import MAddInvoice from './MAddInvoice/MAddInvoice'; // Import the MAddInvoice component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mlogin />} />
        <Route path="/home" element={<MHome />} />
        <Route path="/receptionist" element={<MReceptionist />} />
        <Route path="/list-patients" element={<MListPatients />} />
        <Route path="/add-invoice" element={<MAddInvoice />} /> 
      </Routes>
    </Router>
  );
}

export default App;

*/


// App.js
/*
import React from 'react';
import AddPatient from './AddPatient/AddPatient'; // تأكد من مسار الملف الصحيح

function App() {
  return (
    <div className="App">
      <AddPatient />
    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mlogin from './Mlogin/Mlogin';
import MHome from './MHome/MHome';
import MReceptionist from './MReceptionist/MReceptionist';
import MListPatients from './MListPatients/MListPatients';
import MAddInvoice from './MAddInvoice/MAddInvoice';
import AddPatient from './AddPatient/AddPatient'; // استيراد مكون AddPatient

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mlogin />} />
        <Route path="/home" element={<MHome />} />
        <Route path="/receptionist" element={<MReceptionist />} />
        <Route path="/list-patients" element={<MListPatients />} />
        <Route path="/add-invoice" element={<MAddInvoice />} /> 
        <Route path="/add-patient" element={<AddPatient />} /> {/* إضافة مسار لـ AddPatient */}
      </Routes>
    </Router>
  );
}

export default App;


