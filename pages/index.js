import HomePage from './home';
import NavBar from '../Components/NavBar.js';
import '../styles/Home.module.css';

export default function Home() {

  return (
    <div className="flex">
      <NavBar />
      <HomePage />
    </div>
  )
}
