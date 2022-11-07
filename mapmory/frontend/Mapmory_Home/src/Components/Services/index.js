import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>추억 공유</ServicesH2>
          <ServicesP>
            함께했던 장소, 음식, 추억을 <br />
            공유할 수 있어요
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>장소를 지도위에 표시</ServicesH2>
          <ServicesP>
            방문했던 장소를 <br />
            시각적으로 확인할 수 있어요
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>다이어리 작성</ServicesH2>
          <ServicesP>
            사진과 함께 간단한 다이어리를 <br />
            작성할 수 있습니다
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
