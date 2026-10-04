
  const employees = [
{
  id: 1,
  name: "Ali",
email:"ali@gmail.com"  ,

  password: "123",
  completedTask: 3,
  newTask: 1,
  pendingTask: 1,
  failed: 1,

  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Design Homepage",
      taskDescription: "Create a modern and responsive homepage design.",
      taskDate: "2026-09-20",
      category: "Design"
    },

    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Create Login UI",
      taskDescription: "Create a modern and responsive login page.",
      taskDate: "2026-09-22",
      category: "Design"
    },





  ]
},

{
  id: 2,
  name: "Sara",
  email: "sara@gmail.com",
  password: "123",
  completedTask: 4,
  newTask: 1,
  pendingTask: 1,
  failed: 3,

  tasks: [
    {
      active: false,
      newTask: false,
      complete: false,
      failed: true,
      taskTitle: "Develop Dashboard",
      taskDescription: "Develop the main employee dashboard.",
      taskDate: "2026-09-22",
      category: "Development"
    },

  ]
},

{
  id: 3,
  name: "Ahmed",
  email: "ahmed@gmail.com",
  password: "123",
  completedTask: 2,
  newTask: 2,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Create Login Page",
      taskDescription: "Create a responsive login page.",
      taskDate: "2026-09-23",
      category: "Development"
    }
  ]
},

{
  id: 4,
  name: "Hassan",
  email: "hassan@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 1,
  pendingTask: 2,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: false,
      complete: false,
      failed: false,
      taskTitle: "Design Navbar",
      taskDescription: "Design a modern responsive navbar.",
      taskDate: "2026-09-24",
      category: "Design"
    }
  ]
},

{
  id: 5,
  name: "Ayesha",
  email: "ayesha@gmail.com",
  password: "123",
  completedTask: 4,
  newTask: 2,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Create Landing Page",
      taskDescription: "Create a modern landing page.",
      taskDate: "2026-09-25",
      category: "Design"
    }
  ]
},

{
  id: 6,
  name: "Usman",
  email: "usman@gmail.com",
  password: "123",
  completedTask: 2,
  newTask: 1,
  pendingTask: 2,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "API Integration",
      taskDescription: "Integrate the required API.",
      taskDate: "2026-09-26",
      category: "Development"
    }
  ]
},

{
  id: 7,
  name: "Zain",
  email: "zain@gmail.com",
  password: "123",
  completedTask: 5,
  newTask: 1,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Website Testing",
      taskDescription: "Test website functionality.",
      taskDate: "2026-09-27",
      category: "Testing"
    }
  ]
},

{
  id: 8,
  name: "Hamza",
  email: "hamza@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 2,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Create Dashboard UI",
      taskDescription: "Create dashboard user interface.",
      taskDate: "2026-09-28",
      category: "Design"
    }
  ]
},

{
  id: 9,
  name: "Bilal",
  email: "bilal@gmail.com",
  password: "123",
  completedTask: 2,
  newTask: 1,
  pendingTask: 2,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: false,
      complete: false,
      failed: false,
      taskTitle: "Fix Website Bugs",
      taskDescription: "Fix reported website bugs.",
      taskDate: "2026-09-29",
      category: "Development"
    }
  ]
},

{
  id: 10,
  name: "Fatima",
  email: "fatima@gmail.com",
  password: "123",
  completedTask: 4,
  newTask: 1,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Social Media Design",
      taskDescription: "Create social media graphics.",
      taskDate: "2026-09-30",
      category: "Marketing"
    }
  ]
},

{
  id: 11,
  name: "Omer",
  email: "omer@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 2,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Database Setup",
      taskDescription: "Setup project database.",
      taskDate: "2026-10-01",
      category: "Backend"
    }
  ]
},

{
  id: 12,
  name: "Muneeb",
  email: "muneeb@gmail.com",
  password: "123",
  completedTask: 2,
  newTask: 1,
  pendingTask: 2,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: false,
      complete: false,
      failed: false,
      taskTitle: "Create Contact Page",
      taskDescription: "Create responsive contact page.",
      taskDate: "2026-10-02",
      category: "Development"
    }
  ]
},

{
  id: 13,
  name: "Hira",
  email: "hira@gmail.com",
  password: "123",
  completedTask: 5,
  newTask: 1,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Logo Design",
      taskDescription: "Design a professional company logo.",
      taskDate: "2026-10-03",
      category: "Design"
    }
  ]
},

{
  id: 14,
  name: "Saad",
  email: "saad@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 2,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Authentication System",
      taskDescription: "Implement user authentication.",
      taskDate: "2026-10-04",
      category: "Development"
    }
  ]
},

{
  id: 15,
  name: "Laiba",
  email: "laiba@gmail.com",
  password: "123",
  completedTask: 4,
  newTask: 1,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Instagram Campaign",
      taskDescription: "Prepare Instagram marketing campaign.",
      taskDate: "2026-10-05",
      category: "Marketing"
    }
  ]
},

{
  id: 16,
  name: "Danish",
  email: "danish@gmail.com",
  password: "123",
  completedTask: 2,
  newTask: 2,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Performance Optimization",
      taskDescription: "Improve website performance.",
      taskDate: "2026-10-06",
      category: "Development"
    }
  ]
},

{
  id: 17,
  name: "Iqra",
  email: "iqra@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 1,
  pendingTask: 2,
  failed: 1,
  tasks: [
    {
      active: true,
      newTask: false,
      complete: false,
      failed: false,
      taskTitle: "SEO Optimization",
      taskDescription: "Optimize website SEO.",
      taskDate: "2026-10-07",
      category: "SEO"
    }
  ]
},

{
  id: 18,
  name: "Rehan",
  email: "rehan@gmail.com",
  password: "123",
  completedTask: 4,
  newTask: 2,
  pendingTask: 1,
  failed: 1,
  tasks: [
    {
      active: false,
      newTask: false,
      complete: true,
      failed: false,
      taskTitle: "Final Website Review",
      taskDescription: "Review the complete website.",
      taskDate: "2026-10-08",
      category: "Testing"
    }
  ]
},

{
  id: 19,
  name: "Maryam",
  email: "maryam@gmail.com",
  password: "123",
  completedTask: 3,
  newTask: 1,
  pendingTask: 1,
  failed: 2,
  tasks: [
    {
      active: true,
      newTask: true,
      complete: false,
      failed: false,
      taskTitle: "Mobile Responsive Design",
      taskDescription: "Make the website mobile responsive.",
      taskDate: "2026-10-09",
      category: "Design"
    }
  ]
}

];


const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

// 
// export const setLocalstroge = () => {
//   if (!localStorage.getItem("employees")) {
//     localStorage.setItem("employees", JSON.stringify(employees));
//   }

//   if (!localStorage.getItem("admin")) {
//     localStorage.setItem("admin", JSON.stringify(admin));
//   }
// };

export const setLocalstroge = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// export const setLocalstroge = () => {
//   localStorage.setItem("employees", JSON.stringify(employees));
//   localStorage.setItem("admin", JSON.stringify(admin));
// };




export const getLocalstroge = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};




export const  setLoggedInuser = (user) => {

  localStorage.setItem("LoggedInUser", JSON.stringify (user));
  
};


 export const getLoggedInuser = () => {
  return    JSON.parse(localStorage.getItem("LoggedInUser"));


}

