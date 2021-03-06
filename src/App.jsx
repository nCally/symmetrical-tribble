import { Divider } from 'antd';
import React, { useContext } from 'react';
import './App.css';
import SelectSection from './SelectSection';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { AppContext } from './Context';

function App() {

  const { localGovt, population } = useContext(AppContext)


  function healthFacilitesInLGA() {
    let lgas = [];
    let healthCenters = []
    localGovt.map(item => {
      lgas.push(item.LGA);
      healthCenters.push(item.NOS_OF_PHC)
    })

    return {
      labels: lgas,
      datasets: [
        {
          label: 'Centers',
          data: healthCenters,
          backgroundColor: generateRandomColors(healthCenters.length)
        }
      ]
    }
  }


  function bedsPerPopulation() {
    let lgas = [];
    let bedsRatio = [];

    localGovt.map((item, i) => {

      if (population.length > 0) {


        lgas.push(item.LGA);

        // population divided by beds

        let pop = Number(String(population[i].Population).replace(/[, ]+/g, "").trim());

        let beds = Number(item.NOS_OF_BEDS)
        bedsRatio.push(pop / beds)

      }

    })


    return {
      labels: lgas,
      datasets: [
        {
          label: 'Bed / Population Ratio',
          data: bedsRatio,
          backgroundColor: generateRandomColors(bedsRatio.length)
        }
      ]
    }
  }


  function populationPerNurse() {
    let lgas = [];
    let nurseRatio = [];

    localGovt.map((item, i) => {

      if (population.length > 0) {


        lgas.push(item.LGA);

        // population divided by beds

        let pop = Number(String(population[i].Population).replace(/[, ]+/g, "").trim());

        let nurses = Number(item.NURSES)
        nurseRatio.push(pop / nurses)

      }

    })

    return {
      labels: lgas,
      datasets: [
        {
          label: '1 nurse to population',
          data: nurseRatio,
          backgroundColor: generateRandomColors(nurseRatio.length)
        }
      ]
    }
  }


  function allHealthWorkers() {
    let lgas = [];
    let nurses = [];
    let doctors = [];
    let healthWorkers = [];

    localGovt.map((item, i) => {

      lgas.push(item.LGA);

      nurses.push(Number(item.NURSES))
      doctors.push(Number(item.DOCTORS))
      healthWorkers.push(Number(item.otherHealthWorkers))


    })

    return {
      labels: lgas,
      datasets: [
        {
          label: 'Doctors',
          data: doctors,
          backgroundColor: '#264653'
        },
        {
          label: 'Nurses',
          data: nurses,
          backgroundColor: '#2a9d8f'
        },
        {
          label: 'Other health workers',
          data: healthWorkers,
          backgroundColor: '#e9c46a'
        }
      ]
    }
  }


  return (
    <section className="container">
      <main className="row">
        <div className="col-12">

          <section className="hero">
            <div>
              <h1>Primary Health Centers Data</h1>
              <p>Lagos, Nigeria</p>
            </div>
          </section>

          {/* select section */}
          <section className="selects">
            <SelectSection />
          </section>
          <Divider />

          {/* chart section */}
          <section className="charts">
            <section>
              <h2>Number of primary health centers in each LGA</h2>
              <Bar
                height={300}
                data={healthFacilitesInLGA()}
                options={{ maintainAspectRatio: true }} />

              <Divider />
            </section>

            <section>
              <h2>Number of hospital beds per population in each local government area</h2>
              <Pie
                height={300}
                data={bedsPerPopulation()}
                options={{ maintainAspectRatio: true }} />

              <Divider />
            </section>

            <section>
              <h2>Popluation per nurse in different local government areas</h2>
              <Doughnut
                height={300}
                data={populationPerNurse()}
                options={{ maintainAspectRatio: true }} />

              <Divider />
            </section>


            <section>
              <h2>All health workers in different local governments</h2>
              <Bar
                height={300}
                options={{ maintainAspectRatio: true }}
                data={allHealthWorkers()} />

              <Divider />
            </section>

          </section>

          {/* map */}
          <section className="map"></section>
        </div>
      </main>
    </section>
  );
}

export default App;


function generateRandomColors(length) {
  let colorList = [];

  for (var i = 0; i < length; i++) {
    const color = Math.floor(Math.random() * 16777215).toString(16)

    colorList.push(`#${color}`)
  }


  return colorList;

}