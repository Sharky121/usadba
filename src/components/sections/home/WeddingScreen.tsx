/* eslint-disable */
/** СВАДЬБЫ */
export default function WeddingScreen() {
  return (
    <section className="page__section page-section wedding-screen" id="wedding">
      <div className="wedding-screen__container container">
        <div className="wedding-screen__header">
          {/* <h2 class="wedding-screen__title">Cвадьба вашей мечты</h2> */}
          {/* <ul class="wedding-screen__list">
                           <li class="wedding-screen__item">
                             <a href="wedding_ushmor.html" class="btn" target="_blank">
                               <span class="btn__text">Свадьба в Усадьбе Ушмор</span>
                             </a>
                           </li>
                           <li class="wedding-screen__item">
                             <a href="wedding_pra.html" class="btn" target="_blank">
                               <span class="btn__text">Свадьба в Усадьбе на Пре</span>
                             </a>
                           </li>
                         </ul> */}
        </div>
      </div>
      <video className="wedding-screen__video" playsInline muted loop preload="none" data-autoplay id="wedding-video">
        <source src="/video/wedding.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
