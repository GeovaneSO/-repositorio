import styled from 'styled-components';

export const StyledHeader = styled.header`
        width:100%;
        display:flex;
        flex-direction:column;
        padding: 10px 0;
        display: flex;
        gap: 20px;

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    nav {
        display:flex;
        width:78%;
        align-items:center;
        justify-content:center;
    }  
    .link {
      display:none;
    }
    .logo {
        width: 18vw;
    }
    @media (min-width: 768px) {
        width:100%;
        display:flex;
        flex-direction:column;
        padding: 10px 0;
        display: flex;
        gap: 20px;

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    nav {
        display:flex;
        width:78%;
        align-items:center;
    }  
    .logo {
        width: 10vw;
    }
  }
  @media (min-width: 1024px) {
    width:100%;
        display:flex;
        flex-direction:column;
        padding: 10px 0;
        display: flex;
        gap: 20px;

    .contentHeader {
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    nav {
        display:flex;
        width:78%;
        align-items:center;
        justify-content:space-between;
    }  
    .link {
        display:flex;
        width:9.25w;
        text-decoration:none;
        text-transform: uppercase;
        font-family: 'Jura', sans-serif;
        color: ${(props) => props.theme.black};
        font-weight: 600;
        font-size: 1.3vw;
    }
    .start {
        display:flex;
        justify-content:flex-start;
      
    }
    .end {
        display:flex;
        justify-content:flex-end;
        
    }
    .logo {
        width: 8vw;
    }
  }
`