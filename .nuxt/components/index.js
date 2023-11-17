export { default as Carousel } from '../..\\components\\carousel.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as FourBanner } from '../..\\components\\fourBanner.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as HeaderSection1 } from '../..\\components\\headerSection1.vue'
export { default as HeaderSection2 } from '../..\\components\\headerSection2.vue'
export { default as HeaderSection3 } from '../..\\components\\headerSection3.vue'
export { default as LatestNews } from '../..\\components\\latestNews.vue'
export { default as LeftSide } from '../..\\components\\leftSide.vue'
export { default as Orders } from '../..\\components\\orders.vue'
export { default as OurService } from '../..\\components\\ourService.vue'
export { default as RightSide } from '../..\\components\\rightSide.vue'
export { default as SiteBy } from '../..\\components\\siteBy.vue'
export { default as Specials } from '../..\\components\\specials.vue'
export { default as TrendingProducts } from '../..\\components\\trendingProducts.vue'
export { default as AdminPanelComponentsAddNewProduct } from '../..\\components\\adminPanelComponents\\addNewProduct.vue'
export { default as AdminPanelComponentsDiscounts } from '../..\\components\\adminPanelComponents\\discounts.vue'
export { default as AdminPanelComponentsMenus } from '../..\\components\\adminPanelComponents\\menus.vue'
export { default as AdminPanelComponentsNews } from '../..\\components\\adminPanelComponents\\news.vue'
export { default as AdminPanelComponentsOrders } from '../..\\components\\adminPanelComponents\\orders.vue'
export { default as AdminPanelComponentsProducts } from '../..\\components\\adminPanelComponents\\products.vue'
export { default as AdminPanelComponentsReports } from '../..\\components\\adminPanelComponents\\reports.vue'
export { default as AdminPanelComponentsUsers } from '../..\\components\\adminPanelComponents\\users.vue'
export { default as EnglishComponentsCarousel } from '../..\\components\\englishComponents\\carousel.vue'
export { default as EnglishComponentsFooter } from '../..\\components\\englishComponents\\footer.vue'
export { default as EnglishComponentsFourBanner } from '../..\\components\\englishComponents\\fourBanner.vue'
export { default as EnglishComponentsHeader } from '../..\\components\\englishComponents\\header.vue'
export { default as EnglishComponentsHeaderSection1 } from '../..\\components\\englishComponents\\headerSection1.vue'
export { default as EnglishComponentsHeaderSection2 } from '../..\\components\\englishComponents\\headerSection2.vue'
export { default as EnglishComponentsHeaderSection3 } from '../..\\components\\englishComponents\\headerSection3.vue'
export { default as EnglishComponentsLatestNews } from '../..\\components\\englishComponents\\latestNews.vue'
export { default as EnglishComponentsLeftSide } from '../..\\components\\englishComponents\\leftSide.vue'
export { default as EnglishComponentsLogin } from '../..\\components\\englishComponents\\login.vue'
export { default as EnglishComponentsOurServices } from '../..\\components\\englishComponents\\ourServices.vue'
export { default as EnglishComponentsProduct } from '../..\\components\\englishComponents\\product.vue'
export { default as EnglishComponentsRegister } from '../..\\components\\englishComponents\\register.vue'
export { default as EnglishComponentsSiteBy } from '../..\\components\\englishComponents\\siteBy.vue'
export { default as EnglishComponentsSpecials } from '../..\\components\\englishComponents\\specials.vue'
export { default as EnglishComponentsTrendingProducts } from '../..\\components\\englishComponents\\trendingProducts.vue'
export { default as PersianComponentsProduct } from '../..\\components\\persianComponents\\product.vue'
export { default as PersianComponentsRegister } from '../..\\components\\persianComponents\\register.vue'
export { default as PersianComponentsRightSide } from '../..\\components\\persianComponents\\rightSide.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
