import React, { ElementType } from "react";

import {
  Container,
  Navigation,
  BtnSair,
  Header,
  MobileContainer,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
import {
  BadgeDollarSign,
  Home,
  List,
  LogOut,
  GalleryVerticalEnd,
  KeyRound,
  LayoutDashboard,
  CreditCard,
  Goal,
} from "lucide-react";
import { AppDispatch } from "../../redux/store";
import { logout } from "../../redux/reducers/auth/auth.reducer";
import { useDispatch } from "react-redux";

const Sidebar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const menus = [
    {
      name: "Início",
      icon: LayoutDashboard,
      path: "/",
      active: true,
    },
    {
      name: "Categorias",
      icon: List,
      path: "/categories",
      active: true,
    },
    {
      name: "Histórico",
      icon: GalleryVerticalEnd,
      path: "/history",
      active: true,
    },
    {
      name: "Chaves",
      icon: KeyRound,
      path: "/keys",
      active: true,
    },
    {
      name: "Cartões clonados",
      icon: CreditCard,
      path: "/cards",
      active: false,
    },
    {
      name: "Metas",
      icon: Goal,
      path: "/goals",
      active: false,
    },
  ];

  const location = useLocation();

  return (
    <>
      <Container>
        <Header>
          <div className="title">
            <BadgeDollarSign />
            <span>Meu dinheirinho</span>
          </div>
        </Header>

        <Navigation>
          {menus.map((menu) => {
            return (
              <Link
                onClick={(e) => {
                  !menu.active && e.preventDefault();
                }}
                to={menu.path}
                key={menu.name}
                className={`${!menu.active ? "disabled" : ""} ${
                  location.pathname === menu.path ? "active" : ""
                }`}
              >
                <Icon icon={menu.icon} />
                <span>{menu.name}</span>
              </Link>
            );
          })}
        </Navigation>
        <BtnSair
          onClick={() => {
            dispatch(logout());
          }}
        >
          <Icon icon={LogOut} />
          <span>Sair</span>
        </BtnSair>
      </Container>
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

// cria componente para renderizar o icon baseado pelo nome

const Icon = ({ icon: Icon }: { icon: ElementType; className?: string }) => {
  return <Icon size={15} strokeWidth={2} className="sidebar_icon" />;
};

const MobileSidebar: React.FC = () => {
  const menus = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      name: "Categorias",
      icon: List,
      path: "/categories",
    },
    {
      name: "Histórico",
      icon: GalleryVerticalEnd,
      path: "/history",
    },
  ];

  const location = useLocation();

  return (
    <MobileContainer>
      <Header>
        <div className="title">
          <BadgeDollarSign />
        </div>
      </Header>

      <Navigation>
        {menus.map((menu) => {
          return (
            <Link
              to={menu.path}
              key={menu.name}
              className={location.pathname === menu.path ? "active" : ""}
            >
              <Icon icon={menu.icon} />
            </Link>
          );
        })}
      </Navigation>
      <BtnSair>
        <Icon icon={LogOut} />
      </BtnSair>
    </MobileContainer>
  );
};
