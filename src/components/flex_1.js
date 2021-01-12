import React from "react"
import ImageFlex1 from "../components/image_flex_1"

const Flex1 = () => {

  return (

<div className="incog_wrapper">
            <div className="flex_container margin-top-md flex_center_vertical mobile_column_reverse nowrap">
               <div className="image_container half fadeFromLeft animate_me animated relative">
                 <ImageFlex1 />
                  <div className="image_overlay">
                     <div>
                        <span className="bold_overlay_text">MASON HEREFORD</span> <br></br><span> CHEF/OWNER, TURKEY & THE WOLF</span>
                     </div>
                  </div>
               </div>
               <div className="flex_copy_container half fadeFromLeft animate_me animated">
                  <h1 className="color_green">INTRODUCING INCOGMEATO<sup>&trade;</sup></h1>
                  <p className="fadeFromLeft animate_me animated">Incogmeato is the new plant-based protein that looks like meat, cooks like meat and tastes like meat. How much like meat? So much that even the most die-hard meat-loving chefs, like Mason Hereford, have gone from “no way” to “holy cow,” creating plant-based dishes that are every bit as craveable, flavorful, and juicy as meat. It’s not unbelievable, it’s Incogmeato. Plants with Meat Cred.</p>
               </div>
            </div>
         </div>


  )
}

export default Flex1


         
