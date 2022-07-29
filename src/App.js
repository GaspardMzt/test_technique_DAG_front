import "./App.css";

export default function App() {
  const classement = [
    {
      participant: "Damien Da Silva Bregieiro",
      dateDepart: 1643724000,
      dateArrivee: 1643725713,
    },
    {
      participant: "Thomas Ponthoreau",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
    {
      participant: "Guillem Dardill",
      dateDepart: 1643724000,
      dateArrivee: 1643726269,
    },
    {
      participant: "Amadou NDIAYE",
      dateDepart: 1643724000,
      dateArrivee: 1643724564,
    },
    {
      participant: "Pierre Bague",
      dateDepart: 1643732114,
      dateArrivee: 1643733782,
    },
    {
      participant: "Hugo Prea",
      dateDepart: 1643724000,
      dateArrivee: 1643730981,
    },
    {
      participant: "Jean-Luc Roux",
      dateDepart: 1643724000,
      dateArrivee: 1643726134,
    },
    {
      participant: "Tony Bernard",
      dateDepart: 1643724000,
      dateArrivee: 1643725967,
    },
    {
      participant: "Serge Munnia-Vincent",
      dateDepart: 1643724000,
      dateArrivee: 1643867841,
    },
    {
      participant: "Camille Constant",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
  ];

  // Calcul du temps de chaque particiapant, en secondes :
  const calculateTime = ({ dateDepart, dateArrivee }) => {
    return dateArrivee - dateDepart;
  };

  // Fonction pour trier un tableau de classement selon le temps des participants :
  const sortClassement = (classmt) => {
    return classmt.sort(function (a, b) {
      return calculateTime(a) - calculateTime(b);
    });
  };

  // Exécution de la fonction du trie par temps :
  sortClassement(classement);

  // Conversion temps secondes en heures / minutes / secondes :
  const convertTime = (timeInSecondes) => {
    const hour = Math.floor(timeInSecondes / 3600);
    const min = Math.floor((timeInSecondes - hour * 3600) / 60);
    const sec = timeInSecondes - hour * 3600 - min * 60;
    return `${hour}H:${min}min:${sec}sec`;
  };

  return (
    <div className="App">
      <h1>Consignes</h1>
      <p>
        Afficher la liste des coureurs classés par temps (leur nom, temps et
        place doivent apparaître). Le design importe peu. Objectif: - Afficher
        sous forme de liste le classement; - Trier les résultats par temps.
        Bonus: Typescript
      </p>
      <h2>Axes d'amélioration :</h2>
      <ul>
        <li>
          Faut-il tout faire en front, ou faire un back avec un tableau
          contenant place, temps en seconde... ?
        </li>
        <li>Typescript non fait.</li>
        <li>Style non fait</li>
        <li>Améliorer fonction conversion heure minute</li>
      </ul>

      <h1>Classement trié :</h1>
      <p>(Code dans front/src/App.js)</p>
      <ul>
        {classement.map((person, index) => (
          <li key={index}>
            {index + 1} - {person.participant} -{" "}
            {convertTime(calculateTime(person))}
          </li>
        ))}
      </ul>
    </div>
  );
}
