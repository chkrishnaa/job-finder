import {
  IconMapPin,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
];

const talents = [
  {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation.",
    expectedCtc: "₹48 - 60 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-1.png", // Corrected URL
  },
  {
    name: "Aisha Khan",
    role: "Data Analyst",
    company: "Amazon",
    topSkills: ["Python", "SQL", "Tableau"],
    about:
      "Aisha is a Data Analyst at Amazon, where she excels at extracting meaningful insights from complex datasets. She is proficient in Python and SQL for data manipulation and Tableau for visualization. Aisha is dedicated to providing data-driven recommendations that contribute to strategic decision-making and operational efficiency.",
    expectedCtc: "₹35 - 45 LPA",
    location: "Seattle, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-2.png",
  },
  {
    name: "Carlos Rodriguez",
    role: "UX Designer",
    company: "Airbnb",
    topSkills: ["Figma", "User Research", "Wireframing"],
    about:
      "Carlos is a UX Designer at Airbnb, focusing on creating intuitive and user-friendly interfaces. His skills include user research, wireframing, and using Figma to design engaging experiences. Carlos is passionate about understanding user needs and translating them into effective design solutions that enhance user satisfaction.",
    expectedCtc: "₹40 - 50 LPA",
    location: "San Francisco, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-3.png",
  },
  {
    name: "Mei Lin",
    role: "Marketing Specialist",
    company: "Netflix",
    topSkills: ["SEO", "Social Media", "Content Strategy"],
    about:
      "Mei is a Marketing Specialist at Netflix, where she develops and implements successful marketing campaigns. Her expertise includes SEO, social media marketing, and content strategy. Mei is committed to driving brand awareness and engagement through creative and data-driven marketing initiatives.",
    expectedCtc: "₹30 - 40 LPA",
    location: "Los Angeles, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-4.png",
  },
  {
    name: "David Chen",
    role: "Product Manager",
    company: "Spotify",
    topSkills: ["Agile", "Product Roadmap", "Stakeholder Management"],
    about:
      "David is a Product Manager at Spotify, responsible for defining and executing product strategy. He is skilled in Agile methodologies, product roadmap development, and stakeholder management. David is focused on delivering innovative products that meet user needs and achieve business objectives.",
    expectedCtc: "₹55 - 70 LPA",
    location: "Stockholm, Sweden",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-5.png",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "Microsoft",
    topSkills: ["React", "JavaScript", "HTML/CSS"],
    about:
      "Priya is a Frontend Developer at Microsoft, specializing in building responsive and interactive user interfaces. Her proficiency in React, JavaScript, and HTML/CSS allows her to create engaging web applications. Priya is dedicated to writing clean, efficient code and staying up-to-date with the latest frontend technologies.",
    expectedCtc: "₹45 - 55 LPA",
    location: "Redmond, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-6.png",
  },
  {
    name: "Samuel Johnson",
    role: "Backend Developer",
    company: "Twitter",
    topSkills: ["Node.js", "Python", "SQL"],
    about:
      "Samuel is a Backend Developer at Twitter, focusing on building scalable and robust server-side applications. His expertise includes Node.js, Python, and SQL for database management. Samuel is committed to developing efficient and reliable backend systems that support high traffic and complex functionalities.",
    expectedCtc: "₹50 - 65 LPA",
    location: "San Francisco, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-7.png",
  },
  {
    name: "Olivia Wilson",
    role: "Sales Executive",
    company: "Salesforce",
    topSkills: ["CRM", "Sales Strategy", "Client Relations"],
    about:
      "Olivia is a Sales Executive at Salesforce, where she excels at driving sales growth and building strong client relationships. Her skills include CRM management, developing effective sales strategies, and fostering long-term client relations. Olivia is passionate about achieving sales targets and providing exceptional customer service.",
    expectedCtc: "₹42 - 52 LPA",
    location: "San Francisco, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-8.png",
  },
  {
    name: "Ethan Garcia",
    role: "Content Writer",
    company: "BuzzFeed",
    topSkills: ["Copywriting", "SEO Writing", "Storytelling"],
    about:
      "Ethan is a Content Writer at BuzzFeed, creating engaging and shareable content for online audiences. His skills include copywriting, SEO writing, and storytelling. Ethan is dedicated to crafting compelling narratives that resonate with readers and drive online engagement.",
    expectedCtc: "₹32 - 42 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-9.png",
  },
  {
    name: "Chloe Martinez",
    role: "DevOps Engineer",
    company: "Adobe",
    topSkills: ["AWS", "Docker", "CI/CD"],
    about:
      "Chloe is a DevOps Engineer at Adobe, focusing on automating and optimizing software development and deployment processes. Her expertise includes AWS, Docker, and CI/CD pipelines. Chloe is committed to improving efficiency and reliability through effective DevOps practices.",
    expectedCtc: "₹58 - 73 LPA",
    location: "San Jose, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-10.png",
  },
  {
    name: "Liam Robinson",
    role: "AI/ML Engineer",
    company: "NVIDIA",
    topSkills: ["TensorFlow", "PyTorch", "Deep Learning"],
    about:
      "Liam is an AI/ML Engineer at NVIDIA, developing and implementing machine learning models. His skills include TensorFlow, PyTorch, and deep learning techniques. Liam is passionate about pushing the boundaries of AI and creating innovative solutions.",
    expectedCtc: "₹65 - 80 LPA",
    location: "Santa Clara, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-11.png",
  },
  {
    name: "Ava Clark",
    role: "Cybersecurity Analyst",
    company: "IBM",
    topSkills: [
      "Network Security",
      "Incident Response",
      "Vulnerability Management",
    ],
    about:
      "Ava is a Cybersecurity Analyst at IBM, dedicated to protecting systems and data from cyber threats. Her expertise includes network security, incident response, and vulnerability management. Ava is committed to maintaining a secure digital environment and mitigating risks.",
    expectedCtc: "₹53 - 68 LPA",
    location: "Armonk, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-12.png",
  },
  {
    name: "Noah Lewis",
    role: "Mobile Developer",
    company: "Snapchat",
    topSkills: ["iOS Development", "Android Development", "Swift", "Kotlin"],
    about:
      "Noah is a Mobile Developer at Snapchat, building and maintaining iOS and Android applications. His skills include iOS and Android development using Swift and Kotlin. Noah is passionate about creating engaging and user-friendly mobile experiences.",
    expectedCtc: "₹47 - 62 LPA",
    location: "Los Angeles, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-13.png",
  },
  {
    name: "Isabella Young",
    role: "Game Developer",
    company: "Ubisoft",
    topSkills: ["Unity", "C#", "Game Design"],
    about:
      "Isabella is a Game Developer at Ubisoft, creating immersive and interactive gaming experiences. Her skills include Unity, C#, and game design. Isabella is dedicated to developing innovative and entertaining games that captivate players.",
    expectedCtc: "₹51 - 66 LPA",
    location: "Montreal, Canada",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-14.png",
  },
  {
    name: "Jackson Hall",
    role: "Cloud Architect",
    company: "Oracle",
    topSkills: ["AWS", "Azure", "Cloud Computing"],
    about:
      "Jackson is a Cloud Architect at Oracle, designing and implementing scalable cloud solutions. His expertise includes AWS, Azure, and cloud computing strategies. Jackson is focused on helping organizations leverage cloud technologies to achieve their business goals.",
    expectedCtc: "₹60 - 75 LPA",
    location: "Redwood City, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-15.png",
  },
  {
    name: "Sophia Allen",
    role: "UI Designer",
    company: "Pinterest",
    topSkills: ["User Interface Design", "Visual Design", "Adobe XD"],
    about:
      "Sophia is a UI Designer at Pinterest, creating visually appealing and user-friendly interfaces. Her skills include user interface design, visual design, and using Adobe XD. Sophia is passionate about crafting intuitive and engaging user experiences.",
    expectedCtc: "₹49 - 64 LPA",
    location: "San Francisco, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-16.png",
  },
  {
    name: "Lucas Wright",
    role: "Data Scientist",
    company: "LinkedIn",
    topSkills: ["Machine Learning", "Data Mining", "R"],
    about:
      "Lucas is a Data Scientist at LinkedIn, developing and applying machine learning algorithms. His expertise includes machine learning, data mining, and using R for statistical analysis. Lucas is committed to extracting valuable insights from data to improve user experiences.",
    expectedCtc: "₹68 - 83 LPA",
    location: "Mountain View, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-17.png",
  },
  {
    name: "Mia King",
    role: "Technical Writer",
    company: "Atlassian",
    topSkills: ["Technical Documentation", "API Documentation", "Confluence"],
    about:
      "Mia is a Technical Writer at Atlassian, creating clear and concise documentation for software products. Her skills include technical documentation, API documentation, and using Confluence. Mia is dedicated to providing users with helpful and accurate information.",
    expectedCtc: "₹44 - 59 LPA",
    location: "Sydney, Australia",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-18.png",
  },
  {
    name: "Elijah Green",
    role: "Network Engineer",
    company: "Cisco",
    topSkills: ["Network Administration", "Cisco Routers", "Firewalls"],
    about:
      "Elijah is a Network Engineer at Cisco, designing and maintaining network infrastructure. His expertise includes network administration, Cisco routers, and firewalls. Elijah is committed to ensuring network reliability and security.",
    expectedCtc: "₹57 - 72 LPA",
    location: "San Jose, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-19.png",
  },
  {
    name: "Harper Adams",
    role: "Business Analyst",
    company: "McKinsey",
    topSkills: ["Business Analysis", "Process Improvement", "Excel"],
    about:
      "Harper is a Business Analyst at McKinsey, analyzing business processes and providing strategic recommendations. Her skills include business analysis, process improvement, and using Excel for data analysis. Harper is focused on helping organizations achieve their operational and strategic goals.",
    expectedCtc: "₹46 - 61 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-20.png",
  },
  {
    name: "Benjamin Baker",
    role: "QA Engineer",
    company: "Electronic Arts (EA)",
    topSkills: ["Software Testing", "Test Automation", "Jira"],
    about:
      "Benjamin is a QA Engineer at EA, ensuring the quality of video games. His skills include software testing, test automation, and using Jira for issue tracking. Benjamin is dedicated to delivering high-quality and bug-free gaming experiences.",
    expectedCtc: "₹52 - 67 LPA",
    location: "Redwood City, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-21.png",
  },
  {
    name: "Amelia Carter",
    role: "Database Administrator",
    company: "MongoDB",
    topSkills: ["Database Management", "MongoDB", "SQL"],
    about:
      "Amelia is a Database Administrator at MongoDB, managing and optimizing databases. Her expertise includes database management, MongoDB, and SQL. Amelia is committed to ensuring data integrity and efficient database performance.",
    expectedCtc: "₹55 - 70 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-22.png",
  },
  {
    name: "Henry Phillips",
    role: "Project Manager",
    company: "Accenture",
    topSkills: ["Project Planning", "Risk Management", "Agile"],
    about:
      "Henry is a Project Manager at Accenture, leading and delivering IT projects. His skills include project planning, risk management, and Agile methodologies. Henry is focused on achieving project success and client satisfaction.",
    expectedCtc: "₹59 - 74 LPA",
    location: "Chicago, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-23.png",
  },
  {
    name: "Evelyn Mitchell",
    role: "Animator",
    company: "Pixar",
    topSkills: ["3D Animation", "Character Animation", "Maya"],
    about:
      "Evelyn is an Animator at Pixar, creating lifelike and expressive characters. Her skills include 3D animation, character animation, and using Maya. Evelyn is passionate about bringing stories to life through animation.",
    expectedCtc: "₹48 - 63 LPA",
    location: "Emeryville, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-24.png",
  },
  {
    name: "Owen Roberts",
    role: "Systems Administrator",
    company: "VMware",
    topSkills: ["System Administration", "Virtualization", "VMware vSphere"],
    about:
      "Owen is a Systems Administrator at VMware, managing virtualized infrastructure. His expertise includes system administration, virtualization, and VMware vSphere. Owen is committed to ensuring system stability and performance.",
    expectedCtc: "₹56 - 71 LPA",
    location: "Palo Alto, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-25.png",
  },
  {
    name: "Grace Turner",
    role: "Financial Analyst",
    company: "Goldman Sachs",
    topSkills: ["Financial Analysis", "Investment Analysis", "Excel"],
    about:
      "Grace is a Financial Analyst at Goldman Sachs, analyzing financial data and providing investment recommendations. Her skills include financial analysis, investment analysis, and using Excel. Grace is focused on providing accurate and insightful financial analysis.",
    expectedCtc: "₹50 - 65 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-26.png",
  },
  {
    name: "Carter Phillips",
    role: "Data Engineer",
    company: "Databricks",
    topSkills: ["Data Pipelines", "ETL", "Spark"],
    about:
      "Carter is a Data Engineer at Databricks, building and maintaining data pipelines. His expertise includes data pipelines, ETL processes, and Spark. Carter is committed to developing efficient and scalable data solutions.",
    expectedCtc: "₹58 - 73 LPA",
    location: "San Francisco, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-27.png",
  },
  {
    name: "Scarlett Collins",
    role: "Graphic Designer",
    company: "Nike",
    topSkills: ["Graphic Design", "Adobe Creative Suite", "Branding"],
    about:
      "Scarlett is a Graphic Designer at Nike, creating visually compelling designs. Her skills include graphic design, Adobe Creative Suite, and branding. Scarlett is passionate about creating impactful and aesthetically pleasing designs.",
    expectedCtc: "₹47 - 62 LPA",
    location: "Beaverton, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-28.png",
  },
  {
    name: "William Reed",
    role: "Robotics Engineer",
    company: "Boston Dynamics",
    topSkills: ["Robotics", "Control Systems", "Python"],
    about:
      "William is a Robotics Engineer at Boston Dynamics, designing and developing robotic systems. His expertise includes robotics, control systems, and Python programming. William is focused on pushing the boundaries of robotics technology.",
    expectedCtc: "₹67 - 82 LPA",
    location: "Waltham, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-29.png",
  },
  {
    name: "Victoria Cook",
    role: "AI Researcher",
    company: "DeepMind",
    topSkills: ["Artificial Intelligence", "Machine Learning", "Research"],
    about:
      "Victoria is an AI Researcher at DeepMind, dedicated to advancing the field of artificial intelligence. Her skills include artificial intelligence, machine learning, and conducting cutting-edge research. Victoria is passionate about developing innovative AI solutions that can transform industries and improve lives.",
    expectedCtc: "₹70 - 90 LPA",
    location: "London, United Kingdom",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-30.png",
  },
  {
    name: "James Murphy",
    role: "Full Stack Developer",
    company: "Accenture",
    topSkills: ["JavaScript", "Node.js", "React", "SQL"],
    about:
      "James is a Full Stack Developer at Accenture, proficient in both front-end and back-end development. His expertise includes JavaScript, Node.js, React, and SQL. James is dedicated to creating seamless and efficient web applications that meet client requirements.",
    expectedCtc: "₹62 - 77 LPA",
    location: "Chicago, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-31.png",
  },
  {
    name: "Emily Bailey",
    role: "Digital Marketing Manager",
    company: "HubSpot",
    topSkills: ["Digital Marketing", "SEO", "Content Marketing"],
    about:
      "Emily is a Digital Marketing Manager at HubSpot, driving online marketing strategies. Her skills include SEO, content marketing, and digital marketing analytics. Emily is passionate about creating engaging campaigns that drive traffic and conversions.",
    expectedCtc: "₹54 - 69 LPA",
    location: "Cambridge, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-32.png",
  },
  {
    name: "Daniel Rivera",
    role: "Embedded Systems Engineer",
    company: "Intel",
    topSkills: ["Embedded Systems", "C/C++", "Microcontrollers"],
    about:
      "Daniel is an Embedded Systems Engineer at Intel, developing firmware and software for embedded systems. His expertise includes C/C++, microcontrollers, and real-time operating systems. Daniel is focused on creating efficient and reliable embedded solutions.",
    expectedCtc: "₹65 - 80 LPA",
    location: "Santa Clara, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-33.png",
  },
  {
    name: "Madison Howard",
    role: "Product Designer",
    company: "Adobe",
    topSkills: ["Product Design", "User Experience", "Prototyping"],
    about:
      "Madison is a Product Designer at Adobe, creating intuitive and user-centered product experiences. Her skills include product design, user experience, and prototyping. Madison is passionate about designing products that delight and empower users.",
    expectedCtc: "₹56 - 71 LPA",
    location: "San Jose, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-34.png",
  },
  {
    name: "Joseph Ward",
    role: "Blockchain Developer",
    company: "ConsenSys",
    topSkills: ["Blockchain", "Solidity", "Smart Contracts"],
    about:
      "Joseph is a Blockchain Developer at ConsenSys, building decentralized applications and smart contracts. His expertise includes blockchain technology, Solidity, and smart contract development. Joseph is dedicated to exploring the potential of blockchain technology.",
    expectedCtc: "₹70 - 85 LPA",
    location: "New York, United States",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-35.png",
  },
  {
    name: "Aarav Patel",
    role: "Software Engineer",
    company: "Infosys",
    topSkills: ["Java", "Spring Boot", "Microservices"],
    about:
      "Aarav is a Software Engineer at Infosys, specializing in building scalable microservices. His expertise includes Java, Spring Boot, and cloud technologies. Aarav is passionate about developing robust and efficient software solutions.",
    expectedCtc: "₹55 - 70 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-36.png",
  },
  {
    name: "Sneha Reddy",
    role: "Data Scientist",
    company: "Flipkart",
    topSkills: ["Python", "Machine Learning", "Data Analysis"],
    about:
      "Sneha is a Data Scientist at Flipkart, applying machine learning to improve customer experience. Her skills include Python, machine learning algorithms, and data analysis. Sneha is dedicated to extracting insights from data to drive business decisions.",
    expectedCtc: "₹60 - 75 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-37.png",
  },
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    company: "Paytm",
    topSkills: ["React", "JavaScript", "HTML/CSS"],
    about:
      "Rahul is a Frontend Developer at Paytm, building interactive user interfaces. His expertise includes React, JavaScript, and modern frontend frameworks. Rahul is committed to creating seamless and engaging web experiences.",
    expectedCtc: "₹50 - 65 LPA",
    location: "Noida, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-38.png",
  },
  {
    name: "Priya Singh",
    role: "UX Designer",
    company: "Ola",
    topSkills: ["User Research", "Wireframing", "Figma"],
    about:
      "Priya is a UX Designer at Ola, focusing on user-centered design. Her skills include user research, wireframing, and using Figma to create intuitive interfaces. Priya is passionate about designing solutions that enhance user satisfaction.",
    expectedCtc: "₹52 - 67 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-39.png",
  },
  {
    name: "Vikram Kumar",
    role: "Backend Developer",
    company: "Zomato",
    topSkills: ["Node.js", "Python", "Database Management"],
    about:
      "Vikram is a Backend Developer at Zomato, building scalable server-side applications. His expertise includes Node.js, Python, and database management. Vikram is dedicated to developing efficient and reliable backend systems.",
    expectedCtc: "₹58 - 73 LPA",
    location: "Gurgaon, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-40.png",
  },
  {
    name: "Ananya Desai",
    role: "Digital Marketing Specialist",
    company: "Myntra",
    topSkills: ["SEO", "Social Media Marketing", "Content Strategy"],
    about:
      "Ananya is a Digital Marketing Specialist at Myntra, driving online marketing campaigns. Her skills include SEO, social media marketing, and content strategy. Ananya is committed to creating engaging content that boosts brand awareness.",
    expectedCtc: "₹48 - 63 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-41.png",
  },
  {
    name: "Arjun Menon",
    role: "Cloud Architect",
    company: "Wipro",
    topSkills: ["AWS", "Azure", "Cloud Infrastructure"],
    about:
      "Arjun is a Cloud Architect at Wipro, designing and implementing cloud solutions. His expertise includes AWS, Azure, and cloud infrastructure management. Arjun is focused on helping businesses leverage cloud technologies effectively.",
    expectedCtc: "₹65 - 80 LPA",
    location: "Hyderabad, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-42.png",
  },
  {
    name: "Divya Iyer",
    role: "QA Engineer",
    company: "TCS",
    topSkills: ["Software Testing", "Automation Testing", "Jira"],
    about:
      "Divya is a QA Engineer at TCS, ensuring software quality through rigorous testing. Her skills include software testing, automation testing, and using Jira for bug tracking. Divya is dedicated to delivering high-quality software products.",
    expectedCtc: "₹53 - 68 LPA",
    location: "Chennai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-43.png",
  },
  {
    name: "Karan Verma",
    role: "Mobile Developer",
    company: "ShareChat",
    topSkills: ["Android Development", "Kotlin", "Mobile UI/UX"],
    about:
      "Karan is a Mobile Developer at ShareChat, building engaging Android applications. His expertise includes Android development, Kotlin, and mobile UI/UX design. Karan is passionate about creating seamless mobile experiences.",
    expectedCtc: "₹56 - 71 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-44.png",
  },
  {
    name: "Ishita Kapoor",
    role: "AI/ML Engineer",
    company: "Fractal Analytics",
    topSkills: ["Machine Learning", "Deep Learning", "Python"],
    about:
      "Ishita is an AI/ML Engineer at Fractal Analytics, developing machine learning models. Her skills include machine learning algorithms, deep learning, and Python. Ishita is focused on applying AI to solve complex business problems.",
    expectedCtc: "₹68 - 83 LPA",
    location: "Mumbai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-45.png",
  },
  {
    name: "Manish Gupta",
    role: "Systems Administrator",
    company: "HCL Technologies",
    topSkills: [
      "Linux Administration",
      "Network Security",
      "Server Management",
    ],
    about:
      "Manish is a Systems Administrator at HCL Technologies, managing and maintaining IT infrastructure. His expertise includes Linux administration, network security, and server management. Manish is committed to ensuring system stability and security.",
    expectedCtc: "₹54 - 69 LPA",
    location: "Noida, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-46.png",
  },
  {
    name: "Simran Kaur",
    role: "Technical Writer",
    company: "Freshworks",
    topSkills: ["Technical Documentation", "API Documentation", "Confluence"],
    about:
      "Simran is a Technical Writer at Freshworks, creating clear and concise documentation. Her skills include technical documentation, API documentation, and using Confluence. Simran is dedicated to providing users with helpful information.",
    expectedCtc: "₹50 - 65 LPA",
    location: "Chennai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-47.png",
  },
  {
    name: "Rohan Joshi",
    role: "Data Engineer",
    company: "Swiggy",
    topSkills: ["Data Pipelines", "ETL", "Spark"],
    about:
      "Rohan is a Data Engineer at Swiggy, building and maintaining data pipelines. His expertise includes data pipelines, ETL processes, and Spark. Rohan is focused on developing scalable and efficient data solutions.",
    expectedCtc: "₹62 - 77 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-48.png",
  },
  {
    name: "Neha Banerjee",
    role: "Graphic Designer",
    company: "BookMyShow",
    topSkills: ["Graphic Design", "Adobe Creative Suite", "Branding"],
    about:
      "Neha is a Graphic Designer at BookMyShow, creating visually appealing designs. Her skills include graphic design, Adobe Creative Suite, and branding. Neha is passionate about creating impactful visual content.",
    expectedCtc: "₹47 - 62 LPA",
    location: "Mumbai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-49.png",
  },
  {
    name: "Siddharth Rao",
    role: "Cybersecurity Analyst",
    company: "Wipro",
    topSkills: [
      "Network Security",
      "Incident Response",
      "Vulnerability Assessment",
    ],
    about:
      "Siddharth is a Cybersecurity Analyst at Wipro, protecting systems from cyber threats. His expertise includes network security, incident response, and vulnerability assessment. Siddharth is committed to maintaining a secure digital environment.",
    expectedCtc: "₹58 - 73 LPA",
    location: "Hyderabad, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-50.png",
  },
  {
    name: "Tanvi Mehra",
    role: "Product Manager",
    company: "MakeMyTrip",
    topSkills: ["Product Strategy", "Agile", "Stakeholder Management"],
    about:
      "Tanvi is a Product Manager at MakeMyTrip, driving product development. Her skills include product strategy, Agile methodologies, and stakeholder management. Tanvi is focused on delivering products that meet user needs and business goals.",
    expectedCtc: "₹60 - 75 LPA",
    location: "Gurgaon, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-51.png",
  },
  {
    name: "Varun Iyer",
    role: "Blockchain Engineer",
    company: "Polygon Technology",
    topSkills: ["Blockchain", "Solidity", "Smart Contracts"],
    about:
      "Varun is a Blockchain Engineer at Polygon Technology, developing decentralized applications. His expertise includes blockchain technology, Solidity, and smart contract development. Varun is passionate about exploring the potential of blockchain.",
    expectedCtc: "₹72 - 87 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-52.png",
  },
  {
    name: "Deepika Patel",
    role: "Embedded Systems Engineer",
    company: "Tata Elxsi",
    topSkills: ["Embedded Systems", "C/C++", "Real-Time Systems"],
    about:
      "Deepika is an Embedded Systems Engineer at Tata Elxsi, developing firmware and software for embedded devices. Her skills include C/C++, real-time systems, and embedded Linux. Deepika is focused on creating efficient and reliable embedded solutions.",
    expectedCtc: "₹63 - 78 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-53.png",
  },
  {
    name: "Gaurav Sharma",
    role: "Full Stack Developer",
    company: "Mindtree",
    topSkills: ["JavaScript", "Node.js", "React", "SQL"],
    about:
      "Gaurav is a Full Stack Developer at Mindtree, proficient in both front-end and back-end development. His expertise includes JavaScript, Node.js, React, and SQL. Gaurav is dedicated to creating seamless web applications.",
    expectedCtc: "₹61 - 76 LPA",
    location: "Pune, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-54.png",
  },
  {
    name: "Kavita Reddy",
    role: "Data Analyst",
    company: "BigBasket",
    topSkills: ["Python", "SQL", "Data Visualization"],
    about:
      "Kavita is a Data Analyst at BigBasket, extracting insights from large datasets. Her skills include Python, SQL, and data visualization tools. Kavita is passionate about providing data-driven recommendations for business growth.",
    expectedCtumpc: "₹52 - 67 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-55.png",
  },
  {
    name: "Mohan Kumar",
    role: "UI/UX Designer",
    company: "PolicyBazaar",
    topSkills: ["User Interface Design", "User Experience", "Prototyping"],
    about:
      "Mohan is a UI/UX Designer at PolicyBazaar, creating intuitive and user-friendly interfaces. His skills include user interface design, user experience, and prototyping. Mohan is dedicated to enhancing user satisfaction.",
    expectedCtc: "₹55 - 70 LPA",
    location: "Gurgaon, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-56.png",
  },
  {
    name: "Nandini Singh",
    role: "DevOps Engineer",
    company: "Capgemini",
    topSkills: ["AWS", "Docker", "CI/CD"],
    about:
      "Nandini is a DevOps Engineer at Capgemini, automating and streamlining development processes. Her skills include AWS, Docker, and CI/CD pipelines. Nandini is committed to improving efficiency and reliability.",
    expectedCtc: "₹64 - 79 LPA",
    location: "Mumbai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-57.png",
  },
  {
    name: "Omkar Joshi",
    role: "Robotics Engineer",
    company: "GreyOrange",
    topSkills: ["Robotics", "Control Systems", "Python"],
    about:
      "Omkar is a Robotics Engineer at GreyOrange, designing and developing robotic systems. His skills include robotics, control systems, and Python programming. Omkar is focused on pushing the boundaries of robotics technology.",
    expectedCtc: "₹69 - 84 LPA",
    location: "Pune, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-58.png",
  },
  {
    name: "Parvati Iyer",
    role: "AI Researcher",
    company: "Arya.ai",
    topSkills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
    ],
    about:
      "Parvati is an AI Researcher at Arya.ai, advancing the field of artificial intelligence. Her skills include machine learning, natural language processing, and conducting cutting-edge research. Parvati is passionate about developing innovative AI solutions for financial services.",
    expectedCtc: "₹71 - 86 LPA",
    location: "Mumbai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-59.png",
  },
  {
    name: "Raghav Reddy",
    role: "Full Stack Developer",
    company: "BrowserStack",
    topSkills: ["JavaScript", "React", "Node.js", "MongoDB"],
    about:
      "Raghav is a Full Stack Developer at BrowserStack, building robust web applications. His expertise includes JavaScript, React, Node.js, and MongoDB. Raghav is committed to creating efficient and scalable solutions for cross-browser testing.",
    expectedCtc: "₹63 - 78 LPA",
    location: "Mumbai, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-60.png",
  },
  {
    name: "Sakshi Verma",
    role: "Data Analyst",
    company: "Grofers",
    topSkills: ["SQL", "Python", "Data Visualization"],
    about:
      "Sakshi is a Data Analyst at Grofers, extracting actionable insights from large datasets. Her skills include SQL, Python, and data visualization. Sakshi is passionate about using data to drive strategic decisions and improve operational efficiency.",
    expectedCtc: "₹53 - 68 LPA",
    location: "Gurgaon, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-61.png",
  },
  {
    name: "Tejas Desai",
    role: "UI/UX Designer",
    company: "PhonePe",
    topSkills: ["User Research", "Wireframing", "Prototyping"],
    about:
      "Tejas is a UI/UX Designer at PhonePe, focusing on creating intuitive and user-centered interfaces. His skills include user research, wireframing, and prototyping. Tejas is dedicated to enhancing the user experience for mobile payment solutions.",
    expectedCtc: "₹56 - 71 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-62.png",
  },
  {
    name: "Urvashi Singh",
    role: "DevOps Engineer",
    company: "Sprinklr",
    topSkills: ["AWS", "Docker", "Kubernetes"],
    about:
      "Urvashi is a DevOps Engineer at Sprinklr, automating and optimizing development processes. Her skills include AWS, Docker, and Kubernetes. Urvashi is committed to improving the efficiency and reliability of cloud-based infrastructure.",
    expectedCtc: "₹65 - 80 LPA",
    location: "Gurgaon, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-63.png",
  },
  {
    name: "Vivek Khanna",
    role: "Robotics Engineer",
    company: "Swaayatt Robots",
    topSkills: ["ROS", "Computer Vision", "Python"],
    about:
      "Vivek is a Robotics Engineer at Swaayatt Robots, developing autonomous driving technologies. His skills include ROS, computer vision, and Python. Vivek is passionate about creating innovative solutions for self-driving vehicles.",
    expectedCtc: "₹70 - 85 LPA",
    location: "Bhopal, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-64.png",
  },
  {
    name: "Yamini Iyer",
    role: "AI Researcher",
    company: "SigTuple",
    topSkills: ["Deep Learning", "Medical Imaging", "Python"],
    about:
      "Yamini is an AI Researcher at SigTuple, developing AI-powered solutions for medical diagnostics. Her skills include deep learning, medical imaging analysis, and Python. Yamini is dedicated to improving healthcare outcomes through AI.",
    expectedCtc: "₹72 - 87 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-65.png",
  },
  {
    name: "Zubin Patel",
    role: "Full Stack Developer",
    company: "Razorpay",
    topSkills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    about:
      "Zubin is a Full Stack Developer at Razorpay, building robust payment solutions. His expertise includes JavaScript, React, Node.js, and PostgreSQL. Zubin is committed to creating seamless and secure payment experiences.",
    expectedCtc: "₹64 - 79 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-66.png",
  },
  {
    name: "Aadya Sharma",
    role: "Data Analyst",
    company: "Dunzo",
    topSkills: ["SQL", "Python", "Tableau"],
    about:
      "Aadya is a Data Analyst at Dunzo, extracting insights from delivery data. Her skills include SQL, Python, and Tableau. Aadya is passionate about using data to optimize delivery operations and improve customer satisfaction.",
    expectedCtc: "₹54 - 69 LPA",
    location: "Bangalore, India",
    image:
      "https://raw.githubusercontent.com/chkrishnaa/Web-Project-Images/main/Job_Finder_Images/AvatarImages/Avatar-67.png",
  },
];

