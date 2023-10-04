import React, { useState } from "react";
import axios from "axios";

function EveningClinics() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        console.log("jfng:: ", selectedFile);
        alert("Please select an image file.");
        return;
      }

      const formData = new FormData();
      formData.append("recfile", selectedFile);

      const response = await axios.post(
        "http://16.24.45.175:8000/uploadPrivacyimage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response from the server as needed
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default EveningClinics;
