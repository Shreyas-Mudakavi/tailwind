import backg_1 from "./back.svg";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="homePage flex justify-between items-center">
      <main className=" ">
        <div className="flex flex-row text-2xl ml-9 mt-9 p-5 space-x-3 cursor-pointer ">
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="flex  text-3xl flex-wrap">
          <span>
            Hello 👋 I am <span> Shreyas </span> Web Developer
          </span>
        </div>
        <div>
          <span>
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 💻",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                ]}
              />
            </h1>
          </span>
        </div>
        <img src={backg_1} alt="" className="flex mr-12  p-8" />
      </main>
    </div>
  );
};

export default Profile;
