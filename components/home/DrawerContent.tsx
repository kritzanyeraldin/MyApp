import { drawerSections } from "@/constants";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerNavigationConfig } from "@react-navigation/drawer/lib/typescript/src/types";
import { useState } from "react";
import { Button, H1, Separator, Text, View, XStack } from "tamagui";

const DrawerContent: DrawerNavigationConfig["drawerContent"] = (props) => {
  const [currentRoute, setCurrentRoute] = useState<string>("index");

  return (
    <DrawerContentScrollView {...props}>
      <XStack>
        <H1 color="black">Logo</H1>
        <Button>Cerrar</Button>
      </XStack>
      {drawerSections.map((section, sectionIndex) => {
        const isLast = sectionIndex === drawerSections.length - 1;

        return (
          <>
            <View>
              <Text>{section.label}</Text>
              {section.items.map((item) => (
                <DrawerItem
                  focused={item.screenProps.name === currentRoute}
                  {...item.props}
                  label={item.screenProps.options?.drawerLabel || ""}
                  onPress={() => {
                    if (item.screenProps.name) {
                      setCurrentRoute(item.screenProps.name);
                      props.navigation.navigate(item.screenProps.name);
                    }
                  }}
                />
              ))}
            </View>
            {!isLast && <Separator />}
          </>
        );
      })}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
