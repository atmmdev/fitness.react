import React from "react";
import Header from "./components/Header";
import DaySelector from "./components/DaySelector";
import WeekSelector from "./components/WeekSelector";

function App() {
  return (
    <>
      <main className="container mt-5 text-center">
        <section className="my-4">
          <WeekSelector /> 
        </section>

        <Header />

        <section className="my-4">
          <DaySelector />
        </section>

        <section className="row">
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
          <div className="col-6 col-md-3 my-2">
            <img
              className="img-fluid rounded"
              src="https://fitnessprogramer.com/wp-content/uploads/2021/02/Low-Cable-Crossover.gif"
              alt="Crossover de Cabo Baixo"
            />
            <div className="my-2">Crossover de Cabo Baixo</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
