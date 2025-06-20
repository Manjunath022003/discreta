import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch games from backend
    const fetchGames = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/games`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleLogout = () => {
    // Clear authentication (if using localStorage or context)
    alert("Logged out successfully");
    navigate("/"); // Redirect to home/login
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Welcome Admin</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>

      {/* Game Selection */}
      <div className="game-container">
        <h3>Select Game to Add Question</h3>
        <div className="games-grid">
          {games.length > 0 ? (
            games.map((game) => (
              <div
                key={game._id}
                className="game-box"
                onClick={() => navigate(`/add-question/${game.GID}`)} // Use GID here
              >
                {game.GName} {/* Use GName here */}
              </div>
            ))
          ) : (
            <p>No games found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
