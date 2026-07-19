import { createContext, useState } from "react";


export const SideBarContext= createContext()

export default function SideBarContrextProvider({children}) {
    const [isOpen,setIsOpen]=useState(false)
    const toggleOpenSideBar=()=>{
        setIsOpen(prev=>!prev)
    }
  return (
    <SideBarContext.Provider value={{isOpen,toggleOpenSideBar}}>
      {children}
    </SideBarContext.Provider>
  );
}
