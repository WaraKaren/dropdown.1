import PropTypes from 'prop-types';

export const Usuario = ({ usuario }) => {
  const { nombre, telefono, razonSocial, nit, codigo } = usuario;
  return (
    <div className='container'>
      <div className='card'>
        <div className='box'>
          <p className='title'>Código</p>
          <p className='content'>{codigo}</p>
        </div>
        <div className='box'>
          <p className='title'>Nombre</p>
          <p className='content'>{nombre}</p>
        </div>
        <div className='box'>
          <p className='title'>Razón social</p>
          <p className='content'>{razonSocial}</p>
        </div>
        <div className='box'>
          <p className='title'>NIT</p>
          <p className='content'>{nit}</p>
        </div>
        <div className='box'>
          <p className='title'>Teléfono</p>
          <p className='content'>{telefono}</p>
        </div>
      </div>
    </div>
  );
};

Usuario.propTypes = {
  usuario: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    telefono: PropTypes.string,
    razonSocial: PropTypes.string,
    nit: PropTypes.string,
    codigo: PropTypes.string
  }).isRequired
};
