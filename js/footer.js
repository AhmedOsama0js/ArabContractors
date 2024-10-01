const footer = document.getElementById("footerInfo")

footer.innerHTML = `
      <section class="info_section">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-3">
            <div class="info_contact">
              <h5>About Our Company</h5>
              <div>
                <div class="img-box">
                  <img src="images/location.png" width="18px" alt="" />
                </div>
                <p>السيب‎، عمان</p>
              </div>
              <div>
                <div class="img-box">
                  <img src="images/phone.png" width="12px" alt="" />
                </div>
                <a style="color: aliceblue" href="https://api.whatsapp.com/send?phone=+96877501189&text= السلام عليكم">+96877501189</a>
              </div>
              <div>
                <div class="img-box">
                  <img src="images/mail.png" width="18px" alt="" />
                </div>
                <a
                  style="color: aliceblue"
                  href="mailto:arabcontractorssons@gmail.com"
                  >arabcontractorssons@gmail.com</a
                >
              </div>
            </div>
          </div>
          
          <div class="col-md-3">
            <div class="info_info"></div>
          </div>

          <div class="col-md-3">
            <div class="info_form">
              <h5>Newsletter</h5>
              <div class="social_box align-items-center">
                <a
                  href="https://www.facebook.com/share/Bgm4xqT8LsSFqqvz/?mibextid=LQQJ4d&direct_share_include_copy=1&fb_entity_type=unknown"
                >
                  <img src="images/fb.png" alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/arab_contractors_sons?igsh=aG9pOWp0b3hpZ2Zm&utm_source=qr"
                >
                  <img width="35px" src="images/insta.png" alt="instgram" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+96877501189&text= السلام عليكم"
                >
                  <img width="45px" src="images/whatsapp.png" alt="whatsapp" />
                </a>
                <a
                href="mailto:arabcontractorssons@gmail.com"
                >
                  <img width="30px" src="images/gmail.png" alt="whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
