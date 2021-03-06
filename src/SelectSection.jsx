import React, { useContext, useEffect } from 'react';
import { Select } from 'antd';
import base_uri from './base-uri';
import { AppContext } from './Context';


const { Option } = Select;


function SelectSection() {

  const { localGovt, saveLGA, savePopulation } = useContext(AppContext)

  const fetchLGA = async () => {
    const res = await base_uri.get("/local-govt");
    saveLGA(res.data)
  }

  const fetchPopulation = async () => {
    const res = await base_uri.get("/population")
    savePopulation(res.data)
  }

  useEffect(() => {
    fetchLGA();
    fetchPopulation();
  }, [])

  return (
    <React.Fragment>

      <div></div>

      <section>
        <div>
          <p>State</p>
          <Select
            defaultValue="lagos"
            size="large"
            style={{ minWidth: "100%" }}>
            <Option value="lagos">Lagos</Option>
          </Select>
        </div>

        <div>
          <p>Local Govt.</p>
          <Select
            placeholder="Choose LGA"
            size="large"
            style={{ minWidth: "100%" }}>
            {
              localGovt.map(item => <Option key={item.id}>{item.LGA}</Option>)
            }
          </Select>
        </div>
      </section>

      <div></div>

    </React.Fragment>
  )
}

export default SelectSection;