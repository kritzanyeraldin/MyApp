import { UserAvatar } from "@/components/home";
import { DrawerItem, DrawerNavigationOptions } from "@react-navigation/drawer";
import { Moon } from "@tamagui/lucide-icons";
import { ScreenProps } from "expo-router/build/useScreens";

type DrawerItemProps = React.ComponentProps<typeof DrawerItem>;

type DrawerSectionItem = {
  id: string;
  props?: Partial<DrawerItemProps>;
  screenProps: ScreenProps<DrawerNavigationOptions>;
};

type DrawerSection = {
  id: string;
  label: string;
  items: DrawerSectionItem[];
};

export const drawerSections: DrawerSection[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        id: "menu",
        props: {
          icon: ({ focused }) => (
            <Moon color={focused ? "$red10Dark" : "$blue10Dark"} />
          ),
        },
        screenProps: {
          name: "index",
          options: {
            drawerLabel: "Menú",
            title: "Menú",
          },
        },
      },
      {
        id: "reserve",
        props: {
          icon: ({ focused }) => (
            <Moon color={focused ? "$red10Dark" : "$blue10Dark"} />
          ),
        },
        screenProps: {
          name: "reserve",
          options: {
            drawerLabel: "Reservar",
            title: "Reservar",
            headerRight: UserAvatar,
          },
        },
      },
    ],
  },
  {
    id: "settings",
    label: "Configuración",
    items: [],
  },
];
