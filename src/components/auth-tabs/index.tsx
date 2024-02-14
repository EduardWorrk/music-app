import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StylesTab, WrapListTabs, WrapTabs } from "./styles";

type Tab = { name: string; url: string };

type Props = { tabs: Tab[] };

export const AuthTabs: React.FC<Props> = ({ tabs }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleClick = (url: string) => {
    navigate(`/${url}`);
  };

  return (
    <WrapTabs>
      <WrapListTabs>
        {tabs.map((tab) => (
          <StylesTab
            key={tab.name}
            onClick={() => handleClick(tab.url)}
            className={pathname === `/${tab.url}` ? "active" : ""}
          >
            {tab.name}
          </StylesTab>
        ))}
      </WrapListTabs>
    </WrapTabs>
  );
};
