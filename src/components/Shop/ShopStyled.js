import styled from 'styled-components'

export const Wrapper = styled.section`
  .shop-hero{
    @media (min-width: 700px) and (max-width: 870px){
      height: 28rem;
    }
    @media (min-width: 500px) and (max-width: 690px){
      height: 28rem;
    }
    @media (min-width: 300px) and (max-width: 499px){
      height: 28rem;
    }
    @media (min-width: 320px){
      position: relative;
    }
    @media (min-width: 270px) and (max-width: 299px){
      height: 24rem;
      position: relative;
      bottom: 2.9rem;
    }
  }
  .sort-filter{
    @media (min-width: 270px) and (max-width: 299px){
      position: relative;
      bottom: 2rem;
    }
  }
  .container{
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 9;
    @media (min-width: 270px) and (max-width: 299px){
      position: relative;
      bottom: 6rem;
    }
  }
`;