export const authorsTableData = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/authors");

    if (!res.ok) {
      throw new Error("Failed to fuck");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};





// export const fetchAuthors = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/api/authors");
//     if (!res.ok) throw new Error("Failed to fuck");
//     return await res.json();
//   } catch(err) {
//     console.error(err);
//     return [];
//   }
// };

// export const demoData = [
//   {
//     img: "/img/team-2.jpeg",
//     name: "John Michael",
//     email: "john@creative-tim.com",
//     job: ["Manager", "Organization"],
//     online: true,
//     numberofworker: "5",
//   },
//   {
//     img: "/img/team-1.jpeg",
//     name: "Alexa Liras",
//     email: "alexa@creative-tim.com",
//     job: ["Programator", "Developer"],
//     online: false,
//     numberofworker: "2",
//   },
//   {
//     img: "/img/team-4.jpeg",
//     name: "Laurent Perrier",
//     email: "laurent@creative-tim.com",
//     job: ["Executive", "Projects"],
//     online: true,
//     numberofworker: "7",
//   },
//   {
//     img: "/img/team-3.jpeg",
//     name: "Michael Levi",
//     email: "michael@creative-tim.com",
//     job: ["Programator", "Developer"],
//     online: true,
//     numberofworker: "1",
//   },
//   {
//     img: "/img/bruce-mars.jpeg",
//     name: "Bruce Mars",
//     email: "bruce@creative-tim.com",
//     job: ["Manager", "Executive"],
//     online: false,
//     numberofworker: "6",
//   },
//   {
//     img: "/img/team-2.jpeg",
//     name: "Alexander",
//     email: "alexander@creative-tim.com",
//     job: ["Programator", "Developer"],
//     online: false,
//     numberofworker: "2",
//   },
// ];

// // export default demoData;
