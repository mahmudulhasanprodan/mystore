import React, { useEffect, useState } from 'react'
import image from "../../assets/HomeComponentpic/Rocket.png"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../Firebase/FirebaseSDK';



const ProductComment = ({realtime,ProductId}) => {

  const[ProductComment,setProductComment] = useState([])


useEffect(() => {
  const AllCommpent = [];
getDocs(collection(db, "Comment")).then((querySnapshot) => {
  querySnapshot.forEach((item) => {
    AllCommpent.push({
      UnicId: item.id,
      UnicName: item.data(),
    });
  });
 const FilteredComments = AllCommpent.filter(
   (comment) => comment.UnicName.ProductId === ProductId
   
 );
  setProductComment(FilteredComments); 

});
},[ProductId,realtime])


  return (
    <>
      <div>
        {ProductComment.length > 0 ? (
          ProductComment?.map((item) => (
          <div className="flex gap-x-3 pb-4 border-b-[1px] pt-2" key={item.UnicId}>
            <div className="w-10 h-10 bg-gray-500 rounded-full"> 
              
            </div>
            <div className="w-2/3">
              <h2 className="font-Montserrat text-base font-semibold">
                {item.UnicName.name}
              </h2>
              <p className="font-Montserrat text-sm font-normal text-justify">
                {item.UnicName.Messege}
              </p>
            </div>
          </div>
        ))
        ): (
          <p>No Comments For This Products</p>
        )}
      
      </div>
    </>
  );
}

export default ProductComment
