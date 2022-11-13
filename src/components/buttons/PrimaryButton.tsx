import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";


const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const CustomButton = styled(ButtonUnstyled)`
  font-weight: 500;
  font-size: 0.8125rem;
  box-shadow: 2px 0 8px 0 rgb(0 0 0 / 40%);
  background-image: linear-gradient(90deg, #01c1ff, #0067ff);
  background-color: ${blue[500]};
  padding: 0.5em 1.22em;
  border-radius: 0.35em;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  letter-spacing: 0.02857em;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  &:hover {
    background-color: ${blue[600]};
    background-image: linear-gradient(90deg, #01c1ff 20%, #0067ff 95%);
    transform: translateY(-1.5px);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
    background-image: linear-gradient(90deg, #01c1ff 0%, #0067ff 35%);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
type Props = {
  title?: string;
  disabled?: boolean;
  childIcon?: React.ReactNode;
};
export default function PrimaryButton({
  title = "Create Event",
  disabled = false,
  childIcon = <AddIcon sx={{fontSize: 17, marginRight: 1}} />,
}: Props) {
  return (
    <CustomButton disabled={disabled}>
      {childIcon}
      <Typography variant="caption" sx={{fontSize:'0.8125rem'}} >
        {title}
      </Typography>
      
    </CustomButton>
  );
}
