import { IonPage, IonContent, IonButton, IonIcon, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import BlogListing from './BlogDB';
import './BlogDetail.css'
import {arrowBackOutline} from 'ionicons/icons';

const BlogDetail: React.FC<any> = ({match}) => {
  const [posts] = useState<Array<any>>(BlogListing);
  const selectedPost= posts.find((post) =>{ 
    return post.id === match.params.id;
  });
  return (
    <IonPage>
      <MyHeader />
      <IonContent>
        <IonButton color="light" routerLink="/blog">
            <IonIcon slot="start" icon={arrowBackOutline} />
                Back
        </IonButton>
        <IonCard>
          <IonImg class="detailImage" src={selectedPost.pic} />
          <IonCardHeader>
            <IonCardTitle>{selectedPost.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {selectedPost.post}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BlogDetail;
