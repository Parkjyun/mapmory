import "./app.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";

const seoulLat = 37.5666805;
const seoulLng = 126.9784147;

function App() {
  const [position, setPosition] = useState();
  const [isOpen, setIsOpen] = useState(false);

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
      onClick={(_t, mouseEvent) =>
        setPosition({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        })
      }
    >
      {position && (
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={position}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={() => setIsOpen(true)}
          image={{
            src: "https://cdn.spotvnews.co.kr/news/photo/202104/417429_528046_5315.jpg", // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        >
          {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          {isOpen && (
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
              <div style={{ padding: "5px", color: "#000" }}>사진 등록</div>
            </div>
          )}
        </MapMarker>
      )}
    </Map>
  );
}

export default App;
