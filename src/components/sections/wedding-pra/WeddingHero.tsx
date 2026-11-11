/* eslint-disable */
export default function WeddingHero() {
  return (
    <section className="wedding-main">
      <div className="wedding-main__content">
        <div className="logo">
          <img src="/images/pra_logo_grey.png" width="120" alt="" />
        </div>
        {/* <div class="wedding-main__price">
                       <a class="btn btn--danger btn-price" data-fancybox data-src="#price-wedding-pra">
                         <span class="btn__text">Прайс-лист</span>
                       </a>
                     </div> */}
      </div>
      <div className="wedding-main__image">
        <img className="background-image background-image--no-radius" src="/images/pra-wedding-main.jpg" alt="Усадьба Ушмор" />
      </div>
    </section>
  );
}
