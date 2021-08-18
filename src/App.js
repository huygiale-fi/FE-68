import logo from './logo.svg';
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'js-cloudimage-360-view/dist/index'
import './App.css';
import BTGlasses from './Glasses/BTGlasses';
import BTCar from './Car/BTCar';
import BTOanTuTi from './BTRedux/OanTuTi/BTOanTuTi';
import BTCheckOnline from './CheckOnline/BTCheckOnline';

function App() {
  return (
    <div className="App">
      {/* <BTGlasses/> */}
      {/* <BTCar/> */}
      {/* <BTOanTuTi/> */}
      <BTCheckOnline />
    </div>
  );
}

export default App;
