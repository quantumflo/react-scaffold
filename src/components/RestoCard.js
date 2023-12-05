const RestoCard = ( props ) => {
    const { restaurant: { info : {name, avgRating, cloudinaryImageId, cuisines, costForTwo}} } = props;
    
    return (
      <div className='restaurant-card'>
        <div className='restaurant-logo'>
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt='restaurant-logo' />
        </div>
        <div className='restaurant-info'>
          <div className='restaurant-name'>{name}</div>
          <div className='restaurant-cuisines'>{cuisines.join(', ')}</div>
          <div style={{display:"flex", justifyContent: "space-between", marginTop: "0.3rem"}}>
            <div className='restaurant-rating'>{avgRating}   </div>
            <div className='restaurant-costForTwo'>{costForTwo}</div>
          </div>
        </div>
      </div>
    )
  }

  export default RestoCard;