import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = (props) => {

    const { image, link } = props.social_profile;
    return (
        <span>
            <a href={link} target='_blank' rel="noreferrer" ><img src={image} alt='profile' style={{ width: 35, height: 35, margin: 10 }} /></a>
        </span>
    )
}
const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            <div>
                {
                    SOCIAL_PROFILES.map(profiles => (
                        <SocialProfile key={profiles.id} social_profile={profiles} />
                    ))
                }
            </div>
        </div>
    </div>
)

export default SocialProfiles;                    
