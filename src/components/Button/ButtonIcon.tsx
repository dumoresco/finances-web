import React from "react";

interface IButtonIconProps {
  icon: React.ElementType;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({ icon: Icon }) => {
  return <Icon size={20} color={"#FFFFFF"} />;
};

export default ButtonIcon;
