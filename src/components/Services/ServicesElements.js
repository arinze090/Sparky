import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
  }
`;

export const ServicesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    max-height: 1000px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  width: 350px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin-right: 30px;
  margin-bottom: 86px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 450px;
  width: 250px;
  margin-right: 30px;
  margin-bottom: 86px;
  }
`;

export const ServicesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80px;
  width: 290px;
  margin-top: -20px;
`;

export const ServicesIcon = styled.img`
  height: 860px;
  width: 350px;
  border-radius: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #6699ff;
  margin-bottom: 74px;
  margin-top: 28px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.8rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: grey;
  margin-bottom: 84px;
`;
