import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFileDataRequest } from "../store/actions/filesActions";
import DataTable from "../components/DataTable";
import Loader from "../components/Loader";
import Select from "../components/Select";
import Button from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const dispatch = useDispatch();
  const { fileData, loading, error, fileList } = useSelector(
    (state) => state.files
  );
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    dispatch(fetchFileDataRequest());
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(fetchFileDataRequest(fileName));
  };

  return (
    <div className='min-vh-100 bg-white'>
      <header className='py-3 mb-4' style={{ backgroundColor: "#ff6b6b" }}>
        <h1 className='text-center text-white mb-0'>React Test App</h1>
      </header>

      <div className='container' style={{ marginBottom: "3rem" }}>
        <div className='row mb-4'>
          <div className='col-md-6'>
            <label htmlFor='fileName' className='form-label fw-medium'>
              Filter by File Name
            </label>
            <div className='d-flex gap-3 align-items-center'>
              <div className='flex-grow-1'>
                <Select
                  fileName={fileName}
                  setFileName={setFileName}
                  fileList={fileList}
                />
              </div>
              <div>
                <Button handleFilter={handleFilter} />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className='text-danger'>{error}</p>
        ) : (
          <div className='card'>
            <div className='card-body p-0'>
              <DataTable data={fileData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
