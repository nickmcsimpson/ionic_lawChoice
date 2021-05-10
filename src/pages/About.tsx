import { IonContent, IonPage, IonTitle, IonToolbar, IonImg, IonFooter, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import MyHeader from '../components/MyHeader';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonGrid fixed={true}>
          <MyHeader />
          <IonRow>
            <IonImg src="assets/images/city.jpg" />
          </IonRow>
          <IonRow>
            <h1>We create Dreams</h1>

            <p>
            Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
            </p>

            <p>
            Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
            </p>
          </IonRow>
          <IonRow>
            <IonFooter>
              <IonToolbar>
                <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
                <IonTitle class="ion-text-center" size="small">2021 A New Year</IonTitle>
              </IonToolbar>
            </IonFooter>
          </IonRow>
        </IonGrid>
      </IonContent>
      
    </IonPage>
  );
};

export default About;
