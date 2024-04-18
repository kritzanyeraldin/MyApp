import { DrawerContent, UserAvatar } from "@/components/home";
import { drawerSections } from "@/constants";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function AuthLayout() {
  return (
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={
        {
          // headerRight: UserAvatar,
          // drawerContentStyle: { height: "100%" },
        }
      }
    >
      {drawerSections.map((section) =>
        section.items.map((item) => <Drawer.Screen {...item.screenProps} />)
      )}
    </Drawer>
  );
}
