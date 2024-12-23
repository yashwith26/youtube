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
          <Link to="/">
            <p className="font-semibold">
              <i className="fa-solid fa-house pr-2"></i>Home
            </p>
          </Link>
        </li>
        <li className="text-lg">
          <p className="font-semibold">
            <i className="fa-solid fa-video pr-2"></i>Shorts
          </p>
        </li>
        <p className="font-semibold">
          <li className="text-lg">Subscriptions</li>
        </p>
      </ul>

      <h1 className="font-bold text-lg pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
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
