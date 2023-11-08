import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../Asset/main-2.jpg";
import fazal from "../../Asset/Mian-Fazal-JSM-2021.png";
import Talat from "../../Asset/Talat-sb_2830.png";
import Ahmad from "../../Asset/Ahmad-sb.png";
import Footer from "../../components/Footer/Footer";
import "./Managment.css";
const Managment = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={banner} alt="AboutImage" />
        <div className="Managment">
          <div  className="fazal-side-founder">
            <img
              src={fazal}
              alt="fazal"
              style={{
                width: "100%",
                border: "2px solid #993333",
                paddingBottom: "4%",
              }}
            />
            <p style={{ textAlign: "center", color: "#993333", fontWeight:'700' }}>Mian Muhammad Fazal (Late)</p>
            <p style={{ textAlign: "center" ,color: "grey", marginTop:'-5%'}}>
              Founder Orient Group of Companies
            </p>
          </div>
          <div className="allmanagment">
            <h2 style={{color: "#993333"}}>The Management</h2>
            <p style={{marginTop:'6%'}} >
              Since its inception MMFMH is being fully funded by Orient
              Electronics (Pvt.) Ltd., which is a part of Orient Group of
              Companies. In the loving memories of founder Orient Group of
              Companies the hospital is named after Mian Muhammad Fazal (Late),
              the man who led the company from its humble beginnings to
              inspiring heights.
            </p>
            <p>
              He established the business in Lahore in 1957 by setting up a
              small photography shop. His hard work, dedication and honest
              business commitments helped him to progress fast in this field.
              Apart being a successful and honest businessman he was also
              respected as committed philanthropist who believed in helping poor
              and needy without any discrimination.
              <br /> Continuing to the vision his two sons; Mian Talat Mahmood
              and Mian Ahmad Fazal achieved one milestone after the other in
              transforming business in to a conglomerate and also took many
              initiatives for the welfare of the communities where they operate.
              <br /> They established Firdous Fazal Welfare Society in 2008
              which is a registered organization and has been working for
              providing basic facilities of life to underprivileged population
              of the society irrespective of cast, creed, color and sect.
            </p>
            <p>
              Mian Talat Mahmood, Chairman Orient Group of Companies is
              generously donating his most valuable time, skills, contacts, and
              money to help the needy of the society through a range of
              self-initiated and collaborated projects with other institutes.
              Some of the public welfare projects which are being managed under
              his direct personal supervision include Mian Muhammad Fazal
              Memorial Hospital (MMFMH), Eye Ward in Lahore Jinnah Hospital,
              Students Scholarship Program, Education Program at Jamia Masjid
              Mian Muhammad Fazal, Rashan Pack Distribution Program, Daily Iftar
              Program, Daily Meals Program, Marriage Assistance Program,
              Pilgrims Air-port Hospitality Program, and Jamia Masjid Mian
              Muhammad Fazal.
            </p>
            <div style={{ display: "flex", gap: "20%" ,marginBottom:'7%',marginTop:'10%'}}>
              <div style={{ width: "32%" }} className="fazal-side">
                <img
                  src={Talat}
                  alt="fazal"
                  style={{
                    width: "100%",
                    border: "2px solid #993333",
                    paddingBottom: "4%",
                    paddingTop: "2%",
                  }}
                />
                <p style={{ textAlign: "center", color: "#993333", fontWeight:'700' }}>Mian Muhammad Talat</p>
                <p style={{ textAlign: "center",color: "grey", marginTop:'-5%' }}>Chairman</p>
                <p style={{ textAlign: "center",color: "grey", marginTop:'-5%' }}>Orient Group of Companies</p>
              </div>
              <div style={{ width: "32%" }} className="fazal-side">
                <img
                  src={Ahmad}
                  alt="fazal"
                  style={{
                    width: "100%",
                    border: "2px solid #993333",
                    paddingBottom: "4%",
                    paddingTop: "2%",
                  }}
                />
                <p style={{ textAlign: "center",color: "#993333", fontWeight:'700' }}>Mian Ahmad Fazal </p>
                <p style={{ textAlign: "center",color: "grey", marginTop:'-5%' }}>
                 Managing Director
                </p>
                <p style={{ textAlign: "center", color: "grey", marginTop:'-5%' }}>
                 Orient Group of Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Managment;
