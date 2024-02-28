import './App.css';
var image1 = require('./asserts/1.png')
var image2 = require('./asserts/2.png')
var image3 = require('./asserts/3.png')
var logo = require('./asserts/logo.png')
var phone = require('./asserts/Phone-icon.png')
var facebook = require('./asserts/facebook.png')
var web = require('./asserts/globe.jpg')



function App() {
  return (
    <div className='block'>
      <div className="main-block">
            <div className="main-upper-block">
                <div className="upper-small-block">
                    <div className="upper-left-block"></div>
                    <div className="upper-right-block"><img src={logo} alt="" className="upper-right-image" /></div>
                </div>
                <div className="lower-small-block">
                    <img src={image1} alt="" className="lower-left-image" />
                    <div className="lower-right-block">
                        <p className="text-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time. </p>
                        <ul>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                        <img src={image2} alt="" className="lower-right-image" />
                        <p>Government of India has awarded the <span className="text-bold">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
            </div>
            <p className='first-line'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <img src={image3} alt="" className="lower-image" />
            <p className='second-line' >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            <hr className="divider" />
            <p className="third-line" >C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <div className="data-divider"><div>CHEMICALS & PROCESS</div><div className="small-divider"></div><div>POWER</div><div className="small-divider"></div><div> WATER & WASTE WATER</div><div className="small-divider"></div><div> OILS & GAS </div><div className="small-divider"></div><div> PHARMA </div><div className="small-divider"></div><div>SUGARS & DISTILLERIES </div><div className="small-divider"></div><div> PAPER & PULP </div><div className="small-divider"></div><div>MARINE & DEFENCE </div><div className="small-divider"></div><div>METAL & MINING </div><div className="small-divider"></div><div> FOOD & BEVERAGE </div><div className="small-divider"></div><div> PETROCHEMICAL & REFINERIES </div><div className="small-divider"></div><div> SOLAR BUILDING </div><div className="small-divider"></div><div> HVAC </div><div className="small-divider"></div><div> FIRE FIGHTING </div><div className="small-divider"></div><div> AGRICULTURE & RESIDENTIAL </div></div>
            <br/><br/>
            <div className="footer">
                <p> <img src={phone} alt="" className="phone-icon" />Toll free 1800 200 1234</p>
                <p> <img src={facebook} alt="" className="phone-icon" />www.facebook.com/cripumps</p>
                <p> <img src={web} alt="" className="phone-icon" />www.crigroups.com</p>
            </div>
        </div>
    </div>
  );
}

export default App;
