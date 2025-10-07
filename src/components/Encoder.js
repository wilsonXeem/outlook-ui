import React, { useState } from "react";

function Encoder() {
  const [emails, setEmails] = useState("");
  const [baseUrl, setBaseUrl] = useState(window.location.origin);
  const [generatedLinks, setGeneratedLinks] = useState([]);

  const handleEncode = () => {
    const emailList = emails.split(',').map(email => email.trim()).filter(email => email);
    const links = emailList.map(email => {
      const encoded = btoa(email);
      return { email, link: `${baseUrl}/${encoded}` };
    });
    setGeneratedLinks(links);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Email Encoder</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="url"
          placeholder="Base URL (e.g., http://localhost:3000)"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
          style={{ width: "400px", padding: "10px", marginBottom: "10px", display: "block" }}
        />
        <textarea
          placeholder="Enter email addresses (comma separated)"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          style={{ width: "400px", padding: "10px", height: "80px", resize: "vertical" }}
        />
      </div>
      <button onClick={handleEncode} style={{ padding: "10px 20px" }}>
        Generate Links
      </button>
      {generatedLinks.length > 0 && (
        <div style={{ 
          marginTop: "2rem", 
          padding: "1.5rem", 
          border: "1px solid #e0e0e0", 
          borderRadius: "8px",
          backgroundColor: "#fafafa",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ margin: "0 0 1rem 0", color: "#333", fontSize: "18px" }}>Generated Links:</h3>
          {generatedLinks.map((item, index) => (
            <div key={index} style={{ 
              marginBottom: "15px", 
              padding: "15px", 
              backgroundColor: "white", 
              borderRadius: "6px",
              border: "1px solid #e8e8e8",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>
              <div style={{ 
                fontSize: "14px", 
                fontWeight: "600", 
                color: "#555", 
                marginBottom: "8px" 
              }}>{item.email}</div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input
                  type="text"
                  value={item.link}
                  readOnly
                  style={{ 
                    flex: 1,
                    padding: "10px", 
                    border: "1px solid #ddd", 
                    borderRadius: "4px",
                    backgroundColor: "#f8f8f8",
                    fontSize: "13px",
                    fontFamily: "monospace"
                  }}
                />
                <button
                  onClick={() => navigator.clipboard.writeText(item.link)}
                  style={{ 
                    padding: "10px 16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "500"
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Encoder;