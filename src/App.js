import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import InfoTable from "./components/InfoTable";
import SurveyChart from "./components/SurveyChart";
import Footer from "./components/Footer";
// import ImageModal from "./components/ImageModal";

const LazyImageModal = lazy(() => import("./components/ImageModal"));

function App() {
  const [showModal, setShowModal] = useState(false);

  //방법1. 파일이 클 경우는 모든 파일이 다운로드되고 나서 다운로드 될 수 있도록 useEffect를 활용
  useEffect(() => {
    const component = import("./components/ImageModal");
  }, []);

  //방법2. 마우스가 버튼 위에 올라왔을때 이미지모달을 불러오는 함수
  // const handleMouseEnter = () => {
  //   const component = import("./components/ImageModal");
  // };

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        //마우스가 위에 올라 왔을떄 실행되는 이벤트
        /* onMouseEnter={handleMouseEnter} */
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
