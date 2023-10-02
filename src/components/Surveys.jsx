import React from "react";
import './Surveys.css';

function Surveys() {
  const surveysList = [
    {
      id: 1,
      question: "¿Cuál es tu color favorito?",
      options: ["Rojo", "Azul", "Verde"]
    },
    {
      id: 2,
      question: "¿Qué marca de vehículos prefieres?",
      options: ["Audi", "Toyota", "BMW"]
    },
    {
      id: 3,
      question: "¿Qué género musical prefieres?",
      options: ["Rock", "Pop", "Raggaeton"]
    },
    {
      id: 4,
      question: "¿Qué mascota tienes?",
      options: ["Hamster", "Gato", "Perro"]
    },
    {
      id: 5,
      question: "¿Cuál es el nombre de la pelota del mundial de fútbol Rusia 2018?",
      options: ["Jabulani", "Telstar 18", "Questra"]
    },
    {
      id: 6,
      question: "¿Qué lenguaje de programación es el más utilizado en desarrollo web?",
      options: ["C#", "Python", "JavaScript"]
    },
    {
      id: 7,
      question: "¿En que plataforma sueles jugar videojuegos con mayor frecuencia?",
      options: ["Movil", "Consola", "PC"]
    }
  ];

  return (
    <div className="surveys-box">
      <h2>Listado De Encuestas Disponibles</h2>
      <ul className="surveys-list">
        {surveysList.map(
          survey => (<Survey survey={survey} />)
        )}
      </ul>
    </div>
  );
}

function Survey({ survey }) {
  return (
    <li key={survey.id} className="survey">
      <h3 className="question">{survey.question}</h3>
      <ul className="options">
        {survey.options.map(
          option => (<SurveyOption option={option} keyOption={survey.options.indexOf(option)} />)
        )}
      </ul>
    </li>
  );
}

function SurveyOption({ option }, { keyOption }) {
  return (<li key={keyOption}>{option}</li>);
}

export default Surveys;