import React from 'react';
import { motion } from 'framer-motion';
import { User, UserRound, Award } from 'lucide-react';

// Data extracted from the provided document
const teamMembers = [
  {
    name: 'Ashutosh Singh',
    gender: 'M',
    stream: 'BTECH',
    year: '3rd Year',
    isLeader: true, // New flag for the team leader
  },
  {
    name: 'Anu Kumari',
    gender: 'F',
    stream: 'B.S',
    year: '3rd Year',
  },
  {
    name: 'Indresh Vikram Bipul',
    gender: 'M',
    stream: 'BTECH',
    year: '3rd Year',
  },
  {
    name: 'Vadish Choudhary',
    gender: 'M',
    stream: 'BTECH',
    year: '3rd Year',
  },
  {
    name: 'Pratham Choudhari',
    gender: 'M',
    stream: 'BTECH',
    year: '3rd Year',
  },
  {
    name: 'Aryan Kumar Rathaur',
    gender: 'M',
    stream: 'BTECH',
    year: '3rd Year',
  },
];

const TeamTab = () => {
  return (
    <div className="p-8 md:p-12 bg-slate-50">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold animated-gradient-text">The Techno Wizards</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-xl">
          From the Indian Institute of Technology Kharagpur
        </p>
      </header>

      {/* Group Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className="bg-white rounded-xl shadow-2xl border p-4 aspect-video flex items-center justify-center">
          <img 
            src="/images/teamphoto.jpg" 
            alt="The Techno Wizards Team"
            className="rounded-lg object-cover w-full h-full"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x675/e2e8f0/334155?text=Our+Team+Photo' }}
          />
        </div>
      </motion.div>

      {/* Team Members Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border overflow-hidden"
      >
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Name</th>
              <th className="p-4 font-semibold text-slate-700">Gender</th>
              <th className="p-4 font-semibold text-slate-700">Stream</th>
              <th className="p-4 font-semibold text-slate-700">Year</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member.name} className="border-t hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-800 flex items-center gap-2">
                  {member.name}
                  {member.isLeader && <Award className="w-5 h-5 text-amber-500" title="Team Leader" />}
                </td>
                <td className="p-4 text-slate-600">
                  {member.gender === 'M' ? (
                    <span className="flex items-center gap-2"><User className="w-5 h-5 text-indigo-600" /> Male</span>
                  ) : (
                    <span className="flex items-center gap-2"><UserRound className="w-5 h-5 text-pink-600" /> Female</span>
                  )}
                </td>
                <td className="p-4 text-slate-600">{member.stream}</td>
                <td className="p-4 text-slate-600">{member.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TeamTab;