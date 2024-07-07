"use client";
import UserItem from "./UserItem";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import {
  Bell,
  Cookie,
  CreditCard,
  Inbox,
  Logs,
  Settings,
  User,
  icons,
} from "lucide-react";
export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User />,
        },
        {
          link: "/",
          text: "Inbox",
          icon: <Inbox />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <CreditCard />,
        },
        {
          link: "/",
          text: "Notifications",
          icon: <Bell />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
          icon: <Settings />,
        },
        {
          link: "/",
          text: "Privacy ",
          icon: <Cookie />,
        },
        {
          link: "/",
          text: "Logs",
          icon: <Logs />,
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
