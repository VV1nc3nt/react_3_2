import ListingInterface from "./ListingInterface";


export default function Listing({ items = [] }) {

  return (
    <div className="item-list">
      {
        items.map((element : ListingInterface) => {
          if (element.state !== 'removed') {
            return  (
              <div className="item" key={ element.listing_id }>
                <div className="item-image">
                  <a href={ element.url }>
                    <img src={ element.MainImage.url_570xN } />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{ element.title.length > 50 ? element.title.substring(0, 50) + '...' : element.title }</p>
                  <p className="item-price">{ element.currency_code === 'USD' ? '$' + element.price : element.currency_code === 'EUR' ? '€' + element.price : element.price + ' ' + element.currency_code }</p>
                  <p className={ element.quantity <= 10 ? 'item-quantity level-low' : element.quantity <= 20 ? 'item-quantity level-medium' : 'item-quantity level-high' }>{ element.quantity + ' left' }</p>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}
