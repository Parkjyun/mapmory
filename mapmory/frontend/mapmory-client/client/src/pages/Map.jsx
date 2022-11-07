import "./map.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import RoomIcon from "@mui/icons-material/Room";
import axios from "axios";
import { format } from "timeago.js";
import Register from "../Components/Register/Register";
import Login from "../Components/Signin/Login";

function Map() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 37.5666805,
    longitude: 126.9784147,
    zoom: 4,
  });
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  // 더블클릭 시 새로운 장소 추가 가능
  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  // 새로운 핀 추가
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  // 핀 삭제
  const handleDelete = (e) => {
    console.log(e);
  };

  // 모든 핀 데이터 가져와서 지도 위에 표시
  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        width='100%'
        height='100%'
        transitionDuration='200'
        mapStyle='mapbox://styles/safak/cknndpyfq268f17p53nmpwira'
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={currentUsername && handleAddClick}
      >
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <RoomIcon
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                  display: currentUsername === p.username ? "block" : "none",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor='left'
              >
                <div className='card'>
                  <label>장소</label>
                  <h4 className='place'>{p.title}</h4>
                  <label>리뷰</label>
                  <p className='desc'>{p.desc}</p>
                  <span className='date'>{format(p.createdAt)}</span>
                  <button className='cardBtn'>다이어리 작성하기</button>
                  <button className='cardDeleteBtn' onClick={handleDelete}>
                    장소 삭제하기
                  </button>
                </div>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
          <>
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <RoomIcon
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor='left'
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>장소</label>
                  <input
                    placeholder='장소를 입력하세요'
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>리뷰</label>
                  <textarea
                    placeholder='이 장소는 어땠나요?'
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button type='submit' className='submitButton'>
                    핀 추가하기
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
        {currentUsername ? (
          <button className='button logout' onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className='buttons'>
            <button className='button login' onClick={() => setShowLogin(true)}>
              Log in
            </button>
            <button
              className='button register'
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentUsername={setCurrentUsername}
            myStorage={myStorage}
          />
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;
