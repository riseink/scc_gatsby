/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id='incogmeato'
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <div className="button_container ">
      <a className="incogmeato_sample_button incogmeto_button" title="Request Your Free Sample" href="https://reply4info.com/kelloggs/incogmeato-sample/" target="_blank">
         <span>Request Your Free Sample</span>
         <svg version="1.1" id="Layer_1"  x="0px" y="0px"
            viewBox="0 0 178.62723 36.43036" >
            <g>
               <path className="st0" d="M0.80304,0.95898C0.76678,1.41846,0.72992,1.87384,0.69415,2.32715
                  C0.65472,2.76312,0.6153,3.19574,0.5769,3.62549C0.42102,5.24695,0.23145,6.80908,0,8.30505
                  c0.19678,0.26678,0.34143,0.61774,0.38599,1.06091c0.2663,2.65033-0.09857,5.27551,0.05109,7.92548
                  c0.09808,1.73608,0.31573,3.45184,0.35437,5.19592c0.01343,0.60388,0.01282,1.24921-0.01721,1.89856
                  c0.20172,1.31122,0.40723,2.49426,0.59894,3.48425l0.11206,1.92438l0.84387,0.74286
                  c-0.42126-1.22723,0.73669,0.17346,0.53131,0.14026c0.32544,0.36273,0.95477,0.7384,1.81635,1.12097
                  c1.4502,1.85632,2.8335,3.40497,5.00201,4.01324c1.25519,0.35205,2.5528,0.4646,3.84332,0.61847
                  c0.84064-0.09937,1.65271-0.19531,2.41882-0.28558l-2.06195-0.4505c6.08008,0.01935,4.19348-0.58667,11.46198-0.82922
                  c-4.00354,0.43121-1.13495,0.92938,4.12866,0.90173c7.86407,0.70209,24.92694-1.87256,28.40765-0.43048
                  c10.54956-0.79736,60.98047-0.76147,71.97772-1.20294c12.36249-0.85895,18.47119,0.57074,30.40472-0.64478
                  c2.21814,0.14307,4.78693,0.20178,7.56787,0.20459c3.78369-1.02197,6.72076-2.06335,7.57513-3.0155
                  c-0.20544,0.0332,0.95258-1.36749,0.53125-0.14026l0.84393-0.74286l0.11206-1.92438
                  c0.34753-1.79517,0.74121-4.2088,1.07373-6.91333c0.23602-1.9223,0.44043-3.99042,0.57428-6.08411
                  c0.07056-1.0365,0.11621-2.13104,0.07153-3.18964c-0.03473-1.06274-0.1618-2.11792-0.30914-3.11218
                  c-0.25055-1.5741-0.44922-3.22968-0.6142-4.94543c-0.03833-0.42975-0.07782-0.86237-0.11719-1.29834
                  c-0.03583-0.45331-0.07263-0.90869-0.10895-1.36816c-0.02167-0.3158-0.04364-0.64056-0.06531-0.95898H0.86835
                  C0.84668,0.31842,0.82471,0.64319,0.80304,0.95898z"/>
            </g>
         </svg>
      </a>
   </div>
      </div>
      <div className="center">
      <small>*Offer valid only for foodservice operators and professionals.<br className="mobile_break"></br>Not valid for consumers.</small>
   </div>
   <div className="incog_wrapper override">
      <hr></hr>
   </div>
   <div className="overflow_wrapper">
      <div className="grid__item">
         <div className="incog_wrapper">
            <div className="flex_container margin-top-md flex_center_vertical mobile_column_reverse">
               <div className="image_container half fadeFromLeft animate_me animated relative">
                  <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/bite_burger.jpg" alt="Mason Hereford bites burger" className="img-responsive"></img>
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
         <div className="incog_wrapper">
            <hr></hr>
         </div>
         <div className="incog_wrapper ">
            <div className="flex_container space_between ">
               <div className="thirds mobile_column_reverse fadeThirds animate_me animated">
                  <div className="sprite_containter sprite_1">
                  </div>
                  <h2 className="sprite_text color_green fadeThirdsH2 animate_me animated">
                     <span className="desktop">Looks Like <br></br> Meat</span>
                     <span>Cooks Like Meat</span>
                     <span>Tastes Like Meat</span>
                  </h2>
               </div>
               <div className="thirds hide_mobile fadeThirds animate_me animated">
                  <div className="sprite_containter sprite_2 hide_mobile ">
                  </div>
                  <h2 className="color_green fadeThirdsH2 animate_me animated">Cooks Like <br></br> Meat</h2>
               </div>
               <div className="thirds hide_mobile fadeThirds animate_me animated" >
                  <div className="sprite_containter sprite_3 ">
                  </div>
                  <h2 className="color_green fadeThirdsH2 animate_me animated">Tastes Like <br></br> Meat</h2>
               </div>
            </div>
            <div className="center vertical_margin fadeThirdsCopy animate_me animated">
               <p>Yep, Incogmeato does anything meat can do, which means it’s a true back-of-house star that cooks up deliciously from griddle to charbroiler to skillet.</p>
            </div>
         </div>
      </div>
      <div className="grid__item textured_bg relative targetCow animate_me animated">
         <div id="target_cow_1" className="cow_container right ">
            <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/cow_1.png" alt="Incogmeato Cow" className="img-responsive"></img>
         </div>
         <div className="incog_wrapper center">
            <div className="video_placeholder">
               <a className="venobox vbox-item" data-href="#mason-youtube" data-type="inline" data-gall="gall-frame" >
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/two_burgers.jpg" alt="Mason Hereford holding 2 burgers" className="img-responsive"></img>
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/play_icon.png" alt="play_icon" className="play_logo"></img></a>
            </div>
            <h2 className="color_green">CHEF MASON HEREFORD GOES INCOGMEATO</h2>
            <p>Award-winning chef Mason Hereford, of Turkey and The Wolf, is a meat guy. So yeah, his sandwiches are, “pretty much the opposite of plant-friendly.” That is, until Incogmeato completely lit up his kitchen and put a crave-worthy, plant-based spin on his menu.</p>
         </div>
      </div>
      <div className="grid__item">
         <div className="full_bleed_flex start fullBleedAnimate animate_me animated">
            <div className="image_container">
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/burger_1.jpg" alt="Incogmeato Burger Patty" className="img-responsive"></img>
            </div>
            <div className="copy_container incogmeato_product pullLeft">
               <a className="incogmeato_product_headline" title="Incogmeato Burger Patty" href="/content/NorthAmerica/KelloggsSpecialityChannel/en_US/products/incogmeato-burger-patties.html/028989103314" target="_blank">
                  <h2 className="color_green">Incogmeato Burger Patty</h2>
               </a>
               <p>Got a beef with plant-based proteins? Not for long. Because these new juicy Incogmeato Burger Patties will brown, sear and wow their way onto your menu.</p>
               <a className="incogmeato_product_button incogmeto_button" title="Incogmeato Burger Patty" href="/content/NorthAmerica/KelloggsSpecialityChannel/en_US/products/incogmeato-burger-patties.html/028989103314" target="_blank">
               <span>view product</span>
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/button.png" alt="Incogmeato Burger Patty Button"></img>
               </a>
            </div>
         </div>
         <div className="incog_wrapper">
            <hr></hr>
         </div>
         <div className="full_bleed_flex end fullBleedAnimate animate_me animated">
            <div className="image_container">
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/burger_2.jpg" alt="Incogmeato Breakfast Sausage Patty" className="img-responsive"></img>
            </div>
            <div className="copy_container incogmeato_product text-align-right pushLeft">
               <a className="incogmeato_product_headline" title="Incogmeato Breakfast Sausage Patty" href="/content/NorthAmerica/KelloggsSpecialityChannel/en_US/products/incogmeato-breakfast-sausage-patties.html" target="_blank">
                  <h2 className="color_green">Incogmeato Breakfast Sausage Patty</h2>
               </a>
               <p>Think you can’t get all that incredible pork sausage taste without the pork? Hogwash. These new Incogmeato Breakfast Sausage Patties hit on every savory, delicious, mouthwatering pork flavor.</p>
               <a className="incogmeato_product_button incogmeto_button" title="Incogmeato Breakfast Sausage Patty" href="/content/NorthAmerica/KelloggsSpecialityChannel/en_US/products/incogmeato-breakfast-sausage-patties.html" target="_blank">
               <span>view product</span>
               <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/button.png" alt="Incogmeato Breakfast Sausage Patty Button"></img>
               </a>
            </div>
         </div>
      </div>
      <div className=" relative targetCow animate_me animated">
         <div id="target_cow_2" className="cow_container left ">
            <img src="https://stage65.kelloggsawayfromhome.com/content/dam/kelloggsspecialitychannel/incogmeato/cow_2.png" alt="xxx" className="img-responsive"></img>
         </div>
      </div>

      <div class="grid__item center">
         <h2 class="color_green form-section-headline">Sign up for juicy Incogmeato updates.</h2>
         <h4 class="color_green form-section-byline">New recipes. New products. New offers.</h4>
         <div id="incogmeato-form">
            <div class="form-section-container">
               <div class="submission-thank-you-hide"></div>
               <div class="form-content msf_gradient">
                  <form action="https://em.kelloggsspecialtychannels.com/l/121742/2020-10-20/6q6dx6" method="post">
                     <div class="form-body">
                        <div style={{
          position: `absolute`,
          left: `-9999px`,
          top: `-9999px;`,
        }}>
                           <label for="pardot_extra_field">Comments</label>
                           <input type="text" id="pardot_extra_field" name="pardot_extra_field"></input>
                        </div>
                        <div class="rebate-form-row">
                           <div class="form-col-half margin-right">
                              <label class="label-copy" for="firstName">* First Name</label>
                              <input class="required-text text-field" type="text" name="firstName"></input>
                              <div id="firstNameError" class="error-message">Please enter your first name</div>
                           </div>
                           <div class="form-col-half margin-left">
                              <label class="label-copy" for="lastName">* Last Name</label>
                              <input class="required-text text-field" type="text" name="lastName"></input>
                              <div id="lastNameError" class="error-message">Please enter your last name</div>
                           </div>
                        </div>
                        <div class="rebate-form-row">
                           <div class="form-col-full">
                              <label class="label-copy" for="title">* Title</label>
                              <input class="required-text text-field" type="text" name="title"></input>
                              <div id="titleError" class="error-message">Please enter your title</div>
                           </div>
                        </div>
                        <div class="rebate-form-row">
                           <div class="form-col-full">
                              <label class="label-copy" for="email">* Email</label>
                              <input class="required-text email-field" type="email" name="email"></input>
                              <div id="emailError" class="error-message">Please enter a valid email address</div>
                           </div>
                        </div>
                        <div class="rebate-form-row">
                           <div class="form-col-full ">
                              <label class="label-copy" for="segment">* Segment</label>
                              <select class="required-select select-field" name="segment">
                                 <option value="" disabled selected></option>
                                 <option value="College &amp; University">College &amp; University</option>
                                 <option value="Convenience">Convenience</option>
                                 <option value="Healthcare">Healthcare</option>
                                 <option value="K-12 Schools">K-12</option>
                                 <option value="Commercial Restaurants">Restaurant</option>
                                 <option value="Vending">Vending</option>
                              </select>
                              <div id="segmentError" class="error-message">Required!</div>
                           </div>
                        </div>
                     </div>
                     <div class="form-footer margin-top">
                        <div class="form-footer-checkbox-wrapper">
                           <div class="form-footer-checkbox-container">
                              <div class="rebate-form-row">
                                 <div class="form-col-full">
                                    <input class="required-select checkbox-field" type="checkbox" name="termsAndPrivacy"></input>
                                    <label class="form-footer-copy" for="termsAndPrivacy">* I acknowledge that I have read the <a href="https://www.kelloggcompany.com/en_US/legal.html" target="_blank">Terms Of Use</a> and <a href="https://www.kelloggcompany.com/en_US/privacy-policy.html" target="_blank">Privacy Policy</a></label>
                                    <div id="termsAndPrivacyError" class="error-message checkbox-err">Please check that you agree</div>
                                 </div>
                              </div>
                              <div class="rebate-form-row">
                                 <div class="form-col-full">
                                    <input class="checkbox-field" type="hidden" value="1" name="promoOptIn"></input>
                                    <input class="checkbox-field" type="checkbox" value="0" name="promoOptIn"></input>
                                    <label class="form-footer-copy" for="promoOptIn">I agree to receive news, updates, offers and more marketing information from Kellogg's Away From Home</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="rebate-form-row btn-margin-top">
                           <input id="incogmeatoSubmit" type="submit" name="incogmeatoSubmit" value="submit" disabled></input> 
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>

      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
