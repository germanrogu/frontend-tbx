import React from "react";

const Select = ({ fileName, setFileName, fileList }) => {
  return (
    <select
      id='fileName'
      className='form-select'
      value={fileName}
      onChange={(e) => setFileName(e.target.value)}
    >
      <option value=''>All Files</option>
      {fileList &&
        fileList.map((file) => (
          <option key={file} value={file}>
            {file}
          </option>
        ))}
    </select>
  );
};

export default Select;