const profile = {
  name: "Krishnakumar Chaurashiya",
  role: "Software Engineer",
  company: "Google",
  location: "New York, United States",
  about:
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
  skills: [
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ],
  experience: [
    {
      title: "Language Model Intern",
      company: "Google AI",
      location: "Mountain View, CA, United States",
      startDate: "Jan 2023",
      endDate: "Mar 2023",
      description:
        "Worked on improving the coherence and fluency of generated text by experimenting with different decoding strategies.  Developed a novel approach to prompt engineering that increased the accuracy of question answering by 15%. Collaborated with a team of researchers to identify and mitigate biases in training data.",
    },
    {
      title: "Language Model Researcher",
      company: "Google AI",
      location: "Mountain View, CA, United States",
      startDate: "Apr 2023",
      endDate: "Sep 2023",
      description:
        "Conducted research on novel transformer architectures to enhance the model's ability to handle longer contexts.  Published a paper at a top-tier NLP conference detailing a new method for few-shot learning that improved performance on a variety of downstream tasks.  Presented research findings to internal teams and external stakeholders.",
    },
    {
      title: "Senior Language Model",
      company: "Google AI",
      location: "Mountain View, CA, United States",
      startDate: "Oct 2023",
      endDate: "Present",
      description:
        "Currently responsible for developing and deploying advanced language models for various Google products and services. Leading a team of engineers in the development of a new conversational AI system.  Focusing on improving the model's ability to engage in more natural and human-like dialogue, and ensuring the responsible and ethical use of AI.",
    },
    {
      title: "AI Writing Assistant",
      company: "Google",
      location: "Mountain View, CA, United States",
      startDate: "Jan 2024",
      endDate: "Present",
      description:
        "Assisted users with various writing tasks, including drafting emails, composing articles, and summarizing documents.  Integrated feedback from user interactions to continuously refine writing style and improve the accuracy and relevance of generated content.  Worked on features to detect and correct grammatical errors and suggest stylistic improvements.",
    },
    {
      title: "Code Generation Specialist",
      company: "Google",
      location: "Mountain View, CA, United States",
      startDate: "Mar 2024",
      endDate: "Present",
      description:
        "Developed and fine-tuned models for generating code in multiple programming languages, including Python, JavaScript, and Java.  Worked on improving the accuracy and efficiency of code generation, and on incorporating user-provided specifications and constraints.  Contributed to the development of tools and APIs that allow developers to easily integrate code generation capabilities into their workflows.",
    },
  ],
  certifications: [
    {
      name: "Advanced Natural Language Processing",
      issuer: "Google AI",
      issueDate: "Jan 2024",
      certificateId: "NLP-2024-001",
    },
    {
      name: "Large Language Models Fundamentals",
      issuer: "Google Cloud",
      issueDate: "Feb 2024",
      certificateId: "LLM-2024-002",
    },
    {
      name: "Machine Learning Professional",
      issuer: "Coursera",
      issueDate: "Mar 2024",
      certificateId: "ML-2024-003",
    },
  ],
};



export { searchFields, talents, profile };