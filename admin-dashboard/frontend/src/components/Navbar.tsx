import React, { useEffect, useState, useCallback } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Switch from "@radix-ui/react-switch";

export default function Navbar({ theme, setTheme }: any) {
  const [checked, setChecked] = useState(true);

  const checkedChange = useCallback(() => {
    setChecked(!checked);
    setTheme(checked)
    if (localStorage.theme == "dark") localStorage.theme = "light";
    else if (localStorage.theme != "dark") localStorage.theme = "dark";
    else localStorage.theme = "dark";

    console.log(localStorage.theme);
  }, [checked]);

  useEffect(() => {
    if (localStorage.theme == "dark" || !("theme" in localStorage))
      setChecked(false);
    else setChecked(true);
  }, [checkedChange]);

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="w-[20%] border-r-2 text-center p-7 flex flex-col justify-between py-32"
    >
      <NavigationMenu.List>
        <NavItem name="Overview" link="/dashboard" />
        <NavItem name="Products" link="/dashboard" />
        <NavItem name="Customers" link="/dashboard" />
        <NavItem name="Orders" link="/dashboard" />
      </NavigationMenu.List>
      <NavigationMenu.List className="block space-y-5">
        <NavItem name="Overview" link="/dashboard" />
        <NavigationMenu.Item>
          <div>Dark mode</div>
          <Switch.Root
            className="w-[42px] h-[25px] bg-white rounded-full relative border-2 border-gray-800 focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
            onCheckedChange={checkedChange}
            defaultChecked={checked}
          >
            <Switch.Thumb className="block w-[21px] h-[20px] bg-white rounded-full shadow-[0_2px_2px] shadow-black transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[15px]" />
          </Switch.Root>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

interface NavItemProps {
  name: string;
  link: string;
}

function NavItem({ name, link }: NavItemProps) {
  return (
    <NavigationMenu.Item className="py-3 hover:bg-gray-100 rounded-md transition-all duration-150">
      <NavigationMenu.Link className="text-xl" href={link}>
        {name}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
