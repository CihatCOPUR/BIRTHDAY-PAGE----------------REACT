import React from 'react';

const List = ({ person }) => {
  console.log(person);
  return (
    <>
      {person.map((person) => {
        const { id, name, age, image } = person;
        return <main className='mainclass'>

          <img width={"80px"} height={"100px"} src={image} alt={name} />
          <div className='text'>
            <h4>{name}</h4>
            <h4>{age} years old</h4>

          </div>
        </main>


      })}
    </>
  );
};

export default List;
