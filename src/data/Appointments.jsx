export const calendarData = {
  month: 'October 2021',
  days: [
    {
      dayName: 'Mon',
      date: 25,
      appointments: [
        { time: '10:00' },
        { time: '11:00' },
        { time: '12:00' }
      ]
    },
    {
      dayName: 'Tues',
      date: 26,
      appointments: [
        { time: '08:00' },
        { time: '09:00', highlight: true },
        { time: '10:00' }
      ]
    },
    {
      dayName: 'Wed',
      date: 27,
      appointments: [
        { time: '12:00' },
        { time: '13:00' }
      ]
    },
    {
      dayName: 'Thurs',
      date: 28,
      appointments: [
        { time: '10:00' },
        { time: '11:00', highlight: true }
      ]
    },
    {
      dayName: 'Fri',
      date: 29,
      appointments: [
        { time: '14:00' },
        { time: '16:00' },
        { time: '15:00' }
      ]
    },
    {
      dayName: 'Sat',
      date: 30,
      appointments: [
        { time: '12:00' },
        { time: '14:00' }
      ]
    },
    {
      dayName: 'Sun',
      date: 31,
      appointments: [
        { time: '09:00' },
        { time: '10:00' },
        { time: '11:00' }
      ]
    }
  ],
  featuredAppointments: [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷'
    },
    {
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪'
    }
  ]
};

export const upcomingSchedule = {
  thursday: [
    {
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: '💉'
    },
    {
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon: '👁️'
    }
  ],
  saturday: [
    {
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: '❤️'
    },
    {
      title: 'Neurologist',
      time: '16:00 PM',
      icon: '🧠'
    }
  ]
};

export const activityData = {
  summary: '3 appointment on this week',
  days: [
    {
      day: 'Mon',
      values: [
        { height: 70, color: '#00D2DF' },
        { height: 0, color: '#3A44C3' }
      ]
    },
    {
      day: 'Tue',
      values: [
        { height: 90, color: '#00D2DF' },
        { height: 40, color: '#3A44C3' }
      ]
    },
    {
      day: 'Wed',
      values: [
        { height: 40, color: '#00D2DF' },
        { height: 20, color: '#3A44C3' }
      ]
    },
    {
      day: 'Thurs',
      values: [
        { height: 60, color: '#00D2DF' },
        { height: 80, color: '#3A44C3' }
      ]
    },
    {
      day: 'Fri',
      values: [
        { height: 50, color: '#00D2DF' },
        { height: 30, color: '#3A44C3' }
      ]
    },
    {
      day: 'Sat',
      values: [
        { height: 70, color: '#00D2DF' },
        { height: 10, color: '#3A44C3' }
      ]
    },
    {
      day: 'Sun',
      values: [
        { height: 60, color: '#00D2DF' },
        { height: 40, color: '#3A44C3' }
      ]
    }
  ]
};