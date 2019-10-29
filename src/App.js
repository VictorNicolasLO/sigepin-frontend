import React from 'react';
import './App.css';
import ProjectSlider from './components/project-slider';
import BioImg from './resources/demo-images/adn.jpg';
import DataCenterImg from './resources/demo-images/data-center.jpg';
import useProjectSlider from './components/project-slider/hooks/useProjectSlider';

const items = [
  {
    img: BioImg,
    area: 'Bioquimica',
    title: 'Reacción en el ADN',
    description: 'Descripción sobre los efectos de los alimentos en el ADN',
    actions: [{ name: 'Ver mas' }],
  },
  {
    img: DataCenterImg,
    area: 'Sistemas',
    title: 'Estudio sobre bases de datos distribuidas',
    description:
      'Las bases de datos distribuidas son una tecnologia muy eficiente el dia de hoy ',
    actions: [{ name: 'Ver mas' }],
  },
];
function App() {
  const projectSliderProps = useProjectSlider(items, goToArticle, 5000);
  function goToArticle(article) {
    console.log(article);
  }
  return (
    <div className="App">
      <ProjectSlider {...projectSliderProps} />
    </div>
  );
}

export default App;
