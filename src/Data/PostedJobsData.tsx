const activeJobs = [
  {
    jobTitle: "Frontend Developer",
    location: "San Francisco, USA",
    posted: "5 days ago",
  },
  {
    jobTitle: "Backend Engineer",
    location: "London, UK",
    posted: "2 days ago",
  },
  {
    jobTitle: "Full Stack Developer",
    location: "Sydney, Australia",
    posted: "7 days ago",
  },
  {
    jobTitle: "UI/UX Designer",
    location: "Toronto, Canada",
    posted: "1 day ago",
  },
  {
    jobTitle: "Data Scientist",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "Software Engineer",
    location: "Berlin, Germany",
    posted: "6 days ago",
  },
  {
    jobTitle: "Mobile Developer",
    location: "Tokyo, Japan",
    posted: "4 days ago",
  },
  {
    jobTitle: "Product Manager",
    location: "Paris, France",
    posted: "9 days ago",
  },
  {
    jobTitle: "Marketing Specialist",
    location: "Amsterdam, Netherlands",
    posted: "12 days ago",
  },
  {
    jobTitle: "Sales Representative",
    location: "Dubai, UAE",
    posted: "10 days ago",
  },
  {
    jobTitle: "Web Developer",
    location: "Los Angeles, USA",
    posted: "8 days ago",
  },
  {
    jobTitle: "Systems Administrator",
    location: "Moscow, Russia",
    posted: "11 days ago",
  },
  {
    jobTitle: "Network Engineer",
    location: "Mumbai, India",
    posted: "14 days ago",
  },
  {
    jobTitle: "Business Analyst",
    location: "Chicago, USA",
    posted: "13 days ago",
  },
  { jobTitle: "HR Manager", location: "Rome, Italy", posted: "15 days ago" },
  {
    jobTitle: "Financial Analyst",
    location: "Singapore",
    posted: "16 days ago",
  },
  {
    jobTitle: "Graphic Designer",
    location: "Melbourne, Australia",
    posted: "17 days ago",
  },
  {
    jobTitle: "Content Writer",
    location: "Dublin, Ireland",
    posted: "18 days ago",
  },
  {
    jobTitle: "Project Manager",
    location: "Stockholm, Sweden",
    posted: "19 days ago",
  },
  {
    jobTitle: "QA Engineer",
    location: "Vancouver, Canada",
    posted: "20 days ago",
  },
  {
    jobTitle: "DevOps Engineer",
    location: "Austin, USA",
    posted: "21 days ago",
  },
  {
    jobTitle: "Security Analyst",
    location: "Zurich, Switzerland",
    posted: "22 days ago",
  },
  {
    jobTitle: "Database Administrator",
    location: "Atlanta, USA",
    posted: "23 days ago",
  },
  {
    jobTitle: "Technical Writer",
    location: "Copenhagen, Denmark",
    posted: "24 days ago",
  },
  {
    jobTitle: "UX Researcher",
    location: "San Diego, USA",
    posted: "25 days ago",
  },
  { jobTitle: "AI Engineer", location: "London, UK", posted: "26 days ago" },
  {
    jobTitle: "Machine Learning Engineer",
    location: "San Francisco, USA",
    posted: "27 days ago",
  },
  {
    jobTitle: "Data Engineer",
    location: "New York, USA",
    posted: "28 days ago",
  },
  {
    jobTitle: "Cloud Architect",
    location: "Seattle, USA",
    posted: "29 days ago",
  },
  {
    jobTitle: "Blockchain Developer",
    location: "Berlin, Germany",
    posted: "30 days ago",
  },
  {
    jobTitle: "Front End Developer",
    location: "San Jose, USA",
    posted: "31 days ago",
  },
  {
    jobTitle: "Back End Developer",
    location: "Los Angeles, USA",
    posted: "32 days ago",
  },
  {
    jobTitle: "Mobile App Developer",
    location: "Chicago, USA",
    posted: "33 days ago",
  },
  { jobTitle: "Web Designer", location: "Phoenix, USA", posted: "34 days ago" },
  {
    jobTitle: "Software Developer",
    location: "Dallas, USA",
    posted: "35 days ago",
  },
  {
    jobTitle: "Junior Developer",
    location: "Houston, USA",
    posted: "36 days ago",
  },
  {
    jobTitle: "Senior Developer",
    location: "Miami, USA",
    posted: "37 days ago",
  },
  {
    jobTitle: "Lead Developer",
    location: "Philadelphia, USA",
    posted: "38 days ago",
  },
  {
    jobTitle: "Full Stack Engineer",
    location: "San Antonio, USA",
    posted: "39 days ago",
  },
  {
    jobTitle: "Software Architect",
    location: "San Diego, USA",
    posted: "40 days ago",
  },
  {
    jobTitle: "Technical Lead",
    location: "Columbus, USA",
    posted: "41 days ago",
  },
  { jobTitle: "Data Analyst", location: "Boston, USA", posted: "42 days ago" },
  {
    jobTitle: "Marketing Manager",
    location: "Washington, D.C., USA",
    posted: "43 days ago",
  },
  {
    jobTitle: "Sales Manager",
    location: "Baltimore, USA",
    posted: "44 days ago",
  },
  {
    jobTitle: "Business Development Manager",
    location: "Las Vegas, USA",
    posted: "45 days ago",
  },
  {
    jobTitle: "Account Manager",
    location: "Portland, USA",
    posted: "46 days ago",
  },
  {
    jobTitle: "Customer Service Representative",
    location: "Oklahoma City, USA",
    posted: "47 days ago",
  },
  {
    jobTitle: "Human Resources Assistant",
    location: "New Orleans, USA",
    posted: "48 days ago",
  },
  {
    jobTitle: "Office Manager",
    location: "Cleveland, USA",
    posted: "49 days ago",
  },
  {
    jobTitle: "Administrative Assistant",
    location: "Kansas City, USA",
    posted: "50 days ago",
  },
  { jobTitle: "Teacher", location: "Albuquerque, USA", posted: "51 days ago" },
  { jobTitle: "Nurse", location: "Honolulu, USA", posted: "52 days ago" },
  { jobTitle: "Pharmacist", location: "Omaha, USA", posted: "53 days ago" },
  { jobTitle: "Dentist", location: "Raleigh, USA", posted: "54 days ago" },
  { jobTitle: "Physician", location: "Long Beach, USA", posted: "55 days ago" },
  {
    jobTitle: "Software Test Engineer",
    location: "Sacramento, USA",
    posted: "56 days ago",
  },
  { jobTitle: "UX Writer", location: "Mesa, USA", posted: "57 days ago" },
  {
    jobTitle: "Information Architect",
    location: "Virginia Beach, USA",
    posted: "58 days ago",
  },
  {
    jobTitle: "Game Developer",
    location: "Atlanta, USA",
    posted: "59 days ago",
  },
  {
    jobTitle: "Animator",
    location: "Colorado Springs, USA",
    posted: "60 days ago",
  },
  {
    jobTitle: "Sound Designer",
    location: "Tucson, USA",
    posted: "61 days ago",
  },
  {
    jobTitle: "Digital Marketing Manager",
    location: "Charlotte, USA",
    posted: "62 days ago",
  },
  {
    jobTitle: "Social Media Manager",
    location: "El Paso, USA",
    posted: "63 days ago",
  },
  {
    jobTitle: "SEO Specialist",
    location: "Memphis, USA",
    posted: "64 days ago",
  },
  { jobTitle: "Copywriter", location: "Baltimore, USA", posted: "65 days ago" },
  {
    jobTitle: "Public Relations Specialist",
    location: "Boston, USA",
    posted: "66 days ago",
  },
  {
    jobTitle: "Sales Engineer",
    location: "Seattle, USA",
    posted: "67 days ago",
  },
  {
    jobTitle: "Sales Director",
    location: "Portland, USA",
    posted: "68 days ago",
  },
  {
    jobTitle: "Customer Success Manager",
    location: "Nashville, USA",
    posted: "69 days ago",
  },
  {
    jobTitle: "Technical Support Specialist",
    location: "Milwaukee, USA",
    posted: "70 days ago",
  },
];

export { activeJobs };