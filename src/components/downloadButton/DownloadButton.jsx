import React, { useState } from 'react';

const DownloadButton = ({ filePath, fileName }) => {
  console.log(filePath, " ", fileName)

  const handleDownload = async () => {
    try {
      const response = await fetch(filePath);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
  
      const content = await response.blob();
      console.log("content type: ", content.type)
  
      if (content.type === 'application/pdf') {
        // Create a link element
        const link = document.createElement('a');
  
        // Set the href attribute to a Blob URL
        link.href = window.URL.createObjectURL(content);
  
        // Specify the filename for the download
        link.download = fileName;
  
        // Append the link to the document
        document.body.appendChild(link);
  
        // Trigger a click on the link to start the download
        link.click();
  
        // Remove the link from the document
        document.body.removeChild(link);
      } else {
        throw new Error('Invalid file type. Expected application/pdf.');
      }
    } catch (error) {
      console.error('Error handling download:', error.message);
    }
  };
  

  return (
    <div>
      <button onClick={handleDownload}>Resume</button>
    </div>
  );
};

export default DownloadButton;
