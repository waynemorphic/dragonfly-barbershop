import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <p className='wayne'>Wayne 2023</p>
      <div className='reviews'>
        <div className='reviews-container'>
          <h6 className='heading'>Loved the service!!</h6>
          <p className='name'> John Smith, June 2023</p>
        </div>
        <div className='reviews-container'>
          <h6 className='heading'>Affordable!!</h6>
          <p className='name'> Mike Helms, July 2023</p>
        </div>
        <div className='reviews-container'>
          <h6 className='heading'>Totally Recommend!</h6>
          <p className='name'> Philips Helms, July 2023</p>
        </div>
        <div className='reviews-container'>
          <h6 className='heading'>A must visit!</h6>
          <p className='name'> John Doe, Feb 2023</p>
        </div>
        <div className='reviews-container'>
          <h6 className='heading'>Sanitised tools and barbers</h6>
          <p className='name'> Chris , Aug 2023</p>
        </div>
      </div>
    </div>
  )
}
