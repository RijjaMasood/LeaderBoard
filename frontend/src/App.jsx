import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import "./App.css";

function App() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch("http://localhost:4000/getData");
      const data = await response.json();
      if (response.ok) {
        setTeams(data);
      }
    };

    fetchTeams();
    // Set up polling to fetch teams every 10 seconds
    const intervalId = setInterval(fetchTeams, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th> </th>
              <th>TEAM NAME</th>
              <th className="gamesPlayed">TOTAL GAMES PLAYED</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {teams &&
              teams.map((team, index) => (
                <tr className={index % 2 == 0 ? "even-row" : "odd-row"}>
                  <td>
                    {index === 0 && (
                      <img src="src/assets/gold-cup.png" alt="1" />
                    )}
                    {index === 1 && (
                      <img src="src/assets/silver-cup.png" alt="2" />
                    )}
                    {index === 2 && (
                      <img src="src/assets/bronze-cup.png" alt="3" />
                    )}
                    {index > 2 && index + 1}
                  </td>
                  <td className="avatar">
                    <Avatar src={team.avatar} size="40" round={true} />
                  </td>
                  <td className="teamName">{team.teamName}</td>
                  <td className="gamesPlayed">{team.gamesPlayed}</td>
                  <td>+{team.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
