import React, { useContext } from 'react'
import { MarkerContext } from '../_context/MarkersState';
import { Tag } from './Tag';

export const TagList = ({markers, removeMarker}) => {
    console.log(markers)
      
    // const removeMarker = (marker) => {
    //     console.log(marker._lngLat.lng)
    // }

    return (
        <div>
            {markers.map(marker => (<Tag marker={marker} removeMarker={removeMarker} />))}
        </div>
    )
}



// import React, { useContext } from 'react';
// import { Transaction } from './Transaction';

// import { GlobalContext } from '../context/GlobalState';

// export const TransactionList = () => {
//   const { transactions } = useContext(GlobalContext);

//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
//       </ul>
//     </>
//   )
// }
