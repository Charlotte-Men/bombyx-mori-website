import { createContext, useState, ReactNode, Dispatch } from 'react';

interface Children {
  children: ReactNode,
}
type MenuContextType = {
  isMenuVisible : boolean,
  setIsMenuVisible: Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextType>({
  isMenuVisible: false,
  setIsMenuVisible: () => undefined,
});

export const MenuContextProvider = ({ children }: Children ) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return <MenuContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>{children}</MenuContext.Provider>;
};

export default MenuContext;
