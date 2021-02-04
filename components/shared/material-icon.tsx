import styled from "styled-components";

interface MaterialIconProps {
  size?: number;
}

const MaterialIcon = styled.i.attrs(() => ({
  className: "material-icons",
}))<MaterialIconProps>`
  ${(props) => props.size && `font-size: ${props.size}px;`}
`;

export default MaterialIcon;
