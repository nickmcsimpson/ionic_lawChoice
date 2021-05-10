import { IonContent, IonPage, IonImg, useIonViewDidEnter, IonGrid, IonRow, IonCol } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import MyHeader from '../components/MyHeader';
import './Home.css';
import {Plugins} from '@capacitor/core';

const Home: React.FC = () => {
  const {Geolocation} = Plugins;
  const coordinates = Geolocation.getCurrentPosition();

  useIonViewDidEnter(() => {
    console.log('location', coordinates);
  })

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid fixed={true}>
          <MyHeader />
          <IonRow class="ion-align-items-center">
            <IonCol size="6">
              <IonImg src="assets/images/lawyers.jpg" />
            </IonCol>

            <IonCol size="3">
              <IonRow >
                `Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, 
                we screwed up. It could have been in design, build, or test. Whatever it was, we should have 
                caught it. We were too gung ho about the schedule and we locked out all of the problems we 
                saw each day in our work.`
              </IonRow>
              <IonRow>
                <IonImg src="assets/images/blog.jpg" />
              </IonRow>
            </IonCol>

            <IonCol size="3">
              <IonRow>
                <IonImg src="assets/images/faq.jpg" />
              </IonRow>
              <IonRow >
                  `“From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough 
                means we are forever accountable for what we do or what we fail to do. We will never again compromise 
                our responsibilities. Every time we walk into Mission Control we will know what we stand for.`
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow >
            `“Every element of the program was in trouble and so were we. The simulators were not working, 
            Mission Control was behind in virtually every area, and the flight and test procedures changed 
            daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I 
            don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the 
            cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things 
            would come together by launch day, when in our hearts we knew it would take a miracle. We were 
            pushing the schedule and betting that the Cape would slip before we did.`
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonImg src="assets/images/sample-banner.png" />
          </IonRow>
            
        </IonGrid>
            {/* <IonItem button routerLink="/lawyerlist">
              
            </IonItem>
            <IonItem button routerLink="/lawyerlist">
              <IonLabel class="ion-text-center">
                LAWYERS
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/blog">
              
            </IonItem>
            <IonItem button routerLink="/blog">
              <IonLabel class="ion-text-center">
                BLOG
              </IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonItem button routerLink="/faq">
              <IonImg src="assets/images/faq.jpg" />
            </IonItem>
            <IonItem button routerLink="/faq">
              <IonLabel class="ion-text-center">
                FAQ
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
