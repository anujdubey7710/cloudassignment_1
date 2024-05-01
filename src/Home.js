
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const homeUrl = 'https://q3358v04o2.execute-api.us-east-1.amazonaws.com/prod/home';

const Home = (props) => {
  const [musicInfo, setMusicInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // Handle case when username is not found in sessionStorage
    }

    // fetchMusicInfo(); // Uncomment this line if you want to fetch music info on component mount
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('username'); // Remove username from sessionStorage
    props.history.push('/login'); // Redirect to login page
  };
  const fetchMusicInfo = () => {
    const requestBody = {
      username: username,
      artist: artist,
      year: year,
      title: title
    };
    console.log(requestBody)
    axios.post(homeUrl, requestBody)
      .then(response => {
        // Handle successful response
        console.log(response)
        setMusicInfo(response.data.message);
      })
      .catch(error => {
        // Handle error
        setErrorMessage('Failed to fetch music information');
      });
  };

  
  // const fetchUsername = () => {
  //   axios.get('https://your-backend-url.com/username')
  //     .then(response => {
  //       setUsername(response.data.username);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching username:', error);
  //       // Optionally, set an error message or handle it in another way
  //     });
  // };

  // const handleQuery = () => {
  //   // Make a request to query music information based on the provided parameters
  //   axios.post(homeUrl, { title, year, artist })
  //     .then(response => {
  //       // Handle successful response
  //       setMusicInfo(response.data.musicInfo);
  //       if (response.data.musicInfo.length === 0) {
  //         setErrorMessage('No result is retrieved. Please query again.');
  //       } else {
  //         setErrorMessage('');
  //       }
  //     })
  //     .catch(error => {
  //       // Handle error
  //       setErrorMessage('Failed to query music information');
  //     });
  // };
  return (
    <div>
      <h1>Welcome, {username}</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button onClick={fetchMusicInfo}>Query</button>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <h2>Queried Music Information</h2>
      {musicInfo.length > 0 ? (
        <ul>
          {musicInfo.map((music, index) => (
            <li key={index}>
              <div>
                <p>Title: {music.title}</p>
                <p>Artist: {music.artist}</p>
                <p>Year: {music.year}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No music information available</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
  

          }
          export default Home;
        
