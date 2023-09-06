import { SectionList, View } from "react-native";

import { Block } from "@components/Block";
import { Button } from "@components/Button";
import { Header } from "@components/Header";

import { Container, ListItem, ListItemDivider, ListItemDot, ListItemHour, ListItemText, ListSection, ListSectionTitle, TopText } from "./styles";

export function Home() {
  const DATA = [
    {
      title: '12.08.22',
      data: [
        {
          hour: '20:00',
          meal: 'Pizza',
          isDiet: false,
        },
        {
          hour: '20:00',
          meal: 'Salada',
          isDiet: true,
        },
        {
          hour: '20:00',
          meal: 'Fruta',
          isDiet: true,
        }
      ]
    },
    {
      title: '11.08.22',
      data: [
        {
          hour: '20:00',
          meal: 'Frango',
          isDiet: true,
        },
        {
          hour: '20:00',
          meal: 'Burger',
          isDiet: false,
        },
        {
          hour: '20:00',
          meal: 'Risotto',
          isDiet: false,
        }
      ]
    },
    {
      title: '10.08.22',
      data: [
        {
          hour: '20:00',
          meal: 'Pizza',
          isDiet: false,
        },
        {
          hour: '20:00',
          meal: 'Burger',
          isDiet: false,
        },
        {
          hour: '20:00',
          meal: 'Risotto',
          isDiet: false,
        }
      ]
    },
  ];

  return (
    <Container>
      <Header />

      <Block
        type="POSITIVE"
        size="LARGE"
        value="90,86%"
        description="das refeições dentro da dieta"
      />

      <TopText>Refeições</TopText>
      <Button icon="plus" text="Nova refeição" />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.meal + index}

        style={{ marginTop: 32 }}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
        
        renderSectionHeader={({section: {title}}) => (
          <ListSection>
            <ListSectionTitle>{title}</ListSectionTitle>
          </ListSection>
        )}

        renderSectionFooter={() => <View style={{ height: 32 }} />}
        
        renderItem={({item}) => (
          <ListItem>
            <ListItemHour>{item.hour}</ListItemHour>
            <ListItemDivider />
            <ListItemText>{item.meal}</ListItemText>
            <ListItemDot type={item.isDiet ? 'POSITIVE' : 'NEGATIVE'} />
          </ListItem>
        )}
      />
    </Container>
  )
}
