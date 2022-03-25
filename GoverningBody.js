import React, {useState} from 'react';
import './GoverningBody.css';
import ourteam from './API/OurTeam';

const GoverningBody = () => 
{
    const [teamData, setteamData] = useState(ourteam);
    console.log(teamData);
    return (
    <> 
        <section className='gov_body my-5'>
            <h2>Meet The Team</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                        {teamData.map((curElem) =>
                            {
                                const {id, imgscr, name, info} = curElem;
                                return(
                                    <>
                                    <div className='col-md-4 col-10 mx-auto' key={id}>
                                        <div className="card">
                                            <img src={imgscr} alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{info}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                );
                            }
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
    
};

export default GoverningBody;

