import React, { useState, useRef } from 'react';
import './App.css';
import '@material/react-material-icon/dist/material-icon.css';
import DropDownMenu from './components/drop-down-menu';
import MaterialIcon from '@material/react-material-icon';

const items = [
  {
    name: 'Ver perfil',
    icon: <MaterialIcon icon="person" />,
    color: 'dimgrey',
    meta: {},
  },
  {
    name: 'Notificaciones',
    icon: <MaterialIcon icon="notifications" />,
    color: '#9338ac',
    meta: {},
  },
  {
    name: 'Cerrar sesion',
    icon: <MaterialIcon icon="exit_to_app" />,
    color: '#e85f5e',
    meta: {},
  },
];
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchor = useRef();
  function switchMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleSelect() {
    console.log('Do something');
    // Do something
  }

  return (
    <div class="App">
      <div ref={anchor} onClick={switchMenu}>
        Click here
      </div>
      <DropDownMenu
        style={{ marginTop: '25px', marginLeft: '-5px' }}
        items={items}
        open={isMenuOpen}
        onSelect={handleSelect}
        onClose={closeMenu}
        anchor={anchor}
      />
    </div>
  );
}

export default App;
