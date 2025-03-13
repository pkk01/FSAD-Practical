import location from "./location.png";
import "./style.css";
function Template() {
  return (
    <div className="container">
      <div className="header">
        <div className="heading">kl university</div>
        <div className="menu">
          <span>Home</span>
          <span>About</span>
          <span>Portfolio</span>
          <span>Login</span>
        </div>
      </div>
      <div className="content">
        <div className="plogo">
          <img src={location} alt="" width={100} height={100} />
        </div>
        <div className="pdetails">
          <div className="pname">Product</div>
          <div className="pother">
            <p>Product discription</p>
            <p>Rs.1000</p>
            <p>2025</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="slogo">
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-youtube"></i>
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
export default Template;
