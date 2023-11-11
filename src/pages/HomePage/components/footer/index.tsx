import "./style.scss";
import LockIcon from "@mui/icons-material/Lock";
import InfoIcon from "@mui/icons-material/Info";
import ShieldIcon from "@mui/icons-material/Shield";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="textsDiv">
        <h4>Enrich your travel repertoire with magnificent seating options.</h4>
        <h2>SpotAway</h2>
      </div>
      <div className="icons">
        <div className="groupFooter">
          <LockIcon className="icon" />
          <span>Policies and privacy</span>
        </div>
        <div className="groupFooter">
          <InfoIcon className="icon" />
          <span>About</span>
        </div>
        <div className="groupFooter">
          <ShieldIcon className="icon" />
          <span>Support</span>
        </div>
        <div className="groupFooter">
          <LiveHelpIcon className="icon" />
          <span>FAQ</span>
        </div>
        
      </div>
    </div>
  );
}
