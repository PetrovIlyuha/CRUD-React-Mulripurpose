import backgroundCinema from './assets/streamlist_bg.jpg';

export const styledTableContainer = {
  borderRadius: '20px',
  backgroundColor: '#581b98',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  marginTop: '60px',
  paddingBottom: '40px',
  opacity: '0.85'
};
export const styledTableWrapper = {
  position: 'relative',
  height: 'calc(100vh - 67px)',
  backgroundImage: `url(${backgroundCinema})`,
  backgroundSize: 'cover'
};

export const styledTable = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  fontSize: '1.4rem',
  marginTop: '50px',
  position: 'absolute',
  left: '26%',
  padding: '30px',
  width: '1000px',
  height: '700px',
  borderRadius: '15px',
  backgroundColor: 'rgba(46,32,84,0.4)',
  color: '#a7ff83'
};

export const styledTableHeader = {
  display: 'flex',
  flexDirection: 'row',
  position: 'sticky',
  top: '0',
  width: '945px',
  overflow: 'hidden',
  marginLeft: '10px',
  fontSize: '2.2rem',
  padding: '40px',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  color: 'white',
  background:
    'linear-gradient(100deg, rgb(255, 255, 255) 10%, rgb(0, 6, 47) 100%), linear-gradient(120deg, rgb(255, 65, 65) 30%, rgb(0, 28, 100) 110%), radial-gradient(100% 220% at 100% 0%, rgb(128, 0, 255) 0%, rgb(255, 255, 255) 30%, rgb(0, 160, 255) 100%), linear-gradient(60deg, rgb(34, 0, 242) 0%, rgb(83, 0, 0) 100%), linear-gradient(190deg, rgb(185, 0, 255) 0%, rgb(0, 136, 123) 90%), linear-gradient(180deg, rgb(252, 0, 0) 0%, rgba(0, 50, 255, 1) 75%), linear-gradient(220deg, rgba(255, 0, 250, 1) 0%, rgb(255, 223, 0) 70%), radial-gradient(80% 110% at 50% 0%, rgb(2, 1, 1) 0%, rgb(0, 52, 187) 100%)',
  backgroundBlendMode:
    'overlay, overlay, color-burn, screen, color-burn, difference, color-dodge, normal',
  marginBottom: '40px'
};
