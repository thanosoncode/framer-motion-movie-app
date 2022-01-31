import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.bg2};
  margin-top: 80px;

  a,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.bg};
    text-decoration: none;
  }
`;

export const Center = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 30px;

  p {
    text-align: center;
    color: ${({ theme }) => theme.bg};
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
