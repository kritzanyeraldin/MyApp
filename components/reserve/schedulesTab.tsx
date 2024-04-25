import {
  H5,
  ScrollView,
  Separator,
  SizableText,
  Tabs,
  Text,
  View,
} from "tamagui";
import Carousel from "./carousel";
import Comp from "./comp";
const breakfastSchedules = [
  {
    id: "Turno 1",
    schedule: "2:00pm - 2:30pm",
    date: "Sep5, 2022",
    area: "Area 1",
    progress: 40,
  },
  {
    id: "Turno 2",
    schedule: "2:30pm - 3:00pm",
    date: "Sep5, 2022",
    area: "Area 1",
    progress: 50,
  },
  {
    id: "Turno 3",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },

  {
    id: "Turno 4",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },
  {
    id: "Turno 5",
    schedule: "3:00pm - 3:30pm",
    date: "Sep5, 2022",
    area: "Area 2",
    progress: 100,
  },
];

const SchedulesTab = () => {
  return (
    <View>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
        // height=
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
        <Tabs.Content value="tab1" height="100%">
          <ScrollView overflow="unset">
            <Comp data={breakfastSchedules}></Comp>
          </ScrollView>
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
