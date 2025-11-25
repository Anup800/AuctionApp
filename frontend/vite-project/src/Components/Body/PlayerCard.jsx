import React from 'react';
// Assuming your image is named 'player_icon.png' and is in src/assets
import PlayerImage from '../../assets/react.svg'; 
// Adjust the path above if your asset is located elsewhere!

/**
 * Renders a card displaying a player's key information.
 * @param {object} player  - The player object from the database.
 */
//const player  = [{name:"anup", age: 12, PlayerRole :"batsman"},{name:"akash", age: 12, PlayerRole :"batsman"}];
const PlayerCard = ({player}) => {
    
    const { name, age, role } = player;

    return (
        <div 
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                margin: '15px',
                width: '250px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#f9f9f9'
            }}
        >
            {/* Image Section */}
            <img 
                src={PlayerImage} 
                alt={`${name}'s profile`} 
                style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    marginBottom: '15px',
                    border: '3px solid #3498db' 
                }}
            />

            {/* Details Section */}
            <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>
                {name}
            </h3>
            <p style={{ margin: '0 0 5px 0', fontSize: '1.1em', fontWeight: 'bold', color: '#3498db' }}>
                {role || 'Unassigned Role'}
            </p>
            <p style={{ margin: '0', color: '#7f8c8d' }}>
                Age: {age}
            </p>
        </div>
    );
};

export default PlayerCard;