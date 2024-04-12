import { useState, useEffect } from "react";
import Header from "../../reusables/Header/Header";
import PageTitle from "../../reusables/PageTitle/PageTitle";
import "./Sightseeing.css";

const Sightseeing = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/thingsToSee', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        return setActivities(data)
      })
      .catch(error => console.error(error));
  }, []);

  const getIntensity = (intensityNumber: number) => {
    if(intensityNumber === 1) return "Easy";
    if(intensityNumber === 2) return "Not Easy / Not Hard";
    if(intensityNumber === 3) return "Moderate";
    if(intensityNumber === 4) return "Kinda Intense";
    if(intensityNumber === 5) return "Intense!"
  }
  
  return (
    <>
      <Header />

      <div className="page-content large">
        <PageTitle
          title="Sightseeing"
          emoji="🗺️"
        />

        <div className="all-activities-container">
          {activities.map((activity: any) => {
            return (
              <div className="activity-card">
                <div className="image-div">
                  <img src={activity.image} />
                </div>
                <div className="activity-info">
                  <p className="bold-title">{activity.name}</p>
                  <p className="small-text">{activity.address}</p>
                  <p className="small-text"><b>Intensity level: </b><span>{`${activity.intensity} - ${getIntensity(activity.intensity)}`}</span></p>

                  <div className="activity-tags-container">
                    <div className="activity-tag">
                      <p>{activity.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sightseeing;