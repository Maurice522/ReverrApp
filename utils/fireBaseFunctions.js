import auth from '@react-native-firebase/auth';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export const GetUser = async setData => {
  const udata = await auth().currentUser;
  const savedUser = await firestore()
    .collection('Users')
    .doc(udata.email)
    .get();
  setData(savedUser._data);
};

export const ChangeDp = (loading, setLoading) => {
  ImagePicker.openPicker({
    cropping: true,
  }).then(image => {
    try {
      loading;
      const url = image.path;
      const imageURL = url.substring(url.lastIndexOf('/') + 1);
      storage()
        .ref('Images/' + imageURL)
        .putFile(url)
        .then(async () => {
          const udata = await auth().currentUser;
          var userEmail = udata.email;
          var imgURL = await storage()
            .ref('Images/' + imageURL)
            .getDownloadURL();
          await firestore().collection('Users').doc(userEmail).update({
            image: imgURL,
          });
          setLoading(false);
          alert('changed');
        });
    } catch (error) {
      console.log(error);
    }
  });
};

export const GetAllMentors = async setFn => {
  const subscriber = await firestore()
    .collection('Users')
    .onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setFn(users.filter(y => y.userType == 'mentor'));
    });
};

// export const GetChatList = async list => {
//   if(list+"s"!="s"){
//     var array = [];
//     list.forEach(async(user)=>{
//       const savedUser = await firestore()
//         .collection('Users')
//         .doc(user)
//         .get();
//       array.push(savedUser._data);
//     })
//     console.log("shoing")
//     console.log(array);
//     // return array;
//   }else{
//     console.log("empty")
//   }
// };

// export const getChatList = async (list)=>{

//   if(list+"s"!="s"){
//     try{
//       var array = [];
//       list.forEach(user=>{
//         const savedUser = await firestore()
//         .collection('Users')
//         .doc(user)
//         .get().then(()=>console.log(savedUser._data))
//       })

//       return array;
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
//   else{
//     console.log("empty");
//   }

// };

export const CreateMessagePath = async (currentcUser, sendTo) => {
  firestore()
    .collection('Messages')
    .doc(currentcUser.email)
    .collection(
      currentcUser && currentcUser.userType == 'Mentor'
        ? 'YourClients'
        : 'YourMentors',
    )
    .doc(sendTo.email)
    .set({messages: []})
    .then(() => {
      firestore()
        .collection('Messages')
        .doc(sendTo.email)
        .collection(
          sendTo && sendTo.userType == 'Mentor' ? 'YourClients' : 'YourMentors',
        )
        .doc(currentcUser.email)
        .set({messages: []});
    });
};

export const SendMessage = (currentcUser, sendTo, message) => {
  firestore()
    .collection('Messages')
    .doc(currentcUser.email)
    .collection(
      currentcUser && currentcUser.userType == 'Mentor'
        ? 'YourClients'
        : 'YourMentors',
    )
    .doc(sendTo.email)
    .update({
      messages: firestore.FieldValue.arrayUnion({
        msg: message,
        createdAt: date + '-' + month + '-' + year,
        sendBy: currentcUser.email,
      }),
    })
    .then(() => {
      firestore()
        .collection('Messages')
        .doc(sendTo.email)
        .collection(
          sendTo && sendTo.userType == 'Mentor' ? 'YourClients' : 'YourMentors',
        )
        .doc(currentcUser.email)
        .update({
          messages: firestore.FieldValue.arrayUnion({
            msg: message,
            createdAt: date + '-' + month + '-' + year,
            sendBy: currentcUser.email,
          }),
        });
    });
};
export const ReciveMessage = async (currentcUser, sendTo, setmsg) => {
  const Allmsg = await firestore()
    .collection('Messages')
    .doc(currentcUser.email)
    .collection(
      currentcUser && currentcUser.userType == 'Mentor'
        ? 'YourClients'
        : 'YourMentors',
    )
    .doc(sendTo.email)
    .get();
  setmsg(Allmsg._data.messages);
    }

export const UpdateUserData = async (
  name,
  about,
  industry,
  experience,
  skills,
  education,
) => {
  const udata = await auth().currentUser;
  const savedUser = await firestore()
    .collection('Users')
    .doc(udata.email)
    .update({
      name: name,
      about: about,
      industry: industry,
      experience: experience,
      skills: skills,
      education: education,
    });
};
