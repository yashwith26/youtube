import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenu);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Lieked Videos</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
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
