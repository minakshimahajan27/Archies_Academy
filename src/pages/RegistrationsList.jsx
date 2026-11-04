
// import React, { useEffect, useMemo, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const API = 'http://localhost:8000';

// function FashionShowParticipants() {
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [search, setSearch] = useState('');
//   const [category, setCategory] = useState('All');

//   const fetchParticipants = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       const response = await fetch(
//         `${API}/api/admin/fashion-show/registrations`
//       );

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || 'Participants load nahi hue');
//       }

//       const list = Array.isArray(result)
//         ? result
//         : result.registrations || result.data || [];

//       setParticipants(list);
//     } catch (err) {
//       setError(err.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchParticipants();
//   }, []);

//   const kidsCount = participants.filter(
//     p => p.category?.toLowerCase() === 'kids'
//   ).length;

//   const adultsCount = participants.filter(
//     p => p.category?.toLowerCase() === 'adults'
//   ).length;

//   const modelingCount = participants.filter(
//     p => p.category?.toLowerCase() === 'modeling'
//   ).length;

//   const filteredParticipants = useMemo(() => {
//     return participants.filter(p => {
//       const matchesCategory =
//         category === 'All' ||
//         p.category?.toLowerCase() === category.toLowerCase();

//       const searchText = search.toLowerCase();

//       const matchesSearch =
//         (p.name || '').toLowerCase().includes(searchText) ||
//         (p.mobile || '').toLowerCase().includes(searchText) ||
//         (p.email || '').toLowerCase().includes(searchText);

//       return matchesCategory && matchesSearch;
//     });
//   }, [participants, category, search]);

//   const getStatusClass = status => {
//     if (status === 'Paid') return 'success';
//     if (status === 'Rejected') return 'danger';
//     return 'warning';
//   };

//   return (
//     <div
//       className="container-fluid py-4"
//       style={{ background: '#fffaf2', minHeight: '100vh' }}
//     >
//       <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 gap-2">
//         <div>
//           <h2 className="fw-bold">Fashion Show Participants</h2>
//           <p className="text-muted">All registered participants</p>
//         </div>

//         <button className="btn btn-dark" onClick={fetchParticipants}>
//           Refresh List
//         </button>
//       </div>

//       <div className="row g-3 mb-4">
//         {[
//           { title: 'Total Participants', count: participants.length },
//           { title: 'Kids', count: kidsCount },
//           { title: 'Adults', count: adultsCount },
//           { title: 'Modeling', count: modelingCount }
//         ].map(item => (
//           <div className="col-md-3" key={item.title}>
//             <div className="card border-0 shadow-sm p-3 h-100">
//               <p className="text-muted mb-1">{item.title}</p>
//               <h2 className="fw-bold">{item.count}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="card border-0 shadow-sm p-3">
//         <div className="row g-2 mb-3">
//           <div className="col-md-6">
//             <input
//               className="form-control"
//               placeholder="Search name, mobile or email..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//             />
//           </div>

//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={category}
//               onChange={e => setCategory(e.target.value)}
//             >
//               <option value="All">All Categories</option>
//               <option value="Kids">Kids</option>
//               <option value="Adults">Adults</option>
//               <option value="Modeling">Modeling</option>
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <p className="text-center py-4">Loading participants...</p>
//         ) : error ? (
//           <div className="alert alert-danger">{error}</div>
//         ) : filteredParticipants.length === 0 ? (
//           <p className="text-center text-muted py-4">
//             No participants found.
//           </p>
//         ) : (
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover align-middle">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Category</th>
//                   <th>Mobile</th>
//                   <th>Email</th>
//                   <th>Payment</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredParticipants.map((person, index) => (
//                   <tr key={person._id || index}>
//                     <td>{index + 1}</td>
//                     <td>{person.name || '-'}</td>
//                     <td>{person.age ?? '-'}</td>
//                     <td>{person.category || '-'}</td>
//                     <td>{person.mobile || '-'}</td>
//                     <td>{person.email || '-'}</td>
//                     <td>
//                       <span className={`badge text-bg-${getStatusClass(person.paymentStatus)}`}>
//                         {person.paymentStatus || 'Pending'}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <p className="text-muted mb-0">
//           Showing {filteredParticipants.length} of {participants.length} participants
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FashionShowParticipants;
import React from 'react'

export default function RegistrationsList() {
  return (
    <div>RegistrationsList</div>
  )
}
