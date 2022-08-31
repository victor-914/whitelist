const NAVLISTARRAY = [
  {
    _id: 1,
    title: "Home",
    path: "/",
    className: "nav_item",
  },

  {
    _id: 2,
    title: "Services",
    className: "nav_item",
    path: "",
    submenu: [
      { _id: 1, subitem: "Consulting services", path: "consult" },
      { _id: 2, subitem: " Communication services", path: "ict" },
      { _id: 3, subitem: "Engineering services", path: "engineering" },
    ],
  },

  {
    _id: 3,
    title: "About us",
    path: "about",
    className: "nav_item",
  },
  {
    _id: 4,
    title: "Contact us",
    path: "contact",
    className: "nav_item",
  },
];

export default NAVLISTARRAY;
