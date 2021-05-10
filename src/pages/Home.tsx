import { IonContent, IonPage } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import MyHeader from '../components/MyHeader';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader />
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Home;
