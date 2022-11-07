import "./app.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const seoulLat = 37.5666805;
const seoulLng = 126.9784147;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPlacedId, setCurrentPlacedId] = useState(null);
  const [pins, setPins] = useState([]);
  useEffect(() => {
    const getPin = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPin();
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlacedId(id);
  };

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: seoulLat,
        lng: seoulLng,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {pins.map((p) => (
        <>
          <MapMarker // 마커를 생성합니다
            position={p.position}
            clickable={true}
            onClick={() => {
              setIsOpen(true);
              handleMarkerClick(p._id);
            }}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
              size: {
                width: 35,
                height: 40,
              },
            }}
          >
            {isOpen && (
              <div className='popUp'>
                <div style={{ minWidth: "150px" }}>
                  <img
                    alt='close'
                    width='14'
                    height='13'
                    src='https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif'
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsOpen(false)}
                  />
                  {p._id === currentPlacedId && (
                    <div
                      className='PopUp'
                      onClose={() => setCurrentPlacedId(null)}
                    >
                      <div className='card'>
                        <label>Place</label>
                        <h4 className='place'>{p.title}</h4>
                        <label>Review</label>
                        <p className='desc'>{p.desc}</p>
                        <label>Information</label>
                        <span className='username'>
                          Created by <b>{p.username}</b>
                        </span>
                        <button className='cardBtn'>다이어리 작성하기</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </MapMarker>
        </>
      ))}
    </Map>
  );
}
