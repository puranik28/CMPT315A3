import React, { useState, useEffect } from 'react';
import './App.css';
import SidebarView from './View/SidebarView.component';
import BodyView from './View/BodyView.component';


function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json');
      const data = await response.json();
      setEmails(data);
    };
    fetchEmails();
  }, []);
  return (
    <div className="app-container">
      <SidebarView
        emails={emails}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onEmailSelect={setSelectedEmail}
      />
      <BodyView selectedEmail={selectedEmail} />
    </div>
  );
}

export default App;