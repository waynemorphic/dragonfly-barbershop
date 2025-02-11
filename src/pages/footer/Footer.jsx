import "./Footer.css";
import { GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link>
        <GithubOutlined />
      </Link>
    </div>
  );
}
