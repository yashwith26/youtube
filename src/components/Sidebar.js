import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenu);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="text-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg">Shorts</li>
        <li className="text-lg">Subscriptions</li>
      </ul>

      <h1 className="font-bold text-lg pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Lieked Videos</li>
      </ul>
      <h1 className="font-bold text-lg pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
