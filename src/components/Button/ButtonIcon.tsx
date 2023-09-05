import React from "react";

interface IButtonIconProps {
  icon: React.ElementType;
  className?: string;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({
  icon: Icon,
  className = "",
}) => {
  return <Icon size={20} color={"#FFFFFF"} className={className} />;
};

export default ButtonIcon;
