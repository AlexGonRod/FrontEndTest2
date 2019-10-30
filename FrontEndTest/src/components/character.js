import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

export const query = useStaticQuery(graphql`
   query RandomCharacter {
        allRandomCharacter {
            edges{
                node{
                    name
                    thumbnail
                    professions
                }
            }
        }
    }
`);

const Character = props => {
  const characters = props.data.allRandomCharacter.edges;

  return (
      <div>
          {characters.map = (char, i) => {
              const userData = char.node;
              return (
                <div key={i}>
                    <p>Name: {userData.name}</p>
                    <img 
                        src={userData.thumbnail}
                        alt={userData.name} />
                    {/* <div>
                        <ul>
                            {userData.professions.map = (prof) => {
                                <li>{prof}</li>
                            }}
                        </ul>
                    </div> */}
                </div>
              )
          }};
      </div>
  );
};
export default Character;