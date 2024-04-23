import { H5, Separator, SizableText, Tabs, Text, View } from "tamagui";
import Carousel from "./carousel";
import Comp from "./comp";

const SchedulesTab = () => {
  return (
    <View>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
        overflow="hidden"
        bg="#b4b3b3"
        mt="$3"
        // br="$0"
        // h={200}
      >
        <Tabs.List justifyContent="center" br={0}>
          <Tabs.Tab value="Desayuno">
            <SizableText>Tab 1</SizableText>
          </Tabs.Tab>
          <Tabs.Tab value="Almuerzo">
            <SizableText>Tab 2</SizableText>
          </Tabs.Tab>
          <Tabs.Tab value="Cena">
            <SizableText>Tab 3</SizableText>
          </Tabs.Tab>
        </Tabs.List>

        <Separator />
        <Tabs.Content value="tab1">
          <Comp></Comp>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <View>
            <Text>hoii</Text>
          </View>
        </Tabs.Content>
      </Tabs>
    </View>
  );
};

export default SchedulesTab;
