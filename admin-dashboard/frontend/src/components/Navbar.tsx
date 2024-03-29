import { useEffect, useState, useCallback } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Switch from "@radix-ui/react-switch";

export default function Navbar({ setTheme }: any) {
  const [checked, setChecked] = useState(true);

  const checkedChange = useCallback(() => {
    setChecked(!checked);
    setTheme(checked);
    if (localStorage.theme == "dark") localStorage.theme = "light";
    else if (localStorage.theme != "dark") localStorage.theme = "dark";
    else localStorage.theme = "dark";

    console.log(localStorage.theme);
  }, [checked, setTheme]);

  useEffect(() => {
    if (localStorage.theme == "dark" || !("theme" in localStorage))
      setChecked(false);
    else setChecked(true);
  }, [checkedChange]);

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="w-[20%] border-r-2 text-center p-7 flex flex-col justify-between py-32 divide-y"
    >
      <NavigationMenu.List>
        {[
          ["Overview", "/dashboard"],
          ["Products", "/products"],
          ["Customers", "/customers"],
          ["Orders", "/dashboard"],
        ].map(([title, url], key) => (
          <NavigationMenu.Link className="text-xl" href={url} key={key}>
            <NavItem name={title} />
          </NavigationMenu.Link>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.List className="block space-y-5 py-5">
        <NavigationMenu.Link className="text-xl" href="/dashboard">
          <NavItem name="Logout" />
        </NavigationMenu.Link>
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
}

function NavItem({ name }: NavItemProps) {
  return (
    <NavigationMenu.Item className="py-3 hover:bg-gray-100 rounded-md transition-all duration-150">
      {name}
    </NavigationMenu.Item>
  );
}
