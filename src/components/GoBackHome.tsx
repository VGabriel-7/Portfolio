import { useNavigate } from 'react-router-dom';
import goBackHome from '../images/GoBackHome.svg';

export default function GoBackHome() {
  const nav = useNavigate();

  return (
    <button
      onClick={ () => nav('/') }
      className="transition fixed bottom-8 right-8
      md:bottom-16 md:right-16
      active:translate-x-1 active:translate-y-1"
    >
      <img
        src={ goBackHome }
        alt="Icone da home"
        className="w-8 sm:w-10 opacity-100 sm:opacity-30 transition
        hover:opacity-100 duration-300"
      />
    </button>
  );
}