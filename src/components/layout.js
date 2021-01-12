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


   <div className="overflow_wrapper">
      <div className="grid__item">
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
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
