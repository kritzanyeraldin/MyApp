import { drawerSections } from "@/constants";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerNavigationConfig } from "@react-navigation/drawer/lib/typescript/src/types";
import { X } from "@tamagui/lucide-icons";
import { Fragment, useState } from "react";
import {
  Avatar,
  AvatarImage,
  Button,
  H1,
  H3,
  H4,
  Separator,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

const DrawerContent: DrawerNavigationConfig["drawerContent"] = (props) => {
  const [currentRoute, setCurrentRoute] = useState<string>("index");

  return (
    <DrawerContentScrollView {...props} style={{ height: "100%" }}>
      <View
        // flexGrow={1}
        // bg="red"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        gap="$4"
        p="$3"
      >
        <XStack justifyContent="space-between" width="100%" maxWidth={300}>
          <H1 color="black">Logo</H1>
          <Button icon={X} br="$0" />
        </XStack>
        <View width="100%" maxWidth={300} gap="$4">
          {drawerSections.map((section, sectionIndex) => {
            const isLast = sectionIndex === drawerSections.length - 1;

            return (
              <Fragment key={section.id}>
                <View>
                  <H4>{section.label}</H4>
                  {section.items.map((item) => (
                    <DrawerItem
                      key={item.id}
                      focused={item.screenProps.name === currentRoute}
                      pressColor="#C88888"
                      // activeTintColor="red"
                      activeBackgroundColor="#C88888"
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
              </Fragment>
            );
          })}
        </View>
        <XStack alignSelf="flex-end" width="100%" alignItems="center" gap="$4">
          {/* <Button></Button> */}
          <Avatar bg="green" circular size="$6">
            <AvatarImage src="http://picsum.photos/200/300" />
          </Avatar>
          <Text>User</Text>
        </XStack>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
