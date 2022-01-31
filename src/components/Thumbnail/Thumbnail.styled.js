import styled from "styled-components";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  width: 200px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 180px;
  }
`;
