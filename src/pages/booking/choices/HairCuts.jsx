const hairCutsData = [
  {
    value: 1000,
    description: "Personalized haircut. Hot towel treatment and styling."
  },
  {
    value: 1200,
    description: "Classic gentleman's haircut. Hot towel treatment and styling."
  },
  {
    value: 500,
    description: "Personal trim for facial hair."
  },
  {
    value: 1200,
    description: "Personalized haircut for ladies. Hot towel treatment and styling."
  },
  {
    value:300,
    description: "Personalized eye brows trim."
  },
  {
    value:500,
    description: "Personalized haircut for kids under 12 yrs."
  }
]

export default function HairCuts({selectedOption, booking}){
  if (booking.length !== 0){
    return(
      <div id="#haircuts">
        <h3>Haircuts</h3>
        <div className="selection" onChangeCapture={selectedOption}>
        {
            hairCutsData.map((haircut, index)=> {
            <label key={index}>
            <input type="radio" value={haircut.value} name={booking[index].name}/>
              {booking[index].name}  <span>KES {booking[index].price}</span>          
            <br />
            <p className="time">{booking[index].time}</p>
            <p>{haircut.description}</p>
            </label>
          })
      }     
      </div>
      </div>
  
    )
  }
} 
