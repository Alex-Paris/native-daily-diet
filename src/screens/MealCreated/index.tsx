import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootList } from 'src/@types/navigation';

import dietImg from './assets/DietIllustration.png'
import notDietImg from './assets/NotDietIllustration.png'

import { Container, Content, GoHomeButton, Image, Text, Title } from "./styles";

type MealCreatedProps = NativeStackScreenProps<RootList, "meal_created">

export function MealCreated({ navigation, route }: MealCreatedProps) {
  const { isDiet } = route.params
  
  const { title, text, image } = isDiet ? {
      title: 'Continue assim!',
      text: 'Você continua dentro da dieta. Muito bem!',
      image: dietImg
    } : {
      title: 'Que pena!',
      text: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
      image: notDietImg
    }

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Content>
        <Title isDiet={isDiet}>{title}</Title>
        <Text>{text}</Text>
        <Image source={image} />
        <GoHomeButton
          text='Ir para a página inicial'
          onPress={handleGoHome}
        />
      </Content>
    </Container>
  )
}