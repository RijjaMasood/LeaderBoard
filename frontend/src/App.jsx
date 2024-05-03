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
              <th>TOTAL GAMES PLAYED</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {teams &&
              teams.map((team, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <Avatar src={team.avatar} size="50" round={true} />
                  </td>
                  <td>{team.teamName}</td>
                  <td>{team.gamesPlayed}</td>
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
