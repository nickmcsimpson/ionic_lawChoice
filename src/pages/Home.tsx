import { IonContent, IonPage, IonImg, IonList, IonItem, IonItemGroup, IonLabel } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import MyHeader from '../components/MyHeader';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader />
      <IonContent fullscreen>
        <IonList>
          <IonItemGroup>
            <IonItem button routerLink="/lawyerlist">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonItem>
            <IonItem button routerLink="/lawyerlist">
              <IonLabel class="ion-text-center">
                LAWYERS
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/contact">
              <IonImg src="assets/images/blog.jpg" />
            </IonItem>
            <IonItem button routerLink="/contact">
              <IonLabel class="ion-text-center">
                BLOG
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/about">
              <IonImg src="assets/images/faq.jpg" />
            </IonItem>
            <IonItem button routerLink="/about">
              <IonLabel class="ion-text-center">
                FAQ
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
